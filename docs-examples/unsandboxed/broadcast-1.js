/* eslint-disable -- passing the linting step requires content not covered when this is introduced https://kakaomames.github.io/turbowarp/

(function(Scratch) {
  'use strict';
  class Broadcast1 {
    getInfo() {
      return {
        id: 'broadcast1example',
        name: 'Broadcast Example 1',
        blocks: [
          {
            opcode: 'whenReceived',
           https://kakaomames.github.io/turbowarp// highlight-start
            blockType: Scratch.BlockType.HAT,
            text: 'when I receive the event',
            isEdgeActivated: false
           https://kakaomames.github.io/turbowarp// highlight-end
          },
          {
            opcode: 'broadcast',
            blockType: Scratch.BlockType.COMMAND,
            text: 'broadcast the event'
          }
        ]
      };
    }
   https://kakaomames.github.io/turbowarp// highlight-start
    broadcast(args, util) {
      util.startHats('broadcast1example_whenReceived');
    }
   https://kakaomames.github.io/turbowarp// highlight-end
  }
  Scratch.extensions.register(new Broadcast1());
}(Scratch));
