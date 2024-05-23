const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables
const fs = require('fs');
const { parse } = require('json2csv');
const JkMysql = require('jkmysql-easy')

const path = require('path')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');


const app = express();
const PORT = process.env.PORT || 8081

//file  upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    }, 
    filename:(req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({
    storage:storage
})


// make connection between server and mysql database
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'db_cms')

// configurate email sending 
const transporter = JkMysql.SendEmailConfig("Gmail", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 


// all endpoint start

// signUp endpoint
app.post('/SignUp', (req, res) => {
    // console.log(req.body)

    // check user is alredy in database
    const tableName = "users"
    const columnData = { Email: req.body.SignUpemail }

    // console.log(tableName, columnData)
    JkMysql.SelectData(connection, tableName, columnData, (result) => {
        if(result.length === 0){
            // console.log("good to go")

            bcrypt.hash(req.body.SignUppassword, 10, (err, PassHash) => {
                if(err) throw err

                if(PassHash){
                    const role = "user"
                    const is_active = 0;
                    const is_lock = 0;
                    const join_at = new Date()

                    const tableName = "users"
                    const data = {
                        username: req.body.username, 
                        Email: req.body.SignUpemail,
                        Password: PassHash,
                        Role: role,
                        is_active: is_active,
                        is_lock: is_lock,
                        join_at: join_at       
                    }

                    JkMysql.insertData(connection, tableName, data, (result) => {
                        if(result){
                            return res.json({Status: "Success"})
                        }
                    })
                }
            })

        }
        else{
            return res.json({Error: "User Already in database"})
        }
        
    })

})

// signIn endpoint

app.post('/SignIn', (req, res) => {
    // console.log(req.body)

    const tableName = "users"
    const columnData = { Email: req.body.email }

    // console.log(tableName, columnData)

    JkMysql.SelectData(connection, tableName, columnData, (result) => {
        if(result.length === 0){
            // console.log("Error")
            return res.json({Error: "User Not Found in Database..."})
        }
        else{
            // console.log(result[0].Password)
            // console.log("good to go")
            const password = req.body.password
            
            bcrypt.compare(password, result[0].Password, (err, PassMatch) => {
                if(err) throw err

                if(PassMatch) {
                    //generate JWT Token
                    const token = jwt.sign(
                        {email: result[0].Email, role: result[0].Role, is_active: result[0].is_active, is_lock: result[0].is_lock},
                        'your-secret-key',
                        {expiresIn: '1h'}
                    );
                    res.json({Token: token, Msg: "Success", LoginUser:result})
                    console.log(result)
                }
                else{
                    return res.json({Error: "Password Not Match"})
                }
            })
        }
    })
})

// Add new Stundet
// AddStudent

app.post('/AddStudent', (req, res) => {
    // console.log(req.body)

    const tableName = 'students'
    const columnData = { EmailStd: req.body.email, RegNo: req.body.AdmissionNo, NIC: req.body.nic }
    JkMysql.SelectData(connection, tableName, columnData, (result) => {
        if(result.length === 0){
            if(req.body.email.endsWith('@example.com')){
                const tableName = "students"
                const data = {
                    EmailStd: req.body.email,
                    stdDept: req.body.dept,
                    Gender: req.body.gender,
                    RegNo: req.body.AdmissionNo,
                    NIC: req.body.nic,
                    RegisterAt: new Date()
                }

                JkMysql.insertData(connection, tableName, data, (result) => {
                    if(result){
                        bcrypt.hash(req.body.password, 10, (err, StdPass) => {
                            if(StdPass){
                                const tableName = "users"
                                const data = {
                                    username: req.body.username,
                                    Email: req.body.email,
                                    Password: StdPass,
                                    Role: "Student",
                                    join_at: new Date(),
                                    is_active: 1,
                                    is_lock: 0
                                }

                                JkMysql.insertData(connection, tableName, data, (result) => {
                                    if(result){
                                        return res.json({Status: "Success"})
                                    }
                                })
                            }
                        })
                    }
                })
            }
            else{
                return res.json({Error: "Error on Email"})
            }
        }
        else{
            return res.json({Error: "Student already Exists"})
        }
    })
})

// all endpoints end

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));