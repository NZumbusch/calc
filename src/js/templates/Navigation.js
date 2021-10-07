main.templates["Navigation"] = () =>{
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <header class="navbar">
            <a href="#" data-link class="logo">Kopfrechnen</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                ${
                    (user === false) 
                    ?
                    `
                    <li><a href="#login" data-link><i class="bi bi-box-arrow-right"></i>Login</a></li>
                    `
                    :
                    `
                    <li><a href="#competition" data-link><i class="bi bi-stopwatch"></i>Wettkampf</a></li>
                    <li><a href="#training" data-link><i class="bi bi-stars"></i>Training</a></li>
                    <li><a href="#tricks" data-link><i class="bi bi-stars"></i>Tricks</a></li>
                    <li><a href="#account" data-link><i class="bi bi-person-lines-fill"></i>Benutzerkonto</a></li>
                    `
                }

                <li><a href="#elo" data-link><i class="bi bi-layer-forward"></i>Elo-Ranking</a></li>
                <li><a href="#chat" data-link><i class="bi bi-chat-dots"></i>Chat</a></li>
                <!--<li><a href="#impressum" data-link><i class="bi bi-bell"></i>Impressum</a></li>-->

                ${
                    (user === false) 
                    ? '' :
                    `<li><a onclick="axios.post('/kr/?type=logout').then((resolve) => {window.location.reload();});" href="#dashboard" data-link><i class="bi bi-box-arrow-left navbar-sidebar-list-link-element-icon"></i>Logout</a></li>`
                }


                ${
                    (user !== false && user.userType === 2) 
                    ? `<li><a href="#moderation" data-link><i class="bi bi-award navbar-sidebar-list-link-element-icon"></i>Moderation</a></li>` : ''
                }
            </ul>
        </header>

        <div class="navbar-sidebar-container">
            <div class="navbar-sidebar">
                <img class="navbar-sidebar-logo" src="/calc/assets/icon/kopfrechnen-logo.svg">
                <h1 class="navbar-sidebar-heading"><span onclick="window.location.hash='';">Kopfrechnen</span></h1>
                <ul class="navbar-sidebar-list">
                    ${
                        (user === false) 
                        ?
                        `
                        <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#login" data-link onclick="hide_navbar();"><i class="bi bi-box-arrow-right navbar-sidebar-list-link-element-icon"></i>Login</a></li>
                        `
                        :
                        `
                        <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#competition" data-link onclick="hide_navbar();"><i class="bi bi-stopwatch navbar-sidebar-list-link-element-icon"></i>Wettkampf</a></li>
                        <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#training" data-link onclick="hide_navbar();"><i class="bi bi-stars navbar-sidebar-list-link-element-icon"></i>Training</a></li>
                        <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#tricks" data-link onclick="hide_navbar();"><i class="bi bi-stars navbar-sidebar-list-link-element-icon"></i>Tricks</a></li>
                        <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#account" data-link onclick="hide_navbar();"><i class="bi bi-person-lines-fill navbar-sidebar-list-link-element-icon"></i>Benutzerkontro</a></li>
                        `
                    }

                    <li class="navbar-sidebar-list-spacer"></li>

                    <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#elo" data-link onclick="hide_navbar();"><i class="bi bi-layer-forward navbar-sidebar-list-link-element-icon"></i>Elo-Ranking</a></li>
                    <li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#chat" data-link onclick="hide_navbar();"><i class="bi bi-chat-dots navbar-sidebar-list-link-element-icon"></i>Chat</a></li>
                    <!--<li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" href="#dashboard" data-link onclick="hide_navbar();"><i class="bi bi-chat-dots navbar-sidebar-list-link-element-icon"></i>Impressum</a></li>-->
                
                    ${
                        (user === false) 
                        ? '' :
                        `<li class="navbar-sidebar-list-spacer"></li><li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element" onclick="axios.post('/kr/?type=logout').then((resolve) => {window.location.reload();});" href="#dashboard" data-link onclick="hide_navbar();"><i class="bi bi-box-arrow-left navbar-sidebar-list-link-element-icon"></i>Logout</a></li>`
                    }

                    ${
                        (user !== false && user.userType === 2) 
                        ? `<li class="navbar-sidebar-list-spacer"></li><li class="navbar-sidebar-list-link"><a class="navbar-sidebar-list-link-element"  href="#moderation" data-link onclick="hide_navbar();"><i class="bi bi-award navbar-sidebar-list-link-element-icon"></i>Moderation</a></li>` : ''
                    }
                </ul>
            </div>
        </div>
        `, callback: () => {
            document.querySelector(".menu-icon").addEventListener("click", (e) => {
                document.querySelector(".navbar-sidebar-container").classList.toggle("shown");
            })

            document.querySelector(".navbar-sidebar-container").addEventListener("click", (e) => {
                e = e || window.event;

                let targ = e.target  ||  e.srcElement  ||  e;
                if (targ.nodeType == 3) targ = targ.parentNode; // Safari bug
                
                if (targ !== e.currentTarget) {
                    return;
                }

                document.querySelector(".navbar-sidebar-container").classList.toggle("shown");
            })
        }});
    })
}


function hide_navbar () {
    document.querySelector(".navbar-sidebar-container").classList.remove("shown");
}