$(function (){
	var fontSize=parseInt(document.documentElement.clientWidth);
	document.documentElement.style="font-size:"+fontSize+"px";
})
$(function (){
	$('.footer_li').on('touchend',function (){
		//console.log(123);
		switch ($(this).index()){
			case 0:
				//window.location="index.html";
				$(this).addClass('g').removeClass('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;
			case 1:console.log(111);
				$(this).addClass('g').removeClass('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;//window.location="index.html";break;
			case 2:console.log(222);
				$(this).addClass('g').removeClass('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;//window.location="index.html";break;
			case 3:console.log(333);
				$(this).addClass('g').removeClass('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;//window.location="index.html";break;
			case 4:console.log(444);
				$(this).addClass('g').removeClass('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;//window.location="index.html";break;
		}
	});	
	var flag=false;
	$('#list>ul>li').on('touchend',function(){
		//console.log($(this).index());
		if(!flag){
			$(this).children().eq(0).css({transform:'rotate(90deg)'});
			//console.log(typeof($(this).children()));
			flag=true;
		}else{
			$(this).children().eq(0).css({transform:'rotate(0deg)'});
			flag=false;
		}	
	});
	$('.b').eq(0).on('touchend',function (){
		window.location='login.html';
	})
	$('.b').eq(1).on('touchend',function(){
		window.location='regisit.html';
	})
})
$(function (){
	var str =  sessionStorage.getItem('info');
	str = JSON.parse(str);
})