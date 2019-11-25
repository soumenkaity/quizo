create table users(
id int auto_increment,
username varchar(20) not null,
email varchar(100) not null,
password varchar(225),
expiry date,
role varchar(10),
KEY 'id' ('id'))ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


