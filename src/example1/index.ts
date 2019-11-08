import './style.css';
import style from '!!raw-loader!./nested/style.css';
document.body.innerHTML = style;
console.log(style);
