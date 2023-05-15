import express from 'express';
import { projectController } from '../controllers/projectController.js'

const projectRouter = express();

projectRouter.get('/', projectController.getAll);
projectRouter.post('/', projectController.create)

export { projectRouter };