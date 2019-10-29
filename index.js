import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';
import cors from 'cors';

//Porta de execução da aplicação
const port = 3000;

//Declarar a aplicação
const app = express();

//Adiciona o body parser à aplicação
app.use(bodyParser.json());

//Permite requisições Cross Origns 
app.use(cors());

//Utiliza o Consign para organizar e fazer a injeção dos modulos
consign()
    .include('/src/config')
    .then('datasource.js')
    .then('/src/routes')
    .into(app);

//Levanta a aplicação, o parâmetro da função SYNC: alter:true, toda vez que reiniciar a aplicação ele cria toda a estrutura do DB novamente
app.datasource.sequelize.sync({ alter: true }).done(() => {

    app.listen(port, () => {
        console.log('Servidor Express API: Rodando em http://localhost:' + port);
    });
});