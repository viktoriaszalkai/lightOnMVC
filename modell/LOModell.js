export default class LOModell {
  #LISTA = [true, true, true,true,true,true,true,true,true ];
  #aktErtek;
  #db;

  constructor() {
    this.#setAktElem();
    this.#db = this.#dbSzamol();
  }

  #setAktElem() {
    for (let index = 0; index < this.#LISTA.length; index++) {
      let szam = Math.random();
      if (szam < 0.4) {
        this.#LISTA[index] = true;
      } else {
        this.#LISTA[index] = false;
      }
    }
  }

  getList() {
    return this.#LISTA;
  }

  #dbSzamol() {
    for (let index = 0; index < this.#LISTA.length; index++) {
      if (this.#LISTA[index] == false) {
        this.#db++;
      }
    }
  }
  kapcsolo(index) {
    this.#LISTA[index] = !this.#LISTA[index];

    if (index % 3 != 0) {
      this.#LISTA[index - 1] = !this.#LISTA[index - 1];
    }

    if (index % 3 != 2) {
      this.#LISTA[index + 1] = !this.#LISTA[index + 1];
    }

    if (index < 6) {
      this.#LISTA[index + 3] = !this.#LISTA[index + 3];
    }
    if (index > 2) {
      this.#LISTA[index - 3] = !this.#LISTA[index - 3];
    }
  }
}
