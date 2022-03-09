/*
아래 doDisplay0, doDisplay1 함수는 아이디찾기, 비밀번호찾기 페이지에서
라디오 버튼으로 다른 부분 클릭시 디스플레이 펼치게 하는 기능입니다
*/

function doDisplay0(choose) {
    var a = document.getElementById("find1");
    var b = document.getElementById("find2");
    if( choose == "0" ) {
        a.style.display = "block";
        b.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "block";
    }
}

function doDisplay1(choose) {
    var c = document.getElementById("find3");
    var d = document.getElementById("find4");
    if( choose == "0" ) {
        c.style.display = "block";
        d.style.display = "none";
    } else {
        c.style.display = "none";
        d.style.display = "block";
    }
}

/*
아래 ps_page, ps_page1 함수는 회원정보수정페이지의 비밀번호
입력 실패시 경고창 뜨게 하는 기능입니다.
*/

function ps_page(form) {
  if (form.pass.value=="1111") {
    location="my_page_modify.html"
  } else {
    alert("패스워드가 틀립니다. 임시 비밀번호 1111 눌러주세요")
  }
}

function ps_page1(form) {
  if (form.pass.value=="1111") {
    location="my_page_withdraw.html"
  } else {
    alert("패스워드가 틀립니다. 임시 비밀번호 1111 눌러주세요")
  }
}


/*
여기 doDisplay, doDisplay2 함수는 고객센터 펼치기 기능인데
자바스크립트 좀 더 공부하고 간략화할 것임.

간략화 하실 수 있는 분은 코드 수정 후 팀원에게 알려주세요.
*/

function doDisplay(){
	var disp = document.getElementById("dodis");
	if(disp.style.display=='none'){
		disp.style.display = 'block';
	}else{
		disp.style.display = 'none';
	}
}

function doDisplay2(){
	var disp = document.getElementById("dodis2");
	if(disp.style.display=='none'){
		disp.style.display = 'block';
	}else{
		disp.style.display = 'none';
	}
}

function doDisplay3(){
	var disp = document.getElementById("dodis3");
	if(disp.style.display=='none'){
		disp.style.display = 'block';
	}else{
		disp.style.display = 'none';
	}
}

function doDisplay4(){
	var disp = document.getElementById("dodis4");
	if(disp.style.display=='none'){
		disp.style.display = 'block';
	}else{
		disp.style.display = 'none';
	}
}

function doDisplay5(){
	var disp = document.getElementById("dodis5");
	if(disp.style.display=='none'){
		disp.style.display = 'block';
	}else{
		disp.style.display = 'none';
	}
}


/*
아래 showPopup, showPopup2 함수는 팝업창들 입니다
회원정보수정-배송지수정, 회원탈퇴페이지에서 확인버튼 누를시 팝업창 나옴
*/

function showPopup() {
  window.open("address.html", "배송지 수정 팝업창", "width=550, height=550, left=200, top=150");
}

function showPopup2() {
  window.open("withdraw.html", "회원탈퇴 확인 팝업창", "width=350, height=200, left=200, top=150");
}
