// PRACTICANDO CON LOS MODULOS NATIVOS DE NODE
// CRYPTO
const crypto = require("crypto");
// import crypto from "crypto";

class UsersManager {
  static Users = [];

  static createUser(obj) {
    const { first_name, last_name, username, password } = obj;
    if (this.Users.find((u) => u.username === username)) {
      console.log("username already exists");
      return;
    }
    const [hash, salt] = this.#createUniqueHash(password);
    const user = {
      first_name,
      last_name,
      username,
      password: hash, // Necesitamos hashaer antes de guardar en la db
      salt,
    };
    console.log({ user });
    this.Users.push(user);
    console.log("User created successfully");
  }

  static #createUniqueHash(password) {
    const salt = crypto.randomBytes(16);
    const hash = this.#buildHash(password, salt);
    return [hash, salt];
  }

  static getUsers() {
    return this.Users;
  }

  static login(username, password) {
    const user = this.getUsers().find((u) => u.username === username);
    if (!user) {
      console.log("user not exists");
      return;
    }
    const validate = this.#verifyHashPassword(
      password,
      user.password,
      user.salt,
    );
    const login = validate ? "Login successfully!" : "Incorrect password";
    console.log(login);
  }

  static #verifyHashPassword(password, originalHash, salt) {
    const hash = this.#buildHash(password, salt);
    console.log({ password, originalHash, hash });
    return hash === originalHash;
  }

  static #buildHash(str, salt) {
    const iterations = 100;
    const keylen = 33;
    const digest = "sha-256";
    return crypto
      .pbkdf2Sync(str, salt, iterations, keylen, digest)
      .toString("hex");
  }
}

UsersManager.createUser({
  first_name: "Bob",
  last_name: "Ross",
  username: "wandanara",
  password: "a1b2c3d4",
});

UsersManager.createUser({
  first_name: "Bob",
  last_name: "Ross",
  username: "otracuenta",
  password: "a1b2c3d4",
});

UsersManager.createUser({
  first_name: "Tito",
  last_name: "Gallardo",
  username: "holga",
  password: "holaholahola",
});

UsersManager.createUser({
  first_name: "Bob",
  last_name: "Ross",
  username: "otracuenta",
  password: "a1b2c3d4",
});

UsersManager.createUser({
  first_name: "Enzo",
  last_name: "Ross",
  username: "gordinflon",
  password: "kroaichy",
});

UsersManager.login("gordinflon", "kroaichy");
UsersManager.login("wandanara", "a1b2c3d4");
UsersManager.login("otracuenta", "a1b2c3d4");
UsersManager.login("wandanara", "holaholahola");
