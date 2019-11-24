/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tmp_diagnosis', {
		'id': {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'visit_id': {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			comment: "null"
		},
		'disease_id': {
			type: DataTypes.STRING(10),
			allowNull: false,
			comment: "null"
		},
		'groupdiagnosi_id': {
			type: DataTypes.CHAR(1),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'tmp_diagnosis',
		timestamps: false
	});
};
