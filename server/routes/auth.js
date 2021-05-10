const router = require('express').Router();
const PepStudentUser = require("../models/user");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verify-token");

router.post("/auth/signup", async (req, res) => {
    if (!req.body.email || !req.body.password) { 
        res.json({success: false, message: "Please enter email or password"})
    } else {
        try {
            let newUser = new PepStudentUser();
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.grade = req.body.grade;
            newUser.teacherName = req.body.teacherName;
            
            await newUser.save();
            
            let token = jwt.sign(
                newUser.toJSON(), 
                process.env.SECRET,
                {expiresIn: 604800}
            );
            res.json({success:true, message: "Successfully created a new user"});
        } catch (err) {
            res.status(500).json({success: false, message: err.message})
        }
    }
});

router.get("/auth/user", verifyToken, async (req, res) => {
    try {
        let foundUser = await PepStudentUser.findOne({ _id: req.decoded._id });
        if (foundUser) {res.json({ success: true, user: foundUser })};
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

router.post("/auth/login", async (req, res) => {
    try {
        let foundUser = await PepStudentUser.findOne({email: req.body.email});
        if (!foundUser) {
            res.status(403).json({success:false, message: "Authentication failed, User not found"});
        } else {
            // if (foundUser.userType == "client") {
                if (foundUser.comparePassword(req.body.password)) {
                    let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {expiresIn: 604800});
                    res.json({success: true, token: token})
                } else {
                    res.status(403).json({success: false, message: "Authentication failed, wrong password"});
                }
            // } else {
                // res.status(403).json({success: false, message: "User is not a client, cannot login here"});
            // }
            // if (foundUser.comparePassword(req.body.password)) {
            //     let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {expiresIn: 604800});
            //     res.json({success: true, token: token})
            // } else {
            //     res.status(403).json({success: false, message: "Authentication failed, wrong password"});
            // }
        }
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

router.post("/auth/user", verifyToken, async (req, res) => { 
    try {
        let foundUser = await PepStudentUser.findOne({email: req.body.email});
        if (!foundUser) {
            res.status(403).json({success:false, message: "Authentication failed, User not found"});
        } else {
            if (req.body.firstName) {foundUser.firstName = req.body.firstName; }
            if (req.body.lastName) {foundUser.lastName = req.body.lastName; }
            if (req.body.email) {foundUser.email = req.body.email; }
            if (req.body.password) {foundUser.password = req.body.password; }
            if (req.body.grade) {foundUser.grade = req.body.grade; }
            if (req.body.teacherName) {foundUser.teacherName = req.body.teacherName; }
        }
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;