const pg = require('pg')
const client = new pg.Client('postgres://localhost/gamestore')



const start = async () => {
    await client.connect()
    console.log('connected to database')
    const SQL = `
        DROP TABLE IF EXISTS boardgames;
        DROP TABLE IF EXISTS videogames;
        
        
        CREATE TABLE videogames(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            type VARCHAR(100),
            rating INT

        );
        
        INSERT INTO videogames (name, type, rating) VALUES ('Assasins Creed Oddissey','third-person open world action/adventure',1);
        INSERT INTO videogames (name, type, rating) VALUES ('Sins of solar empire','real-time strategy',7);
        INSERT INTO videogames (name, type, rating) VALUES ('Battlefield 4','ww2-online',5);
        INSERT INTO videogames (name, type, rating) VALUES ('Age of Empires','real-time strategy',8);
        INSERT INTO videogames (name, type, rating) VALUES ('Shadow of Mordor','third-person open world action/adventure',4 );
        INSERT INTO videogames (name, type, rating) VALUES ('Factorio','supply chain management mixed with survival',6 );
        INSERT INTO videogames (name, type, rating) VALUES ('Skyrim','third-person open world action/adventure',2 );
        INSERT INTO videogames (name, type, rating) VALUES ('Totalwar Warhammer 3','turn-based strategy',3 );
        INSERT INTO videogames (name, type, rating) VALUES ('Minecraft','sandbox/survival/creative',10 );
        INSERT INTO videogames (name, type, rating) VALUES ('Cossacks','real-time strategy',9 );



        CREATE TABLE boardgames(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            type VARCHAR(100),
            img VARCHAR(500),
            minplayers INT
            

        );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Catan', 'strategy', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg', 3 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Battlestar_Galactica', 'co-op/strategy', 'https://upload.wikimedia.org/wikipedia/en/c/cd/Battlestar_Galactica_The_Board_Game%2C_Cover_Art.jpg?20150313065800', 4 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('pandemic', 'co-op/strategy', 'https://upload.wikimedia.org/wikipedia/en/3/36/Pandemic_game.jpg', 1 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Ticket to Ride', 'strategy', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg/220px-Ticket_to_Ride_Board_Game_Box_EN.jpg', 2 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Heckmeck', 'tile-based', 'https://cf.geekdo-images.com/oHISv77BmY6GlUKKBfkmvQ__itemrep/img/Dx0bHUbQEFLXQIHK4kopoypxyvU=/fit-in/246x300/filters:strip_icc()/pic4242833.jpg', 2 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Arkams Horror', 'co-op/strategy', 'https://cf.geekdo-images.com/09KeqyJEtu2qcskbtlOhqw__itemrep/img/s0-oHJmWc3FTF1py6zFA_z4d1aE=/fit-in/246x300/filters:strip_icc()/pic5726297.jpg', 1 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Monopoly', 'strategy', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81hnqTLIBCL._AC_UF894,1000_QL80_.jpg', 3 );
        INSERT INTO boardgames (name, type ,img ,minplayers) VALUES ('Azul', 'tile-based', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Picture_of_Azul_game_box.jpg/220px-Picture_of_Azul_game_box.jpg', 2 );
    `
    await client.query(SQL)
    console.log('tables created and data seeded')


     const port = process.env.PORT || 3002
     app.listen(port, () => {
         console.log(`app running on port ${port}`)
     })

}

start()