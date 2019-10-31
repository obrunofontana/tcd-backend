module.exports = (sequelize, DataType) => {

    const Estados = sequelize.define('Estados', {
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

    return Estados;
};


/*

 "id": 11,
 "sigla": "RO",
 "nome": "Rondônia",

*/

