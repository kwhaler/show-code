'use strict';

var sc = window.sc = {};

$.fn.showCode = function() {
  
  $('#show-code-trigger').click(function(e){
      e.preventDefault();
      $('.toggle-code').toggle();
  });
  var obj = $(this);
  $.each( obj, function(index){
    var html = $(this).html().replace(/</g, '&lt;').replace(/>/g, '&gt;');
    $(this).append('<a href="#" class="toggle-code btn btn-default btn-xs"><b>&lt;&nbsp;/&gt;</b></a>'+
                   '<pre class="code-block"><code class="language-markup">'+html+'</code></pre>');
  });
  $('.code-block').hide();
  $('.toggle-code').click(function(e){
    e.preventDefault();
    $(this).next('.code-block').slideToggle('fast');
  }).css({
    'position':'absolute',
    'top': 0,
    'right': 15+'px'
  });
};

(function () {
  $('.show-code').showCode();
}());