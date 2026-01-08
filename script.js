console.log("External JS file linked successfully!");
function showContent() {
    document.getElementById("text").style.display = "block";
}

function hideContent() {
    document.getElementById("text").style.display = "none";
}
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider").src = images[index];
}
function addTask() {
    let task = document.getElementById("task").value;
    if (task === "") return alert("Enter a task!");

    let li = document.createElement("li");
    li.innerHTML = task +
        " <button onclick='removeTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);
    document.getElementById("task").value = "";
}

function removeTask(btn) {
    btn.parentElement.remove();
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("All fields are required");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", 
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};

