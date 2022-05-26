create table if not exists test.users
(
    email    varchar(256) charset utf8 null,
    password varchar(256) charset utf8 null,
    role     varchar(10) charset utf8  null
);

create table if not exists test.movies
(
    id      integer primary key auto_increment,
    name    varchar(256) charset utf8 null
);

INSERT INTO test.users (email, password, role) VALUES ('admi1@gmail.com', '63a9f0ea7bb98050796b649e85481845', 'admin1');
INSERT INTO test.movies (name) VALUES ('Titanic');
INSERT INTO test.movies (name) VALUES ('Harry Potter');
