//string literal types
type FileStatus = 'READ'|10|'READWRITE';

function checkFile(status:FileStatus) {
    console.log(status);
}
checkFile('READ');
// checkFile('read');

//numeric enums, increments automatically
//east =0,west=1
enum DIRECTIONS{
    EAST,WEST,NORTH,SOUTH
}
enum DIRECTION{
    EAST=1,WEST,NORTH,SOUTH
}
//string enums
enum APPSTATUS{
    active = "active",
    inactive = "silent"
}
var checkDirection = (choice: DIRECTION )=>{
    console.log(choice);
}
checkDirection(DIRECTION.NORTH); //returns the value

