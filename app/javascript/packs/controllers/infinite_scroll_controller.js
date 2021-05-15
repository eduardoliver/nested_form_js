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

  scroll(event){
    var body = document.body
    var html = document.documentElement

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

    if (window.pageYOffset >= height - window.innerHeight) {
      console.log ("infinite scroll reached bottom");
    }
  }
}
