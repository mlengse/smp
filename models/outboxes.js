/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('outboxes', {
		'id': {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'patient_id': {
			type: DataTypes.CHAR(11),
			allowNull: true,
			comment: "null"
		},
		'no_bpjs': {
			type: DataTypes.STRING(20),
			allowNull: true,
			comment: "null"
		},
		'nama': {
			type: DataTypes.STRING(255),
			allowNull: false,
			comment: "null"
		},
		'nama_kk': {
			type: DataTypes.STRING(225),
			allowNull: false,
			comment: "null"
		},
		'no_hp': {
			type: DataTypes.CHAR(12),
			allowNull: false,
			comment: "null"
		},
		'pesan': {
			type: DataTypes.TEXT,
			allowNull: false,
			comment: "null"
		},
		'timestamp_kirim': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '1970-01-01',
			comment: "null"
		},
		'status': {
			type: DataTypes.STRING(50),
			allowNull: false,
			comment: "null"
		},
		'tanggal_rutin': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		},
		'jenis_pasien': {
			type: DataTypes.STRING(100),
			allowNull: true,
			comment: "null"
		},
		'typepatient_id': {
			type: DataTypes.STRING(4),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'outboxes',
		timestamps: false
	});
};
