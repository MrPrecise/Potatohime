let teamNames = [
  "Canifis Cornflakes",
  "CumDog Millionaires",
  "Darkmeyer Doomers",
  "Purple CumCumbers",
  "Rimmington Railers",
  "Unbelievably Idiotic Morons",
];
let teams = [
  [
    "PoundCaked",
    "Juri M",
    "SirBabbers",
    "CrankySquid",
    "Quacker",
    "hetdorp",
    "cumhaver",
    "Metal eh",
    "SurferEgg",
    "karvakaapio",
  ],
  [
    "Spionks",
    "becs tasty",
    "Bastin101",
    "Sirbubanitus",
    "blemma",
    "Lietre",
    "Eggy CumFart",
    "Grey RS",
    "OneBucketMan",
    "laf warrulf",
    "Frigging Tony",
  ],
  [
    "n3cromans3r",
    "Yarnbbyma",
    "Arcunos",
    "Toxcid",
    "Bad Writer",
    "Uim pher",
    "Thic N Meaty",
    "BiruAilo",
    "JuicedRadish",
    "Patrjck",
  ],
  [
    "DarkMav1s",
    "DuckTrails",
    "gxgx55",
    "BundyOnDanny",
    "Cucco",
    "Name Me Mum",
    "Nerd Jp",
    "Extramint",
    "ferretgreen",
    "RegiGuthix",
    "osrsellie",
  ],
  [
    "NoPotatoSack",
    "george 36th",
    "1Pots",
    "arcReign",
    "Only Kits",
    "abhorsen2089",
    "Diksin Cider",
    "GIMchompas",
    "Kjellandree",
    "Glutengirl",
  ],
  [
    "pyretireiron",
    "Louisa",
    "LWShallan",
    "Smollay",
    "vagitarian3",
    "Char lotte",
    "dooomfox",
    "Remcave",
    "Icy Penguins",
    "Filthydane",
    "Snowboots000",
  ],
];
let x, y, z;

function loadTeams(names, team) {
  console.log(names, team);
  for (let i = 0; i < names.length; i++) {
    x = "";
    y = names[i];
    z = i + 1;
    for (let j = 0; j < team[i].length; j++) {
      x = x + team[i][j] + "<br>";
    }
    let teamHtml = `<div class="team" id="t${z}">
			<div class = "team-score" id="s${z}">15</div>
			<button onclick="selectTeam(${z})">${y}</button>
			<p class="clear">
			<div class = "team-members hide" id="t${z}members">
            ${x}
			</div>
		    </div>`;

    const node = document.createRange().createContextualFragment(teamHtml);
    document.getElementById("allTeams").appendChild(node);
  }
}

loadTeams(teamNames, teams);
