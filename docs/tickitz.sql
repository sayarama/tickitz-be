-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS cinemas_id_seq;

-- Table Definition
CREATE TABLE "public"."cinemas" (
    "id" int4 NOT NULL DEFAULT nextval('cinemas_id_seq'::regclass),
    "movie_id" int8,
    "name" varchar,
    "city" varchar,
    "adress" varchar,
    "show_times" jsonb,
    "price" int8,
    "logo" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS months_id_seq;

-- Table Definition
CREATE TABLE "public"."months" (
    "id" int4 NOT NULL DEFAULT nextval('months_id_seq'::regclass),
    "name" varchar
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS movies_id_seq;

-- Table Definition
CREATE TABLE "public"."movies" (
    "id" int4 NOT NULL DEFAULT nextval('movies_id_seq'::regclass),
    "name" varchar,
    "release_date" timestamp,
    "duration" varchar,
    "genres" jsonb,
    "directed_by" varchar,
    "casts" jsonb,
    "synopsis" text,
    "poster" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS order_history_id_seq;

-- Table Definition
CREATE TABLE "public"."order_history" (
    "id" int4 NOT NULL DEFAULT nextval('order_history_id_seq'::regclass),
    "movie_id" int8,
    "cinema_id" int8,
    "user_id" int8,
    "created_at" time,
    "movie_started" time,
    "seat" jsonb,
    "barcode_url" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS payments_id_seq;

-- Table Definition
CREATE TABLE "public"."payments" (
    "id" int4 NOT NULL DEFAULT nextval('payments_id_seq'::regclass),
    "name" varchar,
    "logo" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS seats_id_seq;

-- Table Definition
CREATE TABLE "public"."seats" (
    "id" int4 NOT NULL DEFAULT nextval('seats_id_seq'::regclass),
    "seat_a" jsonb,
    "seat_b" jsonb,
    "seat_c" jsonb,
    "seat_d" jsonb,
    "seat_e" jsonb,
    "seat_f" jsonb,
    "seat_g" jsonb
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "first_name" varchar,
    "last_name" varchar,
    "phone_number" varchar,
    "email" varchar,
    "password" varchar,
    "photo_profile" text
);

INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "adress", "show_times", "price", "logo") VALUES
(3, 3, 'Cinepolis', 'Tangerang', 'Kota Bumi', '["17:00", "19:00", "21:00"]', 85000, 'https://www.roc21.com/blog/wp-content/uploads/2019/07/logo-cinepolis-dos.jpg');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "adress", "show_times", "price", "logo") VALUES
(5, 5, 'XXI', 'Tangerang', 'Bintaro Xchange', '["14:00", "17:00", "21:00"]', 60000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "adress", "show_times", "price", "logo") VALUES
(6, 6, '21 Cineplex', 'Jakarta', 'Pantai Indah Kapuk', '["14:00", "17:00", "19:00"]', 85000, 'https://w7.pngwing.com/pngs/61/608/png-transparent-samarinda-central-plaza-21-cineplex-cineplex-21-cinema-film-21-miscellaneous-blue-logo.png');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "adress", "show_times", "price", "logo") VALUES
(7, 7, 'Paradiso Ubud', 'Bali', 'Ubud Bali', '["14:00", "19:00", "21:00"]', 60000, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQBhUSEhIWEhMVEhcbGBIXFxoeGxYYFxgZIBoVGBgeKCggGBomHRcVIjIiJTUuLi4vGB8zODMtNygtLisBCgoKDg0OGhAQGy0lHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKystKzctLS0rLS03LS0rLS0tLTcrNzc3N//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EAEsQAAICAQIDBQQFCAQLCQAAAAECAAMRBAUGEiETFDFBUSJSYZIycYGRoQcVI0JicrHRFjR1wiU1U3SCorK0wdLhJDNDRGNzg5Oz/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB0RAQEBAAICAwAAAAAAAAAAAAABERIhQVECMXH/2gAMAwEAAhEDEQA/AL5ERMuhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARMzEBEzEDERM4gYiIgIiICIiAiIgIiICIiAiIgIiICIiAiVrf8AiDs9Q6V2oi01hrn5O0ZSzBVrC8wAY5z7Uru3cSpqNwWo6nWI7nCXFqwAx+jmpBy8ufXMavGvR5wbjuyU2hMPZawytNa8zke8fJV+LECV7QW63VaR2bWJSKnsRxVSC2aiQSS5IGcZ6esrVmi1Gq1lOlWw812nS++1j9Ln8OfHiqLyKF8Mkn4yas+PtfU4hrWwLqEfSFgSpu5ArY8cWKxXPwJz0M5ddxVS3LVpb6rL7LERepYLzMAXOPHA64z1lV3DRtoNn1VLuNQlXdLkDLgBmtYEYOehCYP1y6bzUqPplVQoOsr6AAeCu2On7sGSKrquLlXUlG1mpyrEE16egKCDg9H5iR9UmdNxFcrCvsTrC6dpXdSVQPUemWVj7LA9CB8PDwnPwVsunu2U2W0V2M913tMgJx2jAdT4fZNPDY5N00aL0XsNaMdfo94yB+Ahbjq3Df8AUEmt6W0QFTWP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'),
(8, 8, 'Beachwalk XX!', 'Bali', 'Ubud Bali', '["14:00", "19:00", "21:00"]', 85000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images'),
(9, 9, 'CGV', 'Tangerang', 'Transmart Bintaro', '["14:00", "17:00", "19:00", "21:00"]', 60000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/2560px-CGV_logo.svg.png'),
(10, 10, 'Cinepolis', 'Tangerang', 'Ulujami', '["17:00", "19:00", "21:00"]', 45000, 'https://www.roc21.com/blog/wp-content/uploads/2019/07/logo-cinepolis-dos.jpg'),
(11, 11, 'CGV', 'BSD', 'Teras Kota', '["14:00", "19:00", "21:00"]', 60000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/2560px-CGV_logo.svg.png'),
(12, 12, 'CGV', 'Tangerang', 'Transpark', '["17:00", "19:00", "21:00"]', 60000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/2560px-CGV_logo.svg.png'),
(14, 14, 'CGV', 'Jakarta', 'Senayan', '["17:00", "19:00", "21:00"]', 60000, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/CGV_logo.svg/2560px-CGV_logo.svg.png'),
(13, 13, 'XXI', 'Tangerang', 'Ciledug', '["17:00", "19:00", "21:00"]', 45000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images'),
(1, 1, 'XXI', 'Tangerang', 'Ciledug', '["17:00", "19:00", "21:00"]', 45000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images'),
(4, 1, 'XXI', 'Tangerang', 'Ciledug', '["17:00", "19:00", "21:00"]', 45000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images'),
(2, 2, 'XXI', 'Tangerang', 'Ciledug', '["17:00", "19:00", "21:00"]', 45000, 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2Ff%2Ff2%2FCinema-XXI.jpg%2Frevision%2Flatest%3Fcb%3D20180729144917&f=1&nofb=1&ipt=3bda7ff71df14d7b648832fb4b68f366548176ad8912c0f7bcdcabb61dd06bbc&ipo=images');



INSERT INTO "public"."movies" ("id", "name", "release_date", "duration", "genres", "directed_by", "casts", "synopsis", "poster") VALUES
(1, 'Kamen Rider Ryuuki', '2017-08-19 17:00:00', '1 Hour 55 Minutes', '["Animation", "Drama"]', 'Naoko Yamada', '["Miyu Irino", "Saori Hayami", "Aoi Yuki"]', 'The story revolves around Shôko Nishimiya, a grade school student who has impaired hearing. She transfers into a new school, where she is bullied by her classmates, especially Shôya Ishida. It gets to the point where she transfers to another school and as a result, Shôya is ostracized and bullied himself, with no friends to speak to and no plans for the future. Years later, he epicly sets himself on a path to redemption.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-r8OCw6tUxVA%2FWRrBA4KfrgI%2FAAAAAAAA6ZU%2FpRmcIpkj1UIj8YiRX14slPyHhNgRXOZDQCLcB%2Fs1600%2FA%252BSILENT%252BVOICE%252Bposter.jpg&f=1&nofb=1&ipt=ee050209e3d4bf7d913c01c3e7c8e1dbe22220584bce87abefe01902156e4a08&ipo=images');
INSERT INTO "public"."movies" ("id", "name", "release_date", "duration", "genres", "directed_by", "casts", "synopsis", "poster") VALUES
(2, 'Ajin : Demi Human', '2018-02-16 00:00:00', '2 Hour 12 Minutes', '["Action", "Fantasy", "Drama"]', 'Katsuyuki Motohiro', '["Takeru Sato", "Yuki Yamada", "Mamoru Miyano"]', 'War in Africa is suddenly sideswiped by the first known "Ajin" Demi-human who after death comes back to life and continues fighting! As more pop up around the globe Governments are capturing them to find out more about them. In Japan Nagai Kai a Highschool boy''s world is turned upside down when he''s hit by a truck killing him, but instantly he comes back to life! He just wants to be left alone but now he''s the most wanted person in Japan being the third reported Ajin out of a worldwide population of 46 known, the government wants him. And he has to run!', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FfINvKAGwJomcALdjB8DWmOC9ZQK.jpg&f=1&nofb=1&ipt=03a94484445527472ea349f8a95c1d62fe274275549c17a0fef1750d4f13bde8&ipo=images');
INSERT INTO "public"."movies" ("id", "name", "release_date", "duration", "genres", "directed_by", "casts", "synopsis", "poster") VALUES
(4, 'The Shawshank Redemption', '1997-04-12 00:00:00', '2 Hour 55 Minutes', '["Drama", "Slice of Life"]', 'Frank Darabont', '["Tim Robbins", "Morgan Freeman", "Bob Gunton"]', 'Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man''s unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vUgDFGJI9UpJl-xe-V0FOwHaLH%26pid%3DApi&f=1&ipt=bbe4a3ec605d5cac3c6c231d7c99adca2af2ba1fbdba13763ac315708849ae38&ipo=images');
INSERT INTO "public"."movies" ("id", "name", "release_date", "duration", "genres", "directed_by", "casts", "synopsis", "poster") VALUES
(6, 'Top Gun : Maverick', '2023-03-07 00:00:00', '2 Hours 10 Minutes', '["Action", "Drama"]', 'Joseph Kosinski', '["Tom Cruise", "Jennifer Connelly", "Miles Teller"]', 'Set 30 years after its predecessor, it follows Maverick''s return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - "TOPGUN"), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick''s deceased best friend Lieutenant Nick "Goose" Bradshaw, USN.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vintagemovieposters.co.uk%2Fwp-content%2Fuploads%2F2020%2F03%2FIMG_3565.jpeg&f=1&nofb=1&ipt=dd08b4eb9bc268bc7bee0a0c61a40c7eb36fca6c34aafd338668b46021ba848b&ipo=images'),
(5, 'The Dark Knight', '2009-08-11 00:00:00', '1 Hour 25 Minutes', '["Action", "Crime", "Drama"]', 'Christoper Nolan', '["Christian Bale", "Heath Ledger", "Aaron Eckhart"]', 'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman''s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FpKKvCaL1TPTVtbI6EeliyND3api.jpg&f=1&nofb=1&ipt=7e9b19b9726347cb8c7f7771227072452cda44c58fe07a3b6a576b6334668de5&ipo=images'),
(37, 'Kamen Rider Agito', '2017-08-19 00:00:00', '1 Hour 55 Minutes', '["Animation", "Drama"]', 'Naoko Yamada', '["Miyu Irino", "Saori Hayami", "Aoi Yuki"]', 'The story revolves around Shôko Nishimiya, a grade school student who has impaired hearing. She transfers into a new school, where she is bullied by her classmates, especially Shôya Ishida. It gets to the point where she transfers to another school and as a result, Shôya is ostracized and bullied himself, with no friends to speak to and no plans for the future. Years later, he epicly sets himself on a path to redemption.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-r8OCw6tUxVA%2FWRrBA4KfrgI%2FAAAAAAAA6ZU%2FpRmcIpkj1UIj8YiRX14slPyHhNgRXOZDQCLcB%2Fs1600%2FA%252BSILENT%252BVOICE%252Bposter.jpg&f=1&nofb=1&ipt=ee050209e3d4bf7d913c01c3e7c8e1dbe22220584bce87abefe01902156e4a08&ipo=images'),
(12, 'Rorouni Kenshin', '2016-05-05 17:00:00', '2 Hour 5 Minutes', '["Action", "Adventure", "Drama"]', 'Hoshimura Katai', '["Takeru Sato", "Megumi Kawahana"]', 'Live action from anime SAMURAI X', 'https://asianwiki.com/images/1/19/Rurouni_Kenshin-p2.jpg'),
(7, 'Avengers : Endgame', '2019-08-05 00:00:00', '3 Hours 2 Minutes', '["Action", "Adventure", "Drama"]', 'Anthony Russo', '["Robert Downey Jr", "Chris Evans", "Mark Ruffallo"]', 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos''s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FfTFRY6RJTpwkrYybwj4Wdf5nfgn.jpg&f=1&nofb=1&ipt=7fd3bdb1276a2409f9deaeee27ddf2a320337824fc465ba0223d022e6bd8cac0&ipo=images'),
(8, 'Tetris', '2023-05-07 00:00:00', '1 Hours 58 Minutes', '["Biography", "Drama", "History"]', 'Jon S. Baird', '["Taron Egerton", "Mara Huf", "Miles Barrow"]', 'An enterprising game developer risks everything in a race to outmaneuver duplicitous insiders to negotiate a deal with Soviet Union bureaucrats for the international licensing rights to what would eventually become one of the most recognizable and widely played games in history.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkeithlovesmovies.com%2Fwp-content%2Fuploads%2F2023%2F03%2FApple_TV_Tetris_key_art_2x3.jpg&f=1&nofb=1&ipt=50c7bf0f9ca73da95bbbd347da5d67a5ada236759533ac95ce0021e474308e1e&ipo=images'),
(9, 'Interstellar', '2015-05-06 00:00:00', '2 Hours 8 Minutes', '["Adventure", "Drama", "Sci-Fi"]', 'Christoper Nolan', '["Matthew McConaughey", "Anne Hathway", "Jessica Chastain"]', 'Earth''s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind''s survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpicfiles.alphacoders.com%2F349%2Fthumb-1920-349599.jpg&f=1&nofb=1&ipt=f77c5f78f64ae1974f9600c19a55dec704c15c66314f5aec30dafcd52f561ed7&ipo=images'),
(10, 'Kingsman : The Secret Service', '2014-05-12 00:00:00', '2 Hours 19 Minutes', '["Action", "Adveture", "Drama"]', 'Matthew Vaughn', '["Colin Firth", "Taron Egerton", "Samuel L. Jackson"]', 'A young man named Gary "Eggsy" Unwin (Taron Egerton), whose father died when he was a young boy, is dealing with living with the creep his mother is with now, who mistreats her and him. He goes out and does something to one of the creep''s friends. He gets arrested and he calls the number a man gave him around the time his father died, to call if he needs help. A man named Harry Hart (Colin Firth) approaches him and tells him he''s the one who helped him. He tells him that he knew his father. When the man Eggsy slighted wants some payback, Harry takes care of him and his companions single-handedly. Harry then tells Eggsy that he''s part of a secret organization called "The Kingsman", and his father was also part of it.', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fis1.mzstatic.com%2Fimage%2Fthumb%2FVideo3%2Fv4%2F4e%2Fdf%2F0f%2F4edf0f4b-83cf-2640-8c6c-de22a54864db%2Fsource%2F2000x3000sr.jpg&f=1&nofb=1&ipt=c00a7b906ee6bd894010bb512f5a6422ee2cd4ea861acca63b31656bbf289dbd&ipo=images'),
(13, 'Entaku Houkai', '2016-05-05 17:00:00', '2 Hour 5 Minutes', '["Action", "Adventure", "Drama"]', 'Hoshimura Katai', '["Takeru Sato", "Megumi Kawahana"]', 'Live action from anime SAMURAI X', 'https://asianwiki.com/images/1/19/Rurouni_Kenshin-p2.jpg'),
(14, 'Entaku Houkai', '2016-05-05 17:00:00', '2 Hour 5 Minutes', '["Action", "Adventure", "Drama"]', 'Hoshimura Katai', '["Takeru Sato", "Megumi Kawahana"]', 'Live action from anime SAMURAI X', 'https://asianwiki.com/images/1/19/Rurouni_Kenshin-p2.jpg'),
(15, 'Mitake Kansatsu', '2016-05-05 17:00:00', '2 Hour 5 Minutes', '["Action", "Adventure", "Drama"]', 'Hoshimura Katai', '["Takeru Sato", "Megumi Kawahana"]', 'Live action from anime SAMURAI X', 'https://asianwiki.com/images/1/19/Rurouni_Kenshin-p2.jpg'),
(17, 'Enma Tenki', '2017-05-05 17:00:00', '1 Hour 5 Minutes', '["Action", "Adventure", "Drama"]', 'Hoshimura Katai', '["Takeru Sato", "Megumi Kawahana"]', 'Live action from anime SAMURAI X', 'https://asianwiki.com/images/1/19/Rurouni_Kenshin-p2.jpg');







INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(1, 'Ilhan', 'Randa', '085526748241', 'randa@gmail.com', 'ilhamranda', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(2, 'Wahyu', 'Mega', '087566341643', 'wahyu@gmail.com', 'wahyumega', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(3, 'Irwan', 'Ahmad', '085143278844', 'irwan@gmail.com', 'irwanahmad', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(4, 'Asep', 'Kadasep', '089577629979', 'asep@gmail.com', 'asepkadasep', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(5, 'Teri', 'Indah', '087699215756', 'indah@gmail.com', 'teriindah', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(6, 'Indira', 'Naylarissa', '082256985537', 'indira@gmail.com', 'indiranaylarissa', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(7, 'Tania', 'Rahma', '087742895567', 'tania@gmail.com', 'taniarahma', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(8, 'Mega', 'Indah', '087563214678', 'mega@gmail.com', 'megaindah', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(9, 'Rahma', 'Laras', '089975446783', 'rahma@gmail.com', 'rahmalaras', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(10, 'Dennisa', 'Cherya', '089788437681', 'dennisa@gmail.com', 'dennisacherya', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(11, 'Wawan', 'Sunarwan', '089976543289', 'wawan@gmail.com', 'wawansunarwan', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(12, 'Silvia', 'Valleria', '082256748931', 'silvia@gmail.com', 'silviavalleria', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(13, 'Imelia', 'Mieru', '082178693342', 'mieru@gmail.com', 'imeliamieru', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(15, 'Ahmad', 'Dadang', '082178691564', 'dadang@gmail.com', '$2b$10$1s7I28PQbzi6FRHRt0XgFOPoIc.Ubx5X5oGa.qAw6oybe4jpsz6DG', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(17, 'yura', 'yozakura', '082178691564', 'yura@gmail.com', '$2b$10$8yzzuXX3IQvBSHXqzywrZubDG99aHuxOBtb95rdp1I3cr/xVjdHZ.', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(16, 'anwar', 'maulana', '082178691564', 'kurnia@gmail.com', '$2b$10$FkeDFxD3bFn/HF4HDYY8NewHu8e3CoVSX/cX14ZkzArOTDmMy5rXO', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(20, 'patricia', 'valita', '082214765342', 'patricia@gmail.com', '$2b$10$Lg/TmDA9Hlb4zYHXtr6IY.JDRkgbYtmablzcSoGmPB5uaqTq7AqAK', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(21, 'patricia', 'valita', '082214765342', 'patricia', '$2b$10$bjL3vSipVgrxbJyEwodcXOS75OdxFSS0eUoYZHrBAjZxkwMOGarZi', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(22, 'gawr', 'gura', '082178691564', 'gawr@gmail.com', '$2b$10$U86zAaRSl/evIIOtBTCxvONXH2UlksMmp4ZmdpzwI5nL45p26a69q', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'),
(23, 'ozora', 'subaru', '082178691564', 'ozora@gmail.com', '$2b$10$z1M3n2q3qNJOxjw70bD0buviy8rActTxiodDBRj6UiA1OFIVGqBj.', 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png');
