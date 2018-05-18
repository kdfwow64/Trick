
$(document).ready(function(){

	$('.sbt').click(function(){
		if($('#count_coin').val() == "3") {
			$('#wonderful').fadeIn(500);
			$('.col-sm-10').fadeOut(500);
			setTimeout(function() {
				$('#wonderful').fadeOut(500);
				$('.col-sm-10').fadeIn(500);
				location.reload();
			}, 3000);
		} else {
			$('#you_answered').val($('#count_coin').val());
			$('#failed_text').html("<h1 class='failed-h1' style='font-size:50px;'>Sorry, incorrect...</h1>");
			$('.main-question').html("The correct answer is:");
			$('.main-question').css('color','#77a200');
			$('.duck-imgs').css('display','none');
			$('.duck-correct-num').css('display','unset');
			$('.explanation').css('display','unset');
			$('.explanation').css('color','#77a200');
			$('.hidden-div').css('display','unset');
			$('.duck-choose-num').html($(this).find('span').html());
			$('.sbt').css('display','none');
			$('.got-it').css('display','unset');
			$('.got-it1').css('display','unset');
		}
	});

    $('.got-it').click(function(){
    	location.reload();
    });

    $('.got-it1').click(function(){
    	location.reload();
    });




 

});
   dragElement(document.getElementById(("mydiv")));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}