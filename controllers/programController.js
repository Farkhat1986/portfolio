import { Program } from '../model/model.js'
import { v4 } from 'uuid'
import { resolve, dirname } from 'path'
import { ApiError } from '../error/ApiError.js'

class ProgramController {
  
    async create(req, res, next) {
        try {
            const { name, description, price, categoriesId, tehnoId} = req.body;
            const { image } = req.files;
            let fileName = v4() + '.jpg';
            image.mv(resolve(resolve(dirname('')), 'static', fileName))
            const program = await Program.create({ name, description, price, categoriesId, tehnoId, image: fileName })
            return res.json(program);
        } catch(e) {
            return next(ApiError.badRequest(e.message))
        }
    }

  
    async getAll(req, res) {
        let { categoriesId, tehnoId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 10;
        let offset = page * limit - limit;
        let program;
        if (!categoriesId && !tehnoId) {
            program = await Program.findAndCountAll()
        }
        if (!categoriesId && tehnoId) {
            program = await Program.findAndCountAll({ where: {tehnoId}, limit, offset})
        }
        if (categoriesId && !tehnoId) {
            program = await Program.findAndCountAll({ where: {categoriesId}, limit, offset})
        }
        if (categoriesId && tehnoId) {
            program = await Program.findAndCountAll({ where: {categoriesId, tehnoId}, limit, offset})
        }
        return res.json(program);
    }

    
    async getOne(req, res) {
        const { id } = req.params
        const program = await Program.findOne({ where: {id}});
        return res.json(program)
    }

}

const programController = new ProgramController()
export { programController };