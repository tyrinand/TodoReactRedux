import React from 'react';
import './MyBtn.css';
function MyBtn(props) {
    return (
        <a href={props.url} title="изменить" onClick={props.MyClick}>
          <div className={props.cl}></div>
        </a>
    );
}
export default MyBtn;