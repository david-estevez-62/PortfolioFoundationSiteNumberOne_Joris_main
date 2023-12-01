// This variable is for keeping tracking of whether a section is still open, Each program section (which I refer to as sect in the codebase) has an entry in here, the related an entry in this array corresponding to a program section is one less than the number of the program section since arrays are zero based, therefore sect1 relates to the zero index of the sectionsThatAreOpen array.
var sectionsThatAreOpen = [
  false,
  false,
  false,
  false,
  false,
  false
];

// This stores the link which corresponds to each program section (which I refer to as sect in the codebase). A program section's associated link will be one less than the number of the program section since arrays are zero based, therefore sect1 relates to the zero index of the sectionLinks array.
var sectionLinks = [
  "http://about.me/erichr",
  "http://erichr.me/portfolio_baseline_site___num_two___mtimv",
  "http://erichr.me/portfolio_baseline_site___num_three___mtimv",
  "#!",
  "#!",
  "#!"
];

var expandRetractProgramSection = function(sectNum, evt) {
  if(evt === "mouseover" || evt === "click") {
    // I used section, singular, because there will only ever be a maximum of one open at a time.
    var sectionThatIsOpened = sectionsThatAreOpen.indexOf(true);
    if(isTouchDevice && (sectionThatIsOpened >= 0)) {
      $(".sect" + (sectionThatIsOpened + 1) +"_visible_part").off();
      $(".sect" + (sectionThatIsOpened + 1) +"_visible_part").on("click", function() {expandRetractProgramSection(sectionThatIsOpened + 1, "click")});
      expandRetractProgramSection(sectionThatIsOpened + 1, null);
    }
    sectionsThatAreOpen[sectNum - 1] = true;
    $(".table" + sectNum).css({top:0});
    $(".block" + sectNum).css({top:20});
    $(".sect" + sectNum + "_visible_part").parent().find("div hr:nth-child(1)").css({top:21});
    $(".sect" + sectNum + "_visible_part").css({top:0, height:78});

    if(isTouchDevice) {
      $(".block" + sectNum).append("<span class='action_note'>Click me again to go to this program's webpage.</span>");
      $(".sect" + sectNum + "_visible_part").off();
      $(".sect" + sectNum + "_visible_part").on("click", function() {
        $(".sect" + sectNum +"_visible_part").off();
        $(".sect" + sectNum +"_visible_part").on("click", function() {expandRetractProgramSection(sectNum, "click")});
      //  $(".action_note").remove();
        expandRetractProgramSection(sectNum, null);
        goToLink(sectionLinks[sectNum - 1]);
      });
    }

  } else {
    
    if(isTouchDevice) {
     var elemSectionBlock = $(".block" + sectNum);
    $(elemSectionBlock.children()[elemSectionBlock.children().length - 1]).remove();
    }

    sectionsThatAreOpen[sectNum - 1] = false;
    $(".table" + sectNum).css({top:16});
    $(".block" + sectNum).css({top:4});
    $(".sect" + sectNum + "_visible_part").parent().find("div hr:nth-child(1)").css({top:37});
    $(".sect" + sectNum + "_visible_part").css({top:16, height:44});
  }
}


$(function(){


  if(!isTouchDevice) {
  

	  $(".sect1_visible_part").on("mouseover", function() {expandRetractProgramSection(1, "mouseover")});
	  $(".sect1_visible_part").on("mouseout", function() {expandRetractProgramSection(1, "mouseout")});
	  $(".sect2_visible_part").on("mouseover", function() {expandRetractProgramSection(2, "mouseover")});
	  $(".sect2_visible_part").on("mouseout", function() {expandRetractProgramSection(2, "mouseout")});
	  $(".sect3_visible_part").on("mouseover", function() {expandRetractProgramSection(3, "mouseover")});
	  $(".sect3_visible_part").on("mouseout", function() {expandRetractProgramSection(3, "mouseout")});
	  $(".sect4_visible_part").on("mouseover", function() {expandRetractProgramSection(4, "mouseover")});
	  $(".sect4_visible_part").on("mouseout", function() {expandRetractProgramSection(4, "mouseout")});
	  $(".sect5_visible_part").on("mouseover", function() {expandRetractProgramSection(5, "mouseover")});
	  $(".sect5_visible_part").on("mouseout", function() {expandRetractProgramSection(5, "mouseout")});
	  $(".sect6_visible_part").on("mouseover", function() {expandRetractProgramSection(6, "mouseover")});
	  $(".sect6_visible_part").on("mouseout", function() {expandRetractProgramSection(6, "mouseout")});




    $(".sect1_visible_part").on("click", function(){
      goToLink(sectionLinks[0]);
    })

    $(".sect2_visible_part").on("click", function(){
      goToLink(sectionLinks[1]);
    })

    $(".sect3_visible_part").on("click", function(){
      goToLink(sectionLinks[2]);
    })
  
    $(".sect4_visible_part").on("click", function(){
      goToLink(sectionLinks[3]);
    })

    $(".sect5_visible_part").on("click", function(){
      goToLink(sectionLinks[4]);
    })

    $(".sect6_visible_part").on("click", function(){
      goToLink(sectionLinks[5]);
    })



  } else {


    $(".sect1_visible_part").on("click", function() {expandRetractProgramSection(1, "click")});
    $(".sect2_visible_part").on("click", function() {expandRetractProgramSection(2, "click")});
    $(".sect3_visible_part").on("click", function() {expandRetractProgramSection(3, "click")});
    $(".sect4_visible_part").on("click", function() {expandRetractProgramSection(4, "click")});
    $(".sect5_visible_part").on("click", function() {expandRetractProgramSection(5, "click")});
    $(".sect6_visible_part").on("click", function() {expandRetractProgramSection(6, "click")});

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



  // THIS DOESN'T SEEM TO BE NECESSARY BECAUSE THE ONLY CASE THIS CAN HAPPEN IS WHEN YOU HAVE A CURSOR (THEREFORE IT LIKELY ISN'T A TOUCHSCREEN DEVICE, BECAUSE PEOPLE DON'T CONNECT TOO OFTEN A MOUSE TO THE TOUCHSCREEN DEVICES THEY MAY BE USING, BUT THIS ENTIRE POINT DOESN'T REALLY MATTER) AND AN INDIVIDUAL MOUSEOUT EVENT ABOVE GETS CALLED, I GUESS WHEN YOU HAVE A MOUSEOUT EVENT ON AN ELEMENT AND THAT ELEMENT GOES ALL OF THE WAY OFF THE SIDE OF THE BROWSER WINDOW, MOVING THE CURSOR ALL OF THE WAY ON THE ELEMENT UNTIL IT REACHES THE SIDE OF THE BROWSER WINDOW CALLS THE MOUSEOUT EVENT ON THE ACTUAL ELEMENT SO THOSE EVENTS HANDLE THAT SCENARIO, IN NEW BROWSERS. LEAVING THIS HERE, JUST IN CASE I NEED THIS INORDER FOR THIS TO BEHAVE PROPERLY ON OLDER BROWSERS. There is a chance that the browser where the website is being accessed from shows the program sections (which I refer to as sect in the codebase) as cut off, and I was fine with that fact because the program sections are fixed dimensionally as well as fixed positionally and the desired behavior that I wanted was to have the program sections fixed dimensionally as well as fixed positionally so that is what I went for and the desired behavior that I wanted was also to have the program sections like that no matter the situation, so the fact that the program sections were fixed dimensionally as well as fixed positionally inconjuction with a browser on a mobile device for example or inconjunction with a browser which isn't quite open enough in one of the dimensions, are the reasons why program sections could be cut off, and therefore there is the possibility that the user has their cursor over a program section the whole time until the the user's cursor exits the website, causing the program section to expand open, not to mention expand open, staying like that, after the user's cursor had already left the website, so I attached a mouseout event listener on the browser window's document object and when the mouseout event listener on that document object is ran it checks to see if there are any program sections in their open state, which there will only ever will be 1, at the most, it will reverse it to it's closed state.
  /*
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
  */



});
