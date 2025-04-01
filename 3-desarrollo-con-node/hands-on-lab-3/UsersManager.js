const fs = require("fs").promises;

class UsersManager {
  // Depende desde que directorio se ejecuta, su resultado puede variar
  static #path = "./Usuarios.json";
  static #currentId = 0;

  static async createUser({ first_name, last_name, age, course }) {
    const users = await this.ConsultarUsuarios();
    const newUser = {
      first_name,
      last_name,
      age,
      course,
      id: ++this.#currentId,
    };

    users.push(newUser);
    await fs.writeFile(this.#path, JSON.stringify(users, null, 2));
  }

  static async ConsultarUsuarios() {
    try {
      const data = await fs.readFile(this.#path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log("Archivo no inicializado");
      // El primer usuario a crear va a inicializar el archivo.
      return [];
    }
  }
}

async function main() {
  console.log(await UsersManager.ConsultarUsuarios());
  await UsersManager.createUser({
    first_name: "Bobby",
    last_name: "Jr.",
    age: 5,
    course: "Backend Jr",
  });
  await UsersManager.createUser({
    first_name: "Clark",
    last_name: "Kent",
    age: 44,
    course: "SSR DevOps",
  });
  await UsersManager.createUser({
    first_name: "Pablo",
    last_name: "Montaner",
    age: 23,
    course: "Frontend",
  });
  console.log(await UsersManager.ConsultarUsuarios());
}

main();
