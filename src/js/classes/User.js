var user = false;


function loginUser (loginData) {
    user = {
        userId: loginData.userId,
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
                    return undefined; // setting can also be false
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
            if (this.getSetting(setting) !== undefined) {
                return this.getSetting(setting);
            } else {
                return standart;
            }
        },
        executeIfSettingTrue(setting, cb, undefinedToo = false) {
            if (this.getSetting(setting) === true || (undefinedToo === true && this.getSetting(setting) === undefined)) {
                cb();
            }
        },
        executeIfSettingFalse(setting, cb, undefinedToo = false) {
            if (this.getSetting(setting) === false || (undefinedToo === true && this.getSetting(setting) === undefined)) {
                cb();
            }
        },
        setCookieSetting (setting, value) {
            let settings = this.getCookieSettings();

            if (value !== false && value !== true) {
                settings[setting] = value.toString();
            } else {
                settings[setting] = value;
            }

            main.utility.setCookie("kopfrechnenBrowserSettings", JSON.stringify(settings));
        }
    }
}