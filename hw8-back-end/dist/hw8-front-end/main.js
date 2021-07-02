(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CSCI571\amcalhoun84.github.io\HW8\hw8-front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_services_search_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/search-service.service */ "pO7H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function NavBarComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngb-highlight", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, r_r3.media_type, r_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r3.name)("term", t_r4);
} }
class NavBarComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.searching = false;
        this.searchFailed = false;
        this.image = [];
        this.searchTitle = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((term) => this.searchService.searchTitle(term)));
        };
        this.formatter = (x) => x.name;
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_api_services_search_service_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_api_services_search_service_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])], decls: 19, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "bg-darker", "navbar-dark", "sticky-top"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarContent", "aria-controls", "navbarContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", "navbar-dark"], [1, "nav-item"], ["routerLink", "/myList", "routerLinkActive", "active", 1, "nav-link", "navbar-dark"], ["style", "background-color: black;"], ["rt", ""], [1, "form-inline", "my-2", "my-lg-0"], [1, "md-form", "my-0"], ["id", "title-search", "type", "text", "placeholder", "Search", 1, "form-control", "border-0", "bg-darker", "underline-search", 3, "ngbTypeahead", "resultTemplate", "inputFormatter"], ["instance", "ngbTypeahead"], ["routerLinkActive", "active", 2, "height", "100%", "width", "100%", "color", "black", "text-decoration", "none", 3, "routerLink"], [1, "mr-1", 2, "width", "150px", 3, "src"], [3, "result", "term"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavBarComponent_ng_template_13_Template, 3, 7, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTypeahead", ctx.searchTitle)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbHighlight"]], styles: [".bg-darker[_ngcontent-%COMP%] {\r\n    color: whitesmoke;\r\n    background-color: black;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]  {\r\n    color: white !important;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: lightslategray;\r\n}\r\n\r\n.reader[_ngcontent-%COMP%] {\r\n    color: white !important;\r\n}\r\n\r\n.underline-search[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    outline: 0;\r\n    color: white !important;\r\n    border-bottom: 2px solid white !important;\r\n}\r\n\r\n.underline-search[_ngcontent-%COMP%]:focus {\r\n    border-radius: 0;\r\n    outline: 0;\r\n    color: white !important;\r\n    border-bottom: 2px solid white !important;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n    display: block;\r\n    padding: .5rem 1rem;\r\n    float: right;\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%]:focus {\r\n    border :goldenrod 2px solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJnLWRhcmtlciB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kICB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogbGlnaHRzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5yZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUtc2VhcmNoIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVuZGVybGluZS1zZWFyY2g6Zm9jdXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gICAgYm9yZGVyIDpnb2xkZW5yb2QgMnB4IHNvbGlkO1xyXG59Il19 */"] });


/***/ }),

/***/ "7FRy":
/*!*****************************************************!*\
  !*** ./src/app/api-services/carouselapi.service.ts ***!
  \*****************************************************/
/*! exports provided: CarouselapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselapiService", function() { return CarouselapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselapiService {
    constructor(http) {
        this.http = http;
    }
    getData(media, category) {
        var results = [];
        const result = this.http.get(`/api/category/${media}/${category}`).subscribe((res) => {
            var result_list = res.slice(0, 5);
            result_list.forEach((element) => {
                var object = {
                    id: element.id,
                    image: element.poster_path,
                    title: element.title,
                    media: media
                };
                results.push(object);
            });
        });
        return results;
    }
}
CarouselapiService.ɵfac = function CarouselapiService_Factory(t) { return new (t || CarouselapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselapiService, factory: CarouselapiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9R8I":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_services_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/details.service */ "dEXg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");





function DetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " PUT YOUTUBE HERE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DetailsComponent {
    constructor(detailsService, route, router) {
        this.detailsService = detailsService;
        this.route = route;
        this.router = router;
        this.results = [];
        this.details = [];
        this.some_params = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.some_params = params;
        });
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 7, vars: 2, consts: [[1, "container-fluid"], [1, "row"], ["class", "col-8", 4, "ngIf"], [1, "col-4"], [1, "col-8"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.results.title, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");
/* harmony import */ var _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-cards/category-cards.component */ "nCMz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "diagram-wrapper"], ["category_title", "Continue Watching"], ["media", "movie", "category", "popular", "category_title", "Popular Movies", "type", "category"], ["media", "movie", "category", "top_rated", "category_title", "Top Rated Movies", "type", "category"], ["media", "movie", "category", "trending", "category_title", "Trending Movies", "type", "trending"], ["media", "tv", "category", "popular", "category_title", "Popular TV", "type", "category"], ["media", "tv", "category", "top_rated", "category_title", "Top Rated TV", "type", "category"], ["media", "tv", "category", "trending", "category_title", "Trending TV", "type", "trending"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-category-cards", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-category-cards", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-category-cards", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-category-cards", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-category-cards", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-category-cards", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-category-cards", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_2__["CategoryCardsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_services_carouselapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-services/carouselapi.service */ "7FRy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function CarouselComponent_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, obj_r2.media, obj_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", obj_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", obj_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_3_1_ng_template_0_Template, 6, 7, "ng-template", 6);
} }
function CarouselComponent_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_3_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("showNavigationArrows", ctx_r0.showNavigationArrows)("showNavigationIndicators", ctx_r0.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class CarouselComponent {
    constructor(config, carouselService) {
        this.carouselService = carouselService;
        this.results = [];
        this.guest = [];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        if (window.screen.width <= 992) {
            this.showNavigationArrows = true;
            this.showNavigationIndicators = false;
        }
        this.results = this.carouselService.getData('movie', 'now_playing');
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_services_carouselapi_service__WEBPACK_IMPORTED_MODULE_2__["CarouselapiService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 4, vars: 1, consts: [[1, "container-fluid"], [1, "row", 2, "margin-top", "40px"], [1, "offset-1", "col-10", "offset-1"], ["class", "carousel-contain", 3, "interval", "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [1, "carousel-contain", 3, "interval", "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-caption"], ["routerLinkActive", "active", 3, "routerLink"], [1, "picsum-img-wrapper"], [3, "src", "alt"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_ngb_carousel_3_Template, 2, 4, "ngb-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: darkblue !important;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%] {\r\n    width: 66%;\r\n}\r\n\r\n.carousel-contain[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    max-width: 1920px;   \r\n    min-width: 320px;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-top: 45%\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 150%;\r\n    transition: ease-in 2s;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\r\n    color: white;\r\n    display: block;\r\n    height: 30%;\r\n    overflow: none;\r\n    background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n    padding: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 5%;\r\n    margin-top: 8%;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 2560) {\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1680px) {\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n\r\n    ngb-carousel[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        color: white;\r\n        display: block;\r\n        height: 30%;\r\n        overflow: none;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        padding: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n    }\r\n\r\n    ngb-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        margin-top: 8%;\r\n        margin-left: 5%;\r\n    }\r\n    \r\n\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n    ngb-carousel[_ngcontent-%COMP%] {\r\n        width: 66%;\r\n    }\r\n    \r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        color: white;\r\n        display: block;\r\n        height: 30%;\r\n        overflow: none;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        padding: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n    }\r\n\r\n    ngb-carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        margin-right: 5%;\r\n        margin-top: 4%;\r\n    }\r\n\r\n    ngb-carousel[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        margin-left: 5%;\r\n        margin-top: 4%;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxjQUFjO0lBQ2QsNEVBQTRFO0lBQzVFLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7QUFDWjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFHQSxXQUFXOztBQUNYOztBQUVBOztBQUVBLGtCQUFrQjs7QUFDbEI7O0FBRUE7O0FBRUEseUVBQXlFOztBQUN6RTs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7UUFDZCw0RUFBNEU7UUFDNUUsVUFBVTtRQUNWLE9BQU87UUFDUCxTQUFTO1FBQ1QsUUFBUTtJQUNaOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO0lBQ25COzs7QUFHSjs7QUFFQTs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLGNBQWM7UUFDZCw0RUFBNEU7UUFDNUUsVUFBVTtRQUNWLE9BQU87UUFDUCxTQUFTO1FBQ1QsUUFBUTtJQUNaOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjO0lBQ2xCOztBQUVKIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCB7XHJcbiAgICB3aWR0aDogNjYlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udGFpbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE5MjBweDsgICBcclxuICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCAucGljc3VtLWltZy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA0NSVcclxufVxyXG5cclxubmdiLWNhcm91c2VsIC5waWNzdW0taW1nLXdyYXBwZXIgPiBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDJzO1xyXG59XHJcblxyXG5uZ2ItY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciA+IGltZzpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbDpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgb3ZlcmZsb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsMSkpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuXHJcbm5nYi1jYXJvdXNlbDpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbiA+IHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbn1cclxuXHJcblxyXG4vKiogVUhEKyAqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU2MCkge1xyXG5cclxufVxyXG5cclxuLyoqIFN0YW5kYXJkIEhEICoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjgwcHgpIHtcclxuXHJcbn1cclxuXHJcbi8qKiBTaW5jZSBtYW55IGRldmljZXMgYXJlIGhpZ2ggZGVmIG5vdywgSSd2ZSBkZWNpZGVkIHRvIGdvIHVwIHRvIDEwMDAgKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcblxyXG4gICAgbmdiLWNhcm91c2VsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDAsMCwwKSwgcmdiYSgwLDAsMCwxKSk7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ2ItY2Fyb3VzZWwgLmNhcm91c2VsLWNhcHRpb24gPiBwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cclxuICAgIG5nYi1jYXJvdXNlbCB7XHJcbiAgICAgICAgd2lkdGg6IDY2JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBvdmVyZmxvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsMSkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdiLWNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uID4gcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdiLWNhcm91c2VsOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9uID4gcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "MBqJ":
/*!***********************************************!*\
  !*** ./src/app/api-services/watch.service.ts ***!
  \***********************************************/
/*! exports provided: WatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchService", function() { return WatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WatchService {
    constructor(http) {
        this.http = http;
        this.watch_results = [];
        this.media_results = [];
        this.parameters = [];
    }
    processParameters(route) {
        const results = route.params.subscribe((params) => {
            this.parameters = params;
        });
        return this.parameters;
    }
    // demonstration of services -- unfortunately, the services seem to break things... it was really weird.
    watchMedia(media, id) {
        const result = this.http.get(`/api/watch/${media}/${id}`).subscribe(res => {
            this.watch_results = res[0];
        });
        return this.watch_results;
    }
    detailsMedia(media, id) {
        const result = this.http.get(`/api/details/${media}/${id}`).subscribe(res => {
            this.media_results = res;
            this.media_results.media_type = media;
        });
        return this.media_results;
    }
}
WatchService.ɵfac = function WatchService_Factory(t) { return new (t || WatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WatchService, factory: WatchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "N/jV":
/*!**********************************************!*\
  !*** ./src/app/my-list/my-list.component.ts ***!
  \**********************************************/
/*! exports provided: MyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListComponent", function() { return MyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MyListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No items found in Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function MyListComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, obj_r3.media, obj_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", obj_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", obj_r3.title);
} }
function MyListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyListComponent_div_1_div_3_Template, 5, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.results);
} }
class MyListComponent {
    constructor(http) {
        this.http = http;
        this.hasResults = false;
        this.results = [];
    }
    ngOnInit() {
        var localStorage = window.localStorage;
        var localLength = 0;
        Object.keys(localStorage).forEach((key) => {
            if (key.includes("-watch")) {
                localLength++;
                var element = JSON.parse(localStorage.getItem(key) || '{}');
                this.results.push({
                    id: element['id'],
                    image: element['poster_path'],
                    title: element['title'],
                    media: element['media_type']
                });
                if (localLength > 0) {
                    this.hasResults = true;
                }
            }
        });
    }
}
MyListComponent.ɵfac = function MyListComponent_Factory(t) { return new (t || MyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyListComponent, selectors: [["app-my-list"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["class", "results offset-1 col-10 offset-1", 4, "ngIf"], [1, "no-results"], [1, "results", "offset-1", "col-10", "offset-1"], ["class", "cards", 4, "ngFor", "ngForOf"], [1, "cards"], ["routerLinkActive", "active", 3, "routerLink"], [1, "title"], [1, "cards-img", 3, "src", "alt"]], template: function MyListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyListComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyListComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".no-results[_ngcontent-%COMP%] {\r\n    margin-top: 50px; \r\n    text-align: center; \r\n    color:white;\r\n}\r\n\r\n.results[_ngcontent-%COMP%] {\r\n    margin-top: 50px; \r\n    color:white;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] { \r\n    display: inline-block;\r\n    margin-top: 3%;\r\n    margin-right: 3%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.results[_ngcontent-%COMP%] {\r\n    margin-top: 50px; \r\n    color:white;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]:hover {\r\n    transition: ease-in-out 1s;\r\n    transform: scale(1.05);\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 306px;\r\n    min-width: 100px;\r\n    max-width: 200px;\r\n    text-align: center; \r\n    background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n    visibility: hidden;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.cards-img[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1920) {\r\n\r\n    .cards[_ngcontent-%COMP%] { \r\n        display: inline-block;\r\n        margin-top: 3%;\r\n        margin-right: 3%;\r\n        margin-bottom: 3%;\r\n    }\r\n    \r\n    .results[_ngcontent-%COMP%] {\r\n        margin-top: 50px; \r\n        color:white;\r\n    }\r\n    \r\n    .cards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .cards[_ngcontent-%COMP%]:hover {\r\n        transition: ease-in-out 1s;\r\n        transform: scale(1.05);\r\n    }\r\n    \r\n    .title[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        top: 306px;\r\n        min-width: 100px;\r\n        max-width: 200px;\r\n        text-align: center; \r\n        background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n    }\r\n    \r\n        \r\n    .cards[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%] {\r\n        visibility: visible;\r\n    }\r\n    \r\n    .cards-img[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n    \r\n    h3[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n\r\n    .results[_ngcontent-%COMP%] { \r\n        margin-bottom: 80px;\r\n    }\r\n\r\n    .cards[_ngcontent-%COMP%] { \r\n        display: block;\r\n        margin-top: 3%;\r\n        margin-left: 23%;\r\n        margin-bottom: 3%;\r\n    }\r\n\r\n    .cards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { \r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .cards[_ngcontent-%COMP%]:hover {\r\n        transition: ease-in-out 1s;\r\n        transform: scale(1.05);\r\n    }\r\n\r\n    .cards-img[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n    }\r\n\r\n    .title[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        top: 600px;\r\n        min-width: 300px;\r\n        max-width: 400px;\r\n        text-align: center; \r\n        background: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: visible;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsMEJBQTBCOztBQUMxQjs7SUFFSTtRQUNJLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO1FBQ1oscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksMEJBQTBCO1FBQzFCLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsT0FBTztRQUNQLFFBQVE7UUFDUixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsc0VBQXNFO1FBQ3RFLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBLG1CQUFtQjs7QUFDbkI7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7OztJQUdBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixzRUFBc0U7UUFDdEUsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoibXktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXJlc3VsdHMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkcyB7IFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7IFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkcyBhIHsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkczpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDMwNnB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMCwwLDApLCByZ2JhKDAsMCwwLDEpKTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuICAgIFxyXG4uY2FyZHM6aG92ZXIgLnRpdGxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5jYXJkcy1pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKiogRlVMTCBTQ1JFRU4gR0VORVJBTCAqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMCkge1xyXG5cclxuICAgIC5jYXJkcyB7IFxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmVzdWx0cyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDsgXHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkcyBhIHsgXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmRzOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDMwNnB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDAsMCwwKSwgcmdiYSgwLDAsMCwxKSk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAuY2FyZHM6aG92ZXIgLnRpdGxlIHtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyZHMtaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBNT0JJTEUgR0VORVJBTCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucmVzdWx0cyB7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRzIHsgXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIzJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMgYSB7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkczpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMXM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtaW1nIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA2MDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsMSkpO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'hw8-front-end';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "9R8I");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _my_list_my_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-list/my-list.component */ "N/jV");
/* harmony import */ var _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-cards/category-cards.component */ "nCMz");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./watch/watch.component */ "ZGjR");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
        _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_11__["CategoryCardsComponent"],
        _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _my_list_my_list_component__WEBPACK_IMPORTED_MODULE_10__["MyListComponent"],
        _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_11__["CategoryCardsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _watch_watch_component__WEBPACK_IMPORTED_MODULE_13__["WatchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayerModule"]] }); })();


/***/ }),

/***/ "ZGjR":
/*!******************************************!*\
  !*** ./src/app/watch/watch.component.ts ***!
  \******************************************/
/*! exports provided: WatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchComponent", function() { return WatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_services_watch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-services/watch.service */ "MBqJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-cards/category-cards.component */ "nCMz");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");








const _c0 = ["selfClosing"];
function WatchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.results.key);
} }
function WatchComponent_div_3_ngb_alert_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WatchComponent_div_3_ngb_alert_11_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.alertMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r6.alertType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.alertMessage, " ");
} }
function WatchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addRemoveMovie(ctx_r10.details.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WatchComponent_div_3_ngb_alert_11_Template, 3, 2, "ngb-alert", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r1.details.release_date, " | \u2605 ", ctx_r1.details.vote_average, " | ", ctx_r1.details.runtime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre: ", ctx_r1.details.genres, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.movieWatchlist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.alertShow);
} }
function WatchComponent_div_20_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " as ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const people_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", people_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", people_r13.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](people_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", people_r13.character, " ");
} }
function WatchComponent_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchComponent_div_20_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const people_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx_r16.openCastProfile(_r4, people_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchComponent_div_20_div_4_div_1_Template, 8, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const people_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", people_r13.profile_path);
} }
function WatchComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchComponent_div_20_div_4_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cast);
} }
function WatchComponent_div_21_div_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u2605 ", review_r19.rating, "");
} }
function WatchComponent_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WatchComponent_div_21_div_6_span_7_Template, 2, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r19.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r19.author, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r19.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r19.author, " on ", review_r19.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r19.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r19.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WatchComponent_div_21_div_6_Template, 16, 7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.number_of_reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.reviews);
} }
function WatchComponent_ng_template_29_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r23.social_media.imdb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchComponent_ng_template_29_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r24.social_media.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchComponent_ng_template_29_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r25.social_media.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchComponent_ng_template_29_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r26.social_media.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WatchComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchComponent_ng_template_29_Template_button_click_3_listener() { const modal_r22 = ctx.$implicit; return modal_r22.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WatchComponent_ng_template_29_a_22_Template, 2, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WatchComponent_ng_template_29_a_23_Template, 2, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WatchComponent_ng_template_29_a_24_Template, 2, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WatchComponent_ng_template_29_a_25_Template, 2, 1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchComponent_ng_template_29_Template_button_click_33_listener() { const modal_r22 = ctx.$implicit; return modal_r22.close("Save click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.person.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.person.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r5.person.birthday, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r5.person.birthplace, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r5.person.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known For: ", ctx_r5.person.known_for, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r5.person.also_known_as, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.social_media.imdb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.social_media.instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.social_media.facebook);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.social_media.imdb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.person.biography);
} }
class WatchComponent {
    constructor(watchService, modalService, route, router, http) {
        this.watchService = watchService;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.results = [];
        this.details = [];
        this.retParams = [];
        this.cast = [];
        this.reviews = [];
        this.person = [];
        this.social_media = [];
        this.number_of_reviews = 0;
        this.movieWatchlist = "Add to Watchlist";
        this.movieInWatchList = false;
        this.alertShow = false;
        this.alertMessage = '';
        this.alertType = '';
        this.formatMedia = '';
        this.route.paramMap.subscribe(params => {
            this.ngOnInit();
        });
    }
    ngOnInit() {
        window.scroll(0, 0);
        var media;
        var id;
        this.retParams = this.watchService.processParameters(this.route);
        media = this.retParams['media'];
        id = this.retParams['id'];
        this.formatMedia = (media === 'movies') ? 'Movies' : 'TV';
        this.checkMovie(id);
        //this.results = this.watchService.watchMedia(media, id);
        this.http.get(`/api/watch/${media}/${id}`).subscribe(res => {
            this.results = res[0] || res;
        });
        this.http.get(`/api/details/${media}/${id}`).subscribe(res => {
            this.details = res;
            this.details.media_type = media;
            this.details.id = id;
            this.details.last_accessed = new Date();
            localStorage.setItem(`${id}-continue`, JSON.stringify(this.details));
        });
        this.http.get(`/api/reviews/${media}/${id}`).subscribe(res => {
            this.reviews = res;
            this.number_of_reviews = this.reviews.length;
        });
        this.http.get(`/api/cast/${media}/${id}`).subscribe(res => {
            this.cast = res;
        });
    }
    openCastProfile(content, id) {
        let person_result = this.http.get(`/api/person/${id}`).subscribe((res) => {
            this.person = res;
        });
        let sm_result = this.http.get(`/api/person/${id}/external`).subscribe((res) => {
            this.social_media = res;
        });
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result => {
        }));
    }
    addRemoveMovie(id) {
        if (this.movieInWatchList === true) {
            localStorage.removeItem(id + '-watch');
            this.movieWatchlist = "Add to Watchlist";
            this.movieInWatchList = false;
            this.alertShow = true;
            this.alertType = 'danger';
            this.alertMessage = 'Removed from watchlist';
        }
        else {
            localStorage.setItem(id + '-watch', JSON.stringify(this.details));
            this.movieWatchlist = "Remove from Watchlist";
            this.movieInWatchList = true;
            this.alertShow = true;
            this.alertType = 'success';
            this.alertMessage = 'Added to watchlist';
        }
        setTimeout(() => { var _a; return (_a = this.selfClosing) === null || _a === void 0 ? void 0 : _a.close(); }, 5000);
    }
    checkMovie(id) {
        Object.keys(localStorage).forEach((key) => {
            if (key === `${id}-watch`) {
                this.movieWatchlist = "Remove from Watchlist";
                this.movieInWatchList = true;
            }
        });
    }
}
WatchComponent.ɵfac = function WatchComponent_Factory(t) { return new (t || WatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services_watch_service__WEBPACK_IMPORTED_MODULE_1__["WatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
WatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchComponent, selectors: [["app-watch"]], viewQuery: function WatchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selfClosing = _t.first);
    } }, decls: 33, vars: 13, consts: [[1, "container-fluid", 2, "color", "white"], [1, "offset-1", "row"], ["class", "col-sm-12 col-xs-12 col-md-12 col-lg-9 col-xl-8", 4, "ngIf"], ["class", "col-sm-2 col-xs-6 col-md-2 col-lg-3 col-xl-4", 4, "ngIf"], [1, "col-12"], ["target", "_blank", 3, "href"], [1, "fab", "fa-facebook-square", 2, "color", "blue", "font-size", "1.5rem", "margin-right", "10px"], [1, "fab", "fa-twitter", 2, "color", "cyan", "font-size", "1.5rem", "margin-right", "10px"], [1, "container-fluid"], ["class", "row flex-row flex-nowrap", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], ["type", "likeness", "rec", "recommendations", 3, "category_title", "media", "id"], ["type", "likeness", "rec", "similar", 3, "category_title", "media", "id"], ["content", ""], [2, "height", "100px"], [1, "col-sm-12", "col-xs-12", "col-md-12", "col-lg-9", "col-xl-8"], ["suggestedQuality", "highres", 3, "videoId"], [1, "col-sm-2", "col-xs-6", "col-md-2", "col-lg-3", "col-xl-4"], [1, "btn", "btn-primary", 3, "click"], ["style", "margin-top: 5%; width: 50%;", 3, "type", "closed", 4, "ngIf"], [2, "margin-top", "5%", "width", "50%", 3, "type", "closed"], ["selfClosing", ""], [1, "row", "flex-row", "flex-nowrap"], [1, "offset-1", "cast-set"], ["class", "cast-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "cast-card", 3, "click"], [4, "ngIf"], [1, "card-img-top", 3, "src", "alt"], [1, "card-body", 2, "color", "black"], [1, "offset-1", "col-10", "offset-1"], [2, "color", "#666"], ["class", "card", "style", "margin-top: 10px; margin-bottom: 10px; color:black", 4, "ngFor", "ngForOf"], [1, "card", 2, "margin-top", "10px", "margin-bottom", "10px", "color", "black"], [1, "card-body"], [1, "col-4", 2, "float", "left"], [3, "src"], [1, "offset-4", "col-8"], [1, "card-title"], ["class", "review-special", 4, "ngIf"], [1, "card-subtitle"], [1, "overview"], [1, "review-special"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-6"], [2, "width", "185px", 3, "src"], [1, "biographical"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "col-10"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["placement", "top", "ngbTooltip", "Visit IMDB", 1, "fab", "fa-imdb", 2, "color", "orange", "font-size", "1.5rem", "margin-right", "10px"], ["placement", "top", "ngbTooltip", "Visit Instagram", 1, "fab", "fa-instagram-square", 2, "color", "purple", "font-size", "1.5rem", "margin-right", "10px"], ["placement", "top", "ngbTooltip", "Visit Facebook", 1, "fab", "fa-facebook-square", 2, "color", "blue", "font-size", "1.5rem", "margin-right", "10px"], ["placement", "top", "ngbTooltip", "Visit Twitter", 1, "fab", "fa-twitter", 2, "color", "cyan", "font-size", "1.5rem", "margin-right", "10px"]], template: function WatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WatchComponent_div_3_Template, 12, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WatchComponent_div_20_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WatchComponent_div_21_Template, 7, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-category-cards", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-category-cards", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, WatchComponent_ng_template_29_Template, 35, 12, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx.results.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://www.twitter.com/intent/tweet?text=https://www.youtube.com/watch?v=", ctx.results.key, "%20%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("category_title", "Recommended ", ctx.formatMedia, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("media", ctx.retParams.media);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.retParams.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("category_title", "Similar ", ctx.formatMedia, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("media", ctx.retParams.media);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.retParams.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _category_cards_category_cards_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCardsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar { \r\n    height: 15px;\r\n    width: 5px;\r\n    border: 1px solid #d5d5d5;\r\n    background-color: #333;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    border-radius: 0;\r\n    background: #666;\r\n    width: 30px;\r\n  }\r\n\r\n.overview[_ngcontent-%COMP%] {\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    max-lines: 3;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.review-special[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: black;\r\n    border-radius: 25px;\r\n    margin-left: 2%;\r\n    padding: 0 10px;\r\n\r\n}\r\n\r\n.cart-subtitle[_ngcontent-%COMP%] {\r\n    color: #666;\r\n    font-size: 10px;\r\n}\r\n\r\n.cast-set[_ngcontent-%COMP%] {\r\n    max-width: 1200px; \r\n    white-space: nowrap;\r\n    overflow: auto;\r\n}\r\n\r\n.cast-card[_ngcontent-%COMP%] {\r\n    width:16rem; \r\n    display: inline-flex; \r\n    margin: 10px 10px\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n.review-card[_ngcontent-%COMP%] {\r\n    margin-top: 10px; \r\n    margin-bottom: 10px; \r\n    color:black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZiIsImZpbGUiOiJ3YXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgfVxyXG5cclxuLm92ZXJ2aWV3IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG1heC1saW5lczogMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnJldmlldy1zcGVjaWFsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbn1cclxuXHJcbi5jYXJ0LXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmNhc3Qtc2V0IHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4OyBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhc3QtY2FyZCB7XHJcbiAgICB3aWR0aDoxNnJlbTsgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgXHJcbiAgICBtYXJnaW46IDEwcHggMTBweFxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBSRVZJRVcgKi9cclxuXHJcbi5yZXZpZXctY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IFxyXG4gICAgY29sb3I6YmxhY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "dEXg":
/*!*************************************************!*\
  !*** ./src/app/api-services/details.service.ts ***!
  \*************************************************/
/*! exports provided: DetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function() { return DetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class DetailsService {
    constructor(http) {
        this.http = http;
    }
    getDetails(media, id) {
        let results = this.http.get(`/api/details/${media}/${id}`).subscribe(res => res);
        return results;
    }
}
DetailsService.ɵfac = function DetailsService_Factory(t) { return new (t || DetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailsService, factory: DetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "fixed-bottom"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Designed by Andrew M. Calhoun Powered by TMDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fixed-bottom[_ngcontent-%COMP%] { \r\n    background-color: black;\r\n    color: white;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    margin-top: 150px;\r\n    min-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtYm90dG9tIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "nCMz":
/*!************************************************************!*\
  !*** ./src/app/category-cards/category-cards.component.ts ***!
  \************************************************************/
/*! exports provided: CategoryCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardsComponent", function() { return CategoryCardsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_services_category_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-services/category_card.service */ "pXkn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1, a2) { return ["/watch", a1, a2]; };
function CategoryCardsComponent_div_0_ngb_carousel_3_1_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, obj_r7.media, obj_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", obj_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", obj_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CategoryCardsComponent_div_0_ngb_carousel_3_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryCardsComponent_div_0_ngb_carousel_3_1_ng_template_0_div_1_Template, 5, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r4);
} }
function CategoryCardsComponent_div_0_ngb_carousel_3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoryCardsComponent_div_0_ngb_carousel_3_1_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CategoryCardsComponent_div_0_ngb_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryCardsComponent_div_0_ngb_carousel_3_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.multimg);
} }
function CategoryCardsComponent_div_0_ngb_carousel_4_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, obj_r10.media, obj_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", obj_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", obj_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CategoryCardsComponent_div_0_ngb_carousel_4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoryCardsComponent_div_0_ngb_carousel_4_1_ng_template_0_Template, 6, 7, "ng-template", 6);
} }
function CategoryCardsComponent_div_0_ngb_carousel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryCardsComponent_div_0_ngb_carousel_4_1_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("showNavigationArrows", ctx_r2.showNavigationArrows)("showNavigationIndicators", ctx_r2.showNavigationIndicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.results);
} }
function CategoryCardsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoryCardsComponent_div_0_ngb_carousel_3_Template, 2, 4, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoryCardsComponent_div_0_ngb_carousel_4_Template, 2, 4, "ngb-carousel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.category_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mobile);
} }
class CategoryCardsComponent {
    constructor(config, http, cardService) {
        this.http = http;
        this.cardService = cardService;
        this.media = 'media';
        this.category = 'category';
        this.category_title = 'category_title';
        this.type = "type";
        this.id = "id";
        this.rec = "rec";
        this.result_list = [];
        this.continue_watching = [];
        this.results = [];
        this.multimg = [];
        this.showNavigationArrows = true;
        this.showNavigationIndicators = true;
        this.mobile = false;
        this.watched = false;
        this.notwatched = false;
        this.hasResults = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
    ngOnInit() {
        var target_url = '';
        if (window.screen.width <= 992) {
            this.mobile = true;
            this.showNavigationArrows = true;
            this.showNavigationIndicators = false;
        }
        if (this.type === "trending") {
            target_url = `/api/${this.type}/${this.media}/day`;
            [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
        }
        else if (this.type === "category") {
            target_url = `/api/${this.type}/${this.media}/${this.category}`;
            [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
        }
        else if (this.type === "likeness") {
            target_url = `/api/recommendations/${this.media}/${this.id}/${this.rec}`;
            [this.results, this.multimg] = this.cardService.getData(target_url, this.media);
        }
        else {
            let localStorage = window.localStorage;
            [this.results, this.multimg, this.hasResults] = this.cardService.retrieveFromLocalStorage(localStorage);
        }
    }
}
CategoryCardsComponent.ɵfac = function CategoryCardsComponent_Factory(t) { return new (t || CategoryCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_services_category_card_service__WEBPACK_IMPORTED_MODULE_3__["CategoryCardService"])); };
CategoryCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoryCardsComponent, selectors: [["app-category-cards"]], inputs: { media: "media", category: "category", category_title: "category_title", type: "type", id: "id", rec: "rec" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarouselConfig"]])], decls: 1, vars: 1, consts: [["class", "container-fluid p-3 my-3 text-white", 4, "ngIf"], [1, "container-fluid", "p-3", "my-3", "text-white"], [1, "offset-1"], [3, "interval", "showNavigationArrows", "showNavigationIndicators", 4, "ngIf"], [3, "interval", "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-bumper"], ["class", "group-container", 4, "ngFor", "ngForOf"], [1, "group-container"], [1, "carousel-caption"], ["routerLinkActive", "active", 3, "routerLink"], [1, "cat-cards", 3, "src", "alt"], ["width", "380px", 1, "cat-cards", 3, "src", "alt"]], template: function CategoryCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoryCardsComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["h3[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n\r\n\r\n.cat-cards[_ngcontent-%COMP%] { \r\n    max-width: 200px;\r\n}\r\n\r\n.group-container[_ngcontent-%COMP%] {\r\n    display: inline-block; \r\n    margin-bottom: 7.5%; \r\n    margin-left: 4.5%;\r\n}\r\n\r\n.carousel-bumper[_ngcontent-%COMP%] {\r\n    margin-left: 8%;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 306px;\r\n    left: 0px;\r\n    bottom: 0;\r\n    height: 35%;\r\n    background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n    visibility: hidden;\r\n    max-width: 200px;\r\n    min-width: 100px;\r\n}\r\n\r\n.group-container[_ngcontent-%COMP%]:hover    > .carousel-caption[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    transform: scale(1.05);\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.05);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 3840px) {\r\n\r\n    .carousel-inner[_ngcontent-%COMP%] {\r\n        width: 30%;\r\n    }\r\n    \r\n\r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 200px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 2560px) {\r\n    \r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 175px;\r\n    }\r\n\r\n    \r\n    .carousel-bumper[_ngcontent-%COMP%] {\r\n        margin-left: 9%;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: inline-block; \r\n        margin-bottom: 5.5%; \r\n        margin-left: 2.75%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 268px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n        max-width: 175px;\r\n        width: 175px !important;\r\n        \r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1650px) {\r\n    \r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 150px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: inline-block; \r\n        margin-bottom: 5.5%; \r\n        margin-left: 3.75%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 229px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n        max-width: 150px;\r\n        width: 150px !important;\r\n        \r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1500px) {\r\n    \r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 125px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: inline-block; \r\n        margin-bottom: 5.5%; \r\n        margin-left: 3.5%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 190px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n        max-width: 125px;\r\n        width: 125px !important;\r\n    }\r\n\r\n        \r\n    .carousel-bumper[_ngcontent-%COMP%] {\r\n        margin-left: 12%;       \r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1300px) {\r\n    \r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 110px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: inline-block; \r\n        margin-bottom: 5.5%; \r\n        margin-left: 3.5%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 168px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n        max-width: 110px;\r\n        width: 110px !important;        \r\n    }\r\n\r\n    .carousel-bumper[_ngcontent-%COMP%] {\r\n        margin-left: 12%;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media screen and (max-width: 1190px) {\r\n\r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 100px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: inline-block; \r\n        margin-bottom: 2.5; \r\n        margin-left: 3.5%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 152px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: hidden;\r\n        max-width: 100px;\r\n        min-width: 100px;\r\n    }\r\n\r\n  \r\n\r\n    .carousel-indicators[_ngcontent-%COMP%] {\r\n        visibility: hidden impo !important;\r\n        display: none !important;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n\r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 300px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: block; \r\n        margin-bottom: 0%; \r\n        margin-left: 24%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 460px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: visible;\r\n        max-width: 300px;\r\n        min-width: 300px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n\r\n    ngb-carousel[_ngcontent-%COMP%]    > .carousel-indicators[_ngcontent-%COMP%] {\r\n        visibility: hidden !important;\r\n    }\r\n\r\n    .cat-cards[_ngcontent-%COMP%] { \r\n        max-width: 280px;\r\n    }\r\n\r\n    .group-container[_ngcontent-%COMP%] {\r\n        display: block; \r\n        margin-bottom: 0%; \r\n        margin-left: 24%;\r\n    }\r\n\r\n    .carousel-caption[_ngcontent-%COMP%] {\r\n        position: relative;\r\n        top: 430px;\r\n        left: 0px;\r\n        bottom: 0;\r\n        height: 35%;\r\n        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));\r\n        visibility: visible;\r\n        max-width: 280px;\r\n        min-width: 280px;\r\n    }\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUdBOzs7Ozs7Ozs7O0dBVUc7O0FBRUg7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsV0FBVztJQUNYLDRFQUE0RTtJQUM1RSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUEscUNBQXFDOztBQUNyQzs7SUFFSTtRQUNJLFVBQVU7SUFDZDs7O0lBR0E7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUEsV0FBVzs7QUFDWDs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLDRFQUE0RTtRQUM1RSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHVCQUF1Qjs7SUFFM0I7O0FBRUo7O0FBRUEsa0JBQWtCOztBQUNsQjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsU0FBUztRQUNULFdBQVc7UUFDWCw0RUFBNEU7UUFDNUUsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQix1QkFBdUI7O0lBRTNCOzs7QUFHSjs7QUFFQSxrQkFBa0I7O0FBQ2xCOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLDRFQUE0RTtRQUM1RSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjs7O0lBR0E7UUFDSSxnQkFBZ0I7SUFDcEI7OztBQUdKOztBQUVBLGtCQUFrQjs7QUFDbEI7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO1FBQ1gsNEVBQTRFO1FBQzVFLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOzs7QUFHSjs7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixTQUFTO1FBQ1QsU0FBUztRQUNULFdBQVc7UUFDWCw0RUFBNEU7UUFDNUUsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7Ozs7SUFJQTtRQUNJLGtDQUFrQztRQUNsQyx3QkFBd0I7SUFDNUI7OztBQUdKOztBQUVBLGtDQUFrQzs7QUFDbEM7O0lBRUk7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO1FBQ1gsNEVBQTRFO1FBQzVFLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUVBLGtCQUFrQjs7QUFDbEI7O0lBRUk7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFNBQVM7UUFDVCxXQUFXO1FBQ1gsNEVBQTRFO1FBQzVFLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOzs7O0FBSUoiLCJmaWxlIjoiY2F0ZWdvcnktY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcblxyXG4vKiAuem9vbWllcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbn1cclxuXHJcbi56b29taWVzOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcclxuICAgIGhlaWdodDogMTUlO1xyXG5cclxufSAqL1xyXG5cclxuLmNhdC1jYXJkcyB7IFxyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNy41JTsgXHJcbiAgICBtYXJnaW4tbGVmdDogNC41JTtcclxufVxyXG5cclxuLmNhcm91c2VsLWJ1bXBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogOCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzA2cHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDAsMCwwKSwgcmdiYSgwLDAsMCwxKSk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdyb3VwLWNvbnRhaW5lcjpob3ZlciA+IC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLyoqIFVIRCsrIC0tIEhJR0hMWSBFWFBFUklNRU5UQUwgWEQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzg0MHB4KSB7XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLmNhdC1jYXJkcyB7IFxyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLyoqIFVIRCsgKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NjBweCkge1xyXG4gICAgXHJcbiAgICAuY2F0LWNhcmRzIHsgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5jYXJvdXNlbC1idW1wZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5JTtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUuNSU7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjc1JTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMjY4cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsMSkpO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDE3NXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqIFN0YW5kYXJkIEhEICoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjUwcHgpIHtcclxuICAgIFxyXG4gICAgLmNhdC1jYXJkcyB7IFxyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjUlOyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMy43NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDIyOXB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMCwwLDApLCByZ2JhKDAsMCwwLDEpKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vKiogU3RhbmRhcmQgSEQgKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgXHJcbiAgICAuY2F0LWNhcmRzIHsgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUuNSU7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzLjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAxOTBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDAsMCwwKSwgcmdiYSgwLDAsMCwxKSk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgLmNhcm91c2VsLWJ1bXBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTsgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLyoqIFN0YW5kYXJkIEhEICoqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICAgIFxyXG4gICAgLmNhdC1jYXJkcyB7IFxyXG4gICAgICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1LjUlOyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMy41JTtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMTY4cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwwLDAsMCksIHJnYmEoMCwwLDAsMSkpO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50OyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWJ1bXBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTkwcHgpIHtcclxuXHJcbiAgICAuY2F0LWNhcmRzIHsgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIuNTsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDE1MnB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMCwwLDApLCByZ2JhKDAsMCwwLDEpKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuIGltcG8gIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLyoqIEdldHRpbmcgbW9yZSBpbnRvIG1vYmlsZSBub3cgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuXHJcbiAgICAuY2F0LWNhcmRzIHsgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JvdXAtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDQ2MHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMCwwLDApLCByZ2JhKDAsMCwwLDEpKTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKiBNaWNybyBtb2JpbGUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICBuZ2ItY2Fyb3VzZWwgPiAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdC1jYXJkcyB7IFxyXG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3VwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAlOyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjQlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA0MzBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDAsMCwwKSwgcmdiYSgwLDAsMCwxKSk7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "pO7H":
/*!********************************************************!*\
  !*** ./src/app/api-services/search-service.service.ts ***!
  \********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const API_ENDPOINT = '/api/multi/';
class SearchService {
    constructor(http) {
        this.http = http;
        this.res = [];
    }
    searchTitle(term) {
        if (term === '' || term.trim().length == 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        return this.http.get(API_ENDPOINT + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pXkn":
/*!*******************************************************!*\
  !*** ./src/app/api-services/category_card.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoryCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCardService", function() { return CategoryCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CategoryCardService {
    constructor(http) {
        this.http = http;
    }
    getData(target_url, media) {
        var results = [];
        var multimg = [];
        const result = this.http.get(target_url).subscribe((res) => {
            var result_list = res;
            result_list.forEach((element) => {
                var object = {
                    id: element.id,
                    image: element.poster_path,
                    title: element.title,
                    media: media
                };
                results.push(object);
            });
            var j = -1;
            for (var i = 0; i < results.length; i++) {
                if (i % 6 == 0) {
                    j++;
                    multimg[j] = [];
                    multimg[j].push(results[i]);
                }
                else {
                    multimg[j].push(results[i]);
                }
            }
        });
        return [results, multimg];
    }
    retrieveFromLocalStorage(localStorage) {
        var results = [];
        var multimg = [];
        var localLength = 0;
        Object.keys(localStorage).forEach((key) => {
            if (key.includes("-continue")) {
                localLength++;
                var element = JSON.parse(localStorage.getItem(key) || '{}');
                results.push({
                    id: element['id'],
                    image: element['poster_path'],
                    title: element['title'],
                    media: element['media_type']
                });
                var j = -1;
                for (var i = 0; i < localLength; i++) {
                    if (i % 6 == 0) {
                        j++;
                        multimg[j] = [];
                        multimg[j].push(results[i]);
                    }
                    else {
                        multimg[j].push(results[i]);
                    }
                }
            }
        });
        return [results.slice(0, 20), multimg, localLength > 0];
    }
}
CategoryCardService.ɵfac = function CategoryCardService_Factory(t) { return new (t || CategoryCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CategoryCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryCardService, factory: CategoryCardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _my_list_my_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-list/my-list.component */ "N/jV");
/* harmony import */ var _watch_watch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch/watch.component */ "ZGjR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: "myList", component: _my_list_my_list_component__WEBPACK_IMPORTED_MODULE_2__["MyListComponent"] },
    { path: "watch/:media/:id", component: _watch_watch_component__WEBPACK_IMPORTED_MODULE_3__["WatchComponent"] },
    { path: "**", redirectTo: "/home", pathMatch: "full" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map