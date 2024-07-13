
function createObject() {
    return {
        numberValue: 42, 
        stringValue: "Halo, Dunia!", 
        arrayValue: [1, 2, 3, 4, 5], 
        objectValue: { 
            name: "John Doe",
            age: 30
        }
    };
}


function displayObjectDetails(obj) {
    const objectDetails = document.getElementById("objectDetails");
    const numberItem = document.createElement("li");
    numberItem.textContent = `Number Value: ${obj.numberValue}`;

    const stringItem = document.createElement("li");
    stringItem.textContent = `String Value: ${obj.stringValue}`;

    const arrayItem = document.createElement("li");
    arrayItem.textContent = `Array Value: ${obj.arrayValue.join(", ")}`;

    const objectItem = document.createElement("li");
    objectItem.textContent = `Object Value: Name - ${obj.objectValue.name}, Age - ${obj.objectValue.age}`;

    
    objectDetails.appendChild(numberItem);
    objectDetails.appendChild(stringItem);
    objectDetails.appendChild(arrayItem);
    objectDetails.appendChild(objectItem);
}


const myObject = createObject();
displayObjectDetails(myObject);


