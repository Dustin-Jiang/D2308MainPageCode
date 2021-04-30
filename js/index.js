/*
 * index.js
 *
 * Libraries in use:
 *
 * async-script-loader:
 *  https://github.com/CSharperMantle/async-script-loader
 *  MIT License. Copyright (c) Rong "Mantle" Bao (aka CSharperMantle)
 * 
 * lodash:
 *  https://github.com/lodash/lodash/
 *  MIT License. Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * jquery:
 *  https://github.com/jquery/jquery/
 *  MIT Licentse. 
 * 
 * popper.js:
 * 
 * twitter-bootstrap: 
 * 
 * 
 */

(function () {
  const AsyncScriptLoader = {
    loadScript: function (
      url,
      baseElem,
      resolveWhen,
      isWithIntegrity,
      integrity,
      crossorigin
    ) {
      return new Promise(function (resolve, reject) {
        const scriptElem = document.createElement('script');
        scriptElem.setAttribute('src', url);
        if (isWithIntegrity) {
          scriptElem.setAttribute('integrity', integrity);
          scriptElem.setAttribute('crossorigin', crossorigin);
        }
        scriptElem.addEventListener('load', function () {
          while (!resolveWhen());
          resolve();
        });
        scriptElem.addEventListener('error', function () {
          reject(new Error(`AsyncScriptLoader: ${url} fails to load`));
        });
        baseElem.insertAdjacentElement('afterbegin', scriptElem);
      });
    }
  };
  window.AsyncScriptLoader = AsyncScriptLoader;
})();
(function () {
  const body = document.getElementsByTagName('body')[0];

  AsyncScriptLoader.loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js',
    body,
    () => {
      return typeof _ === 'function';
    },
    true,
    'sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==',
    'anonymous'
  ).then(() => {
    return AsyncScriptLoader.loadScript(
      'https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js',
      body,
      () => {
        return typeof $ !== 'undefined';
      },
      false,
      null,
      null
    );
  }).then(() => {
    return AsyncScriptLoader.loadScript(
      'https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js',
      body,
      () => {
        return typeof Popper !== 'undefined';
      },
      false,
      null,
      null
    ).then(() => {
      'https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
        body,
        () => {
          return typeof _createClass !== 'undefined';
        },
        false,
        null,
        null;
    }).then(() => {
      initialize();
    }).catch((reason) => {
      console.log(reason);
    });
  });
})();

function loadHTML(){

}

function initialize(){
  loadHTML();
}