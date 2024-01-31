import { zechusim } from "./zchusimList.js";

const table = document.getElementById('table');

zechusim.forEach(zechus => {
    const row = document.createElement("TR");
    for (const item in zechus){
        const cell = document.createElement("TD");
        cell.innerText = zechus[item];
        row.appendChild(cell);
    }
    table.appendChild(row);
   
})