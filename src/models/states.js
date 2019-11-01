module.exports = (sequelize, DataType) => {

    const Estates = sequelize.define('Estates', {
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

    return Estates;
};


/*

 "id": 11,
 "sigla": "RO",
 "nome": "Rondônia",

*/

