$(function (){
	var fontSize=parseInt(document.documentElement.clientWidth);
	document.documentElement.style="font-size:"+fontSize+"px";
	//console.log(document.documentElement.style)
})
$(function (){
	$('#reg').on('touchend',function (){
		window.location='regisit.html';
	})
	var str =  sessionStorage.getItem('info');
	str = JSON.parse(str);
	console.log(str);
	$('#btn').click(function (){
		//console.log(2134);
		var userName=$('.ipt').eq(0).val();
		var password=$('.ipt').eq(1).val();
		//console.log(userName);
		if(userName==""||password==""){
			$('#pass').html("账号或密码不能为空");
			$('#pass').css({color:"red",fontSize:"12px"});
		}else if(str==null){
			$('#pass').html("账号或密码不正确，请重新输入");
			$('#pass').css({color:"red",fontSize:"12px"});
		}else if(userName==str.userName&&password==str.passWord){
			$('#pass').html("登陆成功");
			$('#pass').css({color:"green",fontSize:"20px"});
			window.location="self.html";
		}else{
			$('#pass').html("账号或密码不正确，请重新输入");
			$('#pass').css({color:"red",fontSize:"12px"});
		}
	})
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