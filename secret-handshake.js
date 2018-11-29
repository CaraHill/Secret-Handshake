function secretHandshake(number) {
  const secrets = {
    1: "wink",
    10: "double blink",
    100: "close your eyes",
    1000: "jump"
  };

  let handshake = [];

  for (let key in secrets) {
    if(number == key) {
      handshake.push(secrets[key]);
    }
  }

  return handshake;
}

export { secretHandshake }
