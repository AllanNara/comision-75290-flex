// Para utilizar MongoDB con VSCode primero debe de descargar la extension oficial de MongoDB en su editor.
use("colegio");

db.createCollection("estudiantes");

db.estudiantes.insertOne({ nombre: "Juan", apellido: "Perez" });
db.estudiantes.find();
db.estudiantes.deleteMany({});

const alumnos = [
  {
    nombre: "Maxi",
    apellido: "Ortigoza",
    curso: "Backend",
    correo: "@mail.co",
    edad: 24,
    sexo: "M",
  },
  {
    nombre: "Juan",
    apellido: "Gallardo",
    curso: "Diseño UX",
    correo: "@mail.co",
    edad: 33,
    sexo: "M",
  },
  {
    nombre: "William",
    apellido: "Palermo",
    curso: "IoT",
    correo: "@mail.co",
    edad: 27,
    sexo: "M",
  },
  {
    nombre: "Elizabeth",
    apellido: "Perez",
    curso: "Blockchain",
    correo: "@mail.co",
    edad: 17,
    sexo: "F",
  },
  {
    nombre: "Daniel",
    apellido: "Menem",
    curso: "Ciberseguridad",
    correo: "@mail.co",
    edad: 55,
    sexo: "M",
  },
];

db.estudiantes.insertMany(alumnos);

// Obtener a todos los estudiantes
db.estudiantes.find();

// Obtener a todos los estudiantes de sexo "M"
db.estudiantes.find({ sexo: "M" });

// Obtener el total de los documentos
db.estudiantes.countDocuments();

// Obtener el total de los documentos donde sexo sea F
db.estudiantes.countDocuments({ sexo: "F" });

// ---------------------------------------------

// Traer una cantidad 'x' de documentos
db.estudiantes.find().limit(2);

// Traer los estudiantes ordenados por edad
db.estudiantes.find().sort({ edad: 1 });

// Traer los dos estudiantes mas jovenes
db.estudiantes.find().sort({ edad: "desc" }).limit(2);

// Traer el tercer estudiante mas joven
db.estudiantes.find().sort({ edad: "asc" }).limit(1).skip(2);

/// ACTIVIDAD NRO 2
// Nuevas inserciones !!!
db.estudiantes.insertMany([
  { nombre: "Pablo", edad: 25 },
  { nombre: "Juan", edad: 22 },
  { nombre: "Lucia", edad: 25 },
  { nombre: "Juan", edad: 29 },
  { nombre: "Fede", edad: 35 },
]);

// Listamos todos los docs ordenados por edad descendente
db.estudiantes.find().sort({ edad: -1 });

// Listamos los estudiantes que se llamen 'Juan'
db.estudiantes.find({ nombre: "Juan" });

/*
....
Ejercicios para seguir practicando en la siguiente presentacion de google:
https://docs.google.com/presentation/d/1wtoCvkN3O3aUtIzLExGipuIUveh5eqES-Mf2GhgjEQY/edit#slide=id.p1
....
*/

// 11. Listar todos los alumnos que esten entre las edades 26 y 35
db.estudiantes.find({ edad: { $gte: 26, $lte: 36 } });

db.estudiantes.updateOne({ nombre: "Fede" }, { $set: { edad: 36 } });

db.estudiantes.countDocuments({ nombre: "Juan" });
db.estudiantes.deleteMany({ nombre: "Juan" });
