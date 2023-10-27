team_1_score = [
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
];

team_2_score = [
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
];

team_3_score = [
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

team_4_score = [
  1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0,
  1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
];

team_5_score = [
  1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
];

team_6_score = [
  1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 0, 0, 0, 1, 1, 1,
];

function getScore(team_num) {
  switch (team_num) {
    case 1:
      return team_1_score;
    case 2:
      return team_2_score;
    case 3:
      return team_3_score;
    case 4:
      return team_4_score;
    case 5:
      return team_5_score;
    case 6:
      return team_6_score;
  }
}

function selectTeam(team_id) {
  for (var i = 1; i <= teams.length; i++) {
    var element = document.getElementById("t" + i + "members");

    if (team_id == i) {
      if (element.classList.contains("hide")) {
        element.classList.remove("hide");
      }
    } else {
      element.classList.add("hide");
    }
  }

  var potat_list = getScore(team_id);

  document.getElementById("s" + team_id).innerHTML = calcScore(potat_list);
  setPotatoes(potat_list);
}

function setPotatoes(potat_list) {
  for (i = 1; i <= 36; i++) {
    var tile = document.getElementById("i" + i);

    if (potat_list[i - 1] == 0) {
      tile.classList.remove("cooked");
      tile.classList.add("raw");
    } else {
      tile.classList.remove("raw");
      tile.classList.add("cooked");
    }
  }

  return;
}

function calcScore(potat_list) {
  var score = 0;

  for (i = 0; i < 36; i++) {
    if (potat_list[i] == 1) score += 1;
  }

  if (
    potat_list[0] +
      potat_list[1] +
      potat_list[2] +
      potat_list[3] +
      potat_list[4] +
      potat_list[5] ==
    6
  )
    score += 3;
  if (
    potat_list[6] +
      potat_list[7] +
      potat_list[8] +
      potat_list[9] +
      potat_list[10] +
      potat_list[11] ==
    6
  )
    score += 3;
  if (
    potat_list[12] +
      potat_list[13] +
      potat_list[14] +
      potat_list[15] +
      potat_list[16] +
      potat_list[17] ==
    6
  )
    score += 3;
  if (
    potat_list[18] +
      potat_list[19] +
      potat_list[20] +
      potat_list[21] +
      potat_list[22] +
      potat_list[23] ==
    6
  )
    score += 3;
  if (
    potat_list[24] +
      potat_list[25] +
      potat_list[26] +
      potat_list[27] +
      potat_list[28] +
      potat_list[29] ==
    6
  )
    score += 3;
  if (
    potat_list[30] +
      potat_list[31] +
      potat_list[32] +
      potat_list[33] +
      potat_list[34] +
      potat_list[35] ==
    6
  )
    score += 3;

  if (
    potat_list[0] +
      potat_list[6] +
      potat_list[12] +
      potat_list[18] +
      potat_list[24] +
      potat_list[30] ==
    6
  )
    score += 3;
  if (
    potat_list[1] +
      potat_list[7] +
      potat_list[13] +
      potat_list[19] +
      potat_list[25] +
      potat_list[31] ==
    6
  )
    score += 3;
  if (
    potat_list[2] +
      potat_list[8] +
      potat_list[14] +
      potat_list[20] +
      potat_list[26] +
      potat_list[32] ==
    6
  )
    score += 3;
  if (
    potat_list[3] +
      potat_list[9] +
      potat_list[15] +
      potat_list[21] +
      potat_list[27] +
      potat_list[33] ==
    6
  )
    score += 3;
  if (
    potat_list[4] +
      potat_list[10] +
      potat_list[16] +
      potat_list[22] +
      potat_list[28] +
      potat_list[34] ==
    6
  )
    score += 3;
  if (
    potat_list[5] +
      potat_list[11] +
      potat_list[17] +
      potat_list[23] +
      potat_list[29] +
      potat_list[35] ==
    6
  )
    score += 3;

  return score;
}

document.getElementById("s1").innerHTML = calcScore(getScore(1));
document.getElementById("s2").innerHTML = calcScore(getScore(2));
document.getElementById("s3").innerHTML = calcScore(getScore(3));
document.getElementById("s4").innerHTML = calcScore(getScore(4));
document.getElementById("s5").innerHTML = calcScore(getScore(5));
document.getElementById("s6").innerHTML = calcScore(getScore(6));
