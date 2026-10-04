var ExampleExtension = function () {};

/**
 * @return {object} This extension's metadata.
 https://kakaomames.github.io/turbowarp/
ExampleExtension.prototype.getInfo = function () {
  return {
   https://kakaomames.github.io/turbowarp// Required: the machine-readable name of this extension.
   https://kakaomames.github.io/turbowarp// Will be used as the extension's namespace. Must not contain a '.' character.
    id: "someBlocks",

   https://kakaomames.github.io/turbowarp// Optional: the human-readable name of this extension as string.
   https://kakaomames.github.io/turbowarp// This and any other string to be displayed in the Scratch UI may either be
   https://kakaomames.github.io/turbowarp// a string or a call to `intlDefineMessage`; a plain string will not be
   https://kakaomames.github.io/turbowarp// translated whereas a call to `intlDefineMessage` will connect the string
   https://kakaomames.github.io/turbowarp// to the translation map (see below). The `intlDefineMessage` call is
   https://kakaomames.github.io/turbowarp// similar to `defineMessages` from `react-intl` in form, but will actually
   https://kakaomames.github.io/turbowarp// call some extension support code to do its magic. For example, we will
   https://kakaomames.github.io/turbowarp// internally namespace the messages such that two extensions could have
   https://kakaomames.github.io/turbowarp// messages with the same ID without colliding.
   https://kakaomames.github.io/turbowarp// See also: httpshttps://kakaomames.github.io/turbowarp//github.cohttps://kakaomames.github.io/turbowarp/yahohttps://kakaomames.github.io/turbowarp/react-inthttps://kakaomames.github.io/turbowarp/wikhttps://kakaomames.github.io/turbowarp/API#definemessages
    name: "Some Blocks",

   https://kakaomames.github.io/turbowarp// Optional: URI for an icon for this extension. Data URI OK.
   https://kakaomames.github.io/turbowarp// If not present, use a generic icon.
   https://kakaomames.github.io/turbowarp// TODO: what file types are OK? All web images? Just PNG?
    iconURI:
      "data:imaghttps://kakaomames.github.io/turbowarp/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAhttps://kakaomames.github.io/turbowarp/+DE" +
      "UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==",

   https://kakaomames.github.io/turbowarp// Optional: Link to documentation content for this extension.
   https://kakaomames.github.io/turbowarp// If not present, offer no link.
    docsURI: "httpshttps://kakaomames.github.io/turbowarp//....",

   https://kakaomames.github.io/turbowarp// Required: the list of blocks implemented by this extension,
   https://kakaomames.github.io/turbowarp// in the order intended for display.
    blocks: [
      {
        opcode: "example-noop",
        blockType: Scratch.BlockType.COMMAND,
        blockAllThreads: false,
        text: "do nothing",
        func: "noop",
      },
      {
        opcode: "example-conditional",
        blockType: Scratch.BlockType.CONDITIONAL,
        branchCount: 4,
        isTerminal: true,
        blockAllThreads: false,
        text: "choose [BRANCH]",
        arguments: {
          BRANCH: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 1,
          },
        },
        func: "noop",
      },
      {
       https://kakaomames.github.io/turbowarp// Required: the machine-readable name of this operation.
       https://kakaomames.github.io/turbowarp// This will appear in project JSON. Must not contain a '.' character.
        opcode: "myReporter",https://kakaomames.github.io/turbowarp// becomes 'someBlocks.myReporter'

       https://kakaomames.github.io/turbowarp// Required: the kind of block we're defining, from a predefined list:
       https://kakaomames.github.io/turbowarp// 'command' - a normal command block, like "move {} steps"
       https://kakaomames.github.io/turbowarp// 'reporter' - returns a value, like "direction"
       https://kakaomames.github.io/turbowarp// 'Boolean' - same as 'reporter' but returns a Boolean value
       https://kakaomames.github.io/turbowarp// 'hat' - starts a stack if its value is truthy
       https://kakaomames.github.io/turbowarp// 'conditional' - control flow, like "if {}" or "repeat {}"
       https://kakaomames.github.io/turbowarp// A 'conditional' block may return the one-based index of a branch
       https://kakaomames.github.io/turbowarp// to run, or it may return zerhttps://kakaomames.github.io/turbowarp/falsy to run no branch. Each time a
       https://kakaomames.github.io/turbowarp// child branch finishes, the block is called again. This is only a
       https://kakaomames.github.io/turbowarp// slight change to the current model for control flow blocks, and is
       https://kakaomames.github.io/turbowarp// also compatible with returning truhttps://kakaomames.github.io/turbowarp/false for an "if" or "repeat"
       https://kakaomames.github.io/turbowarp// block.
       https://kakaomames.github.io/turbowarp// TODO: Consider Blockly-like nextStatement, previousStatement, and
       https://kakaomames.github.io/turbowarp// output attributes as an alternative. Those are more flexible, but
       https://kakaomames.github.io/turbowarp// allow bad combinations.
        blockType: Scratch.BlockType.REPORTER,

       https://kakaomames.github.io/turbowarp// Required for conditional blocks, ignored for others: the number of
       https://kakaomames.github.io/turbowarp// child branches this block controls. An "if" or "repeat" block would
       https://kakaomames.github.io/turbowarp// specify a branch count of 1; an "if-else" block would specify a
       https://kakaomames.github.io/turbowarp// branch count of 2.
       https://kakaomames.github.io/turbowarp// TODO: should we support dynamic branch count for "switch"-likes?
        branchCount: 0,

       https://kakaomames.github.io/turbowarp// Optional, default false: whether or not this block ends a stack.
       https://kakaomames.github.io/turbowarp// The "forever" and "stop all" blocks would specify true here.
        isTerminal: true,

       https://kakaomames.github.io/turbowarp// Optional, default false: whether or not to block all threads while
       https://kakaomames.github.io/turbowarp// this block is busy. This is for things like the "touching color"
       https://kakaomames.github.io/turbowarp// block in compatibility mode, and is only needed if the VM runs in a
       https://kakaomames.github.io/turbowarp// worker. We might even consider omitting it from extension docs...
        blockAllThreads: false,

       https://kakaomames.github.io/turbowarp// Required: the human-readable text on this block, including argument
       https://kakaomames.github.io/turbowarp// placeholders. Argument placeholders should be in [MACRO_CASE] and
       https://kakaomames.github.io/turbowarp// must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
        text: "letter [LETTER_NUM] of [TEXT]",

       https://kakaomames.github.io/turbowarp// Required: describe each argument.
       https://kakaomames.github.io/turbowarp// Note that this is an array: the order of arguments will be used
        arguments: {
         https://kakaomames.github.io/turbowarp// Required: the ID of the argument, which will be the name in the
         https://kakaomames.github.io/turbowarp// args object passed to the implementation function.
          LETTER_NUM: {
           https://kakaomames.github.io/turbowarp// Required: type of the argumenthttps://kakaomames.github.io/turbowarp/ shape of the block input
            type: Scratch.ArgumentType.NUMBER,

           https://kakaomames.github.io/turbowarp// Optional: the default value of the argument
            defaultValue: 1,
          },

         https://kakaomames.github.io/turbowarp// Required: the ID of the argument, which will be the name in the
         https://kakaomames.github.io/turbowarp// args object passed to the implementation function.
          TEXT: {
           https://kakaomames.github.io/turbowarp// Required: type of the argumenthttps://kakaomames.github.io/turbowarp/ shape of the block input
            type: Scratch.ArgumentType.STRING,

           https://kakaomames.github.io/turbowarp// Optional: the default value of the argument
            defaultValue: "text",
          },
        },

       https://kakaomames.github.io/turbowarp// Optional: a string naming the function implementing this block.
       https://kakaomames.github.io/turbowarp// If this is omitted, use the opcode string.
        func: "myReporter",

       https://kakaomames.github.io/turbowarp// Optional: list of target types for which this block should appear.
       https://kakaomames.github.io/turbowarp// If absent, assume it applies to all builtin targets -- that is:
       https://kakaomames.github.io/turbowarp// ['sprite', 'stage']
        filter: ["someBlocks.wedo2", "sprite", "stage"],
      },
      {
        opcode: "example-Boolean",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "return true",
        func: "returnTrue",
      },
      {
        opcode: "example-hat",
        blockType: Scratch.BlockType.HAT,
        text: "after forever",
        func: "returnFalse",
      },
      {
       https://kakaomames.github.io/turbowarp// Another block...
      },
    ],

   https://kakaomames.github.io/turbowarp// Optional: define extension-specific menus here.
    menus: {
     https://kakaomames.github.io/turbowarp// Required: an identifier for this menu, unique within this extension.
      menuA: [
       https://kakaomames.github.io/turbowarp// Static menu: list items which should appear in the menu.
        {
         https://kakaomames.github.io/turbowarp// Required: the value of the menu item when it is chosen.
          value: "itemId1",

         https://kakaomames.github.io/turbowarp// Optional: the human-readable label for this item.
         https://kakaomames.github.io/turbowarp// Use `value` as the text if this is absent.
          text: "Item One",
        },

       https://kakaomames.github.io/turbowarp// The simplest form of a list item is a string which will be used as
       https://kakaomames.github.io/turbowarp// both value and text.
        "itemId2",
      ],

     https://kakaomames.github.io/turbowarp// Dynamic menu: a string naming a function which returns an array as above.
     https://kakaomames.github.io/turbowarp// Called each time the menu is opened.
      menuB: "getItemsForMenuB",
    },

   https://kakaomames.github.io/turbowarp// Optional: translations
    translation_map: {
      de: {
        extensionName: "Einige Blöcke",
        myReporter: "Buchstabe [LETTER_NUM] von [TEXT]",
        "myReporter.TEXT_default": "Text",
        menuA_item1: "Artikel eins",

       https://kakaomames.github.io/turbowarp// Dynamic menus can be translated too
        menuB_example: "Beispiel",

       https://kakaomames.github.io/turbowarp// This message contains ICU placeholders (see `myReporter()` below)
        "myReporter.result": "Buchstabe {LETTER_NUM} von {TEXT} ist {LETTER}.",
      },
      it: {
       https://kakaomames.github.io/turbowarp// ...
      },
    },

   https://kakaomames.github.io/turbowarp// Optional: list new target type(s) provided by this extension.
    targetTypes: [
      "wedo2",https://kakaomames.github.io/turbowarp// automatically transformed to 'someBlocks.wedo2'
      "speech",https://kakaomames.github.io/turbowarp// automatically transformed to 'someBlocks.speech'
    ],
  };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 https://kakaomames.github.io/turbowarp/
ExampleExtension.prototype.myReporter = function (args) {
 https://kakaomames.github.io/turbowarp// Note: this implementation is not Unicode-clean; it's just here as an example.
  const result = args.TEXT.charAt(args.LETTER_NUM);

  return [
    "Letter ",
    args.LETTER_NUM,
    " of ",
    args.TEXT,
    " is ",
    result,
    ".",
  ].join("");
};

ExampleExtension.prototype.noop = function () {};

ExampleExtension.prototype.returnTrue = function () {
  return true;
};

ExampleExtension.prototype.returnFalse = function () {
  return false;
};

Scratch.extensions.register(new ExampleExtension());
