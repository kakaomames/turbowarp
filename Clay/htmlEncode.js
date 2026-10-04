https://kakaomames.github.io/turbowarp/ Name: HTML Encode
https://kakaomames.github.io/turbowarp/ ID: clayhtmlencode
https://kakaomames.github.io/turbowarp/ Description: Escape untrusted text to safely include in HTML.
https://kakaomames.github.io/turbowarp/ By: clay-rip
https://kakaomames.github.io/turbowarp/ License: MIT

(function (Scratch) {
  "use strict";

  class HtmlEncode {
    getInfo() {
      return {
        id: "claytonhtmlencode",
        name: Scratch.translate("HTML Encode"),
        blocks: [
          {
            opcode: "encode",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("encode [text] as HTML-safe"),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
               https://kakaomames.github.io/turbowarp// don't use a script tag as the example here as the closing script
               https://kakaomames.github.io/turbowarp// tag might break things when this extension gets inlined in packed
               https://kakaomames.github.io/turbowarp// projects
                defaultValue: `<h1>${Scratch.translate("Hello!")}https://kakaomames.github.io/turbowarp/h1>`,
              },
            },
          },
        ],
      };
    }

    encode({ text }) {
      return Scratch.Cast.toString(text).replacehttps://kakaomames.github.io/turbowarp/["'&<>https://kakaomames.github.io/turbowarp/g, (a) => {
        switch (a) {
          case "&":
            return "&amp;";
          case '"':
            return "&quot;";
          case "'":
            return "&apos;";
          case ">":
            return "&gt;";
          case "<":
            return "&lt;";
        }
       https://kakaomames.github.io/turbowarp// this should never happen...
        return "";
      });
    }
  }

  Scratch.extensions.register(new HtmlEncode());
})(Scratch);
