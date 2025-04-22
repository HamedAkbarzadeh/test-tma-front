document.addEventListener("DOMContentLoaded", async function () {
  document.querySelector("#app").innerText = JSON.stringify(window.Telegram.WebApp.initData)
  console.log('hello2', JSON.stringify({ initDataUnsafe: Telegram.WebApp.initDataUnsafe }));
  await fetch('http://localhost:4000/api/v1/auth/auth-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ initDataUnsafe: Telegram.WebApp.initDataUnsafe })
  })
    .then(res => res.json())
    .then(data => {
      console.log("data : ", data)
      document.querySelector("#app").innerText += "\n\n\n" + JSON.stringify(data)
    })
    .catch(err => console.error('خطا:', err));
})
//ios     : 9a3feb465d19d5855b043c59cb7527657dd23481a0d848c64a668e3740a2e276
//android : 9a3feb465d19d5855b043c59cb7527657dd23481a0d848c64a668e3740a2e276
