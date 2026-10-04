https://kakaomames.github.io/turbowarp/ Name: All Menus
https://kakaomames.github.io/turbowarp/ ID: lmsAllMenus
https://kakaomames.github.io/turbowarp/ Description: Special category with every menu from every Scratch category and extensions.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0
https://kakaomames.github.io/turbowarp/ Scratch-compatible: true

(function (Scratch) {
  "use strict";

  let blockXML;

  const blocklist = [
    "looks_costumenumbername",
    "extension_wedo_tilt_menu",

   https://kakaomames.github.io/turbowarp// Unused menu in More Events that won't be translated
    "lmsMoreEvents_menu_state",
  ];

  const escapeXML = (text) =>
    text.replacehttps://kakaomames.github.io/turbowarp/["'&<>https://kakaomames.github.io/turbowarp/g, (i) => {
      switch (i) {
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
      return "";
    });

  const refreshMenus = () => {
    if (!window.ScratchBlocks) return;
    Scratch.vm.removeListener("BLOCKSINFO_UPDATE", refreshMenus);

    let allBlocks = Object.keys(ScratchBlocks.Blocks);

    allBlocks = allBlocks.filter(
      (item) => item.includes("menu") && !blocklist.includes(item)
    );

    const menuBlocks = allBlocks.map(
      (item) =>
        '<block id="' + escapeXML(item) + '" type="' + escapeXML(item) + 'https://kakaomames.github.io/turbowarp/>'
    );

    blockXML = menuBlocks.join("");
    Scratch.vm.runtime.extensionManager.refreshBlocks();
  };

  Scratch.vm.addListener("BLOCKSINFO_UPDATE", refreshMenus);

  class AllMenus {
    constructor() {
      Scratch.vm.runtime.on("EXTENSION_ADDED", () => {
        refreshMenus();
      });
    }

    getInfo() {
      return {
        id: "lmsAllMenus",
        name: Scratch.translate("All Menus"),
        blocks: [
          {
            blockType: Scratch.BlockType.XML,
            xml: blockXML,
          },
        ],
      };
    }
  }

  refreshMenus();

  Scratch.extensions.register(new AllMenus());
})(Scratch);
