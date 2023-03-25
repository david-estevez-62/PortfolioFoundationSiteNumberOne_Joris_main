$(function(){



	$(".sect1").on('mouseover', function(){
		$(".table1").css({top:0});
		$(".block1").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect1").on('mouseout', function(){
		$(".table1").css({top:20});
		$(".block1").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



	$(".sect2").on('mouseover', function(){
		$(".table2").css({top:0});
		$(".block2").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect2").on('mouseout', function(){
		$(".table2").css({top:20});
		$(".block2").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



	$(".sect3").on('mouseover', function(){
		$(".table3").css({top:0});
		$(".block3").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect3").on('mouseout', function(){
		$(".table3").css({top:20});
		$(".block3").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



	$(".sect4").on('mouseover', function(){
		$(".table4").css({top:0});
		$(".block4").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect4").on('mouseout', function(){
		$(".table4").css({top:20});
		$(".block4").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



	$(".sect5").on('mouseover', function(){
		$(".table5").css({top:0});
		$(".block5").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect5").on('mouseout', function(){
		$(".table5").css({top:20});
		$(".block5").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



	$(".sect6").on('mouseover', function(){
		$(".table6").css({top:0});
		$(".block6").css({top:20});
		$(this).find("div hr:nth-child(1)").css({top:21});
	})
	$(".sect6").on('mouseout', function(){
		$(".table6").css({top:20});
		$(".block6").css({top:0});
		$(this).find("div hr:nth-child(1)").css({top:41});
	})



});
