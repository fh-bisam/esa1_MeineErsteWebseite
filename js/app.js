"use strict";
/* FootballZone - NFL Teamübersicht */
// Alle 32 NFL-Teams
const teams = [
    // NFC East
    { name: "Dallas Cowboys", conference: "NFC", division: "NFC East", stadion: "AT&T Stadium" },
    { name: "New York Giants", conference: "NFC", division: "NFC East", stadion: "MetLife Stadium" },
    { name: "Philadelphia Eagles", conference: "NFC", division: "NFC East", stadion: "Lincoln Financial Field" },
    { name: "Washington Commanders", conference: "NFC", division: "NFC East", stadion: "Northwest Stadium" },
    // NFC North
    { name: "Chicago Bears", conference: "NFC", division: "NFC North", stadion: "Soldier Field" },
    { name: "Detroit Lions", conference: "NFC", division: "NFC North", stadion: "Ford Field" },
    { name: "Green Bay Packers", conference: "NFC", division: "NFC North", stadion: "Lambeau Field" },
    { name: "Minnesota Vikings", conference: "NFC", division: "NFC North", stadion: "U.S. Bank Stadium" },
    // NFC South
    { name: "Atlanta Falcons", conference: "NFC", division: "NFC South", stadion: "Mercedes-Benz Stadium" },
    { name: "Carolina Panthers", conference: "NFC", division: "NFC South", stadion: "Bank of America Stadium" },
    { name: "New Orleans Saints", conference: "NFC", division: "NFC South", stadion: "Caesars Superdome" },
    { name: "Tampa Bay Buccaneers", conference: "NFC", division: "NFC South", stadion: "Raymond James Stadium" },
    // NFC West
    { name: "Arizona Cardinals", conference: "NFC", division: "NFC West", stadion: "State Farm Stadium" },
    { name: "Los Angeles Rams", conference: "NFC", division: "NFC West", stadion: "SoFi Stadium" },
    { name: "San Francisco 49ers", conference: "NFC", division: "NFC West", stadion: "Levi's Stadium" },
    { name: "Seattle Seahawks", conference: "NFC", division: "NFC West", stadion: "Lumen Field" },
    // AFC East
    { name: "Buffalo Bills", conference: "AFC", division: "AFC East", stadion: "Highmark Stadium" },
    { name: "Miami Dolphins", conference: "AFC", division: "AFC East", stadion: "Hard Rock Stadium" },
    { name: "New England Patriots", conference: "AFC", division: "AFC East", stadion: "Gillette Stadium" },
    { name: "New York Jets", conference: "AFC", division: "AFC East", stadion: "MetLife Stadium" },
    // AFC North
    { name: "Baltimore Ravens", conference: "AFC", division: "AFC North", stadion: "M&T Bank Stadium" },
    { name: "Cincinnati Bengals", conference: "AFC", division: "AFC North", stadion: "Paycor Stadium" },
    { name: "Cleveland Browns", conference: "AFC", division: "AFC North", stadion: "Huntington Bank Field" },
    { name: "Pittsburgh Steelers", conference: "AFC", division: "AFC North", stadion: "Acrisure Stadium" },
    // AFC South
    { name: "Houston Texans", conference: "AFC", division: "AFC South", stadion: "NRG Stadium" },
    { name: "Indianapolis Colts", conference: "AFC", division: "AFC South", stadion: "Lucas Oil Stadium" },
    { name: "Jacksonville Jaguars", conference: "AFC", division: "AFC South", stadion: "EverBank Stadium" },
    { name: "Tennessee Titans", conference: "AFC", division: "AFC South", stadion: "Nissan Stadium" },
    // AFC West
    { name: "Denver Broncos", conference: "AFC", division: "AFC West", stadion: "Empower Field at Mile High" },
    { name: "Kansas City Chiefs", conference: "AFC", division: "AFC West", stadion: "Arrowhead Stadium" },
    { name: "Las Vegas Raiders", conference: "AFC", division: "AFC West", stadion: "Allegiant Stadium" },
    { name: "Los Angeles Chargers", conference: "AFC", division: "AFC West", stadion: "SoFi Stadium" }
];
// Funktion zur Anzeige der NFL-Teams
function zeigeTeams(teamDaten, listenId) {
    const liste = document.querySelector(listenId);
    if (!liste) {
        return;
    }
    // Vorhandene Einträge entfernen
    liste.innerHTML = "";
    // Alle übergebenen Teams anzeigen
    for (const team of teamDaten) {
        const eintrag = document.createElement("li");
        const artikel = document.createElement("article");
        const titel = document.createElement("h4");
        titel.textContent = team.name;
        const division = document.createElement("p");
        division.textContent = `Division: ${team.division}`;
        const stadion = document.createElement("p");
        stadion.textContent = `Stadion: ${team.stadion}`;
        artikel.appendChild(titel);
        artikel.appendChild(division);
        artikel.appendChild(stadion);
        eintrag.appendChild(artikel);
        liste.appendChild(eintrag);
    }
}
// Teams nach Conference filtern
const nfcTeams = teams.filter((team) => team.conference === "NFC");
const afcTeams = teams.filter((team) => team.conference === "AFC");
// Beide Conferences getrennt anzeigen
zeigeTeams(nfcTeams, "#team-liste-nfc");
zeigeTeams(afcTeams, "#team-liste-afc");
