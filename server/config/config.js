module.exports = {
    dev: {
        server: {
            port: 8080
        },
        database: {
            uri: 'mongodb://localhost/partsDb'
        },
        loggly: {
            subdomain: 'ylpizra',
            token: 'f288145f-d147-49a8-b53e-d8e7d3498928'
        }
    },
    prod: {
        server: {

        },
        database: {
            uri: "mongodb://ylpizra:Avyd7550@ds151951.mlab.com:51951/inventory"
        },
        loggly: {
            subdomain: "ylpizra",
            token: "9ca86e4e-e624-4046-b52b-47465ecb6d63"
        }
    }
}