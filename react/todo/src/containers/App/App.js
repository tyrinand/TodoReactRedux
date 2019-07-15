import React, {Component} from 'react';
import '../../css/normal.css';
import './App.css';
import Row from '../../components/Row/Row.js';
import AddInput from '../../components/AddInput/AddInput';
import { connect } from 'react-redux';
import Prerol from '../../components/Prerol/Prerol.js'
import ComError from '../../components/Error/ComError.js'
import Footer from '../../components/Footer/Footer.js';
import { tasksFetch, AddTaskAction, DelTaskAction, EditTask, UpdateTaskAction, SelectTaskAction } from './../../actions/taskAction.js';
import { EditFilter } from './../../actions/filterAction.js';

class App extends Component{
  componentDidMount(){
   this.props.tasksFetch();
  }
  //добавление задачи
  AddTask = (body) =>{
    this.props.AddTaskAction(body);
  }
  //редактирование задачи
  EditTask = (id) =>{
    this.props.EditTask(id);
  }
  UpdateTask = (id,body) =>{
     this.props.UpdateTaskAction(id,body);
  }
  DeleteTask = (id) =>{
   this.props.DelTaskAction(id);
  }
  SelectTask = (id) =>{
    this.props.SelectTaskAction(id);
  }
  EditFilter = (val) =>{
    this.props.EditFilter(val);
  }
  render(){
    const { isLoading, isError, tasks, filter } = this.props;
    let new_arr = null;
    switch (filter) {
      case "fulfilled":
          new_arr = tasks.filter(elem => elem.suc === true);
        break;
      case "no_fulfilled":
            new_arr = tasks.filter(elem => elem.suc === false);
          break;
      default:
          new_arr = tasks;
    }

    let res = null;
    if( isLoading && !isError)  
      res = <Prerol/>
    else if(isError)
      res = <ComError/>
    else 
      if(new_arr.length > 0)
        res = new_arr.map((item) => <Row 
                                  task={item} 
                                  key={item.id}
                                  EditTask={this.EditTask}
                                  UpdateTask={this.UpdateTask}
                                  DeleteTask={this.DeleteTask}
                                  SelectTask={this.SelectTask}
                                /> )
      else
          res = <tr>
                  <td>
                    <h4 className="my-title">Нет задач</h4>
                  </td>
                </tr>
    return (
      <div className="App">
         <AddInput AddTask={this.AddTask}/>
        <div className="container">
        <br/>
        <table className="my-table">
          <thead></thead>
          <tbody>
            {res}
          </tbody>
        </table>
        <br/> 
      </div>
      <Footer 
          all={tasks.length} 
          fulfilled={tasks.filter(elem => elem.suc === true).length} 
          EditFilter={this.EditFilter}
          filter={filter}
          />
    </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    isLoading: state.tasks.isLoading,
    isError: state.tasks.isError,
    tasks:  state.tasks.tasks,
    filter: state.filter.filter
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    tasksFetch: () => dispatch(tasksFetch()),
    AddTaskAction: (title)=> dispatch(AddTaskAction(title)),
    DelTaskAction: (id)=> dispatch(DelTaskAction(id)),
    EditTask: (id)=> dispatch(EditTask(id)),
    UpdateTaskAction: (id, title) => dispatch(UpdateTaskAction(id,title)),
    SelectTaskAction: (id) => dispatch(SelectTaskAction(id)),
    EditFilter: (val) => dispatch(EditFilter(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)