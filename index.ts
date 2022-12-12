import fetch from "node-fetch";

const fetchProduct = async () => {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data as IData);
};

fetchProduct();
interface Company {
  nome: string;
  fundacao: number;
  pais: string;
}
interface IData {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Company;
  empresaMontadora: Company;
}

function showProduct(data: IData) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
