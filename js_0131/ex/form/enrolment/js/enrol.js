window.addEventListener("load", function () {
  // 제출 누를 때 확인
  const showconfirmation = this.document.getElementById("showconfirmnation");
  const form = this.document.getElementById("testForm");
  const confirmation = this.document.getElementById("confirmation");

  showconfirmation.addEventListener("click", () => {
    // 메세지 확인
    //입력된 폼 데이터 가져오기
    //form안에 있는(html>input에 name) name = "userName"으로 가져온 거임
    //이렇게 안 하면 document.getElementById("userName").value 로 했어야함
    const userName = form.userName.value.trim();
    const major = form.major.value;
    const subject = form.subject.value;
    const mail1 = form.mailling1.checked;
    const mail2 = form.mailling2.checked;
    const mail3 = form.mailling3.checked;

    //에러 메시지 초기화
    let errorTxt = "";
    //유효성 검사
    if (userName === "") {
      errorTxt += `<p> 이름 적으세여</p>`;
    }
    if (major === "" || major === "------학과선택------") {
      errorTxt += `<p> 학과 선택하세여</p>`;
    }
    if (subject === "") {
      errorTxt += `<p> 과목 선택하세여</p>`;
    }
    if (!mail1 && !mail2 && !mail3) {
      errorTxt += `<p> 뉴스레터 주제 한 개 이상 선택하세야</p>`;
    }
    //에러 메세지 있을 때 출력하기
    if (errorTxt) {
      confirmation.innerHTML = `
        <div class = "error">${errorTxt}</div>
        `;
      confirmation.style.display = "block";
      return; //다 맞으니까 에러메세지 없애고
    }
    //다 하고 제출 눌렀을 때 뜰 확인창
    const fconfirmationMessage = ` <h2>수강신청 내용 확인</h2>
    <p><strong>이름:</strong> ${userName}</p>
    <p><strong>학과:</strong> ${major}</p>
    <p><strong>과목:</strong> ${subject}</p>
    <p><strong>주제:</strong></p>
    <ul>
      <li>${mail1 ? "해외단신" : ""}</li>
      <li>${mail2 ? "5분 회화" : ""}</li>
      <li>${mail3 ? "모닝 팝스" : ""}</li>
      </ul>
      <button id="confirmBtn">확인</button>
      <button id="retryBtn">다시 신청</button>`;

    //확인창에 보일 내용 담고
    confirmation.innerHTML = fconfirmationMessage;
    //폼 숨기고 확인창 보이게 하기
    form.style.display = "none";
    confirmation.style.display = "block";
    //확인창에서 확인 선택할 때
    this.document.querySelector("#confirmBtn").addEventListener("click", () => {
      this.alert("제출되었습니다");
      this.window.location.href = "index.html";
    });
    //확인창에서 초기화 선택할 때
    this.document.querySelector("#retryBtn").addEventListener("click", () => {
      this.document.getElementById("testForm").reset();
      form.style.display = "block";
      confirmation.style.display = "none";
    });
  });
  this.document.querySelector(".reset").addEventListener("click", () => {
    this.alert("초기화합니다");
    form.reset();
    confirmation.style.display = "none";
  });
});
