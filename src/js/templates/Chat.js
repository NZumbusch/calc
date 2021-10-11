main.templates["Chat"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5 mb-5">
                <div class="card-body">
                    <h1 class="card-title">Chat</h1>

                    <div class="chat">
                        <div class="chat-messages">
                        
                        </div>
                        <div class="chat-create" ${user===false ? 'style="display: none;"': ''}>
                            <input type="text" class="chat-create-message">
                            <input type="submit" class="chat-create-send" onclick="sendMessage();" value=">">
                        </div>
                    </div>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `, callback: () => {
            loadMessages();

            setTimeout(() => {
                loadMessagesInterval = setInterval(() => {
                    if (document.querySelector(".chat-messages") === null || document.querySelector(".chat-messages") === undefined) {
                        clearInterval(loadMessagesInterval);
                    } else {
                        loadNewMessages();
                    }
                }, 2000);
            }, 2000);
        }});
    })
}


var loadMessagesInterval;
var latestMessage = 1631972100;
function loadMessages () {
    axios
        .post("/kr/?type=chat&chat=getLastMessages")
        .then((resolve) => {
            if (resolve.data.type === "success") { 
                resolve.data.data.sort((a, b) => { return a["messageCreated"] - b["messageCreated"]; })
                resolve.data.data.forEach((element, index) => {
                    document.querySelector(".chat > .chat-messages").innerHTML += getMessageHTML(element);

                    latestMessage = element.messageCreated;
                    setUserEloColors();
                    main.utility.goToBottom(document.querySelector(".chat > .chat-messages"));
                })
            }
        })
}
function loadNewMessages () {
    axios
        .post("/kr/?type=chat&chat=getNewMessages&startTime=" + latestMessage)
        .then((resolve) => {
            if (resolve.data.type === "success" && resolve.data.data !== false) { 
                resolve.data.data.sort((a, b) => { return a["messageCreated"] - b["messageCreated"]; })
                resolve.data.data.forEach((element, index) => {
                    document.querySelector(".chat > .chat-messages").innerHTML += getMessageHTML(element);

                    latestMessage = element.messageCreated;
                    setUserEloColors();
                    main.utility.goToBottom(document.querySelector(".chat > .chat-messages"));
                })
            }
        })
}
function getMessageHTML (element) {
    return `
        <div class="chat-messages-message ${user.userId === element.userId ? 'right' : 'left'}">
            <div class="chat-messages-message-author" userElo="${element.userElo}" onclick="messageAuthorModal(event, this, ${element.userId});">
                <span class="chat-messages-message-author-elo">[ ${element.userElo} ]</span>
                ${element.userName}: 
            </div>
            
            <div class="chat-messages-message-text">
                ${element.messageText}
            </div>
        </div>
    `;
}


function messageAuthorModal (event, element, userId) {
    axios
        .post("/kr/?type=getUserProfileCompact&userId=" + userId)
        .then((resolve) => {
            if (resolve.data.type === "success") {
                let usr = resolve.data.data;
                document.querySelector(".chat-user-modal").innerHTML = ``;
                document.querySelector(".chat-user-modal").innerHTML += `
                    <div class="chat-user-modal-instance" style="top: ${event.clientY}px; left: ${event.clientX}px;">
                        <i class="bi bi-x-circle chat-user-modal-instance-close" onclick="document.querySelector('.chat-user-modal').innerHTML = '';"></i>
                    
                        <p class="chat-user-modal-instance-author">${usr.userName} ${usr.userSurname} <span class="chat-user-modal-instance-author-elo">[ ${usr.userElo} ]</span></p>
                        <div class="chat-user-modal-instance-info1">
                            <p class="chat-user-modal-instance-info1-mail">${usr.userMail}</p>

                            <p>Letzte Aufgabe gemacht am ${main.utility.timeConverter(usr.userLastExercises[0].doneCreated)}</p>

                            <p>Insgesamt ${usr.userLearned} Aufgaben gelernt...</p>
                        </div>
                    </div>
                `;

                setElementStylesByElo(document.querySelector(".chat-user-modal-instance-author-elo"), usr.userElo);
            }
        })
}


function sendMessage () {
    let text = document.querySelector(".chat-create > .chat-create-message").value;
    if (text.length < 3) { return; }

    let postData = new FormData();
    postData.append("messageText", text);

    axios
        .post("/kr/?type=chat&chat=sendMessage", postData)
        .then((resolve) => {
            if (resolve.data.type === "success") {
                loadNewMessages();

                document.querySelector(".chat-create > .chat-create-message").value = '';
            }
        })
}


function setUserEloColors () {
    return new Promise((resolve, reject) => {
        document.querySelectorAll(".chat-messages-message-author").forEach((element, index) => {
            let elo = parseInt(element.getAttribute("userElo"));
        
            // elo = Math.floor(Math.random() * 3000); For testing

            setElementStylesByElo(element, elo);


            if (elo <= 1500) {
                element.parentElement.children[1].style.fontWeight = '300';
                element.parentElement.children[1].style.color = '#868686';
            } else {
                element.parentElement.children[1].style.fontWeight = '500';
                element.parentElement.children[1].style.color = 'var(--dark)';
            }
        })
    });
}


function setElementStylesByElo (element, elo) {
    let color = false;
    let fontWeight = '';
    let font = '';
    let fontSize = false;
    if (elo <= 1000) {
        color = '#868686';
        fontWeight = '300';
    } else if (elo <= 1250) {
        color = 'var(--dark)';
        fontWeight = '500';
    } else if (elo <= 1500) {
        color = '#073b4c';
        fontWeight = '500';
    } else if (elo <= 1750) {
        color = '#118ab2';
        fontWeight = '700';
    } else if (elo <= 2000) {
        color = '#06d6a0';
        fontWeight = '700';
    } else if (elo <= 2250) {
        color = '#ffd166';
        fontWeight = '1000';
        font = '';
        fontSize = '1.2em';
    } else if (elo <= 2500) {
        color = '#ef476f';
        fontWeight = '1000';
        font = '';
        fontSize = '1.2em';
    } else {
        color = '#c9184a';
        fontWeight = '1000';
        font = '';
        fontSize = '1.2em';
    }


    try {
        element.style.color = color;

        element.style.fontWeight = fontWeight;
        

        element.style.fontFamily = font;
    } catch {}
}