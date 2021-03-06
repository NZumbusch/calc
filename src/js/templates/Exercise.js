main.templates["Exercise"] = () => {
    let html = ``;

    

    return new Promise((resolve, reject) => {
        if (user === false || exerciseSettings === undefined || exerciseSettings === null) {resolve({html: '', callback: () => {}})}; // Not logged in


        html += `
        <svg class="exercise-kopfrechnen-logo" width="240" height="67" viewBox="0 0 240 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.30078 17.7344L5.55859 20.6875V28H0.285156V2.40625H5.55859V14.0078L7.87891 10.8262L14.4004 2.40625H20.8867L11.7988 13.7793L21.1504 28H14.875L8.30078 17.7344ZM25.1195 18.3145C25.1195 16.4277 25.4828 14.7461 26.2094 13.2695C26.9359 11.793 27.9789 10.6504 29.3383 9.8418C30.7094 9.0332 32.2973 8.62891 34.102 8.62891C36.6684 8.62891 38.7602 9.41406 40.3773 10.9844C42.0063 12.5547 42.9145 14.6875 43.102 17.3828L43.1371 18.6836C43.1371 21.6016 42.3227 23.9453 40.6938 25.7148C39.0648 27.4727 36.8793 28.3516 34.1371 28.3516C31.3949 28.3516 29.2035 27.4727 27.5629 25.7148C25.934 23.957 25.1195 21.5664 25.1195 18.543V18.3145ZM30.1996 18.6836C30.1996 20.4883 30.5395 21.8711 31.2191 22.832C31.8988 23.7812 32.8715 24.2559 34.1371 24.2559C35.3676 24.2559 36.3285 23.7871 37.0199 22.8496C37.7113 21.9004 38.057 20.3887 38.057 18.3145C38.057 16.5449 37.7113 15.1738 37.0199 14.2012C36.3285 13.2285 35.3559 12.7422 34.102 12.7422C32.8598 12.7422 31.8988 13.2285 31.2191 14.2012C30.5395 15.1621 30.1996 16.6562 30.1996 18.6836ZM66.9871 18.666C66.9871 21.5957 66.3191 23.9453 64.9832 25.7148C63.659 27.4727 61.866 28.3516 59.6043 28.3516C57.6824 28.3516 56.1297 27.6836 54.9461 26.3477V35.3125H49.866V8.98047H54.577L54.7527 10.8438C55.9832 9.36719 57.5887 8.62891 59.5691 8.62891C61.9129 8.62891 63.7352 9.49609 65.0359 11.2305C66.3367 12.9648 66.9871 15.3555 66.9871 18.4023V18.666ZM61.907 18.2969C61.907 16.5273 61.5906 15.1621 60.9578 14.2012C60.3367 13.2402 59.4285 12.7598 58.2332 12.7598C56.6395 12.7598 55.5438 13.3691 54.9461 14.5879V22.375C55.5672 23.6289 56.6746 24.2559 58.2684 24.2559C60.6941 24.2559 61.907 22.2695 61.907 18.2969ZM75.1398 28V12.707H72.3098V8.98047H75.1398V7.36328C75.1398 5.23047 75.7492 3.57813 76.968 2.40625C78.1984 1.22266 79.9152 0.630859 82.1184 0.630859C82.8215 0.630859 83.6828 0.748047 84.7023 0.982422L84.6496 4.91992C84.2277 4.81445 83.7121 4.76172 83.1027 4.76172C81.1926 4.76172 80.2375 5.6582 80.2375 7.45117V8.98047H84.0168V12.707H80.2375V28H75.1398ZM100.941 13.7441C100.25 13.6504 99.6402 13.6035 99.1129 13.6035C97.191 13.6035 95.9313 14.2539 95.3336 15.5547V28H90.2535V8.98047H95.0523L95.193 11.248C96.2125 9.50195 97.6246 8.62891 99.4293 8.62891C99.9918 8.62891 100.519 8.70508 101.011 8.85742L100.941 13.7441ZM115.404 28.3516C112.615 28.3516 110.342 27.4961 108.584 25.7852C106.838 24.0742 105.965 21.7949 105.965 18.9473V18.4551C105.965 16.5449 106.334 14.8398 107.072 13.3398C107.811 11.8281 108.854 10.668 110.201 9.85938C111.561 9.03906 113.107 8.62891 114.842 8.62891C117.443 8.62891 119.488 9.44922 120.977 11.0898C122.477 12.7305 123.227 15.0566 123.227 18.0684V20.1426H111.115C111.279 21.3848 111.771 22.3809 112.592 23.1309C113.424 23.8809 114.473 24.2559 115.738 24.2559C117.695 24.2559 119.225 23.5469 120.326 22.1289L122.822 24.9238C122.061 26.002 121.029 26.8457 119.729 27.4551C118.428 28.0527 116.986 28.3516 115.404 28.3516ZM114.824 12.7422C113.816 12.7422 112.996 13.082 112.363 13.7617C111.742 14.4414 111.344 15.4141 111.168 16.6797H118.234V16.2754C118.211 15.1504 117.906 14.2832 117.32 13.6738C116.734 13.0527 115.902 12.7422 114.824 12.7422ZM137.637 24.2559C138.575 24.2559 139.336 23.998 139.922 23.4824C140.508 22.9668 140.813 22.2812 140.836 21.4258H145.6C145.588 22.7148 145.237 23.8984 144.545 24.9766C143.854 26.043 142.905 26.875 141.698 27.4727C140.502 28.0586 139.178 28.3516 137.725 28.3516C135.006 28.3516 132.862 27.4902 131.291 25.7676C129.721 24.0332 128.936 21.6426 128.936 18.5957V18.2617C128.936 15.332 129.715 12.9941 131.274 11.248C132.832 9.50195 134.971 8.62891 137.69 8.62891C140.069 8.62891 141.973 9.30859 143.403 10.668C144.844 12.0156 145.577 13.8145 145.6 16.0645H140.836C140.813 15.0801 140.508 14.2832 139.922 13.6738C139.336 13.0527 138.563 12.7422 137.602 12.7422C136.418 12.7422 135.522 13.1758 134.913 14.043C134.315 14.8984 134.016 16.293 134.016 18.2266V18.7539C134.016 20.7109 134.315 22.1172 134.913 22.9727C135.51 23.8281 136.418 24.2559 137.637 24.2559ZM157.057 11.0547C158.405 9.4375 160.098 8.62891 162.137 8.62891C166.262 8.62891 168.354 11.0254 168.413 15.8184V28H163.333V15.959C163.333 14.8691 163.098 14.0664 162.63 13.5508C162.161 13.0234 161.382 12.7598 160.292 12.7598C158.804 12.7598 157.725 13.334 157.057 14.4824V28H151.977V1H157.057V11.0547ZM180.521 8.98047L180.679 11.1777C182.038 9.47852 183.861 8.62891 186.146 8.62891C188.161 8.62891 189.661 9.2207 190.646 10.4043C191.63 11.5879 192.134 13.3574 192.157 15.7129V28H187.077V15.8359C187.077 14.7578 186.843 13.9785 186.374 13.498C185.905 13.0059 185.126 12.7598 184.036 12.7598C182.607 12.7598 181.534 13.3691 180.82 14.5879V28H175.739V8.98047H180.521ZM208.379 28.3516C205.589 28.3516 203.316 27.4961 201.558 25.7852C199.812 24.0742 198.939 21.7949 198.939 18.9473V18.4551C198.939 16.5449 199.308 14.8398 200.046 13.3398C200.785 11.8281 201.828 10.668 203.175 9.85938C204.535 9.03906 206.082 8.62891 207.816 8.62891C210.418 8.62891 212.462 9.44922 213.951 11.0898C215.451 12.7305 216.201 15.0566 216.201 18.0684V20.1426H204.089C204.254 21.3848 204.746 22.3809 205.566 23.1309C206.398 23.8809 207.447 24.2559 208.712 24.2559C210.67 24.2559 212.199 23.5469 213.3 22.1289L215.796 24.9238C215.035 26.002 214.004 26.8457 212.703 27.4551C211.402 28.0527 209.961 28.3516 208.379 28.3516ZM207.798 12.7422C206.791 12.7422 205.97 13.082 205.337 13.7617C204.716 14.4414 204.318 15.4141 204.142 16.6797H211.209V16.2754C211.185 15.1504 210.88 14.2832 210.295 13.6738C209.709 13.0527 208.877 12.7422 207.798 12.7422ZM227.377 8.98047L227.535 11.1777C228.895 9.47852 230.717 8.62891 233.002 8.62891C235.018 8.62891 236.518 9.2207 237.502 10.4043C238.486 11.5879 238.99 13.3574 239.014 15.7129V28H233.934V15.8359C233.934 14.7578 233.699 13.9785 233.23 13.498C232.762 13.0059 231.982 12.7598 230.893 12.7598C229.463 12.7598 228.391 13.3691 227.676 14.5879V28H222.596V8.98047H227.377Z" fill="black"/>
            <path d="M63.7383 61.2344C62.6602 61.2344 61.6836 60.9687 60.8086 60.4375C59.9414 59.9062 59.2656 59.168 58.7812 58.2227C58.2969 57.2695 58.0547 56.2031 58.0547 55.0234V54.5195C58.0547 53.3008 58.2891 52.2031 58.7578 51.2266C59.2344 50.25 59.8945 49.4844 60.7383 48.9297C61.582 48.3672 62.4961 48.0859 63.4805 48.0859C65.0195 48.0859 66.2383 48.6133 67.1367 49.668C68.043 50.7148 68.4961 52.1484 68.4961 53.9687V54.7539H59.4492V55.0234C59.4492 56.4609 59.8594 57.6602 60.6797 58.6211C61.5078 59.5742 62.5469 60.0508 63.7969 60.0508C64.5469 60.0508 65.207 59.9141 65.7773 59.6406C66.3555 59.3672 66.8789 58.9297 67.3477 58.3281L68.2266 58.9961C67.1953 60.4883 65.6992 61.2344 63.7383 61.2344ZM63.4805 49.2812C62.4258 49.2812 61.5352 49.668 60.8086 50.4414C60.0898 51.2148 59.6523 52.2539 59.4961 53.5586H67.1016V53.4062C67.0625 52.1875 66.7148 51.1953 66.0586 50.4297C65.4023 49.6641 64.543 49.2812 63.4805 49.2812ZM72.7969 61H71.3906V48.3203H72.7969V61ZM71.1445 44.6523C71.1445 44.3867 71.2305 44.1641 71.4023 43.9844C71.5742 43.7969 71.8086 43.7031 72.1055 43.7031C72.4023 43.7031 72.6367 43.7969 72.8086 43.9844C72.9883 44.1641 73.0781 44.3867 73.0781 44.6523C73.0781 44.918 72.9883 45.1406 72.8086 45.3203C72.6367 45.5 72.4023 45.5898 72.1055 45.5898C71.8086 45.5898 71.5742 45.5 71.4023 45.3203C71.2305 45.1406 71.1445 44.918 71.1445 44.6523ZM77.9531 48.3203L78 50.4883C78.4766 49.707 79.0703 49.1133 79.7812 48.707C80.4922 48.293 81.2773 48.0859 82.1367 48.0859C83.4961 48.0859 84.5078 48.4687 85.1719 49.2344C85.8359 50 86.1719 51.1484 86.1797 52.6797V61H84.7852V52.668C84.7773 51.5352 84.5352 50.6914 84.0586 50.1367C83.5898 49.582 82.8359 49.3047 81.7969 49.3047C80.9297 49.3047 80.1602 49.5781 79.4883 50.125C78.8242 50.6641 78.332 51.3945 78.0117 52.3164V61H76.6172V48.3203H77.9531ZM180.406 54.7891C180.406 56.7656 179.969 58.3359 179.094 59.5C178.219 60.6562 177.047 61.2344 175.578 61.2344C173.844 61.2344 172.516 60.625 171.594 59.4062V65.875H170.199V48.3203H171.5L171.57 50.1133C172.484 48.7617 173.809 48.0859 175.543 48.0859C177.059 48.0859 178.246 48.6602 179.105 49.8086C179.973 50.957 180.406 52.5508 180.406 54.5898V54.7891ZM179 54.543C179 52.9258 178.668 51.6484 178.004 50.7109C177.34 49.7734 176.414 49.3047 175.227 49.3047C174.367 49.3047 173.629 49.5117 173.012 49.9258C172.395 50.3398 171.922 50.9414 171.594 51.7305V57.8125C171.93 58.5391 172.41 59.0937 173.035 59.4766C173.66 59.8594 174.398 60.0508 175.25 60.0508C176.43 60.0508 177.348 59.582 178.004 58.6445C178.668 57.6992 179 56.332 179 54.543ZM189.383 49.5156C189.086 49.4609 188.77 49.4336 188.434 49.4336C187.559 49.4336 186.816 49.6797 186.207 50.1719C185.605 50.6562 185.176 51.3633 184.918 52.293V61H183.523V48.3203H184.895L184.918 50.3359C185.66 48.8359 186.852 48.0859 188.492 48.0859C188.883 48.0859 189.191 48.1367 189.418 48.2383L189.383 49.5156ZM190.602 54.4727C190.602 53.2539 190.836 52.1562 191.305 51.1797C191.781 50.2031 192.449 49.4453 193.309 48.9062C194.176 48.3594 195.156 48.0859 196.25 48.0859C197.937 48.0859 199.305 48.6797 200.352 49.8672C201.398 51.0469 201.922 52.6133 201.922 54.5664V54.8594C201.922 56.0859 201.684 57.1914 201.207 58.1758C200.738 59.1523 200.074 59.9062 199.215 60.4375C198.355 60.9687 197.375 61.2344 196.273 61.2344C194.594 61.2344 193.227 60.6445 192.172 59.4648C191.125 58.2773 190.602 56.707 190.602 54.7539V54.4727ZM192.008 54.8594C192.008 56.375 192.398 57.6211 193.18 58.5977C193.969 59.5664 195 60.0508 196.273 60.0508C197.539 60.0508 198.562 59.5664 199.344 58.5977C200.133 57.6211 200.527 56.3359 200.527 54.7422V54.4727C200.527 53.5039 200.348 52.6172 199.988 51.8125C199.629 51.0078 199.125 50.3867 198.477 49.9492C197.828 49.5039 197.086 49.2812 196.25 49.2812C195 49.2812 193.98 49.7734 193.191 50.7578C192.402 51.7344 192.008 53.0156 192.008 54.6016V54.8594ZM206.34 48.3203V62.5117C206.34 63.6836 206.059 64.5781 205.496 65.1953C204.934 65.8125 204.105 66.1211 203.012 66.1211C202.59 66.1211 202.18 66.0469 201.781 65.8984L201.805 64.7383C202.148 64.8398 202.5 64.8906 202.859 64.8906C204.25 64.8906 204.945 64.0898 204.945 62.4883V48.3203H206.34ZM205.648 43.7031C205.953 43.7031 206.191 43.7969 206.363 43.9844C206.535 44.1641 206.621 44.3867 206.621 44.6523C206.621 44.918 206.535 45.1406 206.363 45.3203C206.191 45.5 205.953 45.5898 205.648 45.5898C205.352 45.5898 205.117 45.5 204.945 45.3203C204.781 45.1406 204.699 44.918 204.699 44.6523C204.699 44.3867 204.781 44.1641 204.945 43.9844C205.117 43.7969 205.352 43.7031 205.648 43.7031ZM215.223 61.2344C214.145 61.2344 213.168 60.9687 212.293 60.4375C211.426 59.9062 210.75 59.168 210.266 58.2227C209.781 57.2695 209.539 56.2031 209.539 55.0234V54.5195C209.539 53.3008 209.773 52.2031 210.242 51.2266C210.719 50.25 211.379 49.4844 212.223 48.9297C213.066 48.3672 213.98 48.0859 214.965 48.0859C216.504 48.0859 217.723 48.6133 218.621 49.668C219.527 50.7148 219.98 52.1484 219.98 53.9687V54.7539H210.934V55.0234C210.934 56.4609 211.344 57.6602 212.164 58.6211C212.992 59.5742 214.031 60.0508 215.281 60.0508C216.031 60.0508 216.691 59.9141 217.262 59.6406C217.84 59.3672 218.363 58.9297 218.832 58.3281L219.711 58.9961C218.68 60.4883 217.184 61.2344 215.223 61.2344ZM214.965 49.2812C213.91 49.2812 213.02 49.668 212.293 50.4414C211.574 51.2148 211.137 52.2539 210.98 53.5586H218.586V53.4062C218.547 52.1875 218.199 51.1953 217.543 50.4297C216.887 49.6641 216.027 49.2812 214.965 49.2812ZM225.723 54.6133L224.117 56.1602V61H222.711V43H224.117V54.5195L225.441 53.0898L230.293 48.3203H232.062L226.684 53.6641L232.531 61H230.855L225.723 54.6133ZM236.656 45.0742V48.3203H239.281V49.4687H236.656V57.918C236.656 58.6211 236.781 59.1445 237.031 59.4883C237.289 59.832 237.715 60.0039 238.309 60.0039C238.543 60.0039 238.922 59.9648 239.445 59.8867L239.504 61.0352C239.137 61.168 238.637 61.2344 238.004 61.2344C237.043 61.2344 236.344 60.957 235.906 60.4023C235.469 59.8398 235.25 59.0156 235.25 57.9297V49.4687H232.918V48.3203H235.25V45.0742H236.656Z" fill="black"/>
            <path d="M117.496 61H112.809V51.25H103.668V61H98.9805V38.25H103.668V47.4687H112.809V38.25H117.496V61ZM121.605 61V38.25H129.574C132.335 38.25 134.428 38.7812 135.855 39.8437C137.283 40.8958 137.996 42.4427 137.996 44.4844C137.996 45.599 137.71 46.5833 137.137 47.4375C136.564 48.2812 135.767 48.901 134.746 49.2969C135.913 49.5885 136.829 50.1771 137.496 51.0625C138.173 51.9479 138.512 53.0312 138.512 54.3125C138.512 56.5 137.814 58.1562 136.418 59.2812C135.022 60.4062 133.033 60.9792 130.449 61H121.605ZM126.293 51.0937V57.2344L130.309 57.2344C131.413 57.2344 132.272 56.974 132.887 56.4531C133.512 55.9219 133.824 55.1927 133.824 54.2656C133.824 52.1823 132.746 51.125 130.59 51.0937L126.293 51.0937ZM126.293 47.7812H129.762C132.126 47.7396 133.309 46.7969 133.309 44.9531C133.309 43.9219 133.007 43.1823 132.402 42.7344C131.809 42.276 130.866 42.0469 129.574 42.0469H126.293V47.7812ZM147.012 57.2344H158.48V61H141.152V58.25L152.402 42.0469H141.168V38.25H158.23V40.9375L147.012 57.2344Z" fill="#009688"/>
        </svg>



        <div class="exercise-container">
        </div>
        
        `;
        resolve({html: html, callback: () => {
            if (exerciseSettings.type === undefined) {
                exerciseSettings = {
                    type: "training",
                    amount: 5
                }
            }

            if (exerciseSettings.type === "training" || !user.getSetting("preventEloExercises")) {
                setupExercises();
            } else {
                showEloDisabledPage();
            }
        }});
    })
}


var exerciseData;
var exerciseAdditionalData;
var exercisesToDoAmount;
var exercisesMistakeAmount;
var startElo;
function setupExercises () {
    let url = '';
    if (exerciseSettings.type === "test") {
        url = `/kr/?type=exercise&exercise=getPack&exerciseType=${exerciseSettings.type}&testTrickId=${exerciseSettings.testTrickId}`;
    } else {
        url = `/kr/?type=exercise&exercise=getPack&amount=${exerciseSettings.amount.toString()}&exerciseType=${exerciseSettings.type}${exerciseSettings.trainingTrickId!==undefined ? `&trainingTrickId=${exerciseSettings.trainingTrickId}` : ''}`;
    }


    axios
        .post(url)
        .then((resolve) => {
            if (resolve.data.type === "success") {

                exerciseData = resolve.data.data.pack;
                exerciseAdditionalData = resolve.data.data.data;
                exercisesToDoAmount = resolve.data.data.pack.length;
                exercisesMistakeAmount = 0;
                totalTime = 0;
                startElo = user.userElo;
                showExercise(0);
            } else if (resolve.data.error === "Cooldownerror") {
                showCooldownPage();
            } else if (resolve.data.error === "Servererror") {
                showServererrorPage();
            }
        })
}


function setExerciseHTML (exercise, amount, index) {
    document.querySelector(".exercise-container").innerHTML = '<div class="exercise-container-position"></div>';

    for (let i = 0; i < amount; i++) {
        document.querySelector(".exercise-container-position").innerHTML += `<div class="exercise-container-position-element ${i === index ? 'active' : ''}"></div>`;
    }

    document.querySelector(".exercise-container").innerHTML += `
    <div class="exercise-container-page ${exercise.trickId !== undefined && exercise.exerciseTip !== undefined ? '' : 'small'}" id="exercise-number-${index}" doneId="${exercise.doneId}" exerciseId="${exercise.exerciseId}" index="${index}">
        <span>
            <div class="exercise-container-page-info">
                <p class="exercise-container-page-info-pagenumber">
                    ${index + 1} / ${amount}
                </p>

                <p class="exercise-container-page-info-info">
                    ${exerciseSettings.type==="competition" ? `Wettbewerb${user.userElo !== undefined ? ' - ' + user.userElo  + ' Elo': ''}` : `${exerciseSettings.type==="test" ? 'Trick-Test - <span></span>' : 'Training'}`}
                </p>

                <p class="exercise-container-page-info-time">
                    0:00
                </p>
            </div>


            <h1 class="exercise-container-page-question">${exercise.exerciseText}</h1>
            
            ${exercise.exerciseTip !== undefined ? `
            <details class="d">
                <summary>
                    <span class="summary-title">Tipp anzeigen...</span>
                    <div class="summary-chevron-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </summary>

                <div class="summary-content">
                    ${exercise.exerciseTip}
                </div>
                <div class="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </div>
            </details>
            ` : ''}
            

            ${exercise.trickId !== undefined ? `
            <details class="d">
                <summary>
                    <span class="summary-title">Trick anzeigen...</span>
                    <div class="summary-chevron-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </summary>

                <div class="summary-content">
                    ${exercise.trickText}
                </div>
                <div class="summary-chevron-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </div>
            </details>
            ` : ''}
        </span>


        
        <div class="exercise-container-page-options">
            <input class="exercise-container-page-options-answer" type="text" placeholder="Antworten Sie hier...">

            <span>
                <p class="exercise-container-page-options-jump" onclick="skipExercise(${index});">Aufgabe ??berspringen <i class="bi bi-chevron-right"></i></p>
                <p class="exercise-container-page-options-submit" onclick="submitExercise(${index});">Aufgabe abgeben</p>
            </span>
        </div>
    </div>
        `;
}


function showExercise (index) {
    if (index === exerciseData.length) {
        clearInterval(timerInterval);

        if (exerciseSettings.type === "test") { window.location.hash = "tricks"; }

        showDonePage();
        return;
    }

    setExerciseHTML(exerciseData[index], exerciseData.length, index);
    startTimer();

    try {
        document.querySelector(".exercise-container-page-options-answer").select();
        document.querySelector(".exercise-container-page-options-answer").addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                submitExercise();
            }
        });
    } catch (e) { console.debug(e); }
}


var totalTime = 0;
var timerInterval;
var exerciseTimer = 0;
function startTimer () {
    try {clearInterval(timerInterval);} catch (e) {}

    exerciseTimer = 0;

    timerInterval = setInterval(() => {
        exerciseTimer += 1; 
        totalTime += 1;

        try {
            if (exerciseSettings.type === "test") {
                document.querySelector(".exercise-container-page-info-info > span").innerHTML = getFormattetTime(parseInt(exerciseAdditionalData["maxTime"]) - totalTime);
            }

            document.querySelector(".exercise-container-page-info-time").innerHTML = getFormattetTime(exerciseTimer);
        } catch (e) {
            clearInterval(timerInterval);
            console.debug("Cleared Interval because of missing time info element.");
        }
    }, 1000);
}


function getFormattetTime (seconds) {
    let formatSecondsTime = (scds) => {
        if (scds < 10) {
            return "0" + scds;
        } else {
            return scds.toString();
        }
    }

    if (seconds < 60) {
        return "0:" + formatSecondsTime(seconds);
    } else {
        return Math.floor(seconds / 60).toString() + ":" + formatSecondsTime(seconds - Math.floor(seconds / 60) * 60);
    }
}



function skipExercise () {
    axios
        .post("/kr/?type=exercise&exercise=skip&doneId=" + document.querySelector(".exercise-container-page").getAttribute("doneId"))
        .then((resolve) => {
            if (resolve.data.type === "success") {
                exercisesMistakeAmount++;
                user.userElo = parseInt(resolve.data.data);
            }
            user.executeIfSettingTrue("waitForServerWhenShowingNextExercise", () => {
                showExercise(parseInt(document.querySelector(".exercise-container-page").getAttribute("index")) + 1);
                // Wait for server
            }, true);
        })
    user.executeIfSettingFalse("waitForServerWhenShowingNextExercise", () => {
        showExercise(parseInt(document.querySelector(".exercise-container-page").getAttribute("index")) + 1); 
        // Dont wait for server
    });
}

var reallySkipExercise = false;
function submitExercise () {
    if (document.querySelector(".exercise-container-page-options-answer").value.length < 1) {
        if (reallySkipExercise === false) {
            reallySkipExercise = true;
        } else {
            skipExercise();
            reallySkipExercise = false;
        }
    } else {
        let answerForm = new FormData();
        answerForm.append("answer", document.querySelector(".exercise-container-page-options-answer").value.replace(" ", "").replace("\\", ""));
        answerForm.append("exerciseTimer", exerciseTimer);
        
        axios
            .post("/kr/?type=exercise&exercise=answer&doneId=" + document.querySelector(".exercise-container-page").getAttribute("doneId"), answerForm)
            .then((resolve) => {
                if (resolve.data.type === "success") {
                    if (!resolve.data.data.answerCorrect) { 
                        exercisesMistakeAmount += 1; 
                        document.getElementById("app").style.backgroundColor = "var(--exercise-incorrect)";
                        setTimeout(() => {
                            document.getElementById("app").style.backgroundColor = "var(--gray)";
                        }, 500)
                    } else {
                        document.getElementById("app").style.backgroundColor = "var(--exercise-correct)";
                        setTimeout(() => {
                            document.getElementById("app").style.backgroundColor = "var(--gray)";
                        }, 500)
                    }
                    user.userElo = parseInt(resolve.data.data.userElo);
                }
                user.executeIfSettingTrue("waitForServerWhenShowingNextExercise", () => {
                    showExercise(parseInt(document.querySelector(".exercise-container-page").getAttribute("index")) + 1); 
                    // Wait for server
                }, true);
            })

        user.executeIfSettingFalse("waitForServerWhenShowingNextExercise", () => {
            showExercise(parseInt(document.querySelector(".exercise-container-page").getAttribute("index")) + 1); 
            // Dont wait for server
        });
    }
}


function showDonePage () {
    document.querySelector(".exercise-container").innerHTML = `
    <div class="exercise-container-page">
        <div class="exercise-container-page-done">
            <h1>Aufgabenpacket fertig!</h1>

            <p><span>${exercisesToDoAmount - exercisesMistakeAmount} / ${exercisesToDoAmount}</span> richtig gel??st!</p>
            ${exerciseSettings.type === "competition" ? `<p>Insgesamt hats du <span>${Math.abs(user.userElo - startElo)}</span> Elo ${user.userElo - startElo >= 0 ? 'gewonnen' : 'verloren'}.</p>` : ''}
            <p>Fuer alle Aufgaben zusammen brauchtest du <span>${totalTime} Sekunden</span>${exerciseData.length > 1 ? `, das sind in etwa <span>${Math.round(totalTime / exerciseData.length)} Sekunden pro Aufgabe</span>` : ''}.</p>
        </div>


        
        <div class="exercise-container-page-options">
            <div></div>

            <span>
                <p class="exercise-container-page-options-jump" onclick="window.location.hash = '';">Zum Menu <i class="bi bi-chevron-right"></i></p>
                <p class="exercise-container-page-options-submit" onclick="setupExercises();">Direkt weitermachen!</p>
            </span>
        </div>


        <input style="display: none;" class="exercise-container-page-options-jsinput">
    </div>
        `;

    document.querySelector(".exercise-container-page-options-jsinput").addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            setupExercises();
        }
    })
    document.querySelector(".exercise-container-page-options-jsinput").click();
    document.querySelector(".exercise-container-page-options-jsinput").focus();
    document.querySelector(".exercise-container-page-options-jsinput").select();
}


function showCooldownPage () {
    document.querySelector(".exercise-container").innerHTML = `
    <div class="exercise-container-page">
        <div class="exercise-container-page-done">
            <i class="bi bi-clock-history exercise-container-page-done-error"></i>
            <h1>Du musst noch etwas warten, bis du diesen Test erneut versuchen kannst!</h1>
        </div>


        
        <div class="exercise-container-page-options">
            <div></div>

            <span>
                <p class="exercise-container-page-options-jump"></p>
                <p class="exercise-container-page-options-submit" onclick="history.back();">Zum Menu!</p>
            </span>
        </div>
    </div>
        `;
}

function showServererrorPage () {
    document.querySelector(".exercise-container").innerHTML = `
    <div class="exercise-container-page">
        <div class="exercise-container-page-done">
            <i class="bi bi-exclamation-triangle exercise-container-page-done-error"></i>
            <h1>Es gab einen Servererror beim Abrufen der Aufgaben. Bitte versuche andere Aufgaben!</h1>
        </div>


        
        <div class="exercise-container-page-options">
            <div></div>

            <span>
                <p class="exercise-container-page-options-jump"></p>
                <p class="exercise-container-page-options-submit" onclick="history.back()">Zum Menu!</p>
            </span>
        </div>
    </div>
        `;
}

function showEloDisabledPage () {
    document.querySelector(".exercise-container").innerHTML = `
    <div class="exercise-container-page">
        <div class="exercise-container-page-done">
            <i class="bi bi-exclamation-triangle exercise-container-page-done-error"></i>
            <h1>Du hast in deinen <a href="#account" data-link>Einstellungen</a> Aufgaben deaktiviert, die Elo geben / nehmen k??nnen. Bitte ??ndere die Einstellung oder gehe in das Training!</h1>
        </div>


        
        <div class="exercise-container-page-options">
            <div></div>

            <span>
                <p class="exercise-container-page-options-jump"></p>
                <p class="exercise-container-page-options-submit" onclick="history.back()">Zum Menu!</p>
            </span>
        </div>
    </div>
        `;
}