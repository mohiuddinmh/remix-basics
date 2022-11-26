var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-I3FPYHAQ.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "My Remix Blog",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 28,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 29,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Hello There"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 5
          }, this),
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
            to: "/",
            className: "logo",
            children: "Remix"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "nav",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                to: "/demo",
                children: "Posts"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 49,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
function links() {
  return [
    { rel: "stylesheet", href: global_default }
  ];
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "Welcome"
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 5,
      columnNumber: 5
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/demo.tsx
var demo_exports = {};
__export(demo_exports, {
  default: () => Demo,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Demo() {
  let { data: users } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        children: "Demo page"
      }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 7,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
        to: "/",
        children: "Home Page"
      }, void 0, !1, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 8,
        columnNumber: 5
      }, this),
      users == null ? void 0 : users.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: user.id
          }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 11,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: user.name
          }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 12,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            children: user.email
          }, void 0, !1, {
            fileName: "app/routes/demo.tsx",
            lineNumber: 13,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/demo.tsx",
        lineNumber: 10,
        columnNumber: 25
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/routes/demo.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function loader() {
  let data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  return console.log(data), { data };
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2837343c", entry: { module: "/build/entry.client-UYTB5XF7.js", imports: ["/build/_shared/chunk-C6PNDWYX.js", "/build/_shared/chunk-IE366Y5W.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O7XRA5XT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/demo": { id: "routes/demo", parentId: "root", path: "demo", index: void 0, caseSensitive: void 0, module: "/build/routes/demo-U5CJGW7N.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Z27BUYPP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-2837343C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: demo_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
