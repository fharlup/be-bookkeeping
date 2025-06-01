namespace NodeJS {
    interface ProcessEnv {
        DB_DATABASE: string = process.env.DB_DATABASE;
        DB_USERNAME: string;
        DB_PASSWORD: string;
    }
}