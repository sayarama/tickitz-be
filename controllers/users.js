const usersModel = require("../models/users")
const { Validator } = require("node-input-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usersController = {
    _getAllUsers: async (req, res) => {
        try {
            const request = await usersModel.getAllUsers();
            res.status("200").json({
                status: true,
                message: "Get data success",
                data: request,
            });
        } catch (error) {
            console.log(error)
            res.status("502").json({
                status: false,
                message: "something wrong in our server",
                data: [],
            });
        }
    },
    _validationAddUsers: async (req, res, next) => {
        const schema = new Validator(req.body, {
            first_name: "required|minLength:1|maxLength:100",
            last_name: "required|minLength:1|maxLength:100",
            phone_number: "required|phoneNumber",
            email: "required|email",
            password: "required|minLength:2",
            photo_profile: "required|url",
        })

        schema.check().then((matched) => {
            if (!matched) {
                res.status(422).send({
                    status: false,
                    message: schema.errors,
                    data: null
                })
                return;
            } else {
                next();
            }
        })
    } ,
    _addUsers: async (req, res) => {
        try {
            const {
                first_name,
                last_name,
                phone_number,
                email,
                password,
                photo_profile,
            } = req.body;
    
            const isInputValid =
                first_name &&
                last_name &&
                phone_number &&
                email &&
                password &&
                photo_profile;
    
            if (!isInputValid) {
                res.status(400).json({
                    status: false,
                    message: "Bad input, please make sure your input is completed",
                });
                return;
            }
    
            const request = await usersModel.addUsers({
                first_name,
                last_name,
                phone_number,
                email,
                password,
                photo_profile,
            });
            
            if (request.length > 0) {
                res.json({
                    status: true,
                    message: "Insert data success",
                });
                return;
            }
        } catch (error) {
            console.log(error)
            res.status("502").json({
                status: false,
                message: "something wrong in our server",
                data: [],
            });
        }
    },
    _checkEmail: async (req, res) => {
        // Check Unique Email
        const checkEmail =
        await usersModel.checkEmail(email);

    if (checkEmail.length > 0) {
        res.status(400).json({
            status: false,
            message: "Email is already registered",
        });

        return;
    }
    },
    _loginUser: async (req, res) => {
        try {
            const { email, password } = req.body;
    
            // Check if email registered
            const checkEmail = await usersModel.checkEmail(email);
    
            if (checkEmail.length == 0) {
                const schema = new Validator(req.body, {
                    email: "required|email",
                    password: "required|minLength:2",
                });
    
                schema.check().then((matched) => {
                    if (!matched) {
                        res.status(422).send({
                            status: false,
                            message: schema.errors,
                            data: null,
                        });
                        return;
                    }
                });
                return;
            }
    
            // Check if password correct
            const isMatch = bcrypt.compareSync(password, checkEmail[0].password);
    
            if (isMatch) {
                const token = jwt.sign(checkEmail[0], process.env.APP_SECRET_TOKEN);
    
                res.json({
                    status: true,
                    message: "Login success",
                    accessToken: token,
                    data: checkEmail,
                });
            } else {
                res.status(400).json({
                    status: false,
                    message: "Password Incorrect",
                });
            }
        } catch (error) {
            console.log(error)
            res.status("502").json({
                status: false,
                message: "something wrong in our server",
                data: [],
            });
        }
    },
    _checkJwt: async (req, res, next) => {
        try {
            const token = req.headers.authorization.slice(7);
            const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

            if (decoded) {
                next();
            } else {
                res.status(401).json({
                    status: false,
                    message: "Token error",
                    data: [],
                })
            }

        } catch (error) {
            res.status(401).json({
                status: false,
                message: "Token error",
                data: [],
            })
        }
    },
}

module.exports = usersController;