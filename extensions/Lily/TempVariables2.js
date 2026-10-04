https://kakaomames.github.io/turbowarp/ Name: Temporary Variables
https://kakaomames.github.io/turbowarp/ ID: lmsTempVars2
https://kakaomames.github.io/turbowarp/ Description: Create disposable runtime or thread variables.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ By: Mio <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/0znzhttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0

(function (Scratch) {
  "use strict";

 https://kakaomames.github.io/turbowarp// Credit to skyhigh173 for the idea of this.
  const label = (name, hidden) => ({
    blockType: Scratch.BlockType.LABEL,
    text: name,
    hideFromPalette: hidden,
  });

  class TempVars {
    constructor() {
     https://kakaomames.github.io/turbowarp// this.resetRuntimeVariables would be preferable but,
     https://kakaomames.github.io/turbowarp// its easier on TS when defined in the constructor,
     https://kakaomames.github.io/turbowarp// and not abstracted out.
     https://kakaomames.github.io/turbowarp//
     https://kakaomames.github.io/turbowarp// Object.create(null) prevents "variable [toString]" from returning a function.
      this.runtimeVariables = Object.create(null);

      Scratch.vm.runtime.on("PROJECT_START", () => {
        this.resetRuntimeVariables();
      });

      Scratch.vm.runtime.on("PROJECT_STOP_ALL", () => {
        this.resetRuntimeVariables();
      });
    }

    getInfo() {
      return {
        id: "lmsTempVars2",
        name: Scratch.translate("Temporary Variables"),
        color1: "#FF791A",
        color2: "#E15D00",
        blocks: [
          label(Scratch.translate("Thread Variables"), false),

          {
            opcode: "setThreadVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set thread var [VAR] to [STRING]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            opcode: "changeThreadVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change thread var [VAR] by [NUM]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
            },
          },

          "---",

          {
            opcode: "getThreadVariable",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("thread var [VAR]"),
            disableMonitor: true,
            allowDropAnywhere: true,
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
            },
          },
          {
            opcode: "threadVariableExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("thread var [VAR] exists?"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
            },
          },

          "---",

          {
            opcode: "forEachThreadVariable",
            blockType: Scratch.BlockType.LOOP,
            text: Scratch.translate("for [VAR] in [NUM]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "thread variable",
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
            },
          },
          {
            opcode: "listThreadVariables",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("active thread variables"),
            disableMonitor: true,
          },

          "---",

          label(Scratch.translate("Runtime Variables"), false),

          {
            opcode: "setRuntimeVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set runtime var [VAR] to [STRING]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            opcode: "changeRuntimeVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("change runtime var [VAR] by [NUM]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
              NUM: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1",
              },
            },
          },

          "---",

          {
            opcode: "getRuntimeVariable",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("runtime var [VAR]"),
            disableMonitor: true,
            allowDropAnywhere: true,
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
            },
          },
          {
            opcode: "runtimeVariableExists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("runtime var [VAR] exists?"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
            },
          },

          "---",

          {
            opcode: "deleteRuntimeVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete runtime var [VAR]"),
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "variable",
              },
            },
          },
          {
            opcode: "deleteAllRuntimeVariables",
            func: "resetRuntimeVariables",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete all runtime variables"),
          },
          {
            opcode: "listRuntimeVariables",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("active runtime variables"),
          },
        ],
      };
    }

   https://kakaomames.github.io/turbowarp/* THREAD VARIABLES https://kakaomames.github.io/turbowarp/

    setThreadVariable(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      thread.variables[args.VAR] = args.STRING;
    }

    changeThreadVariable(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      const vars = thread.variables;
      const prev = Scratch.Cast.toNumber(vars[args.VAR]);
      const next = Scratch.Cast.toNumber(args.NUM);
      vars[args.VAR] = prev + next;
    }

    getThreadVariable(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      return thread.variables[args.VAR] ?? "";
    }

    threadVariableExists(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      return Object.prototype.hasOwnProperty.call(thread.variables, args.VAR);
    }

    forEachThreadVariable(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      const vars = thread.variables;
      if (!Object.prototype.hasOwnProperty.call(util.stackFrame, "index")) {
        util.stackFrame.index = 0;
      }
      if (util.stackFrame.index < Scratch.Cast.toNumber(args.NUM)) {
        util.stackFrame.index++;
        vars[args.VAR] = util.stackFrame.index;
        return true;
      }
    }

    listThreadVariables(args, util) {
      const thread = util.thread;
      if (!thread.variables) {
        thread.variables = Object.create(null);
      }
      return Object.keys(thread.variables).join(",");
    }

   https://kakaomames.github.io/turbowarp/* RUNTIME VARIABLES https://kakaomames.github.io/turbowarp/

    setRuntimeVariable(args) {
      this.runtimeVariables[args.VAR] = args.STRING;
    }

    changeRuntimeVariable(args) {
      const prev = Scratch.Cast.toNumber(this.runtimeVariables[args.VAR]);
      const next = Scratch.Cast.toNumber(args.NUM);
      this.runtimeVariables[args.VAR] = prev + next;
    }

    getRuntimeVariable(args) {
      return this.runtimeVariables[args.VAR] ?? "";
    }

    runtimeVariableExists(args) {
      return Object.prototype.hasOwnProperty.call(
        this.runtimeVariables,
        args.VAR
      );
    }

    listRuntimeVariables(args, util) {
      return Object.keys(this.runtimeVariables).join(",");
    }

    deleteRuntimeVariable(args) {
      Reflect.deleteProperty(this.runtimeVariables, args.VAR);
    }

    resetRuntimeVariables() {
      this.runtimeVariables = Object.create(null);
    }
  }
 https://kakaomames.github.io/turbowarp// The expose format follows TurboWarp's convention of `ext_${extensionId}`.
 https://kakaomames.github.io/turbowarp// Expose the extension on runtime for others to use.
  const extension = new TempVars();
  Scratch.vm.runtime.ext_lmsTempVars2 = extension;
  Scratch.extensions.register(extension);
})(Scratch);
