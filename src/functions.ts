export function getRandomCode() {
  const code = [getRandomInt(0,9)]
  while (code.length < 4) {
    let newNumber = getRandomInt(0,9);
    if (!code.includes(newNumber)) {
      code.push(newNumber);
    }
  }
  return code;
}
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * ((max-min)+1) + min)
}