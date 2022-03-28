import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "../../email.js";
import { maskPersonal, getOpenGraph } from "../../utils.js";
import { User } from "../../models/user.model.js";
import { Token } from "../../models/token.model.js";

export class UserService {
  obj = {};

  constructor(obj) {
    this.obj = obj;
  }

  getPhoneInfo = async () => {
    return await Token.findOne({ phone: this.obj.phone });
  };

  saveUserInfo = async () => {
    const ogObject = await getOpenGraph(this.obj.prefer);

    const saveId = await new User({
      ...this.obj,
      og: ogObject,
      personal: await maskPersonal(this.obj.personal),
    }).save();

    return String(saveId._id);
  };

  sendUserMail = async () => {
    const mailContent = getWelcomeTemplate(
      this.obj.name,
      this.obj.phone,
      this.obj.prefer
    );

    await sendTemplateToEmail(this.obj.email, mailContent);
  };

  getUserList = async () => {
    // User 목록 리턴
    return await User.find();
  };
}
