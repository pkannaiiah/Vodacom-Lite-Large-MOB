 //debugger;
 $(document).ready(function(){
    $(".dropdownmenu001").on('click',function(){
        $("body").addClass('modal-popup');
    });
    $(".listaction").on('click',function(){
        $("body").removeClass('modal');
    });
});

var inputQuantity = [];
    $(function() {
      $(".mobile-number").on("keyup", function (e) {
        var $field = $(this),
            val=this.value,
            $thisIndex=parseInt($field.data("idx"),10); 
        if (this.validity && this.validity.badInput || isNaN(val) || $field.is(":invalid") ) {
            this.value = inputQuantity[$thisIndex];
            return;
        } 
        if (val.length > Number($field.attr("maxlength"))) {
          val=val.slice(0, 15);
          $field.val(val);
        }
        inputQuantity[$thisIndex]=val;
      });      
    });