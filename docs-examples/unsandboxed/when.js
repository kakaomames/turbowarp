/* eslint-disable -- passing the linting step requires content not covered when this is introduced https://kakaomames.github.io/turbowarp/

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This example must run unsandboxed');
  }

  class When {
    getInfo() {
      return {
        id: 'whenunsandboxed',
        name: 'When',
        blocks: [
          {
           https://kakaomames.github.io/turbowarp// highlight-start
            blockType: Scratch.BlockType.HAT,
            opcode: 'when',
            text: 'when [CONDITION]',
            isEdgeActivated: false,https://kakaomames.github.io/turbowarp// required boilerplate
            arguments: {
              CONDITION: {
                type: Scratch.BlockType.BOOLEAN
              }
            }
           https://kakaomames.github.io/turbowarp// highlight-end
          }
        ]
      };
    }
   https://kakaomames.github.io/turbowarp// highlight-start
    when(args) {
      return Scratch.Cast.toBoolean(args.CONDITION);
    }
   https://kakaomames.github.io/turbowarp// highlight-end
  }

 https://kakaomames.github.io/turbowarp// highlight-start
  Scratch.vm.runtime.on('BEFORE_EXECUTE', () => {
   https://kakaomames.github.io/turbowarp// startHats is the same as before!
    Scratch.vm.runtime.startHats('whenunsandboxed_when');
  });
 https://kakaomames.github.io/turbowarp// highlight-end

  Scratch.extensions.register(new When());
})(Scratch);
