//서치창
$(function(){
    //popup을 숨긴다.
    $('.search-input-box').hide();
    //popup_open a를 클릭하면 popup_window이 열린다.
    $('.search_desktop a').click(function(){
        //popup이 열린다
        $('.search-input-box').fadeIn(200);
    });
    //close button를 누르면
    $('.gnb_desktop').click(function(){
       $(this).addClass()
        //popup_window가 사라진다
        $('.search-input-box').fadeOut(300);
    });
});


//서브메뉴_아코디언
$(function(){
    //submenu
    $('.submenu_desktop').hide();
    $('.gnb li').mouseenter(function(){
        $(this).children('.submenu_desktop').stop().slideDown();
    });
    $('.gnb li').mouseleave(function(){ 
        $(this).children('.submenu_desktop').stop().slideUp();
    });
});

//모바일_메뉴
$(document).ready(function(){		
    $("#menu").mmenu({
       "slidingSubmenus": false,
       "navbar": { "title":"FRUANI" },
       "extensions": [
          "pagedim-black",
          "position-left",
          "theme-dark"
       ]
    });
});

//브랜드 
$(function(){
	
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		  panel.style.maxHeight = null;
		} else {
		  panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	  });
	}

});

