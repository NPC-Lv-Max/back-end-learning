const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

let department = [
  { id: 1, name: "IT" },
  { id: 2, name: "DBT" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/department", (req, res) => {
  res.send(department);
});

app.get("/department/:id", (req, res) => {
  let id = req.params.id;
  let findD = department.findIndex((e) => e.id == id);
  if (findD == -1) res.send("ไม่พบข้อมูล");
  res.send(department[findD]);
});

app.delete("/department/:id", (req, res) => {
  let id = req.params.id;
  let findD = department.findIndex((e) => e.id == id);
    if (findD == -1) res.send("ไม่พบข้อมูล");
    department.splice(findD, 1);
    res.send("ลบข้อมูลสำเร็จ");
});

app.post("/department", (req, res) => {
  let newDepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newDepartment);
  res.send(newDepartment);
});

app.put("/department/:id", (req, res) => {
  // let newDepartment = {
  //   id: department.length + 1,
  //   name: req.body.name,
  // };
  // department.push(newDepartment);
  res.send(newDepartment);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});