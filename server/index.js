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
        "INSERT INTO user_table (username, email_id, user_password, phone_no, display_name, r_id ) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [req.body.username, req.body.email_id, req.body.user_password, req.body.phone_no, req.body.display_name, req.body.r_id]
        );
        res.json(newUser);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});
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

//add post
app.post("/campusclubs/post/add", async(req,res) =>{
    console.log(req.body);

    try {
        const newPost = await pool.query(
        "INSERT INTO post (post_id, title, body, last_updated,urgency, media_link, club_id ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [req.body.post_id, req.body.title, req.body.body, req.body.last_updated, req.body.urgency, req.body.media_link, req.body.club_id]
        );
        res.json(newPost);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//get clubs of a club head
app.get("/campusclubs/club/getclubsofclubhead/:user_id", async(req,res)=>{
    try {
        const{user_id} = req.params;
        const myClubs = await pool.query(
            "SELECT c.* from club c, is_clubhead_of ch, user_table u WHERE u.user_id = $1 AND u.user_id = ch.user_id AND ch.club_id = c.club_id",
            [user_id]
         );
        res.json(myClubs);
    } catch (error) {
        console.error(error.message);
    }
});


//add a clubhead
app.post("/campusclubs/clubhead/add", async(req,res) =>{
    console.log(req.body);
   
    try {
        const newClubHead = await pool.query(
        "INSERT INTO is_clubhead_of (user_id, club_id) VALUES($1, $2) RETURNING *",
        [req.body.user_id, req.body.club_id]
        );
        res.json(newClubHead);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//is club followed
app.get("/campusclubs/club/isfollowed/:user_id/:club_id", async(req,res)=>{
    try {
        const isFollowed = await pool.query(
            "SELECT COUNT(*) FROM follows WHERE user_id = $1 AND club_id = $2 ",
            [req.params.user_id,  req.params.club_id]
         );
        res.json(isFollowed.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//add student following a club
app.post("/campusclubs/club/follow/:userId/:clubid", async(req,res) =>{
    console.log(req.body);
   
    try {
        const newFollow = await pool.query(
        "INSERT INTO follows (user_id, club_id) VALUES($1, $2) RETURNING *",
        [req.body.user_id, req.body.club_id]
        );
        res.json(newFollow);
        //console.log(req.body);
    } catch (err) {
        console.error(err.message);
    }
});

//add student unfollowing a club
app.delete("/campusclubs/club/unfollow/:userId/:clubid", async (req, res) =>{
    try {
        const user = await pool.query("DELETE FROM user_table WHERE user_id = $1 AND club_id = $2", 
        [req.params.userId, req.params.clubId]);
        res.json(" club unfollowed!");
    } catch (error) {
        console.error(error);
    }
});


// add tag to a post
app.post("/campusclubs/tag/add", async(req,res) =>{
    console.log(req.body);
   
    try {
        const addNewTag = await pool.query(
        "INSERT INTO get_tag (post_id, t_id) VALUES($1, $2) RETURNING *",
        [req.body.post_id, req.body.t_id]
        );
        res.json(addNewTag);
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
//get password for a username
app.get("/campusclubs/user/getpassword/:username", async(req,res)=>{
    try {
        const{username} = req.params;
        const allUsers = await pool.query(
            "SELECT user_password FROM user_table WHERE username = $1",
            [username]
        );
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});
app.get("/hello", async(req,res)=>{
    try {
        const obj = JSON.parse('{"var": "hello}');
        res.json(obj);
    } catch (error) {
        console.error(error.message);
    }
}
)

//get role id for a username
app.get("/campusclubs/user/getroleid/:username", async(req,res)=>{
    try {
        const{username} = req.params;
        const allUsers = await pool.query(
            "SELECT r_id FROM user_table WHERE username = $1",
            [username]
        );
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//get user by id
app.get("/campusclubs/user/getuserbyid/:id", async(req,res)=>{
    try {
        const{id} = req.params;
        const allUsers = await pool.query(
            "SELECT * FROM user_table WHERE user_id = $1",
            [id]
        );
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});
//get user by username
app.get("/campusclubs/user/getuserbyusername/:username", async(req,res)=>{
    try {
        const{username} = req.params;
        const allUsers = await pool.query(
            "SELECT * FROM user_table WHERE username = $1",
            [username]
        );
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//get userid from username
app.get("/campusclubs/user/getuserid/:username", async(req,res)=>{
    try {
        const{username} = req.params;
        const allUsers = await pool.query(
            "SELECT user_id FROM user_table WHERE username = $1",
            [username]
        );
        res.json(allUsers.rows[0]);
    } catch (error) {
        console.error(error.message);
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

//get posts for a club
app.get("/campusclubs/post/getclubposts/:club_id", async(req,res)=>{
    try {
        const{club_id} = req.params;
        const clubPosts = await pool.query(
            "SELECT * FROM post WHERE club_id = $1 ORDER BY urgency,last_updated", [club_id] );
        res.json(clubPosts);
    } catch (error) {
        console.error(error.message);
    }
});

//get all posts for main feed - all posts from all clubs that user follows
app.get("/campusclubs/post/getuserposts/:user_id", async(req,res)=>{
    try {
        const{user_id} = req.params;
        const myPosts = await pool.query(
            "SELECT p.* FROM post p , follows f , user_table u WHERE u.user_id = $1 AND u.user_id=f.user_id AND f.club_id=p.club_id ORDER BY p.urgency, p.last_updated",
            [user_id]
         );
        res.json(myPosts);
    } catch (error) {
        console.error(error.message);
    }
});

//get all clubs that user follows
app.get("/campusclubs/club/getmyclubs/:user_id", async(req,res)=>{
    try {
        const{user_id} = req.params;
        const myClubs = await pool.query(
            "SELECT c.* from club c, follows f, user_table u WHERE u.user_id = $1 AND u.user_id = f.user_id AND f.club_id = c.club_id",
            [user_id]
         );
        res.json(myClubs);
    } catch (error) {
        console.error(error.message);
    }
});

//delete user
app.delete("/campusclubs/user/delete/:id", async (req, res) =>{
    try {
        const{id} = req.params;
        const user = await pool.query("DELETE FROM user_table WHERE user_id = $1", [id]);
        res.json("user DELETED!");
    } catch (error) {
        console.error(error);
    }
});

//delete club

//delete post

//update post

//update club name

app.listen(5000, () => {
    console.log("server has started on port 5000! yay!");
});

