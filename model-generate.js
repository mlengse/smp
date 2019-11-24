const SequelizeAuto = require('sequelize-auto-v2') //need to install manually
const config = require('./config')
const auto = new SequelizeAuto(config.database, config.username, config.password, Object.assign({}, config, {
  additional: {
    timestamps: false
  } 
}));
 
auto.run(function (err) {
  if (err) throw err;
 
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
 
