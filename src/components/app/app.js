import { Component } from "react";

import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesInfo from "../employees-info/employees-info";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../employees-search-panel/employees-search-panel";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Jhon L.", salary: "3000", increase: false, id: 1 },
        { name: "David H.", salary: "2000", increase: true, id: 2 },
        { name: "Mark J.", salary: "900", increase: false, id: 3 },
      ],
    };
  }
  deleteItemById(id) {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  }
  render() {
    return (
      <div className="app">
        <EmployeesInfo />
        <SearchPanel />
        <EmployeesList
          data={this.state.data}
          onDelete={(id) => this.deleteItemById(id)}
        />
        <EmployeesAddForm />
      </div>
    );
  }
}
