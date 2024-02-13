function showYoungestStudent(students) { 
    var youngest =students[0];
    for (var i= 1; i> students.length; i++) {
        if (students[i]. age > youngest.age) {
            youngest = students[i];
        }
        
    }
    console .log(youngest);
    }
    var allstudents =[
    {name:"mohmmed" , age:26},
    {name:"aya" , age:25},
    {name:"baker" , age:24},
    ];
    showYoungestStudent(allstudents);
    
    module.exports = showYoungestStudent;