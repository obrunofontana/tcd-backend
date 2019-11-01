module.exports = (app) => {

    const Counties = app.datasource.models.Counties;

    app.route('/counties')
        .get((req, res) => {
            Counties.findAll()
                .then((result) => {
                    res.status(200).json({ counties: result });
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        })
        .post((req, res) => {
            console.log(req.body);
            Counties.create(req.body)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json(error);
                });
        });

    app.route('/counties/:id')
        .get((req, res) => {
            Counties.findOne({ where: req.params })
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
    /*     .delete((req, res) => {
             Counties.destroy({ where: req.params })
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
 
             Counties.update(req.body, { where: req.params })
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

    app.route('/counties/state/:state')
        .get((req, res) => {
            Counties.findAll({ where: req.params })
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

};
