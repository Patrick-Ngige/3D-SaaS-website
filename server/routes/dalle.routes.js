import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenApi} from 'openai';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({message: "Hello from Kim" });
})