https://kakaomames.github.io/turbowarp/ Name: DECtalk Text to Speech
https://kakaomames.github.io/turbowarp/ ID: nishiowoDectalk
https://kakaomames.github.io/turbowarp/ Description: Text to speech powered by DECtalk. Does not use an internet connection, so it works offline. English only.
https://kakaomames.github.io/turbowarp/ By: NishiOwO
https://kakaomames.github.io/turbowarp/ License: BSD-3-Clause
https://kakaomames.github.io/turbowarp/ Context: Don't translate "DECtalk" - it's the name of the text-to-speech library.

https://kakaomames.github.io/turbowarp/ Repository is at httpshttps://kakaomames.github.io/turbowarp//github.cohttps://kakaomames.github.io/turbowarp/dectalhttps://kakaomames.github.io/turbowarp/tw-dectalk

(async function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("DECtalk must be run unsandboxed");
  }

  let Module, speak, speak_init;
  let g_buffer = {};
  let g_sources = [];
  let embedded = false;
  var DECtalkMini;

 https://kakaomames.github.io/turbowarp/* DO NOT REMOVE THE COMMENT BELOW!!! https://kakaomames.github.io/turbowarp/
 https://kakaomames.github.io/turbowarp/* EMBED DTC.JS HERE https://kakaomames.github.io/turbowarp/

  let dtc;
  if (embedded) {
    dtc = DECtalkMini;
  } else {
    dtc = await Scratch.external.evalAndReturn(
      "httpshttps://kakaomames.github.io/turbowarp//raw.githubusercontent.cohttps://kakaomames.github.io/turbowarp/dectalhttps://kakaomames.github.io/turbowarp/tw-dectalhttps://kakaomames.github.io/turbowarp/b387df5a1133dd08a8f3af94d7899dec3f507fdhttps://kakaomames.github.io/turbowarp/dtc.js",
      "DECtalkMini"
    );
  }

 https://kakaomames.github.io/turbowarp// @ts-ignore
  window.onDECtalkAudioCallback = function (tts, buffer, length, phoneme) {
    let arr_r = new Int16Array(Module.HEAP16.buffer, buffer, length);
    let arr = new Int16Array(length);

    for (let i = 0; i < arr.length; i++) arr[i] = arr_r[i];

    if (!g_buffer[tts]) g_buffer[tts] = [];
    g_buffer[tts].push(arr);
  };

  class DECtalk {
    getInfo() {
      const blockIconURI =
        "data:imaghttps://kakaomames.github.io/turbowarp/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAGqUExURbM1P4R7e2tjWkpSSmNjY3NrY4SMjHuDhHt7e4x9c1JSUjlCOUpLQkpKOVpaUmNaUntza0JCQkpKSoyEe5SUjDE5MTk5QpyMe1JSQntzc1pKSkpCOTE5KTEpMUI5MYRrayExKTExKVpSQnNzczExIWtSSmNKQntkUoRjSoRrUmtSQnNaSpxzWpx7Y616a7WEc72Ea617Y6WEa2tSOUpCMWNKOXNaUlpKOZRzY72Ue8ace8achMaMc72Uc72Mc1pKQoRrWpRrWs6chGNCMXNSOXNSQoRaQpxrUqWUhHtaQqVzWpR7e5xjSs6cjNatnM6llNa1nIRrY9i9pVpCMc6tnMacjEoxL6WEc5R7c4xza7WUeyExIZxzY1I5KUo5Ka2Me3tJOWtSMZx7a4BKQnNKOTkxITEpIXNHMZxjUta1pbWchMallK2cjL2UjLWUc3trY9bOvaWUjJxSSYyUlKWlpTE5ObWlnFJaY7WllKWtrbW1tbhttps://kakaomames.github.io/turbowarp/vTE5QtbGtc7Oxik5OWNnd87GvbWtpcbGxikxMSk5MYx7a9bWzkpeZ8a9tXuElKWclJKcnhttps://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/8+cNKwAAAABYktHRI0bDOLVAAAAB3RJTUUH6gUOFiEIydsoFAAABl5JREFUSMe1lvt32tgRx43ku92gF8SWg+1rFVIbhttps://kakaomames.github.io/turbowarp/GQQFcBSeBixKOwEXiNHbcYChttps://kakaomames.github.io/turbowarp/SNksb97Grdtdp2aY1ze62f3RHnPacntNapj90ftAPohttps://kakaomames.github.io/turbowarp/9zsydGc3Kyhttps://kakaomames.github.io/turbowarp/DIisUvYpWqhttps://kakaomames.github.io/turbowarp/o7338P4FPUJRhGY6h2SjNCzxFUWhZNIYEIc4wTxmOYmPUKs0vbCl0DVEUz7LARp+yNOIpFFulaIGnl2DXwUWeF9kNgaF5GtGrfCSGeDpORaPUY+wzYNEqBx7TCS6xyVMsoiKIim2xLM3EH4ERxQtriGa3EY+YOOLjHNqCJ5ug2S2afYyltvgIouM8C5EKUR4LFhttps://kakaomames.github.io/turbowarp/f2WFERopH+UQ4zPM0ZDghMDz9fYiYwYLAiMlkMsVss3wUCWGwkGDjbAzRtESxka1VWuQSWxKXAhpLTBxOC2EpKAxGRDGKlRIMEhDDJZ4Lz59zWMKYYRg29oOQYuEkjtvFHIrx2+w21BXLJvaovfS+nMkoHMeyPAqpFQYzIha5vZiwzXECRYFqOpvLF1StWNITwpYQCYE5RhRFYijZF0qZ26Oohttps://kakaomames.github.io/turbowarp/uVkmZadrVaOyjoP6Q2P0KxB2EWpDExdCWw7H69flgwrYZtWVbVquVfUhttps://kakaomames.github.io/turbowarp/WN0OChrRgR1GarWazLXc6hwXLDlCrAXgti9bXEfrRg7DESJKjK81uu9MrlrQasA2rAQYHmPlP1iMothaWMfBab7Vf9oqaCtE2Gmhttps://kakaomames.github.io/turbowarp/0D86chtWTf30kzWENh+GpQA2mgF8YFm223Ddo6Oj46N+wzILz2KRyGbkQZiXpIWy3CkWD0zLDazfD2AX3K4gtPaw1ysJhiFDR+8CrNVqVsOFcBc4wLUAjoTAFAtuGwD3tCBbi2taeB7AvX30JIQNMkacAM4VVdN23QXcDwwSpmWFcJjFhmEoXTlTyaumO3Bd2x6cnJwMTl3TUuuJ8EkkpcpAk1cSt1https://kakaomames.github.io/turbowarp/A3HbVH+8v7https://kakaomames.github.io/turbowarp/aeUnI1PNc6ETmOCUY2zj82QKjMg5zRxny8ZQqVQq2UItL4x7D7POBU7pZcnzPKLDw2sWB6V2UzfkXG6SL5mlRLH4MDx0CFHSEkm9EjGXJedObXBweTXEqb3rjAp+y7b2MKwQkDQ8kvIu9EqltXt1AIV1efNayRo3pl1Te9UQeMXDP9UVgwyH2YycKXttrdGw2+32eDQyG65Z62nVEBhttps://kakaomames.github.io/turbowarp/zDNaV63mzhttps://kakaomames.github.io/turbowarp/a7UvHeVmFGrM1aJIG3JppWlojTDnlKa2WnMuPi29uHP1N1Q0qNCiUhttps://kakaomames.github.io/turbowarp/7AVt1imPKFl2oprUyvWOjJOml2giKr2u6gf3zcd02taoXBQ91ToJuhp95A3lodd9BoaO2iffzZ8cC1Cn3XDoFbxFMMR3nZ6eipXUcHZduyzeZLG0aCa6n9gRkCw12lyYXRlW88DC0iayfVwvQXo9edg4ZtmjV3EF6fr4zgrnWo012MLztqZWL+8u3E6dyakOzBWeiC8CtpAQ8BTu3ueka2NJ2Ozs5KV7emZVYe2024MsCyQTD2PKc9zhttps://kakaomames.github.io/turbowarp/UcaZ+WJJvTXu0hagnK+E0IaQjK6kkvnC6lzAG7Y7XyWvQnZOE8OhmUR6S7jjQNvLT01+7n03e1CYFa2qb1ytLLFSEDOtyiwxfw+A3i1pPm5oqpOv2N4+jASylZZkQ5+a3veJb05ya1mh0e1tahoVZBMMbpF85ra48VqdQJ6NC4Ww5doXDO6Qlhttps://kakaomames.github.io/turbowarp/Rstg5jED469qQ0GS8JQ1vjbbkDzRVk2bJPR6VC5ZpZEpY8kSiZTC5fBFn3dDop5fOfx5eky55EhnrmsKSq9imw+crh9ReMv7EcLEkeIWl5XCqoUJ31ev36dhttps://kakaomames.github.io/turbowarp/3xUf3x4VBfUPYXjktZwB8kZXzX361IYobG0+XgNNDyUthjEURbi2d7pRO7j73fX9jg1licU5DV4EB75Hn3Vzp7bs7https://kakaomames.github.io/turbowarp/T9Pwhttps://kakaomames.github.io/turbowarp/qOdRUi4DmsJeUC25yR9nd3EAA2O+Dhttps://kakaomames.github.io/turbowarp/cx1iC5vCCnBlyJzedzb74k7ggfR+WWCw+iIoYJ5OIDKExr1qynDmczthttps://kakaomames.github.io/turbowarp/+S+https://kakaomames.github.io/turbowarp/08LVtihttps://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/AuLhzj+ETiTclYI2WnOlU3https://kakaomames.github.io/turbowarp/u7mYbsLUG2vOdZPI8mZxj5https://kakaomames.github.io/turbowarp/IhWjwZ5L6q0S8YTehttps://kakaomames.github.io/turbowarp/fDu3ewbP0iX6Ivg9Pk5vCDhttps://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/HfXE+v08GbABHn6yBtHz27Wz21bcfvlsELN7vAHy+ODx5789https://kakaomames.github.io/turbowarp/19xzndAdfFzENM5https://kakaomames.github.io/turbowarp/Gzv0nkhttps://kakaomames.github.io/turbowarp/ez2https://kakaomames.github.io/turbowarp/ff7iDZdhttps://kakaomames.github.io/turbowarp/n8PpO4t3gtdShttps://kakaomames.github.io/turbowarp/EeiuYfbtp3ZfxRMM0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDUtMDZUMTI6NDc6MzArMDA6MDAyr+MJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTA1LTA2VDEyOjQ3OjMwKzAwOjAwhttps://kakaomames.github.io/turbowarp/JbtQAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNi0wNS0xNFQyMjozMzowOCswMDowMPUwTewAAAAASUVORK5CYII=";

      return {
        id: "nishiowoDectalk",
        name: Scratch.translate("DECtalk Text to Speech"),
        blockIconURI: blockIconURI,
        color1: "#b3353f",
        blocks: [
          {
            opcode: "speakAndWait",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("speak [WORDS]"),
            arguments: {
              WORDS: {
                type: Scratch.ArgumentType.STRING,
               https://kakaomames.github.io/turbowarp// Don't translate - the TTS library needs English to work well
                defaultValue: "Hello",
              },
            },
          },
          {
            opcode: "stopAll",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate("stop all speaking"),
          },
        ],
      };
    }

    speakAndWait(args) {
      return new Promise(function (res, rej) {
        const audioContext = Scratch.vm.runtime.audioEngine.audioContext;
        const str = Module.stringToNewUTF8(Scratch.Cast.toString(args.WORDS));
        const tts = speak(str);
        Module._free(str);

        let b = 0;
        if (g_buffer[tts]) {
          for (let i = 0; i < g_buffer[tts].length; i++) {
            b += g_buffer[tts][i].length;
          }
        } else {
          res();
          return;
        }

        const audioBuffer = audioContext.createBuffer(1, b, 11025);
        const channelData = audioBuffer.getChannelData(0);

        b = 0;

        for (let i = 0; i < g_buffer[tts].length; i++) {
          for (let j = 0; j < g_buffer[tts][i].length; j++) {
            channelData[b + j] = g_buffer[tts][i][j]https://kakaomames.github.io/turbowarp/ 32767;
          }
          b += g_buffer[tts][i].length;
        }

        const currentSource = audioContext.createBufferSource();
        currentSource.buffer = audioBuffer;
        currentSource.connect(audioContext.destination);

        g_sources.push(currentSource);

        currentSource.onended = function () {
          g_sources = g_sources.filter((x) => x != currentSource);
          res();
        };

        currentSource.start();

        if (g_buffer[tts]) delete g_buffer[tts];
      });
    }

    stopAll() {
      for (let i of g_sources) {
        i.stop();
      }
      g_sources = [];
    }
  }

  Module = await dtc();
  speak_init = Module.cwrap("speak_init", null, []);
  speak = Module.cwrap("speak", "number", ["number"]);

  speak_init();

  Scratch.extensions.register(new DECtalk());
})(Scratch);
