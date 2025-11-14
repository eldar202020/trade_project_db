module.exports = (sequelize, Sequelize) => {
  const GoodsGroup = sequelize.define("goodsgroup", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    baseGoodsGroup: {
      type: Sequelize.BOOLEAN
    }
  });
  GoodsGroup.belongsTo(GoodsGroup,{ foreignKey: " baseGoodsGroup"});
  return GoodsGroup ;
};
