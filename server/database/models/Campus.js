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
    defaultValue: 'https://img.pngio.com/college-school-building-university-student-campus-png-download-college-campus-png-980_794.png'
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