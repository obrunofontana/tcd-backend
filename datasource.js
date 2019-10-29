import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let datasource = null;

module.exports = app => {
    const config = app.src.config.database;

    if (!datasource) {
        //Parametriza o Sequelize com os parametros de conexao com o BD.
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        //Parametriza a conexão com os dados do Sequelize
        datasource = {
            sequelize,
            Sequelize,
            models: {}
        };

        //Pega o dioretório aonde ficarão os models
        const dir = path.join(__dirname, '/src/models/');


        //Percorre o diretório "models" e importa os modelos que tem lá para dentro do
        //sequelize.
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            datasource.models[model.name] = model;
        });


        //Garante que o relacionamento (joins) entre os models ocorram
        Object.keys(datasource.models).forEach(key => {

            if (datasource.models[key].hasOwnProperty('associate')) {
                datasource.models[key].associate(datasource.models);
            }

        });

    }
    return datasource;
};