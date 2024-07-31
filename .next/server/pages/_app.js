/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/disabledrag.js":
/*!***********************************!*\
  !*** ./components/disabledrag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction DisableDrag() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleDragStart = (event)=>{\n            event.preventDefault();\n        };\n        document.addEventListener(\"dragstart\", handleDragStart);\n        return ()=>{\n            document.removeEventListener(\"dragstart\", handleDragStart);\n        };\n    }, []);\n    return null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisableDrag);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc2FibGVkcmFnLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUVsQyxTQUFTQztJQUNQRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1FLGtCQUFrQixDQUFDQztZQUN2QkEsTUFBTUMsY0FBYztRQUN0QjtRQUNBQyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhSjtRQUN2QyxPQUFPO1lBQ0xHLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFMO1FBQzVDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBTztBQUNUO0FBRUEsaUVBQWVELFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL2Rpc2FibGVkcmFnLmpzPzlmODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBEaXNhYmxlRHJhZygpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzYWJsZURyYWc7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiRGlzYWJsZURyYWciLCJoYW5kbGVEcmFnU3RhcnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/disabledrag.js\n");

/***/ }),

/***/ "./components/disablerightclick.js":
/*!*****************************************!*\
  !*** ./components/disablerightclick.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction DisableRightClick() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleContextMenu = (event)=>{\n            event.preventDefault();\n        };\n        document.addEventListener(\"contextmenu\", handleContextMenu);\n        return ()=>{\n            document.removeEventListener(\"contextmenu\", handleContextMenu);\n        };\n    }, []);\n    return null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisableRightClick);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc2FibGVyaWdodGNsaWNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUVsQyxTQUFTQztJQUNQRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1FLG9CQUFvQixDQUFDQztZQUN6QkEsTUFBTUMsY0FBYztRQUN0QjtRQUNBQyxTQUFTQyxnQkFBZ0IsQ0FBQyxlQUFlSjtRQUN6QyxPQUFPO1lBQ0xHLFNBQVNFLG1CQUFtQixDQUFDLGVBQWVMO1FBQzlDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsT0FBTztBQUNUO0FBRUEsaUVBQWVELGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvZGlzYWJsZXJpZ2h0Y2xpY2suanM/ODNjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIERpc2FibGVSaWdodENsaWNrKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBoYW5kbGVDb250ZXh0TWVudSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgaGFuZGxlQ29udGV4dE1lbnUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzYWJsZVJpZ2h0Q2xpY2s7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiRGlzYWJsZVJpZ2h0Q2xpY2siLCJoYW5kbGVDb250ZXh0TWVudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/disablerightclick.js\n");

/***/ }),

/***/ "./context/web3modal.js":
/*!******************************!*\
  !*** ./context/web3modal.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Modal: () => (/* binding */ Web3Modal)\n/* harmony export */ });\n/* harmony import */ var _web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3modal/ethers/react */ \"@web3modal/ethers/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__]);\n_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// 1. Get projectId at https://cloud.walletconnect.com\nconst projectId = \"4ae4f912d4e7629aeeccff8fb3804be4\";\n// 2. Set chains\nconst mainnet = {\n    chainId: 1,\n    name: \"Ethereum\",\n    currency: \"ETH\",\n    explorerUrl: \"https://etherscan.io\",\n    rpcUrl: \"https://cloudflare-eth.com\"\n};\nconst BaseSepoliaTestnet = {\n    chainId: 84532,\n    name: \"Base Sepolia Testnet\",\n    currency: \"ETH\",\n    explorerUrl: \"https://sepolia.basescan.org/\",\n    rpcUrl: \"https://sepolia.base.org\"\n};\n// 3. Create a metadata object\nconst metadata = {\n    name: \"Optic Odyssey\",\n    description: \"Explore, discover, make your photos work for you!\",\n    url: \"localhost:3000\",\n    icons: [\n        \"https://ipfs.filebase.io/ipfs/QmRaDTECSvaJVBAY4aF1Zuusuuxxh4iAVR2gEcSxePor3Z\"\n    ]\n};\n// 4. Create Ethers config\nconst ethersConfig = (0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__.defaultConfig)({\n    /*Required*/ metadata,\n    /*Optional*/ enableEIP6963: true,\n    enableInjected: true,\n    enableCoinbase: false,\n    rpcUrl: \"...\",\n    defaultChainId: 1,\n    enableEmail: true\n});\n// 5. Create a Web3Modal instance\n(0,_web3modal_ethers_react__WEBPACK_IMPORTED_MODULE_0__.createWeb3Modal)({\n    ethersConfig,\n    chains: [\n        mainnet,\n        BaseSepoliaTestnet\n    ],\n    projectId,\n    enableAnalytics: true,\n    enableOnramp: true,\n    themeVariables: {\n        \"--w3m-z-index\": 9999,\n        \"--w3m-accent\": \"#00f\"\n    },\n    defaultChain: mainnet,\n    chainImages: {\n        84532: \"https://ipfs.filebase.io/ipfs/QmQqrze3W1uSYWq2cGSYDeDwtjGXohTjWPnQ87EVJGeq2P\"\n    }\n});\nfunction Web3Modal({ children }) {\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3dlYjNtb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RTtBQUV4RSxzREFBc0Q7QUFDdEQsTUFBTUUsWUFBWTtBQUVsQixnQkFBZ0I7QUFDaEIsTUFBTUMsVUFBVTtJQUNkQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxhQUFhO0lBQ2JDLFFBQVE7QUFDVjtBQUVBLE1BQU1DLHFCQUFxQjtJQUN6QkwsU0FBUztJQUNUQyxNQUFNO0lBQ05DLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxRQUFRO0FBQ1Y7QUFFQSw4QkFBOEI7QUFDOUIsTUFBTUUsV0FBVztJQUNmTCxNQUFNO0lBQ05NLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBK0U7QUFDekY7QUFFQSwwQkFBMEI7QUFDMUIsTUFBTUMsZUFBZWIsc0VBQWFBLENBQUM7SUFDakMsVUFBVSxHQUNWUztJQUVBLFVBQVUsR0FDVkssZUFBZTtJQUNmQyxnQkFBZ0I7SUFDaEJDLGdCQUFnQjtJQUNoQlQsUUFBUTtJQUNSVSxnQkFBZ0I7SUFDaEJDLGFBQWE7QUFDZjtBQUVBLGlDQUFpQztBQUNqQ25CLHdFQUFlQSxDQUFDO0lBQ2RjO0lBQ0FNLFFBQVE7UUFBQ2pCO1FBQVNNO0tBQW1CO0lBQ3JDUDtJQUNBbUIsaUJBQWlCO0lBQ2pCQyxjQUFjO0lBQ2RDLGdCQUFnQjtRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDbEI7SUFDQUMsY0FBY3JCO0lBQ2RzQixhQUFhO1FBQ1gsT0FBTztJQUNUO0FBQ0Y7QUFFTyxTQUFTQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUNwQyxPQUFPQTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29udGV4dC93ZWIzbW9kYWwuanM/ZTkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXZWIzTW9kYWwsIGRlZmF1bHRDb25maWcgfSBmcm9tICdAd2ViM21vZGFsL2V0aGVycy9yZWFjdCdcblxuLy8gMS4gR2V0IHByb2plY3RJZCBhdCBodHRwczovL2Nsb3VkLndhbGxldGNvbm5lY3QuY29tXG5jb25zdCBwcm9qZWN0SWQgPSAnNGFlNGY5MTJkNGU3NjI5YWVlY2NmZjhmYjM4MDRiZTQnXG5cbi8vIDIuIFNldCBjaGFpbnNcbmNvbnN0IG1haW5uZXQgPSB7XG4gIGNoYWluSWQ6IDEsXG4gIG5hbWU6ICdFdGhlcmV1bScsXG4gIGN1cnJlbmN5OiAnRVRIJyxcbiAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V0aGVyc2Nhbi5pbycsXG4gIHJwY1VybDogJ2h0dHBzOi8vY2xvdWRmbGFyZS1ldGguY29tJ1xufVxuXG5jb25zdCBCYXNlU2Vwb2xpYVRlc3RuZXQgPSB7XG4gIGNoYWluSWQ6IDg0NTMyLFxuICBuYW1lOiAnQmFzZSBTZXBvbGlhIFRlc3RuZXQnLFxuICBjdXJyZW5jeTogJ0VUSCcsXG4gIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9zZXBvbGlhLmJhc2VzY2FuLm9yZy8nLFxuICBycGNVcmw6ICdodHRwczovL3NlcG9saWEuYmFzZS5vcmcnXG59XG5cbi8vIDMuIENyZWF0ZSBhIG1ldGFkYXRhIG9iamVjdFxuY29uc3QgbWV0YWRhdGEgPSB7XG4gIG5hbWU6ICdPcHRpYyBPZHlzc2V5JyxcbiAgZGVzY3JpcHRpb246ICdFeHBsb3JlLCBkaXNjb3ZlciwgbWFrZSB5b3VyIHBob3RvcyB3b3JrIGZvciB5b3UhJyxcbiAgdXJsOiAnbG9jYWxob3N0OjMwMDAnLCAvLyBvcmlnaW4gbXVzdCBtYXRjaCBkb21haW4gJiBzdWJkb21haW5cbiAgaWNvbnM6IFsnaHR0cHM6Ly9pcGZzLmZpbGViYXNlLmlvL2lwZnMvUW1SYURURUNTdmFKVkJBWTRhRjFadXVzdXV4eGg0aUFWUjJnRWNTeGVQb3IzWiddXG59XG5cbi8vIDQuIENyZWF0ZSBFdGhlcnMgY29uZmlnXG5jb25zdCBldGhlcnNDb25maWcgPSBkZWZhdWx0Q29uZmlnKHtcbiAgLypSZXF1aXJlZCovXG4gIG1ldGFkYXRhLFxuXG4gIC8qT3B0aW9uYWwqL1xuICBlbmFibGVFSVA2OTYzOiB0cnVlLCAvLyB0cnVlIGJ5IGRlZmF1bHRcbiAgZW5hYmxlSW5qZWN0ZWQ6IHRydWUsIC8vIHRydWUgYnkgZGVmYXVsdFxuICBlbmFibGVDb2luYmFzZTogZmFsc2UsIC8vIHRydWUgYnkgZGVmYXVsdFxuICBycGNVcmw6ICcuLi4nLCAvLyB1c2VkIGZvciB0aGUgQ29pbmJhc2UgU0RLXG4gIGRlZmF1bHRDaGFpbklkOiAxLCAvLyB1c2VkIGZvciB0aGUgQ29pbmJhc2UgU0RLXG4gIGVuYWJsZUVtYWlsOiB0cnVlXG59KVxuXG4vLyA1LiBDcmVhdGUgYSBXZWIzTW9kYWwgaW5zdGFuY2VcbmNyZWF0ZVdlYjNNb2RhbCh7XG4gIGV0aGVyc0NvbmZpZyxcbiAgY2hhaW5zOiBbbWFpbm5ldCwgQmFzZVNlcG9saWFUZXN0bmV0XSxcbiAgcHJvamVjdElkLFxuICBlbmFibGVBbmFseXRpY3M6IHRydWUsIC8vIE9wdGlvbmFsIC0gZGVmYXVsdHMgdG8geW91ciBDbG91ZCBjb25maWd1cmF0aW9uXG4gIGVuYWJsZU9ucmFtcDogdHJ1ZSwgLy8gT3B0aW9uYWwgLSBmYWxzZSBhcyBkZWZhdWx0XG4gIHRoZW1lVmFyaWFibGVzOiB7XG4gICAgJy0tdzNtLXotaW5kZXgnOiA5OTk5LFxuICAgICctLXczbS1hY2NlbnQnOiAnIzAwZidcbiAgfSxcbiAgZGVmYXVsdENoYWluOiBtYWlubmV0LFxuICBjaGFpbkltYWdlczoge1xuICAgIDg0NTMyOiAnaHR0cHM6Ly9pcGZzLmZpbGViYXNlLmlvL2lwZnMvUW1RcXJ6ZTNXMXVTWVdxMmNHU1lEZUR3dGpHWG9oVGpXUG5RODdFVkpHZXEyUCdcbiAgfVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIFdlYjNNb2RhbCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cblxuIl0sIm5hbWVzIjpbImNyZWF0ZVdlYjNNb2RhbCIsImRlZmF1bHRDb25maWciLCJwcm9qZWN0SWQiLCJtYWlubmV0IiwiY2hhaW5JZCIsIm5hbWUiLCJjdXJyZW5jeSIsImV4cGxvcmVyVXJsIiwicnBjVXJsIiwiQmFzZVNlcG9saWFUZXN0bmV0IiwibWV0YWRhdGEiLCJkZXNjcmlwdGlvbiIsInVybCIsImljb25zIiwiZXRoZXJzQ29uZmlnIiwiZW5hYmxlRUlQNjk2MyIsImVuYWJsZUluamVjdGVkIiwiZW5hYmxlQ29pbmJhc2UiLCJkZWZhdWx0Q2hhaW5JZCIsImVuYWJsZUVtYWlsIiwiY2hhaW5zIiwiZW5hYmxlQW5hbHl0aWNzIiwiZW5hYmxlT25yYW1wIiwidGhlbWVWYXJpYWJsZXMiLCJkZWZhdWx0Q2hhaW4iLCJjaGFpbkltYWdlcyIsIldlYjNNb2RhbCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/web3modal.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/web3modal */ \"./context/web3modal.js\");\n/* harmony import */ var _components_disablerightclick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/disablerightclick */ \"./components/disablerightclick.js\");\n/* harmony import */ var _components_disabledrag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/disabledrag */ \"./components/disabledrag.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_web3modal__WEBPACK_IMPORTED_MODULE_2__]);\n_context_web3modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst metadata = {\n    title: \"Optic Odyssey\",\n    description: \"Explore, discover NFTs and make your photos work for you on Base\"\n};\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_web3modal__WEBPACK_IMPORTED_MODULE_2__.Web3Modal, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_disablerightclick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/patrick/Desktop/projects/Optic Odyssey on Base/front-end-integration/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_disabledrag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/patrick/Desktop/projects/Optic Odyssey on Base/front-end-integration/pages/_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/patrick/Desktop/projects/Optic Odyssey on Base/front-end-integration/pages/_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/patrick/Desktop/projects/Optic Odyssey on Base/front-end-integration/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDbUI7QUFDZTtBQUNaO0FBQzVDLE1BQU1HLFdBQVc7SUFDdEJDLE9BQU87SUFDUEMsYUFBYTtBQUNmLEVBQUM7QUFFYyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNPO2tCQUNFLDRFQUFDUix5REFBU0E7OzhCQUNWLDhEQUFDQyxxRUFBaUJBOzs7Ozs4QkFDbEIsOERBQUNDLCtEQUFXQTs7Ozs7OEJBQ1osOERBQUNLO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFdlYjNNb2RhbCB9IGZyb20gJ0AvY29udGV4dC93ZWIzbW9kYWwnO1xuaW1wb3J0IERpc2FibGVSaWdodENsaWNrIGZyb20gJ0AvY29tcG9uZW50cy9kaXNhYmxlcmlnaHRjbGljayc7XG5pbXBvcnQgRGlzYWJsZURyYWcgZnJvbSAnQC9jb21wb25lbnRzL2Rpc2FibGVkcmFnJztcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgdGl0bGU6ICdPcHRpYyBPZHlzc2V5JyxcbiAgZGVzY3JpcHRpb246ICdFeHBsb3JlLCBkaXNjb3ZlciBORlRzIGFuZCBtYWtlIHlvdXIgcGhvdG9zIHdvcmsgZm9yIHlvdSBvbiBCYXNlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAgKFxuICAgICAgICAgPD5cbiAgICAgICAgICAgPFdlYjNNb2RhbD5cbiAgICAgICAgICAgPERpc2FibGVSaWdodENsaWNrIC8+XG4gICAgICAgICAgIDxEaXNhYmxlRHJhZyAvPiBcbiAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICA8L1dlYjNNb2RhbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG59XG4iXSwibmFtZXMiOlsiV2ViM01vZGFsIiwiRGlzYWJsZVJpZ2h0Q2xpY2siLCJEaXNhYmxlRHJhZyIsIm1ldGFkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/ethers/react":
/*!******************************************!*\
  !*** external "@web3modal/ethers/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/ethers/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();