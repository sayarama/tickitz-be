const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../database");
const usersModel = require("../models/users");
const usersController = require("../controllers/users");
const router = require("express").Router();
const { Validator } = require("node-input-validator");

// Middleware function
const checkJwt = async (req, res, next) => {
    try {
        const token = req.headers.authorization.slice(7);
        const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN);

        console.log(decoded);

        if (decoded) {
            next();
        } else {
            res.status("401").json({
                status: false,
                message: "Token error",
                data: [],
            });
        }
    } catch (error) {
        console.log(error);
        res.status("401").json({
            status: false,
            message: "Token error",
            data: [],
        });
    }
};

// Get users

router.get("/users", usersController._getAllUsers);

// User register
router.post(
    "/users/register",
    usersController._validationAddUsers,
    usersController._addUsers, usersController._checkEmail
);

// Users login

router.post("/users/login", usersController._loginUser);

// Get me
router.get('/users/me', checkJwt, usersController._profileUser)

router.put("/users/edit", checkJwt, usersController._validationUsersEdit, usersController._editProfile);

router.put("/users/edit/password", checkJwt, async (req, res) => {
    try {
        const token = req.headers.authorization.slice(7);
        const decoded = jwt.verify(token, process.env.APP_SECRET_TOKEN);
        const { id } = decoded;

        const columns = ["password"];

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const request = await database`UPDATE users SET ${database(
            { password: hash },
            columns
        )} WHERE id = ${id} RETURNING id`;

        const schema = new Validator(req.body, {
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

        res.status("200").json({
            status: true,
            message: "Edit success",
            data: request,
        });
    } catch (error) {
        console.log(error);
        res.status("502").json({
            status: false,
            message: "something wrong in our server",
            data: [],
        });
    }
});

module.exports = router;
