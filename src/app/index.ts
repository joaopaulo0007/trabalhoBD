import app_config from '../app config/config';
import express from 'express'


const app = express();

app_config(app);
export default app;