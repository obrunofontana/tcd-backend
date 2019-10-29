module.exports = (app) => {

    const Municipios = app.datasource.models.Municipios;

    app.route('/municipios')
        .get((req, res) => {
            Municipios.findAll()
                .then((result) => {
                    res.status(200).json({ municipios: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Municipios.create(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        });

    app.route('/estados/:id')
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
            Municipios.findOne({ where: req.params })
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
            Municipios.destroy({ where: req.params })
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

            Municipios.update(req.body, { where: req.params })
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
