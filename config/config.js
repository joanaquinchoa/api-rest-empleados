const config = {
    redis: {
        port: 6379,
        host: "127.0.0.1",
        retries: 3,
        time_to_retry: 100,
        time_live: 3600 // tiempo de vida en segundos
    }
}

module.exports = config;