// PRACTICANDO CON LOS MODULOS EXTERNOS DE NPM
// MOMENT.JS version: 2.30.1
// import moment from "moment";
const moment = require("moment");

const currentDate = moment();
const myBirthday = moment("19990211");

// console.log({ currentDate, myBirthday });
if (!myBirthday.isValid()) throw new Error("Cumpleanios no valido :(");
else console.log("Cumpleanios valido :D");

const diffDate = currentDate.diff(myBirthday, "days");

console.log("Tu nacimiento ocurrio hace " + diffDate + " dias");

// Comparamos con la version: 1.6.0...
