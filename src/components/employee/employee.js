import { Component } from "react";
import "./employee.css";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }
  bonus = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };
  onLike = () => {
    this.setState(({ like }) => ({ like: !like }));
  };

  render() {
    const { increase, like } = this.state;
    const { name, salary, onDelete } = this.props;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }

    if (like) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onLike}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.bonus}
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
