// let submit = () => {
  //   let myTab = document.getElementById('myTable');
  //   let arrValues = new Array();
  //   // let arrObject = [];
  //   let arrLength = myTab.rows.length;
  
  //   // loop through each row of the table.
  //   for (row = 1; row < arrLength; row++) {
  //     // loop through each cell in a row.
  //     for (c = 0; c < myTab.rows[row].cells.length; c++) {
  //       let element = myTab.rows.item(row).cells[c];
  
  //       if (element.childNodes[0].getAttribute('type') == 'text') {
  
  //         arrValues.push("'" + element.childNodes[0].value + "'");
  //         // arrObject[row].push( element.childNodes[0].value);
  
  //       }
  //     }
  //   }
  
  //   console.log(arrValues)
  
  //    // The final output.
  //    document.getElementById('output').innerHTML = arrValues;
  //   //console.log (arrValues);   // you can see the array values in your browsers console window. Thanks :-)
  // }
  
  //   function submit() {
  
  //     let arrValues = new Array();
  //     // let Employees = [];
  
  //       let myTab = document.getElementById("myTable");
  //       let rowCount = myTab.rows.length - 1;
  
  //       // console.log(table.rows[2])
  //       // let a = table.rows[2];
  
  //       for (let i = 0; i <3; i++ ) {
  //           // let a = table.rows[i];
  
  //           for (let j =0; j<myTab.rows[i].cells.length; j++) {
  //         // let element = myTab.rows.item(i).cells[j];
  
  //               // if (element.childNodes[0].getAttribute('type') == 'text') {
  //               //         arrValues.push("'" + element.childNodes[0].value + "'");
  
  //                       Employees[i] = {
  //                                         VAL : i,                          //employee is row and i is for each cell
  //                                         designation : myTab.rows.item(i).cells[j].childNodes[0].value,
  //                                         employeeName :myTab.rows.item(i).cells[j].childNodes[0].value,
  //                                         employeeId : myTab.rows.item(i).cells[j].childNodes[0].value ,
  //                                         prevCompany : myTab.rows.item(i).cells[j].childNodes[0].value,
  //                                     }
  
  //                                     // }
  //                                   }
  //                                 }
  
  //                                 // console.log(arrValues)
  //                                 console.log(Employees)
  
  //  }
  
  //     // for ( let i = 0;  i <rowCount; i++) {
  
  //     //         Employees[i] = {
  //     //             VAL : i,                          //employee is row and i is for each cell
  //     //             designation : document.getElementById(`designation`).value,
  //     //             employeeName : document.getElementById(`employeeName`).value,
  //     //             employeeId : document.getElementById(`employeeId`).value,
  //     //             prevCompany : document.getElementById(`prevCompany`).value,
  //     //          }
  
  //     //         // Employees[i] = {
  //     //         //     VAL : i,                          //employee is row and i is for each cell
  //     //         //     designation : document.querySelector(`#designation`).value,
  //     //         //     employeeName : document.querySelector(`#employeeName`).value,
  //     //         //     employeeId : document.querySelector(`#employeeId`).value,
  //     //         //     prevCompany : document.querySelector(`#prevCompany`).value,
  //     //         //  }
  
  //     //         // console.log(Employees[i]);
  //     //     }