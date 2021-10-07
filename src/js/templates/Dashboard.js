main.templates["Dashboard"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html += `
        <div class="container">
            ${(user === false) ? `
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Willkommen zu Kopfrechnen</h1>
                    <p class="card-text">
                        Willkommen zu Kopfrechnen, einer Seite zum Erlernen und Trainieren von Kopfrechnen. Ohne einen Account können Sie sich die aktuellen Elo-Listen und die öffentlichen Seiten ansehen. Wenn Sie jedoch selbst mitmachen wollen, sollten Sie sich <a data-link href="#login">Anmelden</a> beziehungsweise <a data-link href="#signup">Registrieren</a>.
                    </p>
                </div>
            </div>
            ` : `
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Guten Tag ${user.userName}!</h1>
                    <p class="card-text">
                        Auf dieser Website kannst du Kopfrechnen erlernen und Trainieren! Ausserdem kannst du, falls interessiert, auch an dem Wettstreit um die meiste Elo-Teilnehmen. <br>
                        Wir wuenschen dir einen angenehmen Aufenthalt und freuen uns über dein Interesse!
                    </p>
                </div>
            </div>
            `}
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">HBZ</h1>
                    <p class="card-text">
                        Erstellt wurde diese WebApp durch das Team des Hochbegabten-Zuges des Heinrich-Suso-Gymnasiums Konstanz. Mehr über uns können Sie auf unserer <a href="https://hbz.suso.schulen.konstanz.de/">Homepage</a> erfahren. Wir freuen uns schon auf Sie!
                    </p>
                </div>
            </div>
        </div>`;
        resolve({html: html, callback: () => {

        }});
    })
}