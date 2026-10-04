https://kakaomames.github.io/turbowarp/ Name: Ask Before Closing Tab
https://kakaomames.github.io/turbowarp/ ID: xmerclosecontrol
https://kakaomames.github.io/turbowarp/ Description: Show a prompt when someone tries to close the tab.
https://kakaomames.github.io/turbowarp/ By: XmerOriginals <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/XmerOriginalhttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MPL-2.0

(function (Scratch) {
  "use strict";

  let enabled = false;

  window.addEventListener("beforeunload", (e) => {
    if (enabled) {
      e.preventDefault();
    }
  });

  class CloseControl {
    getInfo() {
      return {
        id: "xmerclosecontrol",
        name: Scratch.translate("Ask Before Closing Tab"),
        blocks: [
          {
            opcode: "setControl",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set ask before closing tab to [OPTION]"),
            arguments: {
              OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "option",
              },
            },
          },
          {
            opcode: "getControl",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("ask before closing tab enabled?"),
          },
        ],
        menus: {
          option: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("enabled"),
                value: "true",
              },
              {
                text: Scratch.translate("disabled"),
                value: "false",
              },
            ],
          },
        },
      };
    }

    setControl({ OPTION }) {
      enabled = Scratch.Cast.toBoolean(OPTION);
    }

    getControl() {
      return enabled;
    }
  }

  Scratch.extensions.register(new CloseControl());
})(Scratch);
