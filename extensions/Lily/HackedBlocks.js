https://kakaomames.github.io/turbowarp/ Name: Hidden Block Collection
https://kakaomames.github.io/turbowarp/ ID: lmsHackedBlocks
https://kakaomames.github.io/turbowarp/ Description: Various "hacked blocks" that work in Scratch but are not visible in the palette.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ By: pumpkinhasapatch
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0
https://kakaomames.github.io/turbowarp/ Scratch-compatible: true

(function (Scratch) {
  "use strict";

  class HackedBlocks {
    getInfo() {
      return {
        id: "lmsHackedBlocks",
        name: Scratch.translate("Hidden Blocks"),
        docsURI: "httpshttps://kakaomames.github.io/turbowarp//en.scratch-wiki.infhttps://kakaomames.github.io/turbowarp/wikhttps://kakaomames.github.io/turbowarp/Hidden_Blocks#Events",
        blocks: [
         https://kakaomames.github.io/turbowarp// Use the sensing_touchingobjectmenu instead of event_ to also list sprites, since the block supports it
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="event_whentouchingobject"><value name="TOUCHINGOBJECTMENU"><shadow type="sensing_touchingobjectmenuhttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/value>https://kakaomames.github.io/turbowarp/block>',
          },
          "---",
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block id="for_each" type="control_for_each"><value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10https://kakaomames.github.io/turbowarp/field>https://kakaomames.github.io/turbowarp/shadow>https://kakaomames.github.io/turbowarp/value>https://kakaomames.github.io/turbowarp/block>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block id="while" type="control_whilehttps://kakaomames.github.io/turbowarp/>',
          },
          "---",
         https://kakaomames.github.io/turbowarp// Counting blocks that function similarly to variables
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_get_counterhttps://kakaomames.github.io/turbowarp/>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_incr_counterhttps://kakaomames.github.io/turbowarp/>',
          },
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="control_clear_counterhttps://kakaomames.github.io/turbowarp/>',
          },
          "---",
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="operator_round"><value name="NUM"><shadow type="note"><field name="NOTE">60https://kakaomames.github.io/turbowarp/field>https://kakaomames.github.io/turbowarp/shadow>https://kakaomames.github.io/turbowarp/value>https://kakaomames.github.io/turbowarp/block>',
          },
          "---",
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="operator_join"><value name="STRING1"><shadow type="colour_pickerhttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/value><value name="STRING2"><shadow type="text"><field name="TEXT">https://kakaomames.github.io/turbowarp/field>https://kakaomames.github.io/turbowarp/shadow>https://kakaomames.github.io/turbowarp/value>https://kakaomames.github.io/turbowarp/block>',
          },
         https://kakaomames.github.io/turbowarp// Dot matrix input from the micro:bit extension
         https://kakaomames.github.io/turbowarp// Returns a 5x5 binary grid of pixels depending on what was drawn. White pixels are 1 and green pixels are 0
          {
            blockType: Scratch.BlockType.XML,
            xml: '<block type="operator_join"><value name="STRING1"><shadow type="matrix"><field name="MATRIX">1111110101001000010001110https://kakaomames.github.io/turbowarp/field>https://kakaomames.github.io/turbowarp/shadow>https://kakaomames.github.io/turbowarp/value><value name="STRING2"><shadow type="text"><field name="TEXT">https://kakaomames.github.io/turbowarp/field>https://kakaomames.github.io/turbowarp/shadow>https://kakaomames.github.io/turbowarp/value>https://kakaomames.github.io/turbowarp/block>',
          },
        ],
      };
    }
  }

  Scratch.extensions.register(new HackedBlocks());
})(Scratch);
