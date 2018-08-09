let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

var dayToIndex = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4
};

function attendanceCheck(dayOfWeek) {

    
    var dayIndex =  dayToIndex[dayOfWeek];
    var attendanceTracker = [];
    for (i=0; i<classRoom.length; i++) {
        var currentStudent = classRoom[i];

        var currentStudentName = Object.keys(currentStudent)[0];

        if (currentStudent[currentStudentName][dayIndex][dayOfWeek]) {
            attendanceTracker.push(currentStudentName);
        }
    }

    return attendanceTracker;


}

console.log(attendanceCheck("Tuesday"));

// console.log(classRoom[0]["Marnie"]);

// console.log(Object.keys(classRoom[0])[0]);