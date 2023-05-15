import { Project } from '../model/model.js'

class ProjectController {
   
    async create(req, res) {
        const { name } = req.body;
        const project = await Project.create({ name });
        return res.json(project);
    }

   
    async getAll(req, res) {
        const projectList = await Project.findAll()
        return res.json(projectList);
    }
}

const projectController = new ProjectController();
export { projectController };