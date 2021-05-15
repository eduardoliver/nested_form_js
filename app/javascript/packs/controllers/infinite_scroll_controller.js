// hello_controller.js
import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = ["entries", "pagination"]

  initialize(){
    console.log ("infinite scroll init");
  }

  connect() {
    console.log ("infinite scroll connect");
  }

  scroll(){
    console.log ("infinite scroll scroll");    
  }
}
