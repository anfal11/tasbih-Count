// value of 0, 0, 0
const subhanallah = document.getElementById("subhanallah");
const alhamdulillah = document.getElementById("alhamdulillah");
const allahhuakbar = document.getElementById("allahhuakbar");

// class called increment by default
const btnCountSubhanallah = document.querySelector(".btn-count-subhanallah");
const btnCountAlhamdulillah = document.querySelector(
  ".btn-count-alhamdulillah"
);
const btnCountAllahhuakbar = document.querySelector(".btn-count-allahhuakbar");

// class called decrement by default
const btnCountSubhanallahreset = document.querySelector(
  ".btn-reset-subhanallah"
);
const btnCountAlhamdulillahreset = document.querySelector(
  ".btn-reset-alhamdulillah"
);
const btnCountAllahhuakbarreset = document.querySelector(
  ".btn-reset-allahhuakbar"
);

// reset button
const btnReset = document.querySelector(".btn");

let countSubhanallahValue = 0;
let countAlhamdulillahValue = 0;
let countAllahhuakbarValue = 0;

btnCountSubhanallah.addEventListener("click", function () {
  if (countSubhanallahValue < 33) {
    countSubhanallahValue++;
    subhanallah.innerText = countSubhanallahValue;
    if (countSubhanallahValue === 33) {
      return alert(
        "SubhanAllah complete, please complete Alhamdulillah and Allahhuakbar"
      );
    }
  }
});
btnCountSubhanallahreset.addEventListener("click", function () {
  if (countSubhanallahValue > 0) {
    countSubhanallahValue--;
    subhanallah.innerText = countSubhanallahValue;
    if (countSubhanallahValue === 0) {
      return alert("Can't added negative value");
    }
  }
});

btnCountAlhamdulillah.addEventListener("click", function () {
  if (countAlhamdulillahValue < 33) {
    countAlhamdulillahValue++;
    alhamdulillah.innerHTML = countAlhamdulillahValue;
    if (countAlhamdulillahValue === 33) {
      return alert(
        "Alhamdulillah complete, please complete SubhanAllah and Allahhuakbar"
      );
    }
  }
});
btnCountAlhamdulillahreset.addEventListener("click", function () {
  if (countAlhamdulillahValue > 0) {
    countAlhamdulillahValue--;
    alhamdulillah.innerHTML = countAlhamdulillahValue;
    if (countAlhamdulillahValue === 0) {
      return alert("Can't added negative value");
    }
  }
});

btnCountAllahhuakbar.addEventListener("click", function () {
  if (countAllahhuakbarValue < 33) {
    countAllahhuakbarValue++;
    allahhuakbar.innerHTML = countAllahhuakbarValue;
  }
  if (countAllahhuakbarValue === 33) {
    return alert(
      "Allahhuakbar complete, please complete SubhanAllah and Alhamdulillah"
    );
  }
});
btnCountAllahhuakbarreset.addEventListener("click", function () {
  if (countAllahhuakbarValue > 0) {
    countAllahhuakbarValue--;
    allahhuakbar.innerHTML = countAllahhuakbarValue;
    if (countAllahhuakbarValue === 0) {
      return alert("Can't added negative value");
    }
  }
});

btnReset.addEventListener("click", function () {
  countSubhanallahValue = 0;
  countAlhamdulillahValue = 0;
  countAllahhuakbarValue = 0;
  subhanallah.innerHTML = countSubhanallahValue;
  alhamdulillah.innerHTML = countAlhamdulillahValue;
  allahhuakbar.innerHTML = countAllahhuakbarValue;
});
