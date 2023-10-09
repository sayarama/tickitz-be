const usersModel = require("../models/users")

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
    }
}

module.exports = usersController;