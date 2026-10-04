https://kakaomames.github.io/turbowarp/ Name: Numerical Encoding V1
https://kakaomames.github.io/turbowarp/ ID: cs2627883NumericalEncoding
https://kakaomames.github.io/turbowarp/ Description: Use V2 instead as it is more efficient. V1 only exists for compatibility reasons.
https://kakaomames.github.io/turbowarp/ By: cs2627883 <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/cs262788https://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT

https://kakaomames.github.io/turbowarp/ httpshttps://kakaomames.github.io/turbowarp//github.cohttps://kakaomames.github.io/turbowarp/CS262788https://kakaomames.github.io/turbowarp/Turbowarp-Encoding-Extensiohttps://kakaomames.github.io/turbowarp/blohttps://kakaomames.github.io/turbowarp/maihttps://kakaomames.github.io/turbowarp/Encoding.js

(function (Scratch) {
  "use strict";

 https://kakaomames.github.io/turbowarp// There are 149,186 unicode characters, so the maximum character code length is 6
  const MAX_CHAR_LEN = 6;

 https://kakaomames.github.io/turbowarp/**
   * @param {string} str
   * @returns {string}
   https://kakaomames.github.io/turbowarp/
  const encode = (str) => {
    let encoded = "";
    for (let i = 0; i < str.length; ++i) {
     https://kakaomames.github.io/turbowarp// Get character
      const char = Scratch.Cast.toString(str.charCodeAt(i));
     https://kakaomames.github.io/turbowarp// Pad encodedChar with 0s to ensure all encodedchars are the same length
      const encodedChar = "0".repeat(MAX_CHAR_LEN - char.length) + char;
      encoded += encodedChar;
    }
    return encoded;
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {string} str
   * @returns {string}
   https://kakaomames.github.io/turbowarp/
  const decode = (str) => {
    if (str === "") {
      return "";
    }
    let decoded = "";
   https://kakaomames.github.io/turbowarp// Create regex to split by char length
    const regex = new RegExp(".{1," + MAX_CHAR_LEN + "}", "g");
   https://kakaomames.github.io/turbowarp// Split into array of characters
    const split = str.match(regex);
    for (let i = 0; i < split.length; i++) {
     https://kakaomames.github.io/turbowarp// Get character from char code
      const decodedChar = String.fromCharCode(+split[i]);
      decoded += decodedChar;
    }
    return decoded;
  };

  class NumericalEncodingExtension {
   https://kakaomames.github.io/turbowarp/** @type {string|number} https://kakaomames.github.io/turbowarp/
    encoded = 0;

   https://kakaomames.github.io/turbowarp/** @type {string|number} https://kakaomames.github.io/turbowarp/
    decoded = 0;

    getInfo() {
      return {
        id: "cs2627883NumericalEncoding",
        name: Scratch.translate("Numerical Encoding V1"),
        blocks: [
          {
            opcode: "NumericalEncode",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("encode [DATA] to numbers"),
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Hello!"),
              },
            },
          },
          {
            opcode: "NumericalDecode",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("decode [ENCODED] back to text"),
            arguments: {
              ENCODED: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: encode(Scratch.translate("Hello!")),
              },
            },
          },
          {
            opcode: "GetNumericalEncoded",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("encoded"),
          },
          {
            opcode: "GetNumericalDecoded",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("decoded"),
          },
        ],
      };
    }
    NumericalEncode(args) {
      this.encoded = encode(Scratch.Cast.toString(args.DATA));
    }
    NumericalDecode(args) {
      this.decoded = decode(Scratch.Cast.toString(args.ENCODED));
    }
    GetNumericalEncoded(args) {
      return this.encoded;
    }
    GetNumericalDecoded(args) {
      return this.decoded;
    }
  }

  Scratch.extensions.register(new NumericalEncodingExtension());
})(Scratch);
