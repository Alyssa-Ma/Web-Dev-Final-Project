const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png'
  },

  gpa: {
    type: Sequelize.FLOAT,
  }

});

Student.associate = (models) => {
  // This will add methods getCampuss, setCampuss, addCampuss, and addCampuss to Student instances.
  models.Student.belongsTo(models.Campus, {through: 'StudentList'});
}
module.exports = Student;