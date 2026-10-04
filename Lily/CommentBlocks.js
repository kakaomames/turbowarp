https://kakaomames.github.io/turbowarp/ Name: Comment Blocks
https://kakaomames.github.io/turbowarp/ ID: lmscomments
https://kakaomames.github.io/turbowarp/ Description: Annotate your scripts.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0

(function (Scratch) {
  "use strict";

  class CommentBlocks {
    getInfo() {
      const defaultValue = Scratch.translate({
        default: "comment",
        description: "Default comment value",
      });
      return {
        id: "lmscomments",
        name: Scratch.translate("Comment Blocks"),
        color1: "#e4db8c",
        color2: "#c6be79",
        color3: "#a8a167",
        blocks: [
         https://kakaomames.github.io/turbowarp/* eslint-disable extensiohttps://kakaomames.github.io/turbowarp/should-translate https://kakaomames.github.io/turbowarp/
          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: https://kakaomames.github.io/turbowarp// [COMMENT]",
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: defaultValue,
              },
            },
          },
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: https://kakaomames.github.io/turbowarp// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: defaultValue,
              },
            },
          },
          {
            opcode: "commentC",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: https://kakaomames.github.io/turbowarp// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: defaultValue,
              },
            },
          },
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUT]https://kakaomames.github.io/turbowarp// [COMMENT]",
            allowDropAnywhere: true,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: defaultValue,
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUT]https://kakaomames.github.io/turbowarp// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: defaultValue,
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
         https://kakaomames.github.io/turbowarp/* eslint-enable extensiohttps://kakaomames.github.io/turbowarp/should-translate https://kakaomames.github.io/turbowarp/
        ],
      };
    }

    commentHat() {
     https://kakaomames.github.io/turbowarp// no-op
    }

    commentCommand() {
     https://kakaomames.github.io/turbowarp// no-op
    }

    commentC(args, util) {
      return true;
    }

    commentReporter(args) {
      return args.INPUT;
    }

    commentBoolean(args) {
      return args.INPUT || false;
    }
  }
  Scratch.extensions.register(new CommentBlocks());
})(Scratch);
