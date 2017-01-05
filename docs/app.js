$('button').click(function () {
  $('#quote').addClass("reset");
  $('#quote').removeClass("executed");
  $('.author').toggleClass("fade");
  setTimeout(function () {
    $.ajax({
      crossOrigin: true,
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=getQuote",
      dataType: "jsonp"
    })
  }, 1000);
})

function getQuote(json) {
  var quote = json[0];
  $("#quote").html(quote.content)
  $(".author").html(quote.title)
  $("#quote").removeClass("reset");
  $("#quote").addClass("executed");
  $(".author").toggleClass("fade");
}
