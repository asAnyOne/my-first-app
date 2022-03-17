import { Component } from "react";
import EmployeesFilter from "../employees-filter/employees-filter";
import "./employees-search-panel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };
  render() {
    return (
      <div className="search-panel">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Find employee"
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
        <EmployeesFilter
          onFilter={this.props.onFilter}
          filter={this.props.filter}
        />
      </div>
    );
  }
}
