import Employee from "../employee/employee";
import "./employees-list.css";

export default function EmployeesList({
  data,
  onDelete,
  onToggle,
  onChangeSalary,
}) {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        return (
          <Employee
            key={item.id}
            {...item}
            onDelete={() => onDelete(item.id)}
            onToggle={(prop) => onToggle(item.id, prop)}
            onChangeSalary={(prop) => onChangeSalary(item.id, prop)}
          />
        );
      })}
    </ul>
  );
}
