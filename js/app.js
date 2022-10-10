

function ActiveGroup(){
  var group = document.getElementById("Group");
  var chat = document.getElementById("chat");
  var btnGroup = document.getElementById("btn-group");
  var btnClose = document.getElementById("btn-close");

  group.classList.toggle("active-block");
  chat.classList.toggle("active-none");
  btnGroup.classList.toggle("active-none");
  btnClose.classList.toggle("active-block");

}






$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = $(this).data('include') + '.html'
      $(this).load(file)
    })
  })

