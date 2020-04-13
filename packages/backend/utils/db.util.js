const getDbConnections = () => {
    const {
        DATABASE_HOST,
        DATABASE_PORT,
        DATABASE_USER,
        DATABASE_PASS,
        DATABASE_NAME,
    } = process.env;
    return {
        host: DATABASE_HOST,
        port: +DATABASE_PORT,
        user: DATABASE_USER,
        password: DATABASE_PASS,
        database: DATABASE_NAME
    }
}

exports.getKnexConfig = () => {
    const connection = getDbConnections();

    const {
        DATABASE_POOL_MIN: min,
        DATABASE_POOL_MAX: max,
    } = process.env;
    return {
        client: 'postgresql',
        connection,
        pool: {
            min: +min,
            max: +max
        }
    };
}