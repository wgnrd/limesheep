webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n    display: block !important;\r\n    line-height: 2 !important;\r\n    border: 0 !important;\r\n    border-radius: 0 !important;\r\n    /* width: auto !important; */\r\n    width: 9 !important;\r\n}\r\n\r\ntd {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-responsive\">\r\n    <thead>\r\n        <tr>\r\n            <th class=\"col-xs-3\">#</th>\r\n            <th class=\"col-xs-1\">R1</th>\r\n            <th class=\"col-xs-1\">R2</th>\r\n            <th class=\"col-xs-1\">Wiener</th>\r\n             <th class=\"col-xs-1\">Speck</th>\r\n              <th class=\"col-xs-1\">Eis</th>\r\n            <th class=\"col-xs-1\">Brat</th>\r\n            <th class=\"col-xs-1\">Käse</th>   \r\n            <th class=\"col-xs-1\">Göderl</th>   \r\n            <th class=\"col-xs-2\">Gesamt</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let wurst of wursts; let i = index\">\r\n            <th scope=\"row\"> {{ wurst.name }}</th>\r\n            <td>\r\n                <input type=\"number\" id=\"zt1\" class=\"form-control\" [(ngModel)]=\"wurst.zt[0]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[0] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt2\" class=\"form-control\" [(ngModel)]=\"wurst.zt[1]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[1] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt3\" class=\"form-control\" [(ngModel)]=\"wurst.zt[2]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[2] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt4\" class=\"form-control\" [(ngModel)]=\"wurst.zt[3]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[3] == 0\">\r\n            </td>\r\n             <td>\r\n                <input type=\"number\" id=\"zt5\" class=\"form-control\" [(ngModel)]=\"wurst.zt[4]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[4] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt6\" class=\"form-control\" [(ngModel)]=\"wurst.zt[5]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[5] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt7\" class=\"form-control\" [(ngModel)]=\"wurst.zt[6]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[6] == 0\">\r\n            </td>\r\n            <td>\r\n                <input type=\"number\" id=\"zt8\" class=\"form-control\" [(ngModel)]=\"wurst.zt[7]\" (input)=\"onZtChanged($event, i)\" [readOnly]=\"wurst.antzt[7] == 0\">\r\n            </td> \r\n            <td>\r\n\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"wurst.gesamt\" (input)=\"onSumChanged($event, i)\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <th scope=\"row\">Gesamt</th>\r\n            <td *ngFor=\"let item of gesamtZt; let i = index\"><input type=\"number\" class=\"form-control\" [(ngModel)]=\"gesamtZt[i]\" readonly></td>\r\n        </tr>\r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wurst_model__ = __webpack_require__("../../../../../src/app/wurst.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.isGesamtcalled = false;
        // R1, R2, Wiener, Speck, Eis, Brat, Käse, Göderl
        this.wursts = [
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Wiener', [0, 10, 50, 0, 0, 20, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Käswurst', [0, 0, 75, 0, 0, 25, 0, 0]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Polnische', [20, 0, 45, 0, 0, 20, 0, 15]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Cabanossi', [0, 0, 70, 0, 0, 20, 0, 10]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Käskreiner', [0, 0, 65, 0, 0, 0, 25, 10]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Bratwurstges.', [0, 0, 60, 0, 0, 20, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Saumeisen', [0, 0, 60, 0, 0, 20, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Grillwurst', [0, 0, 40, 0, 0, 40, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Leberkäs', [18.19, 0, 24.07, 25.93, 31.48, 0, 0, 0]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Rindsbrat', [0, 67, 0, 0, 33, 0, 0, 0]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Weises Brat', [0, 0, 34, 33, 33, 0, 0, 0]),
            // new Wurst('Braunschweiger', [ 0, 0, 40, 0, 0, 40, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Jagdwurst', [20, 0, 40, 0, 0, 20, 0, 20]),
            new __WEBPACK_IMPORTED_MODULE_1__wurst_model__["a" /* Wurst */]('Wildwurst', [0, 0, 60, 0, 0, 20, 0, 20]),
        ];
        this.gesamtZt = [
            0, 0, 0, 0, 0, 0, 0, 0
        ];
    }
    AppComponent.prototype.onSumChanged = function (event, i) {
        // console.log(i);
        for (var j = 0; j < this.wursts[0].zt.length; j++) {
            this.wursts[i].zt[j] = (this.wursts[i].gesamt / 100) * this.wursts[i].antzt[j];
        }
        this.calculateGesamtZt();
    };
    AppComponent.prototype.onZtChanged = function (event, i) {
        var inputfrom = this.getNumberfromID(event.srcElement.id);
        var basepercent = this.wursts[i].zt[inputfrom] / this.wursts[i].antzt[inputfrom];
        this.wursts[i].gesamt = 0;
        for (var j = 0; j < this.wursts[0].zt.length; j++) {
            if (j !== inputfrom) {
                this.wursts[i].zt[j] = basepercent * this.wursts[i].antzt[j];
            }
            this.wursts[i].gesamt += this.wursts[i].zt[j];
        }
        this.calculateGesamtZt();
    };
    AppComponent.prototype.calculateGesamtZt = function () {
        this.gesamtZt.fill(0);
        for (var _i = 0, _a = this.wursts; _i < _a.length; _i++) {
            var item = _a[_i];
            for (var i = 0; i < item.zt.length; i++) {
                if (item.zt[i] != null) {
                    this.gesamtZt[i] += item.zt[i];
                }
            }
            // if (item.zt[0] != null) {
            //   this.gesamtZt[0] += item.zt[0];
            // }
            // if (item.zt[1] != null) {
            //   this.gesamtZt[1] += item.zt[1];
            //   }
            // if (item.zt[2] != null) {
            //   this.gesamtZt[2] += item.zt[2];
            //   }
            // if (item.zt[3] != null) {
            //   this.gesamtZt[3] += item.zt[3];
            //   }
        }
    };
    AppComponent.prototype.getNumberfromID = function (controlIndex) {
        return parseInt(controlIndex.substring(2, 3), 10) - 1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/wurst.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wurst; });
var Wurst = (function () {
    function Wurst(name, antzt) {
        this.name = name;
        this.antzt = antzt;
        // Zutaten und Anzahl in Listen speichern!
        this.zt = [0, 0, 0, 0, 0, 0, 0, 0];
        this.gesamt = 0;
    }
    return Wurst;
}());

//# sourceMappingURL=wurst.model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map