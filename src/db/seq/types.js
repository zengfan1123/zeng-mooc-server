const sequelize = require('sequelize')
module.exports = {
  STRING: sequelize.STRING,
  DECIMAL: sequelize.DECIMAL,
  TEXT: sequelize.TEXT,
  DATE: sequelize.DATE,
  BOOLEAN: sequelize.BOOLEAN,
  INTEGER: sequelize.INTEGER,
  BIGINT: sequelize.BIGINT,
  NOW: sequelize.NOW,
  UUID: sequelize.UUID,
  UUIDV4: sequelize.UUIDV4,
  ENUM: sequelize.ENUM,
}
