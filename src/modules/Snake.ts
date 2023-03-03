class Snake{
  // 表示蛇头的元素

  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies:HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    // 取蛇的第一个div
    this.head = document.querySelector('#snake>div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇头坐标
  get X(){
    return this.head.offsetLeft;
  }

  // 获取蛇的Y轴坐标
  get Y(){
    return this.head.offsetTop;
  }

  // 设置蛇头的坐标
  set X(value:number){
    if(this.X === value) return;
    
    if(value<0||value>290){
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    // 修改x时，蛇在左右移动，蛇在向左移动时，不能向右调头，反之亦然
    if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value>this.X){
        // 说明此时蛇正在向左走
        value = this.X -10;
      }else{
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();

    this.head.style.left = value+'px';
    // 检查有没有撞到自己
    this.checkHeadBody();

  }

  // 设置蛇头的Y轴坐标
  set Y(value:number){
    if(this.Y === value) return ;

    if(value<0||value>290){
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    // 修改y时，蛇在上下移动，蛇在向下移动时，不能向上调头，反之亦然
    if(this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetTop === value){
      if(value>this.Y){
        value = this.Y - 10;
      }else{
        value = this.Y + 10;
      }
    }



    // 移动身体
    this.moveBody();

    this.head.style.top = value+'px';
    // 检查有没有撞到自己
    this.checkHeadBody();
  }


  // 检查蛇头是否撞到了身体
  checkHeadBody(){
    for(let i=1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error("撞到自己了");
      }
    }
  }

  // 蛇增加身体的方法
  addBody(){
    // 加在最后
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }


  // 添加一个蛇身体移动的方法
  moveBody() {
    
    /*
    将后面的身体设置为前边身体的位置
    */
   // 遍历获取所有的身体
   for(let i=this.bodies.length-1;i>0;i--){
    let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
    let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

    (this.bodies[i] as HTMLElement).style.left = X +'px';
    (this.bodies[i] as HTMLElement).style.top = Y + 'px';
   }
  }
}

export default Snake;