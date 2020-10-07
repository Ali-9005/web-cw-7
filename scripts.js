const counter = document.querySelector(".counterButton");

// 👇🏻 مكان النقاط count قم بتعيين القيمة صفر إلى المتغير
// ...

counter.addEventListener("click", incrementCounter);

/******************************************************
 *  هي أداة تقوم بتكرار الكود الذي incrementCounter()  *
 *  تكتبه داخلها كلما ضغطت على الزر                    *
 ******************************************************/

function incrementCounter() {
  // 👇🏻 بواحد مكان النقاط count قم بزيادة قيمة
  // ...
  let count = document.getElementById("counterButton").innerHTML;
  let newCount = parseInt(count) + 1;
  counter.innerHTML = newCount;
  // "تسوي 1 اطبع "جيد count إن كانت قيمة العداد أو
  if (newCount === 1) {
    document.getElementById("status").innerHTML = "جيد";
  } else if (newCount > 1 && newCount < 6) {
    document.getElementById("status").innerHTML = "جيد جدًا";
  } else if (newCount >= 6) {
    document.getElementById("status").innerHTML = "رائع";

  }
  // "أكبر من 1 وأقل من 6 اطبع "جيد جداً count إن كانت قيمة العداد أو
  // "أكبر من أو تساوي 6 اطبع "رائع count إن كانت قيمة العداد أو
}
