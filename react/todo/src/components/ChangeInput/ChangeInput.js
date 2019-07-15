import React,{Component} from 'react';
import './ChangeInput.css';

export default class ChangeInput extends Component{
    state = {
        text: '',
    }
    componentDidMount(){
        this.setState({
            text: this.props.title
        })
    }
    handelChange = (e) =>{
        const text = e.target.value;
        this.setState({
            text
        })
    }

    handelKey = (e) =>{
        if(e.key === 'Enter')
        {
            const {text} = this.state;
            this.props.UpdateTask(this.props.id, text);
        }
    }
    render(){
        return(
            <input 
                value={this.state.text} 
                className='ChangeInput'
                onChange={this.handelChange}
                onKeyPress={this.handelKey}
            />
        )
    }
}