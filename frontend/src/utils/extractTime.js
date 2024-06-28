export function extractTime(dateString) {
  const date = new Date(dateString); //Create a new data object
  const hours = padZero(date.getHours()); //extract hours and format them with function
  const minutes = padZero(date.getMinutes()); //extract minuts and format them
  return `${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}

//used chatgpt help haha
