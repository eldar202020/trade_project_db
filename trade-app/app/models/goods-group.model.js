const { ForeignKeyConstraintError } = require("sequelize");

odule.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("goodsgroup", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    baseGoodsGroup: {
      type: Sequelize.BOOLEAN,
    },
  });
  GoodsGroup.belongsTo(GoodsGroup,{ foreignKey: " baseGoodsGroup"})
  return Tutorial;
};
