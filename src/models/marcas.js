module.exports = (sequelize, DataType) => {

    const Marcas = sequelize.define('Marcas', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
        },
        key: {
            type: DataType.STRING(16),
            allowNull: false
        },
        name: {
            type: DataType.STRING(16),
            allowNull: false
        },
        fipeName: {
            type: DataType.STRING(16),
            allowNull: false
        },
        order: {
            type: DataType.INTEGER,
            allowNull: false
        }
    });

    return Marcas;
};