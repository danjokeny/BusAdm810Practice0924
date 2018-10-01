# BusAdm810Practice0924

Part 1
Create a program that:

Uses the constructor notation to define a Student object which includes.
name and grades properties (grades is an array)
addGrade method that adds a grade to the grades array
totalGrades method that totals the grades in the grades array
averageGrades method that returns the average of the grades or returns 0 if there are no grades
Creates an instance of the Student object
Writes the student name to the console
Adds two grades to the student object
Writes the total of the grades to the console
Writes the average of the grades to the console
Part 2
Convert the student object you created in Part1 into a CommonJS module.  This will follow a similar format as the myModule constructor in the notes.  However, this module represents a single student so, instead of an array, the module should export an object.  It should have the same properties and methods as in Part 1.

Create another module called roster.  This is an array of students objects.  It should have methods to add a student (addStudent) and to calculate the averages for all students in the roster (calcGrades) array (keep in mind that the student objects have a method to calculate their average grade).  The calcGrades method method should return an array of averages.

Create a file called classRoom.js that imports the two modules and adds two students with their grades:

roster.addStudent(new Student('Lutfus'))
roster[0].addGrade(75);
roster[0].addGrade(100);

roster.addStudent(new Student('Sally'))
roster[1].addGrade(95);
roster[1].addGrade(100);
It should then write the names of the students to the console and the array of average grades.
