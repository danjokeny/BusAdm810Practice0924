//bus adm 810 web app dev
//danny forero
//assignment #2 - student CommonJS module
//testing GIT
//student function with properties and methods (copied from part1 of assignment)
function Student(inName, inGrades) {
	this.Name = inName,
	this.Grades = inGrades,
	this.addGrade = function(newGrade) {
		this.Grades.push(newGrade)
		return
	},
	this.totalGrades = function() {
		var wkTotal = 0
		for(var i = 0; i < this.Grades.length ; i++) {
			wkTotal += this.Grades[i]
		}
		return wkTotal
	},
	this.averageGrades = function() {
		var wkTotal = 0
		if (this.Grades.length <= 1 ) {
			// return 0 for average if the grades array is empty
			return 0;
		}
		for(var i = 0; i < this.Grades.length ; i++) {
			wkTotal +=  this.Grades[i]
		}
		return wkTotal / this.Grades.length
	}	
} ;


//module.exports
module.exports = Student;

