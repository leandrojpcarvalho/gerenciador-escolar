"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../middlewares"));
var controllers_1 = __importDefault(require("../../controllers"));
var login = (0, express_1.Router)();
login.post('/', middlewares_1.default.loginValidation, controllers_1.default.login.signIn);
exports.default = login;
