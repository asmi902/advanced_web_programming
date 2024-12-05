var employeeJson = [
  {
      "Employee Name": "Nitin Singh",
      "Address": "Hyderabad",
      "Email ID": "nitin.singh@gmail.com",
      "Age": 25
  },
  {
      "Employee Name": "Pawan Patil",
      "Address": "Delhi",
      "Email ID": "pawan.patil@gmail.com",
      "Age": 28
  },
  {
      "Employee Name": "Rajeev Kumar",
      "Address": "Noida",
      "Email ID": "rajeev.kumar@gmail.com",
      "Age": 25
  },
  {
      "Employee Name": "John Smith",
      "Address": "New York",
      "Email ID": "smith.jh@gmail.com",
      "Age": 22
  }
];

function createTableFromJsonData() {
  // Get the headers from JSON data
  var headers = Object.keys(employeeJson[0]);

  // Prepare HTML header
  var headerRowHTML = '<tr>';
  headers.forEach(header => {
      headerRowHTML += `<th>${header}</th>`;
  });
  headerRowHTML += '</tr>';

  // Prepare all the employee records as HTML
  var allRecordsHTML = '';
  employeeJson.forEach(record => {
      allRecordsHTML += '<tr>';
      headers.forEach(header => {
          allRecordsHTML += `<td>${record[header]}</td>`;
      });
      allRecordsHTML += '</tr>';
  });

  // Append the table header and all records
  var table = document.getElementById('display_json_data');
  table.innerHTML = headerRowHTML + allRecordsHTML;
}

// Run the function on window load
window.onload = createTableFromJsonData;
