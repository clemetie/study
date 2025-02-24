window.addEventListener("load", function () {
  const register = this.document.querySelector("#register");
  register.addEventListener("submit", (e) => {
    e.preventDefault();
    // 입력값 검사
    let userId = document.getElementById("user-id").value;
    let email = document.getElementById("email").value;
    let userPw1 = document.getElementById("user-pw1").value;
    let userPw2 = document.getElementById("user-pw2").value;
    //에러메세지 초기화
    document.getElementById("user-id-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("user-pw1-error").textContent = "";
    document.getElementById("user-pw2-error").textContent = "";
    //유효성검사 시-작
    // 아이디 4-15자리 영문과 숫자 특수기호 담아두는 거임
    let userIdRegex = /^[a-zA-Z0-9]{4,15}$/;
    if (!userIdRegex.test(userId)) {
      document.getElementById("user-id-error").textContent = "아이디 다시 쓰세요";
    }
    // 이메일
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent = "이메일 다시 쓰세요";
    }
    // 비밀번호
    let userPwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!userPwRegex.test(userPw1)) {
      document.getElementById("user-pw1-error").textContent = "비밀번호 다시 쓰세요";
    }
    //비밀번호 확인
    if (userPw1 !== userPw2) {
      document.getElementById("user-pw2-error").textContent = "비밀번호 달라용. 다시 쓰세요";
    }
  });
});
