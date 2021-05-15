// hello_controller.js
import { Controller } from "stimulus"
import Sortable from "sortablejs"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = []

  initialize(){
   // console.log ("init");
  }

  connect() {
   // console.log ("connect")
   this.sortable = Sortable.create(this.element, {
     animation: 150,
     onEnd: this.end.bind(this)
   })
  }

  end(event) {
    //Note we need the bind call to have access to this from the connect.
     console.log(event)
    // console.log(this)
    let id   = event.item.dataset.id
    var data = new FormData()
    data.append("position", event.newIndex + 1)

    Rails.ajax({
      url:this.data.get("url").replace(":id",id),
      type:'PATCH',
      data: data
    })
  }
}
