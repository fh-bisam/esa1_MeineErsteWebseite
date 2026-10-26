"use strict";
/* FootballZone - NFL Teamübersicht */
// Alle 32 NFL-Teams
const teams = [
    // NFC East
    {
        name: "Dallas Cowboys",
        conference: "NFC",
        division: "NFC East",
        stadion: "AT&T Stadium",
    },
    {
        name: "New York Giants",
        conference: "NFC",
        division: "NFC East",
        stadion: "MetLife Stadium",
    },
    {
        name: "Philadelphia Eagles",
        conference: "NFC",
        division: "NFC East",
        stadion: "Lincoln Financial Field",
    },
    {
        name: "Washington Commanders",
        conference: "NFC",
        division: "NFC East",
        stadion: "Northwest Stadium",
    },
    // NFC North
    {
        name: "Chicago Bears",
        conference: "NFC",
        division: "NFC North",
        stadion: "Soldier Field",
    },
    {
        name: "Detroit Lions",
        conference: "NFC",
        division: "NFC North",
        stadion: "Ford Field",
    },
    {
        name: "Green Bay Packers",
        conference: "NFC",
        division: "NFC North",
        stadion: "Lambeau Field",
    },
    {
        name: "Minnesota Vikings",
        conference: "NFC",
        division: "NFC North",
        stadion: "U.S. Bank Stadium",
    },
    // NFC South
    {
        name: "Atlanta Falcons",
        conference: "NFC",
        division: "NFC South",
        stadion: "Mercedes-Benz Stadium",
    },
    {
        name: "Carolina Panthers",
        conference: "NFC",
        division: "NFC South",
        stadion: "Bank of America Stadium",
    },
    {
        name: "New Orleans Saints",
        conference: "NFC",
        division: "NFC South",
        stadion: "Caesars Superdome",
    },
    {
        name: "Tampa Bay Buccaneers",
        conference: "NFC",
        division: "NFC South",
        stadion: "Raymond James Stadium",
    },
    // NFC West
    {
        name: "Arizona Cardinals",
        conference: "NFC",
        division: "NFC West",
        stadion: "State Farm Stadium",
    },
    {
        name: "Los Angeles Rams",
        conference: "NFC",
        division: "NFC West",
        stadion: "SoFi Stadium",
    },
    {
        name: "San Francisco 49ers",
        conference: "NFC",
        division: "NFC West",
        stadion: "Levi's Stadium",
    },
    {
        name: "Seattle Seahawks",
        conference: "NFC",
        division: "NFC West",
        stadion: "Lumen Field",
    },
    // AFC East
    {
        name: "Buffalo Bills",
        conference: "AFC",
        division: "AFC East",
        stadion: "Highmark Stadium",
    },
    {
        name: "Miami Dolphins",
        conference: "AFC",
        division: "AFC East",
        stadion: "Hard Rock Stadium",
    },
    {
        name: "New England Patriots",
        conference: "AFC",
        division: "AFC East",
        stadion: "Gillette Stadium",
    },
    {
        name: "New York Jets",
        conference: "AFC",
        division: "AFC East",
        stadion: "MetLife Stadium",
    },
    // AFC North
    {
        name: "Baltimore Ravens",
        conference: "AFC",
        division: "AFC North",
        stadion: "M&T Bank Stadium",
    },
    {
        name: "Cincinnati Bengals",
        conference: "AFC",
        division: "AFC North",
        stadion: "Paycor Stadium",
    },
    {
        name: "Cleveland Browns",
        conference: "AFC",
        division: "AFC North",
        stadion: "Huntington Bank Field",
    },
    {
        name: "Pittsburgh Steelers",
        conference: "AFC",
        division: "AFC North",
        stadion: "Acrisure Stadium",
    },
    // AFC South
    {
        name: "Houston Texans",
        conference: "AFC",
        division: "AFC South",
        stadion: "NRG Stadium",
    },
    {
        name: "Indianapolis Colts",
        conference: "AFC",
        division: "AFC South",
        stadion: "Lucas Oil Stadium",
    },
    {
        name: "Jacksonville Jaguars",
        conference: "AFC",
        division: "AFC South",
        stadion: "EverBank Stadium",
    },
    {
        name: "Tennessee Titans",
        conference: "AFC",
        division: "AFC South",
        stadion: "Nissan Stadium",
    },
    // AFC West
    {
        name: "Denver Broncos",
        conference: "AFC",
        division: "AFC West",
        stadion: "Empower Field at Mile High",
    },
    {
        name: "Kansas City Chiefs",
        conference: "AFC",
        division: "AFC West",
        stadion: "Arrowhead Stadium",
    },
    {
        name: "Las Vegas Raiders",
        conference: "AFC",
        division: "AFC West",
        stadion: "Allegiant Stadium",
    },
    {
        name: "Los Angeles Chargers",
        conference: "AFC",
        division: "AFC West",
        stadion: "SoFi Stadium",
    },
];
// Liste der ausgewählten Lieblingsmannschaften
let favoriten = [];
// Favorit hinzufügen oder entfernen
function wechsleFavorit(teamName) {
    // Prüfen, ob das Team bereits ein Favorit ist
    if (favoriten.includes(teamName)) {
        // Vorhandenen Favoriten entfernen
        favoriten = favoriten.filter((name) => name !== teamName);
    }
    else {
        // Neuen Favoriten hinzufügen
        favoriten.push(teamName);
    }
    // Favoritenliste aktualisieren
    zeigeFavoriten();
}
// Favoriten auf der Webseite anzeigen
function zeigeFavoriten() {
    const liste = document.querySelector("#favoriten-liste");
    const hinweis = document.querySelector("#favoriten-hinweis");
    if (!liste || !hinweis) {
        return;
    }
    // Alte Einträge entfernen
    liste.innerHTML = "";
    // Hinweistext aktualisieren
    if (favoriten.length === 0) {
        hinweis.textContent = "Noch keine Favoriten ausgewählt.";
    }
    else {
        hinweis.textContent = `${favoriten.length} Favorit(en) ausgewählt.`;
    }
    // Favoriten als Liste anzeigen
    for (const name of favoriten) {
        const eintrag = document.createElement("li");
        eintrag.textContent = name;
        liste.appendChild(eintrag);
    }
}
// Beschriftung des Favoritenbuttons aktualisieren
function aktualisiereFavoritenButton(button, teamName) {
    const istFavorit = favoriten.includes(teamName);
    if (istFavorit) {
        button.textContent = "Favorit entfernen";
        button.setAttribute("aria-pressed", "true");
        button.setAttribute("aria-label", `${teamName} aus Favoriten entfernen`);
    }
    else {
        button.textContent = "Als Favorit auswählen";
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", `${teamName} als Favorit auswählen`);
    }
}
// Funktion zur Anzeige der NFL-Teams
function zeigeTeams(teamDaten, listenId) {
    const liste = document.querySelector(listenId);
    if (!liste) {
        return;
    }
    // Vorhandene Einträge entfernen
    liste.innerHTML = "";
    // Meldung anzeigen, wenn keine Teams gefunden wurden
    if (teamDaten.length === 0) {
        const meldung = document.createElement("li");
        meldung.textContent = "Keine passenden Teams gefunden.";
        meldung.classList.add("keine-teams");
        liste.appendChild(meldung);
        return;
    }
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
        // Favoritenbutton erstellen
        const favoritButton = document.createElement("button");
        favoritButton.type = "button";
        favoritButton.classList.add("favorit-button");
        // Richtige Beschriftung setzen
        aktualisiereFavoritenButton(favoritButton, team.name);
        // Auf Klick reagieren
        favoritButton.addEventListener("click", () => {
            // Favorit hinzufügen oder entfernen
            wechsleFavorit(team.name);
            // Buttonbeschriftung aktualisieren
            aktualisiereFavoritenButton(favoritButton, team.name);
        });
        // Elemente zur Teamkarte hinzufügen
        artikel.appendChild(titel);
        artikel.appendChild(division);
        artikel.appendChild(stadion);
        artikel.appendChild(favoritButton);
        eintrag.appendChild(artikel);
        liste.appendChild(eintrag);
    }
}
// Funktion zum Filtern der Teams
function filtereTeams(teamDaten, suchtext, division) {
    return teamDaten.filter((team) => {
        // Teamname mit Suchtext vergleichen
        const passtZumNamen = team.name
            .toLowerCase()
            .includes(suchtext.toLowerCase().trim());
        // Division überprüfen
        const passtZurDivision = division === "alle" || team.division === division;
        // Beide Bedingungen müssen erfüllt sein
        return passtZumNamen && passtZurDivision;
    });
}
// Funktion zur Aktualisierung der Teamübersicht
function aktualisiereTeamAnzeige() {
    const suchfeld = document.querySelector("#teamsuche");
    const divisionsFilter = document.querySelector("#division-filter");
    const anzahl = document.querySelector("#team-anzahl");
    // Prüfen, ob die HTML-Elemente vorhanden sind
    if (!suchfeld || !divisionsFilter || !anzahl) {
        return;
    }
    // Teams nach Suche und Division filtern
    const gefilterteTeams = filtereTeams(teams, suchfeld.value, divisionsFilter.value);
    // Ergebnis nach Conferences aufteilen
    const nfcTeams = gefilterteTeams.filter((team) => team.conference === "NFC");
    const afcTeams = gefilterteTeams.filter((team) => team.conference === "AFC");
    // Beide Listen neu anzeigen
    zeigeTeams(nfcTeams, "#team-liste-nfc");
    zeigeTeams(afcTeams, "#team-liste-afc");
    // Anzahl der gefundenen Teams anzeigen
    anzahl.textContent = `${gefilterteTeams.length} von ${teams.length} Teams gefunden`;
}
// Event-Listener für Suchfeld und Divisionsfilter
const suchfeld = document.querySelector("#teamsuche");
const divisionsFilter = document.querySelector("#division-filter");
if (suchfeld && divisionsFilter) {
    // Reaktion auf Eingaben im Suchfeld
    suchfeld.addEventListener("input", aktualisiereTeamAnzeige);
    // Reaktion auf Änderung der Division
    divisionsFilter.addEventListener("change", aktualisiereTeamAnzeige);
}
// Verhindert das Absenden des Filterformulars
const formular = document.querySelector("#team-filter");
if (formular) {
    formular.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
// Teams beim ersten Laden anzeigen
aktualisiereTeamAnzeige();
// Favoritenliste beim ersten Laden anzeigen
zeigeFavoriten();
// Navigationslinks auswählen
const navigationsLinks = document.querySelectorAll('nav a[href^="#"]');
// Ausgewählten Navigationspunkt markieren
function markiereNavigation(ziel) {
    navigationsLinks.forEach((link) => {
        const istAktiv = link.getAttribute("href") === ziel;
        // CSS-Klasse setzen oder entfernen
        link.classList.toggle("aktiv", istAktiv);
        // ARIA-Attribut aktualisieren
        if (istAktiv) {
            link.setAttribute("aria-current", "location");
        }
        else {
            link.removeAttribute("aria-current");
        }
    });
}
// Auf Klicks in der Navigation reagieren
navigationsLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const ziel = link.getAttribute("href");
        if (ziel) {
            markiereNavigation(ziel);
        }
    });
});
// Auch den Link im Startbereich berücksichtigen
const startLink = document.querySelector(".start-link");
if (startLink) {
    startLink.addEventListener("click", () => {
        markiereNavigation("#teams");
    });
}
// Beim Laden den aktuellen Bereich markieren
markiereNavigation(window.location.hash || "#start");
