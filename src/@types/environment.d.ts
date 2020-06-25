declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT: string;
            HOST: string;
            // email
            EMAIL: string;
            PASS: STRING;
        }
    }
}

export {};
