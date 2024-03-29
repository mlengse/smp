/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bloodtypes', {
		'id': {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING(6),
			allowNull: false,
			comment: "null"
		}
	}, {
		tableName: 'bloodtypes',
		timestamps: false
	});
};
