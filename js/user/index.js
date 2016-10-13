// var footLi=document.querySelectorAll('.footer_li');
// for(var i=0;i<footLi.length;i++){
// 	footLi[0].ontouchend=function (){
// 		//console.log(123);

// 		window.location='index.html';
// 	}
// }\\
$(function (){
    var fontSize = parseInt(document.documentElement.clientWidth);
    document.body.parentNode.style = 'font-size:'+fontSize+'px';

})
$(function (){
			ban();
			mallList();
		})
		function ban(){
			$.ajax({
			  	type:"get",
			  	url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",
			  	//dataType:"jsonp",
			  	success:function (e){
			  		//console.log(e);
			  		for(var i=0;i<e.length;i++){
			  			var imgArr=eval(e[i].goodsBenUrl);
			  			//console.log(imgArr);
			  			var back='background:url('+imgArr[0]+');background-size:cover';
			  			//console.log(back);
			  			var slide='<div class="swiper-slide" style='+back+'></div>'
			  			$('.swiper-wrapper').append(slide);
			  		}
			  		
			  		var mySwiper = new Swiper ('.swiper-container', {
					    direction: 'horizontal',
					    loop: true,
					    
					    // 如果需要分页器
					    pagination: '.swiper-pagination',  
					})    
			  	}
			}) 			
		}
		var pageIndex=0;
		function  mallList(){
			$.ajax({
				type:'get',
				url:'http://datainfo.duapp.com/shopdata/getGoods.php',
				dataType:'jsonp',
				data:{pageCode:pageIndex,linenumber:5},
				success:function (e){
					//console.log(e);
					// var dl="<dl></dl>";
					// var dt="<dt><img src=""/></dt>";
					for(var i=0;i<e.length;i++){
						var dl=$('<dl>');
						var dt=$('<dt>');
						var img=$('<img>');
						var dd=$('<dd>');
						var info=$('<div class="info"></div>');
						var price=$('<div class="price"></div>');
						img.attr('src',e[i].goodsListImg);
						dt.append(img);
						info.html(e[i].goodsName)
						price.html(e[i].price);
						dd.append(info).append(price);
						dl.append(dt).append(dd);
						$('#contain>div').append(dl);
					}
				}
			})
		}
		$(function (){
			var is=new iScroll('contain',{
				onScrollMove:function (){
					if(this.wrapperH-this.y>this.scrollerH){
						this.pushState=true;
					}
				},
				onScrollEnd:function (){
					if(this.pushState){
						this.pushState=false;
						
						mallList();
						pageIndex++;	
						this.refresh();				
					}

				}
			});
		})
		$(function (){
			$('.footer_li').on('touchend',function (){
					//console.log(123);
					switch ($(this).index()){
						case 0:
							window.location="index.html";
							$(this).addClass('g').removeClass('red');
							$(this).siblings().removeClass('g').removeClass('red');
							break;
						case 1:console.log(111);
							window.location='goodList.html';
							$(this).addClass('g').removeClass('red');
							$(this).siblings().removeClass('g').removeClass('red');
							break;//window.location="index.html";break;
						case 2:console.log(222);
							window.location='goodcar'
							$(this).addClass('g').removeClass('red');
							$(this).siblings().removeClass('g').removeClass('red');
							break;//window.location="index.html";break;
						case 3:console.log(333);
							window.location='self.html';
							$(this).addClass('g').removeClass('red');
							$(this).siblings().removeClass('g').removeClass('red');
							break;//window.location="index.html";break;
						case 4:console.log(444);
							window.location='detail.html';
							$(this).addClass('g').removeClass('red');
							$(this).siblings().removeClass('g').removeClass('red');
							break;//window.location="index.html";break;
					}
			});	
		})
    //     $(function() {
    //         var urlArr=['webhtml/index.html','webhtml/class.html','webhtml/goodcar.html','webhtml/self.html'];
    //         var title=['首页','分类','购物车','我的秀'];
    //         $('.footer_li').on('touchend',function (){
    //             var index=$(this).index();
    //             $(this).addClass('g').removeClass('red');
				// $(this).siblings().removeClass('g').removeClass('red');
    //             $('#container').load(urlArr[index]);
    //             var t=title[index];
    //             document.title=t;
    //             var url=window.location.href.split('#')[0]+'#'+urlArr[index];
    //             history.pushState({htmlUri:index},t,url);
    //         })
    //         window.onpopstate=function (e){
    //             $('#container').load(e.state.htmlUri);
    //             $('#container').load(urlArr[e.state.htmlUri]);
    //             //console.log($('header div').index());
    //             $('.footer_li').eq(e.state.htmlUri).addClass('g').siblings().removeClass('g');
    //         }
    //     })

