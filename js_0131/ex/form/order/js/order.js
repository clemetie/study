window.addEventListener("load", function () {
  const check = this.document.querySelector("#shippingInfo");
  const submit = this.document.querySelector(".order");

  //   체크했을 때
  check.addEventListener("change", () => {
    if (check.checked) {
      ship.shippingName.value = order.billingName.value;
      ship.shippingTel.value = order.billingTel.value;
      ship.shippingAddr.value = order.billingAddr.value;
    } else {
      ship.shippingName.value = "";
      ship.shippingTel.value = "";
      ship.shippingAddr.value = "";
    }
  });
  //   결제하기 눌렀을 때
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    //체크박스 상태에 따라 배송정보 업데이트 하기
    if (check.checked) {
      ship.shippingName.value = order.billingName.value;
      ship.shippingTel.value = order.billingTel.value;
      ship.shippingAddr.value = order.billingAddr.value;
    }
    //확인할 정보 담아두기
    const billingName = order.billingName.value;
    const billingTel = order.billingTel.value;
    const billingAddr = order.billingAddr.value;
    const shippingName = ship.shippingName.value;
    const shippingTel = ship.shippingTel.value;
    const shippingAddr = ship.shippingAddr.value;
    const confirmTxt = `
     주문 정보:
      이름: ${billingName}
      연락처: ${billingTel}
      주소: ${billingAddr}

      배송 정보:
      이름: ${shippingName}
      연락처: ${shippingTel}
      주소: ${shippingAddr}

      이 정보가 정확합니까?
    `;
    let userconfirmed = confirm(confirmTxt);
    if (userconfirmed) {
      //alert에서 확인 누르면
      alert("ㅇㅋ!");
      // 폼 초기화해두기
      ship.reset();
      order.reset();
    } else {
      alert("다시 쓰세요");
    }
  });
});
