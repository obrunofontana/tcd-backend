module.exports = (app) => {

    const Estados = app.datasource.models.Estados;

    app.route('/estados')
        .get((req, res) => {
            Estados.findAll()
                .then((result) => {
                    res.status(200).json({ estados: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Estados.create(req.body)
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
            Estados.findOne({ where: req.params })
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
            Estados.destroy({ where: req.params })
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

            Estados.update(req.body, { where: req.params })
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
