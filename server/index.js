const express = require("express");
const app= express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//add user
app.post("/campusclubs/user/add", async(req,res) =>{
    console.log(req.body);

    try {
        const newUser = await pool.query(
        "INSERT INTO user_table (username, email_id, user_password, phone_no, display_name, rid ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [req.body.username, req.body.email_id, req.body.user_password, req.body.phone_no, req.body.display_name, req.body.rid]
        );
        res.json(newUser);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});
//get all users
app.get("/campusclubs/user/getall", async(req,res)=>{
    try {
        const allUsers = await pool.query(
            "SELECT * FROM user_table"
        );
        res.json(allUsers.rows);
    } catch (error) {
        console.error(error.message);
    }
});


//get password

//get role

//add club
app.post("/campusclubs/club/add", async(req,res) =>{
    console.log(req.body);

    try {
        const newClub = await pool.query(
        "INSERT INTO club (club_id, club_name, category ) VALUES($1, $2, $3) RETURNING *",
        [req.body.club_id, req.body.club_name, req.body.category]
        );
        res.json(newClub);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//get all clubs

app.get("/campusclubs/club/getall", async(req,res)=>{
    try {
        const allClubs = await pool.query(
            "SELECT * FROM club"
        );
        res.json(allClubs.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000! yay!");
});