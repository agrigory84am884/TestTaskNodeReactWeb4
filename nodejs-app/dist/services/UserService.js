"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor() {
        this.users = [];
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find(user => user.id === id);
        });
    }
    createUser(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                id: this.users.length + 1,
                name: userDto.name,
                email: userDto.email,
            };
            this.users.push(newUser);
            return newUser;
        });
    }
}
exports.UserService = UserService;
