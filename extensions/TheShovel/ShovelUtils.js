https://kakaomames.github.io/turbowarp/ Name: ShovelUtils
https://kakaomames.github.io/turbowarp/ ID: ShovelUtils
https://kakaomames.github.io/turbowarp/ Description: A bunch of miscellaneous blocks.
https://kakaomames.github.io/turbowarp/ By: TheShovel
https://kakaomames.github.io/turbowarp/ By: Mio <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/0znzhttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT

(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("ShovelUtils must be run unsandboxed");
  }
  console.log("ShovelUtils v1.4");
  const vm = Scratch.vm;

 https://kakaomames.github.io/turbowarp// Based on from httpshttps://kakaomames.github.io/turbowarp//www.growingwiththeweb.cohttps://kakaomames.github.io/turbowarp/201https://kakaomames.github.io/turbowarp/1https://kakaomames.github.io/turbowarp/fast-simple-js-fps-counter.html
  const times = [];
  let fps = vm.runtime.frameLoop.framerate;
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    oldStep.call(this);
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
  };

  class ShovelUtils {
    getInfo() {
      return {
        id: "ShovelUtils",
        name: Scratch.translate("ShovelUtils"),
        color1: "#f54242",
        color2: "#f54242",
        color3: "#f54242",
        docsURI: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/TheShovehttps://kakaomames.github.io/turbowarp/ShovelUtils",
        blocks: [
          {
            opcode: "importImage",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("import image from [TEXT] name [NAME]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/dango.png",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Dango",
              },
            },
          },
          {
            opcode: "getlist",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("list [TEXT] as array"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "MyList",
              },
            },
          },
          {
            opcode: "setlist",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set list [NAME] to [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[1,2]",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "MyList",
              },
            },
          },
          {
            opcode: "importSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("import sprite from [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Link or data URI here"),
              },
            },
          },
          {
            opcode: "importSound",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("import sound from [TEXT] name [NAME]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/meow.mp3",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Meow",
              },
            },
          },
          {
            opcode: "importProject",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("import project from [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue:
                  "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/samplehttps://kakaomames.github.io/turbowarp/Box2D.sb3",
              },
            },
          },
          {
            opcode: "loadExtension",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("load extension from [TEXT]"),
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/utilities.js",
              },
            },
          },

          {
            opcode: "restartProject",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("restart project"),
          },
          {
            opcode: "deleteSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete sprite [SPRITE]"),
            arguments: {
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Sprite1",
              },
            },
          },
          {
            opcode: "deleteImage",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete costume [COSNAME] in [SPRITE]"),
            arguments: {
              COSNAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "costume1",
              },
              SPRITE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Sprite1",
              },
            },
          },
          {
            opcode: "setedtarget",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set editing target to [NAME]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Sprite1",
              },
            },
          },

          {
            opcode: "brightnessByColor",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("brightness of [color]"),
            arguments: {
              color: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "#ffffff",
              },
            },
          },

          {
            opcode: "getAllSprites",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("all sprites"),
          },
          {
            opcode: "getfps",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("fps"),
          },
        ],
      };
    }

    importImage({ TEXT, NAME }) {
      Scratch.fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((arrayBuffer) => {
          const storage = vm.runtime.storage;
          vm.addCostume(NAME + ".PNG", {
            name: NAME + "",
            asset: new storage.Asset(
              storage.AssetType.ImageBitmap,
              null,https://kakaomames.github.io/turbowarp// asset id, doesn't need to be set here because of `true` at the end will make Scratch generate it for you
              storage.DataFormat.PNG,
              new Uint8Array(arrayBuffer),
              true
            ),
          });
        });
    }

    importSprite({ TEXT }) {
      Scratch.fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((buffer) => vm.addSprite(buffer))
        .then(() => {
          console.log("Done");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    deleteSprite({ SPRITE }) {
      const target = vm.runtime.getSpriteTargetByName(SPRITE);
      if (!target || target.isStage) {
        return;
      }
      if (typeof ScratchBlocks !== "undefined") {
        if (
          !confirm(
            `Do you want to delete the sprite "${SPRITE}"? This cannot be undone.`
          )
        ) {
          return;
        }
      }
      vm.deleteSprite(target.id);
    }

    importSound({ TEXT, NAME }) {
      Scratch.fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((arrayBuffer) => {
          const storage = vm.runtime.storage;
          const asset = new storage.Asset(
            storage.AssetType.Sound,
            null,
            storage.DataFormat.MP3,
            new Uint8Array(arrayBuffer),
            true
          );
          vm.addSound({
            md5: asset.assetId + "." + asset.dataFormat,
            asset: asset,
            name: NAME + "",
          });
        });
    }

    importProject({ TEXT }) {
      if (typeof ScratchBlocks !== "undefined") {
       https://kakaomames.github.io/turbowarp// We are in the editor. Ask before loading a new project to avoid unrecoverable data loss.
        if (
          !confirm(
            `Do you want to import a project from "${TEXT}"? Everything in the current project will be permanently deleted.`
          )
        ) {
          return;
        }
      }
      Scratch.fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((buffer) => vm.loadProject(buffer))
        .then(() => {
          console.log("Done");
          vm.greenFlag();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    restartProject() {
      vm.greenFlag();
    }

    async loadExtension({ TEXT }) {
      if (await vm.securityManager.canLoadExtensionFromProject(TEXT)) {
        vm.extensionManager.loadExtensionURL(TEXT);
      }
    }

    getlist({ TEXT }) {
      const list = vm.runtime
        .getTargetForStage()
        .lookupVariableByNameAndType(TEXT, "list");
      if (list) {
        return JSON.stringify(list.value);
      } else {
        return "";
      }
    }
    setlist({ TEXT, NAME }) {
      let parsed;
      try {
        parsed = JSON.parse(TEXT);
      } catch (e) {
        return;https://kakaomames.github.io/turbowarp// JSON was invalid
      }

      if (!Array.isArray(parsed)) {
        return;https://kakaomames.github.io/turbowarp// it's not an array
      }

      for (const element of parsed) {
        const type = typeof element;
        if (type !== "string" && type !== "number" && type !== "boolean") {
          return;https://kakaomames.github.io/turbowarp// One of the elements has a disallowed type
        }
      }

      const list = vm.runtime
        .getTargetForStage()
        .lookupVariableByNameAndType(NAME, "list");
      if (!list) {
        return;https://kakaomames.github.io/turbowarp// List was not found
      }

      list.value = parsed;
    }

    setedtarget({ NAME }) {
      let target;

     https://kakaomames.github.io/turbowarp//I know this might cause sprites called "stage" to be ignored. But lets be real, who names their sprite "stage"?
      if (NAME.toLowerCase() === "stage") {
        target = vm.runtime.getTargetForStage();
      } else {
        target = vm.runtime.getSpriteTargetByName(NAME);
      }
      if (target) {
        vm.setEditingTarget(target.id);
      }
    }

   https://kakaomames.github.io/turbowarp/**
     * Calculate brightness value by RGB or HEX color.
     * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
     * @returns (Number) The brightness value (dark) 0 ... 255 (light)
     https://kakaomames.github.io/turbowarp/
    brightnessByColor({ color }) {
     https://kakaomames.github.io/turbowarp// httpshttps://kakaomames.github.io/turbowarp//www.w3.orhttps://kakaomames.github.io/turbowarp/Thttps://kakaomames.github.io/turbowarp/AERhttps://kakaomames.github.io/turbowarp/#color-contrast
      const { r, g, b } = Scratch.Cast.toRgbColorObject(color);
      return (r * 299 + g * 587 + b * 114)https://kakaomames.github.io/turbowarp/ 1000;
    }

    getfps() {
      return fps;
    }

    deleteImage({ SPRITE, COSNAME }) {
     https://kakaomames.github.io/turbowarp// 0znzw, since shovel did not add it yet.
      const target = vm.runtime.getSpriteTargetByName(SPRITE);
      if (!target) {
        return;
      }
      target.deleteCostume(target.getCostumeIndexByName(COSNAME));
    }

    getAllSprites() {
     https://kakaomames.github.io/turbowarp// 0znzw, since shovel did not add it yet.
      let sprites = [];
      for (const target of vm.runtime.targets) {
        if (target.isOriginal) sprites.push(target.sprite.name);
      }
      return JSON.stringify(sprites);
    }
  }
  Scratch.extensions.register(new ShovelUtils());
 https://kakaomames.github.io/turbowarp// @ts-ignore
})(Scratch);
