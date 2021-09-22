const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const UserSchema = new mongoose.Schema({
  login: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  type: {
    default: "user",
    type: String,
    enum: ["user", "admin", "superAdmin"],
  },
},{
  timestamps:true,
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const model = mongoose.model("User", UserSchema);
exports.userModel = model;
