let id = 1;
export default class User{
    userName: string;
    img: string;//人物icon
    money: number;//持有钱数
    id: number;
    protectCard: number;//保护卡数量
    updateStar: number;//升级星数量
    diamond: number;//钻石数量 
    bomb: number;//炸弹数量
    bankMoney: number;//每次经过银行 银行给的福利钱数
    tax: number;//赚的钱税收比例
    curStep: number;//用于计算是否经过银行
    gridArea: string;//当前位置
    stopCount: number;//停下的回合数

    constructor(
        {userName,
        money,
        bankMoney,
        img,
        tax,
    }:{
        userName: string,
        money: number;
        bankMoney: number
        img: string,
        tax: number
        }
    ){
        this.userName = userName;
        this.img = img;
        this.money = money;
        this.id = id++;
        this.protectCard = 0;
        this.updateStar = 0;
        this.diamond = 0;
        this.bomb = 0;
        this.bankMoney = bankMoney;
        this.tax = tax;
        this.curStep = 0;
        this.gridArea = '1/1/1/2';
    }

    addMoney(num: number): void {
        this.money += num * this.tax;
    }
    minusMoney(num: number): void {
        this.money -= num;
    }
    shopping(type: number, num: number): void {//在超市购物
        switch(type){
            case 1:
                this.protectCard++;
                break;
            case 2:
                this.updateStar++;
                break;
            case 3:
                this.diamond++;
                break;
            case 4: 
                this.bomb++;
                break;
        }
        this.minusMoney(num);
    }
    goAhead(num: number): void {

    this.addStep(num);
    const gridStr = this.gridArea;
    const gridArr = gridStr.split('/').map(Number);
    if (gridArr[2] === 1) {
      const tempColumn = gridArr[3] + num;
      if (gridArr[2] === 1) {
        if (tempColumn < 14) {
          gridArr[3] = tempColumn;
          gridArr[1] = tempColumn - 1;
        } else {
          const diffColumn = tempColumn - 13;
          gridArr[1] = 12;
          gridArr[3] = 13;
          gridArr[0] = gridArr[0] + diffColumn;
          gridArr[2] = gridArr[0];
        }
      }
    } else if (
      gridArr[3] === 13 &&
      gridArr[0] !== 9
    ) {
      const tempRow = gridArr[2] + num;
      if (tempRow < 10) {
        gridArr[2] = tempRow;
        gridArr[0] = tempRow;
      } else {
        const diffRow = tempRow - 8;
        gridArr[0] = 9;
        gridArr[2] = 9;
        gridArr[1] = 13 - diffRow;
        gridArr[3] = gridArr[1] + 1;
      }
    } else if (
      gridArr[0] === 9 &&
      gridArr[1] !== 1
    ) {
      const tempColumn = gridArr[1] - num;
      if (tempColumn > 0) {
        gridArr[1] = tempColumn;
        gridArr[3] = gridArr[1] + 1;
      } else {
        gridArr[0] = 9 + tempColumn - 1;
        gridArr[2] = gridArr[0];
        gridArr[1] = 1;
        gridArr[3] = 2;
      }
    } else {
      const tempRow = gridArr[0] - num;
      if (tempRow > 0) {
        gridArr[0] = tempRow;
        gridArr[2] = tempRow;
      } else {
        gridArr[0] = 1;
        gridArr[2] = 1;
        gridArr[1] = -tempRow + 2;
        gridArr[3] = gridArr[1] + 1;
      }
    }
    this.gridArea = gridArr.join("/").toString();
    }
    addStep(num: number): void {
        const furStep = num + this.curStep;
        if (this.curStep < 35 && furStep > 34) {
          this.money += 1000;
        }
        this.curStep = furStep < 38 ? furStep : furStep - 38;
    }
    buyArea(num: number, diamond: number): void {
        this.minusMoney(num);
        this.diamond -= diamond;
    }
    buildHouse(num: number): void {
        this.minusMoney(num);
    }
    updateHouse(updateStar: number): void {
        this.updateStar -= updateStar;
        this.minusMoney(200)
    }
    useBomb(bomb: number): void {
        this.bomb -= bomb;
    }
    useProtectCard(card: number): void {
        this.protectCard -= card;
    }
}