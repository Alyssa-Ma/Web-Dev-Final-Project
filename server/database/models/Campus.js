const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/63layDk.png'
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  }

});

Campus.associate = (models) => {
  // This will add methods getStudents, setStudents, addStudent, and addStudents to Campus instances.
  models.Campus.hasMany(models.Student, {through: 'StudentList'});
}
module.exports = Campus;