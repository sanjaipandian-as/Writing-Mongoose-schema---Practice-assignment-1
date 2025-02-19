const mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String], 
        default: ["user"] 
    }
});


const activitySchema = new mongoose.Schema({
    login: {
        type: Date,
        default: Date.now
    }
});


const UserModel = mongoose.model("User", userSchema);
const ProfileModel = mongoose.model("Profile", profileSchema);
const ActivityModel = mongoose.model("Activity", activitySchema);


module.exports = { UserModel, ProfileModel, ActivityModel };
