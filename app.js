import express from "express";
import employees from "./db/employees.js";

const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});
app.route("/employees").get((req, res) => {
  res.send(employees);
});
app.route("/employees/random").get((req, res) => {
  const random = Math.floor(Math.random() * employees.length);
  res.send(employees[random]);
});
app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  const employee = employees.find((emp) => emp.id === parseInt(id));

  // We have to `return` in this guard case to avoid sending multiple responses!
  if (!employee)
    return res.status(404).send("That employee does not exist in the list.");

  res.send(employee);
});
