const router = require('express').Router();
const Dog = require("../models/dog");

const upload = require("../middleware/upload-photo");

// // get all dogs
router.get("/dogs", async (req, res) => {
    try {
        let dogs = await Dog.find();
        res.json({success: true, dogs: dogs})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});




















// //get single dog by :id
// router.get("/dogs/:id", async (req, res) => {
//     try {
//         let dog = await Dog.findOne({ _id: req.params.id});
//         res.json({success: true, dog: dog})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });



















// post single dog
router.post("/dogs", upload.single("photo"), async (req, res) => {
    try {
        let dog = new Dog();
        dog.dogName = req.body.dogName;
        dog.dogLicNum = req.body.dogLicNum;
        dog.ownerEmail = req.body.ownerEmail;
        dog.approved = req.body.approved;
        dog.photo = req.file.location;
        // product.price = req.body.price;

        await dog.save();

        res.json({success: true, message: "New dog successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});






















// // update single dog
// router.put("/dogs/:id", upload.single("photo"), async (req, res) => {
//     try {
//         let dog = await Dogs.findOneAndUpdate(
//             { _id: req.params.id },
//             { $set: {
//                 dogName: req.body.title,
//                 dogLicNum: req.body.description,
//                 photo: req.file.location,
//             }},
//             { upsert: true }
//         );
        
//         res.json({success: true, updatedDog: dog})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });

// // delete single dog
// router.delete("/dogs/:id", async (req, res) => {
//     try {
//         let deletedDog = await Dog.findOneAndDelete({ _id: req.params.id});
//         if (deletedDog) {
//             res.json({success: true, message: "Dog successfully deleted from database."})
//         }
//         res.json({success: true, dog: dog})
//     } catch (err) {
//         res.status(500).json({success: false, message: err.message})
//     }
// });

module.exports = router;