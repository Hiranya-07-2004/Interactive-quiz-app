function login() {
    const username = document.getElementById("username").value.trim();
  
    if (username !== "") {
      localStorage.setItem("quizUser", username);
      window.location.href = "htmlcssjs-selection.html";
    } else {
      alert("Please enter your name to continue.");
    }
  }
  