import "./employees-info.css";

export default function EmployeesInfo({ increased, employees }) {
  return (
    <div className="employees-info">
      <h1>Acounting of company employees N</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>To get premium: {increased}</h2>
    </div>
  );
}
