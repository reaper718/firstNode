const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/add',studentController.addEntries);
router.get('/',studentController.getAllStudents);
router.get('/:id',studentController.getStudentById)
router.put('/update/:id',studentController.updateEntry);
router.delete('delete/:id',studentController.deleteEntry);
router.post('/addStudentAndIdentityCard',studentController.addStudentAndIdentityCard);


module.exports = router;