-- salons data --
insert INTO salons(name, location, services, opens, closes, image, createdAt, updatedAt)
VALUES ("Nail Town","403 East Street", "Nails", "10:30", "17:00", "https://cdn.petcarerx.com/LPPE/images/articlethumbs/Why-Are-Some-White-Cats-Deaf-Small.jpg", "2019-04-10 17:59:50", "2019-04-10 17:59:50");
insert INTO salons(name, location, services, opens, closes, image, createdAt, updatedAt)
VALUES ("Lotus Spa", "18 Grand Street", "Spa, Massage", "12:00", "20:00", "https://cdn0.wideopenpets.com/wp-content/uploads/2017/09/AdobeStock_104397934.jpeg", "2019-04-10 17:59:50", "2019-04-10 17:59:50"),
("Gordon's Salon", "155 Central Street", "Hair", "08:00", "18:00", "https://s3.amazonaws.com/bpv2/images/articles/54/S7CUUBsKuemGFbvXl3jDKMD5uUclqNQoOkw1XJRK.jpeg", "2019-04-10 17:59:50", "2019-04-10 17:59:50"),
("Kelly's Salon", "780 Elm Avenue", "Nails", "10:00", "15:00", "https://www.catster.com/wp-content/uploads/2017/11/Mackerel-Tabby-cat.jpg", "2019-04-10 17:59:50", "2019-04-10 17:59:50");

-- services data --
insert into services (serviceType, s_interval, createdAt, updatedAt)
VALUES ("nails", 30, "2019-04-10 17:59:50", "2019-04-10 17:59:50");
insert into services (serviceType, s_interval, createdAt, updatedAt)
VALUES ("spa", 60, "2019-04-10 17:59:50", "2019-04-10 17:59:50"),
("massage", 55, "2019-04-10 17:59:50", "2019-04-10 17:59:50"),
("hair", 45, "2019-04-10 17:59:50", "2019-04-10 17:59:50");