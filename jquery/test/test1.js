(function(){

    function it(desc,func){
        try{
            func();
            console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
        }catch(err){
            console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
            console.log(err);
        }
    }
// method for testing
    function assert(resultisTrue){
        if(!resultisTrue)
            throw new Error();
    }
    // method for testing
    function assertNegative(number){
        if(number<0)
            throw new Error();
    }
 
    // testcases
    it('should pass as it is same value ',function(){
        assert(true==true);
    });   
    it('should fail',function(){
        assert(false===0);
    }); 
    it('should pass as length is <5',function(){
        assert(mystud.checkName('Raju')=='Raju')
    })
    it('should pass as length is >5',function(){
        assert(mystud.checkName('Kumaran')=='KUMARAN')
    })
    it('should fail less <5 and upper',function(){
        assert(mystud.checkName('Raju')=='RAJU')
    })
    it('should pass as sum is correct',function(){
        assert((mystud.totalMarks(80,80))==160)
    })
    it('should fail as sum is negative',function(){
        assert((mystud.totalMarks(-80,-80))>0)
    })
    it('should fail as sum is negative',function(){
        assertNegative((mystud.totalMarks(-80,-80)));
    })
})()