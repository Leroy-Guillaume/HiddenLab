const lvl1 = ["A", "Z", "S", "S", "S", "E", "R", "W", "B", "S", "S", "W", "B", "W", "S", "S", "B", "W", "T", "T", "S", "S", "S", "T", "T"];

const lvl2 = ["A", "Z", "W", "W", "W", "E", "R", "S", "S", "W", "W", "S", "B", "S", "W", "W", "S", "S", "T", "T", "W", "W", "W", "T", "T"];

const lvl3 = ["A", "Z", "S", "S", "S", "S", "E", "R", "S", "W", "W", "S", "S", "W", "S", "S", "W", "S", "S", "W", "B", "S", "S", "S", "S", "W", "W", "W", "T", "T", "S", "S", "S", "B", "T", "T"];

const lvl4 = ["A", "Z", "S", "S", "S", "S", "E", "R", "W", "W", "W", "S", "S", "S", "S", "S", "W", "S", "S", "S", "S", "S", "W", "B", "S", "W", "W", "S", "T", "T", "S", "S", "B", "B", "T", "T"];

const lvl5 = ["A", "Z", "S", "S", "B", "B", "B", "E", "R", "W", "W", "W", "B", "B", "S", "S", "S", "B", "W", "W", "B", "S", "S", "S", "S", "B", "W", "S", "B", "W", "W", "S", "S", "S", "S", "B", "B", "W", "W", "S", "T", "T", "B", "B", "B", "S", "S", "T", "T"];

const lvl6 = ["A", "Z", "S", "B", "S", "B", "W", "E", "R", "B", "W", "S", "B", "B", "S", "B", "B", "S", "S", "S", "S", "S", "W", "S", "S", "B", "W", "S", "S", "W", "S", "B", "B", "W", "S", "S", "S", "S", "B", "B", "T", "T", "W", "W", "W", "W", "W", "T", "T"];

const lvl7 = ["A", "Z", "S", "S", "S", "S", "B", "E", "R", "B", "W", "W", "S", "B", "B", "B", "B", "S", "S", "S", "B", "B", "S", "S", "S", "W", "W", "B", "B", "S", "W", "W", "B", "B", "B", "W", "S", "S", "S", "B", "T", "T", "W", "W", "W", "S", "S", "T", "T"];

const lvl8 = ["A", "Z", "S", "W", "S", "S", "S", "W", "E", "R", "S", "B", "S", "W", "S", "B", "W", "B", "S", "S", "S", "B", "S", "B", "B", "B", "S", "W", "S", "S", "S", "B", "S", "S", "S", "W", "B", "S", "W", "B", "B", "B", "S", "B", "B", "S", "B", "B", "B", "W", "S", "B", "B", "S", "T", "T", "W", "S", "S", "S", "S", "S", "T", "T"];

const lvl9 = ["A", "Z", "B", "B", "S", "S", "S", "S", "E", "R", "S", "W", "S", "B", "W", "B", "S", "B", "S", "S", "S", "W", "B", "B", "S", "B", "W", "S", "B", "S", "S", "S", "S", "W", "B", "S", "S", "S", "W", "S", "S", "S", "S", "W", "S", "B", "B", "S", "B", "B", "S", "B", "S", "S", "T", "T", "B", "W", "S", "S", "S", "B", "T", "T"];

const lvl10 = ["A", "Z", "B", "S", "S", "S", "S", "W", "E", "R", "S", "S", "B", "B", "S", "B", "B", "S", "S", "B", "W", "S", "S", "S", "B", "W", "S", "B", "B", "S", "B", "S", "S", "B", "S", "S", "B", "S", "W", "S", "S", "S", "B", "S", "W", "S", "B", "S", "B", "S", "W", "S", "S", "S", "T", "T", "W", "S", "S", "S", "B", "B", "T", "T"];

const lvl20 = ["A", "Z", "S", "S", "B", "S", "W", "S", "S", "B", "B", "S", "S", "B", "B", "E", "R", "S", "B", "S", "S", "B", "B", "S", "B", "W", "B", "S", "S", "W", "S", "S", "S", "W", "B", "S", "S", "S", "S", "S", "W", "B", "S", "S", "B", "B", "S", "W", "S", "S", "S", "W", "B", "B", "S", "S", "B", "S", "W", "B", "S", "S", "B", "B", "S", "S", "S", "S", "W", "S", "B", "W", "S", "B", "W", "B", "S", "S", "B", "W", "W", "B", "S", "S", "S", "S", "S", "S", "S", "B", "B", "W", "S", "S", "B", "B", "S", "S", "S", "W", "S", "W", "B", "S", "B", "B", "S", "S", "S", "S", "S", "S", "S", "B", "W", "S", "B", "S", "S", "S", "S", "S", "W", "B", "S", "W", "B", "B", "W", "B", "S", "W", "S", "B", "S", "W", "S", "B", "B", "B", "B", "S", "S", "S", "S", "S", "B", "S", "W", "S", "S", "S", "S", "S", "B", "S", "S", "B", "B", "S", "B", "W", "S", "B", "S", "S", "W", "B", "S", "W", "B", "B", "W", "S", "S", "S", "B", "B", "B", "S", "S", "W", "B", "B", "S", "B", "S", "W", "B", "B", "S", "B", "B", "S", "S", "S", "W", "B", "W", "S", "B", "S", "S", "S", "S", "S", "W", "B", "T", "T", "S", "S", "S", "S", "S", "S", "S", "W", "B", "B", "S", "B", "B", "T", "T"];

const lvl19 = ["A", "Z", "S", "W", "S", "S", "S", "S", "W", "S", "S", "S", "S", "S", "E", "R", "S", "S", "S", "W", "S", "S", "B", "S", "S", "B", "W", "S", "B", "B", "S", "S", "W", "W", "S", "S", "S", "S", "S", "W", "B", "S", "W", "B", "S", "B", "S", "B", "S", "B", "W", "B", "S", "B", "B", "S", "S", "S", "B", "S", "S", "W", "S", "S", "S", "S", "S", "S", "B", "S", "S", "W", "S", "S", "S", "S", "S", "S", "S", "W", "B", "S", "S", "S", "S", "B", "B", "S", "W", "B", "B", "S", "S", "S", "S", "S", "B", "W", "S", "S", "W", "S", "B", "B", "B", "S", "W", "B", "B", "S", "B", "W", "W", "S", "B", "S", "S", "S", "S", "S", "S", "S", "S", "S", "B", "B", "B", "S", "S", "S", "B", "S", "S", "B", "W", "B", "S", "B", "W", "B", "B", "S", "W", "W", "B", "B", "S", "S", "S", "S", "S", "S", "B", "S", "S", "S", "B", "B", "S", "S", "S", "S", "S", "B", "W", "B", "S", "B", "W", "S", "S", "S", "S", "S", "B", "W", "S", "S", "B", "S", "T", "T", "B", "S", "B", "W", "S", "S", "B", "B", "B", "S", "S", "S", "T", "T"];

const lvl18 = ["A", "Z", "S", "B", "W", "B", "S", "W", "B", "B", "S", "W", "S", "E", "R", "S", "S", "B", "S", "S", "B", "S", "W", "B", "S", "B", "B", "S", "B", "S", "S", "W", "B", "S", "S", "B", "S", "B", "W", "B", "S", "W", "B", "S", "S", "S", "S", "S", "W", "B", "B", "B", "W", "S", "B", "B", "S", "W", "S", "B", "S", "S", "S", "S", "W", "S", "S", "S", "S", "S", "B", "S", "W", "S", "B", "W", "S", "B", "W", "B", "B", "W", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "B", "S", "S", "B", "S", "W", "S", "B", "S", "S", "B", "W", "S", "B", "S", "W", "B", "S", "B", "S", "W", "S", "W", "S", "S", "B", "W", "S", "B", "S", "S", "B", "S", "B", "S", "S", "S", "S", "S", "B", "B", "S", "S", "W", "B", "S", "W", "B", "S", "W", "B", "S", "S", "S", "S", "S", "S", "S", "S", "S", "T", "T", "S", "S", "S", "W", "B", "W", "B", "S", "W", "B", "B", "T", "T"];

const lvl17 = ["A", "Z", "S", "S", "S", "W", "B", "W", "S", "B", "S", "W", "E", "R", "B", "B", "S", "S", "B", "B", "B", "S", "B", "B", "S", "B", "B", "W", "S", "S", "B", "W", "B", "S", "W", "S", "S", "W", "S", "S", "W", "S", "S", "B", "S", "S", "W", "B", "S", "S", "S", "S", "S", "S", "S", "W", "S", "W", "B", "S", "S", "B", "B", "B", "B", "W", "B", "B", "S", "S", "S", "B", "S", "W", "S", "S", "S", "S", "B", "W", "B", "W", "B", "S", "S", "S", "B", "W", "B", "S", "S", "S", "S", "S", "S", "W", "W", "S", "S", "B", "W", "S", "S", "S", "S", "W", "S", "B", "B", "B", "S", "B", "B", "S", "W", "B", "W", "S", "S", "B", "S", "W", "S", "B", "S", "S", "S", "B", "B", "S", "T", "T", "S", "B", "S", "S", "S", "W", "S", "S", "B", "S", "T", "T"];

const lvl16 = ["A", "Z", "B", "S", "S", "S", "W", "B", "S", "S", "S", "E", "R", "S", "S", "W", "S", "W", "B", "S", "W", "S", "S", "W", "B", "B", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "W", "S", "W", "B", "B", "W", "S", "B", "B", "W", "S", "S", "S", "W", "S", "S", "S", "S", "W", "B", "B", "S", "S", "B", "B", "S", "W", "B", "B", "B", "W", "B", "B", "W", "B", "B", "S", "S", "S", "B", "W", "S", "S", "S", "B", "S", "W", "S", "B", "S", "S", "W", "B", "B", "S", "W", "S", "B", "S", "W", "B", "S", "S", "B", "W", "S", "B", "S", "B", "S", "S", "S", "T", "T", "S", "B", "S", "B", "W", "B", "B", "W", "B", "T", "T"];

const lvl15 = ["A", "Z", "S", "S", "S", "S", "S", "S", "B", "W", "E", "R", "B", "B", "B", "S", "W", "S", "S", "B", "B", "S", "S", "S", "W", "B", "B", "W", "S", "S", "B", "S", "W", "S", "S", "B", "B", "S", "S", "W", "B", "S", "S", "S", "S", "S", "W", "B", "S", "S", "B", "W", "B", "S", "B", "S", "B", "S", "W", "B", "S", "S", "S", "S", "S", "W", "S", "S", "B", "S", "S", "B", "B", "W", "S", "B", "S", "W", "S", "S", "S", "W", "S", "S", "S", "S", "S", "S", "T", "T", "S", "S", "S", "W", "B", "S", "S", "W", "T", "T"];

const lvl14 = ["A", "Z", "S", "S", "W", "B", "B", "B", "B", "E", "R", "W", "S", "S", "S", "S", "S", "W", "S", "S", "S", "W", "B", "B", "B", "S", "B", "S", "B", "S", "S", "S", "S", "W", "S", "B", "S", "W", "B", "W", "S", "W", "S", "S", "S", "S", "S", "B", "S", "S", "S", "S", "W", "S", "S", "B", "W", "S", "B", "W", "B", "B", "S", "S", "W", "S", "S", "S", "S", "S", "T", "T", "W", "B", "B", "W", "S", "S", "B", "T", "T"];

const lvl13 = ["A", "Z", "S", "S", "S", "S", "S", "W", "B", "E", "R", "B", "W", "S", "B", "S", "B", "B", "S", "W", "B", "B", "S", "B", "S", "S", "S", "S", "S", "S", "S", "W", "B", "S", "B", "W", "B", "W", "S", "B", "B", "S", "S", "S", "B", "S", "S", "S", "B", "S", "S", "W", "S", "S", "B", "W", "S", "S", "S", "S", "S", "S", "B", "B", "B", "S", "B", "S", "W", "B", "T", "T", "W", "S", "S", "W", "S", "B", "B", "T", "T"];

const lvl12 = ["A", "Z", "B", "B", "W", "S", "S", "S", "W", "E", "R", "S", "S", "B", "S", "W", "S", "S", "S", "B", "W", "S", "S", "S", "W", "S", "S", "S", "S", "S", "S", "W", "S", "B", "S", "W", "W", "S", "B", "S", "B", "S", "W", "S", "S", "B", "S", "W", "B", "W", "S", "S", "S", "S", "S", "S", "S", "S", "S", "S", "B", "W", "S", "B", "S", "S", "B", "W", "B", "B", "T", "T", "W", "B", "S", "S", "S", "S", "S", "T", "T"];

const lvl11 = ["A", "Z", "B", "B", "B", "S", "B", "S", "E", "R", "S", "W", "B", "S", "W", "S", "S", "B", "S", "S", "W", "S", "B", "B", "S", "B", "B", "S", "S", "S", "W", "B", "S", "W", "W", "S", "B", "S", "S", "S", "S", "S", "B", "S", "W", "S", "B", "W", "S", "S", "W", "B", "S", "S", "T", "T", "W", "S", "S", "S", "S", "S", "T", "T"];

var allLVL = [];
allLVL.push(lvl1);
allLVL.push(lvl2);
allLVL.push(lvl3);
allLVL.push(lvl4);
allLVL.push(lvl5);
allLVL.push(lvl6);
allLVL.push(lvl7);
allLVL.push(lvl8);
allLVL.push(lvl9);
allLVL.push(lvl10);
allLVL.push(lvl11);
allLVL.push(lvl12);
allLVL.push(lvl13);
allLVL.push(lvl14);
allLVL.push(lvl15);
allLVL.push(lvl16);
allLVL.push(lvl17);
allLVL.push(lvl18);
allLVL.push(lvl19);
allLVL.push(lvl20);