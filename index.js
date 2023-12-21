const pg = require("pg")
const client = new pg.Client('postgres://localhost/gamestore')


const start = async () => {
    await client.connect()
    console.log("connected to database!")
    const SQL = `
        DROP TABLE IF EXISTS boardgames;
        CREATE TABLE boardgames(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            type VARCHAR(100),
            
        );
        INSERT INTO pokemon(name, type, generation) VALUES ('pikachu', 'electric', 1);
        INSERT INTO pokemon(name, type, generation) VALUES ('charizard', 'fire', 1);
        INSERT INTO pokemon(name, type, generation) VALUES ('magikarp', 'water', 1);
        INSERT INTO pokemon(name, type, generation) VALUES ('bulbasaur', 'grass', 1);
        INSERT INTO pokemon(name, type, generation) VALUES ('totodile', 'water', 2);
    `
    await client.query(SQL)
    console.log('tables created and data seeded')

    const port = process.env.PORT || 3002
    app.listen(port, () => {
        console.log(`app running on port ${port}`)
    })

}

start()