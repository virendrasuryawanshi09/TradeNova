const {model } = require('mongoose');
const {PositonsSchema, PositionSchema} = require('../schemas/PositionsSchema');

const PositionsModel = model('position', PositionSchema);

module.exports = {PositionsModel};