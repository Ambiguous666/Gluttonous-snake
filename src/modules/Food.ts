class Food{
  element:HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // !表示element不为空
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是10，最大是290
    // 蛇移动一次就是一格，一格的大小为10，所以要求食物的坐标为10的倍数
    let top = Math.floor(Math.random()*30)*10;
    let left = Math.floor(Math.random()*30)*10;

    this.element.style.left = left+'px';
    this.element.style.top = top+'px';
  }
  
}

export default Food;