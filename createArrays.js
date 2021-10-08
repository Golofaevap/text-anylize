for (let i = 1020; i <= 1120; i++) {
  const character = String.fromCharCode(i);
  string = `"${character}": ["${character}"],`;
  console.log(string);
}
