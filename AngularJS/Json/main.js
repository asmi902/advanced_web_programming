// Create a JSON object and manipulate it
var jsonObject = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  profession: "Web Developer"
};

jsonObject.firstname = "Jane"; // Update property
jsonObject.middlename = "Smith"; // Add new property
delete jsonObject.middlename; // Delete property

document.write("<h3>JSON Object Manipulation:</h3>");
for (var key in jsonObject) {
  document.write(key + ": " + jsonObject[key] + "<br>");
}

// JSON Array example
var fifaPlayers = [
  { playername: "Neymar", country: "Brazil" },
  { playername: "Messi", country: "Argentina" },
  { playername: "Ronaldo", country: "Portugal" }
];

document.write("<h3>JSON Array Example:</h3>");
fifaPlayers.forEach(player => {
  document.write(player.playername + " (" + player.country + ")<br>");
});

// Load JSON data from index.json file (API Handling)
fetch('index.json')
  .then(response => response.json())
  .then(data => {
      document.write("<h3>Loaded JSON Data from API:</h3>");
      data.employee.forEach(emp => {
          document.write(`Name: ${emp.ename}, Salary: ${emp.esalary}, ID: ${emp.eid}<br>`);
      });
  })
  .catch(error => console.error('Error:', error));
