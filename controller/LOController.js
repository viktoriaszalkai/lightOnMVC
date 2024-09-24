import LOModell from "../modell/LOModell.js";
import Palya from "../view/Palya.js";
export default class LOContoller {
  constructor() {
    this.taroloElem = $(".jatekTer");
    this.modell = new LOModell();
    new Palya(this.modell.getList(), this.taroloElem);
    this.#esemenyKezelo();
  }

  #esemenyKezelo() {
    $(window).on("katt", (event) => {
      console.log(event.detail);
      this.modell.kapcsolo(event.detail);
      new Palya(this.modell.getList(), this.taroloElem);
      
    });
  }

}
