function checkFile(status) {
    console.log(status);
}
checkFile('READ');
// checkFile('read');
//east =0,west=1
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["EAST"] = 0] = "EAST";
    DIRECTIONS[DIRECTIONS["WEST"] = 1] = "WEST";
    DIRECTIONS[DIRECTIONS["NORTH"] = 2] = "NORTH";
    DIRECTIONS[DIRECTIONS["SOUTH"] = 3] = "SOUTH";
})(DIRECTIONS || (DIRECTIONS = {}));
//numeric enums, increments automatically
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["EAST"] = 1] = "EAST";
    DIRECTION[DIRECTION["WEST"] = 2] = "WEST";
    DIRECTION[DIRECTION["NORTH"] = 3] = "NORTH";
    DIRECTION[DIRECTION["SOUTH"] = 4] = "SOUTH";
})(DIRECTION || (DIRECTION = {}));
var checkDirection = function (choice) {
    console.log(choice);
};
checkDirection(DIRECTION.NORTH);
