const database = require("../database");
const router = require("express").Router;

// Endpoint Cinemas
// Get
router.get("/cinemas", async (req, res) => {
    try {
      const request = await database`SELECT * FROM cinemas`;
      res.status("200").json({
        status: true,
        message: "Get data success",
        data: request,
      });
    } catch (error) {
      res.status("502").json({
        status: false,
        message: "something wrong in our server",
        data: [],
      });
    }
  });
  
  // Get selected id
router.get("/cinemas/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);
      const request = await database`SELECT * FROM cinemas WHERE id=${id}`;
      res.status("200").json({
        status: true,
        message: "Get data success",
        data: request,
      });
    } catch (error) {
      res.status("502").json({
        status: false,
        message: "something wrong in our server",
        data: [],
      });
    }
  });
  
  // Post
router.post("/cinemas", async (req, res) => {
    try {
      const { movie_id, name, city, adress, show_times, price, logo } = req.body;
      const request =
        await database`INSERT INTO cinemas(movie_id, name, city, adress, show_times, price, logo) VALUES(${movie_id},${name},${city},${adress},${show_times},${price},${logo})`;
      res.status("200").json({
        status: true,
        message: "Post data success",
        data: request,
      });
    } catch (error) {
      res.status("502").json({
        status: false,
        message: "something wrong in our server",
        data: [],
      });
    }
  });
  
  // Update
router.put("/cinemas/:id", async (req, res) => {
    try {
      const id = Number(req.params.id);
      const { movie_id, name, city, adress, show_times, price, logo } = req.body;
      const request =
        await database`UPDATE cinemas SET movie_id=${movie_id}, name=${name}, city=${city}, adress=${adress}, show_times=${show_times}, price=${price}, logo=${logo} WHERE id=${id}`;
      res.status("200").json({
        status: true,
        message: "Update data success",
        data: request,
      });
    } catch (error) {
      res.status("502").json({
        status: false,
        message: "something wrong in our server",
        data: [],
      });
    }
  });
  
router.delete("/cinemas/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const request = await database`DELETE FROM cinemas WHERE id=${id}`;
        res.status("200").json({
            status: true,
            message: "Data Deleted",
            data: request,
        });
    } catch (error) {
        res.status("502").json({
            status: false,
            message: "something wrong in our server",
            data: [],
        });
    }
});

module.exports = router;