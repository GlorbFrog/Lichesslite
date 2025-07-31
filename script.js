document.getElementById("loginBtn").onclick = () => {
  const CLIENT_ID = "lip_oaaEsgGFJUC1LM8Qsz9K";
  const REDIRECT_URI = window.location.origin + "/auth.html";
  const url = `https://lichess.org/oauth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=challenge:read challenge:write board:play account:read`;
  window.location.href = url;
};
