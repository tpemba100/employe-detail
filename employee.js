var table = document.getElementById("myTable");
var arrValues = new Array();




function addRow() {
  // Get the table element in which you want to add row
  // let rmvButton = document.getElementById("remove");

  // Create a row using the inserRow() method and
  // specify the index where you want to add the row
  let row = table.insertRow(-1); // We are adding at the end
  let rowCount = table.rows.length - 1;

  for (let c = 0; c < 4; c++) {
    let td = document.createElement("td"); // table
    td = row.insertCell(c);

    let ele = document.createElement("input");
    ele.setAttribute("type", "text");
    ele.setAttribute("value", "");

    if (c === 0) {
      ele.setAttribute("id", "designation" + rowCount);
    } else if (c === 1) {
      ele.setAttribute("id", "employeeName" + rowCount);
    } else if (c === 2) {
      ele.setAttribute("id", "employeeId" + rowCount);
    } else if (c === 3) {
      ele.setAttribute("id", "prevCompany" + rowCount);
    }

    // ele.setAttribute("id", c );

    td.append(ele);
  }

  //CREATES THE REMOVE BUTTON
  let td = document.createElement("td"); // table data
  td = row.insertCell(4);

  let rmv = document.createElement("button");
  rmv.setAttribute("type", "submit");
  rmv.setAttribute("id", "remove");
  rmv.innerHTML = "Remove";
  rmv.setAttribute("onclick", "removeRow()");

  td.append(rmv);

  // choosing the last row and last cell
  // choose the second last and delete the remove
  if (table.rows.length - 1 > 2) {
    let secondLastRow = table.rows[table.rows.length - 2];

    secondLastRow.deleteCell(4);
  }
}

function removeRow() {
  let rowCount = table.rows.length - 1;

  let thelastRow = table.rows[table.rows.length - 1];

  //get location of last row last cell

  let lastCell = thelastRow.cells[thelastRow.cells.length - 1]; //the delete last cell
  // console.log(lastCell)

  //get location of second last row and last cell
  let secondLastRow = table.rows[table.rows.length - 2];
  let secondLastCell = secondLastRow.cells[secondLastRow.cells.length - 1]; //the last cell

  if (rowCount > 2) {
    let td = document.createElement("td"); // table data
    td = secondLastRow.insertCell(4);

    //create another button
    let rmv = document.createElement("button");
    rmv.setAttribute("type", "submit");
    rmv.setAttribute("id", "remove");
    rmv.innerHTML = "Remove";
    rmv.setAttribute("onclick", "removeRow()");
    td.append(rmv);
  }

                          //ANOTHER SOLUTION
                          // td.setAttribute("Padding", "0");
                          // secondLastCell = lastCell;
                          // td.append(secondLastCell);
                          // console.log(secondLastCell);
                          // console.log("first" + scndLastCell)

  //remove
  console.log("REMOVE");

  document.getElementsByTagName("tr")[rowCount].remove();
}

// let thelastRow = table.rows[table.rows.length-1];
//   let mainlastCell = thelastRow.cells[thelastRow.cells.length-1];

let submit = () => {

  let myTab = document.getElementById("myTable");

  //also counts the header as row
  let arrLength = myTab.rows.length - 1;

  // loop through each row of the table.
  for (row = 1; row < arrLength + 1; row++) {
                        // loop through each cell in a row.
                         // let element = myTab.rows.item(row).cells[c];
    arrValues[row - 1] = {
      designation: document.getElementById(`designation${row}`).value,
      employeeName: document.getElementById(`employeeName${row}`).value,
      employeeId: document.getElementById(`employeeId${row}`).value,
      prevCompany: document.getElementById(`prevCompany${row}`).value,
    };
  }

  
  // The final output.
  console.log(arrValues);
  showData();

  //JSON
  const data = arrValues();



  const url = `http://localhost:3000/employee`;
  const method = "POST";
  
  fetch (url, {
      method,
      body: JSON.stringify(data),
      headers: {
          Accept: "application/json",
          "Content-Type":"application/json",
      },
  });


  
  
};




// PRINT DATA

function showData(x) {
  let dTable = document.getElementById("displayTable");


  const data = arrValues;
  // console.log(data[1]);
  // console.log(data[1].designation)
  // let displayTable = document.createElement("TABLE");



  for (let i = 0; i < 4; i++) {
    
    var row = dTable.insertRow(i);

    row.insertCell(0).innerHTML = arrValues[i].designation;
    row.insertCell(1).innerHTML = arrValues[i].employeeName;
    row.insertCell(2).innerHTML = arrValues[i].employeeId;
    row.insertCell(3).innerHTML = arrValues[i].prevCompany;

  }
  console.log(table)
  // document.append(displayTable);



  //  document.getElementById('output').innerHTML = ;
}






// console.log(data)


//      npx json-server --watch db.json
