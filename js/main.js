$(function(){



	$(".sect1_visible_part").on('mouseover', function(){
		$(".table1").css({top:0});
		$(".block1").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect1_visible_part").on('mouseout', function(){
		$(".table1").css({top:16});
		$(".block1").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
	  $(this).css({top:16, height:44});
  })



	$(".sect2_visible_part").on('mouseover', function(){
		$(".table2").css({top:0});
		$(".block2").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect2_visible_part").on('mouseout', function(){
		$(".table2").css({top:16});
		$(".block2").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
    $(this).css({top:16, height:44});
	})



	$(".sect3_visible_part").on('mouseover', function(){
		$(".table3").css({top:0});
		$(".block3").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect3_visible_part").on('mouseout', function(){
		$(".table3").css({top:16});
		$(".block3").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
    $(this).css({top:16, height:44});
	})



	$(".sect4_visible_part").on('mouseover', function(){
		$(".table4").css({top:0});
		$(".block4").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect4_visible_part").on('mouseout', function(){
		$(".table4").css({top:16});
		$(".block4").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
    $(this).css({top:16, height:44});
	})



	$(".sect5_visible_part").on('mouseover', function(){
		$(".table5").css({top:0});
		$(".block5").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect5_visible_part").on('mouseout', function(){
		$(".table5").css({top:16});
		$(".block5").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
    $(this).css({top:16, height:44});
	})



	$(".sect6_visible_part").on('mouseover', function(){
		$(".table6").css({top:0});
		$(".block6").css({top:20});
		$(this).parent().find("div hr:nth-child(1)").css({top:21});
    $(this).css({top:0, height:78});
	})
	$(".sect6_visible_part").on('mouseout', function(){
		$(".table6").css({top:16});
		$(".block6").css({top:4});
		$(this).parent().find("div hr:nth-child(1)").css({top:37});
    $(this).css({top:16, height:44});
	})






$(".sect1_visible_part").on('click', function(){
  window.location.href = "http://about.me/erichr";
})

$(".sect2_visible_part").on('click', function(){
  window.location.href = "http://erichr.me/portfoliobaselinesitenum2_mtimv";
})

$(".sect3_visible_part").on('click', function(){
  window.location.href = "http://erichr.me/portfoliobaselinesitenum3_mtimv";
})

$(".sect4_visible_part").on('click', function(){
  window.location.href = "#!";
})

$(".sect5_visible_part").on('click', function(){
  window.location.href = "#!";
})

$(".sect6_visible_part").on('click', function(){
  window.location.href = "#!";
})



});
