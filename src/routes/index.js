module.exports = (app) => {

    app.get('/', (req, res) => {
        res.json({ "status": "CRUD Express API funcionando!" });
    });

};