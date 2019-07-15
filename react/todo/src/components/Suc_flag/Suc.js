import React from 'react';
import './Suc.css';
class Suc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flag: props.flag};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({flag: event.target.checked});
        const {SelectTask, id} = this.props;
        SelectTask(id);
      }
    render(){
        return (
            <input  className="my-ch" type="checkbox" checked={this.state.flag} onChange={this.handleChange}/>
        );
    }
}
export default Suc;
