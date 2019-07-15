import React from 'react';
import logo from '../../img/loading.gif';
import './Prerol.css';

function Prerol(){
    return(
        <tr>
            <td>
                <div className='Prerol'>
                    <img src={logo} alt="Prerol" />
                </div>
            </td>
        </tr>
    )
}
export default Prerol;