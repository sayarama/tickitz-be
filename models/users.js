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

        } = payload
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const request =
            await database`INSERT INTO users(first_name, last_name, phone_number, email, password, photo_profile) VALUES(${first_name},${last_name},${phone_number},${email},${hash},${photo_profile}) RETURNING id`;

            return request;
    },
    
}

module.exports = usersModel