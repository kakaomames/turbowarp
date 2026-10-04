/* eslint-disable -- passing the linting step requires content not covered when this is introduced https://kakaomames.github.io/turbowarp/

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This example must run unsandboxed');
  }

  class WhenKeyPressed {
    getInfo() {
      return {
        id: 'eventexample2unsandboxed',
        name: 'Event Block Example 2',
        blocks: [
          {
            blockType: Scratch.BlockType.EVENT,
            opcode: 'whenPressed',
            text: 'when [KEY] key pressed',
            isEdgeActivated: false,https://kakaomames.github.io/turbowarp// required boilerplate
           https://kakaomames.github.io/turbowarp// highlight-start
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: 'key'
              }
            }
           https://kakaomames.github.io/turbowarp// highlight-end
          }
        ],
        menus: {
          key: {
            acceptReporters: false,
            items: [
              {
               https://kakaomames.github.io/turbowarp// startHats filters by *value*, not by text
                text: 'space',
                value: ' '
              },
              'a',
              'b',
              'c',
             https://kakaomames.github.io/turbowarp// ...
            ]
          }
        }
      };
    }
  }

  document.addEventListener('keydown', (e) => {
   https://kakaomames.github.io/turbowarp// highlight-start
    Scratch.vm.runtime.startHats('eventexample2unsandboxed_whenPressed', {
      KEY: e.key
    });
   https://kakaomames.github.io/turbowarp// highlight-end
  });

  Scratch.extensions.register(new WhenKeyPressed());
})(Scratch);
