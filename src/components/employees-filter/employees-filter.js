import "./employees-filter.css";

export default function EmployeesFilter(props) {
  const buttonsData = [
    { name: "all", label: " All employees" },
    { name: "rise", label: "Employees for rise" },
    { name: "morethen1000", label: "Salary more than 1000$" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const clazz = name === props.filter ? "btn-light" : "btn-outline-light";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => props.onFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}
