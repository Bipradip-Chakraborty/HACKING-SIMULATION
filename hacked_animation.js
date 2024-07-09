const hacked = document.querySelector(".hacked");

const sentences = [
  "DOWNLOADING VIRUS IN YOUR BROWSER",
  "INSTALLING VIRUS",
  "LOADING EMAILS",
  "FETCHING ALL THE PASSWORDS LOGGING INTO",
  "LOADING YOUR PERSONAL DATA",
  "LOADING YOUR ADDRESS",
  "STORING THEM INTO SERVER",
  "CLEANING UP",
  "DOWNLOADING VIRUS IN YOUR BROWSER",
  "INSTALLING VIRUS",
  "LOADING EMAILS",
  "FETCHING ALL THE PASSWORDS LOGGING INTO",
  "LOADING YOUR PERSONAL DATA",
  "LOADING YOUR ADDRESS",
  "STORING THEM INTO SERVER",
  "CLEANING UP",
].map((sentence) => sentence.toLowerCase());

//LOADING RANDOM VALUE: 
function random(){
  return ((Math.floor(Math.random()*6)) + 1) //formula of getting random number between a and b is a + (b-1)*decimal_fraction(here it is the random value between 0 and 1)
}

//TIME DELAY
function loading_data(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

//TYPING SENTENCE
async function typeSentence(p, sentence) {
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  p.appendChild(cursor);

  for (let char of sentence) {
    p.innerHTML = p.textContent.slice(0, -1) + char + `<b style='color:white;'>◉</b>`; // Add underscore for cursor effect
    await loading_data(50);
  }
  p.textContent = p.textContent.slice(0, -1); // Remove underscore at the end
  cursor.remove(); // Remove cursor after typing
}


//ADDING DOTS
function startDots(p) {
  return setInterval(() => {
    if (p.textContent.endsWith("...")) {
      p.textContent = p.textContent.slice(0, -3);
    } else {
      p.textContent += ".";
    }
  }, 150);
}


//RUNNING THE MAIN FUNCTION 
async function main() {
  let i = 0;
  for (let sentence of sentences) {
    i++;
    let p = document.createElement("p");
    p.className = `sentence${i}`;
    hacked.appendChild(p);
    await typeSentence(p, sentence);
    let dotInterval = startDots(p);
    await loading_data(random()*1000); // Adjust the waiting time as needed
    console.log(random()*1000)
    clearInterval(dotInterval);
  }
}

main();
