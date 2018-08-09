// YOUR CODE BELOW
function allSystemsGo(spacecraft) {

    for (let system in spacecraft) {
        
        let curObject = spacecraft[system];

        if (typeof curObject === 'object') {
            let nestedObj = allSystemsGo(curObject);
            if (!nestedObj) return false;
        }

       else if (!curObject) return false;
    }

    return true;
}



let sailboat = {
    sails: {
        main: true,
        jib: true
    },
    radio: true,
    steering: {
        tiller: false
    }
};
  
let result = allSystemsGo(sailboat); // => false
console.log(result);

// function allSystemsPrint(object) {
//     for (key in object) {
//         console.log(key);
//     }
// }


// allSystemsPrint(sailboat);

