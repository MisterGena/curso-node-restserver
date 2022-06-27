const { response } = require('express');

const usuariosGet = (req, res = response ) => {

    //Query params
    const {q, nombre = "No name", apikey, page, limit} = req.query;

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.status(500).json({
        msg: 'put API - Controlador',
        id
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,


}


