function catReply() {
  const userInput = document.getElementById('user-input').value.toLowerCase();

  const responses = [
    "Meow", 
    "Purr", 
    "Hiss", 
    "Chirp", 
    "Yowl", 
    "Growl", 
    "Meeeooow!", 
    "Mrrrow!"
  ];

  let randomResponse = responses[Math.floor(Math.random() * responses.length)];

  // Special funny responses
  if (userInput.includes("food") || userInput.includes("hungry")) {
    randomResponse = "Meow! (Feed me, hooman!)";
  } else if (userInput.includes("sleep")) {
    randomResponse = "Purr... (Time for a catnap!)";
  } else if (userInput.includes("play")) {
    randomResponse = "Meow! (Bring the toy mouse!)";
  }

  document.getElementById('bot-response').innerHTML = randomResponse;
  document.getElementById('user-input').value = "";
}