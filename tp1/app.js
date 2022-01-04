/**
 * Générer un tableau de 5x5 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 */


 addTable();

function addTable() {
    const myTableDiv = document.getElementById("root");
    const table = Table();
    myTableDiv.appendChild(table);
  }


  function Table(nbLines = 10, nbColumns = 10){
    const tableBody = document.createElement('TBODY');
    tableBody.id = "myTable";
    tableBody.border = '1';
    for (let i = 0; i < nbLines; i++) {
      const tr = Row(i, nbColumns);
      tableBody.appendChild(tr);
    }
    return tableBody;
  }

  function Row(lineNum, nbColumns = 5){
    const tr = document.createElement('TR');

    for (let j = 0; j < nbColumns; j++) {
     const td = Column("Case " + lineNum + " " + j);
     tr.appendChild(td);
    }
    return tr
  }

  function Column(textContent){
    const td = document.createElement('TD');
    td.id = "myCell";
    td.width = '75';
    //td.contentEditable = true; //Somewhat rare because somewhat unknown.
    const text = document.createTextNode(textContent);
    td.addEventListener("blur", handleInputBlur);
    td.appendChild(text);
    td.addEventListener("click", handleClicks);
    return td
  }

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