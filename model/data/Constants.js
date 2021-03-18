import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: process.env.USER_NAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME:'notmyusername',
        PASSWORD:'notmypassword'
    }
}