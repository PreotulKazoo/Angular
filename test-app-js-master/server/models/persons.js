module.exports = (sequelize, DataType) => {
    let model = sequelize.define('Persons', {
      id: {
        type: DataType.TEXT,
        primaryKey: true
      },
      nume: {
        type: DataType.TEXT
      },
      cnp: {
        type: DataType.INTEGER
      },
      varsta: {
        type: DataType.INTEGER
      },
      masini: {
        type: DataType.TEXT
      }
    }, {
      timestamps: true
    });
    /*
      Aceasta linie este comentata pentru a demonstra legatura dintre tabelul Information si tabelul Post prin id
    */
    // model.belongsTo(sequelize.models.Post, {foreignKey: 'id_post', onDelete: 'set null'});
    return model;
  };
  