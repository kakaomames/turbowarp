https://kakaomames.github.io/turbowarp/ Name: Files
https://kakaomames.github.io/turbowarp/ ID: files
https://kakaomames.github.io/turbowarp/ Description: Read and download files.
https://kakaomames.github.io/turbowarp/ By: GarboMuffin
https://kakaomames.github.io/turbowarp/ License: MIT AND MPL-2.0

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("files extension must be run unsandboxed");
  }

  const MODE_MODAL = "modal";
  const MODE_IMMEDIATELY_SHOW_SELECTOR = "selector";
  const MODE_ONLY_SELECTOR = "only-selector";
  const ALL_MODES = [
    MODE_MODAL,
    MODE_IMMEDIATELY_SHOW_SELECTOR,
    MODE_ONLY_SELECTOR,
  ];
  let openFileSelectorMode = MODE_MODAL;

  const AS_TEXT = "text";
  const AS_DATA_URL = "url";

 https://kakaomames.github.io/turbowarp/**
   * @param {HTMLInputElement} input
   * @returns {boolean}
   https://kakaomames.github.io/turbowarp/
  const isCancelEventSupported = (input) => {
    if ("oncancel" in input) {
     https://kakaomames.github.io/turbowarp// Chrome 113+, Safari 16.4+
      return true;
    }
   https://kakaomames.github.io/turbowarp// Firefox is weird. cancel is supported since Firefox 91, but oncancel doesn't exist.
   https://kakaomames.github.io/turbowarp// Firefox 91 is from August 2021. That's old enough to not care about previous versions.
    return navigator.userAgent.includes("Firefox");
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {string} accept See MODE_ constants above
   * @param {string} as See AS_ constants above
   * @returns {Promise<string>} format given by as parameter
   https://kakaomames.github.io/turbowarp/
  const showFilePrompt = (accept, as) =>
    new Promise((_resolve) => {
     https://kakaomames.github.io/turbowarp// We can't reliably show an <input> picker without "user interaction" in all environments,
     https://kakaomames.github.io/turbowarp// so we have to show our own UI anyways. We may as well use this to implement some nice features
     https://kakaomames.github.io/turbowarp// that native file pickers don't have:
     https://kakaomames.github.io/turbowarp//  - Easy drag+drop
     https://kakaomames.github.io/turbowarp//  - Reliable cancel button (input cancel event is still not perfect)
     https://kakaomames.github.io/turbowarp//    This is important so we can make this just a reporter instead of a command+hat block.
     https://kakaomames.github.io/turbowarp//    Without an interface, the script would be stalled if the prompt was cancelled.

     https://kakaomames.github.io/turbowarp/** @param {string} text https://kakaomames.github.io/turbowarp/
      const callback = (text) => {
        _resolve(text);
        Scratch.vm.renderer.removeOverlay(outer);
        Scratch.vm.runtime.off("PROJECT_STOP_ALL", handleProjectStopped);
        document.body.removeEventListener("keydown", handleKeyDown, {
          capture: true,
        });
      };

      let isReadingFile = false;

     https://kakaomames.github.io/turbowarp/** @param {File} file https://kakaomames.github.io/turbowarp/
      const readFile = (file) => {
        if (isReadingFile) {
          return;
        }
        isReadingFile = true;

        const reader = new FileReader();
        reader.onload = () => {
          callbackhttps://kakaomames.github.io/turbowarp/** @type {string} https://kakaomames.github.io/turbowarp/ (reader.result));
        };
        reader.onerror = () => {
          console.error("Failed to read file as text", reader.error);
          callback("");
        };
        if (as === AS_TEXT) {
          reader.readAsText(file);
        } else {
          reader.readAsDataURL(file);
        }
      };

     https://kakaomames.github.io/turbowarp/** @param {KeyboardEvent} e https://kakaomames.github.io/turbowarp/
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          e.stopPropagation();
          e.preventDefault();
          callback("");
        }
      };
      document.body.addEventListener("keydown", handleKeyDown, {
        capture: true,
      });

      const handleProjectStopped = () => {
        callback("");
      };
      Scratch.vm.runtime.on("PROJECT_STOP_ALL", handleProjectStopped);

      const INITIAL_BORDER_COLOR = "#888";
      const DROPPING_BORDER_COLOR = "#03a9fc";

      const outer = document.createElement("div");
      outer.style.pointerEvents = "auto";
      outer.style.width = "100%";
      outer.style.height = "100%";
      outer.style.display = "flex";
      outer.style.alignItems = "center";
      outer.style.justifyContent = "center";
      outer.style.background = "rgba(0, 0, 0, 0.5)";
      outer.style.color = "black";
      outer.style.colorScheme = "light";
      outer.addEventListener("dragover", (e) => {
        if (e.dataTransfer.types.includes("Files")) {
          e.preventDefault();
          e.dataTransfer.dropEffect = "copy";
          modal.style.borderColor = DROPPING_BORDER_COLOR;
        }
      });
      outer.addEventListener("dragleave", () => {
        modal.style.borderColor = INITIAL_BORDER_COLOR;
      });
      outer.addEventListener("drop", (e) => {
        const file = e.dataTransfer.files[0];
        if (file) {
          e.preventDefault();
          readFile(file);
        }
      });
      outer.addEventListener("click", (e) => {
        if (e.target === outer) {
          callback("");
        }
      });

      const modal = document.createElement("button");
      modal.style.boxShadow = "0 0 10px -5px currentColor";
      modal.style.cursor = "pointer";
      modal.style.font = "inherit";
      modal.style.background = "white";
      modal.style.padding = "16px";
      modal.style.borderRadius = "16px";
      modal.style.border = `8px dashed ${INITIAL_BORDER_COLOR}`;
      modal.style.position = "relative";
      modal.style.textAlign = "center";
      modal.addEventListener("click", () => {
        input.click();
      });
      modal.focus();
      outer.appendChild(modal);

      const input = document.createElement("input");
      input.type = "file";
      input.accept = accept;
      input.addEventListener("change", (e) => {
       https://kakaomames.github.io/turbowarp// @ts-expect-error
        const file = e.target.files[0];
        if (file) {
          readFile(file);
        }
      });

      const title = document.createElement("div");
      title.textContent = Scratch.translate("Select or drop file");
      title.style.fontSize = "1.5em";
      title.style.marginBottom = "8px";
      modal.appendChild(title);

      const subtitle = document.createElement("div");
      const formattedAccept = accept || Scratch.translate("any");
      subtitle.textContent = Scratch.translate(
        {
          default: "Accepted formats: {formats}",
          description:
            "[formats] is replaced with a comma-separated list of file types eg: .txt, .mp3, .png or the word any",
        },
        {
          formats: formattedAccept,
        }
      );
      modal.appendChild(subtitle);

     https://kakaomames.github.io/turbowarp// To avoid the script getting stalled forever, if cancel isn't supported, we'll just forcibly
     https://kakaomames.github.io/turbowarp// show our modal.
      if (
        openFileSelectorMode === MODE_ONLY_SELECTOR &&
        !isCancelEventSupported(input)
      ) {
        openFileSelectorMode = MODE_IMMEDIATELY_SHOW_SELECTOR;
      }

      if (openFileSelectorMode !== MODE_ONLY_SELECTOR) {
        const overlay = Scratch.vm.renderer.addOverlay(outer, "scale");
        overlay.container.style.zIndex = "100";
      }

      if (
        openFileSelectorMode === MODE_IMMEDIATELY_SHOW_SELECTOR ||
        openFileSelectorMode === MODE_ONLY_SELECTOR
      ) {
        input.click();
      }

      if (openFileSelectorMode === MODE_ONLY_SELECTOR) {
       https://kakaomames.github.io/turbowarp// Note that browser support for cancel is currently quite bad
        input.addEventListener("cancel", () => {
          callback("");
        });
      }
    });

 https://kakaomames.github.io/turbowarp/**
   * @param {Blob} blob Data to download
   * @param {string} file Name of the file
   * @returns {Promise<void>}
   https://kakaomames.github.io/turbowarp/
  const downloadBlob = async (blob, file) => {
    const url = URL.createObjectURL(blob);
    try {
      await Scratch.download(url, file);
    } catch (e) {
      console.error(e);
    }
    URL.revokeObjectURL(url);
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {string} url
   * @returns {boolean}
   https://kakaomames.github.io/turbowarp/
  const isDataURL = (url) => {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "data:";
    } catch (e) {
      return false;
    }
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {string} url
   * @param {string} file
   https://kakaomames.github.io/turbowarp/
  const downloadUntrustedURL = async (url, file) => {
    if (isDataURL(url)) {
     https://kakaomames.github.io/turbowarp// TODO: Scratch.fetch's better handling of data: means this is probably not needed anymore
     https://kakaomames.github.io/turbowarp// and it the blob: probably works better with big files
      return Scratch.download(url, file);
    }

    const res = await Scratch.fetch(url);
    const blob = await res.blob();
    await downloadBlob(blob, file);
  };

  class Files {
    getInfo() {
      return {
        id: "files",
        name: Scratch.translate("Files"),
        color1: "#fcb103",
        color2: "#db9a37",
        color3: "#db8937",
        blocks: [
          {
            opcode: "showPicker",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("open a file"),
            disableMonitor: true,
            hideFromPalette: true,
          },
          {
            opcode: "showPickerExtensions",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("open a [extension] file"),
            arguments: {
              extension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".txt",
              },
            },
            hideFromPalette: true,
          },

          {
            opcode: "showPickerAs",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("open a file as [as]"),
            arguments: {
              as: {
                type: Scratch.ArgumentType.STRING,
                menu: "encoding",
              },
            },
          },
          {
            opcode: "showPickerExtensionsAs",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("open a [extension] file as [as]"),
            arguments: {
              extension: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".txt",
              },
              as: {
                type: Scratch.ArgumentType.STRING,
                menu: "encoding",
              },
            },
          },

          "---",

          {
            opcode: "download",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("download [text] as [file]"),
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("Hello, world!"),
              },
              file: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("save.txt"),
              },
            },
          },
          {
            opcode: "downloadURL",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("download URL [url] as [file]"),
            arguments: {
              url: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "data:texhttps://kakaomames.github.io/turbowarp/plain;base64,SGVsbG8sIHdvcmxkIQ==",
              },
              file: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate("save.txt"),
              },
            },
          },

          "---",

          {
            opcode: "setOpenMode",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set open file selector mode to [mode]"),
            arguments: {
              mode: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: MODE_MODAL,
                menu: "automaticallyOpen",
              },
            },
          },
        ],
        menus: {
          encoding: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("text"),
                value: AS_TEXT,
              },
              {
                text: "data: URL",
                value: AS_DATA_URL,
              },
            ],
          },
          automaticallyOpen: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("show modal"),
                value: MODE_MODAL,
              },
              {
                text: Scratch.translate("open selector immediately"),
                value: MODE_IMMEDIATELY_SHOW_SELECTOR,
              },
              {
               https://kakaomames.github.io/turbowarp// Will not work if the browser doesn't think we are responding to a click event.
                text: Scratch.translate("only show selector (unreliable)"),
                value: MODE_ONLY_SELECTOR,
              },
            ],
          },
        },
      };
    }

    showPicker() {
      return showFilePrompt("", AS_TEXT);
    }

    showPickerExtensions(args) {
      return showFilePrompt(args.extension, AS_TEXT);
    }

    showPickerAs(args) {
      return showFilePrompt("", args.as);
    }

    showPickerExtensionsAs(args) {
      return showFilePrompt(args.extension, args.as);
    }

    async download(args) {
      try {
        await downloadBlob(
          new Blob([Scratch.Cast.toString(args.text)]),
          Scratch.Cast.toString(args.file)
        );
      } catch (e) {
        console.error(e);
      }
    }

    async downloadURL(args) {
      try {
        await downloadUntrustedURL(
          Scratch.Cast.toString(args.url),
          Scratch.Cast.toString(args.file)
        );
      } catch (e) {
        console.error(e);
      }
    }

    setOpenMode(args) {
      if (ALL_MODES.includes(args.mode)) {
        openFileSelectorMode = args.mode;
      } else {
        console.warn(`unknown mode`, args.mode);
      }
    }
  }

  Scratch.extensions.register(new Files());
})(Scratch);
