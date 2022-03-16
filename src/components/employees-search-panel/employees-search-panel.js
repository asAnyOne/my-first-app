import EmployeesFilter from "../employees-filter/employees-filter";
import "./employees-search-panel.css";

export default function SearchPanel() {
  return (
    <div className="search-panel">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find employee"
      />
      <EmployeesFilter />
    </div>
  );
}
