/* eslint-disable -- passing the linting step requires content not covered when this is introduced https://kakaomames.github.io/turbowarp/

(function(Scratch) {
  'use strict';
  class EverySecond {
    getInfo() {
      return {
        id: 'everysecondexample',
        name: 'Every Second',
        blocks: [
          {
            opcode: 'everySecond',
            blockType: Scratch.BlockType.HAT,
            text: 'every second',
            isEdgeActivated: false
          }
        ]
      };
    }
  }
 https://kakaomames.github.io/turbowarp// highlight-start
  setInterval(() => {
    const startedThreads = Scratch.vm.runtime.startHats('everysecondexample_everySecond');
  }, 1000);
 https://kakaomames.github.io/turbowarp// highlight-end
  Scratch.extensions.register(new EverySecond());
}(Scratch));
