(function() {
'use strict';

angular
    .module('escape', [])
    .controller('SrcEscapeController', function() {
      this.spaceNum = 4;
      this.convert = function() {
        var output = angular.element('<div/>').append(angular.element('<pre class="prettyprint linenums"/>').text(this.beforeSrc)).html();

        if (this.tab2space) {
          output = tab2space(output, this.spaceNum);
        }
        this.afterSrc = output;
      };

      /*
       * タブを指定された数のスペースに変換する。
       * @param text {String} - タブを含んだ文字列
       * @param sNum {Number} - 置換するスペースの数
       * @return {String} 置換した文字列
       */
      function tab2space(text, sNum) {
        var s = new Array(sNum + 1).join(' ');
        return text.replace(/\t/g, s);
      }
    })
    .directive('tmClickSelect', function($timeout) {
      return {
        restrict: 'A',
        link: function(scope, el) {
          el.on('click', function(e) {
            $timeout(function() {
              e.target.select();
            });
          });
        }
      };
    });
})();
