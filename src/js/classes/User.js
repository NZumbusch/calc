var user = false;


function loginUser (loginData) {
    user = {
        userName: loginData.userName,
        userSurname: loginData.userSurname,
        userMail: loginData.userMail,
        userBirthday: loginData.userBirthday,
        userRelation: loginData.userRelation,
        userSettings: loginData.userSettings
    }
}