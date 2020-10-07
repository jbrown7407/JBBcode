$(function () {


  // push item to the list and send it to the DOM
  $("#submit").on("click", function () {
      let toDoItemList = []
      let textItem = $("#input-box").val()
      toDoItemList.push(textItem)

      for (let index = 0; index < toDoItemList.length; index++) {
        let div = $("<div>");
          div.addClass("to-do-item")
          div.attr("key", index);
          div.attr("type", "button")
          let p = $("<p>");
          p.text(toDoItemList[index])
          let button = $("<button>")
          button.addClass("button-completed")
          button.text("COMPLETED")
          div.append(p)
          div.append(button)
          $("#to-do-list").append(div)
      }

      $(".button-completed").on("click", function (event) {
        let div = $(event.currentTarget).parent()
          console.log($(div.children()[1].innerHTML));
          div.children()[1].innerHTML = "REMOVE"
          $(div).removeClass().addClass("done-item")
          $("#completed").append(div)

      })

      $("done-item button").on("click", function () {
        $(event.currentTarget).hide()
      })
  })






})
