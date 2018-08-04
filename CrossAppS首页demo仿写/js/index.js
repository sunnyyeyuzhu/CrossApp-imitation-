$(function(){
	/**************************banner切换**********************************************/	
	$("#showbox").kinMaxShow({
		//设置焦点图高度(单位:像素) 必须设置 否则使用默认值 500
		height:750,
		//设置间隔时间（单位：秒）
		intervalTime:4,
		//设置焦点图 按钮效果
		button:{
		    //设置按钮上面不显示数字索引(默认也是不显示索引)
            showIndex:false,
		    //按钮常规下 样式设置 ，css写法，类似jQuery的 $('xxx').css({key:value,……})中css写法。            
		    //【友情提示：可以设置透明度哦 不用区分浏览器 统一为 opacity，CSS3属性也支持哦 如：设置按钮圆角、投影等，只不过IE8及以下不支持】            
            normal:{
            			background:'url(images/biaoshi.png) no-repeat -48px 0',
            			marginRight:'12px',border:'0',right:'46%',bottom:'20px'
            		},
            //当前焦点图按钮样式 设置，写法同上
            focus:{background:'url(images/biaoshi.png) no-repeat 0 0',border:'0'}
		},
		//焦点图切换回调，每张图片淡入、淡出都会调用。并且传入2个参数(index,action)。index 当前图片索引 0为第一张图片，action 切入 或是 切出 值:fadeIn或fadeOut
		//函数内 this指向 当前图片容器对象 可用来操作里面元素。本例中的焦点图动画主要就是靠callback实现的。
		callback:function(index,action){
			switch(index){
				case 0 :
					if(action=='fadeIn'){
						$(this).find('.sub_1_1').animate({top:'100px',opacity:'1'},600);
						$(this).parent().find('.sub_1_2').animate({left:'100px',opacity:'1'})
						$(this).parent().find('.sub_1_3').animate({left:'420px',opacity:'1'})
						$(this).parent().find('.sub_1_4').animate({left:'740px',opacity:'1'},600,function(){
							$(this).parent().find('.sub_1_5').animate({left:'220px',opacity:'1'},600)
						})							
					}
					else{
						$(this).find('.sub_1_1').animate({top:'0',opacity:'0'},600)	
						$(this).find('.sub_1_2').animate({left:'0',opacity:'0'},{duration: 'slow',queue: false})
						$(this).find('.sub_1_3').animate({left:'320px',opacity:'0'},600)   
						$(this).find('.sub_1_4').animate({left:'640px',opacity:'0'},{duration: 'slow',queue: false})
						$(this).find('.sub_1_5').animate({left:'110px',opacity:'0'},600)
						
					};
					break;
					
				case 1 :
						if(action=='fadeIn'){
							$(this).find('.sub_2_4').animate({top:'70',opacity:'1'},1200)
							$(this).find('.sub_2_1').animate({left:'170',opacity:'1'},1200)
							$(this).find('.sub_2_2').animate({right:'60',opacity:'1'},1200)
							$(this).find('.sub_2_3').animate({left:'170',opacity:'1'},1200)
							
						}else{
							$(this).find('.sub_2_4').animate({top:'-800',opacity:'0'},600)
							$(this).find('.sub_2_1').animate({left:'-240',opacity:'0'},600)
							$(this).find('.sub_2_2').animate({right:'-240',opacity:'0'},600)
							$(this).find('.sub_2_3').animate({left:'-240',opacity:'0'},600)
							
						};
						break;
						
				case 2 :
						if(action=='fadeIn'){
							$(this).find('.sub_3_1').animate({top:'150',opacity:'1'},600)
							$(this).find('.sub_3_2').animate({left:'60',opacity:'1'},600)
							$(this).find('.sub_3_3').animate({left:'60',opacity:'1'},600)
						}else{
							$(this).find('.sub_3_1').animate({top:'0',opacity:'0'},600)
							$(this).find('.sub_3_2').animate({left:'0',opacity:'0'},600)
							$(this).find('.sub_3_3').animate({left:'300',opacity:'0'},600)
						};
						break;											
				
			}
		}
	
	});

	/**********************内容上移初始化***************************/
	function animateTop(item, time,callback) {
        if ($(item).attr('init') == 'false'){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'marginTop': '0',opacity:1}, 800, 'easeOutCubic');
                callback;
            },time)
        }
    }
	
	var boxElemets = $('.subcontent');
	
	$.each(boxElemets, function () {
        $(this).attr('init', 'false');
    });
	
	animateTop('.subcontent', 200);


});