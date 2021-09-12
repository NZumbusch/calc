var user = false;


function loginUser (loginData) {
    user = {
        userType: loginData.userType,
        userName: loginData.userName,
        userSurname: loginData.userSurname,
        userMail: loginData.userMail,
        userBirthday: loginData.userBirthday,
        userRelation: loginData.userRelation,
        userSettings: loginData.userSettings,
        userElo: loginData.userElo,
        getSetting (setting) {
            if (setting in this.userSettings) {
                return this.userSettings[setting];
            } else {
                if (this.getCookieSettings() && setting in this.getCookieSettings()) {
                    return this.getCookieSettings()[setting];
                } else {
                    return false;
                }
            }
        },
        getCookieSettings () {
            let string = main.utility.getCookie("kopfrechnenBrowserSettings");
            try {
                return JSON.parse(string);
            } catch (err) {
                main.utility.setCookie("kopfrechnenBrowserSettings", JSON.stringify({}));
                return {};
            }
        },
        getSettingDefault (setting, standart) {
            if (this.getSetting(setting)) {
                return this.getSetting(setting);
            } else {
                return standart;
            }
        },
        setCookieSetting (setting, value) {
            let settings = this.getCookieSettings();
            settings[setting] = value.toString();
            main.utility.setCookie("kopfrechnenBrowserSettings", JSON.stringify(settings));
        }
    }
}