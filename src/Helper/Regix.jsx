export const isEmail = email => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
};

export const isPw = pw => {
    const pwRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    return pwRegex.test(pw);
};

export const isUsername = username => {
    const usernameRegex = /^[가-힣|a-z|A-Z|0-9|\_]{2,10}$/;

    return usernameRegex.test(username);
};