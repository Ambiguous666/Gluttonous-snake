class ScorePanel{
  score = 0;
  level = 1;
  scoreEle:HTMLElement;
  levelEle:HTMLElement;

  // 设置一个变量限制等级
  maxLevel:number; // 最大等级
  upScore:number; //每升一级所需要的分数

  constructor(maxLevel:number =10, upScore:number=10) {
    // ！表示这两个不可能为空 不加会报错
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置一个加分的方法
  addScore(){
    this.scoreEle.innerHTML = ++this.score + '';

    // 判断分数是多少
    if(this.score%this.upScore===0){
      this.levelUp();
    }
  }

  // 等级提升的方法
  levelUp() {
    if(this.level<this.maxLevel){
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;