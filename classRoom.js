//bus adm 810 web app dev
//danny forero
//assignment #2 - classRoom CommonJS module
//testing Git3

console.log('begin BusAdm810 classRoom');

//Import Student and Roster files
let myRoster = require('./Roster');
let myStudent = require('./student')


//instantiate array of student objects
let roster = new myRoster();

//add first line item into array - add name and grades
roster.addStudent(new myStudent('Lutfus',[]));
roster[0].addGrade(75);
roster[0].addGrade(100);

//add second  line item into array - add name and grades
roster.addStudent(new myStudent('Sally',[]));
roster[1].addGrade(95);
roster[1].addGrade(100);

//add third line item into array - add name and No grades to test empty grades array
roster.addStudent(new myStudent('Danny',[]));

//loop thru roster array printing name, grades, total, and average for each array item
for(var i = 0; i < roster.length ; i++) {
    console.log('roster['+i+'].name is ' + roster[i].Name);
    console.log('roster['+i+'].grades is ' + roster[i].Grades);   
    var stTotal = roster[i].totalGrades();  
    console.log( 'roster['+i+'].total grades = ' +  stTotal );    
    var stAvg = roster[i].averageGrades();  
    console.log( 'roster['+i+'].average grades = ' +  stAvg );    
};

//call roster calcGrades to return array of averages
console.log('calculate grades = '+roster.calcGrades());

//end of classRoom
console.log('end BusAdm810 classRoom');


