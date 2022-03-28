class Car {
  type;
  power;
  color;

  constructor(type, power, color) {
    this.type = type;
    this.power = power;
    this.color = color;
  }

  departure = () => {
    console.log("자동차 출발");
    console.log("기종: " + this.type);
    console.log("마력: " + this.power);
    console.log("색깔: " + this.color);
  };

  stop = () => {
    console.log("자동차 정지");
  };
}

const myCar = new Car("그랜저", "100", "흰색");

myCar.departure();
myCar.stop();
