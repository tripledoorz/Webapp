$(function (){
	var fontSize=parseInt(document.documentElement.clientWidth);
	document.documentElement.style="font-size:"+fontSize+"px";
})
$(function (){
	//console.log($('#log'));
	$('#log').on('touchend',function (){
		window.location='login.html';
	});
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
				$(this).addClass('g').remove
				Class('red');
				$(this).siblings().removeClass('g').removeClass('red');
				break;//window.location="index.html";break;
		}
	});	
})
$(function (){
	var uN=false;
	var pa=false;
	var rpa=false;
	$(".ipt").eq(0).focus(function (){
		$('#userNum').html('请输入6~13位账号，可用英文，数字组成');
		$('#userNum').css({color:"black"});
	})
	$('.ipt').eq(0).blur(function (){
		var userName=$('.ipt').eq(0).val();
		//console.log(typeof(userName));
		if(userName==""){
			//console.log(122);
			$('#userNum').html("账号不能为空");
			$('#userNum').css({color:"red"});
		}else{
			if(!(/((?=.*[0-9])(?=.*[A-z]))|((?=.*[A-z])(?=.*[^A-z0-9]))|((?=.*[0-9])(?=.*[^A-z0-9]))^.{6,16}$/.test(userName))){
				$('#userNum').html("账号格式不正确");
				$('#userNum').css({color:"red"});
			}else{
				uN=true;
				$('#userNum').html('输入正确');
				$('#userNum').css({color:"green"});
			}
		}
	})
	$('.ipt').eq(1).focus(function (){
		$('#pass').html("请输入6~30位的密码，可由英文数字组成");
		$('#pass').css({color:"black"});
	})
	$('.ipt').eq(1).blur(function (){
		var pass=$('.ipt').eq(1).val();
		if(pass==""){
			$('#pass').html("密码不能为空");
			$('#pass').css({color:"red"});
		}else{
			if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,30}$/.test(pass)){
				$('#pass').html("密码格式不正确");
				$('#pass').css({color:"red"});
			}else{
				pa=true;
				$('#pass').html("密码输入正确");
				$('#pass').css({color:"green"});
			}
		}
	})
	$('.ipt').eq(2).focus(function (){
		$('#repass').html("请输入确认密码");
		$('#repass').css({color:"black"});
	})
	$('.ipt').eq(2).blur(function (){
		var repass=$('.ipt').eq(2).val();
		var pass=$('.ipt').eq(1).val();
		if(repass==""){
			$('#repass').html("重复密码不能为空");
			$('#repass').css({color:"red"});
		}else{
			if(repass!=pass){
				$('#repass').html("两次密码不一致");
				$('#repass').css({color:"red"});
			}else{
				rpa=true;
				$('#repass').html("输入正确");
				$('#repass').css({color:"green"});
			}
		}
	})
	<!--sessionStorage来进行用户注册-->
	$('#btn').click(function (){
		var str1 =  sessionStorage.getItem('info');
		str1 = JSON.parse(str1);
		var userName1=$('.ipt').eq(0).val();
		if(str1==null){
			//console.log(123123);
			if(uN&pa&rpa){
				var user={
					userName:$('.ipt').eq(0).val(),
					passWord:$('.ipt').eq(1).val()
				}
				 var str = JSON.stringify(user);
				 sessionStorage.setItem('info',str);
				 //console.log(str);
				// $('#repass').html("注册成功，请登录");
				 //var str =  sessionStorage.getItem('name');
				 window.location="login.html"
			}else{
				switch(false){
					case uN:$('#userNum').html("请输入正确格式的账号");
					$('#userNum').css({color:"red"});
					case pa:$('#pass').html("请输入正确格式的密码");
					$('#pass').css({color:"red"});
					case rpa:$('#repass').html("两次密码不一致");
					$('#repass').css({color:"red"});
				}
			}			
		}else{
			if(userName1==str1.userName){
				$('#userNum').html("账号已被注册，请重新注册");
				$('#userNum').css({color:'red'});
			}else{
				if(uN&pa&rpa){
					var user={
						userName:$('.ipt').eq(0).val(),
						passWord:$('.ipt').eq(1).val()
					}
					 var str = JSON.stringify(user);
					 sessionStorage.setItem('info',str);
					 //console.log(str);
					// $('#repass').html("注册成功，请登录");
					 //var str =  sessionStorage.getItem('name');
					 window.location="login.html"
				}else{
					switch(false){
						case uN:$('#userNum').html("请输入正确格式的账号");
						$('#userNum').css({color:"red"});
						case pa:$('#pass').html("请输入正确格式的密码");
						$('#pass').css({color:"red"});
						case rpa:$('#repass').html("两次密码不一致");
						$('#repass').css({color:"red"});
					}
				}
			}			
		}
	})
})
