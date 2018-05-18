var flag = 0;
var offX = 0;
var offY = 0;
var clock;
$(document).ready(function(){
  clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        callbacks: {
            interval: function() {
                var time = this.factory.getTime().time;  
            }
        }
    });
	$('.sbt').click(function(){
		if($('#count_coin').val() == "3") {
			$('#wonderful').fadeIn(500);
			$('.col-sm-10').fadeOut(500);
      $('.clock').fadeOut(500);
			setTimeout(function() {
				$('#wonderful').fadeOut(500);
				$('.col-sm-10').fadeIn(500);
        $('.clock').fadeIn(500);
				clock = $('.clock').FlipClock({
            clockFace: 'MinuteCounter',
            callbacks: {
                interval: function() {
                    var time = this.factory.getTime().time;  
                }
            }
        });
			}, 3000);
		} else {
              clock.stop();
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
   
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
  if(flag == 0)
  {
    flag = 1;
    offX = ev.offsetX;
    offY = ev.offsetY;
  }
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    flag  = 0;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data,ev.target.id);
    if(data.includes('drag') && ev.target.id.includes('drag'))
    {
      $('#background_drop').append(document.getElementById(data));
      var x = ev.offsetX + parseInt($('#'+ev.target.id).css('left'));
      var y = ev.offsetY + parseInt($('#'+ev.target.id).css('top'));
      console.log(x, y, offX, offY);
      $('#'+data).css('position','absolute');
      $('#'+data).css('top',(y - (offY - 35)) +'px');
      $('#'+data).css('left',(x - (offX - 35)) +'px');
      
      var left1 = (parseInt($('#'+ev.target.id).css('left'))-50) + 'px';
      var top1 =(parseInt($('#'+ev.target.id).css('top'))-50) + 'px';
      $('#'+ev.target.id).animate({
          top: top1,
          left: left1,
      }, 300, function(){ 
              
      });

    } else {
      ev.target.appendChild(document.getElementById(data));
      if(ev.target.id != 'background_drop')
      {
        $('#'+data).css('position','relative');
        $('#'+data).css('top','0px');
        $('#'+data).css('left','0px');
      } else{
        var x = ev.offsetX;
        var y = ev.offsetY;
  //      console.log(x, y, offX, offY);
        $('#'+data).css('position','absolute');
        $('#'+data).css('top',(y - (offY - 35)) +'px');
        $('#'+data).css('left',(x - (offX - 35)) +'px');
      }
    }
    
}