import React,{ Component } from 'react';
import './AddInput.css';

export default class AddInput extends Component{
    state = {
        text: '',
    }
    handelChange = (e) =>{
        const text = e.target.value;
        this.setState({
            text
        })
    }
    handelKeyEnter = (e) =>{
        //this.props.AddTask
        if( e.key === "Enter"){
           const {text} = this.state;
           this.props.AddTask(text);
           this.setState({
               text: ''
           })
        }
    }
    render(){
        const {text} = this.state;
        return(
            <input 
                className='add-input' 
                type='text'
                value={text} 
                onChange={this.handelChange}
                placeholder="Enter for add"
                onKeyPress={this.handelKeyEnter}
            />   
        )
    }
}

