const VALID_LOGIN_CREDS = {
    username: "test1602@gmail.com",
    password: "Test@12345"
}

const INVALID_LOGIN_CREDS = {
    username: "fsdfa",
    password: "fdsaf"
}

const INVALID_LOGIN_USERNAME = {
    username: "!@#$%",
    password: "SuperSecretPassword!"
}

const INVALID_LOGIN_PASSWORD = {
    username: "tomsmith",
    password: "fhksfhdfkhsjahf!"
}
const INVALID_LOGIN ={
    username: "abc",
    password: "xyz!"
}

exports.VALID_LOGIN_CREDS = VALID_LOGIN_CREDS;
exports.INVALID_LOGIN_CREDS = INVALID_LOGIN_CREDS;
exports.INVALID_LOGIN_USERNAME = INVALID_LOGIN_USERNAME;
exports.INVALID_LOGIN_PASSWORD = INVALID_LOGIN_PASSWORD;
exports.INVALID_LOGIN = INVALID_LOGIN;
