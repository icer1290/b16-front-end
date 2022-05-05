window.onload = function(){
	document.getElementById('myBusiness').onclick = function(){
		document.getElementById('iframe').src = '企业信息编辑.html';
	}
	document.getElementById('postJob').onclick = function(){
		document.getElementById('iframe').src = '企业职位-选择.html';
	}
}