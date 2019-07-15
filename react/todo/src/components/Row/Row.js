import React from 'react';
import Suc from '../Suc_flag/Suc.js';
import MyBtn from '../Mybtn/MyBtn.js';
import './Row.css';
import ChangeInput from '../ChangeInput/ChangeInput';

function Row(props) {
  const {title, suc, edit, id} = props.task; //деструктуризация
  const styles = suc ? " my-title select" : "my-title";
  let label = edit ? <ChangeInput title={title} id={id} UpdateTask={props.UpdateTask}/> : <span  className={styles}>{title}</span>
    return (
    <tr>
      <td>
        <Suc flag={suc} SelectTask={props.SelectTask} id={id}/>
      </td>
      <td>
        {label}
        <span className="my-space"></span>
      </td>
      <td>
      <span className="my-space"></span>
        <MyBtn 
          url="#" 
          cl="my-change"
          MyClick={ ()=>props.EditTask(id) }
        />
      </td>
      <td>
        <MyBtn url="#" cl="my-delete"
        MyClick={ ()=>props.DeleteTask(id) }
        />
      </td>
    </tr>
  );
}
export default Row;
