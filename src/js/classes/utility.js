
class Utility {
    constructor () {

    }


    containerFooter () {
        return `
        <div class="card-copyright">
            <a href="#impressum" data-link>&copy 2021 HBZ @ Heinrich-Suso-Gymnasium Konstanz</a>
        </div>
        `;
    }
    


    setCookie (name, value, sameSite="Strict", expires="Thu, 18 Dec 2024 12:00:00 UTC") {
        document.cookie = `${name}=${value}; sameSite=${sameSite}; expires=${expires}`; 
    }


    
    getCookie (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    goToBottom (element) {
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }



    scrollIntoMiddle (element) {
        let top = element.documentOffsetTop() - ( element.parentElement / 2 );
        element.parentElement.scrollTo( 0, top );
    }


    timeConverter (UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    timeConverterHours (UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        let hour = a.getHours();
        let min = a.getMinutes();

        if (hour.toString().length < 2) {
            hour = "0" + hour;
        }
        if (min.toString().length < 2) {
            min = "0" + min;
        }

        let time = hour + ':' + min;
        return time;
    }



    fadeOutEffect (element) {
        var fadeEffect = setInterval(function () {
            if (!element.style.opacity) {
                element.style.opacity = 1;
            }
            if (element.style.opacity > 0) {
                element.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 70);
    }





    shareButton (link) {
        return {html: `
        
        `, cb: () => {
        }};
    }




    toggleElementFullscreen (element) {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    }


    exitElementFullscreen (element) {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }


    showElementFullscreen (element) {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
        } else {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }
    }



    getTextFile () {
        return new Promise((resolve, reject) => {
            if (document.getElementById("utilityFileUpload") === null) {
                document.body.innerHTML += `
                <!-- The 'multiple' attribute lets users select multiple files. -->
                <input type="file" id="utilityFileUpload">
                `;
            }
    
            let fileSelector = document.getElementById('utilityFileUpload');
            fileSelector.click();
            fileSelector.addEventListener('change', (event) => {
                let file = event.target.files[0];
        
    
                let reader = new FileReader();
                reader.addEventListener('load', (event) => {
                    resolve(reader.result);
                });
                reader.readAsText(file);
            });
        })
    }


    isJSON (string) {
        string = typeof string !== "string"
            ? JSON.stringify(string)
            : string;
    
        try {
            string = JSON.parse(string);
        } catch (e) {
            return false;
        }
    
        if (typeof string === "object" && string !== null) {
            return true;
        }
    
        return false;
    }




    downloadObjectAsJson (exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}




if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(what, i) {
        i = i || 0;
        var L = this.length;
        while (i < L) {
            if(this[i] === what) return i;
            ++i;
        }
        return -1;
    };
}

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

Element.prototype.documentOffsetTop = function () {
    return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
};

Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

String.prototype.getIndicesOf = function (str) {
    let searchStr = this;
    let searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    let startIndex = 0, index, indices = [];
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}




// Resize events

window.addEventListener("resize", (e) => {

})