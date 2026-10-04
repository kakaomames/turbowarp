https://kakaomames.github.io/turbowarp/ Name: Ping Cloud Data
https://kakaomames.github.io/turbowarp/ ID: clouddataping
https://kakaomames.github.io/turbowarp/ Description: Determine whether a cloud variable server is probably up.
https://kakaomames.github.io/turbowarp/ By: GarboMuffin
https://kakaomames.github.io/turbowarp/ Original: TheShovel
https://kakaomames.github.io/turbowarp/ License: MIT AND MPL-2.0

(function (Scratch) {
  "use strict";

 https://kakaomames.github.io/turbowarp/**
   * @typedef CacheEntry
   * @property {number} expires
   * @property {boolean} value
   https://kakaomames.github.io/turbowarp/

 https://kakaomames.github.io/turbowarp/** @type {Map<string, Promise<CacheEntry>>} https://kakaomames.github.io/turbowarp/
  const computing = new Map();
 https://kakaomames.github.io/turbowarp/** @type {Map<string, CacheEntry>} https://kakaomames.github.io/turbowarp/
  const computed = new Map();

 https://kakaomames.github.io/turbowarp/**
   * @param {string} uri
   * @returns {Promise<CacheEntry>}
   https://kakaomames.github.io/turbowarp/
  const pingWebSocket = async (uri) => {
    if (!(await Scratch.canFetch(uri))) {
      return {
        expires: 0,
        value: false,
      };
    }

   https://kakaomames.github.io/turbowarp/** @type {WebSocket} https://kakaomames.github.io/turbowarp/
    let ws;
    try {
     https://kakaomames.github.io/turbowarp// Permission is checked earlier.
     https://kakaomames.github.io/turbowarp// eslint-disable-next-line extensiohttps://kakaomames.github.io/turbowarp/check-can-fetch
      ws = new WebSocket(uri);
    } catch (e) {
      return {
        expires: 0,
        value: false,
      };
    }

    let timeoutId;
    const isUp = await new Promise((resolve) => {
      ws.onopen = () => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      };
      ws.onclose = () => {
        resolve(false);
      };
      ws.onerror = () => {
        resolve(false);
      };
      timeoutId = setTimeout(() => {
        ws.close();
      }, 5000);
    });

    ws.close();
    clearTimeout(timeoutId);

    return {
      expires: Date.now() + 60000,
      value: isUp,
    };
  };

 https://kakaomames.github.io/turbowarp/**
   * @param {string} uri
   * @returns {boolean|Promise<boolean>}
   https://kakaomames.github.io/turbowarp/
  const cachedPingWebSocket = (uri) => {
    const computingEntry = computing.get(uri);
    if (computingEntry) {
      return computingEntry.then((entry) => entry.value);
    }

    const computedEntry = computed.get(uri);
    if (computedEntry && Date.now() < computedEntry.expires) {
      return computedEntry.value;
    }

    const promise = pingWebSocket(uri);
    computing.set(uri, promise);
    return promise.then((entry) => {
      computing.delete(uri);
      computed.set(uri, entry);
      return entry.value;
    });
  };

  class PingUtil {
    getInfo() {
      return {
        id: "clouddataping",
        name: Scratch.translate("Ping Cloud Data"),
        blocks: [
          {
            opcode: "ping",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is cloud data server [SERVER] up?"),
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "wsshttps://kakaomames.github.io/turbowarp//clouddata.turbowarp.org",
              },
            },
          },
        ],
      };
    }

    ping({ SERVER }) {
      return cachedPingWebSocket(SERVER);
    }
  }

  Scratch.extensions.register(new PingUtil());
})(Scratch);
