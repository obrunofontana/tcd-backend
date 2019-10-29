module.exports = (app) => {

    const Veiculos = app.datasource.models.Veiculos;

    app.route('/veiculos')
        .get((req, res) => {
            Veiculos.findAll()
                .then((result) => {
                    res.status(200).json({ veiculos: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Veiculos.create(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        });

    app.route('/veiculos/:id')
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
            Veiculos.findOne({ where: req.params })
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
            Veiculos.destroy({ where: req.params })
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

            Veiculos.update(req.body, { where: req.params })
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
        
    /*** Rota custom  */
    app.route('/veiculos/marcas/:marca')
        .get((req, res) => {
            Veiculos.findAll({ where: req.params })
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
        });
    /* .delete((req, res) => {
         Veiculos.destroy({ where: req.params })
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

         Veiculos.update(req.body, { where: req.params })
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
     });*/
};
