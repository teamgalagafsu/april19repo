const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const PepStudentUserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    grade: {type: String, required: true},
    teacherName: {type: String, required: true},
    
});

PepStudentUserSchema.pre("save", function(next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {return next(err);}
            bcrypt.hash(user.password, salt, null, function(err, hash) {
                if (err) {return next(err);}                
                user.password = hash;
                next();
            });
        });
    } else {return next();}
});

PepStudentUserSchema.methods.comparePassword = function(password, next) {
    let user = this;
    return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("PepStudentUser", PepStudentUserSchema);