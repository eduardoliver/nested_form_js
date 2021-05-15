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
//    console.log (this.entriesTarget);
//    console.log (this.paginationTarget);
  }

  scroll(event){
    let url = this.paginationTarget.querySelector("a[rel='next']").href
    console.log ("ininite scroll url for next page", url)

    var body = document.body
    var html = document.documentElement

    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)

    if (window.pageYOffset >= height - window.innerHeight) {
      // console.log ("infinite scroll reached bottom");
      this.loadMore(url)
    }
  }

  loadMore(url) {
    Rails.ajax({
      url: url,
      type:'GET',
      dataType: 'json',
      success: (data) => {
        // console.log(data)
        this.entriesTarget.insertAdjacentHTML('beforeend', data.entries)
        this.paginationTarget.innerHTML = data.pagination
      }
    })

  }
}
