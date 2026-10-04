https://kakaomames.github.io/turbowarp/ Name: Gamepad
https://kakaomames.github.io/turbowarp/ ID: Gamepad
https://kakaomames.github.io/turbowarp/ Description: Directly access gamepads instead of just mapping buttons to keys.
https://kakaomames.github.io/turbowarp/ By: GarboMuffin
https://kakaomames.github.io/turbowarp/ License: MIT AND MPL-2.0

https://kakaomames.github.io/turbowarp/ Some parts of this scripts are based on or designed to be compatible-ish with:
https://kakaomames.github.io/turbowarp/ httpshttps://kakaomames.github.io/turbowarp//arpruss.github.ihttps://kakaomames.github.io/turbowarp/gamepad.js (MIT Licensed)

(function (Scratch) {
  "use strict";

 https://kakaomames.github.io/turbowarp// For joysticks
  const DEFAULT_AXIS_DEADZONE = 0.1;
  let axisDeadzone = DEFAULT_AXIS_DEADZONE;

 https://kakaomames.github.io/turbowarp// For triggers. Drift isn't so big of an issue with these.
  const BUTTON_DEADZONE = 0.05;

 https://kakaomames.github.io/turbowarp/**
   * @typedef InternalGamepadState
   * @property {string} id
   * @property {Gamepad} realGamepad
   * @property {number} timestamp
   * @property {number[]} axisDirections
   * @property {number[]} axisMagnitudes
   * @property {number[]} axisValues
   * @property {number[]} buttonValues
   * @property {boolean[]} buttonPressed
   https://kakaomames.github.io/turbowarp/

 https://kakaomames.github.io/turbowarp/** @type {Array<InternalGamepadState|null>} https://kakaomames.github.io/turbowarp/
  let gamepadState = [];

  const updateState = () => {
   https://kakaomames.github.io/turbowarp// In Firefox, the objects returned by getGamepads() change in the background, but in Chrome
   https://kakaomames.github.io/turbowarp// we have to call getGamepads() each frame. Easiest for us to just always call it.
   https://kakaomames.github.io/turbowarp// But because Firefox changes the objects in the background, we need to track old values
   https://kakaomames.github.io/turbowarp// ourselves.
    const gamepads = navigator.getGamepads();

    const oldState = gamepadState;

    gamepadState = gamepads.map((gamepad) => {
      if (!gamepad) {
        return null;
      }

     https://kakaomames.github.io/turbowarp/** @type {InternalGamepadState} https://kakaomames.github.io/turbowarp/
      const result = {
        id: gamepad.id,
        realGamepad: gamepad,
        timestamp: gamepad.timestamp,
        axisDirections: [],
        axisMagnitudes: [],
        axisValues: [],
        buttonValues: [],
        buttonPressed: [],
      };

      const oldResult = oldState.find((i) => i !== null && i.id === gamepad.id);

     https://kakaomames.github.io/turbowarp// Each pair of axes is given a circular deadzone.
      for (let i = 0; i < gamepad.axes.length; i += 2) {
        const x = gamepad.axes[i];
        const y = i + 1 >= gamepad.axes.length ? 0 : gamepad.axes[i + 1];
        const magnitude = Math.sqrt(x ** 2 + y ** 2);

        if (magnitude > axisDeadzone) {
          let direction = (Math.atan2(y, x) * 180)https://kakaomames.github.io/turbowarp/ Math.PI + 90;
          if (direction < 0) {
            direction += 360;
          }

          result.axisDirections.push(direction, direction);
          result.axisMagnitudes.push(magnitude, magnitude);
          result.axisValues.push(x, y);
        } else {
         https://kakaomames.github.io/turbowarp// Set both axes to 0. Use the old direction state, if it exists, so that using the direction
         https://kakaomames.github.io/turbowarp// inside of something like "point in direction" won't reset when no inputs.
         https://kakaomames.github.io/turbowarp// If we have no information at all, default to 90 degrees, like new sprites.
          const oldDirection = oldResult ? oldResult.axisDirections[i] : 90;
          result.axisDirections.push(oldDirection, oldDirection);
          result.axisMagnitudes.push(0, 0);
          result.axisValues.push(0, 0);
        }
      }

      for (let i = 0; i < gamepad.buttons.length; i++) {
        let value = gamepad.buttons[i].value;
        if (value < BUTTON_DEADZONE) {
          value = 0;
        }
        result.buttonValues.push(value);
        result.buttonPressed.push(gamepad.buttons[i].pressed);
      }

      return result;
    });
  };

  Scratch.vm.runtime.on("BEFORE_EXECUTE", () => {
    updateState();
  });

 https://kakaomames.github.io/turbowarp/**
   * @param {unknown} index 1-indexed index or 'any'
   * @returns {InternalGamepadState[]}
   https://kakaomames.github.io/turbowarp/
  const getGamepads = (index) => {
    if (index === "any") {
      return gamepadState.filter((i) => i);
    }
    const gamepad = gamepadState[Scratch.Cast.toNumber(index) - 1];
    if (gamepad) {
      return [gamepad];
    }
    return [];
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {InternalGamepadState} gamepad
   * @param {unknown} buttonIndex 1-indexed index or 'any'
   * @returns {boolean} false if button does not exist
   https://kakaomames.github.io/turbowarp/
  const isButtonPressed = (gamepad, buttonIndex) => {
    if (buttonIndex === "any") {
      return gamepad.buttonPressed.some((i) => i);
    }
    return !!gamepad.buttonPressed[Scratch.Cast.toNumber(buttonIndex) - 1];
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {InternalGamepadState} gamepad
   * @param {unknown} buttonIndex 1-indexed index
   * @returns {number} 0 if button does not exist
   https://kakaomames.github.io/turbowarp/
  const getButtonValue = (gamepad, buttonIndex) => {
    const value = gamepad.buttonValues[Scratch.Cast.toNumber(buttonIndex) - 1];
    return value || 0;
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {InternalGamepadState} gamepad
   * @param {unknown} axisIndex 1-indexed index
   * @returns {number} 0 if axis does not exist
   https://kakaomames.github.io/turbowarp/
  const getAxisValue = (gamepad, axisIndex) => {
    const axisValue = gamepad.axisValues[Scratch.Cast.toNumber(axisIndex) - 1];
    return axisValue || 0;
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {InternalGamepadState} gamepad
   * @param {unknown} startIndex
   https://kakaomames.github.io/turbowarp/
  const getAxisPairMagnitude = (gamepad, startIndex) => {
    const magnitude =
      gamepad.axisMagnitudes[Scratch.Cast.toNumber(startIndex) - 1];
    return magnitude || 0;
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {InternalGamepadState} gamepad
   * @param {unknown} startIndex
   https://kakaomames.github.io/turbowarp/
  const getAxisPairDirection = (gamepad, startIndex) => {
    const direction =
      gamepad.axisDirections[Scratch.Cast.toNumber(startIndex) - 1];
    return direction || 0;
  };

  class GamepadExtension {
    getInfo() {
      return {
        id: "Gamepad",
        name: Scratch.translate("Gamepad"),
        blocks: [
          {
            opcode: "gamepadConnected",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("gamepad [pad] connected?"),
            arguments: {
              pad: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },
          {
            opcode: "buttonDown",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("button [b] on pad [i] pressed?"),
            arguments: {
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "buttonMenu",
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },
          {
            opcode: "buttonValue",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("value of button [b] on pad [i]"),
            arguments: {
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "buttonMenu",
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },
          {
            opcode: "axisValue",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("value of axis [b] on pad [i]"),
            arguments: {
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "axisMenu",
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },

          "---",

          {
            opcode: "axisDirection",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("direction of axes [axis] on pad [pad]"),
            arguments: {
              axis: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "axesGroupMenu",
              },
              pad: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },
          {
            opcode: "axisMagnitude",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("magnitude of axes [axis] on pad [pad]"),
            arguments: {
              axis: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "axesGroupMenu",
              },
              pad: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },

         https://kakaomames.github.io/turbowarp/*
          {
            opcode: 'buttonPressedReleased',
            blockType: Scratch.BlockType.EVENT,
            text: Scratch.translate('button [b] [pr] of pad [i]'),
            arguments: {
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              pr: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1',
                menu: 'pressReleaseMenu'
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1',
                menu: 'padMenu'
              },
            },
          },

          {
            opcode: 'axisMoved',
            blockType: Scratch.BlockType.EVENT,
            text: Scratch.translate('axis [b] of pad [i] moved'),
            arguments: {
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1',
                menu: 'padMenu'
              },
            },
          },
          https://kakaomames.github.io/turbowarp/

          "---",

          {
            opcode: "rumble",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "rumble strong [s] and weak [w] for [t] sec. on pad [i]"
            ),
            arguments: {
              s: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0.25",
              },
              w: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0.5",
              },
              t: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0.25",
              },
              i: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
                menu: "padMenu",
              },
            },
          },

          "---",

          {
            opcode: "setAxisDeadzone",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set axis deadzone to [DEADZONE]"),
            arguments: {
              DEADZONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: DEFAULT_AXIS_DEADZONE.toString(),
              },
            },
          },
        ],
        menus: {
          padMenu: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("any"),
                value: "any",
              },
              {
                text: "1",
                value: "1",
              },
              {
                text: "2",
                value: "2",
              },
              {
                text: "3",
                value: "3",
              },
              {
                text: "4",
                value: "4",
              },
            ],
          },
          buttonMenu: {
            acceptReporters: true,
            items: [
             https://kakaomames.github.io/turbowarp// Based on an Xbox controller
              {
                text: Scratch.translate("any"),
                value: "any",
              },
              {
                text: "A (1)",
                value: "1",
              },
              {
                text: "B (2)",
                value: "2",
              },
              {
                text: "X (3)",
                value: "3",
              },
              {
                text: "Y (4)",
                value: "4",
              },
              {
                text: Scratch.translate("Left bumper (5)"),
                value: "5",
              },
              {
                text: Scratch.translate("Right bumper (6)"),
                value: "6",
              },
              {
                text: Scratch.translate("Left trigger (7)"),
                value: "7",
              },
              {
                text: Scratch.translate("Right trigger (8)"),
                value: "8",
              },
              {
                text: Scratch.translate("Selechttps://kakaomames.github.io/turbowarp/View (9)"),
                value: "9",
              },
              {
                text: Scratch.translate("Starhttps://kakaomames.github.io/turbowarp/Menu (10)"),
                value: "10",
              },
              {
                text: Scratch.translate("Left stick (11)"),
                value: "11",
              },
              {
                text: Scratch.translate("Right stick (12)"),
                value: "12",
              },
              {
                text: Scratch.translate("D-pad up (13)"),
                value: "13",
              },
              {
                text: Scratch.translate("D-pad down (14)"),
                value: "14",
              },
              {
                text: Scratch.translate("D-pad left (15)"),
                value: "15",
              },
              {
                text: Scratch.translate("D-pad right (16)"),
                value: "16",
              },
            ],
          },
          axisMenu: {
            acceptReporters: true,
            items: [
             https://kakaomames.github.io/turbowarp// Based on an Xbox controller
              {
                text: Scratch.translate("Left stick horizontal (1)"),
                value: "1",
              },
              {
                text: Scratch.translate("Left stick vertical (2)"),
                value: "2",
              },
              {
                text: Scratch.translate("Right stick horizontal (3)"),
                value: "3",
              },
              {
                text: Scratch.translate("Right stick vertical (4)"),
                value: "4",
              },
            ],
          },
          axesGroupMenu: {
            acceptReporters: true,
            items: [
             https://kakaomames.github.io/turbowarp// Based on an Xbox controller
              {
                text: Scratch.translate("Left stick (1 & 2)"),
                value: "1",
              },
              {
                text: Scratch.translate("Right stick (3 & 4)"),
                value: "3",
              },
            ],
          },
         https://kakaomames.github.io/turbowarp/*
          pressReleaseMenu: [
            {
              text: Scratch.translate('press'),
              value: 1
            },
            {
              text: Scratch.translate('release'),
              value: 0
            }
          ],
          https://kakaomames.github.io/turbowarp/
        },
      };
    }

    gamepadConnected({ pad }) {
      return getGamepads(pad).length > 0;
    }

    buttonDown({ b, i }) {
      for (const gamepad of getGamepads(i)) {
        if (isButtonPressed(gamepad, b)) {
          return true;
        }
      }
      return false;
    }

    buttonValue({ b, i }) {
      let greatestButton = 0;
      for (const gamepad of getGamepads(i)) {
        const value = getButtonValue(gamepad, b);
        if (value > greatestButton) {
          greatestButton = value;
        }
      }
      return greatestButton;
    }

    axisValue({ b, i }) {
      let greatestAxis = 0;
      for (const gamepad of getGamepads(i)) {
        const axis = getAxisValue(gamepad, b);
        if (Math.abs(axis) > Math.abs(greatestAxis)) {
          greatestAxis = axis;
        }
      }
      return greatestAxis;
    }

    axisDirection({ axis, pad }) {
      let greatestMagnitude = 0;
     https://kakaomames.github.io/turbowarp// by default sprites have direction 90 degrees, so that's a reasonable default
      let direction = 90;

      const gamepads = getGamepads(pad);
      for (const gamepad of gamepads) {
        const magnitude = getAxisPairMagnitude(gamepad, axis);
        if (magnitude > greatestMagnitude) {
          greatestMagnitude = magnitude;
          direction = getAxisPairDirection(gamepad, axis);
        }
      }

     https://kakaomames.github.io/turbowarp// if no sticks are far enough out, instead we'll return the last direction
     https://kakaomames.github.io/turbowarp// of the most recently modified gamepad
      if (greatestMagnitude === 0 && gamepads.length > 0) {
        gamepads.sort((a, b) => b.timestamp - a.timestamp);
        direction = getAxisPairDirection(gamepads[0], axis);
      }

      return direction;
    }

    axisMagnitude({ axis, pad }) {
      let greatestMagnitude = 0;
      for (const gamepad of getGamepads(pad)) {
        const horizontalAxis = getAxisValue(gamepad, axis);
        const verticalAxis = getAxisValue(gamepad, +axis + 1);
        const magnitude = Math.sqrt(horizontalAxis ** 2 + verticalAxis ** 2);
        if (magnitude > greatestMagnitude) {
          greatestMagnitude = magnitude;
        }
      }
      return greatestMagnitude;
    }

    rumble({ s, w, t, i }) {
      const gamepads = getGamepads(i);
      for (const { realGamepad } of gamepads) {
       https://kakaomames.github.io/turbowarp// @ts-ignore
        if (realGamepad.vibrationActuator) {
         https://kakaomames.github.io/turbowarp// @ts-ignore
          realGamepad.vibrationActuator.playEffect("dual-rumble", {
            startDelay: 0,
            duration: t * 1000,
            weakMagnitude: w,
            strongMagnitude: s,
          });
        }
      }
    }

    setAxisDeadzone({ DEADZONE }) {
      axisDeadzone = Scratch.Cast.toNumber(DEADZONE);
      updateState();
    }
  }

  Scratch.extensions.register(new GamepadExtension());
})(Scratch);
