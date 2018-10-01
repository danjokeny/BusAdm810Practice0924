//bus adm 810 web app dev
//danny forero
//assignment #2 - roster Array  CommonJS module
//Staging changes in GIT test
//MyRoster function array of student objects and calcGrades method
function myRoster(){
        let foo = [];
        foo.addStudent = function(inStudent) {
            foo.push(inStudent);
        }    ,
    foo.calcGrades = function() {
		var wkTotal = []
		if (foo.length <= 1 ) {
			// return 0 for average if the grades array is empty
			return 0;
		}
		for(var i = 0; i < foo.length ; i++) {
			wkTotal.push(foo[i].averageGrades());
		}
		return wkTotal
	}	  
return foo;
};
module.exports = myRoster;
    