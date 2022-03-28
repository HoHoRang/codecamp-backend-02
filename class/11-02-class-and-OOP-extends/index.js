class SkyUnit {
  run = () => {
    console.log("날라서 도망가자!!!");
  };
}

class GroundUnit {
  run = () => {
    console.log("뛰어서 도망가자!!!");
  };
}

class Monster extends SkyUnit {
  power = 10;

  constructor(aaa) {
    super(300);
  }

  attack = () => {
    console.log("공격하자!!!");
    console.log("내 공격력은 " + this.power + " 이야!!!");
  };
}

const myMonster1 = new Monster(50);

myMonster1.attack();
myMonster1.run();
