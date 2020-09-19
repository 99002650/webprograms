(function(){
    mystud = {};
    mystud.checkName=function(studName){
        if(studName.length>5)
            return studName.toUpperCase();
        return studName;
    }
    mystud.totalMarks=function(m1,m2){
        return m1+m2;
    }
})();
