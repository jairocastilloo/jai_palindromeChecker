const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultSpan = document.getElementById("result");
checkBtn.addEventListener("click", function () {
  resultSpan.innerText = "";
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    if (checkWord(textInput.value) === true) {
      resultSpan.classList.add("text-success");

      if (resultSpan.classList.contains("text-danger")) {
        resultSpan.classList.remove("text-danger");
      }

      resultSpan.innerText = `${textInput.value} is a palindrome`;
    } else {
      resultSpan.classList.add("text-danger");

      if (resultSpan.classList.contains("text-success")) {
        resultSpan.classList.remove("text-success");
      }
      resultSpan.innerText = `${textInput.value} is not a palindrome`;
    }
  }
});

function checkWord(wordInput) {
  let word = wordInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let y = word.length - 1;
  for (let x = 0; x < word.length / 2; x++) {
    if (word[x] !== word[y]) {
      return false;
    }
    y--;
  }
  return true;
}
