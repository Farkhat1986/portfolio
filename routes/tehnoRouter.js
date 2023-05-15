import express from 'express';
import { tehnoController } from '../controllers/tehnoController.js'

const tehnoRouter = express();

tehnoRouter.get('/', tehnoController.getAll)

tehnoRouter.post('/', tehnoController.create)

export { tehnoRouter };