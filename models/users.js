const database = require("../database");

const modelUsers = {
    getAllUsers: async () => {
        const request =
            await database`SELECT first_name, last_name, phone_number, photo_profile FROM users`;

        return request;
    }
}

module.exports = modelUsers