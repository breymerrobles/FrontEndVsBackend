const express = require('express');
const server = express();
const cors = require('cors');
const { Technology } = require('../models');
server.use(express.json());
server.use(express.static(__dirname + '/../public'));
server.use(cors());
server.get('/api/technologies', async(req, res, next) => {
    let technologies = await Technology.find();
    technologies = technologies.map((tech) => {
        tech.logo = `${req.protocol}://${req.headers.host}/img/${tech.logo}`;
        return tech;
    });
    return res.send({ error: false, data: technologies });
});

server.get('/api/technologies/:id', async(req, res, next) => {
    const { id } = req.params;
    let technology = await Technology.findById(id);
    if (technology) {
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return res.send({ error: false, data: technology });
    }
    return res.sendStatus(404);

});
server.get('/api/technologies/search/:name', async(req, res, next) => {
    const { name } = req.params;
    let technologies = await Technology.find({
        name: { $regex: new RegExp(name, 'i') }
    });
    technologies = technologies.map((tech) => {
        tech.logo = `${req.protocol}://${req.headers.host}/img/${tech.logo}`;
        return tech;
    });
    return res.send({ error: false, data: technologies });
});
module.exports = server;