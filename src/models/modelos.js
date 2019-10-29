module.exports = (sequelize, DataType) => {

    const Modelos = sequelize.define('Modelos', {
        id: {
            type: DataType.STRING(16),
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
        fipeCodigo: {
            type: DataType.STRING(16),
            allowNull: false
        },
        veiculo: {
            type: DataType.STRING(16),
            allowNull: false
        },
        fipeMarca: {
            type: DataType.STRING(16),
            allowNull: false
        },
        marcaId: {
            type: DataType.INTEGER,
           
        },
        veiculoId: {
            type: DataType.INTEGER,
           
        }
    });

    return Modelos;
};


/*

  {"fipe_codigo": "32000-1",
  "name": "Zero KM Gasolina",
  "key": "32000-1",
  "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
  "id": "32000-1"}


*/