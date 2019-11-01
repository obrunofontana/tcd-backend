module.exports = (sequelize, DataType) => {

    const Counties = sequelize.define('Counties', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
        },        
        name: {
            type: DataType.STRING(16),
            allowNull: false
        },
        state: {
            type: DataType.STRING(2),
            allowNull: false
            
        }
    });

    return Counties;
};

/*
"id": 3300100,
        "nome": "Angra dos Reis"

*/