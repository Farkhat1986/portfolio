import { Tehno } from '../model/model.js';


class TehnoController {

    async create(req, res) {
        const { name } = req.body;
        const tehno = await Tehno.create({ name })
        return res.json(tehno)
    }
    
    async getAll(req, res) {
        const tehno = await Tehno.findAll()
        return res.json(tehno)
    }
}
const tehnoController = new TehnoController()
export { tehnoController };