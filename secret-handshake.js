function secretHandshake(number) {
  if(!Number.isInteger(number)) {
    throw new Error("Handshake must be a number");
  }

  const secrets = {
    1: "wink",
    10: "double blink",
    100: "close your eyes",
    1000: "jump"
  };

  let binaryNumber = (+number).toString(2);
  let handshake = [];

  for(let key in secrets) {
    if(binaryNumber == key) {
      handshake.push(secrets[key]);
    }
  }

  if(binaryNumber % 10 == 1 && binaryNumber != 1) {
    let stringNumber = binaryNumber.toString();
    if(stringNumber.endsWith("11")) {
      handshake.push(secrets[1]);
      handshake.push(secrets[10]);
    }

    if(stringNumber.endsWith("111")) {
      handshake.push(secrets[100]);
    }

    if(stringNumber.endsWith("1111")) {
      handshake.push(secrets[1000]);
    }
  }

  if(binaryNumber >= 10000) {
    handshake.reverse();
  }

  return handshake;
}

export { secretHandshake }
