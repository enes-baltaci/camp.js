import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi");

let logger1 = new MongoLogger();

let userService = new UserService(logger1);

let user1 = new User(1, "Enes", "Baltacı", "İstanbul");
let user2 = new User(2, "İrem", "Er", "Muğla");

userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(2));

userService.getById(1);
userService.list();

let customer = { id: 1, firstName: "Enes" };

// Prototyping
customer.lastName = "Baltacı";

console.log(customer.lastName);