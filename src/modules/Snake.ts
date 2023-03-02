class Snake{
  // 表示蛇头的元素

  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies:HTMLCollection
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
    this.head.style.left = value+'px';
  }

  // 设置蛇头的Y轴坐标
  set Y(value:number){
    this.head.style.top = value+'px';
  }

  // 蛇增加身体的方法
  addBody(){
    // 加在最后
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
}