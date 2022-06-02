create table if not exists test.users (
    email varchar(256) charset utf8 null,
    password varchar(256) charset utf8 null,
    role varchar(10) charset utf8 null,
    id int not null auto_increment primary key
);
create table if not exists test.movies (
    id integer primary key auto_increment,
    name varchar(256) charset utf8 null
);
INSERT INTO test.users (id, email, password, role)
VALUES (
        1,
        'admin1@gmail.com',
        '63a9f0ea7bb98050796b649e85481845',
        'Admin'
    );
INSERT INTO test.users (id, email, password, role)
VALUES (
        2,
        'admin2@gmail.com',
        '63a9f0ea7bb98050796b649e85481845',
        'Enterprise'
    );
INSERT INTO test.users (id, email, password, role)
VALUES (
        3,
        'admin3@gmail.com',
        '63a9f0ea7bb98050796b649e85481845',
        'User'
    );
INSERT INTO test.movies (name)
VALUES ('Titanic');
INSERT INTO test.movies (name)
VALUES ('Harry Potter');