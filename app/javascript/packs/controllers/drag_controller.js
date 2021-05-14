// hello_controller.js
import { Controller } from "stimulus"
import Sortable from "sortablejs"


export default class extends Controller {
  static targets = []

  initialize(){
   // console.log ("init");
  }

  connect() {
   // console.log ("connect")
   this.sortable = Sortable.create(this.element, {
     
   })
  }
}
