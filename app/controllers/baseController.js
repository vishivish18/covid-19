class baseController {
    constructor(model){
        this.model = model;
    }

    async save(req, res){
        await this.model.save(req.body);
    }

    async get(req, res){
        await this.model.get(req.params.id);
    }

    async index(req, res){
        await this.model.index();
    }

    async update(req, res){
        await this.model.update(req.params.id, req.body);
    }

    async remove(req, res){
        await this.model.remove(req.params.id);
    }
}

module.exports = baseController;