const db = require('../utils/db-connection');
const Student = require('../models/students');
const IdentityCard = require('../models/identityCard');

const addEntries = async (req,res) => {
    try {
        const { email, name } = req.body;
        const student = await Student.create({
            name: name,
            email: email
        });

        res.status(201).send("Student created successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateEntry = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send("Student not found");
        }

        student.name = name;
        await student.save();
        res.staus(200).send("student updated");
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEntry = async (req,res) => {
    try {
        const {id} = req.params;

        const student = await Student.destroy({
            where:{
                id: id
            }
        })

        if(!student){
            res.status(404).send("Student not found");
        }

        res.staus(200).send("student deleted");
    } catch (error) {
        res.status(500).send(error);
    }

    
}

const getAllStudents = (req,res) => {
    const query = `select * from students`;

    db.execute(query, (err,data) => {
        if(err){
            res.staus(500).send(err.message);
            db.end();
            return;
        }

        console.log(data);
        res.status(200).send(data);
    })
}

const getStudentById = (req,res) => {
    const {id} = req.params;

    const query = `select * from students where id = ?`;

    db.execute(query,[id],(err,data) => {
        if(err){
            res.staus(500).send(err.message);
            db.end();
            return;
        }

        console.log(data);
        res.status(200).send(data);
    })
}

const addStudentAndIdentityCard = async (req,res) => {
    try {
        const student = await Student.create(req.body.student);
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            studentId: student.id
        })

        res.status(200).json({student,idCard});
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports ={
    addEntries,
    updateEntry,
    deleteEntry,
    getAllStudents,
    getStudentById,
    addStudentAndIdentityCard
}