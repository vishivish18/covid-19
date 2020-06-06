function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar ></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <footer class=\"footer fixed-bottom\">\n    <p style=\"font-size: 10px; margin-left: 10px;\">Built with hope and prayers by <a href=\"https://vishalranjan.in\" target=\"_blank\">Vishal R</a></p>\n    </footer>\n</div>\n<app-size-detector></app-size-detector>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-8 offset-md-2 col-sm-12 col-xs-12\" style=\"margin-top: 150px; text-align: justify;\">\n      <h5>About</h5>\n      <h1>About Page</h1>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-card/count-card.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-card/count-card.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCountCardCountCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"custom-card\">\n  <p class=\"custom-card-title\" [ngStyle]=\"{'color': color}\">{{cardTitle}}</p>\n  <p>{{totalCount}}</p>\n  <small [ngStyle]=\"{'color': color}\">+{{deltaCount}}</small>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-map/country-map.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-map/country-map.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCountryMapCountryMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-7\" style=\"margin-top: 50px;\">\n      <div id=\"map\"> \n      </div>\n  </div>\n  <div class=\"col-md-5\" style=\"margin-top: 150px;\">\n    <h3>India State wise analysis in progress</h3>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/data-table.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/data-table.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> # </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> {{name}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.country}} </td>\n  </ng-container>\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"confirmed\">\n    <th mat-header-cell *matHeaderCellDef> Confirmed </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.confirmed}} <small>+{{element.deltaConfirmed}}</small> </td>\n  </ng-container>\n  <ng-container matColumnDef=\"deaths\">\n    <th mat-header-cell *matHeaderCellDef> Deaths </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.deaths}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"recovered\">\n    <th mat-header-cell *matHeaderCellDef> Recovered </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.recovered}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"active\">\n    <th mat-header-cell *matHeaderCellDef> Active </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.active}} </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <a class=\"navbar-brand\" href=\"#\">Coronalogy | COVID-19</a>\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/world\">World</a></li>\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/usa\">USA</a></li>\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/india\">India</a></li>\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/who\">WHO</a></li>\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/predictions-and-analysis\">Predictions & Analysis</a></li>\n      <!-- <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/analysis\"></a></li> -->\n    </ul>\n  </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/predictions-analysis/predictions-analysis.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/predictions-analysis/predictions-analysis.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPredictionsAnalysisPredictionsAnalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-8 offset-md-2 col-sm-12 col-xs-12\" style=\"margin-top: 150px; text-align: justify;\">\n      <h5>I have done some analysis on COVID trends and working on some predictions. Will update this section soon.</h5>\n      <h1>{{size}}!</h1>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/size-detector/size-detector.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/size-detector/size-detector.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSizeDetectorSizeDetectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usa-map/usa-map.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usa-map/usa-map.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsaMapUsaMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"margin-top: 30px;\">\n  <div class=\"col-md-6 col-xs-12\">\n    <div id=\"usamap\" style=\"position: fixed;\">\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xs-12\" style=\"margin-top: 50px;\">\n    <div class=\"row\" style=\"margin-bottom: 20px;\">\n      <div class=\"col-md-5\">\n        <p *ngIf=\"allData\" class=\"faded-text\">Last Updated At: 9:30 am IST | {{allData['US']['timeSeries'][0]['date']}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        {{selectedRegion}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'blue'\"  [cardTitle]=\"'Confirmed'\" [totalCount]=\"confirmed\" [deltaCount]=\"deltaConfirmed\" ></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'red'\"  [cardTitle]=\"'Deaths'\" [totalCount]=\"deaths\" [deltaCount]=\"deltaDeaths\"></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'green'\"  [cardTitle]=\"'Recovered'\" [totalCount]=\"recovered\" [deltaCount]=\"deltaRecovered\" ></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'orange'\"  [cardTitle]=\"'Active'\" [totalCount]=\"active\" [deltaCount]=\"deltaActive\"></app-count-card>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-data-table *ngIf=\"allData\" [flag]=\"'US'\"  [allData]=\"allData\" ></app-data-table>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/who/who.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/who/who.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWhoWhoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-8 offset-md-2 col-sm-12 col-xs-12\" style=\"margin-top: 150px; text-align: justify;\">\n      <h5>You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</h5>\n      <ol>\n        <li>\n            Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.\n        </li>\n        <li>\n            Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.\n        </li>\n        <li>\n            Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).\n        </li>\n        <li>\n            Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.\n        </li>\n        <li>\n            Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>\n        <li>\n            Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.\n        </li>\n        <li>\n            If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.\n        </li>\n        <li>\n            Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.\n        </li>\n    </ol>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/world-map/world-map.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/world-map/world-map.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWorldMapWorldMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" style=\"margin-top: 30px;\">\n  <div class=\"col-md-6 col-xs-12\">\n    <div id=\"worldmap\" style=\"position: fixed;\">\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xs-12\" style=\"margin-top: 50px;\">\n    <div class=\"row\" style=\"margin-bottom: 20px;\">\n      <div class=\"col-md-5\">\n        <p *ngIf=\"allData\" class=\"faded-text\">Last Updated At: 9:30 am IST | {{allData['World']['timeSeries']['date']}}</p>\n      </div>\n      <div class=\"col-md-6\">\n        {{selectedRegion}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'blue'\"  [cardTitle]=\"'Confirmed'\" [totalCount]=\"confirmed\" [deltaCount]=\"deltaConfirmed\" ></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'red'\"  [cardTitle]=\"'Deaths'\" [totalCount]=\"deaths\" [deltaCount]=\"deltaDeaths\"></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'green'\"  [cardTitle]=\"'Recovered'\" [totalCount]=\"recovered\" [deltaCount]=\"deltaRecovered\" ></app-count-card>\n      </div>\n      <div class=\"col-md-3\">\n        <app-count-card [color]=\"'orange'\"  [cardTitle]=\"'Active'\" [totalCount]=\"active\" [deltaCount]=\"deltaActive\"></app-count-card>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-data-table *ngIf=\"allData\" [flag]=\"'World'\" [allData]=\"allData\" ></app-data-table>\n      </div>\n    </div>\n    \n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_country_map_country_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/country-map/country-map.component */
    "./src/app/components/country-map/country-map.component.ts");
    /* harmony import */


    var _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/count-card/count-card.component */
    "./src/app/components/count-card/count-card.component.ts");
    /* harmony import */


    var _components_world_map_world_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/world-map/world-map.component */
    "./src/app/components/world-map/world-map.component.ts");
    /* harmony import */


    var _components_usa_map_usa_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/usa-map/usa-map.component */
    "./src/app/components/usa-map/usa-map.component.ts");
    /* harmony import */


    var _components_who_who_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/who/who.component */
    "./src/app/components/who/who.component.ts");
    /* harmony import */


    var _components_predictions_analysis_predictions_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/predictions-analysis/predictions-analysis.component */
    "./src/app/components/predictions-analysis/predictions-analysis.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/world',
      pathMatch: 'full'
    }, {
      path: 'india',
      component: _components_country_map_country_map_component__WEBPACK_IMPORTED_MODULE_3__["CountryMapComponent"],
      children: [{
        path: 'card',
        component: _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__["CountCardComponent"]
      }]
    }, {
      path: 'world',
      component: _components_world_map_world_map_component__WEBPACK_IMPORTED_MODULE_5__["WorldMapComponent"],
      children: [{
        path: 'card',
        component: _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__["CountCardComponent"]
      }]
    }, {
      path: 'usa',
      component: _components_usa_map_usa_map_component__WEBPACK_IMPORTED_MODULE_6__["UsaMapComponent"],
      children: [{
        path: 'card',
        component: _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_4__["CountCardComponent"]
      }]
    }, {
      path: 'who',
      component: _components_who_who_component__WEBPACK_IMPORTED_MODULE_7__["WhoComponent"]
    }, {
      path: 'predictions-and-analysis',
      component: _components_predictions_analysis_predictions_analysis_component__WEBPACK_IMPORTED_MODULE_8__["PredictionsAnalysisComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = function AppComponent(route, router) {
      _classCallCheck(this, AppComponent);

      this.route = route;
      this.router = router;
      this.title = 'Covid-19 Dashboard';
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/count-card/count-card.component */
    "./src/app/components/count-card/count-card.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_country_map_country_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/country-map/country-map.component */
    "./src/app/components/country-map/country-map.component.ts");
    /* harmony import */


    var _components_world_map_world_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/world-map/world-map.component */
    "./src/app/components/world-map/world-map.component.ts");
    /* harmony import */


    var _components_usa_map_usa_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/usa-map/usa-map.component */
    "./src/app/components/usa-map/usa-map.component.ts");
    /* harmony import */


    var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/data-table/data-table.component */
    "./src/app/components/data-table/data-table.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components_who_who_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/who/who.component */
    "./src/app/components/who/who.component.ts");
    /* harmony import */


    var _components_predictions_analysis_predictions_analysis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/predictions-analysis/predictions-analysis.component */
    "./src/app/components/predictions-analysis/predictions-analysis.component.ts");
    /* harmony import */


    var _components_size_detector_size_detector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/size-detector/size-detector.component */
    "./src/app/components/size-detector/size-detector.component.ts");
    /* harmony import */


    var _components_size_detector_resize_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/size-detector/resize.service */
    "./src/app/components/size-detector/resize.service.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_count_card_count_card_component__WEBPACK_IMPORTED_MODULE_7__["CountCardComponent"], _components_country_map_country_map_component__WEBPACK_IMPORTED_MODULE_9__["CountryMapComponent"], _components_world_map_world_map_component__WEBPACK_IMPORTED_MODULE_10__["WorldMapComponent"], _components_usa_map_usa_map_component__WEBPACK_IMPORTED_MODULE_11__["UsaMapComponent"], _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_12__["DataTableComponent"], _components_who_who_component__WEBPACK_IMPORTED_MODULE_14__["WhoComponent"], _components_predictions_analysis_predictions_analysis_component__WEBPACK_IMPORTED_MODULE_15__["PredictionsAnalysisComponent"], _components_size_detector_size_detector_component__WEBPACK_IMPORTED_MODULE_16__["SizeDetectorComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"]],
      providers: [_components_size_detector_resize_service__WEBPACK_IMPORTED_MODULE_17__["ResizeService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/about/about.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/components/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/count-card/count-card.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/count-card/count-card.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCountCardCountCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".custom-card {\n  color: black;\n  background: #fff;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);\n  color: #6c757d;\n  font-size: 1rem;\n  outline: none;\n  padding: 1rem 1rem 1rem 1rem;\n  transition: all 0.2s ease-in-out;\n  text-align: center;\n}\n\n.custom-card-title {\n  font-weight: 700;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWxyYW5qYW4vcHJvamVjdHMvY292aWQtMTkvY292aWQxOS1kYXNoYm9hcmQvc3JjL2FwcC9jb21wb25lbnRzL2NvdW50LWNhcmQvY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudC1jYXJkL2NvdW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50LWNhcmQvY291bnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FyZCB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzNXB4IHJnYmEoMCwwLDAsLjEpO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzdG9tLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6YmxhY2s7XG59IiwiLmN1c3RvbS1jYXJkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VzdG9tLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/count-card/count-card.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/count-card/count-card.component.ts ***!
    \***************************************************************/

  /*! exports provided: CountCardComponent */

  /***/
  function srcAppComponentsCountCardCountCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountCardComponent", function () {
      return CountCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CountCardComponent = /*#__PURE__*/function () {
      function CountCardComponent() {
        _classCallCheck(this, CountCardComponent);
      }

      _createClass(CountCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CountCardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountCardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountCardComponent.prototype, "totalCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountCardComponent.prototype, "deltaCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CountCardComponent.prototype, "color", void 0);
    CountCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-count-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./count-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/count-card/count-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./count-card.component.scss */
      "./src/app/components/count-card/count-card.component.scss"))["default"]]
    })], CountCardComponent);
    /***/
  },

  /***/
  "./src/app/components/country-map/country-map.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/country-map/country-map.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCountryMapCountryMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-60 {\n  margin-top: 60px;\n}\n\nsvg {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWxyYW5qYW4vcHJvamVjdHMvY292aWQtMTkvY292aWQxOS1kYXNoYm9hcmQvc3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbWFwL2NvdW50cnktbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbWFwL2NvdW50cnktbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdW50cnktbWFwL2NvdW50cnktbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tNjAge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7O1xufVxuc3ZnIHsgXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59IiwiLm0tNjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG5zdmcge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/country-map/country-map.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/country-map/country-map.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CountryMapComponent */

  /***/
  function srcAppComponentsCountryMapCountryMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryMapComponent", function () {
      return CountryMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constants.js */
    "./src/app/constants.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var topojson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! topojson */
    "./node_modules/topojson/index.js");

    var CountryMapComponent = /*#__PURE__*/function () {
      function CountryMapComponent() {
        _classCallCheck(this, CountryMapComponent);
      }

      _createClass(CountryMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(_constants_js__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_MAP_PATH"]);
          this.getMapdata(_constants_js__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_MAP_PATH"]);
        }
      }, {
        key: "getMapdata",
        value: function getMapdata(mapData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data, topology, margin, height, width, svg, projection, path;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return d3__WEBPACK_IMPORTED_MODULE_3__["json"](mapData['India'].geoJSON);

                  case 2:
                    data = _context.sent;
                    console.log(data);
                    topology = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](data, data.objects['india']);
                    margin = {
                      top: 50,
                      left: 50,
                      right: 50,
                      bottom: 50
                    }, height = 900 - margin.top - margin.bottom, width = 800 - margin.left - margin.right;
                    console.log(data);
                    console.log(data.objects['india']);
                    svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#map').append("svg").attr("height", height + margin.top + margin.bottom).attr("width", width + margin.left + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    projection = d3__WEBPACK_IMPORTED_MODULE_3__["geoMercator"]().translate([width / 2, height / 2]); //.scale(10)

                    projection.fitSize([700, 700], topology);
                    path = d3__WEBPACK_IMPORTED_MODULE_3__["geoPath"]().projection(projection);
                    svg.selectAll('.state').data(topology.features).enter().append("path").attr('class', 'state').attr("d", path).attr("fill", 'white').on('click', function (d) {
                      alert(d['properties']['st_nm']);
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("selected", true);
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).text("New");
                    }).on('mouseover', function (d) {
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", true);
                    }).on('mouseout', function (d) {
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", false);
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return CountryMapComponent;
    }();

    CountryMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./country-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-map/country-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./country-map.component.scss */
      "./src/app/components/country-map/country-map.component.scss"))["default"]]
    })], CountryMapComponent);
    /***/
  },

  /***/
  "./src/app/components/data-table/data-table.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/data-table/data-table.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDataTableDataTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  background: white;\n  color: black;\n  margin-top: 50px;\n  border: none !important;\n  box-shadow: none;\n  text-align: justify;\n}\n\ntd,\nth {\n  background: white;\n  color: black;\n}\n\ntr:nth-child(odd) {\n  background-color: #4C8BF5 !important;\n  color: #fff !important;\n}\n\n.custom-table th {\n  background-color: #0184FF;\n  color: white;\n}\n\n.custom-table tbody tr:nth-child(odd) {\n  background-color: white;\n}\n\n.custom-table tbody tr:nth-child(even) {\n  background-color: #f5f5f5;\n}\n\n.operation-name {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWxyYW5qYW4vcHJvamVjdHMvY292aWQtMTkvY292aWQxOS1kYXNoYm9hcmQvc3JjL2FwcC9jb21wb25lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxudGQsXG50aCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDOEJGNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbi5jdXN0b20tdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4NEZGO1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5jdXN0b20tdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCl7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLXRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cbi5vcGVyYXRpb24tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG50ZCxcbnRoIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEM4QkY1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4NEZGO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS10YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ub3BlcmF0aW9uLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/data-table/data-table.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/data-table/data-table.component.ts ***!
    \***************************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcAppComponentsDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts"); //TODO: Implement interface


    var DataTableComponent = /*#__PURE__*/function () {
      function DataTableComponent(updateSvc) {
        _classCallCheck(this, DataTableComponent);

        this.updateSvc = updateSvc;
        this.allData = {};
      }

      _createClass(DataTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.parseAllData();
        }
      }, {
        key: "parseAllData",
        value: function parseAllData() {
          console.log("parsing for", this.flag);
          var ELEMENT_DATA = [];
          var indexOfArray = 1;

          for (var key in this.allData) {
            if (this.allData.hasOwnProperty(key)) {
              if (this.allData[key]['name'] !== this.flag) {
                var rowObj = {};
                rowObj['position'] = indexOfArray;
                rowObj['country'] = this.allData[key]['name'];
                rowObj['confirmed'] = this.allData[key]['timeSeries']['confirmed']['count'];
                rowObj['deltaConfirmed'] = this.allData[key]['timeSeries']['confirmed']['delta'];
                rowObj['deaths'] = this.allData[key]['timeSeries']['deaths']['count'];
                rowObj['deltaDeaths'] = this.allData[key]['timeSeries']['deaths']['delta'];
                rowObj['recovered'] = this.allData[key]['timeSeries']['recovered']['count'];
                rowObj['deltaRecovered'] = this.allData[key]['timeSeries']['recovered']['delta'];
                rowObj['active'] = this.allData[key]['timeSeries']['active']['count'];
                rowObj['deltaActive'] = this.allData[key]['timeSeries']['active']['delta'];
                ELEMENT_DATA.push(rowObj);
                indexOfArray++;
              }
            }
          }

          if (this.flag == 'World') {
            this.name = 'Country';
          } else if (this.flag == 'US') {
            this.name = 'State/Other';
          }

          this.displayedColumns = ['position', 'name', 'confirmed', 'deaths', 'recovered', 'active'];
          this.dataSource = ELEMENT_DATA;
        }
      }]);

      return DataTableComponent;
    }();

    DataTableComponent.ctorParameters = function () {
      return [{
        type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "allData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DataTableComponent.prototype, "flag", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/data-table/data-table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-table.component.scss */
      "./src/app/components/data-table/data-table.component.scss"))["default"]]
    })], DataTableComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*,\n*:after,\n*:before {\n  margin: 0;\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  line-height: 1.5;\n  color: black;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.navbar {\n  background-color: rgba(255, 255, 255, 0.95) !important;\n  box-shadow: 0 6px 6px -6px #ccc;\n  height: 60px !important;\n}\n\n.navbar-font > a {\n  font-size: 14px;\n  color: #95989A !important;\n}\n\n.navbar-font > a:hover {\n  color: #212121 !important;\n}\n\n.custom-toggler.navbar-toggler {\n  border-color: #2f8fe9b4;\n  outline: none;\n}\n\n.custom-toggler-lines {\n  color: #2f8fe9b4;\n  font-size: 20px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWxyYW5qYW4vcHJvamVjdHMvY292aWQtMTkvY292aWQxOS1kYXNoYm9hcmQvc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0ksU0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxzREFBQTtFQUdBLCtCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKixcbio6YWZ0ZXIsXG4qOmJlZm9yZXtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keXtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OmhpZGRlbjtcbn1cblxuLy9vdmVyIHJpZGluZyBib290c3RyYXBcbi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICNjY2M7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDZweCA2cHggLTZweCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICNjY2M7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8vbmF2YmFyIGZvbnRcbi5uYXZiYXItZm9udD5hIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM5NTk4OUEgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItZm9udD5hOmhvdmVyIHtcbiAgICBjb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXRvZ2dsZXIubmF2YmFyLXRvZ2dsZXIgeyBcbiAgICBib3JkZXItY29sb3I6ICMyZjhmZTliNDtcbiAgICBvdXRsaW5lOiBub25lO1xufSBcblxuLmN1c3RvbS10b2dnbGVyLWxpbmVzIHtcbiAgICBjb2xvcjojMmY4ZmU5YjQ7IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46NXB4O1xuXG59IiwiKixcbio6YWZ0ZXIsXG4qOmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogYmxhY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4ICNjY2M7XG4gIC1tb3otYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggI2NjYztcbiAgYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggI2NjYztcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItZm9udCA+IGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ODlBICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItZm9udCA+IGE6aG92ZXIge1xuICBjb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXRvZ2dsZXIubmF2YmFyLXRvZ2dsZXIge1xuICBib3JkZXItY29sb3I6ICMyZjhmZTliNDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmN1c3RvbS10b2dnbGVyLWxpbmVzIHtcbiAgY29sb3I6ICMyZjhmZTliNDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/components/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/predictions-analysis/predictions-analysis.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/predictions-analysis/predictions-analysis.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPredictionsAnalysisPredictionsAnalysisComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZGljdGlvbnMtYW5hbHlzaXMvcHJlZGljdGlvbnMtYW5hbHlzaXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/predictions-analysis/predictions-analysis.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/predictions-analysis/predictions-analysis.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PredictionsAnalysisComponent */

  /***/
  function srcAppComponentsPredictionsAnalysisPredictionsAnalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsAnalysisComponent", function () {
      return PredictionsAnalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../size-detector/resize.service */
    "./src/app/components/size-detector/resize.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PredictionsAnalysisComponent = /*#__PURE__*/function () {
      function PredictionsAnalysisComponent(resizeSvc) {
        var _this = this;

        _classCallCheck(this, PredictionsAnalysisComponent);

        this.resizeSvc = resizeSvc;
        this.resizeSvc.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0)).subscribe(function (x) {
          console.log('inside subscribe');
          _this.size = x;
        });
      }

      _createClass(PredictionsAnalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.size = 4;
        }
      }]);

      return PredictionsAnalysisComponent;
    }();

    PredictionsAnalysisComponent.ctorParameters = function () {
      return [{
        type: _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"]
      }];
    };

    PredictionsAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions-analysis',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions-analysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/predictions-analysis/predictions-analysis.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions-analysis.component.scss */
      "./src/app/components/predictions-analysis/predictions-analysis.component.scss"))["default"]]
    })], PredictionsAnalysisComponent);
    /***/
  },

  /***/
  "./src/app/components/size-detector/resize.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/size-detector/resize.service.ts ***!
    \************************************************************/

  /*! exports provided: ResizeService */

  /***/
  function srcAppComponentsSizeDetectorResizeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeService", function () {
      return ResizeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ResizeService = /*#__PURE__*/function () {
      function ResizeService() {
        _classCallCheck(this, ResizeService);

        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ResizeService, [{
        key: "onResize",
        value: function onResize(size) {
          this.resizeSubject.next(size);
        }
      }, {
        key: "onResize$",
        get: function get() {
          return this.resizeSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        }
      }]);

      return ResizeService;
    }();

    ResizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ResizeService);
    /***/
  },

  /***/
  "./src/app/components/size-detector/screen-size.enum.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/size-detector/screen-size.enum.ts ***!
    \**************************************************************/

  /*! exports provided: SCREEN_SIZE */

  /***/
  function srcAppComponentsSizeDetectorScreenSizeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCREEN_SIZE", function () {
      return SCREEN_SIZE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SCREEN_SIZE;

    (function (SCREEN_SIZE) {
      SCREEN_SIZE[SCREEN_SIZE["XS"] = 0] = "XS";
      SCREEN_SIZE[SCREEN_SIZE["SM"] = 1] = "SM";
      SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
      SCREEN_SIZE[SCREEN_SIZE["LG"] = 3] = "LG";
      SCREEN_SIZE[SCREEN_SIZE["XL"] = 4] = "XL";
    })(SCREEN_SIZE || (SCREEN_SIZE = {}));
    /***/

  },

  /***/
  "./src/app/components/size-detector/size-detector.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/size-detector/size-detector.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSizeDetectorSizeDetectorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l6ZS1kZXRlY3Rvci9zaXplLWRldGVjdG9yLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/size-detector/size-detector.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/size-detector/size-detector.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SizeDetectorComponent */

  /***/
  function srcAppComponentsSizeDetectorSizeDetectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SizeDetectorComponent", function () {
      return SizeDetectorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _resize_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resize.service */
    "./src/app/components/size-detector/resize.service.ts");
    /* harmony import */


    var _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./screen-size.enum */
    "./src/app/components/size-detector/screen-size.enum.ts");

    var SizeDetectorComponent = /*#__PURE__*/function () {
      function SizeDetectorComponent(elementRef, resizeSvc) {
        _classCallCheck(this, SizeDetectorComponent);

        this.elementRef = elementRef;
        this.resizeSvc = resizeSvc;
        this.prefix = 'is-';
        this.sizes = [{
          id: _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__["SCREEN_SIZE"].XS,
          name: 'xs',
          css: "d-block d-sm-none"
        }, {
          id: _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__["SCREEN_SIZE"].SM,
          name: 'sm',
          css: "d-none d-sm-block d-md-none"
        }, {
          id: _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__["SCREEN_SIZE"].MD,
          name: 'md',
          css: "d-none d-md-block d-lg-none"
        }, {
          id: _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__["SCREEN_SIZE"].LG,
          name: 'lg',
          css: "d-none d-lg-block d-xl-none"
        }, {
          id: _screen_size_enum__WEBPACK_IMPORTED_MODULE_3__["SCREEN_SIZE"].XL,
          name: 'xl',
          css: "d-none d-xl-block"
        }];
      }

      _createClass(SizeDetectorComponent, [{
        key: "onResize",
        value: function onResize() {
          this.detectScreenSize();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.detectScreenSize();
        }
      }, {
        key: "detectScreenSize",
        value: function detectScreenSize() {
          var _this2 = this;

          var currentSize = this.sizes.find(function (x) {
            var el = _this2.elementRef.nativeElement.querySelector(".".concat(_this2.prefix).concat(x.id)); // const isVisible = window.getComputedStyle(el).display != 'none';


            var isVisible = true;
            return isVisible;
          });
          this.resizeSvc.onResize(currentSize.id);
        }
      }]);

      return SizeDetectorComponent;
    }();

    SizeDetectorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _resize_service__WEBPACK_IMPORTED_MODULE_2__["ResizeService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", [])], SizeDetectorComponent.prototype, "onResize", null);
    SizeDetectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-size-detector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./size-detector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/size-detector/size-detector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./size-detector.component.css */
      "./src/app/components/size-detector/size-detector.component.css"))["default"]]
    })], SizeDetectorComponent);
    /***/
  },

  /***/
  "./src/app/components/usa-map/usa-map.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/usa-map/usa-map.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsaMapUsaMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNhLW1hcC91c2EtbWFwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/usa-map/usa-map.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/usa-map/usa-map.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsaMapComponent */

  /***/
  function srcAppComponentsUsaMapUsaMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsaMapComponent", function () {
      return UsaMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constants.js */
    "./src/app/constants.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var topojson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! topojson */
    "./node_modules/topojson/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../size-detector/resize.service */
    "./src/app/components/size-detector/resize.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/data.service.js */
    "./src/app/services/data.service.js");

    var UsaMapComponent = /*#__PURE__*/function () {
      function UsaMapComponent(resizeSvc, http, updateSvc) {
        var _this3 = this;

        _classCallCheck(this, UsaMapComponent);

        this.resizeSvc = resizeSvc;
        this.http = http;
        this.updateSvc = updateSvc;
        this.selectedRegion = 'USA';
        this.appRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].appRoot;
        this.resizeSvc.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(0)).subscribe(function (x) {
          _this3.size = x;
          _this3.innerWidth = window.innerWidth;
          _this3.innerHeight = window.innerHeight;
        });
      }

      _createClass(UsaMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllStatesData();
          this.innerWidth = window.innerWidth;
          this.innerHeight = window.innerHeight;
        }
      }, {
        key: "getAllStatesData",
        value: function getAllStatesData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var obs;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    obs = this.http.get(this.appRoot + '/api/v0.1/analytics/count?scope=usa&source=all&duration=latest');
                    _context2.next = 3;
                    return obs.subscribe(function (res) {
                      _this4.allData = res;

                      _this4.updateSvc.updateData(_this4.allData);

                      _this4.getMapdata(_constants_js__WEBPACK_IMPORTED_MODULE_2__["COUNTRY_MAP_PATH"]);

                      _this4.selectCountry();
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getHeatMapColor",
        value: function getHeatMapColor(value) {
          switch (true) {
            // // Blue
            // case value >= 0 && value <= 6.25:
            //   return '#cfe1f2'
            // case value > 6.25 && value <= 12.5:
            //   return '#93c4de'
            // case value > 12.5 && value <= 18.75:
            //   return '#4a97c9'
            // case value > 18.75 && value <= 25:
            //   return '#1764ab'
            //   // Green
            // case value > 25 && value <= 31.25:
            //   return '#d3edcc'
            // case value > 31.25 && value <= 37.5:
            //   return '#98d493'
            // case value > 37.5 && value <= 43.75:
            //   return '#4bb061'
            // case value > 43.75 && value <= 50:
            //   return '#157e3a'
            //Orange
            // cfe1f2
            // 93c4de
            // 4a97c9
            // 1764ab
            //light #e1ecf7
            // #cbdef0
            // #abcfe5
            // #81badb
            // #58a1ce
            // #3786c0
            // #1a69ae
            // #094c96
            case value > 0 && value <= 1.1:
              return '#e1ecf7';

            case value > 1.1 && value <= 2:
              return '#cbdef0';

            case value > 2 && value <= 5:
              return '#81badb';

            case value > 5 && value <= 7:
              return '#58a1ce';

            case value > 7 && value <= 10:
              return '#3786c0';

            case value > 10 && value <= 15:
              return '#1764ab';

            case value > 15 && value <= 30:
              return '#1a69ae';

            case value > 30 && value <= 60:
              return '#094c96';

            case value > 60 && value <= 80:
              return '#fb8a6a';

            case value > 80 && value <= 95:
              return '#073b7d';

            case value > 75 && value <= 100:
              return '#bb141a';
            // case value > 0 && value <= 1.1:
            //   return '#d3edcc'
            // case value > 1.1 && value <= 3:
            //   return '#98d493'
            // case value > 5 && value <= 10:
            //   return '#4a97c9'
            // case value > 10 && value <= 15:
            //   return '#1764ab'
            // case value > 30 && value <= 60:
            //   return '#1764ab'
            // case value > 60 && value <=80:
            //   return '#fb8a6a'
            // case value > 80 && value <= 95:
            //   return '#f14431'
            // case value > 75 && value <= 100:
            //   return '#bb141a'
            //Red
            // case value > 75 && value <= 81.25:
            //   return '#fcc9b4'
            // case value > 81.25 && value <= 87.5:
            //   return '#fb8a6a'
            // case value > 87.5 && value <= 93.75:
            //   return '#f14431'
            // case value > 93.75 && value <= 100:
            //   return '#bb141a'

            default:
              return;
          }
        }
      }, {
        key: "normalizeValues",
        value: function normalizeValues(countryName, value, min, max) {
          var maxRange = 100;
          var minRange = 1;
          var newvalue = (maxRange - minRange) / (max - min) * (value - max) + maxRange;
          return this.getHeatMapColor(newvalue);
        }
      }, {
        key: "selectState",
        value: function selectState(data) {
          this.selectedRegion = data['properties']['name'];
          this.confirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['count'] : 'N/A';
          this.deltaConfirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['delta'] : 'N/A';
          this.deaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['count'] : 'N/A';
          this.deltaDeaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['delta'] : 'N/A';
          this.recovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['count'] : 'N/A';
          this.deltaRecovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['delta'] : 'N/A';
          this.active = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['count'] : 'N/A';
          this.deltaActive = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['delta'] : 'N/A';
        }
      }, {
        key: "selectCountry",
        value: function selectCountry() {
          this.selectedRegion = 'US';
          this.confirmed = this.allData['US']['timeSeries'][0]['confirmed']['count'];
          this.deltaConfirmed = this.allData['US']['timeSeries'][0]['confirmed']['delta'];
          this.deaths = this.allData['US']['timeSeries'][0]['deaths']['count'];
          this.deltaDeaths = this.allData['US']['timeSeries'][0]['deaths']['delta'];
          this.recovered = this.allData['US']['timeSeries'][0]['recovered']['count'];
          this.deltaRecovered = this.allData['US']['timeSeries'][0]['recovered']['delta'];
          this.active = this.allData['US']['timeSeries'][0]['active']['count'];
          this.deltaActive = this.allData['US']['timeSeries'][0]['active']['delta'];
        }
      }, {
        key: "getMapdata",
        value: function getMapdata(mapData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var data, topology, margin, height, width, svg, projection, path, that;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return d3__WEBPACK_IMPORTED_MODULE_3__["json"](mapData['USA'].geoJSON);

                  case 2:
                    data = _context3.sent;
                    console.log(data);
                    topology = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](data, data.objects['states']);
                    margin = {
                      top: 50,
                      left: 50,
                      right: 50,
                      bottom: 50
                    };
                    height = 2 / 3 * this.innerWidth;
                    width = 2 / 3 * this.innerWidth;
                    height = height - margin.top - margin.bottom;
                    width = width - margin.left - margin.right;
                    console.log(data);
                    console.log(data.objects['states']);
                    svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#usamap').append("svg").attr("height", height + margin.top + margin.bottom).attr("width", width + margin.left + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    projection = d3__WEBPACK_IMPORTED_MODULE_3__["geoAlbersUsa"](); //.translate([width/2, height/2])
                    //.scale(10)

                    projection.fitSize([height - 280, width - 280], topology);
                    path = d3__WEBPACK_IMPORTED_MODULE_3__["geoPath"]().projection(projection);
                    that = this;
                    svg.selectAll('.state').data(topology.features).enter().append("path").attr('class', 'state').attr("d", path).attr("fill", function (d) {
                      var stateName = d['properties']['name'];

                      if (stateName) {
                        if (that.allData[stateName]) {
                          var confirmedForState = that.allData[stateName]['timeSeries']['confirmed']['count']; // let hsl = that.normalizeValues(stateName,confirmedForCountry, 0, 200000)
                          // //console.log(hsl)
                          // return d3.hsl(hsl.h, hsl.s, hsl.l)

                          var colorCode = that.normalizeValues(stateName, confirmedForState, 0, 800000);
                          return colorCode;
                        } else {
                          //console.log("prinint yellow",d)
                          return 'yellow';
                        }
                      }
                    }).on('click', function (d) {
                      alert(d['properties']['name']); //d3.select(this).classed("selected",true)
                      //d3.select(this).text("New");
                    }).on('mouseover', function (d) {
                      that.selectState(d);
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", true);
                    }).on('mouseout', function (d) {
                      that.selectCountry();
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", false);
                    });

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return UsaMapComponent;
    }();

    UsaMapComponent.ctorParameters = function () {
      return [{
        type: _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_7__["ResizeService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_9__["DataService"]
      }];
    };

    UsaMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usa-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usa-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usa-map/usa-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usa-map.component.scss */
      "./src/app/components/usa-map/usa-map.component.scss"))["default"]]
    })], UsaMapComponent);
    /***/
  },

  /***/
  "./src/app/components/who/who.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/who/who.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWhoWhoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2hvL3doby5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/who/who.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/who/who.component.ts ***!
    \*************************************************/

  /*! exports provided: WhoComponent */

  /***/
  function srcAppComponentsWhoWhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhoComponent", function () {
      return WhoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhoComponent = /*#__PURE__*/function () {
      function WhoComponent() {
        _classCallCheck(this, WhoComponent);
      }

      _createClass(WhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhoComponent;
    }();

    WhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-who',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./who.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/who/who.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./who.component.scss */
      "./src/app/components/who/who.component.scss"))["default"]]
    })], WhoComponent);
    /***/
  },

  /***/
  "./src/app/components/world-map/world-map.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/world-map/world-map.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWorldMapWorldMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".faded-text {\n  color: grey;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNoYWxyYW5qYW4vcHJvamVjdHMvY292aWQtMTkvY292aWQxOS1kYXNoYm9hcmQvc3JjL2FwcC9jb21wb25lbnRzL3dvcmxkLW1hcC93b3JsZC1tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvd29ybGQtbWFwL3dvcmxkLW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmxkLW1hcC93b3JsZC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkZWQtdGV4dCB7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufSIsIi5mYWRlZC10ZXh0IHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/world-map/world-map.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/world-map/world-map.component.ts ***!
    \*************************************************************/

  /*! exports provided: WorldMapComponent */

  /***/
  function srcAppComponentsWorldMapWorldMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldMapComponent", function () {
      return WorldMapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../constants.js */
    "./src/app/constants.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var topojson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! topojson */
    "./node_modules/topojson/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../size-detector/resize.service */
    "./src/app/components/size-detector/resize.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/data.service.js */
    "./src/app/services/data.service.js");

    var WorldMapComponent = /*#__PURE__*/function () {
      function WorldMapComponent(resizeSvc, http, updateSvc) {
        var _this5 = this;

        _classCallCheck(this, WorldMapComponent);

        this.resizeSvc = resizeSvc;
        this.http = http;
        this.updateSvc = updateSvc;
        this.selectedRegion = 'World';
        this.appRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].appRoot;
        this.resizeSvc.onResize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["delay"])(0)).subscribe(function (x) {
          _this5.size = x;
          _this5.innerWidth = window.innerWidth;
          _this5.innerHeight = window.innerHeight;
        });
      }

      _createClass(WorldMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllCountryData();
          this.innerWidth = window.innerWidth;
          this.innerHeight = window.innerHeight;
        }
      }, {
        key: "getAllCountryData",
        value: function getAllCountryData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var obs;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    obs = this.http.get(this.appRoot + '/api/v0.1/analytics/count?scope=world&source=all&duration=latest');
                    _context4.next = 3;
                    return obs.subscribe(function (res) {
                      _this6.allData = res;

                      _this6.updateSvc.updateData(_this6.allData);

                      _this6.getMapdata(_constants_js__WEBPACK_IMPORTED_MODULE_2__["WORLD_MAP_PATH"]);

                      _this6.selectWorld();
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getHeatMapColor",
        value: function getHeatMapColor(value) {
          switch (true) {
            // // Blue
            // case value >= 0 && value <= 6.25:
            //   return '#cfe1f2'
            // case value > 6.25 && value <= 12.5:
            //   return '#93c4de'
            // case value > 12.5 && value <= 18.75:
            //   return '#4a97c9'
            // case value > 18.75 && value <= 25:
            //   return '#1764ab'
            //   // Green
            // case value > 25 && value <= 31.25:
            //   return '#d3edcc'
            // case value > 31.25 && value <= 37.5:
            //   return '#98d493'
            // case value > 37.5 && value <= 43.75:
            //   return '#4bb061'
            // case value > 43.75 && value <= 50:
            //   return '#157e3a'
            //Orange
            // cfe1f2
            // 93c4de
            // 4a97c9
            // 1764ab
            //light #e1ecf7
            // #cbdef0
            // #abcfe5
            // #81badb
            // #58a1ce
            // #3786c0
            // #1a69ae
            // #094c96
            case value > 0 && value <= 1.1:
              return '#e1ecf7';

            case value > 1.1 && value <= 2:
              return '#cbdef0';

            case value > 2 && value <= 5:
              return '#81badb';

            case value > 5 && value <= 7:
              return '#58a1ce';

            case value > 7 && value <= 10:
              return '#3786c0';

            case value > 10 && value <= 15:
              return '#1764ab';

            case value > 15 && value <= 30:
              return '#1a69ae';

            case value > 30 && value <= 60:
              return '#094c96';

            case value > 60 && value <= 80:
              return '#fb8a6a';

            case value > 80 && value <= 95:
              return '#073b7d';

            case value > 75 && value <= 100:
              return '#bb141a';
            // case value > 0 && value <= 1.1:
            //   return '#d3edcc'
            // case value > 1.1 && value <= 3:
            //   return '#98d493'
            // case value > 5 && value <= 10:
            //   return '#4a97c9'
            // case value > 10 && value <= 15:
            //   return '#1764ab'
            // case value > 30 && value <= 60:
            //   return '#1764ab'
            // case value > 60 && value <=80:
            //   return '#fb8a6a'
            // case value > 80 && value <= 95:
            //   return '#f14431'
            // case value > 75 && value <= 100:
            //   return '#bb141a'
            //Red
            // case value > 75 && value <= 81.25:
            //   return '#fcc9b4'
            // case value > 81.25 && value <= 87.5:
            //   return '#fb8a6a'
            // case value > 87.5 && value <= 93.75:
            //   return '#f14431'
            // case value > 93.75 && value <= 100:
            //   return '#bb141a'

            default:
              return;
          }
        }
      }, {
        key: "normalizeValues",
        value: function normalizeValues(countryName, value, min, max) {
          var maxRange = 100;
          var minRange = 1;
          var newvalue = (maxRange - minRange) / (max - min) * (value - max) + maxRange;
          return this.getHeatMapColor(newvalue);
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(data) {
          this.selectedRegion = data['properties']['name'];
          this.confirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['count'] : 'N/A';
          this.deltaConfirmed = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['confirmed']['delta'] : 'N/A';
          this.deaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['count'] : 'N/A';
          this.deltaDeaths = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['deaths']['delta'] : 'N/A';
          this.recovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['count'] : 'N/A';
          this.deltaRecovered = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['recovered']['delta'] : 'N/A';
          this.active = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['count'] : 'N/A';
          this.deltaActive = this.allData[this.selectedRegion] ? this.allData[this.selectedRegion]['timeSeries']['active']['delta'] : 'N/A';
        }
      }, {
        key: "selectWorld",
        value: function selectWorld() {
          this.selectedRegion = 'World';
          this.confirmed = this.allData['World']['timeSeries']['confirmed']['count'];
          this.deltaConfirmed = this.allData['World']['timeSeries']['confirmed']['delta'];
          this.deaths = this.allData['World']['timeSeries']['deaths']['count'];
          this.deltaDeaths = this.allData['World']['timeSeries']['deaths']['delta'];
          this.recovered = this.allData['World']['timeSeries']['recovered']['count'];
          this.deltaRecovered = this.allData['World']['timeSeries']['recovered']['delta'];
          this.active = this.allData['World']['timeSeries']['active']['count'];
          this.deltaActive = this.allData['World']['timeSeries']['active']['delta'];
        }
      }, {
        key: "getMapdata",
        value: function getMapdata(mapData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var data, topology, margin, height, width, svg, projection, path, that;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return d3__WEBPACK_IMPORTED_MODULE_3__["json"](mapData['World'].geoJSON);

                  case 2:
                    data = _context5.sent;
                    topology = topojson__WEBPACK_IMPORTED_MODULE_4__["feature"](data, data.objects['countries']);
                    margin = {
                      top: 50,
                      left: 50,
                      right: 50,
                      bottom: 50
                    };
                    height = 2 / 3 * this.innerWidth;
                    width = 2 / 3 * this.innerWidth;
                    height = height - margin.top - margin.bottom, width = width - margin.left - margin.right;
                    svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#worldmap').append("svg").attr("height", height + margin.top + margin.bottom).attr("width", width + margin.left + margin.right).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    projection = d3__WEBPACK_IMPORTED_MODULE_3__["geoMercator"](); //.translate([width / 2, height / 2])
                    //.scale(120)

                    projection.fitSize([height - 300, width - 300], topology);
                    path = d3__WEBPACK_IMPORTED_MODULE_3__["geoPath"]().projection(projection);
                    that = this;
                    svg.selectAll('.country').data(topology.features).enter().append("path").attr('class', 'country').attr("d", path).attr("fill", function (d) {
                      var countryName = d['properties']['name'];

                      if (countryName) {
                        if (that.allData[countryName]) {
                          var confirmedForCountry = that.allData[countryName]['timeSeries']['confirmed']['count']; // let hsl = that.normalizeValues(countryName,confirmedForCountry, 0, 200000)
                          // //console.log(hsl)
                          // return d3.hsl(hsl.h, hsl.s, hsl.l)

                          var colorCode = that.normalizeValues(countryName, confirmedForCountry, 0, 2000000);
                          return colorCode;
                        } else {
                          //console.log("prinint yellow",d)
                          return 'yellow';
                        }
                      }
                    }).on('click', function (d) {
                      //console.log(d['properties']['name'])
                      //d3.select(this).classed("selected", true)
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).text("New");
                    }).on('mouseover', function (d) {
                      that.selectCountry(d);
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", true);
                    }) // .on('mouseover', (d) => {
                    //   this.selectCountry(d)
                    // })
                    .on('mouseout', function (d) {
                      that.selectWorld();
                      d3__WEBPACK_IMPORTED_MODULE_3__["select"](this).classed("hovered", false);
                    }); // svg.selectAll(".country-label")
                    //   .data(topology.features)
                    //   .enter().append("text")
                    //   .attr("x", function(d) {
                    //     var coords  = projection(d['geometry']['coordinates'][0][0][0], d['geometry']['coordinates'][0][0][1])
                    //     return coords[0]
                    //   })
                    //   .attr("y", function(d) {
                    //     var coords  = projection(d['geometry']['coordinates'][0][0][0], d['geometry']['coordinates'][0][0][1])
                    //     return coords[1]
                    //   })
                    //   .text(function (d) {
                    //     return d['properties']['name']
                    //   })

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return WorldMapComponent;
    }();

    WorldMapComponent.ctorParameters = function () {
      return [{
        type: _size_detector_resize_service__WEBPACK_IMPORTED_MODULE_7__["ResizeService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_app_services_data_service_js__WEBPACK_IMPORTED_MODULE_9__["DataService"]
      }];
    };

    WorldMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-world-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./world-map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/world-map/world-map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./world-map.component.scss */
      "./src/app/components/world-map/world-map.component.scss"))["default"]]
    })], WorldMapComponent);
    /***/
  },

  /***/
  "./src/app/constants.js":
  /*!******************************!*\
    !*** ./src/app/constants.js ***!
    \******************************/

  /*! exports provided: WORLD_GEJSON_PATH, COUNTRY_GEJSON_PATH, COUNTRY_MAP_PATH, WORLD_MAP_PATH */

  /***/
  function srcAppConstantsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WORLD_GEJSON_PATH", function () {
      return WORLD_GEJSON_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COUNTRY_GEJSON_PATH", function () {
      return COUNTRY_GEJSON_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COUNTRY_MAP_PATH", function () {
      return COUNTRY_MAP_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WORLD_MAP_PATH", function () {
      return WORLD_MAP_PATH;
    });

    var WORLD_GEJSON_PATH = '/assets/maps/world';
    var COUNTRY_GEJSON_PATH = '/assets/maps/countries';
    var COUNTRY_MAP_PATH = {
      'India': {
        name: 'India',
        geoJSON: COUNTRY_GEJSON_PATH + '/india/india.json'
      },
      'USA': {
        name: 'USA',
        geoJSON: COUNTRY_GEJSON_PATH + '/usa/usa.json'
      }
    };
    var WORLD_MAP_PATH = {
      'World': {
        name: 'World',
        geoJSON: WORLD_GEJSON_PATH + '/world.json'
      }
    };
    /***/
  },

  /***/
  "./src/app/services/data.service.js":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.js ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.dataChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(DataService, [{
        key: "updateData",
        value: function updateData(data) {
          console.log(data);
          this.dataChangeEvent.next(data);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService); //# sourceMappingURL=data.service.js.map

    /***/
  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataService = /*#__PURE__*/function () {
      function DataService() {
        _classCallCheck(this, DataService);

        this.dataChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(DataService, [{
        key: "updateData",
        value: function updateData(data) {
          console.log(data);
          this.dataChangeEvent.next(data);
        }
      }]);

      return DataService;
    }();

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      appRoot: 'http://localhost:3112'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vishalranjan/projects/covid-19/covid19-dashboard/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map