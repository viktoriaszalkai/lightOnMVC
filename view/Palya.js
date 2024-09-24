import Lampa from "./Lampa.js";

export default class Palya {
  #LISTA = [];
  #szuloElem;

  constructor(lista, szuloElem) {
    this.#LISTA = lista;
    this.#szuloElem = szuloElem;
    this.#szuloElem.empty();
    this.palyaKiir();
  }

  palyaKiir() {
    this.#LISTA.forEach((ertek, index) => {
      new Lampa(ertek, index, this.#szuloElem);
    });
  }
}
