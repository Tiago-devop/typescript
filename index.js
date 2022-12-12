"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const fetchProduct = async () => {
    const response = await (0, node_fetch_1.default)("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
};
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
