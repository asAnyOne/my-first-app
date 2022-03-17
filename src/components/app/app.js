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
        {
          name: "Jhon L.",
          salary: "3000",
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "David H.",
          salary: "2000",
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Martin J.",
          salary: "900",
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      maxId: 4,
      term: "",
      filter: "all",
    };
  }

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: salary };
        }
        return item;
      }),
    }));
  };

  filterPost = (items, filter) => {
    if (filter === "all") {
      return items;
    } else if (filter === "rise") {
      return items.filter((item) => item.increase);
    } else {
      return items.filter((item) => item.salary > 1000);
    }
  };
  onFilter = (filter) => {
    this.setState({ filter });
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  deleteItemById = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  onToggle = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  addData = (obj) => {
    obj.id = this.state.maxId;
    obj.increase = false;
    obj.rise = false;
    this.setState(({ data, maxId }) => ({
      maxId: maxId + 1,
      data: data.concat(obj),
    }));
  };
  render() {
    const increased = this.state.data.filter((item) => item.increase).length,
      employees = this.state.data.length,
      { data, term, filter } = this.state;
    let visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <EmployeesInfo employees={employees} increased={increased} />
        <SearchPanel
          onUpdateSearch={this.onUpdateSearch}
          onFilter={this.onFilter}
          filter={filter}
        />
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItemById}
          onToggle={this.onToggle}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAddEmployee={this.addData} />
      </div>
    );
  }
}
