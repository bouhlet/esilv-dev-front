/**
 * Générer un tableau de 5x5 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 */

function addTable() {
    const myTableDiv = document.getElementById("root");
  
    const table = document.createElement('TABLE');
    table.id = "myTable";
    table.border = '1';
  
    const tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (let i = 0; i < 5; i++) {
      const tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (let j = 0; j < 5; j++) {
        const td = document.createElement('TD');
        tr.appendChild(td);
        td.id = "myCell";
        td.width = '25';
        //td.contentEditable = true; //Somewhat rare because somewhat unknown.
        const text = document.createTextNode("0");
        td.addEventListener("blur", handleInputBlur);
        td.appendChild(text);
        td.addEventListener("click", handleClicks);
      }
    }
    myTableDiv.appendChild(table);
  }

  addTable();
  function handleClicks(event){
    const td = event.currentTarget;
    const input = document.createElement("input");
    input.value = td.textContent;
    td.textContent = "";
    td.appendChild(input);
    td.removeEventListener("click", handleClicks);
    input.focus();
  }

  function handleInputBlur(event){
    const input = event.currentTarget;
    const td = input.parentNode;
    const text = document.createTextNode(input.value);
    input.removeEventListener("blur", handleInputBlur);
    td.replaceChild(text, input);
    td.addEventListener('click', handleClicks);
  }
//   function functionOnFocus() 
//     {
//       this.contentEditable = true;
//       console.log("focused");
//     }
//     function functionOnblur() 
//     {
//       this.contentEditable = false;
    // }
//   function clickCell() {
//     const row = document.getElementById('myTable').rows;
//     for (const i = 0; i < row.length; i++) {
//         for (const j = 0; j < row[i].cells.length; j++ ) {
//                     console.log(row[i].cells[j].innerHTML);
//                     row[i].cells[j].addEventListener('click', function(cell){
//                         const inputValue = window.prompt("Enter new cell value");
//                         cell.innerText = inputValue;
//             })

//         }
//     }
// }
// clickCell();

// const cells = document.querySelectorAll("td");

// for (const cell of cells) {
//   cell.addEventListener('click', changeValue);
// }

// function changeValue(){
//     const inputValue = window.prompt("Enter new cell value");
//     this.textContent = inputValue;
// }