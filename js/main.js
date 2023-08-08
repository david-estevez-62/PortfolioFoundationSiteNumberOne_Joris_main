// This variable is for keeping tracking of whether a section is still open, Each program section (which I refer to as sect in the codebase) has an entry in here, the related an entry in this array per program section is one less than the number of the program section since arrays are zero based, therefore sect1 relates to the zero index of the sectionsThatAreOpen array.
var sectionsThatAreOpen = [
  false,
  false,
  false,
  false,
  false,
  false
];

var programSectionLinkMap = [
  "http://about.me/erichr",
  "http://erichr.me/portfoliobaselinesitenum2_mtimv",
  "http://erichr.me/portfoliobaselinesitenum3_mtimv",
  "#!",
  "#!",
  "#!"
];

var isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));


var expandRetractProgramSection = function(sectNum, evt) {
  if(evt === "mouseover" || evt === "click") {
    sectionsThatAreOpen[sectNum - 1] = true;
    $(".table" + sectNum).css({top:0});
    $(".block" + sectNum).css({top:20});
    $(".sect" + sectNum + "visible_part").parent().find("div hr:nth-child(1)").css({top:21});
    $(".sect" + sectNum + "visible_part").css({top:0, height:78});
    if(isTouchDevice) {
      $(".sect" + sectNum + "visible_part").append("<span color='red'>Click me again to visit this program's webpage.</span>");
      $(".sect" + sectNum + "visible_part").detach("click");
      $(".sect" + sectNum + "visible_part").on("click", function() {
        $(".sect" + sectNum + "visible_part").detach("click");
        $(".sect" + sectNum + "visible_part").on("click", expandRetractProgramSection(sectNum, "click"));
        expandRetractProgramSection(sectNum, null);
        window.location.href = programSectionLinkMap[sectNum - 1];

      });
    }
  } else {
    sectionsThatAreOpen[sectNum - 1] = false;
    $(".table" + sectNum).css({top:16});
    $(".block" + sectNum).css({top:4});
    $(".sect" + sectNum + "visible_part").parent().find("div hr:nth-child(1)").css({top:37});
    $(".sect" + sectNum + "visible_part").css({top:16, height:44});
  }
}


$(function(){


if(!isTouchDevice) {
  

	$(".sect1_visible_part").on("mouseover", expandRetractProgramSection(1, "mouseover"));
	$(".sect1_visible_part").on("mouseout", expandRetractProgramSection(1, "mouseout"));
	$(".sect2_visible_part").on("mouseover", expandRetractProgramSection(2, "mouseover"));
	$(".sect2_visible_part").on("mouseout", expandRetractProgramSection(2, "mouseout"));
	$(".sect3_visible_part").on("mouseover", expandRetractProgramSection(3, "mouseover"));
	$(".sect3_visible_part").on("mouseout", expandRetractProgramSection(3, "mouseout"));
	$(".sect4_visible_part").on("mouseover", expandRetractProgramSection(4, "mouseover"));
	$(".sect4_visible_part").on("mouseout", expandRetractProgramSection(4, "mouseout"));
	$(".sect5_visible_part").on("mouseover", expandRetractProgramSection(5, "mouseover"));
	$(".sect5_visible_part").on("mouseout", expandRetractProgramSection(5, "mouseout"));
	$(".sect6_visible_part").on("mouseover", expandRetractProgramSection(6, "mouseover"));
	$(".sect6_visible_part").on("mouseout", expandRetractProgramSection(6, "mouseout"));




  $(".sect1_visible_part").on("click", function(){
    window.location.href = "http://about.me/erichr";
  })

  $(".sect2_visible_part").on("click", function(){
    window.location.href = "http://erichr.me/portfoliobaselinesitenum2_mtimv";
  })

  $(".sect3_visible_part").on("click", function(){
    window.location.href = "http://erichr.me/portfoliobaselinesitenum3_mtimv";
  })
  
  $(".sect4_visible_part").on("click", function(){
    window.location.href = "#!";
  })

  $(".sect5_visible_part").on("click", function(){
    window.location.href = "#!";
  })

  $(".sect6_visible_part").on("click", function(){
    window.location.href = "#!";
  })



} else {


  $(".sect1_visible_part").on("click", expandRetractProgramSection(1, "click"));
  $(".sect2_visible_part").on("click", expandRetractProgramSection(2, "click"));
  $(".sect3_visible_part").on("click", expandRetractProgramSection(3, "click"));
  $(".sect4_visible_part").on("click", expandRetractProgramSection(4, "click"));
  $(".sect5_visible_part").on("click", expandRetractProgramSection(5, "click"));
  $(".sect6_visible_part").on("click", expandRetractProgramSection(6, "click"));

}


  // If the user leaves the website through a link within the website or leaves the website from another method (in either case, the unload event on the browser window's document object will be done), from a program section (which I refer to as sect in the codebase) can still be in it's open state, so close any that may be open.
  $(document).on("unload", function() {
    if(sectionsThatAreOpen[0]) {
      expandRetractProgramSection(1, null);
    } else if(sectionsThatAreOpen[1]) {
      expandRetractProgramSection(2, null);
    } else if(sectionsThatAreOpen[2]) {
      expandRetractProgramSection(3, null);
    } else if(sectionsThatAreOpen[3]) {
      expandRetractProgramSection(4, null);
    } else if(sectionsThatAreOpen[4]) {
      expandRetractProgramSection(5, null);
    } else if(sectionsThatAreOpen[5]) {
      expandRetractProgramSection(6, null);
    }
  })



  // There is a chance that the browser where the website is being accessed from shows the program sections (which I refer to as sect in the codebase) as cut off, and I was fine with that fact because the program sections are fixed dimensionally as well as fixed positionally and the desired behavior that I wanted was to have the program sections fixed dimensionally as well as fixed positionally so that is what I went for and the desired behavior that I wanted was also to have the program sections like that no matter the situation, so the fact that the program sections were fixed dimensionally as well as fixed positionally inconjuction with a browser on a mobile device for example or inconjunction with a browser which isn't quite open enough in one of the dimensions, are the reasons why program sections could be cut off, and therefore there is the possibility that the user has their cursor over a program section the whole time until the the user's cursor exits the website, causing the program section to expand open, not to mention expand open, staying like that, after the user's cursor had already left the website, so I attached a mouseout event listener on the browser window's document object and when the mouseout event listener on that document object is ran it checks to see if there are any program sections in their open state, which there will only ever will be 1, at the most, it will reverse it to it's closed state.
  $(document).on("mouseout", function() {
    if(sectionsThatAreOpen[0]) {
      expandRetractProgramSection(1, null);
    } else if(sectionsThatAreOpen[1]) {
      expandRetractProgramSection(2, null);
    } else if(sectionsThatAreOpen[2]) {
      expandRetractProgramSection(3, null);
    } else if(sectionsThatAreOpen[3]) {
      expandRetractProgramSection(4, null);
    } else if(sectionsThatAreOpen[4]) {
      expandRetractProgramSection(5, null);
    } else if(sectionsThatAreOpen[5]) {
      expandRetractProgramSection(6, null);
    }
  })



});
