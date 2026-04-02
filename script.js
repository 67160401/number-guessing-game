<<<<<<< HEAD
// filepath: script.js 
// ...existing code... 
 
// ฟังก์ชันตรวจสอบการทาย 
function checkGuess() { 
  const guessInput = document.getElementById("guessInput"); 
  const guessValue = parseInt(guessInput.value); 
  const resultContainer = document.getElementById("resultContainer"); 
 
  // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่ 
  if (isNaN(guessValue) || guessInput.value === "") { 
    resultContainer.innerHTML = ` 
            <div class="alert alert-danger" role="alert"> 
                กรุณาใส่ตัวเลข! 
            </div> 
        `; 
    return; 
  } 
 
  // Validation: ตรวจสอบว่าอยู ่ในช่วง 1-100 หรือไม่ 
  if (guessValue < 1 || guessValue > 100) { 
    resultContainer.innerHTML = ` 
            <div class="alert alert-danger" role="alert"> 
                กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100! 
            </div> 
        `; 
    return; 
  } 
 
  attemptCount++; 
 
  if (guessValue === secretNumber) { 
    resultContainer.innerHTML = ` 
=======
// filepath: script.js
// ตัวแปรนับจํานวนครั้งที่ทาย
let attemptCount = 0;

// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");
  // ... validation code ...
  attemptCount++; // เพิ่มตรงนี้
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
  <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
  }
  // ... rest of code ...
}

// Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
if (isNaN(guessValue) || guessInput.value === "") {
  resultContainer.innerHTML = ` 
            <div class="alert alert-danger" role="alert"> 
                กรุณาใส่ตัวเลข! 
            </div> 
        `;
  return;
}

// Validation: ตรวจสอบว่าอยู ่ในช่วง 1-100 หรือไม่
if (guessValue < 1 || guessValue > 100) {
  resultContainer.innerHTML = ` 
            <div class="alert alert-danger" role="alert"> 
                กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100! 
            </div> 
        `;
  return;
}

attemptCount++;

if (guessValue === secretNumber) {
  resultContainer.innerHTML = ` 
>>>>>>> 24c1d5d9bb2fc5826cd38d1cb4a45bf21955f071
            <div class="alert alert-success" role="alert"> 
                <h5>✓ ถูกต้อง!</h5> 
                <p>คุณทายถูกในครั ้งที ่ ${attemptCount}</p> 
            </div> 
<<<<<<< HEAD
        `; 
  } else if (guessValue > secretNumber) { 
    resultContainer.innerHTML = ` 
            <div class="alert alert-warning" role="alert"> 
                ↓ ตัวเลขสูงไป 
            </div> 
        `; 
  } else { 
    resultContainer.innerHTML = ` 
            <div class="alert alert-info" role="alert"> 
                ↑ ตัวเลขตํ ่าไป 
            </div> 
        `; 
  } 
 
  updateDisplay(); 
  guessInput.value = ""; 
  guessInput.focus(); 
} 
 
// ...existing code... 
=======
        `;
} else if (guessValue > secretNumber) {
  resultContainer.innerHTML = ` 
            <div class="alert alert-warning" role="alert"> 
                ↓ ตัวเลขสูงไป 
            </div> 
        `;
} else {
  resultContainer.innerHTML = ` 
            <div class="alert alert-info" role="alert"> 
                ↑ ตัวเลขตํ ่าไป 
            </div> 
        `;
}

updateDisplay();
guessInput.value = "";
guessInput.focus();

// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
  initializeGame();
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}

// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}

// เพิ่มการรองรับ Enter key
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("guessInput")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        checkGuess();
      }
    });
});
>>>>>>> 24c1d5d9bb2fc5826cd38d1cb4a45bf21955f071
