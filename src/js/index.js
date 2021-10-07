var current_route = '';


/* 
    ######################
    MAIN HANDLER
    ######################
*/

class MainHandler {
    /*

    Main Javascript handler, used to manage other Javascript scripts and everything 
    happening.
    Uses ScriptHandler in order to include other scripts.
    This is always usable through the main variable which can, 
    f.e. be used with the debug function.

    */



    constructor () {
        // Current usage, options: '0' for developement, '1' and '2' for distribution
        this.type = 0;

        this.user = false;

        // Utility functions
        this.utility = new Utility();

        if (this.utility.getCookie("showDebugMessages") === "true") {
            this.type = 0;
        }


        // Handler for managing the import of scripts
        this.scriptHandler = new ScriptHandler(this, [
            
        ]);
        this.templates = {};

        this.usedTheme = {
            "--primary": "#20584d",
            "--primary-opaque": "#20584d",
            "--link-font-color": "#008080",
            "--secondary": "#003030",
            "--dark": "#292929",
            "--lighter-dark": "#202020",
            "--light": "#f6f5f4",
            "--gray": "#E3E3E3",
            "--teal": "#009688",
            "--teal-opaque": "#5dd39e",
            "--primary-light": "#c5d6d3",
            "--teal-light": "#b0f0e9",
            "--opaque-gray": "rgba(58, 58, 58, 0.4)",
            "--white": "#fffff",
        }
        this.defaultTheme = {
            "--primary": "#20584d",
            "--primary-opaque": "#20584d",
            "--link-font-color": "#008080",
            "--secondary": "#003030",
            "--dark": "#292929",
            "--lighter-dark": "#202020",
            "--light": "#f6f5f4",
            "--gray": "#E3E3E3",
            "--teal": "#009688",
            "--teal-opaque": "#5dd39e",
            "--primary-light": "#c5d6d3",
            "--teal-light": "#b0f0e9",
            "--opaque-gray": "rgba(58, 58, 58, 0.4)",
            "--white": "#fffff",
        }


        let jsonCustumSettings = this.utility.getCookie("kopfrechnenTheme");
        if (jsonCustumSettings.length >= 1) {
            let custumSettings = JSON.parse(jsonCustumSettings);
            for (let key in custumSettings) {
                this.usedTheme[key] = custumSettings[key];
            }
        }
        this.setColorTheme(this.usedTheme);
    }


    // Ability to simply change priority for distribution, also adds agility for on page decisions on how many debug messages should be used
    // Use it with main.debug('bla bla bla', 1, 'warn')
    debug (message, priority=0, type="debug") {
        /*
        Debug message if priority high enough, priority:
        0 = only in alpha, 
        1 = alpha and beta, 
        2 is always
        Use this if you want to add permanent debug messages, f.e. in try {} catch (e) {}
        */

        if (this.type <= priority) {
            switch (type) {
                case "debug":
                    console.debug(message);
                    break;
                case "log":
                    console.log(message);
                    break;
                case "warn":
                    console.warn(message);
                    break;
                case "error":
                    console.error(message);
                    break;
                default:
                    console.debug(message);
                    break;
            }
        }
    }

    
    setColorTheme (theme) {
        for (let key in theme) {
            document.documentElement.style.setProperty(key, theme[key]);
        }
    }
}

// Instantiate Main Class
var main = new MainHandler();  







// Function for calling the main Site 
function viewSite () {
    main.scriptHandler.functionLoad(() => {
        Site(main)
            .then((resolve) => {
            }, (reject) => {
                console.debug(reject);
            })
            .catch(console.debug)
    }, ["./dist/script/templates/Site.js"]) 
}

// Function for calling a bare Site
function viewBareSite () {
    main.scriptHandler.functionLoad(() => {
        bareSite(main)
            .then((resolve) => {
            }, (reject) => {
                console.debug(reject);
            })
            .catch(console.debug)
    }, ["./dist/script/templates/bareSite.js"]) 
}


// Routes for Route-Handler
/*
    To add a route, simple make a new entry into the dictionary/object. 
    The value has to be a dictionary/object with a callback and a js file name. (under /src/js/templates, leaving out the file extension)

*/
const routes = {
    '': {callback: viewSite, js: "Dashboard", requiresAccount: false},
    dashboard: {callback: viewSite, js: "Dashboard", requiresAccount: false},
    impressum: {callback: viewSite, js: "Impressum", requiresAccount: false},
    error: {callback: viewBareSite, js: "Error", requiresAccount: false},
    login: {callback: viewBareSite, js: "Login", requiresAccount: false},
    signup: {callback: viewBareSite, js: "Signup", requiresAccount: false},
    competition: {callback: viewSite, js: "Competition", requiresAccount: true},
    training: {callback: viewSite, js: "Training", requiresAccount: true},
    exercise: {callback: viewBareSite, js: "Exercise", requiresAccount: true},
    elo: {callback: viewSite, js: "Elo", requiresAccount: false},
    account: {callback: viewSite, js: "Account", requiresAccount: true},
    moderation: {callback: viewSite, js: "Moderation", requiresAccount: true},
    tricks: {callback: viewSite, js: "Tricks", requiresAccount: true},
    chat: {callback: viewSite, js: "Chat", requiresAccount: false}
};





var exerciseSettings = {};
var checkedUserLogged = false;
axios
    .post("/kr/?type=getCurrentUser")
    .then((resolve) => {
        if (resolve.data.type === "success") {
            loginUser(resolve.data.data);

            axios.defaults.headers.common = {
                "X-Requested-With": "XMLHttpRequest",
                "X-Requested-CSRF": resolve.data.data.csrf
            }
        }
        checkedUserLogged = true;
    })



let waitUntilStart = () => {
    /* 
    ######################
    ROUTE HANDLER
    ######################
    */


    if (checkedUserLogged === false) {
        setTimeout(() => {
            waitUntilStart();
        }, 100);
        return;
    }


    // Function for preventing page reloads on visiting links
    const navigateTo = url => {
        history.pushState(null, null, url);
        router();
    };


    // return current route 
    const getRoute = () => {
        const hash = window.location.hash.replace('#', '');


        // Check if route is already loaded
        if (current_route === hash && document.getElementById("app").innerHTML.length > 10) { return false; }


        current_route = hash;

        let route; 
        if (hash in routes) {
            route = routes[hash];
        } else {
            route = routes[''];
        }

        return route;
    }


    // Route handler
    const router = async () => {
        let gr = getRoute();

        if (gr === false) { return; }

        if (user !== false || gr.requiresAccount === false) {
            document.querySelector(".account-modal").style.display = 'none';
            document.querySelector(".trick-modal").style.display = 'none';

            gr.callback();
        } else {
            window.location.hash = "login";
        }
    }


    // "Re-route" on navigating in browser
    window.addEventListener("popstate", router);


    // Change behaviour of Links with "data-link" attribute
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });


    // Delay for some other reason such as login or CSRF-authentification
    if (false) {
        setTimeout(waitUntilStart, 200);
        return;
    }



    // set color variables
    main.setColorTheme("suso");


    // Instantiate Route Handler
    router();
}






// Main Handler for everything, above everything else for obvious purpose (in order to use it)
// After content load call function to start the route handler
document.addEventListener("DOMContentLoaded", () => {
    waitUntilStart();
});






/* 

Examples for adding new Scripts:
    Using main.scriptHandler.loadScripts to load an array of scripts and possibly execute callbacks:
        main.scriptHandler.loadScripts([
            {
                path: "./dist/script/components/signup.js", 
                callback: () => {
                    let signupForm = new Signup();
                }
            }
        ]);

    Using main.scriptHandler.functionLoad to firstly load (if not already) scripts and then execute one callback function:
        main.scriptHandler.functionLoad(() => {
            let signupform = new Signup();
            let loginform = new Login();
        }, [
            "./dist/script/components/signup.js", 
            "./dist/script/components/login.js"
        ]);

        main.scriptHandler.functionLoad(() => {
            let signupform = new Signup();
            let loginform = new Login();
        }, [
            "./dist/script/components/signup.js", 
            "./dist/script/components/login.js"
        ]);

        setTimeout(() => {
            main.scriptHandler.functionLoad(() => {
                let signupform = new Signup();
                let loginform = new Login();
            }, [
                "./dist/script/components/signup.js", 
                "./dist/script/components/login.js"
            ]);
        }, 2000)

*/


        