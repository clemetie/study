window.addEventListener("load", function () {
  const btn = this.document.querySelector("#btn"); //추가하기 버튼
  const addvalue = this.document.querySelector("#addvalue"); //input입니다
  const result = this.document.querySelector("#result"); //ul입니다
  const allClear = this.document.querySelector("#allClear"); //전체삭제 버튼

  // 추가버튼 클릭했을 때 li추가
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = addvalue.value.trim();
    //input(addvalue)에 아무것도 안 적었을 때 창 띄워주기
    if (value === "") {
      this.alert("내용을 입력하세요");
      return; //함수 종료
    }
    // input(addvalue)에 입력된 값으로 li만들기
    const list = this.document.createElement("li");
    list.innerHTML = `${value} <button class = "delBtn"> X </button>`;

    //ul에 li 추가하기 (위로 챡챡챡 쌓아주기..)  안쌓을거면 appendchid하셈
    result.insertBefore(list, result.firstChild);
    addvalue.value = ""; //추가하고 나서 input에 내용 빈배열로 바꿔주기
    addvalue.focus(); //추가하고 나서 input에 focus(커서..자동으로..들어있음.)해주기

    //X버튼 누르면 li삭제하기
    const del = this.document.querySelector(".delBtn"); //아까 만든 삭제버튼
    del.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    //글자 클릭하면 가운데 줄 긋는 거..
    list.addEventListener("click", () => {
      list.classList.toggle("completed");
    });
  });

  //전체삭제하기 하하하
  allClear.addEventListener("click", () => {
    if (result.innerHTML === "") {
      this.alert("삭제할 내용이 없어용");
    } else {
      result.innerHTML = "";
    }
  });
});
