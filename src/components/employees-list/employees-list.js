import Employee from "../employee/employee";
import "./employees-list.css";

export default function EmployeesList({ data, onDelete }) {
  return (
    <ul className="app-list list-group">
      {/* <Employee  name="Jhon L." salary="3000"  />
      <Employee  name="David H." salary="2000"  />
      <Employee  name="Mark J." salary="900"   /> */}
      {data.map((item) => {
        // return <Employee key={i} name={item.name} salary={item.salary} />;
        return (
          <Employee
            onDelete={() => {
              onDelete(item.id);
            }}
            key={item.id}
            {...item}
          />
        );
      })}
    </ul>
  );
}
