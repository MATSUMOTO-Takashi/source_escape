$(function() {
  /*
   * タブを指定された数のスペースに変換する。
   * @param text {String} - タブを含んだ文字列
   * @param sNum {Number} - 置換するスペースの数
   * @return {String} 置換した文字列
   */
  function tab2space(text, sNum) {
    var s = Array(sNum + 1).join(' ');
    return text.replace(/\t/g, s);
  }

  /*
   * 変換ボタンが押されたときに、入力されている文字列をHTMLエスケープした上で、preタグで括って出力します。
   */
  $('#convert').on('click', function() {
    var src = $('#before-src').val();
    var output = $('<div/>').append($('<pre class="prettyprint linenums"/>').text(src)).html();

    // スペースに変換するチェックボックスがOnならタブを変換する。
    if ($('#tab2space').prop('checked')) {
      output = tab2space(output, Number($('#snum').val()));
    }
    $('#after-src').val(output);
  });

  /*
   * 変換後のテキストエリアにフォーカスされたときに、テキストを選択します。
   */
  $('#after-src').on('focus', function() {
    $(this).select();
  });
});
