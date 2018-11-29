function secretHandshake(number) {
  const secrets = {
    1: "wink",
    10: "double blink",
    100: "close your eyes",
    1000: "jump"
  };

  let binaryNumber = (+number).toString(2);
  let handshake = [];

  for (let key in secrets) {
    if(binaryNumber == key) {
      handshake.push(secrets[key]);
    }
  }

  return handshake;
}

export { secretHandshake }
