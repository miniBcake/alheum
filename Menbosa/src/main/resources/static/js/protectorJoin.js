//전체동의
NodeList.prototype.map = Array.prototype.map;

const all = document.querySelector("input#checkAll");
const terms = document.querySelectorAll("input.protectorJoin-check");

//전체 동의 체크박스
all.addEventListener("click", () => {
    terms.forEach((term) => {
        term.checked = all.checked;
    });
});

//약관동의 체크박스
terms.forEach((term) => {
    term.addEventListener("click", (e) => {
        all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 2;
    });
});

// 값 검증
document.getElementById("regist-ok-btn").addEventListener("click", function(event) {

    let name = document.getElementById("join_name").value.trim();
    let phoneFront = document.getElementById("join_phoneFront").value.trim();
    let phoneBack = document.getElementById("join_phoneBack").value.trim();
    let password = document.getElementById("join_password").value.trim();
    let passwordVerify = document.getElementById("join_passwordVerify").value.trim();
    let certification = document.getElementById("proMemCertification").value.trim();
    let checkAll = document.getElementById("checkAll");

    //이름값 확인


    //전화번호 입력확인


    //인증번호 확인


    //비밀번호 일치 여부 확인
    if (password !== passwordVerify) {
        event.preventDefault();
        alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
    }
    
    //약관동의 확인
    if(!checkAll){
        event.preventDefault();
    }

});
