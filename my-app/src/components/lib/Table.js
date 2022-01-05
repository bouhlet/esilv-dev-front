// Créer un composant Table qui doit être paramétré.
// Paramètres:
//    - nbLine
//    - nbColumn
//    - cellStyle
function Table({nbLine = 5, nbColumn = 5, cellStyle = {}, cellComponent}) 
{
    const trs = [];
    for (let i = 0; i < nbLine; i++) {
        trs.push(<Row 
            lineNumber={nbLine} 
            nbColumns={nbColumn} 
            cellStyle={cellStyle}
            cellComponent={cellComponent}/>);
      }

    return (<table>
        <tbody>
            {trs}
        </tbody>
    </table>);
}
  
function Row({lineNumber, nbColumns, cellStyle, cellComponent}) {
    const tds = [];
    // // const tr = table.inserRows();
    // // Création des colonnes
    for (let j = 0; j < nbColumns; j++) {
      tds.push(
        cellComponent ?? (
        <Column 
        textContent ={"Case " + lineNumber + " " + lineNumber} 
        cellStyle={cellStyle}
        />)
        );
    }
    return <tr>
        {tds}
    </tr>;
  }

  function Column({textContent, cellStyle}) {

    return <td style={cellStyle}>
        {textContent}
    </td>;
  }
  export default Table;
  