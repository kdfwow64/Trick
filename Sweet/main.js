var empty_field1 = [[95,54],[59,94],[64,142],[37,184],[45,236],[9,275],[21,325],[31,375],[38,432],[18,465]];
var empty_field2 = [[152,47],[173,99],[168,145],[187,197],[166,243],[176,296],[176,353],[170,402],[142,445],[175,479]];
var turn1_array=[];
var turn2_array=[];
for(i=0;i<3;i++) {
	turn = Math.floor(Math.random() * 10);
	while(turn1_array.indexOf(turn) != -1)
		turn = Math.floor(Math.random() * 10);
	turn1_array[i] = turn;
}
for(i=0;i<3;i++) {
	turn = Math.floor(Math.random() * 10);
	while(turn2_array.indexOf(turn) != -1)
		turn = Math.floor(Math.random() * 10);
	turn2_array[i] = turn;
}
$(document).ready(function() {
	var str;
	var item;
	for(i=0;i<10;i++) {
		str = 'each-pos1-'+i;
		item = '.'+str;
		if(turn1_array.indexOf(i) != -1) {
			$('.flower').append('<span name="'+i+'" class="fa fa-question flower-select-num1 question-tag1 '+str+'">'+'</span>');
			$(item).css('top',(empty_field1[i][0]+8)+'px');
			$(item).css('left',(empty_field1[i][1]-4)+'px');
			if(i == 9)
				$(item).css('left',(empty_field1[i][1]+6)+'px');
		} else {
			$('.flower').append('<span class="flower-number1 '+str+'">'+(i+1)+'</span>');
			$(item).css('top',empty_field1[i][0]+'px');
			$(item).css('left',empty_field1[i][1]+'px');
		}
	}

	for(i=0;i<10;i++) {
		str = 'each-pos2-'+i;
		item = '.'+str;
		if(turn2_array.indexOf(i) != -1) {
			$('.flower').append('<span name="'+i+'" class="fa fa-question flower-select-num2 question-tag2 '+str+'">'+'</span>');
			$(item).css('top',(empty_field2[i][0]+8)+'px');
			$(item).css('left',(empty_field2[i][1]-4)+'px');
			if(i == 9)
				$(item).css('left',(empty_field2[i][1]+8)+'px');
		} else {
			$('.flower').append('<span class="flower-number2 '+str+'">'+(i+1)+'</span>');
			$(item).css('top',empty_field2[i][0]+'px');
			$(item).css('left',empty_field2[i][1]+'px');
		}
	}

	$('.question-tag1').click(function() {
		if($(this).hasClass('fa')) {
			$(this).removeClass('fa');
			$(this).removeClass('fa-question');
			$(this).removeClass('question-tag1');
			$(this).text(0);
			place = parseInt($(this).attr('name'));
			$(this).css('top',empty_field1[place][0]+'px');
			$(this).css('left',empty_field1[place][1]+'px');
		}
	});

	$('.question-tag2').click(function() {
		if($(this).hasClass('fa')) {
			$(this).removeClass('fa');
			$(this).removeClass('fa-question');
			$(this).removeClass('question-tag2');
			$(this).text(0);
			place = parseInt( $(this).attr('name') );
			$(this).css('top',empty_field2[place][0] + 'px');
			$(this).css('left',empty_field2[place][1] + 'px');
		}
	});

	$('.flower-select-num1').click(function() {
		val = parseInt($(this).html());
		val = val % 10 + 1;
		$(this).html(val);
		place = $(this).attr('name');
		$(this).css('left',empty_field1[place][1]+'px');
		if(val == 10)
			$(this).css('left',($(this).css('left').replace('px','')-12)+'px');
		if(place == 9) {
			$(this).css('left',(empty_field1[place][1]+8)+'px');
			if(val == 10)
				$(this).css('left',(empty_field1[place][1]-2)+'px');
		}
	});

	$('.flower-select-num2').click(function(){
		val = parseInt($(this).html());
		val = val % 10 + 1;
		$(this).html(val);
		place = $(this).attr('name');
		$(this).css('left',empty_field2[place][1]+'px');
		if(val == 10)
			$(this).css('left',($(this).css('left').replace('px','')-12)+'px');
		if(place == 9) {
			$(this).css('left',(empty_field2[place][1]+8)+'px');
			if(val == 10)
				$(this).css('left',(empty_field2[place][1]-2)+'px');
		}
	});

	$('.sbt').click(function() {
		if($('.flower .fa').length != 0) {

		} else {
			$('.success-div').fadeIn(500);
	        $('.col-md-10').fadeOut(500);
	        setTimeout(function() {
	            $('.success-div').fadeOut(500);
	            $('.col-md-10').fadeIn(500);
	        }, 3000);
	    }
	})
});