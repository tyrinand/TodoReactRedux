import React from 'react';
import './Footer.css';

function Footer(props){
   const { all, fulfilled, EditFilter, filter } = props;
   const filters = [{ val: 'All', title: "Все"}, { val: 'no_fulfilled', title: "Активные"}, { val: 'fulfilled', title: "Выполненые"}];


   let buttons = filters.map( (item)=>{
    if(item.val === filter)
        return <button onClick={()=>EditFilter(item.val)} className='active' key={item.val}>{item.title}</button>
    else
        return <button onClick={()=>EditFilter(item.val)} key={item.val}>{item.title}</button>
   })
   
    return(
        <div className="footer">
            <span>Выполненны задачи {fulfilled}/{all} </span> 
            <>
                {buttons}   
            </>
        </div>
    )
}
export default Footer;