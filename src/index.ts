import './style.css';
import style from '!!raw-loader!./style.css';
document.body.innerHTML = style;
console.log(style);
