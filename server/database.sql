CREATE DATABASE campusclubs;

CREATE TABLE user_table(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email_id VARCHAR(100) UNIQUE,
    user_password VARCHAR(50),
    phone_no VARCHAR(10),
    display_name VARCHAR(100),
    r_id int,
    FOREIGN KEY (r_id) REFERENCES user_role (r_id)
);

create table user_role(
    r_id int PRIMARY KEY, 
    r_name varchar(50)
    );

create table club(
    club_id VARCHAR(10) PRIMARY KEY,
    club_name VARCHAR(50),
    category VARCHAR(50)
);




create table follows( 
    user_id int NOT NULL,
    club_id varchar(10) NOT NULL,
    PRIMARY KEY (user_id, club_id),
    FOREIGN KEY (user_id) REFERENCES user_table (user_id),
    FOREIGN KEY (club_id) REFERENCES club (club_id)
);

create table is_clubhead_of(
    user_id int NOT NULL,
    club_id varchar(10) NOT NULL,
    PRIMARY KEY (user_id, club_id),
    FOREIGN KEY (user_id) REFERENCES user_table (user_id),
    FOREIGN KEY (club_id) REFERENCES club (club_id)
    );


create table post(
    post_id varchar(10) SERIAL PRIMARY KEY, 
    title varchar(500), 
    body varchar(1000), 
    last_updated varchar(20), 
    urgency int, 
    media_link varchar(100), 
    club_id varchar(10) NOT NULL,
    FOREIGN KEY (club_id) REFERENCES club (club_id)
    );

create table tag(
    t_id int PRIMARY KEY, 
    label varchar(50)
    );

create table get_tag( 
    post_id varchar(10) NOT NULL,
    t_id int NOT NULL,
    PRIMARY KEY (post_id, t_id),
    FOREIGN KEY (post_id) REFERENCES post (post_id),
    FOREIGN KEY (t_id) REFERENCES tag (t_id)
);

