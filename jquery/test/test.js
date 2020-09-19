(function(){
    function it(desc, func){
        try{
            func();
            // console.log(desc);
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        }catch(error){
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.log(error);
        }
    }
function assert(isTrue){
    if(!isTrue){
        throw new Error();
    }
}
it('should fail',function(){
    assert(false===0);
});
it('should pass',function(){
    assert(false===false);
});
it('should fail as length is less than 5',function(){
    assert(myapp.checkName('hell')==='hell');
});
it('should pass as length>5',function(){
    assert(myapp.checkName('welcome')==='WELCOME');
});

it('should fail as logic is wrong',function(){
    assert(myapp.sum(20+90)===110);
});
})();