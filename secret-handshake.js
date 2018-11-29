function secretHandshake(number) {
  if(!Number.isInteger(number)) {
    throw new Error("Handshake must be a number");
  }

  const secrets = [
    "wink",
    "double blink",
    "close your eyes",
    "jump"
  ];

  let handshake = [];
  let remainder;
  let idx = 0;

  do {
    remainder = number % 2;
    if (remainder === 1) {
      if (idx === 4) {
        handshake.reverse();
      } else {
        handshake.push(secrets[idx]);
      }
    }
    idx += 1;
    number = Math.floor(number / 2);
  } while (number > 0);

  return handshake;
}

export { secretHandshake }
