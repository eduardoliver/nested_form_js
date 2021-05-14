// hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "links", "template" ]

  initialize(){
   console.log ("init");

  }

  connect() {
   console.log ("connect")
  }

  add_association(event) {
    console.log("Click add task")
    event.preventDefault()

    var content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, (new Date).getTime())
    this.linksTarget.insertAdjacentHTML("beforebegin", content)
  }
}
