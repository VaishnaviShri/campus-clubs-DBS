CREATE DATABASE campusclubs;

CREATE TABLE user_table(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email_id VARCHAR(100),
    user_password VARCHAR(50),
    phone_no VARCHAR(10),
    display_name VARCHAR(100),
    rid int
);

create table club(
    club_id VARCHAR(10) PRIMARY KEY,
    club_name VARCHAR(50),
    category VARCHAR(50)
);

