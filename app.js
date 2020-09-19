$(document).ready(function () {
  $('#searchButton').click(function () {
    let keyword = $('#searchInput').val();
    // var url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dnDYnhscTN4EvZ6JA1oYz9g8xskNbZjL&limit=25`
    var url = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=5jI1jMuMrcHcJpAXDvl5Kj7gM2WvKt4D&limit=25"
    console.log(url);
    $.ajax( {
      type: "GET",
      url: url,
      success: function (data) {
        s = ""
        console.log('received data')
        $.each(data.data, function (key, value) {
          s += "<div><img src='" + value.images.downsized_medium.url + "' /></div>\n";

        });
        console.log(s);
        $('#outputArea').html(s);
      },
      error: function (data) {
        console.log('error')
      }
    })
  })
})
