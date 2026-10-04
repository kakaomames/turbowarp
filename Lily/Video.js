https://kakaomames.github.io/turbowarp/ Name: Video
https://kakaomames.github.io/turbowarp/ ID: lmsVideo
https://kakaomames.github.io/turbowarp/ Description: Play videos from URLs.
https://kakaomames.github.io/turbowarp/ By: LilyMakesThings <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/LilyMakesThinghttps://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ By: SharkPool
https://kakaomames.github.io/turbowarp/ By: Fath11 <httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/fath1https://kakaomames.github.io/turbowarp/>
https://kakaomames.github.io/turbowarp/ License: MIT AND LGPL-3.0

https://kakaomames.github.io/turbowarp/ Attribution is not required, but greatly appreciated.

(function (Scratch) {
  "use strict";

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const renderer = vm.renderer;
  const Cast = Scratch.Cast;

 https://kakaomames.github.io/turbowarp// In some versions of Chrome, it seems that trying to render a <video> returns pure black
 https://kakaomames.github.io/turbowarp// if it's not in the DOM in a place the browser thinks is visible. That means we can't
 https://kakaomames.github.io/turbowarp// use display: none.
 https://kakaomames.github.io/turbowarp// See httpshttps://kakaomames.github.io/turbowarp//github.cohttps://kakaomames.github.io/turbowarp/TurboWarhttps://kakaomames.github.io/turbowarp/scratch-rendehttps://kakaomames.github.io/turbowarp/issuehttps://kakaomames.github.io/turbowarp/12
  const elementContainer = document.createElement("div");
  elementContainer.className = "tw-extensions-lily-videos-container";
  elementContainer.style.pointerEvents = "none";
  elementContainer.style.position = "absolute";
  elementContainer.style.opacity = "0";
  elementContainer.style.width = "0";
  elementContainer.style.height = "0";
  elementContainer.style.visibility = "hidden";
  elementContainer.ariaHidden = "true";
  document.body.appendChild(elementContainer);

  const BitmapSkin = runtime.renderer.exports.BitmapSkin;
  class VideoSkin extends BitmapSkin {
    constructor(id, renderer, videoName, videoSrc) {
      super(id, renderer);

     https://kakaomames.github.io/turbowarp/** @type {string} https://kakaomames.github.io/turbowarp/
      this.videoName = videoName;

     https://kakaomames.github.io/turbowarp/** @type {string} https://kakaomames.github.io/turbowarp/
      this.videoSrc = videoSrc;

     https://kakaomames.github.io/turbowarp/**
       * Base volume as set by the scripts in the project, from 0 to 1.
       * Does not account for eg. the project being muted.
       * @type {number}
       https://kakaomames.github.io/turbowarp/
      this.videoVolume = 1;

      this.videoError = false;

      this.readyPromise = new Promise((resolve) => {
        this.readyCallback = resolve;
      });

      this.videoElement = document.createElement("video");
     https://kakaomames.github.io/turbowarp// Need to set non-zero dimensions, otherwise scratch-render thinks this is an empty image
      this.videoElement.width = 1;
      this.videoElement.height = 1;
      this.videoElement.crossOrigin = "anonymous";
      this.videoElement.playsInline = true;
      this.videoElement.onloadeddata = () => {
       https://kakaomames.github.io/turbowarp// First frame loaded
        this.readyCallback();
        this.markVideoDirty();
      };
      this.videoElement.onerror = () => {
        this.videoError = true;
        this.readyCallback();
        this.markVideoDirty();
      };
      this.videoElement.src = videoSrc;
      this.videoElement.currentTime = 0;

     https://kakaomames.github.io/turbowarp// <video> must be in the DOM for it to render (see comments above)
      elementContainer.appendChild(this.videoElement);
      this.videoElement.tabIndex = -1;

      this.videoDirty = true;

      this.reuploadVideo();
    }

    reuploadVideo() {
      this.videoDirty = false;
      if (this.videoError) {
       https://kakaomames.github.io/turbowarp// Draw an image that looks similar to Scratch's normal costume loading errors
        const canvas = document.createElement("canvas");
        canvas.width = this.videoElement.videoWidth || 128;
        canvas.height = this.videoElement.videoHeight || 128;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.fillStyle = "#cccccc";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const fontSize = Math.min(canvas.width, canvas.height);
          ctx.fillStyle = "#000000";
          ctx.font = `${fontSize}px serif`;
          ctx.textBaseline = "middle";
          ctx.textAlign = "center";
          ctx.fillText("?", canvas.widthhttps://kakaomames.github.io/turbowarp/ 2, canvas.heighthttps://kakaomames.github.io/turbowarp/ 2);
        } else {
         https://kakaomames.github.io/turbowarp// guess we can't draw the error then
        }

        this.setBitmap(canvas);
      } else {
        this.setBitmap(this.videoElement);
      }
    }

    markVideoDirty() {
      this.videoDirty = true;
      this.emitWasAltered();
    }

    updateVolume() {
      const projectVolume = runtime.audioEngine.inputNode.gain.value;
      const trueVolume = this.videoVolume * projectVolume;
      this.videoElement.volume = trueVolume;
    }

    get size() {
      if (this.videoDirty) {
        this.reuploadVideo();
      }
      return super.size;
    }

    getTexture(scale) {
      if (this.videoDirty) {
        this.reuploadVideo();
      }
      return super.getTexture(scale);
    }

    dispose() {
      super.dispose();
      this.videoElement.pause();
      this.videoElement.remove();
    }
  }

  class Video {
    constructor() {
     https://kakaomames.github.io/turbowarp/** @type {Record<string, VideoSkin>} https://kakaomames.github.io/turbowarp/
      this.videos = Object.create(null);

      runtime.on("PROJECT_STOP_ALL", () => this.resetEverything());
      runtime.on("PROJECT_START", () => this.resetEverything());

      runtime.on("BEFORE_EXECUTE", () => {
        for (const skin of renderer._allSkins) {
          if (skin instanceof VideoSkin) {
            skin.updateVolume();
            if (!skin.videoElement.paused) {
              skin.markVideoDirty();
            }
          }
        }
      });

      runtime.on("RUNTIME_PAUSED", () => {
        for (const skin of renderer._allSkins) {
          if (skin instanceof VideoSkin) {
            skin.videoElement.pause();
            skin.markVideoDirty();
          }
        }
      });

      runtime.on("RUNTIME_UNPAUSED", () => {
        for (const skin of renderer._allSkins) {
          if (skin instanceof VideoSkin) {
            skin.videoElement.play();
            skin.markVideoDirty();
          }
        }
      });
    }

    getInfo() {
      return {
        id: "lmsVideo",
        color1: "#557882",
        name: Scratch.translate("Video"),
        docsURI: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/Lilhttps://kakaomames.github.io/turbowarp/Video",
        blocks: [
          {
            blockType: Scratch.BlockType.XML,
            xml: "<sep gap='6https://kakaomames.github.io/turbowarp/><label text='Only direct downloads will work, usehttps://kakaomames.github.io/turbowarp/><sep gap='-12https://kakaomames.github.io/turbowarp/><label text='the Iframe extension for YouTube.https://kakaomames.github.io/turbowarp/><sep gap='24https://kakaomames.github.io/turbowarp/>",
          },
          {
            opcode: "loadVideoURL",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("load video from URL [URL] as [NAME]"),
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "httpshttps://kakaomames.github.io/turbowarp//extensions.turbowarp.orhttps://kakaomames.github.io/turbowarp/dango.mp4",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "deleteVideoURL",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("delete video [NAME]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "getLoadedVideos",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("loaded videos"),
          },
          "---",
          {
            opcode: "showVideo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("show video [NAME] on [TARGET]"),
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "targets",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "stopShowingVideo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop showing video on [TARGET]"),
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "targets",
              },
            },
          },
          {
            opcode: "getCurrentVideo",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("current video on [TARGET]"),
            arguments: {
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: "targets",
              },
            },
          },
          "---",
          {
            opcode: "startVideo",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("start video [NAME] at [DURATION] seconds"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              DURATION: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "startVideoAndWait",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "start video [NAME] at [DURATION] seconds and wait until done"
            ),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              DURATION: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
          },
          {
            opcode: "getAttribute",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("[ATTRIBUTE] of video [NAME]"),
            arguments: {
              ATTRIBUTE: {
                type: Scratch.ArgumentType.STRING,
                menu: "attribute",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "getFrame",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "screenshot of video [NAME] at current time"
            ),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          "---",
          {
            opcode: "pause",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("pause video [NAME]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "resume",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("resume video [NAME]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
            },
          },
          {
            opcode: "toggleLooping",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set video [NAME] to [LOOP]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              LOOP: {
                type: Scratch.ArgumentType.STRING,
                menu: "playbackType",
              },
            },
          },
          {
            opcode: "getState",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("video [NAME] is [STATE]?"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              STATE: {
                type: Scratch.ArgumentType.STRING,
                menu: "state",
              },
            },
          },
          "---",
          {
            opcode: "setVolume",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("set volume of video [NAME] to [VALUE]"),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },
          {
            opcode: "setPlaybackRate",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate(
              "set playback rate of video [NAME] to [RATE]"
            ),
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "my video",
              },
              RATE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "2",
              },
            },
          },
        ],
        menus: {
          targets: {
            acceptReporters: true,
            items: "_getTargets",
          },
          state: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate("playing"),
                value: "playing",
              },
              {
                text: Scratch.translate("paused"),
                value: "paused",
              },
              {
                text: Scratch.translate("looping"),
                value: "looping",
              },
            ],
          },
          attribute: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("current time"),
                value: "current time",
              },
              {
                text: Scratch.translate("duration"),
                value: "duration",
              },
              {
                text: Scratch.translate("volume"),
                value: "volume",
              },
              {
                text: Scratch.translate("width"),
                value: "width",
              },
              {
                text: Scratch.translate("height"),
                value: "height",
              },
              {
                text: Scratch.translate("playback rate"),
                value: "playback rate",
              },
            ],
          },
          playbackType: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("loop"),
                value: "loop",
              },
              {
                text: Scratch.translate("not loop"),
                value: "not loop",
              },
            ],
          },
        },
      };
    }

    resetEverything() {
      for (const { videoElement } of Object.values(this.videos)) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }

      for (const target of runtime.targets) {
        const drawable = renderer._allDrawables[target.drawableID];
        if (drawable.skin instanceof VideoSkin) {
          target.setCostume(target.currentCostume);
        }
      }
    }

    async loadVideoURL(args) {
     https://kakaomames.github.io/turbowarp// Always delete the old video with the same name, if it exists.
      this.deleteVideoURL(args);

      const videoName = Cast.toString(args.NAME);
      const url = Cast.toString(args.URL);

      if (
        url.startsWith("httpshttps://kakaomames.github.io/turbowarp//www.youtube.cohttps://kakaomames.github.io/turbowarp/") ||
        url.startsWith("httpshttps://kakaomames.github.io/turbowarp//youtube.cohttps://kakaomames.github.io/turbowarp/") ||
        url.startsWith("httpshttps://kakaomames.github.io/turbowarp//youtu.bhttps://kakaomames.github.io/turbowarp/")
      ) {
        alert(
          [
            "The video extension does not support YouTube links.",
            "You can use the Iframe extension instead.",
          ].join("\n\n")
        );
        return;
      }

      if (!(await Scratch.canFetch(url))) return;

      const skinId = renderer._nextSkinId++;
      const skin = new VideoSkin(skinId, renderer, videoName, url);
      renderer._allSkins[skinId] = skin;
      this.videos[videoName] = skin;

      return skin.readyPromise;
    }

    deleteVideoURL(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      for (const target of runtime.targets) {
        const drawable = renderer._allDrawables[target.drawableID];
        if (drawable && drawable.skin === videoSkin) {
          target.setCostume(target.currentCostume);
        }
      }

      renderer.destroySkin(videoSkin.id);
      Reflect.deleteProperty(this.videos, videoName);
    }

    getLoadedVideos() {
      return JSON.stringify(Object.keys(this.videos));
    }

    showVideo(args, util) {
      const targetName = Cast.toString(args.TARGET);
      const videoName = Cast.toString(args.NAME);
      const target = this._getTargetFromMenu(targetName, util);
      const videoSkin = this.videos[videoName];
      if (!target || !videoSkin) return;

      vm.renderer.updateDrawableSkinId(target.drawableID, videoSkin._id);
    }

    stopShowingVideo(args, util) {
      const targetName = Cast.toString(args.TARGET);
      const target = this._getTargetFromMenu(targetName, util);
      if (!target) return;

      target.setCostume(target.currentCostume);
    }

    getCurrentVideo(args, util) {
      const targetName = Cast.toString(args.TARGET);
      const target = this._getTargetFromMenu(targetName, util);
      if (!target) return;

      const drawable = renderer._allDrawables[target.drawableID];
      const skin = drawable && drawable.skin;
      return skin instanceof VideoSkin ? skin.videoName : "";
    }

    startVideo(args) {
      const videoName = Cast.toString(args.NAME);
      const duration = Cast.toNumber(args.DURATION);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      videoSkin.videoElement.play();
      videoSkin.videoElement.currentTime = duration;
      videoSkin.markVideoDirty();
    }

    startVideoAndWait(args, util) {
      const videoName = Cast.toString(args.NAME);
      const duration = Cast.toNumber(args.DURATION);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      if (!util.stackFrame.hasPlayed) {
        videoSkin.videoElement.play();
        videoSkin.videoElement.currentTime = duration;
        videoSkin.markVideoDirty();

        util.stackFrame.hasPlayed = true;
      }

      if (!videoSkin.videoElement.ended) {
        util.yield();
      }
    }

    getAttribute(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return 0;

      switch (args.ATTRIBUTE) {
        case "current time":
          return videoSkin.videoElement.currentTime;
        case "duration":
          return videoSkin.videoElement.duration;
        case "volume":
          return videoSkin.videoVolume * 100;
        case "width":
          return videoSkin.size[0];
        case "height":
          return videoSkin.size[1];
        case "playback rate":
          return videoSkin.videoElement.playbackRate;
        default:
          return 0;
      }
    }

    getFrame(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return "";

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.warn("2D rendering context not available");
        return "";
      }

      const videoElement = videoSkin.videoElement;
      if (videoElement.videoWidth === 0 || videoElement.videoHeight === 0) {
        return "";
      }

      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0);
      return canvas.toDataURL();
    }

    pause(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      videoSkin.videoElement.pause();
      videoSkin.markVideoDirty();
    }

    resume(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      videoSkin.videoElement.play();
      videoSkin.markVideoDirty();
    }

    toggleLooping(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      videoSkin.videoElement.loop = args.LOOP == "loop" ? true : false;
    }

    getState(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return args.STATE === "paused";

      switch (args.STATE) {
        case "playing":
          return !videoSkin.videoElement.paused;
        case "paused":
          return videoSkin.videoElement.paused;
        case "looping":
          return videoSkin.videoElement.loop;
        default:
          return false;
      }
    }

    setVolume(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      const value = Cast.toNumber(args.VALUE);
      videoSkin.videoVolume = Math.min(1, Math.max(0, valuehttps://kakaomames.github.io/turbowarp/ 100));
      videoSkin.updateVolume();
    }

    setPlaybackRate(args) {
      const videoName = Cast.toString(args.NAME);
      const videoSkin = this.videos[videoName];
      if (!videoSkin) return;

      try {
        const value = Cast.toNumber(args.RATE);
       https://kakaomames.github.io/turbowarp// Supposedly negative values will work in Safari but people probably shouldn't rely
       https://kakaomames.github.io/turbowarp// on that since others don't.
        videoSkin.videoElement.playbackRate = Math.max(0, value);
      } catch (e) {
        console.warn(e);
      }
    }

   https://kakaomames.github.io/turbowarp/** @returns {VM.Target|undefined} https://kakaomames.github.io/turbowarp/
    _getTargetFromMenu(targetName, util) {
      if (targetName === "_myself_") return util.target;
      if (targetName === "_stage_") return runtime.getTargetForStage();
      return Scratch.vm.runtime.getSpriteTargetByName(targetName);
    }

    _getTargets() {
      let spriteNames = [
        { text: "myself", value: "_myself_" },
        { text: "Stage", value: "_stage_" },
      ];
      const targets = Scratch.vm.runtime.targets
        .filter((target) => target.isOriginal && !target.isStage)
        .map((target) => target.getName());
      spriteNames = spriteNames.concat(targets);
      return spriteNames;
    }
  }

  const extension = new Video();
  Scratch.extensions.register(extension);
  Scratch.vm.runtime.ext_lmsVideo = extension;
})(Scratch);
