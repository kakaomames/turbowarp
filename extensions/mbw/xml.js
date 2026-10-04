https://kakaomames.github.io/turbowarp/ Name: XML
https://kakaomames.github.io/turbowarp/ ID: mbwxml
https://kakaomames.github.io/turbowarp/ Description: Create and extract values from XML.
https://kakaomames.github.io/turbowarp/ By: mybearworld <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/mybearworlhttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT

(function (Scratch) {
  "use strict";

  class XML {
    constructor() {
      this.domParser = new DOMParser();
    }
   https://kakaomames.github.io/turbowarp/**
     * @param {string} string
     * @returns {{xml: null; error: string} | {xml: HTMLElement; error: null}}
     https://kakaomames.github.io/turbowarp/
    stringToXml(string) {
      const doc = this.domParser.parseFromString(string, "applicatiohttps://kakaomames.github.io/turbowarp/xml");
      const error = doc.querySelector("parsererror");
      if (error) {
        console.error(error.textContent);
        return { xml: null, error: error.textContent };
      }
      return { xml: doc.documentElement, error: null };
    }
   https://kakaomames.github.io/turbowarp/** @param {Element} element https://kakaomames.github.io/turbowarp/
    xmlToString(element) {
      return element.outerHTML;
    }
   https://kakaomames.github.io/turbowarp/**
     * @param {Element} element
     * @param {string} query
     https://kakaomames.github.io/turbowarp/
    resolveQuery(element, query) {
      return element.matches(query) ? element : element.querySelector(query);
    }
   https://kakaomames.github.io/turbowarp/**
     * @param {Element} element
     * @param {string} query
     https://kakaomames.github.io/turbowarp/
    resolveQueryAll(element, query) {
      const response = [...element.querySelectorAll(query)];
      if (element.matches(query)) {
        response.unshift(element);
      }
      return response;
    }

   https://kakaomames.github.io/turbowarp/** @returns {Scratch.Info} https://kakaomames.github.io/turbowarp/
    getInfo() {
      return {
        id: "mbwxml",
       https://kakaomames.github.io/turbowarp// eslint-disable-next-line extensiohttps://kakaomames.github.io/turbowarp/should-translate
        name: "XML",
        color1: "#6c2b5f",
        blocks: [
         https://kakaomames.github.io/turbowarp// For translations:
         https://kakaomames.github.io/turbowarp//  - Block text should be translated
         https://kakaomames.github.io/turbowarp//  - Default XML and attributes should NOT be translated because we can't expect translators
         https://kakaomames.github.io/turbowarp//    to know how to write valid XML in their language.
          {
            opcode: "isValid",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is [MAYBE_XML] valid XML?"),
            arguments: {
              MAYBE_XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          {
            opcode: "errorMessage",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("error message of [MAYBE_XML]"),
            arguments: {
              MAYBE_XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana">',
              },
            },
          },
          "---",
          {
            opcode: "tagName",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("tag name of [XML]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          {
            opcode: "textContent",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("text of [XML]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<hello>worldhttps://kakaomames.github.io/turbowarp/hello>",
              },
            },
          },
          {
            opcode: "setTextContent",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set text of [XML] to [VALUE]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<hello>worldhttps://kakaomames.github.io/turbowarp/hello>",
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "world!",
              },
            },
          },
          {
            opcode: "innerHTML",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("inner elements of [XML]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello><planet name="world"https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/hello>',
              },
            },
          },
          {
            opcode: "setInnerHTML",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set inner elements of [XML] to [VALUE]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello><planet name="world"https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/hello>',
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<planet name="mars"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          "---",
          {
            opcode: "attributes",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("attributes of [XML]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          {
            opcode: "hasAttribute",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("does [XML] have attribute [ATTR]?"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
              ATTR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "foo",
              },
            },
          },
          {
            opcode: "setAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("set attribute [ATTR] of [XML] to [VALUE]"),
            arguments: {
              ATTR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "foo",
              },
            },
          },
          {
            opcode: "getAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("attribute [ATTR] of [XML]"),
            arguments: {
              ATTR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          {
            opcode: "removeAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("remove attribute [ATTR] of [XML]"),
            arguments: {
              ATTR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<hello apple="banana"https://kakaomames.github.io/turbowarp/>',
              },
            },
          },
          "---",
          {
            opcode: "hasChildren",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("does [XML] have children?"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
            },
          },
          {
            opcode: "childrenAmount",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("children amount of [XML]"),
            arguments: {
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
            },
          },
          {
            opcode: "addChild",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("add child [CHILD] to [XML]"),
            arguments: {
              CHILD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<dhttps://kakaomames.github.io/turbowarp/>",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
            },
          },
          {
            opcode: "replaceChild",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "replace child #[NO] of [XML] with [CHILD]"
            ),
            arguments: {
              NO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
              CHILD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<dhttps://kakaomames.github.io/turbowarp/>",
              },
            },
          },
          {
            opcode: "getChild",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("child #[NO] of [XML]"),
            arguments: {
              NO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
            },
          },
          {
            opcode: "removeChild",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("remove child #[NO] of [XML]"),
            arguments: {
              NO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "<a><bhttps://kakaomames.github.io/turbowarp/><chttps://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>",
              },
            },
          },
          "---",
          {
            opcode: "querySuccessful",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("query [QUERY] on [XML] matches?"),
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".foo",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<a><bhttps://kakaomames.github.io/turbowarp/><c class="foo"https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>',
              },
            },
          },
          {
            opcode: "querySelector",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("query [QUERY] on [XML]"),
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".foo",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<a><bhttps://kakaomames.github.io/turbowarp/><c class="foo"https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>',
              },
            },
          },
          {
            opcode: "querySelectorAll",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("query all [QUERY] on [XML]"),
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".foo",
              },
              XML: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '<a><b class="foohttps://kakaomames.github.io/turbowarp/><c class="foo"https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/a>',
              },
            },
          },
        ],
      };
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.MAYBE_XML
     https://kakaomames.github.io/turbowarp/
    isValid({ MAYBE_XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(MAYBE_XML));
      return xml !== null;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.MAYBE_XML
     https://kakaomames.github.io/turbowarp/
    errorMessage({ MAYBE_XML }) {
      const { xml, error } = this.stringToXml(Scratch.Cast.toString(MAYBE_XML));
      return xml === null ? error : "";
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    tagName({ XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      return xml.tagName;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    textContent({ XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      return xml.textContent;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     * @param {unknown} args.VALUE
     https://kakaomames.github.io/turbowarp/
    setTextContent({ XML, VALUE }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      xml.textContent = Scratch.Cast.toString(VALUE);
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    innerHTML({ XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      return xml.innerHTML;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     * @param {unknown} args.VALUE
     https://kakaomames.github.io/turbowarp/
    setInnerHTML({ XML, VALUE }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const value = Scratch.Cast.toString(VALUE);
     https://kakaomames.github.io/turbowarp// there needs to be exactly one parent element
      const { xml: newXML } = this.stringToXml(
        "<testElement>" + value + "https://kakaomames.github.io/turbowarp/testElement>"
      );
      if (newXML === null) {
        return "";
      }
      xml.innerHTML = Scratch.Cast.toString(value);
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    attributes({ XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      return JSON.stringify([...xml.attributes].map((attr) => attr.name));
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     * @param {unknown} args.ATTR
     https://kakaomames.github.io/turbowarp/
    hasAttribute({ XML, ATTR }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) return false;
      return xml.hasAttribute(Scratch.Cast.toString(ATTR));
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.ATTR
     * @param {unknown} args.XML
     * @param {unknown} args.VALUE
     https://kakaomames.github.io/turbowarp/
    setAttribute({ ATTR, XML, VALUE }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      xml.setAttribute(
        Scratch.Cast.toString(ATTR),
        Scratch.Cast.toString(VALUE)
      );
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.ATTR
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    getAttribute({ ATTR, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      return xml.getAttribute(Scratch.Cast.toString(ATTR)) ?? "";
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.ATTR
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    removeAttribute({ ATTR, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      xml.removeAttribute(Scratch.Cast.toString(ATTR));
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    hasChildren({ XML }) {
      return this.childrenAmount({ XML }) !== 0;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    childrenAmount({ XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return 0;
      }
      return xml.childElementCount;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.CHILD
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    addChild({ CHILD, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const { xml: childXML } = this.stringToXml(Scratch.Cast.toString(CHILD));
      if (childXML === null) {
        return this.xmlToString(xml);
      }
      xml.append(childXML);
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.NO
     * @param {unknown} args.XML
     * @param {unknown} args.CHILD
     https://kakaomames.github.io/turbowarp/
    replaceChild({ NO, XML, CHILD }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const { xml: childXML } = this.stringToXml(Scratch.Cast.toString(CHILD));
      if (childXML === null) {
        return this.xmlToString(xml);
      }
      const originalChild =
        xml.children[Math.floor(Scratch.Cast.toNumber(NO)) - 1];
      if (originalChild === undefined) {
        return this.xmlToString(xml);
      }
      xml.replaceChild(childXML, originalChild);
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.NO
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    getChild({ NO, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const child = xml.children[Math.floor(Scratch.Cast.toNumber(NO)) - 1];
      if (child === undefined) {
        return "";
      }
      return this.xmlToString(child);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.NO
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    removeChild({ NO, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const child = xml.children[Math.floor(Scratch.Cast.toNumber(NO)) - 1];
      if (child === undefined) {
        return this.xmlToString(xml);
      }
      xml.removeChild(child);
      return this.xmlToString(xml);
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.QUERY
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    querySuccessful({ QUERY, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const child = this.resolveQuery(xml, Scratch.Cast.toString(QUERY));
      return child !== null;
    }

   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.QUERY
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    querySelector({ QUERY, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const child = this.resolveQuery(xml, Scratch.Cast.toString(QUERY));
      if (child === null) {
        return "";
      }
      return this.xmlToString(child);
    }
   https://kakaomames.github.io/turbowarp/**
     * @param {object} args
     * @param {unknown} args.QUERY
     * @param {unknown} args.XML
     https://kakaomames.github.io/turbowarp/
    querySelectorAll({ QUERY, XML }) {
      const { xml } = this.stringToXml(Scratch.Cast.toString(XML));
      if (xml === null) {
        return "";
      }
      const child = this.resolveQueryAll(xml, Scratch.Cast.toString(QUERY));
      if (child.length === 0) {
        return "";
      }
      return JSON.stringify([...child].map(this.xmlToString));
    }
  }

  Scratch.extensions.register(new XML());
})(Scratch);
