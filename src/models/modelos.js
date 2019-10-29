module.exports = (sequelize, DataType) => {

    //OBS: Precisa mudar o id PARA AUTO INCREMNTO PQ TA DANDO PAU dessa forma, lembrar de mudar nos outros tbm 

    const Modelos = sequelize.define('Modelos', {
        id: {
            type: DataType.STRING(16),
            primaryKey: true,
        },
        key: {
            type: DataType.STRING(20),
            allowNull: false
        },
        name: {
            type: DataType.STRING(60),
            allowNull: false
        },
        fipeCodigo: {
            type: DataType.STRING(16),

        },
        veiculo: {
            type: DataType.STRING(60),
           

        },
        fipeMarca: {
            type: DataType.STRING(30),

        },
        marcaId: {
            type: DataType.INTEGER,
            primaryKey: true,

        },
        veiculoId: {
            type: DataType.INTEGER,
            primaryKey: true,

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