// Define a JavaScript object
var sendData = {
    ename: "Bob",
    eid: 345,
    eaddress: "Andheri"
};

// Convert JavaScript object to JSON string
document.write("<h3>Stringify Example:</h3>");
document.write(JSON.stringify(sendData) + "<br><br>");

// Define JSON data
var data = '{"name": "belly", "id": 34, "address": "vile parle"}';

// Parse JSON data to JavaScript object
var parsedData = JSON.parse(data);
document.write("<h3>Parse Example:</h3>");
document.write("Name: " + parsedData.name + "<br>");
document.write("ID: " + parsedData.id + "<br>");
document.write("Address: " + parsedData.address + "<br>");
