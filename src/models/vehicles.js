module.exports = (sequelize, DataType) => {

    const Vehicles = sequelize.define('Vehicles', {
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
        brand: {
            type: DataType.INTEGER,
            allowNull: false
        }
    });

    return Vehicles;
};
/*
{
    "key": "palio-4826",
        "name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p",
            "id": "4826",
                "fipe_name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p"
}*/


