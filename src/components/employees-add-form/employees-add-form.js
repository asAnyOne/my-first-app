import { Component } from "react";
import "./employees-add-form.css";

export default class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form action="" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            onChange={this.onInputValue}
            name="name"
            value={name}
            placeholder="What his name is?"
          />
          <input
            type="number"
            className="form-control new-post-label"
            onChange={this.onInputValue}
            name="salary"
            value={salary}
            placeholder="Salary in $ ?"
          />
          <button
            className="btn btn-outline-light"
            onClick={(e) => {
              e.preventDefault();
              if (this.state.name !== "" && this.state.salary !== "") {
                this.props.onAddEmployee(this.state);
                this.setState({
                  name: "",
                  salary: "",
                });
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
