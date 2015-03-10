$(function() {
  /*
   * 変換ボタンが押されたときに、入力されている文字列をHTMLエスケープした上で、preタグで括って出力します。
   */
  $('#convert').on('click', function() {
    var src = $('#before-src').val();
    var output = $('<div/>').append($('<pre class="prettyprint linenums"/>').text(src)).html();
    $('#after-src').val(output);
  });

  /*
   * 変換後のテキストエリアにフォーカスされたときに、テキストを選択します。
   */
  $('#after-src').on('focus', function() {
    $(this).select();
  });
});
