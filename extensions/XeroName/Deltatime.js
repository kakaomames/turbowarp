https://kakaomames.github.io/turbowarp/ Name: Delta Time
https://kakaomames.github.io/turbowarp/ ID: dtbyxeroname
https://kakaomames.github.io/turbowarp/ Description: Precise delta timing blocks.
https://kakaomames.github.io/turbowarp/ By: XeroName <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/plant201https://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT

(function (Scratch) {
  "use strict";

  const icon =
    "data:imaghttps://kakaomames.github.io/turbowarp/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMzAwIiBmaWxsPSIjMjAyMDIwIi8+CjxwYXRoIGQ9Ik04Ny44NjggNTEyLjEzMkM2MC4wMTA0IDQ4NC4yNzQgMzcuOTEyNSA0NTEuMjAzIDIyLjgzNjEgNDE0LjgwNUM3Ljc1OTcyIDM3OC40MDcgLTMuNDQ0MTZlLTA2IDMzOS4zOTcgMCAzMDBDMy40NDQxNmUtMDYgMjYwLjYwMyA3Ljc1OTc0IDIyMS41OTMgMjIuODM2MiAxODUuMTk1QzM3LjkxMjYgMTQ4Ljc5NyA2MC4wMTA0IDExNS43MjYgODcuODY4IDg3Ljg2NzlDMTE1LjcyNiA2MC4wMTA0IDE0OC43OTcgMzcuOTEyNSAxODUuMTk1IDIyLjgzNjFDMjIxLjU5MyA3Ljc1OTcxIDI2MC42MDQgLTkuODYyNjZlLTA2IDMwMCAwQzMzOS4zOTcgOS44NjI2OGUtMDYgMzc4LjQwNyA3Ljc1OTc1IDQxNC44MDUgMjIuODM2MkM0NTEuMjAzIDM3LjkxMjYgNDg0LjI3NSA2MC4wMTA0IDUxMi4xMzIgODcuODY4TDMwMCAzMDBMODcuODY4IDUxMi4xMzJaIiBmaWxsPSIjMzAzMDMwIi8+CjxwYXRoIGQ9Ik0zMzAgNDM1TDIzMCAxODUiIHN0cm9rZT0iIzYxMjM2MSIgc3Ryb2tlLXdpZHRoPSIzMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMjAgMTg1SDQyME01MjAgMTg1SDQyME00MjAgMTg1VjQzNU0yOTkuNDUxIDQzMy42MjlMMjAwLjkyOCAxODcuMzIxQzIwMC41OTMgMTg2LjQ4MyAxOTkuNDA3IDE4Ni40ODMgMTk5LjA3MiAxODcuMzIxTDEwMC41NDkgNDMzLjYyOUMxMDAuMjg2IDQzNC4yODUgMTAwLjc3IDQzNSAxMDEuNDc3IDQzNUgyOTguNTIzQzI5OS4yMyA0MzUgMjk5LjcxNCA0MzQuMjg1IDI5OS40NTEgNDMzLjYyOVoiIHN0cm9rZT0iIzYwNjA2MCIgc3Ryb2tlLXdpZHRoPSIzMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMTAgNDE1TDIxMCAxNjUiIHN0cm9rZT0iI0ZGNUNGRiIgc3Ryb2tlLXdpZHRoPSIzMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMDAgMTY1SDQwME01MDAgMTY1SDQwME00MDAgMTY1VjQxNU0yNzkuNDUxIDQxMy42MjlMMTgwLjkyOCAxNjcuMzIxQzE4MC41OTMgMTY2LjQ4MyAxNzkuNDA3IDE2Ni40ODMgMTc5LjA3MiAxNjcuMzIxTDgwLjU0ODYgNDEzLjYyOUM4MC4yODU4IDQxNC4yODUgODAuNzY5NiA0MTUgODEuNDc3IDQxNUgyNzguNTIzQzI3OS4yMyA0MTUgMjc5LjcxNCA0MTQuMjg1IDI3OS40NTEgNDEzLjYyOVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("DeltaTime must be run unsandboxed");
  }

  const vm = Scratch.vm;

  let deltaTime = 0;
  let previousTime = 0;

  vm.runtime.on("BEFORE_EXECUTE", () => {
    const now = performance.now();

    if (previousTime === 0) {
     https://kakaomames.github.io/turbowarp// First frame. We used to always return 0 here, but that can break projects that
     https://kakaomames.github.io/turbowarp// expect delta time to always be non-zero. Instead we'll make our best guess.
      deltaTime = 1https://kakaomames.github.io/turbowarp/ vm.runtime.frameLoop.framerate;
    } else {
      deltaTime = (now - previousTime)https://kakaomames.github.io/turbowarp/ 1000;
    }

    previousTime = now;
  });

  class Dt {
    getInfo() {
      return {
        id: "dtbyxeroname",
        name: Scratch.translate("Delta Time"),
        color1: "#333333",
        color2: "#444444",
        color3: "#ffffff",
        menuIconURI: icon,
        blocks: [
          {
            opcode: "dt",
            blockType: Scratch.BlockType.REPORTER,
           https://kakaomames.github.io/turbowarp// eslint-disable-next-line extensiohttps://kakaomames.github.io/turbowarp/should-translate
            text: "ΔT",
          },
          {
            opcode: "fps",
            blockType: Scratch.BlockType.REPORTER,
           https://kakaomames.github.io/turbowarp// eslint-disable-next-line extensiohttps://kakaomames.github.io/turbowarp/should-translate
            text: "fps",
          },
        ],
      };
    }

    dt() {
      return deltaTime;
    }

    fps() {
      return +(1https://kakaomames.github.io/turbowarp/ deltaTime).toFixed(2);
    }
  }

  Scratch.extensions.register(new Dt());
})(Scratch);
