import _ from 'lodash';
import './style.scss';

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack1'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  let xxx123 = 20
  console.log(xxx123)
  document.body.appendChild(component());