/* eslint-disable -- passing the linting step requires content not covered when this is introduced https://kakaomames.github.io/turbowarp/

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Block Utility example must run unsandboxed');
  }

  class BlockUtilityExamples {
    getInfo() {
      return {
        id: 'blockutilityexamples',
        name: 'BlockUtility Examples',
        blocks: [
          {
            opcode: 'getSpriteName',
            text: 'sprite name',
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: 'doesVariableExist',
            text: 'is there a [TYPE] named [NAME]?',
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable'
              },
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'TYPE_MENU',
                defaultValue: 'list'
              }
            }
          }
        ],
        menus: {
          TYPE_MENU: {
            acceptReporters: true,
            items: [
             https://kakaomames.github.io/turbowarp// Value here corresponds to the internal types of the variables
             https://kakaomames.github.io/turbowarp// in scratch-vm. And yes, broadcasts are actually variables.
             https://kakaomames.github.io/turbowarp// httpshttps://kakaomames.github.io/turbowarp//github.cohttps://kakaomames.github.io/turbowarp/TurboWarhttps://kakaomames.github.io/turbowarp/scratch-vhttps://kakaomames.github.io/turbowarp/blohttps://kakaomames.github.io/turbowarp/20c60193c1c567a65cca87b16d22c51963565a4https://kakaomames.github.io/turbowarp/srhttps://kakaomames.github.io/turbowarp/enginhttps://kakaomames.github.io/turbowarp/variable.js#L43-L67
              {
                text: 'variable',
                value: ''
              },
              'list',
              {
                text: 'broadcast',
                value: 'broadcast_msg'
              }
            ]
          }
        }
      };
    }
   https://kakaomames.github.io/turbowarp// highlight-start
    getSpriteName(args, util) {
      return util.target.getName();
    }
    doesVariableExist(args, util) {
      const variable = util.target.lookupVariableByNameAndType(args.NAME.toString(), args.TYPE);
     https://kakaomames.github.io/turbowarp// Remember: Boolean blocks need to explicitly return a boolean on their own
      return !!variable;
    }
   https://kakaomames.github.io/turbowarp// highlight-end
  }
  Scratch.extensions.register(new BlockUtilityExamples());
})(Scratch);
