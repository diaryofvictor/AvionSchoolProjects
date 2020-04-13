// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno
function listProperties(object) {
    for (let key in object) {
        console.log(object[key]);
      }
}



// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
function deleteRollno(object) {
    console.log(object);
    delete object.rollno;
    console.log(object);
}




// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
function getLength(object) {
    let size = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            size ++;
        }
    }
    return size;
}



// Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books.
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];
function readingStatus(object) {
    for (let i = 0; i < object.length; i++) {
        console.log(object[i].readingStatus);
      }
}



// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :
// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:
// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
function sortArray(object) {
    let swap;

    do {
        swap = false;
        for (let i = 0; i < object.length - 1; i++) {
            if (object[i].libraryID < object[i+1].libraryID) {
                let temp = object[i];
                object[i] = object[i+1];
                object[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return object;
}



// Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
function printMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == "function";
    });
}



// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
function retrieveProperties(object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys;
} // Confusing. Involves the topic of classes.


// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function convertToList(object) {
    let newList = [];
    for (let key in object) {
        newList.push([key, object[key]]);
    }
}

// Write a JavaScript function to check whether an object contains given property.
function containsProperty(object, property) {
    for (let key in object) {
      if (object.hasOwnProperty(property)) {
        return true;
      } else {
        return false
      };
    }
  }