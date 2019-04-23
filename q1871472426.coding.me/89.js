// function jiaohuan(i,j){
// 	var k=i;
// 	i=j;
// 	j=k;
// 	document.write("交换后第一个值为"+i+"第二个值为"+j+"")
// }
// function min(i,j){

// }
// 1.编写一个函数,计算圆的面积和周长.编写一个程序,提示用户输入半径,然后调用函数计算出面积和周长.
function yuan(r){
	var i=Math.floor(Math.pow(3.14*r,2));
	document.write("该园的面积是"+i+"</br>")
	var z=Math.floor(2*3.14*r);
	document.write("该园的周长是"+z+"</br>")
}
// 2.编写三个函数,分别用于:将英尺转换为英寸,将英寸转换为厘米,将厘米转换为米,编写一个程序,通过函数调用测试这三个函数的正确性.
// 1英尺=12英寸,1英寸=2.54厘米,100厘米=1米
function zhuanhuan(a){
	var b=a*12;
	var c=b*2.54;
	var d=c/100;
	document.write(+a+"英尺="+b+"英寸</br>");
	document.write(+a+"英尺="+c+"厘米</br>");
	document.write(+a+"英尺="+d+"米</br>");
}
// 3.编写一个程序,从键盘输入X,Y,Z,3个数,编写函数计算3个数的立方和并返回计算结果.
function lifang(x,y,z){
	
	var x=Math.pow(x,3);
	document.write("第一个数的立方为"+x);
	var y=Math.pow(y,3);
	document.write("</br>第二个数的立方为"+y);
	var z=Math.pow(z,3);
	document.write("</br>第三个数的立方为"+z);
	var h=x+y+z;
	document.write("</br>三个数的立方和为"+h);
}
// 4.编写一个程序,使用函数统计一串字符中小写字母的个数.该函数参数为一个字符串,返回值为小写字母的个数.
function zishu(str){
	var sum=0;
	for (var i = 0; i < str.length; i++) {
		if (str[i]>="a" && str[i]<="z") {
			sum++
		}
	}
	document.write("一共有"+sum+"个小写字母")
}