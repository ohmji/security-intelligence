"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
const Routes_1 = __importDefault(require("./Routes"));
const connect_1 = __importDefault(require("./Models/connect"));
const app = express_1.default();
const db = "mongodb://localhost:27017/security-intelligence";
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("TS App is Running");
});
connect_1.default({ db });
Routes_1.default({ app });
app.listen(process.env.PORT, () => {
    // logger.info(`API Listening on port: ${process.env.NODE_ENV} as ${process.env.NODE_ENV}`)
    console.log(`server is running on PORT ${process.env.PORT}`);
});
