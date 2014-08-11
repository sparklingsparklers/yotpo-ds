function shadeColor2(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

function shadeRGBColor(color, percent) {
    var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
}

function blendRGBColors(c0, c1, p) {
    var f=c0.split(","),t=c1.split(","),R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
    return "rgb("+(Math.round((parseInt(t[0].slice(4))-R)*p)+R)+","+(Math.round((parseInt(t[1])-G)*p)+G)+","+(Math.round((parseInt(t[2])-B)*p)+B)+")";
}

function shade(color, percent){
    if (color.length > 7 ) return shadeRGBColor(color,percent);
    else return shadeColor2(color,percent);
}

function blend(color1, color2, percent){
    if (color1.length > 7) return blendRGBColors(color1,color2,percent);
    else return blendColors(color1,color2,percent);
}

$('document').ready(function(){

	$("#btn-createTheme").click(function(){

		var colorPrimary = $('#input-color').val();

		var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorPrimary);

		if(isOk){
			changeTheme(colorPrimary);
		}
    	    	
	});

	$("#resolution").html(screen.width);
});

function changeTheme(colorPrimary){

	var colorPrimary_l1 = shade(colorPrimary, 0.2);
	var colorPrimary_l2 = shade(colorPrimary, 0.4);
	var colorPrimary_l3 = shade(colorPrimary, 0.6);
	var colorPrimary_l4 = shade(colorPrimary, 0.8);
	var colorPrimary_d1 = shade(colorPrimary, -0.2);
	var colorPrimary_d2 = shade(colorPrimary, -0.4);

	$('.color-circle.big.primary').css('background-color' , colorPrimary);
	$('.color-circle.primary-l1').css('background-color' , colorPrimary_l1);
	$('.color-circle.primary-l2').css('background-color' , colorPrimary_l2);
	$('.color-circle.primary-l3').css('background-color' , colorPrimary_l3);
	$('.color-circle.primary-l4').css('background-color' , colorPrimary_l4);
	$('.color-circle.primary-d1').css('background-color' , colorPrimary_d1);
	$('.color-circle.primary-d2').css('background-color' , colorPrimary_d2);

	$('#primary-color-text').text(colorPrimary);
	$('#primary-l1-color-text').text(colorPrimary_l1);
	$('#primary-l2-color-text').text(colorPrimary_l2);
	$('#primary-l3-color-text').text(colorPrimary_l3);
	$('#primary-l4-color-text').text(colorPrimary_l4);
	$('#primary-d1-color-text').text(colorPrimary_d1);
	$('#primary-d2-color-text').text(colorPrimary_d2);
}





//var color2 = shade("#3085C7", 0.4);

