System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  "paths": {
    "*": "demo/dist/app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "aurelia": [
      "npm:core-js@0.9.18/modules/$.fw",
      "npm:core-js@0.9.18/modules/$.dom-create",
      "npm:core-js@0.9.18/modules/$.shared",
      "npm:core-js@0.9.18/modules/$.uid",
      "npm:core-js@0.9.18/modules/$.redef",
      "npm:core-js@0.9.18/modules/$.invoke",
      "npm:core-js@0.9.18/modules/$.assert",
      "npm:core-js@0.9.18/modules/$.array-includes",
      "npm:core-js@0.9.18/modules/$.replacer",
      "npm:core-js@0.9.18/modules/$.throws",
      "npm:core-js@0.9.18/modules/$.keyof",
      "npm:core-js@0.9.18/modules/$.enum-keys",
      "npm:core-js@0.9.18/modules/$.get-names",
      "npm:core-js@0.9.18/modules/$.assign",
      "npm:core-js@0.9.18/modules/$.same",
      "npm:core-js@0.9.18/modules/$.set-proto",
      "npm:core-js@0.9.18/modules/es6.object.to-string",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives",
      "npm:core-js@0.9.18/modules/es6.function.name",
      "npm:core-js@0.9.18/modules/es6.function.has-instance",
      "npm:core-js@0.9.18/modules/es6.number.constructor",
      "npm:core-js@0.9.18/modules/es6.number.statics",
      "npm:core-js@0.9.18/modules/es6.math",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point",
      "npm:core-js@0.9.18/modules/es6.string.raw",
      "npm:core-js@0.9.18/modules/$.string-at",
      "npm:core-js@0.9.18/modules/$.iter",
      "npm:core-js@0.9.18/modules/$.iter-define",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at",
      "npm:core-js@0.9.18/modules/es6.string.ends-with",
      "npm:core-js@0.9.18/modules/es6.string.includes",
      "npm:core-js@0.9.18/modules/$.string-repeat",
      "npm:core-js@0.9.18/modules/es6.string.starts-with",
      "npm:core-js@0.9.18/modules/$.iter-call",
      "npm:core-js@0.9.18/modules/$.iter-detect",
      "npm:core-js@0.9.18/modules/es6.array.of",
      "npm:core-js@0.9.18/modules/$.unscope",
      "npm:core-js@0.9.18/modules/$.species",
      "npm:core-js@0.9.18/modules/es6.array.copy-within",
      "npm:core-js@0.9.18/modules/es6.array.fill",
      "npm:core-js@0.9.18/modules/es6.array.find",
      "npm:core-js@0.9.18/modules/es6.array.find-index",
      "npm:core-js@0.9.18/modules/es6.regexp",
      "npm:core-js@0.9.18/modules/$.for-of",
      "npm:process@0.10.1/browser",
      "npm:core-js@0.9.18/modules/$.mix",
      "npm:core-js@0.9.18/modules/$.collection-strong",
      "npm:core-js@0.9.18/modules/$.collection",
      "npm:core-js@0.9.18/modules/es6.set",
      "npm:core-js@0.9.18/modules/$.collection-weak",
      "npm:core-js@0.9.18/modules/es6.weak-set",
      "npm:core-js@0.9.18/modules/$.own-keys",
      "npm:core-js@0.9.18/modules/es7.array.includes",
      "npm:core-js@0.9.18/modules/es7.string.at",
      "npm:core-js@0.9.18/modules/$.string-pad",
      "npm:core-js@0.9.18/modules/es7.string.rpad",
      "npm:core-js@0.9.18/modules/es7.regexp.escape",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@0.9.18/modules/es7.object.to-array",
      "npm:core-js@0.9.18/modules/$.collection-to-json",
      "npm:core-js@0.9.18/modules/es7.set.to-json",
      "npm:core-js@0.9.18/modules/js.array.statics",
      "npm:core-js@0.9.18/modules/$.partial",
      "npm:core-js@0.9.18/modules/web.immediate",
      "npm:core-js@0.9.18/modules/web.dom.iterable",
      "npm:core-js@0.9.18/modules/core.dict",
      "npm:core-js@0.9.18/modules/core.iter-helpers",
      "npm:core-js@0.9.18/modules/core.$for",
      "npm:core-js@0.9.18/modules/core.delay",
      "npm:core-js@0.9.18/modules/core.function.part",
      "npm:core-js@0.9.18/modules/core.object",
      "npm:core-js@0.9.18/modules/core.array.turn",
      "npm:core-js@0.9.18/modules/core.number.iterator",
      "npm:core-js@0.9.18/modules/core.number.math",
      "npm:core-js@0.9.18/modules/core.string.escape-html",
      "npm:core-js@0.9.18/modules/core.date",
      "npm:core-js@0.9.18/modules/core.global",
      "npm:core-js@0.9.18/modules/core.log",
      "github:aurelia/path@0.8.0/index",
      "npm:core-js@0.9.18/modules/$",
      "npm:core-js@0.9.18/modules/$.wks",
      "npm:core-js@0.9.18/modules/$.def",
      "npm:core-js@0.9.18/modules/$.ctx",
      "npm:core-js@0.9.18/modules/es6.symbol",
      "npm:core-js@0.9.18/modules/es6.object.assign",
      "npm:core-js@0.9.18/modules/es6.object.is",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of",
      "npm:core-js@0.9.18/modules/es6.string.iterator",
      "npm:core-js@0.9.18/modules/es6.string.repeat",
      "npm:core-js@0.9.18/modules/es6.array.from",
      "npm:core-js@0.9.18/modules/es6.array.iterator",
      "npm:core-js@0.9.18/modules/es6.array.species",
      "npm:process@0.10.1",
      "npm:core-js@0.9.18/modules/es6.map",
      "npm:core-js@0.9.18/modules/es6.weak-map",
      "npm:core-js@0.9.18/modules/es6.reflect",
      "npm:core-js@0.9.18/modules/es7.string.lpad",
      "npm:core-js@0.9.18/modules/es7.map.to-json",
      "npm:core-js@0.9.18/modules/web.timers",
      "github:aurelia/path@0.8.0",
      "npm:core-js@0.9.18/modules/$.cof",
      "npm:core-js@0.9.18/modules/$.array-methods",
      "github:jspm/nodelibs-process@0.1.1/index",
      "github:aurelia/loader@0.8.0/index",
      "npm:core-js@0.9.18/modules/es5",
      "github:jspm/nodelibs-process@0.1.1",
      "github:aurelia/loader@0.8.0",
      "npm:core-js@0.9.18/modules/$.task",
      "npm:core-js@0.9.18/modules/es6.promise",
      "npm:core-js@0.9.18/shim",
      "npm:core-js@0.9.18/index",
      "npm:core-js@0.9.18",
      "github:aurelia/metadata@0.7.0/index",
      "github:aurelia/metadata@0.7.0",
      "github:aurelia/loader-default@0.9.0/index",
      "github:aurelia/loader-default@0.9.0",
      "github:aurelia/task-queue@0.6.0/index",
      "github:aurelia/logging@0.6.0/index",
      "github:aurelia/task-queue@0.6.0",
      "github:aurelia/logging@0.6.0",
      "github:aurelia/dependency-injection@0.9.0/index",
      "github:aurelia/dependency-injection@0.9.0",
      "github:aurelia/binding@0.8.0/index",
      "github:aurelia/binding@0.8.0",
      "github:aurelia/templating@0.13.1/index",
      "github:aurelia/templating@0.13.1",
      "github:aurelia/templating-binding@0.13.0/index",
      "github:aurelia/templating-binding@0.13.0",
      "github:aurelia/templating-resources@0.13.0/if",
      "github:aurelia/templating-resources@0.13.0/with",
      "github:aurelia/templating-resources@0.13.0/repeat",
      "github:aurelia/templating-resources@0.13.0/show",
      "github:aurelia/templating-resources@0.13.0/global-behavior",
      "github:aurelia/templating-resources@0.13.0/sanitize-html",
      "github:aurelia/templating-resources@0.13.0/replaceable",
      "github:aurelia/templating-resources@0.13.0/focus",
      "github:aurelia/templating-resources@0.13.0/compose",
      "github:aurelia/templating-resources@0.13.0/index",
      "github:aurelia/templating-resources@0.13.0",
      "github:aurelia/route-recognizer@0.6.0/index",
      "github:aurelia/history@0.6.0/index",
      "github:aurelia/event-aggregator@0.6.0/index",
      "github:aurelia/templating-router@0.14.0/router-view",
      "github:aurelia/templating-router@0.14.0/route-href",
      "github:aurelia/route-recognizer@0.6.0",
      "github:aurelia/history@0.6.0",
      "github:aurelia/event-aggregator@0.6.0",
      "github:aurelia/templating-router@0.14.0/route-loader",
      "github:aurelia/router@0.10.0/index",
      "github:aurelia/router@0.10.0",
      "github:aurelia/templating-router@0.14.0/index",
      "github:aurelia/templating-router@0.14.0",
      "github:aurelia/history-browser@0.6.0/index",
      "github:aurelia/history-browser@0.6.0",
      "github:aurelia/framework@0.13.1/index",
      "github:aurelia/framework@0.13.1",
      "github:aurelia/http-client@0.10.0/index",
      "github:aurelia/http-client@0.10.0",
      "github:aurelia/logging-console@0.6.0/index",
      "github:aurelia/logging-console@0.6.0",
      "github:aurelia/bootstrapper@0.14.0/index",
      "github:aurelia/bootstrapper@0.14.0"
    ],
    "app-bundle": [
      "config",
      "stagger",
      "sequences",
      "nav-bar",
      "github:julianshapiro/velocity@1.2.2/velocity",
      "github:julianshapiro/velocity@1.2.2/velocity.ui",
      "github:daepark/JSOL@master/jsol",
      "github:showdownjs/showdown@1.1.0/showdown",
      "github:PrismJS/prism@master/prism",
      "github:ajaxorg/ace-builds@1.1.9/ace",
      "github:ajaxorg/ace-builds@1.1.9/theme-monokai",
      "github:ajaxorg/ace-builds@1.1.9/mode-javascript",
      "github:beautify-web/js-beautify@1.5.10/beautify",
      "github:beautify-web/js-beautify@1.5.10/beautify-css",
      "github:beautify-web/js-beautify@1.5.10/beautify-html",
      "github:rstacruz/nprogress@0.2.0/nprogress.css!github:systemjs/plugin-css@0.1.13",
      "github:components/jquery@2.1.4/jquery",
      "github:distros/bootstrap-less@3.3.8/js/transition",
      "github:julianshapiro/velocity@1.2.2",
      "github:daepark/JSOL@master",
      "github:showdownjs/showdown@1.1.0",
      "github:PrismJS/prism@master",
      "github:ajaxorg/ace-builds@1.1.9",
      "github:beautify-web/js-beautify@1.5.10",
      "github:rstacruz/nprogress@0.2.0/nprogress",
      "github:components/jquery@2.1.4",
      "github:gooy/aurelia-animator-velocity@0.0.3/animator",
      "github:gooy/aurelia-markdown@0.0.2/markdown",
      "github:gooy/aurelia-ace@0.0.1/ace",
      "github:rstacruz/nprogress@0.2.0",
      "github:distros/bootstrap-less@3.3.8/js/collapse",
      "github:gooy/aurelia-markdown@0.0.2/index",
      "github:gooy/aurelia-ace@0.0.1/index",
      "github:gooy/aurelia-markdown@0.0.2",
      "github:gooy/aurelia-ace@0.0.1",
      "github:gooy/aurelia-smooth-scroll@0.0.2/smooth-scroll",
      "github:gooy/aurelia-smooth-scroll@0.0.2/index",
      "github:gooy/aurelia-smooth-scroll@0.0.2",
      "github:gooy/aurelia-animator-velocity@0.0.3/index",
      "github:gooy/aurelia-animator-velocity@0.0.3",
      "main",
      "loading-indicator",
      "error/generic",
      "error/404",
      "error/403",
      "enterleave",
      "docs",
      "box",
      "github:PrismJS/prism@master/themes/prism-okaidia.css!github:systemjs/plugin-css@0.1.13",
      "app",
      "app-footer",
      "animation-config",
      "animate",
      "affix-bottom"
    ]
  }
});

System.config({
  "map": {
    "ace": "github:ajaxorg/ace-builds@1.1.9",
    "aurelia-animator-css": "github:aurelia/animator-css@0.13.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.0",
    "aurelia-framework": "github:aurelia/framework@0.13.1",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "aurelia-router": "github:aurelia/router@0.10.0",
    "aurelia-templating": "github:aurelia/templating@0.13.1",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "bootstrap-less": "github:distros/bootstrap-less@3.3.8",
    "clean-css": "npm:clean-css@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "gooy/aurelia-ace": "github:gooy/aurelia-ace@0.0.1",
    "gooy/aurelia-animator-velocity": "github:gooy/aurelia-animator-velocity@0.0.3",
    "gooy/aurelia-markdown": "github:gooy/aurelia-markdown@0.0.2",
    "gooy/aurelia-smooth-scroll": "github:gooy/aurelia-smooth-scroll@0.0.2",
    "js-beautify": "github:beautify-web/js-beautify@1.5.10",
    "jsol": "github:daepark/JSOL@master",
    "nprogress": "github:rstacruz/nprogress@0.2.0",
    "prism": "github:PrismJS/prism@master",
    "text": "github:systemjs/plugin-text@0.0.2",
    "velocity": "github:julianshapiro/velocity@1.2.2",
    "github:aurelia/animator-css@0.13.0": {
      "aurelia-templating": "github:aurelia/templating@0.13.1"
    },
    "github:aurelia/binding@0.8.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.0",
      "aurelia-framework": "github:aurelia/framework@0.13.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.0"
    },
    "github:aurelia/framework@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.0": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.0",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1"
    },
    "github:aurelia/templating-resources@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.0",
      "aurelia-templating": "github:aurelia/templating@0.13.1"
    },
    "github:aurelia/templating@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:distros/bootstrap-less@3.3.8": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:gooy/aurelia-ace@0.0.1": {
      "ace": "github:ajaxorg/ace-builds@1.1.9",
      "js-beautify": "github:beautify-web/js-beautify@1.5.10"
    },
    "github:gooy/aurelia-animator-velocity@0.0.2": {
      "aurelia-templating": "github:aurelia/templating@0.13.1",
      "jsol": "github:daepark/JSOL@master",
      "velocity": "github:julianshapiro/velocity@1.2.2"
    },
    "github:gooy/aurelia-animator-velocity@0.0.3": {
      "bootstrap-less": "github:distros/bootstrap-less@3.3.8",
      "jsol": "github:daepark/JSOL@master",
      "velocity": "github:julianshapiro/velocity@1.2.2"
    },
    "github:gooy/aurelia-markdown@0.0.2": {
      "prism": "github:PrismJS/prism@master",
      "showdown": "github:showdownjs/showdown@1.1.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:rstacruz/nprogress@0.2.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:amdefine@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.3.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.4.2": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

