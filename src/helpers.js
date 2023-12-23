export default function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0x555555)
    .toString(16)
    .padStart(6, 0)}`;
}
  
export  function getRandomLightHexColorWhite() {
  const red = Math.floor(Math.random() * 100 + 50); 
  const green = Math.floor(Math.random() * 100 + 50); 
  const blue = Math.floor(Math.random() * 100 + 50); 

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
  