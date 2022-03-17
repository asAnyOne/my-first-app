import { Component } from "react";
import "./employee.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: props.salary,
    };
  }

  onChangeSalary = (e) => {
    this.setState({ salary: e.target.value });
    this.props.onChangeSalary(e.target.value);
  };

  render() {
    const { name, onDelete, onToggle, increase, rise } = this.props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }

    if (rise) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          onClick={() => onToggle("rise")}
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={this.state.salary + "$"}
          onChange={this.onChangeSalary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={() => onToggle("increase")}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
