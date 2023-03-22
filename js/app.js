const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  const date = new Date();
  const hr = date.getHours() * 30;
  const mn = date.getMinutes() * 6;
  const sc = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hr + mn / 12}deg)`;
  min.style.transform = `rotateZ(${mn}deg)`;
  sec.style.transform = `rotateZ(${sc}deg)`;
}, 1000);
