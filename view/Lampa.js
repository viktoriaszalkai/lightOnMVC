export default class Lampa {
  #index;
  #szuloElem;
  #ertek;

  constructor(ertek, index, szuloElem) {
    this.#index = index;
    this.#szuloElem = szuloElem;
    this.#ertek = ertek;
    this.lampaKiir();
    this.lampaELEM = $(".lampa:last-child");
    this.gombKattint();
  }
  lampaKiir() {
    
    if(this.#ertek == true){
        this.#szuloElem.append(`<div class="lampa felkapcs"></div>`);

    }else{
        this.#szuloElem.append(`<div class="lampa"></div>`);
    }
  }

  gombKattint() {
    this.lampaELEM.on("click", () => {
      const e = new CustomEvent("katt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
