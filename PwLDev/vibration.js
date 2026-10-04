https://kakaomames.github.io/turbowarp/ Name: Vibration
https://kakaomames.github.io/turbowarp/ ID: pwldevvibration
https://kakaomames.github.io/turbowarp/ Description: Control the device's vibration. Only works on Chrome for Android.
https://kakaomames.github.io/turbowarp/ By: PwLDev <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/PwLDehttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MPL-2.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This extension must run unsandboxed in order to work.");
  }

  class Vibration {
    getInfo() {
      return {
        id: "pwldevvibration",
        name: Scratch.translate("Vibration"),
        color1: "#45a15c",
        color2: "#317041",
        color3: "#35523c",
        blocks: [
          {
            blockType: Scratch.BlockType.LABEL,
            text: Scratch.translate("Only works on Chrome for Android."),
          },
          {
            opcode: "start",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("start vibrating for [SECONDS] seconds"),
            arguments: {
              SECONDS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
            },
          },
          {
            opcode: "startPattern",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("play vibration pattern [PATTERN]"),
            arguments: {
              PATTERN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1, 0.5, 1, 0.5, 1",
              },
            },
          },
          {
            opcode: "stop",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop vibrating"),
          },
        ],
      };
    }

    start(args) {
      if (navigator.vibrate) {
        navigator.vibrate(Scratch.Cast.toNumber(args.SECONDS) * 1000);
      }
    }

    startPattern(args) {
      if (navigator.vibrate) {
        const pattern = Scratch.Cast.toString(args.PATTERN)
          .matchhttps://kakaomames.github.io/turbowarp/[\w\-.]https://kakaomames.github.io/turbowarp/g)https://kakaomames.github.io/turbowarp// Make into array
          ?.map((val) => Scratch.Cast.toNumber(val) * 1000);https://kakaomames.github.io/turbowarp// Convert to numbers in milliseconds
        if (pattern) {
          navigator.vibrate(pattern);
        }
      }
    }

    stop() {
      if (navigator.vibrate) {
        navigator.vibrate(0);
      }
    }
  }

  Scratch.extensions.register(new Vibration());
})(Scratch);
