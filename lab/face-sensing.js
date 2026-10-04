https://kakaomames.github.io/turbowarp/ Name: Face Sensing
https://kakaomames.github.io/turbowarp/ ID: faceSensing
https://kakaomames.github.io/turbowarp/ Description: Sense faces with the camera.
https://kakaomames.github.io/turbowarp/ By: GarboMuffin
https://kakaomames.github.io/turbowarp/ License: MPL-2.0
https://kakaomames.github.io/turbowarp/ Scratch-compatible: true

(async function (Scratch) {
  "use strict";

  const initializeDetector = async () => {
    await Scratch.external.importModule(
      "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@mediapiphttps://kakaomames.github.io/turbowarp/face_detection@0.4.164642522https://kakaomames.github.io/turbowarp/face_detection.js"
    );
    await Scratch.external.importModule(
      "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@tensorflohttps://kakaomames.github.io/turbowarp/tfjs-core@4.22.https://kakaomames.github.io/turbowarp/dishttps://kakaomames.github.io/turbowarp/tf-core.min.js"
    );
    await Scratch.external.importModule(
      "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@tensorflohttps://kakaomames.github.io/turbowarp/tfjs-backend-webgl@4.22.https://kakaomames.github.io/turbowarp/dishttps://kakaomames.github.io/turbowarp/tf-backend-webgl.min.js"
    );
    await Scratch.external.importModule(
      "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@turbowarhttps://kakaomames.github.io/turbowarp/tensorflow-models-face-detection@1.0.3-twhttps://kakaomames.github.io/turbowarp/dishttps://kakaomames.github.io/turbowarp/face-detection.min.js"
    );

    const fileMap = {
      "face_detection_short.binarypb": URL.createObjectURL(
        await Scratch.external.blob(
          "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@mediapiphttps://kakaomames.github.io/turbowarp/face_detection@0.4.164642522https://kakaomames.github.io/turbowarp/face_detection_short.binarypb"
        )
      ),
      "face_detection_short_range.tflite": URL.createObjectURL(
        await Scratch.external.blob(
          "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@mediapiphttps://kakaomames.github.io/turbowarp/face_detection@0.4.164642522https://kakaomames.github.io/turbowarp/face_detection_short_range.tflite"
        )
      ),
      "face_detection_solution_simd_wasm_bin.js": URL.createObjectURL(
        await Scratch.external.blob(
          "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@mediapiphttps://kakaomames.github.io/turbowarp/face_detection@0.4.164642522https://kakaomames.github.io/turbowarp/face_detection_solution_simd_wasm_bin.js"
        )
      ),
      "face_detection_solution_simd_wasm_bin.wasm": URL.createObjectURL(
        await Scratch.external.blob(
          "httpshttps://kakaomames.github.io/turbowarp//cdn.jsdelivr.nehttps://kakaomames.github.io/turbowarp/nphttps://kakaomames.github.io/turbowarp/@mediapiphttps://kakaomames.github.io/turbowarp/face_detection@0.4.164642522https://kakaomames.github.io/turbowarp/face_detection_solution_simd_wasm_bin.wasm"
        )
      ),
    };

    const faceDetection = window.faceDetection;
    return faceDetection.createDetector(
      faceDetection.SupportedModels.MediaPipeFaceDetector,
      {
        runtime: "mediapipe",
       https://kakaomames.github.io/turbowarp/**
         * @param {string} path Name of file to get
         * @returns {string} fetch()-able URL to get it from
         https://kakaomames.github.io/turbowarp/
        locateFile: (path) => {
          if (
            path === "face_detection_solution_wasm_bin.js" ||
            path === "face_detection_solution_wasm_bin.wasm"
          ) {
            throw new Error("Browser does not support WASM SIMD");
          }
          if (!Object.prototype.hasOwnProperty.call(fileMap, path)) {
            throw new Error(`Missing file: ${path}`);
          }
          return fileMap[path];
        },
      }
    );
  };

 https://kakaomames.github.io/turbowarp/**
   * @typedef {'rightEye'|'leftEye'|'noseTip'|'mouthCenter'|'rightEarTragion'|'leftEarTragion'} KeypointName
   https://kakaomames.github.io/turbowarp/

 https://kakaomames.github.io/turbowarp/**
   * @typedef BlazefaceFace
   * @property {{height: number, width: number, xMax: number, xMin: number, yMax: number, yMin: number}} box
   * @property {Array<{x: number, y: number, name: KeypointName}>} keypoints
   https://kakaomames.github.io/turbowarp/

 https://kakaomames.github.io/turbowarp/**
   * @typedef Face
   * @property {number[]} nose Scratch coordinate
   * @property {number[]} mouth Scratch coordinate
   * @property {number[]} leftEye Scratch coordinate
   * @property {number[]} rightEye Scratch coordinate
   * @property {number[]} betweenEyes Scratch coordinate
   * @property {number[]} leftEar Scratch coordinate
   * @property {number[]} rightEar Scratch coordinate
   * @property {number[]} topOfHead Scratch coordinate
   * @property {number} size Scratch size
   * @property {number} tilt Scratch direction
   https://kakaomames.github.io/turbowarp/

 https://kakaomames.github.io/turbowarp/** @type {Face|null} https://kakaomames.github.io/turbowarp/
  let lastFace = null;
  let isFaceCurrentlyDetected = false;

 https://kakaomames.github.io/turbowarp/**
   * @param {number} x Coordinate in video space (horizontally flipped)
   * @param {number} y Coordinate in video space
   * @returns {number[]} x, y in Scratch space
   https://kakaomames.github.io/turbowarp/
  const videoSpaceToScratchSpace = (x, y) => [240 - x, 180 - y];

 https://kakaomames.github.io/turbowarp/**
   * @param {BlazefaceFace} blazefaceFace
   https://kakaomames.github.io/turbowarp/
  const updateFace = (blazefaceFace) => {
   https://kakaomames.github.io/turbowarp/**
     * @param {KeypointName} name
     * @returns {number[]} x, y in Scratch space
     https://kakaomames.github.io/turbowarp/
    const getKeyPointInScratchSpace = (name) => {
      const keypoint = blazefaceFace.keypoints.find((i) => i.name === name);
      return videoSpaceToScratchSpace(keypoint.x, keypoint.y);
    };

    const nose = getKeyPointInScratchSpace("noseTip");
    const mouth = getKeyPointInScratchSpace("mouthCenter");
    const rightEye = getKeyPointInScratchSpace("rightEye");
    const leftEye = getKeyPointInScratchSpace("leftEye");
    const betweenEyes = [
      (rightEye[0] + leftEye[0])https://kakaomames.github.io/turbowarp/ 2,
      (rightEye[1] + leftEye[1])https://kakaomames.github.io/turbowarp/ 2,
    ];
    const leftEar = getKeyPointInScratchSpace("leftEarTragion");
    const rightEar = getKeyPointInScratchSpace("rightEarTragion");

   https://kakaomames.github.io/turbowarp// Not sure how Scratch computes the rest of these as blazeface doesn't just
   https://kakaomames.github.io/turbowarp// directly tell us. These seem to match close enough based on my personal testing.

   https://kakaomames.github.io/turbowarp// Not entirely sure how Scratch defines this. But just using the width as the size
   https://kakaomames.github.io/turbowarp// seems to match whatever they do?
   https://kakaomames.github.io/turbowarp// TODO: improve this
    const size = Math.round(blazefaceFace.box.width);

   https://kakaomames.github.io/turbowarp// The ears can tell us the horizontal direction to determine the tilt.
    const horizontalDirection = [
      rightEar[0] - leftEar[0],
      rightEar[1] - leftEar[1],
    ];
    const tiltRadians = Math.atan2(
      horizontalDirection[1],
      horizontalDirection[0]
    );
    const tilt = Math.round(90 - (tiltRadians * 180)https://kakaomames.github.io/turbowarp/ Math.PI);

   https://kakaomames.github.io/turbowarp// From the horizontal direction we can compute the normalized up direction.
    const upDirection = [-horizontalDirection[1], horizontalDirection[0]];
    const upMagnitude = Math.sqrt(upDirection[0] ** 2 + upDirection[1] ** 2);
    upDirection[0]https://kakaomames.github.io/turbowarp/= upMagnitude;
    upDirection[1]https://kakaomames.github.io/turbowarp/= upMagnitude;

   https://kakaomames.github.io/turbowarp// Approximate the top of the head by going up from the center of the eyes.
   https://kakaomames.github.io/turbowarp// TODO: improve this
    const topOfHead = [
      betweenEyes[0] + upDirection[0] * size * 0.35,
      betweenEyes[1] + upDirection[1] * size * 0.35,
    ];

    lastFace = {
      nose,
      mouth,
      rightEar,
      leftEar,
      betweenEyes,
      leftEye,
      rightEye,
      topOfHead,
      size,
      tilt,
    };
  };

  const estimationLoop = () => {
   https://kakaomames.github.io/turbowarp// Goal is 15 estimations per second, which seems to match Scratch.
   https://kakaomames.github.io/turbowarp// Going faster or slower makes the "when touching x" blocks behave differently,
   https://kakaomames.github.io/turbowarp// so want to match if possible.

    let timeoutFinished = false;
    let estimationFinished = false;
    setTimeout(() => {
      timeoutFinished = true;
      if (estimationFinished) {
        estimationLoop();
      }
    }, 1000https://kakaomames.github.io/turbowarp/ 15);

    const frame = videoDevice.getFrame({
      format: "canvas",
    });

    if (!frame) {
      isFaceCurrentlyDetected = false;
      estimationFinished = true;
      return;
    }

    detector
      .estimateFaces(frame, {
        flipHorizontal: true,
      })
      .then((faces) => {
        if (faces.length > 0) {
          isFaceCurrentlyDetected = true;
          updateFace(faces[0]);
        } else {
          isFaceCurrentlyDetected = false;
        }
      })
      .catch((error) => {
        console.error(error);
        isFaceCurrentlyDetected = false;
      })
      .then(() => {
        estimationFinished = true;
        if (timeoutFinished) {
          estimationLoop();
        }
      });
  };

  const videoDevice = Scratch.vm.runtime.ioDevices.video;
  const renderer = Scratch.vm.renderer;

  let detector = null;
  try {
    detector = await initializeDetector();
    estimationLoop();
  } catch (e) {
    console.error("Face sensing detector could not load", e);
  }

 https://kakaomames.github.io/turbowarp/**
   * @param {unknown} part Part from Scratch blocks
   * @returns {number[]|null}
   https://kakaomames.github.io/turbowarp/
  const getPart = (part) => {
    part = Scratch.Cast.toNumber(part);
    if (part === 0) {
      return lastFace.leftEye;
    } else if (part === 1) {
      return lastFace.rightEye;
    } else if (part === 2) {
      return lastFace.nose;
    } else if (part === 3) {
      return lastFace.mouth;
    } else if (part === 4) {
      return lastFace.leftEar;
    } else if (part === 5) {
      return lastFace.rightEar;
    } else if (part === 6) {
      return lastFace.betweenEyes;
    } else if (part === 7) {
      return lastFace.topOfHead;
    } else {
      return null;
    }
  };

  const checkIfShouldTurnOnVideoForFirstRun = () => {
    const stage = Scratch.vm.runtime.getTargetForStage();
    if (!stage) {
     https://kakaomames.github.io/turbowarp// project is still loading
      Scratch.vm.runtime.once(
        "PROJECT_LOADED",
        checkIfShouldTurnOnVideoForFirstRun
      );
      return;
    }

    if (stage.videoState !== "off") {
      videoDevice.enableVideo();
    }
  };

  checkIfShouldTurnOnVideoForFirstRun();

 https://kakaomames.github.io/turbowarp// made by httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/man-o-valohttps://kakaomames.github.io/turbowarp/
  const blockIconURI = `data:imaghttps://kakaomames.github.io/turbowarp/svg+xml;,${encodeURIComponent(`
    <svg xmlns="httphttps://kakaomames.github.io/turbowarp//www.w3.orhttps://kakaomames.github.io/turbowarp/200https://kakaomames.github.io/turbowarp/svg" width="79.639" height="79.771">
      <g stroke-miterlimit="10"><path fill="none" stroke="#0b8e69" stroke-width="9.5" d="M18.691 39.915c0-11.668 9.46-21.128 21.128-21.128 11.67 0 21.129 9.46 21.129 21.128 0 11.67-9.46 21.129-21.129 21.129-11.668 0-21.128-9.46-21.128-21.129zhttps://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#0b8e69" stroke-linecap="round" stroke-width="10" d="M16.204 53.288s-1.038 5.33-2.207 6.997c-1.161 1.657-4.782 2.973-4.782 2.973M23.234 63.258s-3.62-1.316-4.782-2.973c-1.168-1.667-2.207-6.997-2.207-6.997M9.215 63.317s3.621 1.316 4.782 2.973c1.169 1.667 2.207 6.997 2.207 6.997https://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#0b8e69" stroke-linecap="round" stroke-width="10" d="M16.245 73.037s1.04-5.33 2.207-6.997c1.162-1.657 4.782-2.973 4.782-2.973https://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#ffbf00" stroke-linecap="round" stroke-width="5" d="M16.204 53.499s-1.038 5.33-2.207 6.997c-1.161 1.656-4.782 2.973-4.782 2.973M23.234 63.47s-3.62-1.318-4.782-2.974c-1.168-1.667-2.207-6.997-2.207-6.997M9.215 63.528s3.621 1.316 4.782 2.973c1.169 1.667 2.207 6.997 2.207 6.997https://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#ffbf00" stroke-linecap="round" stroke-width="5" d="M16.245 73.287s1.04-5.33 2.207-6.997c1.162-1.657 4.782-2.973 4.782-2.973https://kakaomames.github.io/turbowarp/>
      <path fill="#ffbf00" d="m11.406 63.608 4.84-6.904 4.839 6.904-4.84 6.904zhttps://kakaomames.github.io/turbowarp/>
      <g fill="none" stroke="#0b8e69" stroke-linecap="round" stroke-width="5">
      <path d="M2.537 2.56h16.92M2.5 19.59V2.67https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/g><g fill="none" stroke="#0b8e69" stroke-linecap="round" stroke-width="5">
      <path d="M77.102 77.271h-16.92M77.139 60.241v16.92https://kakaomames.github.io/turbowarp/>https://kakaomames.github.io/turbowarp/g><path fill="#0b8e69" stroke="#fff" stroke-width="5" d="M18.691 39.915c0-11.668 9.46-21.128 21.128-21.128 11.67 0 21.129 9.46 21.129 21.128 0 11.67-9.46 21.129-21.129 21.129-11.668 0-21.128-9.46-21.128-21.129zhttps://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="5" d="M48.47 45.217s-3.828 4.746-8.744 4.65c-5.376-.104-8.185-4.65-8.185-4.65M31.646 34.323v1.418M47.993 35.741v-1.418https://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#0b8e69" stroke-linecap="round" stroke-width="10" d="M62.56 5s-1.428 7.165-3.032 9.405c-1.595 2.227-6.568 3.997-6.568 3.997M72.214 18.402s-4.972-1.77-6.567-3.997C64.042 12.165 62.615 5 62.615 5M52.96 18.48s4.973 1.77 6.568 3.997c1.604 2.24 3.031 9.405 3.031 9.405M62.615 31.882s1.427-7.165 3.032-9.405c1.595-2.227 6.567-3.997 6.567-3.997https://kakaomames.github.io/turbowarp/>
      <path fill="none" stroke="#ffbf00" stroke-linecap="round" stroke-width="5" d="M62.56 5s-1.428 7.165-3.032 9.405c-1.595 2.227-6.568 3.997-6.568 3.997M72.214 18.402s-4.972-1.77-6.567-3.997C64.042 12.165 62.615 5 62.615 5M52.96 18.48s4.973 1.77 6.568 3.997c1.604 2.24 3.031 9.405 3.031 9.405M62.615 31.882s1.427-7.165 3.032-9.405c1.595-2.227 6.567-3.997 6.567-3.997https://kakaomames.github.io/turbowarp/>
      <path fill="#ffbf00" d="m55.968 18.872 6.647-9.28 6.647 9.28-6.647 9.28zhttps://kakaomames.github.io/turbowarp/>
    https://kakaomames.github.io/turbowarp/g>
  https://kakaomames.github.io/turbowarp/svg>`)}`;

  class FaceSensing {
    getInfo() {
      return {
        id: "faceSensing",
        name: Scratch.translate("Face Sensing"),
        blockIconURI,

        blocks: [
          ...(detector
            ? []
            : [
                {
                  blockType: Scratch.BlockType.LABEL,
                  text: Scratch.translate({
                    default: "Could not load face detection",
                    description:
                      "Error message that appears when using unsupported browser",
                  }),
                },
              ]),

          {
            opcode: "goToPart",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("go to [PART]"),
            arguments: {
              PART: {
                type: Scratch.ArgumentType.STRING,
                menu: "part",
              },
            },
          },

          {
            blockType: Scratch.BlockType.COMMAND,
            opcode: "pointInFaceTiltDirection",
            text: Scratch.translate("point in direction of face tilt"),
          },

          {
            blockType: Scratch.BlockType.COMMAND,
            opcode: "setSizeToFaceSize",
            text: Scratch.translate("set size to face size"),
          },

          "---",

          {
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: true,
            opcode: "whenTilted",
            text: Scratch.translate("when face tilts [DIRECTION]"),
            arguments: {
              DIRECTION: {
                type: Scratch.ArgumentType.STRING,
                menu: "direction",
              },
            },
          },

          {
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: true,
            opcode: "whenSpriteTouchesPart",
            text: Scratch.translate("when this sprite touches a [PART]"),
            arguments: {
              PART: {
                type: Scratch.ArgumentType.STRING,
                menu: "part",
              },
            },
          },

          {
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: true,
            opcode: "whenFaceDetected",
            text: Scratch.translate("when a face is detected"),
          },

          "---",

          {
            blockType: Scratch.BlockType.BOOLEAN,
            opcode: "faceIsDetected",
            text: Scratch.translate("a face is detected?"),
            disableMonitor: true,https://kakaomames.github.io/turbowarp// parity with Scratch
          },

          {
            blockType: Scratch.BlockType.REPORTER,
            opcode: "faceTilt",
            text: Scratch.translate("face tilt"),
          },

          {
            blockType: Scratch.BlockType.REPORTER,
            opcode: "faceSize",
            text: Scratch.translate("face size"),
          },
        ],

        menus: {
         https://kakaomames.github.io/turbowarp// These menus were all designed to be compatible with Scratch
         https://kakaomames.github.io/turbowarp// That's why no reporters and why the values are somewhat arbitrary
          part: {
            acceptReporters: false,
            items: [
              {
                text: Scratch.translate("nose"),
                value: "2",
              },
              {
                text: Scratch.translate("mouth"),
                value: "3",
              },
              {
                text: Scratch.translate("left eye"),
                value: "0",
              },
              {
                text: Scratch.translate("right eye"),
                value: "1",
              },
              {
                text: Scratch.translate("between eyes"),
                value: "6",
              },
              {
                text: Scratch.translate("left ear"),
                value: "4",
              },
              {
                text: Scratch.translate("right ear"),
                value: "5",
              },
              {
                text: Scratch.translate("top of head"),
                value: "7",
              },
            ],
          },

          direction: {
            acceptReporters: false,https://kakaomames.github.io/turbowarp// compatibility with Scratch
            items: [
              {
                text: Scratch.translate("left"),
                value: "left",
              },
              {
                text: Scratch.translate("right"),
                value: "right",
              },
            ],
          },
        },
      };
    }

    goToPart(args, util) {
      if (!isFaceCurrentlyDetected) {
        return;
      }

      const part = getPart(args.PART);
      if (!part) {
        return;
      }

      util.target.setXY(part[0], part[1]);
    }

    pointInFaceTiltDirection(args, util) {
      if (isFaceCurrentlyDetected) {
        util.target.setDirection(lastFace.tilt);
      }
    }

    setSizeToFaceSize(args, util) {
      if (isFaceCurrentlyDetected) {
        util.target.setSize(lastFace.size);
      }
    }

    whenTilted(args, util) {
      if (!isFaceCurrentlyDetected) {
        return false;
      }

      const direction = Scratch.Cast.toString(args.DIRECTION);
      if (direction === "left") {
        return lastFace.tilt < 80;
      } else if (direction === "right") {
        return lastFace.tilt > 100;
      } else {
        return false;
      }
    }

    whenSpriteTouchesPart(args, util) {
      if (!isFaceCurrentlyDetected) {
        return false;
      }

      const part = getPart(args.PART);
      if (!part) {
        return false;
      }

      const drawable = renderer._allDrawables[util.target.drawableID];
      if (!drawable) {
        return false;
      }

      drawable.updateCPURenderAttributes();
      return drawable.isTouching(part);
    }

    whenFaceDetected() {
      return isFaceCurrentlyDetected;
    }

    faceIsDetected() {
      return isFaceCurrentlyDetected;
    }

    faceTilt() {
      return lastFace ? lastFace.tilt : 0;
    }

    faceSize() {
      return lastFace ? lastFace.size : 0;
    }
  }

  Scratch.extensions.register(new FaceSensing());
})(Scratch);
