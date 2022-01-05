/**
 * Générer un tableau de 5x5 avec des chaînes par défaut sous la div #root
 * En cliquant sur une case, on change le contenu en input contenant la valeur de la case
 * En sortant de l'input (événement blur), on valide la valeur et on la met à jour dans le tableau
 */


 
const struct = 
{
  type: "table",
  children :[
    {
      type :"tr",
      children :[
        {
          type:"td",
          children: ["Case 0 0"],
        },
        {
          type: "td",
          children: ["Case 0 1"],
        },
      ],
    },
    {
      type :"tr",
      children :[
        {
          type:"td",
          children: ["Case 1 0"],
        },
        {
          type: "td",
          children: ["Case 1 1"],
        },
      ],
    },
  ]
}
function addTable() {
    const myTableDiv = document.getElementById("root");
    const table = generateStructure(struct)

    myTableDiv.appendChild(table);
  }

  addTable();


function generateStructure(struct) {
  const { type, children } = struct;
  const element = document.createElement(type);
  children.forEach((child) => {
    if (typeof child.type === "string"){
      const text = document.createTextNode(child);
      element.appendChild(text);
    } else {
      element.appendChild(generateStructure(child));
    }
  });
  return element;
}