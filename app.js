import express from "express";
import employees from "#employees.js";
const app = express();

export default app;

app.route("/").get((req, res) => {
  res.send("You've reached the Playlist API!");
});
app.route("/employees").get((req, res) => {
  res.send(employees);
});
app.route("/employees/:index").get((req, res) => {
  const { index } = req.params;
  const employee = employees[index];

  // We have to `return` in this guard case to avoid sending multiple responses!
  if (!employee)
    return res.status(404).send("That employee does not exist in the list.");

  res.send(song);
});
