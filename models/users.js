const bcrypt = require("bcrypt");
const database = require("../database");

const usersModel = {
    getAllUsers: async () => {
        const request =
            await database`SELECT first_name, last_name, phone_number, photo_profile FROM users`;

        return request;
    },
    addUsers: async (payload) => {
        const saltRounds = 10;
        const {
            first_name,
            last_name,
            phone_number,
            email,
            password,
            photo_profile,
        } = payload;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const request =
            await database`INSERT INTO users(first_name, last_name, phone_number, email, password, photo_profile) VALUES(${first_name},${last_name},${phone_number},${email},${hash},${photo_profile}) RETURNING id`;

        return request;
    },
    checkEmail: async (email) => {
        const request = await database`SELECT * FROM users WHERE email = ${email}`;

        return request;
    },
    profileUser: async (id) => {
        const request = await database`SELECT * FROM users WHERE id = ${id}`;

        return request;
    },
    editProfile: async (reqBody, columns, id) => {
        const request = await database`UPDATE users SET ${database(
            reqBody,
            columns
        )} WHERE id = ${id} RETURNING id`;

        return request;
    },
    editPass: async (pass, columns, id) => {
        const request = await database`UPDATE users SET ${database(
            pass,
            columns
        )} WHERE id = ${id} RETURNING id`;
    }
};

module.exports = usersModel;
