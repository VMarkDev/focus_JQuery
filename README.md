Function JQuery for move cursor to end of input

<script src="js/jquery.js"></script>
<script>
$(function(){
   var inp = document.getElementsByClassName("focus")[0];
   inp.focus();
   inp.scrollLeft = inp.scrollWidth;
   inp.setSelectionRange(inp.value.length,inp.value.length )
 });
</script>
<input type="text" class=" focus" value="abc123">
