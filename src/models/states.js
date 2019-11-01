module.exports = (sequelize, DataType) => {

    const States = sequelize.define('States', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
        },
        sigla: {
            type: DataType.STRING(2),
            allowNull: false
        },
        name: {
            type: DataType.STRING(30),
            allowNull: false
        }
    });

    return States;
};


/*

 "id": 11,
 "sigla": "RO",
 "nome": "Rondônia",

*/

