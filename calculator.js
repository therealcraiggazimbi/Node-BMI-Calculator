const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);

  let sum = num1 + num2;
  console.log(sum);
  res.send(`The sum is ${sum} `);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/BMICalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  const { weight, height } = req.body;

  const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, () => {
  console.log("We live 🤑");
});
