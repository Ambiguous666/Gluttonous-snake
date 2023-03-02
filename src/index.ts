import './style/index.less'
import Food from './modules/Food'

const food = new Food();
console.log(food.X, food.Y);

food.change();
console.log(food.X,food.Y);

