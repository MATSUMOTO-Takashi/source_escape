$(function() {
  $('#convert').on('click', function() {
    var src = $('#before-src').val();
    var output = $('<div/>').append($('<pre class="prettyprint linenums"/>').text(src)).html();
    $('#after-src').val(output);
  });
});
