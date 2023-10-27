

var titles = [
"Get one of each client in Mahogany Homes",
"Obtain a Dragon Harpoon",
"Complete 10 waves of Barbarian Assault with 5 members of your team",
"Obtain Oyster Pearls from Giant Mole",
"Earn 5 million Woodcutting xp",
"Obtain any raid weapon",
"Obtain any 3 seeds from Gauntlet",
"Screenshot 3 members of the team at the end of the four paths of Sorceress Garden",
"Obtain 5 Dragon Implings, 10 Ninja Implings, 100 Magpie Implings, and 200 Eclectic Implings",
"Obtain a Dragon Axe",
"Obtain all 4 pieces of the Skull Sceptre",
"Obtain the Gnome Scarf",
"Encounter each random event once",
"Obtain any Colored Dye from Guardians of the Rift",
"Obtain 2 Fire Capes with different team members",
"Obtain 5 loot keys with value over 1 million gp",
"Obtain an Amulet of the Damned",
"Obtain any God Wars Dungeon Hilt",
"Obtain any clue Ornament Kit",
"Obtain any Wilderness Ring",
"Milk a Cow together",
"Perform 1000 laps on any agility course",
"Obtain any Ancient Artefact",
"Kill 50 players within Last Man Standing",
"Earn 500 Slayer points",
"Obtain a Golden Tench",
"Find Specific Easy and Medium clue steps",
"Obtain a Holy Elixir",
"Screenshot with item spawns",
"Earn 300 Tithe Farm points",
"Find Specific Hard and Elite clue steps",
"Be the first to find 5 Tier 7 or higher Shooting Stars",
"Obtain Egg Sac(full) from Sarachnis on 2 consecutive kills",
"Earn 500 Pest Control Commendation points",
"Obtain the Pharoah's Sceptre from Pyramid Plunder",
"Obtain any Barrows Helm, Body, Legs, and Weapon"
]

var additional_info = 
["Screenshot yourself at every location noted on the wiki. 3 spots in ardy, 3 in falador, 3 in hosidius and 3 in Varrock.",
"Screenshot of collection log before and after or the item in chat box",
"Take a screenshot with all 5 members name shown in the wave 10 room ",
"Reminder to either take screenshot of loot tracker before starting (must be single kill screenshot since you can hide drops) or set your loot drop value to under 1000",
"Gonna be tracked through wise old man, a competition will be made once teams are made. To avoid cheating with 6hr log the competition wont start tracking until 6hrs into the bingo",
"The weapon has to be in your name. You can do raids with anyone in the bingo on any team, but not with people from outside. Screenshot with chest showing everyone's name and the raid size",
"Can do both Normal and Corrupted",
"The Sorceress garden has 4 paths. Summer, winter, spring and autumn. 3 people on your team have to go together to the middle of each of the four gardens and take a screenshot with all names showing. (in total 4 screenshots)",
"Use the impling tracker on the magic butterfly net to track before and after",
"",
"Make sure untradeables show up in your chat box",
"Looks cool",
"Get each of the following: Sadwich lady, frogs, genie, beekeeper, evil twin, and gravedigger. Make sure the screenshot has the npc saying your name or you talking to them. In the case of an instanced random event you can take the screenshot inside the event. ",
"The before screenshot has to show that you have 0 permits or you have to take a before and after with it showing that you have not used any of the saved up rewards from before. Also collection log screenshots can be useful here.",
"Two people on your team have to go get a fire cape. Use coll log for proof",
"Show screenshot with bingo code before pking showing that you have 0 keys on you. Then screenshot when opening the key to show loot over 1 mill worth. Needs to be 5 separate keys, not 1 key worth 5 mill. YOU CAN NOT KILL YOUR TEAM MEMBERS FOR THIS",
"Have fun with shades! Also collection log screenshot :)",
"Just the hilt, not the entire blade. Collection log screenshot or ingame chat.",
"See the tiles explained for a list of kits.",
"Collection log screenshot or ingame chat.",
"Take a team photo with one of the cows you can milk in the game. One of the team members MUST be milking the cow. All names of players in the team must be shown ;)",
"Do 1000 agility laps combined on any of the courses you can track with grace in rogues den. You can combine from the entire team, but must provide before and after screenshots from everyone. Make sure the counter is on.",
"Get any of these from revs. Collection log screenshot or ingame chat.",
"Do \"last man standing\". Take a screenshot of the scoreboard before and after. ",
"Do slayer, take screenshots of points before and after.",
"Slappy fish go slap",
"Specific clue steps can be found in the tiles explained.",
"Collection log screenshot or ingame chat.",
"Will release which items you have to find at launch. You will be provided with a list of items and have to take a screenshot next to the item spawn ingame. ",
"Take screenshot before and after",
"Specific clue steps can be found in the tiles explained.",
"When you find a star and click it, it will say if you were the first one to find it, take a screenshot of it as well as the tier of star.",
"Take a screenshot with the kc and item in chat. Have to be right back to back to count. ",
"Before and after screenshot of the reward menu ",
"Get the scepter ! Screenshot of it in chat box or collection log ",
"Get a barrows helm, top, bottom and weapon.  Does not have to be from the same brother. Screenshot of each piece or before and after of the collection log."
]


function showInfo(tile_num)
{
	document.getElementById('info-title').innerHTML = titles[tile_num-1]
	document.getElementById('info-body').innerHTML = additional_info[tile_num-1]

	//const custom_style = {background-image = "url(./images/"+tile_num+".png)"}

	document.getElementById('info-column').style.backgroundImage = "url(./images/"+tile_num+".png)";
}