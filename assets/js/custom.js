$(document).ready(function(){

	// Start Humber Main Menu Icon Js
	  $('.all_p_humber').click(function(){
	         $(this).toggleClass('open');
	     });
	  //==== End Humber Main Menu Icon Js


	$('.all_p_humber').click(function(){
	    $('.login ul').slideToggle();
	  });
	  $('.login ul li a').click(function(){
	         $('.all_p_humber').removeClass('open');
	     });


	  	AOS.init({
	        duration: 800,
	    });

});