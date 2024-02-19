import express,{ Express} from "express";
import cors from 'cors';
import routes from '../routes/routes';
import { connect_mongoDB } from "../banco de dados/banco_config";
import bodyPaser from 'body-parser'
import swaggerUi from "swagger-ui-express"
import swaggerJson from "../../swagger.json"
export default function app_config(app: Express):void {
    connect_mongoDB();
    app.use(bodyPaser.json());
    app.use(cors());
    app.use(express.json());
    app.use('/',routes);
    app.use("/swagger",swaggerUi.serve,swaggerUi.setup(swaggerJson));

}