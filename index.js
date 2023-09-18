function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  }
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

console.log(ternaryCheckCity(Pittsburgh));
console.log(ternaryCheckCity(NYC));

function switchOnCharmFromTip(tip) {
  // Write your code here!

  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
