https://kakaomames.github.io/turbowarp/ Name: Screen Resolution
https://kakaomames.github.io/turbowarp/ ID: shreder95resolution
https://kakaomames.github.io/turbowarp/ Description: Get the resolution of the primary screen.
https://kakaomames.github.io/turbowarp/ By: shreder95ua <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/shreder95uhttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT

(function (Scratch) {
  "use strict";

  class Resolution {
    getInfo() {
      return {
        id: "shreder95resolution",
        name: Scratch.translate("Screen resolution"),
        color1: "#FFAB19",
        color2: "#EC9C13",
        color3: "#CF8B17",
        blocks: [
          {
            opcode: "getWidth",
            text: Scratch.translate("primary screen width"),
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: "getHeight",
            text: Scratch.translate("primary screen height"),
            blockType: Scratch.BlockType.REPORTER,
          },
        ],
      };
    }
    getWidth() {
      return window.screen.width;
    }
    getHeight() {
      return window.screen.height;
    }
  }
  Scratch.extensions.register(new Resolution());
})(Scratch);
