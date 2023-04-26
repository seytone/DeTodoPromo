function pulsar(e) { // Captar pulsaciones de teclas.
	var evento = e || window.event;
	var tecla = evento.keyCode;
	if(tecla==37) {
		changeScreen(dir='left');
		return false;
	}
	if(tecla==39) {
		changeScreen(dir='right');
		return false;
	}
	alert('pulsa');
}

function offsetElement(obj,side) { // Devuelve la posición exacta de un objeto.
	switch(side) {
		case 'top':
			posicion = obj.position().top;
			break;
		case 'left':
			posicion = obj.position().left;
			break;
		case 'right':
			posicion = obj.position().right;
			break;
		case 'bottom':
			posicion = obj.position().bottom;
			break;
	}
	return posicion;
}

function windowRezise() { // Se activa cuando cambiamos el tamaño del navedador.
    W = $(window).width();
    H = $(window).height();
    num = $('#currentScreen').val();

    $('.body, .container').width(W).height(H);
    $('.wave').css({'bottom':'0px'});
	$('.stage').css({'top':parseInt((H/2)-($('.stage').height()/2), 10),'left':parseInt((W/2)-($('.stage').width()/2), 10)});
	$('.central ul').css({'top':parseInt((H/2)-($('.central ul').height()/2), 10)});
	$('.screen15 .central').css({'top':parseInt((H/2)-($('.screen15 .central').height()/2), 10)});
	$('.image').css({'top':parseInt((H/2)-(($('.image').height()/2)-100), 10),'left':parseInt((W/2)-($('.image').width()/2), 10)});
	$('.screen'+num).css({'top':parseInt((H/2)-($('.screen'+num).height()/2),10),'left':parseInt((W/2)-($('.screen'+num).width()/2),10)});
	$('.header').css({'left':parseInt((W/2)-($('.header').width()/2),10)});
    $('.arrow').css({'top':parseInt((H/2)-($('.arrow').height()/2),10)});
}

var usados = new Array();

function randNum(min,max) { // Número aleatorio entre 2 rangos.
	var aleatorio = Math.floor(Math.random()*(max-(min-1))) + min;
	return aleatorio;
}
function randNoRepeat(min,max) { // Número aleatorio NO REPETIDO entre 2 rangos.
	while (repe !== false) {
		var aleatorio = Math.floor(Math.random()*(max-min+1))+min;
		var repe = repetido(aleatorio);
	}
	usados.push(aleatorio);
	return aleatorio;
}
function repetido(num) {
	var repe = false;
	for (i=0; i<usados.length; i++) {
		if (num == usados[i]) {
			repe = true;
		}
	}
	return repe;
}

function toggleIMG(pantalla,objeto,eleme,clase)  {
	switch(clase) {
		case 1:
			color = 'blue';
			break;
		case 2:
			color = 'white';
			break;
		case 3:
			color = 'yellow';
			break;
		case 4:
			color = 'green';
			break;
		case 5:
			color = 'orange';
			break;
		case 6:
			color = 'purple';
			break;
		case 7:
			color = 'red';
			break;
	}
	$('.'+objeto+':nth-child('+eleme+') img').attr('src','img/'+pantalla+'/'+objeto+'_'+color+'.png');
}

function arrows() { // Muestra las flechas de control.
    $('.arrow').fadeIn('slow');
	setTimeout(function() { $('.arrow').fadeOut('slow'); }, 3000);
}

function changeScreen(dir,pantalla) { // Cambio entre pantallas.
	newCurrentScreen = 0;
    currentScreen = parseInt($('#currentScreen').val(),10);
	prevScreen = parseInt(currentScreen-1,10);
	nextScreen = parseInt(currentScreen+1,10);
	minLimit = '1';
	maxLimit = '5';

	$('.screen'+currentScreen).fadeOut();
	$('.arrow').fadeIn();

	if(dir!='none') {
		if(dir=='left') {
			$('.screen'+prevScreen).fadeIn();
			newCurrentScreen = prevScreen;
		}
		if(dir=='right') {
			$('.screen'+nextScreen).fadeIn();
			newCurrentScreen = nextScreen;
		}
	} else {
		$('.screen'+pantalla).fadeIn();
		newCurrentScreen = pantalla;
	}
	
	switch(newCurrentScreen) {
		case 1:
			screen1();
			break;
		case 2:
			$('.elemento_s3').hide();
			screen2();
			break;
		case 3:
			$('.elemento_s3').show();
			screen3();
			break;
		case 4:
			$('.elemento_s3').hide();
			screen4();
			break;
		case 5:
			screen5();
			break;
		case 6:
			screen6();
			break;
		case 7:
			screen7();
			break;
		case 8:
			screen8();
			break;
		case 9:
			$('.pasos').hide();
			screen9();
			break;
		case 10:
			$('.pasos').hide();
			screen10();
			break;
		case 11:
			$('.pasos').hide();
			screen11();
			break;
		case 12:
			$('.pasos').hide();
			screen12();
			break;
		case 13:
			$('.pasos').hide();
			screen13();
			break;
		case 14:
			$('.pasos').hide();
			screen14();
			break;
		case 15:
			$('.pasos').hide();
			screen15();
			break;
		case 16:
			screen16();
			break;
		case 17:
			screen17();
			break;
		case 18:
			screen18();
			break;
	}
	
	$('#currentScreen').val(newCurrentScreen);
	windowRezise();
}

function screen1() // (--1--)
{
	$('.toLeft').hide();

	function wave1() {
		if (newCurrentScreen==1) {
			$('.w1').transition({'bottom':'0px','left':'-6%'}, 500, 'linear');
			$('.w1').transition({'bottom':'-15px','left':'-8%'}, 500, 'linear');
			$('.w1').transition({'bottom':'0px','left':'-6%'}, 500, 'linear');
			$('.w1').transition({'bottom':'-15px','left':'-4%'}, 500, 'linear');
			$('.w1').transition({'bottom':'0px','left':'-2%'}, 500, 'linear');
			$('.w1').transition({'bottom':'-15px','left':'-4%'}, 500, 'linear', wave1);
		} else { return; }
    }
    function wave2() {
		if (newCurrentScreen==1) {
			$('.w2').transition({'bottom':'-15px','left':'-2%'}, 500, 'linear');
			$('.w2').transition({'bottom':'0px','left':'-1%'}, 500, 'linear');
			$('.w2').transition({'bottom':'-15px','left':'-2%'}, 500, 'linear');
			$('.w2').transition({'bottom':'0px','left':'-3%'}, 500, 'linear');
			$('.w2').transition({'bottom':'-15px','left':'-4%'}, 500, 'linear');
			$('.w2').transition({'bottom':'0px','left':'-3%'}, 500, 'linear', wave2);
		} else { return; }
    }
	function moveFloat() {
		if (newCurrentScreen==1) {
			$('.lifeguard').transition({'bottom':'30px','right':'50px','rotate':'1deg'}, 700, 'linear');
			$('.lifeguard').transition({'bottom':'20px','right':'60px','rotate':'-1deg'}, 700, 'linear');
			$('.lifeguard').transition({'bottom':'30px','right':'50px','rotate':'1deg'}, 700, 'linear');
			$('.lifeguard').transition({'bottom':'20px','right':'40px','rotate':'-1deg'}, 700, 'linear', moveFloat);
		} else { return; }
    }
    function moveHand() {
		if (newCurrentScreen==1) {
			$('.hand').transition({'bottom':'0px','left':'3%','rotate':'2deg'}, 700, 'linear');
			$('.hand').transition({'bottom':'-30px','left':'1%','rotate':'-2deg'}, 700, 'linear');
			$('.hand').transition({'bottom':'0px','left':'3%','rotate':'2deg'}, 700, 'linear');
			$('.hand').transition({'bottom':'-30px','left':'5%','rotate':'-2deg'}, 700, 'linear', moveHand);
		} else { return; }
    }

	$('.toLeft').hide();
	
	$('.body').css({'background-color': '#286682'});
	$('.container').css({'background':'url(img/screen1/background.png) 0 0 repeat-x'});
	$('.screen1').fadeIn();

	$('.central ul li').each(function(index) {
		var obj = $(this);
		var side = 'left';
		var left = offsetElement(obj,side);
		obj.attr('data-left', left);
	});

	$('.w1').css({'bottom':'-250px'});
	$('.w2').css({'bottom':'-180px'});
	$('.screen1 .central').height(H);
	$('.screen1 .central ul').css({'top':parseInt((H/2)-($('.screen1 .central ul').height()/2), 10)});
	$('.screen1 .central ul li').css({'left':'1000px','opacity':'0'});
	$('.logox').css({'opacity':'0'});
	$('.screen1 p').css({'left':'-300%','opacity':'0'});
	$('.lifeguard').css({'bottom':'1000px','opacity':'0'});
	$('.hand').css({'bottom':'-600px','opacity':'0'});

	setTimeout(function() {
		$('.wave').animate({bottom:0}, 1500, 'linear');
	}, 50);
	setTimeout(function() {
		wave1();
		wave2();
	}, 1000);
	setTimeout(function() {
		$('.logox').animate({opacity:1}, 1500, 'linear');
		$('.logo').fadeOut('slow');
	}, 1500);
	setTimeout(function() {
		$('.lifeguard').animate({bottom:20,opacity:1}, 2000, 'easeOutElastic', function() {
			moveFloat();
		});
	}, 2500);
	setTimeout(function() {
		$('.hand').animate({bottom:-60,opacity:1}, 2000, 'easeOutBack', function() {
			moveHand();
		});
	}, 3500);
	setTimeout(function() {
		$('.screen1 p').animate({left:0,opacity:1}, 1500, 'easeOutExpo');
	}, 5000);
	setTimeout(function() {
		$('.screen1 .central ul li').each(function(index) {
			var obj = $(this);
			var trueLeft = obj.data('left');
			time = parseInt((index+'000')/1,10);
			obj.delay(time).animate({left:trueLeft,opacity:1}, 'slow', 'easeOutExpo');
		});
	}, 7000);
}

function screen2() // (--2--)
{
	function cartel2() {
		if (newCurrentScreen==2) {
			$('.arrowDown2').animate({top:15}, 500, 'easeInOutSine');
			$('.arrowDown2').animate({top:0}, 500, 'easeInOutSine', cartel2);
		} else { return; }
    }

    $('.fondoWhite').remove();
	$('.body').css({'background-color': '#0a4ca6'});
	$('.container').css({'background':'none'});

	$('.ptxt2').css({'top':'1500px','opacity':'0'});
	$('.ptxt2 b:first-child, .ptxt2 b:last-child').css({'top':'1500px','opacity':'0'});
	$('.left2').css({'border-right':'7px solid transparent'});
	$('.elemento_s2').css({'left':'1500px','opacity':'0'});
	$('.arrowDown2').css({'top':'-1500px','opacity':'0'});
	$('.float2').transition({'opacity':'0','rotate':'-720deg','scale':'0'}, 0);

	setTimeout(function() {
		$('.float2').transition({'opacity':'1','rotate':'0deg','scale':'1'}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.ptxt2').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.ptxt2 b:first-child, .ptxt2 b:last-child').animate({'top':'0','opacity':'1'}, 1000, 'easeOutBack');
	}, 3000);
	setTimeout(function() {
		$('.left2').css({'border-right':'7px solid #fff'});
		$('.arrowDown2').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 4000);
	setTimeout(function() {
		cartel2();
		$('.elemento_s2').css({'opacity':'1'});
		$('.elemento_s2').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 5000);
}

function screen3() // (--3--)
{
	function cartel3() {
		if (newCurrentScreen==3) {
			$('.arrowDown3').animate({top:15}, 500, 'easeInOutSine');
			$('.arrowDown3').animate({top:0}, 500, 'easeInOutSine', cartel3);
		} else { return; }
    }

	$('.body').css({'background-color': '#0a4ca6'});
	$('.container').css({'background':'none'});
	$('.container').append('<div class="fondoWhite"></div>');

	$('.ptxt3').css({'top':'1500px','opacity':'0'});
	$('.ptxt3 b:first-child, .ptxt3 b:last-child').css({'top':'1500px','opacity':'0'});
	$('.left3').css({'border-right':'7px solid transparent'});
	$('.elemento_s3').css({'left':'1800px','opacity':'0'});
	$('.arrowDown3').css({'top':'-1500px','opacity':'0'});
	$('.float3').transition({'opacity':'0','rotate':'720deg','scale':'0'}, 0);

	setTimeout(function() {
		$('.float3').transition({'opacity':'1','rotate':'0deg','scale':'1'}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.ptxt3').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.ptxt3 b:first-child, .ptxt3 b:last-child').animate({'top':'0','opacity':'1'}, 1000, 'easeOutBack');
	}, 3000);
	setTimeout(function() {
		$('.left3').css({'border-right':'7px solid #fff'});
		$('.arrowDown3').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 4000);
	setTimeout(function() {
		cartel3();
		$('.elemento_s3').css({'opacity':'1'});
		$('.elemento_s3').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 5000);
}

function screen4() // (--4--)
{
	function cartel4() {
		if (newCurrentScreen==4) {
			$('.arrowDown4').animate({top:15}, 500, 'easeInOutSine');
			$('.arrowDown4').animate({top:0}, 500, 'easeInOutSine', cartel4);
		} else { return; }
    }

    $('.fondoWhite').remove();
	$('.body').css({'background-color': '#0a4ca6'});
	$('.container').css({'background':'none'});

	$('.ptxt4').css({'top':'1500px','opacity':'0'});
	$('.ptxt4 b:first-child, .ptxt4 b:last-child').css({'top':'1500px','opacity':'0'});
	$('.left4').css({'border-right':'7px solid transparent'});
	$('.elemento_s4').css({'left':'-1500px','opacity':'0'});
	$('.arrowDown4').css({'top':'-1500px','opacity':'0'});
	$('.float4').transition({'opacity':'0','rotate':'-720deg','scale':'0'}, 0);

	setTimeout(function() {
		$('.float4').transition({'opacity':'1','rotate':'0deg','scale':'1'}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.ptxt4').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.ptxt4 b:first-child, .ptxt4 b:last-child').animate({'top':'0','opacity':'1'}, 1000, 'easeOutBack');
	}, 3000);
	setTimeout(function() {
		$('.left4').css({'border-right':'7px solid #fff'});
		$('.arrowDown4').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 4000);
	setTimeout(function() {
		cartel4();
		$('.elemento_s4').css({'opacity':'1'});
		$('.elemento_s4').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 5000);
}

function screen5() // (--5--)
{
	function nop() {
		if (newCurrentScreen==5) {
			$('.hands').transition({scale:1.2}, 700, 'ease');
			$('.hands').transition({scale:1}, 700, 'ease', nop);
		} else { return; }
    }

	$('.body').css({'background-color': '#57a51b'});
	$('.container').css({'background':'none'});
	$('.mascara, .mensaje').remove();

	$('.hands').css({'opacity':'0'});
	$('.s5_p1').css({'left':'-1500px'});
	$('.s5_p2').css({'top':'1500px','border-color':'transparent'});
	$('.s5_p3').css({'left':'1500px'});
	$('.s5_p4').css({'top':'-1500px'});
	$('.s5_logoCenter').transition({'opacity':'0','rotate-x':'-2160deg',scale:0}, 0);

	setTimeout(function() {
		$('.s5_logoCenter').transition({'opacity':'1','rotate-x':'0deg',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.hands').delay(2500).animate({'opacity':'1'}, 1000, 'linear');
		$('.s5_p1').delay(1500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s5_p2').delay(3000).animate({top:0}, 1000, 'easeOutExpo');
		$('.s5_p3').delay(4500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s5_p4').delay(6000).animate({top:0}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		nop();
		$('.s5_p2').css({'border-color':'#fff'});
	}, 8000);
}

function screen6() // (--6--)
{
	$('.body').css({'background-color': '#0a4ca6'});

	$('.text .tp1').css({'opacity':'0','left':'-1000px'});
	$('.text .tp2').css({'opacity':'0','left':'1000px'});
	$('.container').css({'background':'url(img/screen6/productos.jpg) center repeat'});
	$('.container').append('<div class="mascara"></div><div class="mensaje"></div>');

	setTimeout(function() {
		$('.mensaje').animate({'opacity':'1'}, 1000, 'linear');
	}, 2000);
	setTimeout(function() {
		$('.mascara').animate({'opacity':'1'}, 1000, 'linear');
	}, 4000);
	setTimeout(function() {
		$('.text p').animate({'left':'0','opacity':'1'}, 2000, 'easeOutExpo');
	}, 6000);
}

function screen7() // (--7--)
{
	function sip() {
		if (newCurrentScreen==7) {
			$('.heart').transition({scale:1.2}, 700, 'ease');
			$('.heart').transition({scale:1}, 700, 'ease', sip);
		} else { return; }
    }

	$('.body').css({'background-color': '#57a51b'});
	$('.container').css({'background':'none'});
	$('.mascara, .mensaje').remove();

	$('.people').css({'opacity':'0'});
	$('.s7_p1').css({'left':'-1500px'});
	$('.s7_p2').css({'top':'1500px','border-color':'transparent'});
	$('.s7_p3').css({'left':'1500px'});
	$('.s7_p4').css({'top':'-1500px'});
	$('.s7_logoCenter').transition({'opacity':'0','rotate-x':'-2160deg',scale:0}, 0);

	setTimeout(function() {
		$('.s7_logoCenter').transition({'opacity':'1','rotate-x':'0deg',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.people').delay(2500).animate({'opacity':'1'}, 1000, 'linear');
		$('.s7_p1').delay(1500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s7_p2').delay(3000).animate({top:0}, 1000, 'easeOutExpo');
		$('.s7_p3').delay(4500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s7_p4').delay(6000).animate({top:0}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		sip();
		$('.s7_p2').css({'border-color':'#fff'});
	}, 8000);
}

function screen8() // (--8--)
{
	$('.body').css({'background-color': '#fff'});

	var rUL = $('.screen8 .head ul').css('right');
	var rIMG = $('.screen8 .head ul img').css('right');

	$('.pro1, .pro2').hide();
	$('.pro2').transition({'rotate-x':'-90deg'}, 2000, 'linear');
	$('.head ul').css({'right':'-1000px'});
	$('.head ul li:not(.primero)').hide().css({'left':'1000px'});
	$('.head ul .primero').show().css({'opacity':'0'});
	$('.s8_logoCenter').transition({'opacity':'0','rotate-y':'-2160deg','right':'1500px'}, 0);

	setTimeout(function() {
		$('.pro1').fadeIn('slow');
	}, 500);
	setTimeout(function() {
		$('.s8_logoCenter').transition({'opacity':'1','rotate-y':'0deg','right':rIMG}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.head ul').animate({'right':rUL}, 1200, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.head ul .primero').animate({'opacity':'1'}, 1000, 'linear');
	}, 2500);
	setTimeout(function() {
		$('.pro1').transition({'rotate-x':'90deg'}, 2000, 'linear');
	}, 15000);
	setTimeout(function() {
		$('.pro1').fadeOut('fast');
		$('.pro2').delay(400).fadeIn('slow');
		$('.pro2').delay(200).transition({'rotate-x':'0deg'}, 2000, 'linear');
	}, 15500);
	setTimeout(function() {
		$('.head ul .primero').fadeOut();
	}, 16000);
	setTimeout(function() {
		$('.head ul li:not(.primero)').show();
		$('.head ul li:not(.primero)').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 16500);
}

function screen9() // (--9--)
{
	$('.body').css({'background-color': '#57a51b'});

	$('.like').css({'opacity':'0'});
	$('.gente').css({'top':'-1500px','opacity':'0'});
	$('.s9_p1').css({'left':'-1500px'});
	$('.s9_p2').css({'top':'1500px','border-color':'transparent'});
	$('.s9_p3').css({'left':'1500px'});
	$('.s9_logoCenter').transition({'opacity':'0','rotate-x':'-2160deg',scale:0}, 0);

	setTimeout(function() {
		$('.s9_logoCenter').transition({'opacity':'1','rotate-x':'0deg',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.like').delay(2500).animate({'opacity':'1'}, 1000, 'linear');
		$('.s9_p1').delay(1500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s9_p2').delay(3000).animate({top:0}, 1000, 'easeOutExpo');
		$('.s9_p3').delay(4500).animate({left:0}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.s9_p2').css({'border-color':'#fff'});
	}, 8000);
	setTimeout(function() {
		$('.gente').animate({'top':'0','opacity':'1'}, 1000, 'easeOutExpo');
	}, 8500);
}

function screen10() // (--10--)
{
	$('.body').css({'background-color': '#f08826'});

	var sW = $('.cabecera .s13_p').width();

	$('.screen10 .paso2').hide();
	$('.screen10 .paso1').show().css({'opacity':'0'});
	$('.screen10 .cabecera .logoMedio').css({'top':'1500px'});
	$('.screen10 .cabecera .s13_p').css({'opacity':'0','width':'0px'});
	$('.screen10 .cabecera .s13_p p').css({'opacity':'0'});
	$('.screen10 .pasos img').css({'opacity':'0','left':'1500px'});
	$('.ss10').css({'top':parseInt((H/2)-($('.ss10').height()/2), 10),'left':parseInt((W/2)-($('.ss10').width()/2), 10)});

	setTimeout(function() {
		$('.screen10 .cabecera .logoMedio').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.screen10 .cabecera .s13_p').animate({'opacity':'1','width':sW}, 1000, 'linear');
	}, 3000);
	setTimeout(function() {
		$('.screen10 .cabecera .s13_p p').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen10 .paso1').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen10 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({'left':'0','opacity':'1'}, 1500, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.ss10').css({'top':parseInt((H/2)-($('.ss10').height()/2), 10),'left':parseInt((W/2)-($('.ss10').width()/2), 10)});
	}, 4200);
	setTimeout(function() {
		$('.screen10 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:-1500}, 1500, 'easeOutExpo');
		});
	}, 9000);
	setTimeout(function() {
		$('.screen10 .paso1').hide().animate({'opacity':'0'}, 1000, 'linear');
		$('.screen10 .paso2').show().animate({'opacity':'1'}, 1000, 'linear', function() {
			$('.ss10').css({'top':parseInt((H/2)-($('.ss10').height()/2), 10),'left':parseInt((W/2)-($('.ss10').width()/2), 10)});
		});
		$('.screen10 .paso2 img').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen10 .paso2 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 10000);
	setTimeout(function() {
		$('.ss10').css({'top':parseInt((H/2)-($('.ss10').height()/2), 10),'left':parseInt((W/2)-($('.ss10').width()/2), 10)});
	}, 11000);
}

function screen11() // (--11--)
{
	$('.body').css({'background-color': '#f08826'});

	var sW = $('.cabecera .s13_p').width();
	
	$('.screen11 .paso2').hide();
	$('.screen11 .paso1').show().css({'opacity':'0'});
	$('.screen11 .cabecera .logoMedio').css({'top':'1500px'});
	$('.screen11 .cabecera .s13_p').css({'opacity':'0','width':'0px'});
	$('.screen11 .cabecera .s13_p p').css({'opacity':'0'});
	$('.screen11 .pasos img').css({'opacity':'0','left':'-1500px'});

	setTimeout(function() {
		$('.screen11 .cabecera .logoMedio').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.screen11 .cabecera .s13_p').animate({'opacity':'1','width':sW}, 1000, 'linear');
	}, 3000);
	setTimeout(function() {
		$('.screen11 .cabecera .s13_p p').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen11 .paso1').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen11 .paso1 img').each(function(index) {
			$('.ss11').css({'top':parseInt((H/2)-($('.ss11').height()/2), 10),'left':parseInt((W/2)-($('.ss11').width()/2), 10)});
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({'left':'0','opacity':'1'}, 1500, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.screen11 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:1500}, 1500, 'easeOutExpo');
		});
	}, 9000);
	setTimeout(function() {
		$('.screen11 .paso1').hide().animate({'opacity':'0'}, 1000, 'linear');
		$('.screen11 .paso2').show().animate({'opacity':'1'}, 1000, 'linear', function() {
			$('.ss11').css({'top':parseInt((H/2)-($('.ss11').height()/2), 10),'left':parseInt((W/2)-($('.ss11').width()/2), 10)});
		});
		$('.screen11 .paso2 img').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen11 .paso2 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 10000);
}

function screen12() // (--12--)
{
	$('.body').css({'background-color': '#f08826'});

	var sW = $('.cabecera .s13_p').width();
	
	$('.screen12 .paso2').hide();
	$('.screen12 .paso1').show().css({'opacity':'0'});
	$('.screen12 .cabecera .logoMedio').css({'top':'1500px'});
	$('.screen12 .cabecera .s13_p').css({'opacity':'0','width':'0px'});
	$('.screen12 .cabecera .s13_p p').css({'opacity':'0'});
	$('.screen12 .pasos img').css({'opacity':'0','left':'1500px'});

	setTimeout(function() {
		$('.screen12 .cabecera .logoMedio').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.screen12 .cabecera .s13_p').animate({'opacity':'1','width':sW}, 1000, 'linear');
	}, 3000);
	setTimeout(function() {
		$('.ss12').css({'top':parseInt((H/2)-($('.ss12').height()/2), 10),'left':parseInt((W/2)-($('.ss12').width()/2), 10)});
		$('.screen12 .cabecera .s13_p p').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen12 .paso1').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen12 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({'left':'0','opacity':'1'}, 1500, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.ss12').css({'top':parseInt((H/2)-($('.ss12').height()/2), 10),'left':parseInt((W/2)-($('.ss12').width()/2), 10)});
	}, 4200);
	setTimeout(function() {
		$('.screen12 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:-1500}, 1500, 'easeOutExpo');
		});
	}, 9000);
	setTimeout(function() {
		$('.screen12 .paso1').hide().animate({'opacity':'0'}, 1000, 'linear');
		$('.screen12 .paso2').show().animate({'opacity':'1'}, 1000, 'linear', function() {
			$('.ss12').css({'top':parseInt((H/2)-($('.ss12').height()/2), 10),'left':parseInt((W/2)-($('.ss12').width()/2), 10)});
		});
		$('.screen12 .paso2 img').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen12 .paso2 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 10000);
}

function screen13() // (--13--)
{
	$('.body').css({'background-color': '#f08826'});

	var sW = $('.cabecera .s13_p').width();
	
	$('.screen13 .paso2').hide();
	$('.screen13 .paso1').show().css({'opacity':'0'});
	$('.screen13 .cabecera .logoMedio').css({'top':'1500px'});
	$('.screen13 .cabecera .s13_p').css({'opacity':'0','width':'0px'});
	$('.screen13 .cabecera .s13_p p').css({'opacity':'0'});
	$('.screen13 .pasos img').css({'opacity':'0','left':'-1500px'});

	setTimeout(function() {
		$('.screen13 .cabecera .logoMedio').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.screen13 .cabecera .s13_p').animate({'opacity':'1','width':sW}, 1000, 'linear');
	}, 3000);
	setTimeout(function() {
		$('.ss13').css({'top':parseInt((H/2)-($('.ss13').height()/2), 10),'left':parseInt((W/2)-($('.ss13').width()/2), 10)});
		$('.screen13 .cabecera .s13_p p').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen13 .paso1').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen13 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({'left':'0','opacity':'1'}, 1500, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.ss13').css({'top':parseInt((H/2)-($('.ss13').height()/2), 10),'left':parseInt((W/2)-($('.ss13').width()/2), 10)});
	}, 4200);
	setTimeout(function() {
		$('.screen13 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:1500}, 1500, 'easeOutExpo');
		});
	}, 9000);
	setTimeout(function() {
		$('.screen13 .paso1').hide().animate({'opacity':'0'}, 1000, 'linear');
		$('.screen13 .paso2').show().animate({'opacity':'1'}, 1000, 'linear', function() {
			$('.ss13').css({'top':parseInt((H/2)-($('.ss13').height()/2), 10),'left':parseInt((W/2)-($('.ss13').width()/2), 10)});
		});
		$('.screen13 .paso2 img').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen13 .paso2 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 10000);
}

function screen14() // (--14--)
{
	$('.body').css({'background-color': '#f08826'});
	$('.container').css({'background':'none'});

	var sW = $('.cabecera .s13_p').width();
	
	$('.screen14 .paso2').hide();
	$('.screen14 .paso1').show().css({'opacity':'0'});
	$('.screen14 .cabecera .logoMedio').css({'top':'1500px'});
	$('.screen14 .cabecera .s13_p').css({'opacity':'0','width':'0px'});
	$('.screen14 .cabecera .s13_p p').css({'opacity':'0'});
	$('.screen14 .pasos img:not(".full")').css({'opacity':'0','left':'1500px'});
	// $('.screen14 .pasos img.full').css({'opacity':'0','bottom':'-1500px','width':'100%'});
	$('.screen14 .pasos .fullDIV').css({'opacity':'0','bottom':'-1500px'});

	setTimeout(function() {
		$('.screen14 .cabecera .logoMedio').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.screen14 .cabecera .s13_p').animate({'opacity':'1','width':sW}, 1000, 'linear');
	}, 3000);
	setTimeout(function() {
		$('.ss14').css({'top':parseInt((H/2)-($('.ss14').height()/2), 10),'left':parseInt((W/2)-($('.ss14').width()/2), 10)});
		$('.screen14 .cabecera .s13_p p').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen14 .paso1').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen14 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({'left':'0','opacity':'1'}, 1500, 'easeOutExpo');
		});
	}, 4000);
	setTimeout(function() {
		$('.ss14').css({'top':parseInt((H/2)-($('.ss14').height()/2), 10),'left':parseInt((W/2)-($('.ss14').width()/2), 10)});
	}, 4300);
	setTimeout(function() {
		$('.screen14 .paso1 img').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:-1500}, 1500, 'easeOutExpo');
		});
	}, 9000);
	setTimeout(function() {
		$('.screen14 .paso1').hide().animate({'opacity':'0'}, 1000, 'linear');
		$('.screen14 .paso2').show().animate({'opacity':'1'}, 1000, 'linear', function() {
			$('.ss14').css({'top':parseInt((H/2)-($('.ss14').height()/2), 10),'left':parseInt((W/2)-($('.ss14').width()/2), 10)});
		});
		$('.screen14 .paso2 img').animate({'opacity':'1'}, 1000, 'linear');
		$('.screen14 .paso2 img:not(".full")').each(function(index) {
			var obj = $(this);
			time = parseInt((index+'000')/3,10);
			obj.delay(time).animate({left:0}, 1500, 'easeOutExpo');
		});
	}, 10000);
	setTimeout(function() {
		$('.screen14 .pasos .fullDIV').animate({'opacity':'1','bottom':'0'}, 1500, 'easeOutExpo');
		// $('.screen14 .paso2 img.full').animate({'opacity':'1','bottom':'0'}, 1500, 'easeOutExpo');
	}, 12000);
}

function screen15() // (--15--)
{
	function moves1() {
		if (newCurrentScreen==15) {
			$('.movi1 img').animate({top:'-70px'}, 500, 'easeInOutSine');
			$('.movi1 img').animate({top:'-80px'}, 500, 'easeInOutSine', moves1);
		} else { return; }
    }
    function moves2() {
		if (newCurrentScreen==15) {
			$('.movi2 img').animate({top:'-90px'}, 500, 'easeInOutSine');
			$('.movi2 img').animate({top:'-100px'}, 500, 'easeInOutSine', moves2);
		} else { return; }
    }

	$('.body').css({'background-color': '#0a4ca6'});
	$('.container').css({'background':'url(img/screen10/back.jpg) center no-repeat','background-size':'cover'});

	$('.gentes').css({'opacity':'0','bottom':'-250px'});
	$('.movi1 img, .movi2 img').css({'opacity':'0','top':'1500px'});
	$('.s10_p1').css({'left':'-1500px'});
	$('.s10_p1 b').css({'opacity':'0'});
	$('.s10_p2').css({'top':'1500px','border-color':'transparent'});
	$('.s10_p3').css({'left':'1500px'});
	$('.s10_p4').css({'top':'-1500px'});
	$('.s10_logoCenter').transition({'opacity':'0','rotate-y':'2160deg','top':'1500px',scale:0}, 0);

	setTimeout(function() {
		$('.s10_logoCenter').transition({'opacity':'1','rotate-y':'0deg','top':'0',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.g2').animate({'opacity':'1','bottom':'0'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.g1').animate({'opacity':'1','bottom':'0'}, 1000, 'easeOutExpo');
	}, 2500);
	setTimeout(function() {
		$('.s10_p1').delay(500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s10_p1 b').delay(1300).animate({opacity:1}, 1000, 'linear');
		$('.s10_p2').delay(2000).animate({top:0}, 1000, 'easeOutExpo');
		$('.s10_p3').delay(3500).animate({left:0}, 1000, 'easeOutExpo');
		$('.s10_p4').delay(5000).animate({top:0}, 1000, 'easeOutExpo');
	}, 3000);
	setTimeout(function() {
		$('.movi2 img').each(function(index) {
			time = parseInt((randNoRepeat(1,36))+'00',10);
			$(this).delay(time).animate({'opacity':'1','top':'-100px'}, 1000, 'easeOutBack');
		});
	}, 8000);
	setTimeout(function() {
		$('.movi1 img').each(function(index) {
			time = parseInt((randNoRepeat(1,36))+'00',10);
			$(this).delay(time).animate({'opacity':'1','top':'-80px'}, 1000, 'easeOutBack');
		});
	}, 8500);
	setTimeout(function() {
		$('.s10').css({'text-shadow':'0 0 50px rgba(255,255,255,0.5)'});
	}, 9000);
	setTimeout(function() {
		moves1();
		moves2();
	}, 10000);
}

function screen16() // (--16--)
{
	$('.body').css({'background-color': '#57a51b'});
	$('.container').css({'background':'none'});

	$('.s16_p1').css({'top':'1500px','border-color':'transparent'});
	$('.s16_p1 b').css({'background-color':'transparent'});
	$('.s16_logoCenter').transition({'opacity':'0','rotate-x':'-2160deg',scale:0}, 0);

	setTimeout(function() {
		$('.s16_logoCenter').transition({'opacity':'1','rotate-x':'0deg',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.s16_p1').delay(1500).animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.s16_p1 b').delay(3000).css({'background-color':'#fff'});
	}, 5000);
	setTimeout(function() {
		$('.s16_p1').delay(1500).css({'border-color':'#fff'});
	}, 6000);
}

function screen17() // (--17--)
{
	$('.body').css({'background-color': '#57a51b'});

	$('.s11_p1').css({'top':'1500px','border-color':'transparent'});
	$('.s11_p1 b').css({'background-color':'transparent'});
	$('.s11_logoCenter').transition({'opacity':'0','rotate-x':'-2160deg',scale:0}, 0);

	setTimeout(function() {
		$('.s11_logoCenter').transition({'opacity':'1','rotate-x':'0deg',scale:1}, 2000, 'ease');
	}, 1000);
	setTimeout(function() {
		$('.s11_p1').delay(1500).animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.s11_p1 b').delay(3000).css({'background-color':'#fff'});
	}, 5000);
	setTimeout(function() {
		$('.s11_p1').delay(1500).css({'border-color':'#fff'});
	}, 6000);
}

function screen18() // (--18--)
{
	$('.toRight').hide();

	function encendido() {
		if (newCurrentScreen==18) {
			$('.l1').fadeIn('fast');
			setTimeout(function() {
				apagado();
			}, 500);
		} else { return; }
    }
    function apagado() {
		if (newCurrentScreen==18) {
			$('.l1').fadeOut('fast');
			setTimeout(function() {
				encendido();
			}, 500);
		} else { return; }
    }

	$('.body').css({'background-color': '#0a4ca6'});

	$('.l1').hide();
	$('.s12_logoCenter').css({'top':'-1000px'});
	$('.luz').css({'top':'1500px'});
	$('.costelera p').css({'opacity':'0','width':'0px'});
	$('.costelera ul li').css({'opacity':'0','left':'1500px'});

	setTimeout(function() {
		$('.s12_logoCenter').animate({'top':'0'}, 1000, 'easeOutExpo');
	}, 1000);
	setTimeout(function() {
		$('.luz').animate({'top':'-180px'}, 1000, 'easeOutExpo');
	}, 2000);
	setTimeout(function() {
		$('.costelera p').animate({'opacity':'1','width':'100%'}, 1000, 'linear');
	}, 4000);
	setTimeout(function() {
		encendido();
	}, 5000);
	setTimeout(function() {
		$('.costelera ul li').each(function(index) {
			time = parseInt((index+'000')/3,10);
			$(this).delay(time).animate({'opacity':'1','left':'0'}, 1000, 'easeOutExpo');
		});
	}, 6000);
}