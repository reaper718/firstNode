const Student = require('./students');
const IdentityCard = require("./identityCard");
const department = require('./department');

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

department.hasMany(Student);
Student.belongsTo(department);

module.exports = {
    Student,
    IdentityCard,
    department
}