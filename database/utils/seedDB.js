const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;