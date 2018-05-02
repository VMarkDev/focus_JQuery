$(function(){
  var inp = document.getElementsByClassName("focus")[0];
  inp.focus();
  inp.scrollLeft = inp.scrollWidth;
  inp.setSelectionRange(inp.value.length,inp.value.length )
});
