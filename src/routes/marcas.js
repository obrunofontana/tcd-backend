module.exports = (app) => {

    const Marcas = app.datasource.models.Marcas;

    app.route('/marcas')
        .get((req, res) => {
            Marcas.findAll()
                .then((result) => {
                    res.status(200).json({ marcas: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Marcas.create(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    console.log(req.body);
                    res.status(500).json(req.body);
                });
        }); 
         
    app.route('/marcas/:id')
        .all((req, res, next) => {

            switch (req.method) {
                case 'PATCH':
                    req.body.status = 'U';
                    break;

                case 'DELETE':
                    req.body.status = 'D';
                    break;
            }

            next();
        })
        .get((req, res) => {
            Marcas.findOne({ where: req.params })
                .then(result => {
                    if (result) {
                        res.json({ result });
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
        .delete((req, res) => {
            Marcas.destroy({ where: req.params })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
        .patch((req, res) => {
            console.log(req.body);

            Marcas.update(req.body, { where: req.params })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.status(404).json('Not found');
                    }
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        });
};