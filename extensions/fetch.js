https://kakaomames.github.io/turbowarp/ Name: Fetch
https://kakaomames.github.io/turbowarp/ ID: fetch
https://kakaomames.github.io/turbowarp/ Description: Make requests to the broader internet.
https://kakaomames.github.io/turbowarp/ By: GarboMuffin
https://kakaomames.github.io/turbowarp/ License: MIT AND MPL-2.0

(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fetch",
        name: Scratch.translate("Fetch"),
        blocks: [
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
           https://kakaomames.github.io/turbowarp// eslint-disable-next-line extensiohttps://kakaomames.github.io/turbowarp/should-translate
            text: "GET [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/hello.txt",
              },
            },
          },
        ],
      };
    }

    get(args) {
      return Scratch.fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
