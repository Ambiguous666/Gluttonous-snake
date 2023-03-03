// 游戏控制器，控制其他所有的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
  // 定义三个属性
  // 蛇
  snake:Snake;
  // 食物
  food:Food;
  // 记分牌
  scorePanel:ScorePanel;

  // 创建一个属性来存储蛇的移动方向(也就是按键方向)
  direction: string='';

  // 控制游戏是否结束
  isLive =true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  // 游戏的初始化方法，调用后游戏即开始
  init(){
    document.addEventListener('keydown',this.keydownHandler.bind(this));
    this.run();
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){
    this.direction = event.key;
  }

  // 创建一个控制蛇移动的方法
  run(){
    /* 根据方向（this.direction）来使蛇的位置改变
      向上 top 减少
      向下 top 增加
      向左 left 减少
      向右 right 增加
    */

    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch(this.direction){
      case "ArrowUp":
        Y -= 10;
        break;
      
      case "ArrowDown":
        Y += 10;
        break;

      case "ArrowLeft":
        X -= 10;
        break;
      
      case "ArrowRight": 
        X += 10;
        break;
    }

    // 检查蛇是否迟到了食物
    this.checkEat(X,Y);

    try{
      this.snake.X = X;
      this.snake.Y = Y;
    }catch(e:any){
      alert(e.message);
      this.isLive = false;
    }
    

    this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
  }

  // 定义一个方法用来检查蛇是否迟到食物
  checkEat(X:number, Y:number){
    if(X === this.food.X && Y === this.food.Y){
      console.log('吃到食物了');
      this.food.change();

      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }


}

export default GameControl;