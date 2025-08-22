    const user = "Mutiara";
    const pass = "Army";

    if (localStorage.getItem("loginUser")) {
      showWelcome(localStorage.getItem("loginUser"));
    }

    function login() {
      const uname = document.getElementById("username").value.trim();
      const pwd = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      if (!uname || !pwd) {
        errorMsg.textContent = "Username dan password wajib diisi.";
        errorMsg.classList.remove("hidden");
        return;
      }

      if (uname === user && pwd === pass) {
        localStorage.setItem("loginUser", uname);
        showWelcome(uname);
      } else {
        errorMsg.textContent = "Username atau password salah.";
        errorMsg.classList.remove("hidden");
      }
    }

    function logout() {
      localStorage.removeItem("loginUser");
      document.getElementById("loginBox").classList.remove("hidden");
      document.getElementById("welcomeBox").classList.add("hidden");
      document.getElementById("errorMsg").classList.add("hidden");
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }

    function showWelcome(name) {
      document.getElementById("loginBox").classList.add("hidden");
      document.getElementById("welcomeBox").classList.remove("hidden");
      document.getElementById("welcomeUser").textContent = `Halo, ${name}! Wִelcome ࣪𖤐.ᐟ`;
    }