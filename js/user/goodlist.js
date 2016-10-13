$(function (){
    var fontSize = parseInt(document.documentElement.clientWidth);
    document.body.parentNode.style = 'font-size:'+fontSize+'px';

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
})
var flag=false;
var fflag=false;
var lflag=false;
var pflag=false;
$(function (){
	// $('.iconfont').click(function (){
	// 	search();
	// })
	$('p').click(function (){
		if(!flag){
			$('#container').css({display:"block"});
			if(!fflag){
				goodlist();
				fflag=true;					
			}else{

			}
			flag=true;
		}else{
			$('#container').css({display:"none"});
			flag=false;
		}		
	})
	$('#container>ul').on('click','.l',function (){
		var index=$(this).index()+1;	
		if(!lflag){
			$(this).children().css({display:'block'});
			//console.log($(this))
			//$('.l').eq(index-1).css({height:'267px'});
			$(this).css({height:'267px',borderBottom:'none'});
			if(!pflag){
				if($(this).attr('a')){
					pflag=true;
				}else{
					newgood(index);
					pflag=false;
				}	
			}else{

			}
			lflag=true;
		}else{
			$(this).children().css({display:'none'});
		//	$('.l').eq(index-1).css({height:'45px'});
			$(this).css({height:'45px',borderBottom:'1px solid #ccc'});
			lflag=false;
		}

		// if(!lflag){
		// 	if($(this).attr('a')=='true'){
		// 		$(this).children().css({display:'none'});
		// 		$(this).css({height:'45px'});
		// 		$(this).attr('a','false');
		// 		//console.log(111);
		// 	}else{
		// 		//console.log(222)
		// 		$(this).children().css({display:'block'});
		// 		$(this).css({height:'267px'});
		// 		if(!pflag){
		// 			newgood(index);
		// 			//pflag=true;
		// 		}else{
		// 			pflag=true;
		// 		}
		// 	}
		// }else{
		// 	lflag=false;
		// 	$(this).children().css({display:'none'});
		// 	$(this).css({height:'45px'});
		// }
	})
	$('.l').on('click','dl',function (){
		//console.log($(this).index());
	})
})
<!--查找-->
// function search(){
// 	//console.log(123);
// 	$.ajax({
// 		type:'get',
// 		url:'http://datainfo.duapp.com/shopdata/selectGoodes.php',
// 		data:{selectText:encodeURI($('#search').val())},
// 		//dataType:'json',
// 		success:function (e){
// 			console.log(e);
// 		}
// 	})
// }
function goodlist(){
	$.ajax({
		type:'get',
		url:' http://datainfo.duapp.com/shopdata/getclass.php',
		dataType:'json',
		success:function (e){
			//console.log(e);
			for(var i=0;i<e.length;i++){
				var li=$('<li class="l"></li>');
				li.html(e[i].className);
				//console.log(e.className)
				$('#container>ul').append(li);
			}	
		}
	})
}
$(function (){
	var is=new iScroll('container',{
		onScrollMove:function (){
			if(this.wrapperH-this.y>this.scrollerH){
				this.pushState=true;
			}
		},
		onScrollEnd:function (){
			if(this.pushState){
				this.pushState=false;	
				this.refresh();				
			}
		}
	});
})
function newgood(n){
	$.ajax({
		type:'get',
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		dataType:'jsonp',
		success:function (e){
			console.log(e);
			for(var i=0;i<e.length;i++){
				if(e[i].classID==n){
					var dl=$('<dl>');
					var dt=$('<dt>');
					var img=$('<img>');
					var dd=$('<dd>');
					var info=$('<div class="info"></div>');
					var price=$('<div class="price"></div>');
					var div=$('<div class="im"></div>');
					img.attr('src',e[i].goodsListImg);
					dt.append(img);
					info.html(e[i].goodsName)
					price.html(e[i].price);
					price.append(div);
					dd.append(info).append(price);
					dl.append(dt).append(dd);
					$('.l').eq(n-1).append(dl);
					$('.l').eq(n-1).attr('a','true');
				}
			}
		}
	})
}
