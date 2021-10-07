main.templates["Elo"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5 mb-5">
                <div class="card-body">
                    <h1 class="card-title">Elo-Ranking</h1>

                    <p class="card-text">Dieses Ranking zeigt die Top-Kopfrechner. Sei selbst <a data-link href="#competition">aktiv</a> und komme auch auf das Leaderboard!</p>

                    <div class="eloRanking">
                        <div class="eloRanking-top3">
                            <div class="eloRanking-top3-1"></div>
                            <div class="eloRanking-top3-0"></div>
                            <div class="eloRanking-top3-2"></div>
                        </div>

                        <ol class="eloRanking-list sl">
                        </ol>
                    </div>

                    <span class="eloTable-hider" style="display: none;">
                    <table id="eloTable">
                        <thead>
                            <tr>
                                <th>Benutzername</th>
                                <th>Elo</th>
                                <th>Richtig</th>
                                <th>Falsch</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                    </span>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `, callback: () => {
            setupTable();
        }});
    })
}



function setupTable () {
    axios
        .post("/kr/?type=eloRanking")
        .then((resolve) => {
            if (resolve.data.type === "success") {
                /*resolve.data.data.push({
                    "userLosses": 293,
                    "userWins": 1023,
                    "userName": "Winner",
                    "userSurname": "Cool",
                    "userElo": 1730,
                    "userId": 2
                }, {
                    "userLosses": 300,
                    "userWins": 700,
                    "userName": "Player",
                    "userSurname": "Average",
                    "userElo": 600,
                    "userId": 3
                }, {
                    "userLosses": 1023,
                    "userWins": 293,
                    "userName": "Loser",
                    "userSurname": "Bad",
                    "userElo": 11,
                    "userId": 3
                })*/
                resolve.data.data.sort((a, b) => {return -1 * parseInt(a["userElo"]) + parseInt(b["userElo"]);})
                try { resolve.data.data = resolve.data.data.slice(0, user.getSettingDefault("eloRankingShowAmount", 15));}
                catch { resolve.data.data = resolve.data.data.slice(0, 15); }
                 // Only show top 15
                resolve.data.data.forEach((user, index) => {
                    if (index < 3) {
                        let height = 120;
                        if (index === 1) {
                            height = 70 + (120 - 70) * (user.userElo - resolve.data.data[2].userElo) / (resolve.data.data[0].userElo - resolve.data.data[2].userElo);
                        } else if (index === 2) {
                            height = 70;
                        }


                        document.querySelector(".eloRanking-top3-" + index.toString()).style.height = height + "px";

                        document.querySelector(".eloRanking-top3-" + index.toString()).innerHTML = `
                            <h1>${user.userElo}</h1>
                            <p>${user.userName} ${user.userSurname}</p>
                        `;
                    }

                    document.querySelector(".eloRanking-list").innerHTML += `
                        <li class="eloRanking-list-element">
                            ${user.userSurname}, ${user.userName} - ${user.userElo} Elo, ${user.userWins} richtige Antworten, ${user.userLosses} falsche
                        </li>
                    `;

                    document.querySelector("#eloTable > tbody").innerHTML += `
                        <tr>
                            <td>${user.userSurname}, ${user.userName}</td>
                            <td>${user.userElo}</td>
                            <td>${user.userWins}</td>
                            <td>${user.userLosses}</td>
                        </tr>
                    `;
                })



                let eloRankingTable = new JSTable("#eloTable");
            }
        })

    
}