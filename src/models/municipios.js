module.exports = (sequelize, DataType) => {

    const Municipios = sequelize.define('Municipios', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
        },        
        name: {
            type: DataType.STRING(16),
            allowNull: false
        },
        estado: {
            type: DataType.STRING(2),
            allowNull: false
            
        }
    });

    return Municipios;
};

/*
"id": 3300100,
        "nome": "Angra dos Reis"

*/