(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Want to create Test on new topic?</h3>\n<br>\n<!-- <input #myInput type=\"text\" placeholder=\"enter the topic\">topic\n<br>\n<button type=\"submit\" (click)=\"onClick(myInput.value)\">createTest</button>\n{{responseMessage}} -->\n\n<div class=\"row justify-content-center\">\n    <div class=\"col-12 col-md-10 col-lg-8\">\n        <form class=\"card card-sm\">\n            <div class=\"card-body row no-gutters align-items-center\">\n                <div class=\"col-auto\">\n                    <i class=\"fas fa-search h4 text-body\"></i>\n                </div>\n                <!--end of col-->\n                <div class=\"col\">\n                    <input #myInput class=\"form-control form-control-lg form-control-borderless\" type=\"search\"\n                        placeholder=\"Enter topic\">\n                </div>\n                <!--end of col-->\n                <div class=\"col-auto\">\n                    <button class=\"btn btn-lg btn-success\" type=\"submit\" (click)=\"onClick(myInput.value)\">Create</button>\n                    {{responseMessage}}\n                </div>\n                <!--end of col-->\n            </div>\n        </form>\n    </div>\n    <!--end of col-->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Quiz on given topic is generated</p><br><br>\n{{message}}\n<button (click)='onClick()'>homePage</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\n    <title>Quizo</title>\n\n    <!-- Google font -->\n    <link href=\"https://fonts.googleapis.com/css?family=Lato:700%7CMontserrat:400,600\" rel=\"stylesheet\">\n\n    <!-- Bootstrap -->\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n\n    <!-- Font Awesome Icon -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n    <!-- Custom stlylesheet -->\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"../../assets/css/style.css\" />\n\n</head>\n<header id=\"header\" class=\"header\">\n    <div class=\"navback\">\n\n        <div class=\"container\">\n\n            <div class=\"navbar-header\">\n                <!-- Logo -->\n                <div class=\"navbar-brand\">\n                    <a class=\"logo\" href=\"#\">\n                        <img src=\"../assets/img/logo-3.png\" alt=\"logo\">\n                    </a>\n                </div>\n                <!-- /Logo -->\n\n                <!-- Mobile toggle -->\n                <button class=\"navbar-toggle\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</button>\n                <!-- /Mobile toggle -->\n            </div>\n\n            <!-- Navigation -->\n            <div>\n                <nav id=\"\" class=\"\">\n\n                    <ul class=\"main-menu nav  navbar-right\">\n                        <li><a href=\"#home\">Home</a></li>\n                        <li><a href=\"#about\">About</a></li>\n                        <li><a href=\"#contact\">Contact</a></li>\n                        <li><a routerLink=\"/auth/login\">Login</a></li>\n                        <li><a routerLink=\"/auth/register\">Register</a></li>\n\n                    </ul>\n                </nav>\n            </div>\n            <!-- /Navigation -->\n\n        </div>\n    </div>\n</header>\n\n\n\n<router-outlet></router-outlet>\n\n\n\n<footer id=\"footer\" class=\"footer\">\n\n    <!-- container -->\n    <div class=\"container\">\n\n        <!-- row -->\n        <div class=\"row\">\n        </div>\n        <!-- /row -->\n\n        <!-- row -->\n        <div id=\"bottom-footer\" class=\"row\">\n\n            <!-- social -->\n            <div class=\"col-md-4 col-md-push-8\">\n                <ul class=\"footer-social\">\n                    <li><a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li><a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li><a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a></li>\n                    <li><a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                </ul>\n            </div>\n            <!-- /social -->\n\n            <!-- copyright -->\n            <div class=\"col-md-8 col-md-pull-4\">\n                <div class=\"footer-copyright\">\n                    <span>&copy; Copyright 2019. All Rights Reserved.<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\">Quizo</a></span>\n                </div>\n            </div>\n            <!-- /copyright -->\n\n        </div>\n        <!-- row -->\n\n    </div>\n    <!-- /container -->\n\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/add-employee/add-employee.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/add-employee/add-employee.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Employee</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input type=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n  \n    <div class=\"form-group\">\n      <label for=\"designation\">Designation:</label>\n      <input [(ngModel)]=\"user.designation\" placeholder=\"Designation\" name=\"designation\" class=\"form-control\" id=\"designation\">\n    </div>\n  \n    <div class=\"form-group\">\n      <label for=\"empId\">Employee Id</label>\n      <input [(ngModel)]=\"user.empId\" placeholder=\"Employee Id\" name=\"Employee Id\" class=\"form-control\" id=\"employeeid\">\n    </div>\n  \n    <button class=\"btn btn-success\" (click)=\"createEmployee()\">Create</button>\n  </form>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/employee/employee.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/employee/employee.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6\">\n  <table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>name</th>\n    <th>designation</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let employee of employees\">\n          <td>{{employee.name}}</td>\n          <td>{{employee.designation}}</td>\n          <td><button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\"> Delete Employee</button></td>\n          </tr>\n  </tbody>\n    </table>\n\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n  <mat-card class=\"back\">\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content fxLayout=\"column\">\n    <mat-form-field class=\"text\">\n      <input matInput  placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"username\">\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-actions align=\"end\">\n    <button mat-raised-button color=\"primary\" (click)=checkLogin()>Login</button>\n  </mat-card-actions>\n  </mat-card>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  logout works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"back\">\n    <mat-card-header>\n      <mat-card-title>Register</mat-card-title>\n    </mat-card-header>\n    <mat-card-content fxLayout=\"column\">\n      <mat-form-field>\n        <input #name type=\"text\" matInput placeholder=\"Name\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input #email type=\"email\" matInput placeholder=\"Email\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input #password type=\"password\" matInput placeholder=\"Password\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input #phone type=\"text\" matInput placeholder=\"Mobile Number\" required>\n      </mat-form-field>\n      <mat-form-field>\n        <input #mobile type=\"company\" matInput placeholder=\"Company\" required>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n      <button mat-raised-button color=\"primary\" (click)=sendinfo(name.value,email.value,password.value,company.value,mobile.value)>Register</button>\n    </mat-card-actions>\n    </mat-card>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"basic\" class=\"navbar\">\n  <div>DashBoard</div>\n  <div> \n    <span> <a routerLink=\"/employee/#\">Home</a></span>\n    <span> <a routerLink=\"/employee/dash\">Test</a></span>\n    <span> <a routerLink=\"/employee/dash\">Result</a></span>\n    <span> <a routerLink=\"/employee/bar-chart\">Analysis</a></span>\n  </div>\n</mat-toolbar>\n  <table  mat-table [dataSource]=\"dataSource\" class=\"data-table\" style=\"text-align: center;\">\n    <ng-container matColumnDef=\"_employeeid\">\n      <th mat-header-cell *matHeaderCellDef> Id </th>\n      <td mat-cell *matCellDef=\"let details \"> {{details._employeeid}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"employeename\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let details \"> {{details.employeename}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"employeescore\">\n      <th mat-header-cell *matHeaderCellDef> Score </th>\n      <td mat-cell *matCellDef=\"let details \"> {{details.employeescore}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"testname\">\n      <th mat-header-cell *matHeaderCellDef> Test </th>\n      <td mat-cell *matCellDef=\"let details \"> {{details.testname}} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n    <h3>\n        Enter your details\n    </h3>\n</head>\n<form class=\"empDetailsForm\" #employeeDetailsForm=\"ngForm\">\n    EmployeeId: <input #id type=\"text\"><br>\n    EmployeeName: <input #name type=\"text\"><br>\n    EmailId: <input #emailid type=\"text\"><br>\n    Company: <input #company type=\"text\"><br>\n    Designation: <input #designation type=\"text\"><br>\n    PhoneNo.: <input #phoneno type=\"text\"><br>\n    <button (click)=\"saveDetailsAndGoToInstructions(id.value, name.value, emailid.value, company.value, designation.value, phoneno.value)\" id=\"submit\">Submit</button>\n    \n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <h2 style=\"text-align: center\">Welcome to QuizO</h2>\n\n</div>\n<div class=\"hero-image\">\n</div>\n<div class=\"text\">\n    <h2 style=\"color:midnightblue\">Knowledge is power!<br><br> Want to test yours?<br><br> Login and take a quiz with us.\n    </h2>\n</div>\n<div class=\"btn\">\n    <button class=\"login\" (click)=\"ngOnInit()\"><a routerLink=\"/employee/employee-details\" >login</a> > </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"errorContainer\">\n    <div class=\"errorMessage\" layout-align=\"center center\">\n        <h1>Access Denied for This Page</h1>\n    </div>\n    <button mat-flat-button routerLink=\"/login\" color=\"accent\">Go to Login</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <mat-card class=\"feedback\" >\n      <mat-card-header class=\"feedHead\" >\n        <mat-card-title>Send us your feedback!</mat-card-title>\n        <mat-card-subtitle>Do you have a suggestion? Let us know in the field below.</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"feedContent\" style=\"padding-left:1rem;\">\n        <div>\n        <p>How was your experience?</p>\n        <mat-radio-group>\n        <mat-radio-button value=\"good\"> Good </mat-radio-button>\n        <p></p>\n        <mat-radio-button value=\"bad\"> Bad </mat-radio-button>\n        </mat-radio-group>\n        </div>\n        <form class=\"feed\">\n            <mat-form-field class=\"feedText\">\n                <textarea matInput placeholder=\"Describe your experience here...\"></textarea>\n              </mat-form-field>\n        </form>\n      </mat-card-content>\n    \n     <mat-card-footer>\n      <div class=\"example-button-row\" style=\"align-self: center;\">\n        <button mat-raised-button color=\"primary\"><a routerLink=\"/dash\">Submit</a></button>\n      </div>\n     </mat-card-footer>\n  </mat-card>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container navbar2\">\n    <div class=\"row\">\n        <div class=\"col-6  testName\">\n            <h3>MOVIE-TEST</h3>\n        </div>\n        <div class=\"col-6 timerContainer\">\n            <div class=\"timer\">\n                <h3>{{roundedMins}}:{{roundedSecs}}</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<div class=\"card questionContainer\">\n    <div class=\"card-body\">\n        <h4>Q{{count+1}})</h4>\n        <div class=\"question\">\n            <h5 class=\"card-title\">{{question?.question}}</h5>\n            <div class=\"card-text\">\n                <div class=\"custom-control\" (click)=\"saveAnswer(1)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"1\" [(ngModel)]=\"options\">\n                        {{choices[0]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(2)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"2\" [(ngModel)]=\"options\">\n                        {{choices[1]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(3)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"3\" [(ngModel)]=\"options\">\n                        {{choices[2]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(4)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"4\" [(ngModel)]=\"options\">\n                        {{choices[3]}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"row\">\n        <div class=\"col-sm-4 button\">\n            <button class=\"btn btn-primary\" type=\"submit\" (click)=\"prevQuestion()\" *ngIf=\"count!=0\">previous</button>\n        </div>\n        <div class=\"col-sm-4 button\">\n            <button class=\"btn btn-primary\" type=\"submit\" ng-click=\"options=null\" (click)=\"nextQuestion()\"\n                *ngIf=\"count!=3\">next</button>\n        </div>\n        <div class=\"col-sm-4 button\" >\n            <button class=\"btn btn-danger\" type=\"submit\" (click)=\"submitTest()\">submit test</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=mi>              \n      <div >\n                    <h1>-</h1>\n                      \n                        <h3>HR has set a test for you.</h3>\n                       \n                        <h3>Please take the test (java) before the due date 12/12/2019</h3>\n                </div>\n                <button mat-flat-button routerLink=\"/employee/test-instructions\" color=\"accent\">take-test</button>\n            </div>\n\n            \n    <!-- <div class=\"contain\" layout-align=\"center center\">\n            <h1>HR has set a test for you.</h1>\n            <div class=\"row\" style=\"background-color:beige\">\n                <div class=\"col-sm-8\">\n                    <h3>Please take the test (java) before the due date 12/12/2019</h3>\n                </div>\n                <div class=\"col-sm-4\" ><button mat-raised-button color=\"primary\" routerLink=\"/employee/test-instructions\">take-test</button></div>\n            </div>\n       \n    </div>\n     -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/page-not-found/page-not-found.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/page-not-found/page-not-found.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class =\"mat-title\">HTTP 404:page-not-found</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-display-1\">\n\n    Instructions</div>\n<div class=\"mi\">\n    <div>\n\n        <mat-list>\n\n            <mat-list-item> -Total duration of examination is 1 hour. </mat-list-item>\n            <mat-list-item> -This paper consists of Questions </mat-list-item>\n            <mat-list-item> -The clock will be set by server. The countdown timer in the top right corner of the screen will display the remaining time available for you to complete the exam. When the timer reaches zero, the examination will end by itself. </mat-list-item>\n            <mat-list-item> -Positive and Negetive marks assosiacted with the questions are displayed at top-right.</mat-list-item>\n            <mat-list-item> -Once you skip a question you will not be able to go back to that question.</mat-list-item>\n            <mat-list-item> -After you have submitted your test, you can check your marked options against the correct answers in the Answers option. </mat-list-item>\n            <mat-divider></mat-divider>\n        </mat-list>\n    </div>\n\n\n\n</div>\n<button  mat-raised-button color=\"accent\" (click)=\"ngOnInit()\"><a routerLink=\"/employee/test-page\" >start test</a></button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form (ngSubmit)=\"submitQuiz()\">\n    <div *ngFor=\"let questions of questionList\">\n        <mat-grid-list cols=\"5\" rowHeight=\"75px\">\n            <mat-grid-tile colspan=\"3\" rows=\":.5\"><label id=\"questionLabel\">{{questions.question}}</label></mat-grid-tile>\n            <mat-grid-tile colspan=\"2\" rows=\":.5\"></mat-grid-tile>\n        </mat-grid-list>\n        <mat-grid-list cols=\"5\" rowHeight=\"1:1\">\n                \n                <div class=\"questionField\" *ngFor=\"let choice of questions.choices\" >\n                    <mat-radio-group\n                    aria-labelledby=\"questionAnswers\"\n                    class=\"questionOptions\"\n                    [(ngModel)]=\"answerChoices[questions]\" \n                    \n                    name={{questions}}> \n                        <mat-radio-button class=\"questionBtn\"  >\n                            {{choice}}\n                        </mat-radio-button>\n                        <div>You selected: {{answerChoices[questions]}}</div>\n                    </mat-radio-group>\n                </div>\n            \n                </mat-grid-tile>\n            <mat-grid-tile colspan=\"2\"></mat-grid-tile>\n        </mat-grid-list>\n        \n        <mat-divider></mat-divider>\n\n    </div>\n    <div>You selected: {{answerChoices[questions]}}</div>\n\n    <mat-grid-list cols=\"5\" rowHeight=\"100px\">\n        <mat-grid-tile colspan=\"4\"></mat-grid-tile>\n        <mat-grid-tile>\n            <button mat-stroked-button id=\"questionSubmit\" type=\"submit\" color=\"primary\">Submit</button>\n        </mat-grid-tile>\n    </mat-grid-list>\n    </form> -->\n\n<form class=\"my-form\" #userregistrationform=\"ngForm\">\n    <mat-card class=\"example-box\" *ngFor=\"let question of questionList\">\n        <h3>\n            {{ question.question }}\n        </h3>\n        <br/>\n        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\">\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let choice of question.choices\" [value]=\"choice\" [(ngModel)]=\"question.response\" name=\"response\" ngDefaultControl>\n                {{choice}}\n            </mat-radio-button>\n        </mat-radio-group>\n    </mat-card>\n    <div class=\"container\">\n        <a routerLink='/employee/thankyou'>\n            <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"saveResponse(questionList)\">Submit</button></a>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"thankyouContainer\">\n    <div class=\"errorMessage\" layout-align=\"center center\">\n        <h1>Your Quiz has been completed. Thanks!</h1>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-display-1\">\n\n    Selected Employees</div>\n\n<mat-list>\n    <h3 mat-subheader> Selected Employees</h3>\n    <mat-list-item *ngFor=\"let employee of employees\">\n        <mat-icon mat-list-icon>perm_identity</mat-icon>\n        <h4 mat-line>{{employee.name}}</h4>\n        <h4 mat-line>{{employee.email}}</h4>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n</mat-list>\n\n\n\n\n<mat-list>\n    <h3 mat-subheader id=\"io\">Selected Test</h3>\n\n    <h4 mat-line>{{test.name}}</h4>\n</mat-list>\n\n<button mat-raised-button color=\"accent\" (click)=\"confirmMapping()\">CONFIRM!</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"mat-display-1\" >Select Employees</div>\n  <mat-divider></mat-divider>\n<form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <li formArrayName=\"employees\" *ngFor=\"let employee of form.controls.employees.controls; let i = index\" class=\"emp\">\n        <input type=\"checkbox\" [formControlName]=\"i\">\n        <span> {{employees[i].name}} -----------{{employees[i].id}} </span>\n    </li>\n    <mat-divider></mat-divider>\n    <button mat-raised-button color=\"primary\" >Submit</button>\n</form>\n\n\n<hr>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"mat-display-1\" > Select Topic</div>\n <mat-divider></mat-divider>\n<mat-list>\n    <h3 mat-subheader>Select Topic</h3>\n    <mat-list-item *ngFor=\"let topic of topics\" value=topic (click)=\"selectedTopic(topic)\">\n      <mat-icon mat-list-icon>topic</mat-icon>\n      <h4 mat-line>{{topic.name}}</h4>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </mat-list>\n  \n  <button mat-raised-button color=\"primary\" (click)=\"goToEmployeeSelection()\">Go To Employees</button>\n  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home -->\n<div id=\"home\" class=\"hero-area\">\n\n  <!-- Backgound Image -->\n  <div class=\"bg-image bg-parallax overlay\" style=\"background-image:url(../../assets/img/home-background.jpg)\"></div>\n  <!-- /Backgound Image -->\n\n  <div class=\"home-wrapper\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <h1 class=\"white-text\">We provide a platform for online quizes</h1>\n          <h3 class=\"lead white-text\">Knowledge is power. Want to test yours? Login and take a quiz with us.</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<!-- /Home -->\n<!-- About -->\n<div id=\"about\" class=\"section\">\n\n  <!-- container -->\n  <div class=\"container\">\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <div class=\"section-header\">\n          <h2>Welcome to Quizo</h2>\n          <p class=\"lead\">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>\n        </div>\n\n        <!-- feature -->\n        <div class=\"feature\">\n          <i class=\"feature-icon fa fa-flask\"></i>\n          <div class=\"feature-content\">\n            <h4>Online Quizes </h4>\n            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n          </div>\n        </div>\n        <!-- /feature -->\n\n        <!-- feature -->\n        <div class=\"feature\">\n          <i class=\"feature-icon fa fa-users\"></i>\n          <div class=\"feature-content\">\n            <h4>Expert team</h4>\n            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n          </div>\n        </div>\n        <!-- /feature -->\n\n        <!-- feature -->\n        <div class=\"feature\">\n          <i class=\"feature-icon fa fa-comments\"></i>\n          <div class=\"feature-content\">\n            <h4>Community</h4>\n            <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n          </div>\n        </div>\n        <!-- /feature -->\n\n      </div>\n\n      <div class=\"col-md-6\">\n        <div class=\"about-img\">\n          <img src=\"../../assets/img/about.png\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n    <!-- row -->\n\n  </div>\n  <!-- container -->\n</div>\n<!-- /About -->\n<!-- Why us -->\n<div id=\"why-us\" class=\"section\">\n\n  <!-- container -->\n  <div class=\"container\">\n\n    <!-- row -->\n\n    <div class=\"section-header text-center\">\n      <h2>Why Quizo</h2>\n      <p class=\"lead\">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>\n    </div>\n    <!-- feature -->\n    <div class=\"col-md-4\">\n      <div class=\"feature\">\n        <i class=\"feature-icon fa fa-flask\"></i>\n        <div class=\"feature-content\">\n          <h4>Online Courses</h4>\n          <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n        </div>\n      </div>\n    </div>\n    <!-- /feature -->\n\n    <!-- feature -->\n    <div class=\"col-md-4\">\n      <div class=\"feature\">\n        <i class=\"feature-icon fa fa-users\"></i>\n        <div class=\"feature-content\">\n          <h4>Expert Teachers</h4>\n          <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n        </div>\n      </div>\n    </div>\n    <!-- /feature -->\n\n    <!-- feature -->\n    <div class=\"col-md-4\">\n      <div class=\"feature\">\n        <i class=\"feature-icon fa fa-comments\"></i>\n        <div class=\"feature-content\">\n          <h4>Community</h4>\n          <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>\n        </div>\n      </div>\n    </div>\n    <!-- /feature -->\n\n  </div>\n  <!-- /row -->\n\n  <hr class=\"section-hr\">\n\n  <!-- row -->\n\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-md-6\">\n    <h3>Persius imperdiet incorrupte et qui, munere nusquam et nec.</h3>\n    <p class=\"lead\">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>\n    <p>No vel facete sententiae, quodsi dolores no quo, pri ex tamquam interesset necessitatibus. Te denique cotidieque\n      delicatissimi sed. Eu doming epicurei duo. Sit ea perfecto deseruisse theophrastus. At sed malis hendrerit, elitr\n      deseruisse\n      in sit, sit ei facilisi mediocrem.</p>\n  </div>\n\n  <div class=\"col-md-5 col-md-offset-1\">\n    <a class=\"about-video\" href=\"#\">\n      <img src=\"../../assets/img/about-video.jpg\" alt=\"\">\n      <i class=\"play-icon fa fa-play\"></i>\n    </a>\n  </div>\n\n\n  <!-- /row -->\n\n</div>\n</div>\n<!-- /container -->\n\n\n<!-- /Why us -->\n\n<section class=\"py-5\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"wow fadeIn\">\n      <h2 class=\"h1 pt-5 pb-3 text-center\">Our team members</h2>\n      <p class=\"lead\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate\n        esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.\n      </p>\n    </div>\n    <div class=\"row mb-lg-4 center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/w1.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Nicole West</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Lead Designer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@nicolewest</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/w2.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Hannah Cruz</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Photographer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@hannahcruz</span></a>\n        </div>\n      </div>\n\n    </div>\n    <hr>\n    <div class=\"row center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/m1.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Mark Hall</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@markhall</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/m2.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Vincent Harris</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@vincentharris</span></a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<hr>\n<section class=\"py-5\" id=\"team\">\n  <div class=\"container\">\n    <div class=\"row mb-lg-4 center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/w1.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Nicole West</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Lead Designer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@nicolewest</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/w2.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Hannah Cruz</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Photographer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@hannahcruz</span></a>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row center-on-small-only\">\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/m1.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Mark Hall</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@markhall</span></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n        <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\" src=\"../assets/img/m2.jpg\"\n            alt=\"team member\" /></div>\n        <div class=\"col-md-6 float-right\">\n          <div class=\"h4\">Vincent Harris</div>\n          <h6 class=\"font-bold blue-grey-text mb-4\">Web Developer</h6>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic\n            tenetur.</p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n              class=\"ml-1\">@vincentharris</span></a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n<hr>\n\n\n<!-- Contact -->\n<div id=\"contact\" class=\"section\">\n\n  <!-- container -->\n  <div class=\"container\">\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- contact form -->\n      <div class=\"col-md-6\">\n        <div class=\"contact-form\">\n          <h4>Send A Message</h4>\n          <form>\n            <input class=\"input\" type=\"text\" name=\"name\" placeholder=\"Name\">\n            <input class=\"input\" type=\"email\" name=\"email\" placeholder=\"Email\">\n            <input class=\"input\" type=\"text\" name=\"subject\" placeholder=\"Subject\">\n            <textarea class=\"input\" name=\"message\" placeholder=\"Enter your Message\"></textarea>\n            <button class=\"main-button icon-button pull-right\">Send Message</button>\n          </form>\n        </div>\n      </div>\n      <!-- /contact form -->\n\n      <!-- contact information -->\n      <div class=\"col-md-5 col-md-offset-1\">\n        <h4>Contact Information</h4>\n        <ul class=\"contact-details\">\n          <li><i class=\"fa fa-envelope\"></i>quizo123@gmail.com</li>\n          <li><i class=\"fa fa-phone\"></i>122-547-223-45</li>\n          <li><i class=\"fa fa-map-marker\"></i>4476 Clement Street</li>\n        </ul>\n\n        <!-- contact map -->\n        <div id=\"contact-map\"></div>\n        <!-- /contact map -->\n\n      </div>\n      <!-- contact information -->\n\n    </div>\n    <!-- /row -->\n\n  </div>\n  <!-- /container -->\n\n</div>\n<!-- /Contact -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin-module/admin.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin-module/admin.module.ts ***!
  \**********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/admin-module/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/admin-module/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin-module/admin/admin.component.ts");
/* harmony import */ var _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./created-page/created-page.component */ "./src/app/admin-module/created-page/created-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");









let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
            _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatedPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [
            _service_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin-module/admin/admin.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin-module/admin/admin.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin-module/admin/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-module/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminComponent = class AdminComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    ngOnInit() {
    }
    onClick(topic) {
        this.topic = topic;
        this.adminService.createTest(this.topic).subscribe(data => {
            this.responseMessage = data.message;
            console.log(this.responseMessage);
            this.goToCreatedPage();
        });
    }
    goToCreatedPage() {
        this.router.navigate(['/testCreated', this.responseMessage]);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin-module/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin-module/app-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-module/app-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin-module/admin/admin.component.ts");
/* harmony import */ var _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./created-page/created-page.component */ "./src/app/admin-module/created-page/created-page.component.ts");
/* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");






const routes = [
    { path: 'admin', children: [
            { path: 'createTest', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
            { path: 'testCreated/:id', component: _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_4__["CreatedPageComponent"] },
            { path: ' ', redirectTo: "/createTest", pathMatch: 'full' },
            { path: '**', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] }
        ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]], data: { role: 'ADM' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/admin-module/app.component.css":
/*!************************************************!*\
  !*** ./src/app/admin-module/app.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-module/app.component.ts":
/*!***********************************************!*\
  !*** ./src/app/admin-module/app.component.ts ***!
  \***********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'adminAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/admin-module/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/admin-module/created-page/created-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin-module/created-page/created-page.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9jcmVhdGVkLXBhZ2UvY3JlYXRlZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin-module/created-page/created-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin-module/created-page/created-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreatedPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedPageComponent", function() { return CreatedPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreatedPageComponent = class CreatedPageComponent {
    constructor(adminService, router, route) {
        this.adminService = adminService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(params => {
            this.message = params.responseMessage;
        });
    }
    ngOnInit() {
    }
    onClick() {
        this.router.navigate([' ']);
    }
};
CreatedPageComponent.ctorParameters = () => [
    { type: _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CreatedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-created-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./created-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./created-page.component.css */ "./src/app/admin-module/created-page/created-page.component.css")).default]
    })
], CreatedPageComponent);



/***/ }),

/***/ "./src/app/admin-module/service/admin-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-module/service/admin-service.service.ts ***!
  \***************************************************************/
/*! exports provided: AdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function() { return AdminServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AdminServiceService = class AdminServiceService {
    constructor(http) {
        this.http = http;
        this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].adminURLprefix;
    }
    createTest(topic) {
        return this.http.post(this.URLprefix + 'createTest', topic);
    }
};
AdminServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminServiceService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    color: black;\n    text-align: center;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'aqefrontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _hr_module_hr_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hr-module/hr.module */ "./src/app/hr-module/hr.module.ts");
/* harmony import */ var _employee_module_employee_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-module/employee.module */ "./src/app/employee-module/employee.module.ts");
/* harmony import */ var _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-module/admin.module */ "./src/app/admin-module/admin.module.ts");
/* harmony import */ var _authentication_module_authentication_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication-module/authentication.module */ "./src/app/authentication-module/authentication.module.ts");
/* harmony import */ var _landing_module_landing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-module/landing.module */ "./src/app/landing-module/landing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication-module/service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _landing_module_landing_module__WEBPACK_IMPORTED_MODULE_10__["LandingModule"],
            _hr_module_hr_module__WEBPACK_IMPORTED_MODULE_6__["HrModule"],
            _employee_module_employee_module__WEBPACK_IMPORTED_MODULE_7__["EmployeeModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _admin_module_admin_module__WEBPACK_IMPORTED_MODULE_8__["AdminModule"],
            _authentication_module_authentication_module__WEBPACK_IMPORTED_MODULE_9__["AuthenticationModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
        ],
        providers: [_authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_13__["ToasterService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication-module/add-employee/add-employee.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/authentication-module/add-employee/add-employee.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/authentication-module/add-employee/add-employee.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/authentication-module/add-employee/add-employee.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/authentication-module/service/httpclient.service.ts");



let AddEmployeeComponent = class AddEmployeeComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
        this.user = new _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["Employee"]("", "", "", "");
    }
    ngOnInit() {
    }
    createEmployee() {
    }
    ;
};
AddEmployeeComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
];
AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/add-employee/add-employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-employee.component.css */ "./src/app/authentication-module/add-employee/add-employee.component.css")).default]
    })
], AddEmployeeComponent);



/***/ }),

/***/ "./src/app/authentication-module/app-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication-module/app-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/authentication-module/employee/employee.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication-module/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/authentication-module/logout/logout.component.ts");
/* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/authentication-module/service/auth-gaurd.service.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/authentication-module/registration/registration.component.ts");








const routes = [
    { path: 'auth', children: [
            { path: '', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]] },
            { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"] },
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/authentication-module/app.component.css":
/*!*********************************************************!*\
  !*** ./src/app/authentication-module/app.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/authentication-module/app.component.ts":
/*!********************************************************!*\
  !*** ./src/app/authentication-module/app.component.ts ***!
  \********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'employee-management';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/authentication-module/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/authentication-module/authentication.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/authentication-module/authentication.module.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/authentication-module/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/authentication-module/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/authentication-module/employee/employee.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-employee/add-employee.component */ "./src/app/authentication-module/add-employee/add-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication-module/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/authentication-module/logout/logout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/authentication-module/registration/registration.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
















let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
            _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_7__["AddEmployeeComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
            _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
        ],
        providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AuthenticationModule);



/***/ }),

/***/ "./src/app/authentication-module/employee/employee.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/authentication-module/employee/employee.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/authentication-module/employee/employee.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/authentication-module/employee/employee.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/httpclient.service */ "./src/app/authentication-module/service/httpclient.service.ts");



let EmployeeComponent = class EmployeeComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
    }
    ngOnInit() {
        this.httpClientService.getEmployees().subscribe(response => this.handleSuccessfulResponse(response));
    }
    handleSuccessfulResponse(response) {
        this.employees = response;
    }
    deleteEmployee(employee) {
    }
    ;
};
EmployeeComponent.ctorParameters = () => [
    { type: _service_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/authentication-module/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/authentication-module/login/login.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/authentication-module/login/login.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-main{\n    padding-top: 10%;\n    }\n    mat-card{\n    min-width: 27%;\n    }\n    .back{\n    background-color:#F5F5F5;\n}\n    .text{\n    color: #585858;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEI7SUFDQTtJQUNBLGNBQWM7SUFDZDtJQUNKO0lBQ0ksd0JBQXdCO0FBQzVCO0lBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbWFpbntcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIH1cbiAgICBtYXQtY2FyZHtcbiAgICBtaW4td2lkdGg6IDI3JTtcbiAgICB9XG4uYmFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNUY1RjU7XG59XG4udGV4dHtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/authentication-module/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/authentication-module/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/authentication-module/service/registration.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");







let LoginComponent = class LoginComponent {
    constructor(router, loginservice, registrationService, toastr, toasterService) {
        this.router = router;
        this.loginservice = loginservice;
        this.registrationService = registrationService;
        this.toastr = toastr;
        this.toasterService = toasterService;
        this.username = '';
        this.password = '';
        this.email = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    checkLogin() {
        this.loginservice.authenticate(this.username, this.password).subscribe(data => {
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('role', data.role);
            let tokenStr = 'Bearer ' + data.token;
            sessionStorage.setItem('token', tokenStr);
            const userRole = data.role;
            if (userRole == 'ADM') {
                this.router.navigate(['/admin']);
            }
            if (userRole == 'EMP') {
                this.router.navigate(['/employee']);
            }
            if (userRole == 'HRM') {
                this.router.navigate(['/hr']);
            }
            this.toasterService.success('Login successful');
            this.invalidLogin = false;
        }, error => {
            console.log(error.error.message);
            this.toasterService.error('Login failed, login again');
            this.invalidLogin = true;
        });
    }
    register() {
        this.registrationService.register(this.username, this.password, this.email).subscribe(data => { console.log(data); }, err => { console.log(err); });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authentication-module/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/authentication-module/logout/logout.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/authentication-module/logout/logout.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/authentication-module/logout/logout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/authentication-module/logout/logout.component.ts ***!
  \******************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LogoutComponent = class LogoutComponent {
    constructor(authentocationService, router) {
        this.authentocationService = authentocationService;
        this.router = router;
    }
    ngOnInit() {
        this.authentocationService.logOut();
        this.router.navigate(['/auth/login']);
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication-module/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/authentication-module/registration/registration.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/authentication-module/registration/registration.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.login-main{\n    padding-top: 3%;\n    }\n    mat-card{\n    min-width: 40%;\n    }\n    .back{\n        background-color:#F5F5F5;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2Y7SUFDQTtJQUNBLGNBQWM7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvZ2luLW1haW57XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIH1cbiAgICBtYXQtY2FyZHtcbiAgICBtaW4td2lkdGg6IDQwJTtcbiAgICB9XG4gICAgLmJhY2t7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcbiAgICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/authentication-module/registration/registration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/authentication-module/registration/registration.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegistrationComponent = class RegistrationComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/authentication-module/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/authentication-module/service/auth-gaurd.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication-module/service/auth-gaurd.service.ts ***!
  \*********************************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");




let AuthGaurdService = class AuthGaurdService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['/auth/login']);
        return false;
    }
};
AuthGaurdService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGaurdService);



/***/ }),

/***/ "./src/app/authentication-module/service/authentication.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/authentication-module/service/authentication.service.ts ***!
  \*************************************************************************/
/*! exports provided: User, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




class User {
    constructor(status) {
        this.status = status;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authURLprefix;
    }
    authenticate(username, password) {
        return this.httpClient.post(this.URLprefix + '/signin', { username, password });
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        // console.log(!(user === null))
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
    }
    getUserRole() {
        return sessionStorage.getItem('role');
    }
    getUser() {
        return { username: sessionStorage.getItem('username'), role: sessionStorage.getItem('role') };
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/authentication-module/service/httpclient.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication-module/service/httpclient.service.ts ***!
  \*********************************************************************/
/*! exports provided: Employee, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class Employee {
    constructor(empId, name, designation, salary) {
        this.empId = empId;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }
}
let HttpClientService = class HttpClientService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getEmployees() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
        return this.httpClient.get('http://localhost:8080/me', { headers });
    }
};
HttpClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpClientService);



/***/ }),

/***/ "./src/app/authentication-module/service/registration.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/authentication-module/service/registration.service.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




let RegistrationService = class RegistrationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URLprefix = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].adminURLprefix;
    }
    register(username, password, email) {
        return this.httpClient.post(this.URLprefix + '/register', { username, password, email, "role": "EMP" });
    }
};
RegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistrationService);



/***/ }),

/***/ "./src/app/authentication-module/service/role-guard.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication-module/service/role-guard.service.ts ***!
  \*********************************************************************/
/*! exports provided: RoleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function() { return RoleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");




let RoleGuardService = class RoleGuardService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        console.log(this.authService.getUser(), this.authService.isUserLoggedIn());
        const currentUser = this.authService.getUser();
        const givenRole = route.data.role;
        console.log(givenRole);
        if (this.authService.isUserLoggedIn() && this.authService.getUserRole() === givenRole) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
};
RoleGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoleGuardService);



/***/ }),

/***/ "./src/app/authentication-module/service/toaster-service.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authentication-module/service/toaster-service.service.ts ***!
  \**************************************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let ToasterService = class ToasterService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(title, message) {
        this.toastr.success(title, message);
    }
    error(title, message) {
        this.toastr.error(title, message);
    }
};
ToasterService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToasterService);



/***/ }),

/***/ "./src/app/employee-module/app-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee-module/app-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AppRoutingModule, EmployeeRoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingComponents", function() { return EmployeeRoutingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/employee-module/page-not-found/page-not-found.component.ts");
/* harmony import */ var _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-ins/test-ins.component */ "./src/app/employee-module/test-ins/test-ins.component.ts");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/employee-module/test-page/test-page.component.ts");
/* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/employee-module/thankyou/thankyou.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/employee-module/error/error.component.ts");
/* harmony import */ var _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employeedetails/employeedetails.component */ "./src/app/employee-module/employeedetails/employeedetails.component.ts");
/* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emptypage/emptypage.component */ "./src/app/employee-module/emptypage/emptypage.component.ts");
/* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/employee-module/dashboard/dashboard.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/employee-module/feedback/feedback.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/employee-module/landing/landing.component.ts");
/* harmony import */ var _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fetch-test/fetch-test.component */ "./src/app/employee-module/fetch-test/fetch-test.component.ts");















const routes = [
    { path: 'employee', children: [
            { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"] },
            { path: 'employee-details', component: _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_8__["EmployeedetailsComponent"] },
            { path: 'test-instructions', component: _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_4__["TestInsComponent"] },
            { path: 'test-page', component: _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_14__["FetchTestComponent"] },
            { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] },
            { path: 'thankyou', component: _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_6__["ThankyouComponent"] },
            { path: 'dash', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"] },
            { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_12__["FeedbackComponent"] },
            { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
        ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_10__["RoleGuardService"]], data: { role: 'EMP' } }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const EmployeeRoutingComponents = [
    _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_9__["EmptypageComponent"],
    _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_8__["EmployeedetailsComponent"],
    _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_4__["TestInsComponent"],
    _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_5__["TestPageComponent"],
    _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
    _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_6__["ThankyouComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_12__["FeedbackComponent"]
];


/***/ }),

/***/ "./src/app/employee-module/app.component.css":
/*!***************************************************!*\
  !*** ./src/app/employee-module/app.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employee-module/app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employee-module/app.component.ts ***!
  \**************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'emp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/employee-module/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/employee-module/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-module/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    justify-content: space-between;\n    padding-top: 1rem;\n}\nspan{\n    padding-right: 1rem;\n}\n.data-table{\n    margin-top: 40px;\n    width: 80%;\n    margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG59XG5zcGFue1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4uZGF0YS10YWJsZXtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/employee-module/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-module/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_dash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/dash.service */ "./src/app/employee-module/service/dash.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(httpClientService) {
        this.httpClientService = httpClientService;
        this.displayedColumns = ['_employeeid', 'employeename', 'employeescore', 'testname'];
    }
    ngOnInit() {
        // this.columns = this.httpClientService.getColumns();
        this.httpClientService.getDetails().subscribe(response => {
            this.details = response;
            console.log(response);
            this.dataSource = response;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _service_dash_service__WEBPACK_IMPORTED_MODULE_2__["DashService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/employee-module/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/employee-module/employee.module.ts":
/*!****************************************************!*\
  !*** ./src/app/employee-module/employee.module.ts ***!
  \****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/employee-module/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/employee-module/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "./src/app/employee-module/material/material.module.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/user.service */ "./src/app/employee-module/service/user.service.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/data.service */ "./src/app/employee-module/service/data.service.ts");
/* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/topic.service */ "./src/app/employee-module/service/topic.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/employee-module/dashboard/dashboard.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/employee-module/feedback/feedback.component.ts");
/* harmony import */ var _service_dash_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/dash.service */ "./src/app/employee-module/service/dash.service.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/employee-module/landing/landing.component.ts");
/* harmony import */ var _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fetch-test/fetch-test.component */ "./src/app/employee-module/fetch-test/fetch-test.component.ts");

















let EmployeeModule = class EmployeeModule {
};
EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingComponents"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackComponent"],
            _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_16__["FetchTestComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _service_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _service_topic_service__WEBPACK_IMPORTED_MODULE_9__["TopicService"], _service_dash_service__WEBPACK_IMPORTED_MODULE_14__["DashService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], EmployeeModule);



/***/ }),

/***/ "./src/app/employee-module/employeedetails/employeedetails.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/employee-module/employeedetails/employeedetails.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9lbXBsb3llZWRldGFpbHMvZW1wbG95ZWVkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/employee-module/employeedetails/employeedetails.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employee-module/employeedetails/employeedetails.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeedetailsComponent", function() { return EmployeedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EmployeedetailsComponent = class EmployeedetailsComponent {
    constructor(router) {
        this.router = router;
        this.employee = {
            id: 0, name: "", email: "", company: "", designation: "", phoneno: 9999999999
        };
    }
    ngOnInit() {
    }
    saveDetailsAndGoToInstructions(id, name, email, company, designation, phoneno) {
        this.employee.id = id;
        this.employee.name = name;
        this.employee.email = email;
        this.employee.company = company;
        this.employee.designation = designation;
        this.employee.phoneno = phoneno;
        sessionStorage.setItem(id, JSON.stringify(this.employee));
        console.log(JSON.parse(sessionStorage.getItem(id)));
        this.router.navigate(['/test-instructions']);
    }
};
EmployeedetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmployeedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employeedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeedetails.component.css */ "./src/app/employee-module/employeedetails/employeedetails.component.css")).default]
    })
], EmployeedetailsComponent);



/***/ }),

/***/ "./src/app/employee-module/emptypage/emptypage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-module/emptypage/emptypage.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nbody {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n    height: 60px;\n    background-color: #A3E4D7;\n    padding-top: 2px;\n    opacity: 1;\n}\n\n.btn {\n    height: 60px;\n    background-color: #A3E4D7;\n    opacity: 1;\n    width:1000px;\n}\n\n.login {\n    background-color: blanchedalmond;\n    color: brown;\n    position: relative;\n    font-size: 24px;\n    margin-left:400px;\n    top: 25%;\n    left: 47%;\n}\n\n.hero-image {\n    background-image: url(\"/assets/lib3.jpeg\");\n    opacity: 0.7;\n    background-color: #cccccc;\n    height: 520px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n.text {\n    position: absolute;\n    top: 30%;\n    left: 40%;\n    font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2VtcHR5cGFnZS9lbXB0eXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvZW1wdHlwYWdlL2VtcHR5cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNFNEQ3O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmJ0biB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0U0RDc7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDoxMDAwcHg7XG59XG5cbi5sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgY29sb3I6IGJyb3duO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6NDAwcHg7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogNDclO1xufVxuXG4uaGVyby1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9saWIzLmpwZWdcIik7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/employee-module/emptypage/emptypage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-module/emptypage/emptypage.component.ts ***!
  \******************************************************************/
/*! exports provided: EmptypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptypageComponent", function() { return EmptypageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmptypageComponent = class EmptypageComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmptypageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emptypage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emptypage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emptypage.component.css */ "./src/app/employee-module/emptypage/emptypage.component.css")).default]
    })
], EmptypageComponent);



/***/ }),

/***/ "./src/app/employee-module/error/error.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-module/error/error.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvckNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/employee-module/error/error.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-module/error/error.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/employee-module/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/employee-module/feedback/feedback.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-module/feedback/feedback.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  body{\n    height: 100%;\n  }\n .feedHead{\n   margin-left: 27%;\n   margin-bottom: 2%;\n   color: rgba(2, 4, 15, 0.986);\n   font-family: bold,'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n   font-size: 50%;\n }\n .feedContent{\n    margin-left: 33%;\n    color: black;\n    font: bold;\n  }\n .feedText{\n   width: 50%;\n}\n .feedback{\n\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid none;\n  background: #F5F5F5;\n}\n .feed{\n  width: 100%;\n  margin-top: 3%;\n}\n .example-button-row{\n  margin-left: 45%;\n}\n a{\n  color: white;\n  -webkit-text-emphasis: unset;\n          text-emphasis: unset;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxZQUFZO0VBQ2Q7Q0FDRDtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsNEJBQTRCO0dBQzVCLGtGQUFrRjtHQUNsRixjQUFjO0NBQ2hCO0NBQ0M7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtDQUNGO0dBQ0csVUFBVTtBQUNiO0NBQ0E7O0VBRUUsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7Q0FDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0NBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Q0FDQTtFQUNFLFlBQVk7RUFDWiw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gLmZlZWRIZWFke1xuICAgbWFyZ2luLWxlZnQ6IDI3JTtcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgY29sb3I6IHJnYmEoMiwgNCwgMTUsIDAuOTg2KTtcbiAgIGZvbnQtZmFtaWx5OiBib2xkLCdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICBmb250LXNpemU6IDUwJTtcbiB9XG4gIC5mZWVkQ29udGVudHtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250OiBib2xkO1xuICB9XG4uZmVlZFRleHR7XG4gICB3aWR0aDogNTAlO1xufVxuLmZlZWRiYWNre1xuXG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgbm9uZTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cbi5mZWVke1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4uZXhhbXBsZS1idXR0b24tcm93e1xuICBtYXJnaW4tbGVmdDogNDUlO1xufVxuYXtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWVtcGhhc2lzOiB1bnNldDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/employee-module/feedback/feedback.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-module/feedback/feedback.component.ts ***!
  \****************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedbackComponent = class FeedbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/employee-module/feedback/feedback.component.css")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/employee-module/fetch-test/fetch-test.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/employee-module/fetch-test/fetch-test.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timerContainer{\n \n padding-top:33px;\n margin-bottom: 0;\n}\n\n.timer{\n    float:right;\n}\n\n.testName{\n    padding-top:33px;\n}\n\n.actions{\n    float:right;\n}\n\n.navbar2{\n    width:70%;\n    margin-left:15%;\n    height:100px;\n}\n\n.card{\n    background-color:#F5F5F5;\n}\n\n.question{\n    padding-left:10%;\n    padding-top:10px;\n}\n\n.questionContainer{\n    width:70%;\n    padding-left:1%;\n    margin-left:15%;\n}\n\n.button{\n    text-align: center;\n    display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZldGNoLXRlc3QvZmV0Y2gtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9mZXRjaC10ZXN0L2ZldGNoLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lckNvbnRhaW5lcntcbiBcbiBwYWRkaW5nLXRvcDozM3B4O1xuIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50aW1lcntcbiAgICBmbG9hdDpyaWdodDtcbn1cblxuLnRlc3ROYW1le1xuICAgIHBhZGRpbmctdG9wOjMzcHg7XG59XG5cbi5hY3Rpb25ze1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG4ubmF2YmFyMntcbiAgICB3aWR0aDo3MCU7XG4gICAgbWFyZ2luLWxlZnQ6MTUlO1xuICAgIGhlaWdodDoxMDBweDtcbn1cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcbn1cblxuLnF1ZXN0aW9ue1xuICAgIHBhZGRpbmctbGVmdDoxMCU7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbn1cbi5xdWVzdGlvbkNvbnRhaW5lcntcbiAgICB3aWR0aDo3MCU7XG4gICAgcGFkZGluZy1sZWZ0OjElO1xuICAgIG1hcmdpbi1sZWZ0OjE1JTtcbn1cblxuLmJ1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/employee-module/fetch-test/fetch-test.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employee-module/fetch-test/fetch-test.component.ts ***!
  \********************************************************************/
/*! exports provided: FetchTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTestComponent", function() { return FetchTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_fetch_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fetch-test.service */ "./src/app/employee-module/service/fetch-test.service.ts");
/* harmony import */ var _model_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/result */ "./src/app/employee-module/model/result.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FetchTestComponent = class FetchTestComponent {
    constructor(fetchTestService, router) {
        this.fetchTestService = fetchTestService;
        this.router = router;
        this.totalSeconds = 20;
        this.minutes = Math.floor(this.totalSeconds / 60);
        this.seconds = this.totalSeconds % 60;
        this.roundedMins = this.pad(this.minutes);
        this.roundedSecs = this.pad(this.seconds);
        this.resultList = [];
    }
    ngOnInit() {
        console.log("in ngoninit");
        this.fetchTestService.getQuestions(this.topic).subscribe(data => {
            console.log(data[1]);
            this.questionList = data;
            this.question = this.questionList[0];
            // console.log(this.question);
            this.choices = this.question['choices'];
            console.log(this.options);
            this.count = 0;
        });
        this.checkTime();
    }
    nextQuestion() {
        this.count = this.count + 1;
        this.question = this.questionList[this.count];
        this.options = null;
        this.resetTime();
    }
    prevQuestion() {
        this.count = this.count - 1;
        this.question = this.questionList[this.count];
        this.options = null;
    }
    saveAnswer(option) {
        console.log("option data is ", this.options);
        this.result = new _model_result__WEBPACK_IMPORTED_MODULE_3__["result"](this.question.id, option);
        console.log("result ", this.result);
        this.resultList[this.count] = this.result;
        console.log("the result list is ", this.resultList);
    }
    submitTest() {
        console.log(this.resultList);
    }
    resetTime() {
        this.totalSeconds = 20;
        this.minutes = Math.floor(this.totalSeconds / 60);
        this.seconds = this.totalSeconds % 60;
    }
    checkTime() {
        if (this.count != 3) {
            if (this.totalSeconds <= 0) {
                setTimeout(() => { this.nextQuestion(); }, 1);
                setTimeout(() => { this.checkTime(); }, 1000);
            }
            else {
                this.totalSeconds -= 1;
                this.minutes = Math.floor(this.totalSeconds / 60);
                this.seconds = this.totalSeconds % 60;
                this.roundedMins = this.pad(this.minutes);
                this.roundedSecs = this.pad(this.seconds);
                setTimeout(() => { this.checkTime(); }, 1000);
            }
        }
        else {
            if (this.totalSeconds <= 0) {
                setTimeout(() => { this.submitTest(); }, 1);
            }
            else {
                this.totalSeconds -= 1;
                this.minutes = Math.floor(this.totalSeconds / 60);
                this.seconds = this.totalSeconds % 60;
                this.roundedMins = this.pad(this.minutes);
                this.roundedSecs = this.pad(this.seconds);
                setTimeout(() => { this.checkTime(); }, 1000);
            }
        }
    }
    pad(number) {
        return (number < 10 ? '0' : '') + number;
    }
};
FetchTestComponent.ctorParameters = () => [
    { type: _service_fetch_test_service__WEBPACK_IMPORTED_MODULE_2__["FetchTestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FetchTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fetch-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fetch-test.component.css */ "./src/app/employee-module/fetch-test/fetch-test.component.css")).default]
    })
], FetchTestComponent);



/***/ }),

/***/ "./src/app/employee-module/landing/landing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-module/landing/landing.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh3 {\n   margin-top:50px;\n   margin-left: 20%;\n}\n\n.mat-flat-button {\n\n    margin-left:600px;\n    margin-top:50px;\n    margin-bottom:100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgzIHtcbiAgIG1hcmdpbi10b3A6NTBweDtcbiAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuXG4gICAgbWFyZ2luLWxlZnQ6NjAwcHg7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/employee-module/landing/landing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-module/landing/landing.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/employee-module/landing/landing.component.css")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/employee-module/material/material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/employee-module/material/material.module.ts ***!
  \*************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");




















const MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/employee-module/model/result.ts":
/*!*************************************************!*\
  !*** ./src/app/employee-module/model/result.ts ***!
  \*************************************************/
/*! exports provided: result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class result {
    constructor(id, option) {
        this.id = id;
        this.option = option;
    }
}


/***/ }),

/***/ "./src/app/employee-module/page-not-found/page-not-found.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/employee-module/page-not-found/page-not-found.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employee-module/page-not-found/page-not-found.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/employee-module/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/employee-module/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/employee-module/service/dash.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee-module/service/dash.service.ts ***!
  \*********************************************************/
/*! exports provided: DashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashService", function() { return DashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
// export class Detail{
//   constructor(
//     public employeename:string,
//     public employeescore:string,
//     public testname:string,
//   ){}
// }



let DashService = class DashService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getDetails() {
        console.log("test call");
        return this.httpClient.get("http://172.23.234.85:8093/employee/dashboard/");
    }
};
DashService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashService);



/***/ }),

/***/ "./src/app/employee-module/service/data.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee-module/service/data.service.ts ***!
  \*********************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// import { topic } from '../models/topic';
// import { score } from '../models/score';
let DataService = class DataService {
    constructor() {
        //username observable
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.userName = this.messageSource.asObservable();
        //topic observable
        this.defaultTopic = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.topicSelected = this.defaultTopic.asObservable();
        //correct observable
        this.defaultCorrect = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.correct = this.defaultCorrect.asObservable();
        //incorrect observable
        this.defaultIncorrect = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.incorrect = this.defaultIncorrect.asObservable();
    }
    changeUser(user) {
        this.messageSource.next(user);
    }
    changeTopic(topic) {
        this.defaultTopic.next(topic);
    }
    changeScore(newScore) {
        this.defaultCorrect.next(newScore.correct);
        this.defaultIncorrect.next(newScore.incorrect);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/employee-module/service/fetch-test.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/employee-module/service/fetch-test.service.ts ***!
  \***************************************************************/
/*! exports provided: FetchTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTestService", function() { return FetchTestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let FetchTestService = class FetchTestService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
        this.topic = "java";
    }
    getQuestions(topic) {
        console.log("here");
        return this.http.get(this.url + '/questions');
    }
};
FetchTestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FetchTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FetchTestService);



/***/ }),

/***/ "./src/app/employee-module/service/score.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-module/service/score.service.ts ***!
  \**********************************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ScoreService = class ScoreService {
    constructor(http) {
        this.http = http;
        this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
        this.url = 'http://localhost:9090/quiz/test/questions';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    postScore(c, i) {
        let scoreJSON = {
            correct: c,
            incorrect: i
        };
        return this.http.post(this.URLprefix + '/questions', scoreJSON, this.httpOptions);
    }
};
ScoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScoreService);



/***/ }),

/***/ "./src/app/employee-module/service/topic.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-module/service/topic.service.ts ***!
  \**********************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TopicService = class TopicService {
    constructor(http) {
        this.http = http;
        this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
        // url: string = 'http://localhost:9090/quiz/test/questions';
        this.topic = "java";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getQuestions(topic) {
        return this.http.get(this.URLprefix + '/questions');
    }
};
TopicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TopicService);



/***/ }),

/***/ "./src/app/employee-module/service/user.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/employee-module/service/user.service.ts ***!
  \*********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
    }
    getusers() {
        return this.http.get(this.URLprefix + '/topics');
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/employee-module/test-ins/test-ins.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-module/test-ins/test-ins.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.mat-display-1{\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n.mat-list{\n    margin-left: 20px;\n}\n.mat-raised-button{\n    margin-left:600px;\n    margin-top:50px;\n}\n.mi{border-style: double;\nborder: block width 10px; }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3Rlc3QtaW5zL3Rlc3QtaW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQSxJQUFJLG9CQUFvQjtBQUN4Qix3QkFBd0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS90ZXN0LWlucy90ZXN0LWlucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWRpc3BsYXktMXtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTMwcHg7XG59XG4ubWF0LWxpc3R7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWF0LXJhaXNlZC1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6NjAwcHg7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xufVxuLm1pe2JvcmRlci1zdHlsZTogZG91YmxlO1xuYm9yZGVyOiBibG9jayB3aWR0aCAxMHB4OyB9XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/employee-module/test-ins/test-ins.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-module/test-ins/test-ins.component.ts ***!
  \****************************************************************/
/*! exports provided: TestInsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInsComponent", function() { return TestInsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestInsComponent = class TestInsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestInsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-ins',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-ins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-ins.component.css */ "./src/app/employee-module/test-ins/test-ins.component.css")).default]
    })
], TestInsComponent);



/***/ }),

/***/ "./src/app/employee-module/test-page/test-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-module/test-page/test-page.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".questionOptions {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n  }\n  #questionLabel{\n      width: 85%;\n      text-align: left;\n  }\n  .questionBtn {\n    margin: 5px;\n  }\n  .questionField{\n      width: 65%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3Rlc3QtcGFnZS90ZXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUNBO01BQ0ksVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7TUFDSSxVQUFVO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uT3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gICNxdWVzdGlvbkxhYmVse1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnF1ZXN0aW9uQnRuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAucXVlc3Rpb25GaWVsZHtcbiAgICAgIHdpZHRoOiA2NSU7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/employee-module/test-page/test-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-module/test-page/test-page.component.ts ***!
  \******************************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/employee-module/service/data.service.ts");
/* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/employee-module/service/topic.service.ts");
/* harmony import */ var _service_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/score.service */ "./src/app/employee-module/service/score.service.ts");






let TestPageComponent = class TestPageComponent {
    constructor(data, s, r, score) {
        this.data = data;
        this.s = s;
        this.r = r;
        this.score = score;
        //ngModule for two way binding
        this.answerChoices = [];
        this.topic = "java";
        this.correct = 0;
        this.incorrect = 0;
    }
    ngOnInit() {
        this.data.userName.subscribe(data => {
            //if user is not logged on, they cannot access this page
            if (data === '') {
                // this.r.navigate(['/error']);
            }
        });
        this.subscription = this.data.topicSelected.subscribe(message => {
            this.topic = message;
        });
        this.s.getQuestions(this.topic).subscribe(data => { this.questionList = data[1].questions; console.log(data[0].questions); });
        console.log(this.questionList);
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
    submitQuiz() {
        //Edge case for submitting the quiz early
        if (this.answerChoices.length < 5) {
            for (let i = this.answerChoices.length; i < 5; i++) {
                this.answerChoices.push(0);
            }
        }
        //Counts the number of correct and incorrect questions
        for (let i = 0; i < this.questionList.length; i++) {
            if (this.questionList[i].answer === this.answerChoices[i]) {
                this.correct += 1;
            }
            else {
                this.incorrect += 1;
            }
        }
        //Posts score json
        this.score.postScore(this.correct, this.incorrect).subscribe();
        let scoreObj = {
            correct: this.correct,
            incorrect: this.incorrect
        };
        this.data.changeScore(scoreObj);
        this.r.navigate(['/thankyou']);
    }
};
TestPageComponent.ctorParameters = () => [
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"] }
];
TestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-page-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-page.component.css */ "./src/app/employee-module/test-page/test-page.component.css")).default]
    })
], TestPageComponent);



/***/ }),

/***/ "./src/app/employee-module/thankyou/thankyou.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-module/thankyou/thankyou.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thankyouContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3RoYW5reW91L3RoYW5reW91LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvdGhhbmt5b3UvdGhhbmt5b3UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFua3lvdUNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/employee-module/thankyou/thankyou.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-module/thankyou/thankyou.component.ts ***!
  \****************************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ThankyouComponent = class ThankyouComponent {
    constructor() { }
    ngOnInit() {
    }
};
ThankyouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thankyou',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thankyou.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thankyou.component.css */ "./src/app/employee-module/thankyou/thankyou.component.css")).default]
    })
], ThankyouComponent);



/***/ }),

/***/ "./src/app/hr-module/app-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hr-module/app-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/hr-module/employee/employee.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/hr-module/confirm/confirm.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/hr-module/topic/topic.component.ts");
/* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");







const routes = [
    { path: 'hr', children: [
            { path: '', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__["TopicComponent"], pathMatch: 'full' },
            { path: 'main', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__["TopicComponent"], pathMatch: 'full' },
            { path: 'employees', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"] },
            { path: 'confirm', component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"] }
        ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_6__["RoleGuardService"]], data: { role: 'HRM' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/hr-module/app.component.css":
/*!*********************************************!*\
  !*** ./src/app/hr-module/app.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/hr-module/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/hr-module/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hrfrontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/hr-module/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/hr-module/confirm/confirm.component.css":
/*!*********************************************************!*\
  !*** ./src/app/hr-module/confirm/confirm.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.mat-display-1{\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n.mat-subheader{\n    margin-top: 100px;\n    margin-left: 530px;\n}\n#io{\n    margin-top: 20px;  \n}\n.mat-list{\n    margin-left: 20px;\n}\n.mat-raised-button{\n    margin-left:50px;\n    margin-top:50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaHItbW9kdWxlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5tYXQtZGlzcGxheS0xe1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MzBweDtcbn1cbi5tYXQtc3ViaGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MzBweDtcbn1cbiNpb3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAgXG59XG4ubWF0LWxpc3R7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWF0LXJhaXNlZC1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6NTBweDtcbiAgICBtYXJnaW4tdG9wOjUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/hr-module/confirm/confirm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hr-module/confirm/confirm.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/confirm.service */ "./src/app/hr-module/service/confirm.service.ts");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");




let ConfirmComponent = class ConfirmComponent {
    constructor(confirmService, dataService) {
        this.confirmService = confirmService;
        this.dataService = dataService;
        this.testMapping = {};
    }
    ngOnInit() {
        this.test = this.dataService.getSelectedTest();
        this.employees = this.dataService.getSelectedEmployees();
    }
    confirmMapping() {
        this.testMapping.testName = this.test.name;
        this.testMapping.createdAt = new Date();
        const date7daysfromnow = new Date();
        date7daysfromnow.setDate(date7daysfromnow.getDate() + 7);
        this.testMapping.expiresAt = date7daysfromnow;
        this.testMapping.topicId = this.test.id;
        this.testMapping.users = [];
        this.employees.forEach((v, k) => this.testMapping.users.push({ id: v.id, status: "N" }));
        console.log(this.testMapping);
        this.confirmService.postTestMapping(this.testMapping).subscribe(response => console.log(response));
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: _service_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.component.css */ "./src/app/hr-module/confirm/confirm.component.css")).default]
    })
], ConfirmComponent);



/***/ }),

/***/ "./src/app/hr-module/employee/employee.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hr-module/employee/employee.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.mat-display-1{\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n.emp{\n    margin-top: 30px;\n    margin-left: 20px;\n}\n.li{\n    margin-left: 20px;\n}\n.mat-raised-button{\n    margin-left:50px;\n    margin-top:50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oci1tb2R1bGUvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hdC1kaXNwbGF5LTF7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xufVxuLmVtcHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmxpe1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/hr-module/employee/employee.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hr-module/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/employee.service */ "./src/app/hr-module/service/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");






let EmployeeComponent = class EmployeeComponent {
    constructor(employeeService, dataService, router, formBuilder) {
        this.employeeService = employeeService;
        this.dataService = dataService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            employees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
    }
    ngOnInit() {
        this.getAllEmployeesList();
    }
    getAllEmployeesList() {
        this.employeeService.getAllEmployees().subscribe((response) => {
            this.employees = response;
            this.addCheckBoxesToEmp();
        });
    }
    addCheckBoxesToEmp() {
        this.employees.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.form.controls.employees.push(control);
        });
    }
    submit() {
        const selectedEmp = this.form.value.employees
            .map((v, i) => v ? this.employees[i] : null)
            .filter(v => v !== null);
        console.log(selectedEmp);
        this.dataService.setSelectedEmployees(selectedEmp);
        this.router.navigate(['/hr/confirm']);
    }
};
EmployeeComponent.ctorParameters = () => [
    { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/hr-module/employee/employee.component.css")).default]
    })
], EmployeeComponent);



/***/ }),

/***/ "./src/app/hr-module/hr.module.ts":
/*!****************************************!*\
  !*** ./src/app/hr-module/hr.module.ts ***!
  \****************************************/
/*! exports provided: HrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function() { return HrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/hr-module/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/hr-module/app.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/hr-module/employee/employee.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/hr-module/confirm/confirm.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/hr-module/topic/topic.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ "./src/app/hr-module/material/material.module.ts");
/* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/topic.service */ "./src/app/hr-module/service/topic.service.ts");
/* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/hr-module/service/employee.service.ts");
/* harmony import */ var _service_confirm_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/confirm.service */ "./src/app/hr-module/service/confirm.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let HrModule = class HrModule {
};
HrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
            _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"],
            _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [_service_topic_service__WEBPACK_IMPORTED_MODULE_10__["TopicService"], _service_employee_service__WEBPACK_IMPORTED_MODULE_11__["EmployeeService"], _service_confirm_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], HrModule);



/***/ }),

/***/ "./src/app/hr-module/material/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/hr-module/material/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");


















const MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__["MatRadioModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/hr-module/service/confirm.service.ts":
/*!******************************************************!*\
  !*** ./src/app/hr-module/service/confirm.service.ts ***!
  \******************************************************/
/*! exports provided: ConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function() { return ConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ConfirmService = class ConfirmService {
    constructor(http) {
        this.http = http;
        this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
    }
    postTestMapping(testMapping) {
        return this.http.post(this.URLprefix + "/assign", testMapping);
    }
};
ConfirmService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfirmService);



/***/ }),

/***/ "./src/app/hr-module/service/data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/hr-module/service/data.service.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() { }
    setSelectedTest(test) {
        this.selectedTest = test;
    }
    getSelectedTest() {
        return this.selectedTest;
    }
    clearSelectedTest() {
        this.selectedTest = undefined;
    }
    setSelectedEmployees(employees) {
        this.selectedEmployees = employees;
    }
    getSelectedEmployees() {
        return this.selectedEmployees;
    }
    clearSelectedEmployees() {
        this.selectedEmployees = undefined;
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/hr-module/service/employee.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/hr-module/service/employee.service.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
    }
    getAllEmployees() {
        return this.http.get(this.URLprefix + "/users");
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/hr-module/service/topic.service.ts":
/*!****************************************************!*\
  !*** ./src/app/hr-module/service/topic.service.ts ***!
  \****************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let TopicService = class TopicService {
    constructor(http) {
        this.http = http;
        this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HrURLprefix;
    }
    getAllTopics() {
        return this.http.get(this.URLprefix + "/topics");
    }
};
TopicService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TopicService);



/***/ }),

/***/ "./src/app/hr-module/topic/topic.component.css":
/*!*****************************************************!*\
  !*** ./src/app/hr-module/topic/topic.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.mat-display-1{\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n.mat-raised-button{\n    margin-left:50px;\n    margin-top:50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaHItbW9kdWxlL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZGlzcGxheS0xe1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MzBweDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/hr-module/topic/topic.component.ts":
/*!****************************************************!*\
  !*** ./src/app/hr-module/topic/topic.component.ts ***!
  \****************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/hr-module/service/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");






let TopicComponent = class TopicComponent {
    constructor(topicService, router, dataService, formBuilder) {
        this.topicService = topicService;
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            topics: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
    }
    ngOnInit() {
        this.getAllTopics();
    }
    getAllTopics() {
        this.topicService.getAllTopics().subscribe((response) => {
            console.log(response);
            this.topics = response;
            this.addCheckBoxesToTopics();
        });
    }
    addCheckBoxesToTopics() {
        this.topics.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
            this.form.controls.topics.push(control);
        });
    }
    goToEmployeeSelection() {
        //get the first '[0]'th topic selected
        const selectedTopic = this.form.value.topics
            .map((v, i) => v ? this.topics[i] : null)
            .filter(v => v !== null)[0];
        console.log(selectedTopic);
        this.dataService.setSelectedTest(selectedTopic);
        this.router.navigate(['/hr/employees']);
    }
    selectedTopic(selectedTopic) {
        // console.log(selectedTopic);
        this.dataService.setSelectedTest(selectedTopic);
        this.router.navigate(['/hr/employees']);
    }
};
TopicComponent.ctorParameters = () => [
    { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic.component.css */ "./src/app/hr-module/topic/topic.component.css")).default]
    })
], TopicComponent);



/***/ }),

/***/ "./src/app/landing-module/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/landing-module/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/landing-module/app.component.ts");




const routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'landing', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/landing-module/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/landing-module/app.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nTemplate Name: HTML Education Template\nAuthor: yaminncco\n\nColors:\n\tBody \t\t: #798696\n\tHeaders \t: #374050\n\tPrimary \t: #FF6700\n\tGrey \t\t: #EBEBEB\n\nFonts: Lato & Montserrat\n\nTable OF Contents\n------------------------------------\n1 > General\n2 > Logo\n3 > Navigation\n4 > Hero Area\n5 > About & Why Us (Feature)\n6 > Courses\n7 > Footer\n8 > Contact Page\n9 > Blog Page\n10 > Blog Page Sidebar\n11 > Single Post Page\n12 > Responsive\n13 > Preloader\n------------------------------------*/\n\n/*------------------------------------*\\\n\tGeneral\n\\*------------------------------------*/\n\n/* --- typography --- */\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n\tfont-size: 15px;\n    font-weight: 400;\n    color: #798696;\n\toverflow-x:hidden;\n}\n\nh1,h2,h3,h4,h5,h6 {\n\tmargin-top: 12px;\n\tmargin-bottom: 15px;\n\tfont-weight: 600;\n\tcolor: #374050;\n}\n\nh1 {\n\tfont-size:38px;\n}\n\nh2 {\n\tfont-size:30px;\n}\n\nh3 {\n\tfont-size:24px;\n}\n\nh4 {\n\tfont-size:18px;\n}\n\na {\n\tfont-family: 'Lato', sans-serif;\n\tcolor: #374050;\n\tfont-weight: 700;\n}\n\na:hover,\na:focus{\n    text-decoration: none;\n    outline: none;\n\tcolor: #374050;\n\topacity: 0.9;\n}\n\nul,ol{\n    margin: 0;\n    padding: 0;\n    list-style: none\n}\n\n.white-text {\n\tcolor: #FFF;\n}\n\nblockquote {\n\tposition: relative;\n\tmargin: 20px 0px;\n\tpadding: 20px 20px 20px 60px;\n\tborder-left: none;\n\tcolor: #374050;\n}\n\nblockquote:before{\n\tcontent:\"\\f10d\";\n\tfont-family:fontAwesome;\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tcolor: #FF6700;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder-radius:50%;\n\tborder:1px solid #EBEBEB;\n}\n\n/* --- Section --- */\n\n.section {\n\tposition:relative;\n\tpadding-top:80px;\n\tpadding-bottom:80px;\n}\n\n.section-hr {\n\tmargin-top:80px;\n\tmargin-bottom:80px;\n\tborder-color: #EBEBEB;\n}\n\n.section-header {\n\tmargin-bottom:40px;\n}\n\n/* --- Background Image --- */\n\n.bg-image {\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-position:center;\n\tbackground-size:cover;\n}\n\n.bg-image.bg-parallax {\n\tbackground-attachment:fixed;\n}\n\n.bg-image.overlay:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-image: linear-gradient(to bottom, #374050 0%, #798696 100%);\n\topacity: 0.7;\n}\n\n/* --- Buttons --- */\n\n.main-button {\n\tposition:relative;\n\tdisplay:inline-block;\n\tpadding:10px 30px;\n\tbackground-color: #FF6700;\n\tborder: 2px solid transparent;\n\tborder-radius: 40px;\n\tcolor: #FFF;\n\ttransition:0.2s all;\n}\n\n.main-button:hover , .main-button:focus {\n\tbackground-color:#fff;\n\tborder: 2px solid #FF6700;\n\tcolor:#FF6700;\n}\n\n.main-button.icon-button:hover , .main-button.icon-button:focus {\n\tpadding-right: 45px;\n}\n\n.main-button.icon-button:after {\n\tcontent:\"\\f178\";\n\tfont-family:FontAwesome;\n\tposition:absolute;\n\twidth: 30px;\n\tright: 15px;\n\ttext-align:center;\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.main-button.icon-button:hover:after , .main-button.icon-button:focus:after {\n\topacity:1;\n}\n\n/* --  Input  -- */\n\ninput[type=\"text\"], input[type=\"email\"], input[type=\"password\"], input[type=\"number\"], input[type=\"date\"], input[type=\"url\"], input[type=\"tel\"], textarea {\n    height: 40px;\n    width: 100%;\n    border: 1px solid #EBEBEB;\n\tborder-radius:4px;\n\tbackground: transparent;\n    padding-left: 15px;\n\tpadding-right: 15px;\n\ttransition:0.2s border-color;\n}\n\ntextarea {\n    padding: 10px 15px;\n}\n\ninput[type=\"text\"]:focus, input[type=\"email\"]:focus, input[type=\"password\"]:focus, input[type=\"number\"]:focus, input[type=\"date\"]:focus, input[type=\"url\"]:focus, input[type=\"tel\"]:focus, textarea:focus {\n\tborder-color:#FF6700;\n}\n\n/*------------------------------------*\\\n\tLogo\n\\*------------------------------------*/\n\n.navbar-brand {\n    padding: 0;\n}\n\n.navbar-brand .logo {\n\tmargin-top: 10px;\n\tdisplay: inline-block;\n}\n\n.navbar-brand .logo > img {\n\tmax-height:30px;\n}\n\n@media only screen and (max-width: 767px) {\n\t.navbar-brand {\n\t\tmargin-left:15px;\n\t}\n}\n\n/*------------------------------------*\\\n\tNavigation\n\\*------------------------------------*/\n\n#header {\n\tposition:fixed;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tz-index:99;\n\tborder-bottom:1px solid rgba(235, 235, 235, 0.25);\n\tbackground-color:#FFF;\n\ttransition:0.2s all;\n}\n\n#header.transparent-nav {\n\tposition:fixed;\n\tbackground-color: transparent;\n}\n\n#header.transparent-nav .main-menu li a {\n\tcolor:#FFF;\n}\n\n.main-menu li a {\n\ttext-transform:uppercase;\n\ttransition:0.2s all;\n}\n\n.main-menu li a:hover , .main-menu li a:focus {\n\tbackground-color:transparent;\n}\n\n.main-menu li a:after {\n\tcontent:\"\";\n\tdisplay:block;\n\theight:2px;\n\tbackground-color:#FF6700;\n\twidth:100%;\n\ttransform: translateY(5px);\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.main-menu li a:hover:after , .main-menu li a:focus:after {\n\ttransform: translateY(0px);\n\topacity:1;\n}\n\n/* -- Mobile Nav -- */\n\n@media only screen and (max-width: 767px) {\n\t#nav {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\twidth: 0%;\n\t\tmax-width:250px;\n\t\theight: 100vh;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n\t\tpadding-top: 80px;\n\t\tpadding-bottom: 40px;\n\t\ttransform: translateX(100%);\n\t\ttransition: 0.4s all cubic-bezier(.77,0,.18,1);\n\t\tz-index:9;\n\t}\n\n\t#header.nav-collapse #nav{\n\t\twidth:100%;\n\t\ttransform: translateX(0%);\n\t}\n\t\n\t.main-menu {\n\t\tmargin:0;\n\t}\n\t\n\t.main-menu li a {\n\t\tcolor: #374050 !important;\n\t\tdisplay: inline-block;\n\t\tmargin-left: 40px;\n\t}\n}\n\n/* -- Mobile Toggle Btn -- */\n\n.navbar-toggle {\n\tposition:fixed;\n\tright:0;\n\tpadding: 0;\n\theight: 40px;\n\twidth: 40px;\n\tmargin-top: 5px;\n\tz-index:99;\n}\n\n.navbar-toggle > span {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n    transform: translate(-50% , -50%);\n\ttransition: 0.2s background;\n}\n\n.navbar-toggle > span:before, .navbar-toggle > span:after {\n\tcontent: '';\n\tposition:absolute;\n\tleft:0;\n\ttransition: 0.2s transform;\n}\n\n.navbar-toggle > span , .navbar-toggle > span:before , .navbar-toggle > span:after {\n\theight: 2px;\n\twidth: 25px;\n\tbackground-color:#374050;\n}\n\n.navbar-toggle > span:before {\n\ttop: -10px;\n}\n\n.navbar-toggle > span:after {\n\ttop: 10px;\n}\n\n#header.nav-collapse .navbar-toggle > span {\n\tbackground: transparent;\n}\n\n#header.nav-collapse .navbar-toggle > span:before {\n    transform: translateY(10px) rotate(45deg);\n}\n\n#header.nav-collapse .navbar-toggle > span:after {\n    transform: translateY(-10px) rotate(-45deg);\n}\n\n/*------------------------------------*\\\n\tHero Area\n\\*------------------------------------*/\n\n.hero-area {\n\tposition:relative;\n\tpadding-top: 80px;\n\tpadding-bottom: 80px;\n}\n\n#home.hero-area {\n\theight:calc(100vh - 80px);\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n\n.home-wrapper {\n\tposition:absolute;\n\ttop:50%;\n\ttransform:translateY(-50%);\n\tleft:0;\n\tright:0;\n}\n\n/* -- Breadcrumb -- */\n\n.hero-area-tree li {\n\tdisplay:inline-block;\n\tfont-family: 'Lato', sans-serif;\n\tfont-weight:600;\n\tfont-size:14px;\n\tcolor:rgba(255, 255, 255, 0.8);\n}\n\n.hero-area-tree li > a {\n\tcolor:rgba(255, 255, 255, 0.8);\n}\n\n.hero-area-tree li + li:before {\n\tcontent: \"/\";\n\tdisplay: inline-block;\n\tmargin: 0px 5px;\n\tcolor: rgba(235, 235, 235, 0.25);\n}\n\n/*------------------------------------*\\\n\tAbout & Why Us (Feature)\n\\*------------------------------------*/\n\n/* -- Feature -- */\n\n.feature {\n\tposition:relative;\n}\n\n.feature + .feature  {\n\tmargin-top:40px;\n}\n\n.feature .feature-icon {\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\twidth:80px;\n\theight:80px;\n\tline-height:80px;\n\ttext-align:center;\n\tborder-radius: 50%;\n\tfont-size:30px;\n\tborder:1px solid #EBEBEB;\n\tcolor:#FF6700;\n}\n\n.feature-content {\n\tpadding-left:100px;\n}\n\n/* -- About Img -- */\n\n.about-img {\n\tmargin-top:40px;\n}\n\n.about-img > img {\n\twidth:100%;\n}\n\n/* -- About Video -- */\n\n.about-video {\n\tposition: relative;\n\tdisplay: block;\n\tborder-radius: 4px;\n\toverflow: hidden;\n}\n\n.about-video > img {\n\twidth:100%;\n}\n\n.about-video .play-icon {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50% , -50%);\n\twidth: 80px;\n\theight: 80px;\n\tline-height: 80px;\n\ttext-align: center;\n\tbackground: #fff;\n\tborder-radius: 50%;\n\tfont-size: 24.027px;\n\tz-index:10;\n\t-webkit-animation : 2s play-animation infinite;\n\t        animation : 2s play-animation infinite;\n\ttransition:0.2s color;\n}\n\n.about-video:hover .play-icon {\n\tcolor:#FF6700;\n}\n\n@-webkit-keyframes play-animation {\n\tfrom {\n\t\tbox-shadow : 0px 0px 0px 0px #FFF;\n\t}\n\tto {\n\t\tbox-shadow : 0px 0px 0px 10px transparent;\n\t}\n}\n\n@keyframes play-animation {\n\tfrom {\n\t\tbox-shadow : 0px 0px 0px 0px #FFF;\n\t}\n\tto {\n\t\tbox-shadow : 0px 0px 0px 10px transparent;\n\t}\n}\n\n.about-video:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\ttop:0;\n\tbackground-color:#FF6700;\n\topacity:0.7;\n}\n\n/*------------------------------------*\\\n\tCourses\n\\*------------------------------------*/\n\n.course {\n\tmargin-top:20px;\n\tmargin-bottom:20px;\n}\n\n.course .course-img {\n\tposition: relative;\n\tdisplay:block;\n\tmargin-bottom:20px;\n\tborder-radius:4px;\n\toverflow:hidden;\n}\n\n.course .course-img > img {\n\twidth:100%;\n}\n\n.course-img:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\ttop:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.course .course-img:hover:after {\n\topacity:0.7;\n}\n\n.course .course-img .course-link-icon {\n\tposition:absolute;\n\tleft:50%;\n\ttop:50%;\n\ttransform: translate(-50% , calc(-50% - 15px));\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder:2px solid #fff;\n\tcolor:#fff;\n\tborder-radius:50%;\n\topacity:0;\n\tz-index:10;\n\ttransition:0.2s all;\n}\n\n.course .course-img:hover .course-link-icon {\n\ttransform: translate(-50% , -50%);\n\topacity:1;\n}\n\n.course .course-title {\n\tdisplay:block;\n\theight:42px;\n}\n\n.course .course-details {\n\tmargin-top: 20px;\n\tpadding-top: 10px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.course .course-details .course-price {\n\tfloat: right;\n}\n\n.course .course-details .course-price.course-free {\n\tcolor: green;\n}\n\n.course .course-details .course-price.course-premium {\n\tcolor: #FF6700;\n}\n\n#courses .center-btn {\n\ttext-align:center;\n\tmargin-top:40px;\n}\n\n/*------------------------------------*\\\n\tFooter\n\\*------------------------------------*/\n\n#bottom-footer {\n\tmargin-top: 20px;\n\tpadding-top: 20px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n/* -- Footer Logo -- */\n\n.footer-logo  .logo {\n\tmargin-top: 20px;\n\tdisplay: inline-block;\n}\n\n.footer-logo  .logo > img {\n\tmax-height:30px;\n}\n\n/* -- Footer Nav -- */\n\n.footer-nav {\n\ttext-align: right;\n\tpadding: 20px 0px;\n}\n\n.footer-nav li {\n\tdisplay:inline-block;\n\tmargin-left:15px\n}\n\n.footer-nav li a {\n\tdisplay:block;\n\ttext-transform:uppercase;\n\ttransition:0.2s color;\n}\n\n.footer-nav li a:hover , .footer-nav li a:focus {\n\tcolor:#FF6700;\n}\n\n.footer-nav li a:after {\n\tcontent:\"\";\n\tdisplay:block;\n\theight:2px;\n\tbackground-color:#FF6700;\n\twidth:100%;\n\ttransform: translateY(5px);\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.footer-nav li a:hover:after , .footer-nav li a:focus:after {\n\ttransform: translateY(0px);\n\topacity:1;\n}\n\n/* -- Footer copyright -- */\n\n.footer-copyright {\n\tline-height:40px;\n}\n\n/* -- Footer Social -- */\n\n.footer-social {\n\ttext-align:right;\n}\n\n.footer-social li {\n\tdisplay:inline-block;\n\tmargin-left:10px;\n}\n\n.footer-social li a {\n\tdisplay:block;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder-radius:50%;\n\tcolor:#FFF;\n\tbackground-color:#EBEBEB;\n\ttransition:0.2s opacity;\n}\n\n.footer-social li a.facebook {\n\tbackground-color:#3b5998;\n}\n\n.footer-social li a.twitter {\n\tbackground-color:#55acee;\n}\n\n.footer-social li a.google-plus {\n\tbackground-color:#dd4b39;\n}\n\n.footer-social li a.instagram {\n\tbackground-color:#e95950;\n}\n\n.footer-social li a.youtube {\n\tbackground-color:#ff0000;\n}\n\n.footer-social li a.linkedin {\n\tbackground-color:#007bb5;\n}\n\n/*------------------------------------*\\\n\tContact Page\n\\*------------------------------------*/\n\n/* -- Contact Form -- */\n\n.contact-form:after {\n\tcontent:\"\";\n\tdisplay:block;\n\tclear:both;\n}\n\n.contact-form .input {\n\tmargin-bottom:20px;\n}\n\n.contact-form textarea.input {\n\theight:200px;\n}\n\n/* -- Contact Information -- */\n\n.contact-details li  {\n\tmargin-bottom:20px;\n}\n\n.contact-details li i {\n\tcolor: #FF6700;\n\tmargin-right: 15px;\n\tborder: 1px solid #EBEBEB;\n\tborder-radius: 50%;\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\ttext-align: center;\n}\n\n/* -- Contact Map -- */\n\n#contact-map {\n\theight:260px;\n\tborder-radius:4px;\n}\n\n/*------------------------------------*\\\n\tBlog Page\n\\*------------------------------------*/\n\n/* -- Single Blog -- */\n\n.single-blog {\n\tmargin-bottom:40px;\n}\n\n.single-blog .blog-img > a {\n\tposition:relative;\n\tdisplay:block;\n\tborder-radius:4px;\n\toverflow:hidden;\n}\n\n.single-blog .blog-img img {\n\twidth:100%;\n}\n\n.single-blog .blog-img > a:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\tright:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.single-blog .blog-img > a:hover:after {\n\topacity:0.7;\n}\n\n.single-blog .blog-meta {\n\tmargin-top: 20px;\n\tpadding-top: 10px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.single-blog .blog-meta .blog-meta-author > a {\n\tcolor: #FF6700;\n}\n\n.single-blog .blog-meta .blog-meta-comments {\n\tmargin-left:10px;\n}\n\n.single-blog .blog-meta .blog-meta-comments > a {\n\tcolor: #798696;\n}\n\n/* -- Pagination -- */\n\n.post-pagination {\n\tmargin-top:40px;\n\ttext-align:center;\n}\n\n.post-pagination .pages {\n\tdisplay:inline-block;\n}\n\n.post-pagination .pages li {\n\tdisplay:inline-block;\n}\n\n.post-pagination .pages li + li {\n\tmargin-left:10px;\n}\n\n.post-pagination .pages li {\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\ttext-align: center;\n\tborder-radius: 50%;\n\tbackground-color: #EBEBEB;\n\ttransition: 0.2s all;\n}\n\n.post-pagination .pages li a {\n\tdisplay:block;\n\ttransition: 0.2s color;\n}\n\n.post-pagination .pages li:hover  , .post-pagination .pages li.active {\n\tbackground-color: #FF6700;\n\tcolor:#FFF;\n}\n\n.post-pagination .pages li:hover a {\n\tcolor:#FFF;\n}\n\n.pagination-back , .pagination-next {\n\tdisplay: block;\n\ttext-align: center;\n\tborder-radius: 40px;\n\tbackground-color: #EBEBEB;\n\ttransition: 0.2s all;\n\theight:40px;\n\tpadding:0px 30px;\n\tline-height:40px;\n}\n\n.pagination-next:hover  , .pagination-back:hover  {\n\tcolor:#FFF;\n\tbackground-color:#FF6700;\n}\n\n.pagination-next:after {\n\tcontent:\"\\f178\";\n\tfont-family:FontAwesome;\n\tmargin-left:15px;\n}\n\n.pagination-back:before {\n\tcontent:\"\\f177\";\n\tfont-family:FontAwesome;\n\tmargin-right:15px;\n}\n\n/*------------------------------------*\\\n\tBlog Page Sidebar\n\\*------------------------------------*/\n\n.widget + .widget {\n\tmargin-top:40px;\n}\n\n/*-- Search --*/\n\n.widget.search-widget {\n\tposition:relative\n}\n\n.widget.search-widget .input {\n\tpadding-right:60px;\n}\n\n.widget.search-widget button {\n\tposition:absolute;\n\tright:0;\n\ttop:0;\n\theight:40px;\n\twidth:40px;\n\tbackground-color:transparent;\n\tborder:none;\n}\n\n.widget.search-widget .input:focus + button {\n\tcolor:#FF6700;\n}\n\n/*-- Category --*/\n\n.category-widget .category {\n\tdisplay:block;\n\ttext-transform:uppercase;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n\n.category-widget .category + .category {\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.category-widget .category:before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\twidth: 4px;\n\theight: 4px;\n\tborder-radius: 50%;\n\tbackground-color: #FF6700;\n\tmargin-right:10px;\n}\n\n.category-widget .category span {\n\tfont-size:14px;\n\tmargin-left:10px;\n\tcolor:#798696;\n}\n\n/*-- Sidebar Posts --*/\n\n.single-post:after {\n\tcontent:\"\";\n\tdisplay:block;\n\tclear:both;\n}\n\n.single-post + .single-post {\n\tmargin-top:20px;\n}\n\n.single-post .single-post-img {\n\tposition:relative;\n\twidth: 80px;\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: 10px;\n\tmargin-top: 3px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n}\n\n.single-post .single-post-img img {\n\twidth:100%;\n}\n\n.single-post-img:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\tright:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.single-post-img:hover:after {\n\topacity:0.7;\n}\n\n/*-- Tags --*/\n\n.tags-widget .tag {\n\tdisplay: inline-block;\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\tmargin-right: 0px;\n\tmargin-top: 5px;\n\tpadding: 5px 15px;\n\tborder-radius: 40px;\n\tborder: 1px solid #EBEBEB;\n\tcolor: #798696;\n\ttransition: 0.2s all;\n}\n\n.tags-widget .tag:hover {\n\tbackground-color:#FF6700;\n\tborder-color:#FF6700;\n\tcolor:#FFF;\n}\n\n/*------------------------------------*\\\n\tSingle Post Page\n\\*------------------------------------*/\n\n/* --- Blog Post Meta --- */\n\n.blog-post-meta {\n\tmargin-top:40px;\n}\n\n.blog-post-meta li {\n\tdisplay:inline-block;\n}\n\n.blog-post-meta li + li {\n\tmargin-left:15px;\n}\n\n.blog-post-meta li , .blog-post-meta li > a {\n\tcolor: rgba(255, 255, 255, 0.8);\n}\n\n.blog-post-meta .blog-meta-author > a {\n\tcolor: #FF6700;\n}\n\n/* --- Blog Share --- */\n\n.blog-share {\n\tborder-top: 1px solid #EBEBEB;\n\tpadding-top: 10px;\n\tmargin-top: 40px;\n}\n\n.blog-share > h4 {\n\tdisplay:inline-block;\n\tmargin:0;\n}\n\n.blog-share a  {\n\tdisplay:inline-block;\n\tmargin-left:10px;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tcolor:#FFF;\n\tbackground-color:#EBEBEB;\n\tborder-radius:50%;\n\ttransition:0.2s opacity;\n}\n\n.blog-share a.facebook {\n\tbackground-color:#3b5998;\n}\n\n.blog-share a.twitter {\n\tbackground-color:#55acee;\n}\n\n.blog-share a.google-plus {\n\tbackground-color:#dd4b39;\n}\n\n/* --- Blog Comments --- */\n\n.blog-comments {\n\tmargin-top:40px;\n}\n\n.blog-comments .media {\n\tmargin-top:20px;\n\tmargin-bottom:20px;\n}\n\n.blog-comments .media .media {\n\tmargin-left:20px;\n}\n\n.blog-comments .media .media:nth-last-child(1) {\n\tmargin-bottom:0px;\n}\n\n.blog-comments .media .media-body {\n\tpadding:20px;\n\tbackground-color:#EBEBEB;\n\tborder-radius:0px 4px 4px;\n}\n\n.blog-comments .media .media-left:before {\n\tcontent:\"\";\n\tposition:absolute;\n\tright:0;\n\ttop:0;\n\tborder-style: solid;\n\tborder-width: 0px 15px 15px;\n\tborder-color: transparent #EBEBEB transparent transparent;\n}\n\n.blog-comments .media-left {\n\tposition:relative;\n\tpadding-right:20px;\n}\n\n.blog-comments .media-left img {\n\twidth:80px;\n\theight:80px;\n\tbackground-color:#EBEBEB;\n\tborder-radius:50%;\n}\n\n.blog-comments .media .date-reply {\n\tfont-size:12px;\n\ttext-transform:uppercase;\n\tcolor:#374050;\n}\n\n.blog-comments .media .date-reply .reply {\n\tmargin-left:15px;\n}\n\n/* --- Blog Reply Form --- */\n\n.blog-reply-form {\n\tmargin-top:40px;\n}\n\n.blog-reply-form .input {\n\tmargin-bottom:20px;\n}\n\n.blog-reply-form .input.name-input , .blog-reply-form .input.email-input {\n\twidth: calc(50% - 10px);\n\tfloat:left;\n}\n\n.blog-reply-form .input.email-input {\n\tmargin-left: 20px;\n}\n\n.blog-reply-form textarea {\n\theight:90px;\n}\n\n/*------------------------------------*\\\n\tResponsive\n\\*------------------------------------*/\n\n@media only screen and (max-width: 991px) {\n\t.section-header h2 {\n\t\tfont-size:24px;\n\t}\n\n\t/*-- Why us --*/\n\t#why-us .feature {\n\t\tmargin-top:40px;\n\t}\n\t\n\t.about-video {\n\t\tmargin-top:40px;\n\t}\n\t\n\t/*-- Call to action --*/\n\t#cta {\n\t\ttext-align:center;\n\t}\n\t\n\t/*-- Footer --*/\n\t.footer-logo {\n\t\ttext-align:center;\n\t}\n\t\n\t.footer-nav {\n\t\ttext-align:center;\n\t}\n\t.footer-nav li {\n\t\tmargin-top: 10px;\n\t}\n\t\n\t.footer-social {\n\t\ttext-align:center;\n\t}\n\t.footer-social li {\n\t\tmargin-top: 10px;\n\t}\n\t\n\t.footer-copyright {\n\t\ttext-align:center;\n\t\tline-height:inherit;\n\t\tmargin-top:20px;\n\t}\n\t\n\t/*-- Contact page --*/\n\t.contact-form  {\n\t\tmargin-bottom:40px;\n\t}\n\n\t.contact-form button {\n\t\tfloat:none !important;\n\t}\n\t\n\t/*-- Blog page --*/\n\t#main {\n\t\tmargin-bottom:80px;\n\t}\n}\n\n@media only screen and (max-width: 767px) {\n\t/*-- Hero area --*/\n\t.hero-area h1 {\n\t\tfont-size:30px;\n\t}\n\n\t/* -- Breadcrumb -- */\n\t.hero-area-tree li {\n\t\tfont-size:12px;\n\t}\n\n\t/*-- Pagination --*/\n\t.post-pagination .pages {\n\t\tdisplay:none;\n\t}\n}\n\n@media only screen and (max-width: 480px) {\n\t/*-- Courses --*/\n\t#courses-wrapper [class*='col-xs'] {\n\t\twidth:100%;\n\t}\n\t\n\t/*-- Blog Comments --*/\n\t.blog-comments .media .media {\n\t\tmargin-left:0px;\n\t}\n\t\n\t/*-- Blog Reply Form --*/\n\t.blog-reply-form .input.name-input , .blog-reply-form .input.email-input {\n\t\twidth: 100%;\n\t\tfloat:none;\n\t}\n\t\n\t.blog-reply-form .input.email-input {\n\t\tmargin-left: 0px;\n\t}\n}\n\n/*------------------------------------*\\\n\tPreloader\n\\*------------------------------------*/\n\n#preloader {\n\tposition:fixed;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-color:#FFF;\n\tz-index:9999;\n}\n\n#preloader .preloader {\n\tposition:absolute;\n\tleft:50%;\n\ttop:50%;\n\ttransform: translate(-50% , -50%);\n}\n\n#preloader .preloader:after {\n\tcontent:\"\";\n\tdisplay:block;\n\twidth:40px;\n\theight:40px;\n\tborder: 1px solid #EBEBEB;\n    border-top: 1px solid #FF6700;\n    border-radius: 50%;\n\t-webkit-animation: 1s preloader linear infinite;\n\t        animation: 1s preloader linear infinite;\n}\n\n@-webkit-keyframes preloader {\n\tfrom { transform: rotate(0deg);}\n\tto { transform: rotate(360deg);}\n}\n\n@keyframes preloader {\n\tfrom { transform: rotate(0deg);}\n\tto { transform: rotate(360deg);}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1tb2R1bGUvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0EyQnFDOztBQUVyQzs7dUNBRXVDOztBQUN2Qyx1QkFBdUI7O0FBQ3ZCO0lBQ0kscUNBQXFDO0NBQ3hDLGVBQWU7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtDQUNoQixjQUFjO0NBQ2QsWUFBWTtBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixLQUFLO0NBQ0wsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsd0JBQXdCO0FBQ3pCOztBQUdBLG9CQUFvQjs7QUFDcEI7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBLDZCQUE2Qjs7QUFDN0I7Q0FDQyxpQkFBaUI7Q0FDakIsTUFBTTtDQUNOLE9BQU87Q0FDUCxLQUFLO0NBQ0wsUUFBUTtDQUNSLDBCQUEwQjtDQUMxQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFFBQVE7Q0FFUixzRUFBc0U7Q0FDdEUsWUFBWTtBQUNiOztBQUVBLG9CQUFvQjs7QUFDcEI7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixXQUFXO0NBRVgsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixTQUFTO0NBRVQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBLGtCQUFrQjs7QUFDbEI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtDQUM1QixpQkFBaUI7Q0FDakIsdUJBQXVCO0lBQ3BCLGtCQUFrQjtDQUNyQixtQkFBbUI7Q0FFbkIsNEJBQTRCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsY0FBYztDQUNkLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFVBQVU7Q0FDVixpREFBaUQ7Q0FDakQscUJBQXFCO0NBRXJCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FFeEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysd0JBQXdCO0NBQ3hCLFVBQVU7Q0FHRiwwQkFBMEI7Q0FDbEMsU0FBUztDQUVULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUdTLDBCQUEwQjtDQUNsQyxTQUFTO0FBQ1Y7O0FBRUEscUJBQXFCOztBQUNyQjtDQUNDO0VBQ0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBRVIsK0NBQStDO0VBQ3ZELGlCQUFpQjtFQUNqQixvQkFBb0I7RUFHWiwyQkFBMkI7RUFFbkMsOENBQThDO0VBQzlDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFVBQVU7RUFHRix5QkFBeUI7Q0FDbEM7O0NBRUE7RUFDQyxRQUFRO0NBQ1Q7O0NBRUE7RUFDQyx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlCQUFpQjtDQUNsQjtBQUNEOztBQUVBLDRCQUE0Qjs7QUFDNUI7Q0FDQyxjQUFjO0NBQ2QsT0FBTztDQUNQLFVBQVU7Q0FDVixZQUFZO0NBQ1osV0FBVztDQUNYLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7SUFHRSxpQ0FBaUM7Q0FFNUMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixNQUFNO0NBR04sMEJBQTBCO0FBRTNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7SUFHWSx5Q0FBeUM7QUFDckQ7O0FBRUE7SUFHWSwyQ0FBMkM7QUFDdkQ7O0FBRUE7O3VDQUV1Qzs7QUFDdkM7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87Q0FHQywwQkFBMEI7Q0FDbEMsTUFBTTtDQUNOLE9BQU87QUFDUjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0Msb0JBQW9CO0NBQ3BCLCtCQUErQjtDQUMvQixlQUFlO0NBQ2YsY0FBYztDQUNkLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGdDQUFnQztBQUNqQzs7QUFFQTs7dUNBRXVDOztBQUN2QyxrQkFBa0I7O0FBQ2xCO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sS0FBSztDQUNMLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHdCQUF3QjtDQUN4QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUEsb0JBQW9COztBQUNwQjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUEsc0JBQXNCOztBQUN0QjtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUdELGlDQUFpQztDQUN6QyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLDhDQUE4QztTQUN0QyxzQ0FBc0M7Q0FFOUMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFFUyxpQ0FBaUM7Q0FDMUM7Q0FDQTtFQUVTLHlDQUF5QztDQUNsRDtBQUNEOztBQUVBO0NBQ0M7RUFFUyxpQ0FBaUM7Q0FDMUM7Q0FDQTtFQUVTLHlDQUF5QztDQUNsRDtBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixLQUFLO0NBQ0wsd0JBQXdCO0NBQ3hCLFdBQVc7QUFDWjs7QUFFQTs7dUNBRXVDOztBQUN2QztDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsS0FBSztDQUNMLHdCQUF3QjtDQUN4QixTQUFTO0NBRVQsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0NBR0MsOENBQThDO0NBQ3RELFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsVUFBVTtDQUVWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUdTLGlDQUFpQztDQUN6QyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTs7dUNBRXVDOztBQUV2QztDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsNkJBQTZCO0FBQzlCOztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUV4QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsVUFBVTtDQUdGLDBCQUEwQjtDQUNsQyxTQUFTO0NBRVQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBR1MsMEJBQTBCO0NBQ2xDLFNBQVM7QUFDVjs7QUFFQSwyQkFBMkI7O0FBQzNCO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBLHdCQUF3Qjs7QUFDeEI7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLHdCQUF3QjtDQUV4Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7O3VDQUV1Qzs7QUFDdkMsdUJBQXVCOztBQUN2QjtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsVUFBVTtBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBLDhCQUE4Qjs7QUFDOUI7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDLHNCQUFzQjs7QUFDdEI7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sS0FBSztDQUNMLFFBQVE7Q0FDUixPQUFPO0NBQ1Asd0JBQXdCO0NBQ3hCLFNBQVM7Q0FFVCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBRXpCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FFYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBRXpCLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSxlQUFlOztBQUNmO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsS0FBSztDQUNMLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsNEJBQTRCO0NBQzVCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUEsc0JBQXNCOztBQUN0QjtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixLQUFLO0NBQ0wsUUFBUTtDQUNSLE9BQU87Q0FDUCx3QkFBd0I7Q0FDeEIsU0FBUztDQUVULHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQSxhQUFhOztBQUNiO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBRWQsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixVQUFVO0FBQ1g7O0FBRUE7O3VDQUV1Qzs7QUFDdkMsMkJBQTJCOztBQUMzQjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEsdUJBQXVCOztBQUN2QjtDQUNDLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBRWpCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsT0FBTztDQUNQLEtBQUs7Q0FDTCxtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHlEQUF5RDtBQUMxRDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O3VDQUV1Qzs7QUFDdkM7Q0FDQztFQUNDLGNBQWM7Q0FDZjs7Q0FFQSxlQUFlO0NBQ2Y7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQSx1QkFBdUI7Q0FDdkI7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUEsZUFBZTtDQUNmO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7Q0FFQSxxQkFBcUI7Q0FDckI7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUEsa0JBQWtCO0NBQ2xCO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEI7RUFDQyxjQUFjO0NBQ2Y7O0NBRUEscUJBQXFCO0NBQ3JCO0VBQ0MsY0FBYztDQUNmOztDQUVBLG1CQUFtQjtDQUNuQjtFQUNDLFlBQVk7Q0FDYjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCO0VBQ0MsVUFBVTtDQUNYOztDQUVBLHNCQUFzQjtDQUN0QjtFQUNDLGVBQWU7Q0FDaEI7O0NBRUEsd0JBQXdCO0NBQ3hCO0VBQ0MsV0FBVztFQUNYLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsY0FBYztDQUNkLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFFBQVE7Q0FDUixxQkFBcUI7Q0FDckIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0NBR0MsaUNBQWlDO0FBQzFDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1YsV0FBVztDQUNYLHlCQUF5QjtJQUN0Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0NBQ3JCLCtDQUErQztTQUN2Qyx1Q0FBdUM7QUFDaEQ7O0FBRUE7Q0FDQyxPQUF3Qyx1QkFBdUIsQ0FBQztDQUNoRSxLQUF3Qyx5QkFBeUIsQ0FBQztBQUNuRTs7QUFFQTtDQUNDLE9BQXdDLHVCQUF1QixDQUFDO0NBQ2hFLEtBQXdDLHlCQUF5QixDQUFDO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1tb2R1bGUvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogSFRNTCBFZHVjYXRpb24gVGVtcGxhdGVcbkF1dGhvcjogeWFtaW5uY2NvXG5cbkNvbG9yczpcblx0Qm9keSBcdFx0OiAjNzk4Njk2XG5cdEhlYWRlcnMgXHQ6ICMzNzQwNTBcblx0UHJpbWFyeSBcdDogI0ZGNjcwMFxuXHRHcmV5IFx0XHQ6ICNFQkVCRUJcblxuRm9udHM6IExhdG8gJiBNb250c2VycmF0XG5cblRhYmxlIE9GIENvbnRlbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjEgPiBHZW5lcmFsXG4yID4gTG9nb1xuMyA+IE5hdmlnYXRpb25cbjQgPiBIZXJvIEFyZWFcbjUgPiBBYm91dCAmIFdoeSBVcyAoRmVhdHVyZSlcbjYgPiBDb3Vyc2VzXG43ID4gRm9vdGVyXG44ID4gQ29udGFjdCBQYWdlXG45ID4gQmxvZyBQYWdlXG4xMCA+IEJsb2cgUGFnZSBTaWRlYmFyXG4xMSA+IFNpbmdsZSBQb3N0IFBhZ2VcbjEyID4gUmVzcG9uc2l2ZVxuMTMgPiBQcmVsb2FkZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdEdlbmVyYWxcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLS0gdHlwb2dyYXBoeSAtLS0gKi9cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzk4Njk2O1xuXHRvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuaDEsaDIsaDMsaDQsaDUsaDYge1xuXHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogIzM3NDA1MDtcbn1cblxuaDEge1xuXHRmb250LXNpemU6MzhweDtcbn1cblxuaDIge1xuXHRmb250LXNpemU6MzBweDtcbn1cblxuaDMge1xuXHRmb250LXNpemU6MjRweDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6MThweDtcbn1cblxuYSB7XG5cdGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiAjMzc0MDUwO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG5hOmhvdmVyLFxuYTpmb2N1c3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcblx0Y29sb3I6ICMzNzQwNTA7XG5cdG9wYWNpdHk6IDAuOTtcbn1cblxudWwsb2x7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4ud2hpdGUtdGV4dCB7XG5cdGNvbG9yOiAjRkZGO1xufVxuXG5ibG9ja3F1b3RlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDIwcHggMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA2MHB4O1xuXHRib3JkZXItbGVmdDogbm9uZTtcblx0Y29sb3I6ICMzNzQwNTA7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3Jle1xuXHRjb250ZW50OlwiXFxmMTBkXCI7XG5cdGZvbnQtZmFtaWx5OmZvbnRBd2Vzb21lO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHR0b3A6MDtcblx0Y29sb3I6ICNGRjY3MDA7XG5cdHdpZHRoOjQwcHg7XG5cdGhlaWdodDo0MHB4O1xuXHRsaW5lLWhlaWdodDo0MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdGJvcmRlcjoxcHggc29saWQgI0VCRUJFQjtcbn1cblxuXG4vKiAtLS0gU2VjdGlvbiAtLS0gKi9cbi5zZWN0aW9uIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmctdG9wOjgwcHg7XG5cdHBhZGRpbmctYm90dG9tOjgwcHg7XG59XG5cbi5zZWN0aW9uLWhyIHtcblx0bWFyZ2luLXRvcDo4MHB4O1xuXHRtYXJnaW4tYm90dG9tOjgwcHg7XG5cdGJvcmRlci1jb2xvcjogI0VCRUJFQjtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcblx0bWFyZ2luLWJvdHRvbTo0MHB4O1xufVxuXG4vKiAtLS0gQmFja2dyb3VuZCBJbWFnZSAtLS0gKi9cbi5iZy1pbWFnZSB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OjA7XG5cdHRvcDowO1xuXHRib3R0b206MDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTpjb3Zlcjtcbn1cblxuLmJnLWltYWdlLmJnLXBhcmFsbGF4IHtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xufVxuXG4uYmctaW1hZ2Uub3ZlcmxheTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0dG9wOjA7XG5cdGJvdHRvbTowO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzNzQwNTApLCB0bygjNzk4Njk2KSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNzQwNTAgMCUsICM3OTg2OTYgMTAwJSk7XG5cdG9wYWNpdHk6IDAuNztcbn1cblxuLyogLS0tIEJ1dHRvbnMgLS0tICovXG4ubWFpbi1idXR0b24ge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6MTBweCAzMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzAwO1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0Y29sb3I6ICNGRkY7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLm1haW4tYnV0dG9uOmhvdmVyICwgLm1haW4tYnV0dG9uOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjRkY2NzAwO1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG4ubWFpbi1idXR0b24uaWNvbi1idXR0b246aG92ZXIgLCAubWFpbi1idXR0b24uaWNvbi1idXR0b246Zm9jdXMge1xuXHRwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufVxuXG4ubWFpbi1idXR0b24uaWNvbi1idXR0b246YWZ0ZXIge1xuXHRjb250ZW50OlwiXFxmMTc4XCI7XG5cdGZvbnQtZmFtaWx5OkZvbnRBd2Vzb21lO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0d2lkdGg6IDMwcHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBhbGw7XG5cdHRyYW5zaXRpb246MC4ycyBhbGw7XG59XG5cbi5tYWluLWJ1dHRvbi5pY29uLWJ1dHRvbjpob3ZlcjphZnRlciAsIC5tYWluLWJ1dHRvbi5pY29uLWJ1dHRvbjpmb2N1czphZnRlciB7XG5cdG9wYWNpdHk6MTtcbn1cblxuLyogLS0gIElucHV0ICAtLSAqL1xuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSwgaW5wdXRbdHlwZT1cInVybFwiXSwgaW5wdXRbdHlwZT1cInRlbFwiXSwgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRib3JkZXItcmFkaXVzOjRweDtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBib3JkZXItY29sb3I7XG5cdHRyYW5zaXRpb246MC4ycyBib3JkZXItY29sb3I7XG59XG5cbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cywgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJ0ZWxcIl06Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcblx0Ym9yZGVyLWNvbG9yOiNGRjY3MDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdExvZ29cblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2YmFyLWJyYW5kIC5sb2dvIHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2YmFyLWJyYW5kIC5sb2dvID4gaW1nIHtcblx0bWF4LWhlaWdodDozMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdC5uYXZiYXItYnJhbmQge1xuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XG5cdH1cbn0gXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdE5hdmlnYXRpb25cblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4jaGVhZGVyIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0dG9wOjA7XG5cdHotaW5kZXg6OTk7XG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4yNSk7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGRjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOjAuMnMgYWxsO1xufVxuXG4jaGVhZGVyLnRyYW5zcGFyZW50LW5hdiB7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2hlYWRlci50cmFuc3BhcmVudC1uYXYgLm1haW4tbWVudSBsaSBhIHtcblx0Y29sb3I6I0ZGRjtcbn1cblxuLm1haW4tbWVudSBsaSBhIHtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBhbGw7XG5cdHRyYW5zaXRpb246MC4ycyBhbGw7XG59XG5cbi5tYWluLW1lbnUgbGkgYTpob3ZlciAsIC5tYWluLW1lbnUgbGkgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluLW1lbnUgbGkgYTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0ZGlzcGxheTpibG9jaztcblx0aGVpZ2h0OjJweDtcblx0YmFja2dyb3VuZC1jb2xvcjojRkY2NzAwO1xuXHR3aWR0aDoxMDAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHRvcGFjaXR5OjA7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyOmFmdGVyICwgLm1haW4tbWVudSBsaSBhOmZvY3VzOmFmdGVyIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0b3BhY2l0eToxO1xufVxuXG4vKiAtLSBNb2JpbGUgTmF2IC0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdCNuYXYge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDAlO1xuXHRcdG1heC13aWR0aDoyNTBweDtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHQgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdHBhZGRpbmctdG9wOiA4MHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBhbGwgY3ViaWMtYmV6aWVyKC43NywwLC4xOCwxKTtcblx0XHR0cmFuc2l0aW9uOiAwLjRzIGFsbCBjdWJpYy1iZXppZXIoLjc3LDAsLjE4LDEpO1xuXHRcdHotaW5kZXg6OTtcblx0fVxuXG5cdCNoZWFkZXIubmF2LWNvbGxhcHNlICNuYXZ7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG5cdFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuXHRcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcblx0fVxuXHRcblx0Lm1haW4tbWVudSB7XG5cdFx0bWFyZ2luOjA7XG5cdH1cblx0XG5cdC5tYWluLW1lbnUgbGkgYSB7XG5cdFx0Y29sb3I6ICMzNzQwNTAgIWltcG9ydGFudDtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0bWFyZ2luLWxlZnQ6IDQwcHg7XG5cdH1cbn1cblxuLyogLS0gTW9iaWxlIFRvZ2dsZSBCdG4gLS0gKi9cbi5uYXZiYXItdG9nZ2xlIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHJpZ2h0OjA7XG5cdHBhZGRpbmc6IDA7XG5cdGhlaWdodDogNDBweDtcblx0d2lkdGg6IDQwcHg7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0ei1pbmRleDo5OTtcbn1cblxuLm5hdmJhci10b2dnbGUgPiBzcGFuIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZDtcblx0dHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kO1xufVxuXG4ubmF2YmFyLXRvZ2dsZSA+IHNwYW46YmVmb3JlLCAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIC13ZWJraXQtdHJhbnNmb3JtO1xuXHR0cmFuc2l0aW9uOiAwLjJzIC13ZWJraXQtdHJhbnNmb3JtO1xuXHR0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybTtcblx0dHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0sIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XG59XG5cbi5uYXZiYXItdG9nZ2xlID4gc3BhbiAsIC5uYXZiYXItdG9nZ2xlID4gc3BhbjpiZWZvcmUgLCAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuXHRoZWlnaHQ6IDJweDtcblx0d2lkdGg6IDI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzM3NDA1MDtcbn1cblxuLm5hdmJhci10b2dnbGUgPiBzcGFuOmJlZm9yZSB7XG5cdHRvcDogLTEwcHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlID4gc3BhbjphZnRlciB7XG5cdHRvcDogMTBweDtcbn1cblxuI2hlYWRlci5uYXYtY29sbGFwc2UgLm5hdmJhci10b2dnbGUgPiBzcGFuIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNoZWFkZXIubmF2LWNvbGxhcHNlIC5uYXZiYXItdG9nZ2xlID4gc3BhbjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSByb3RhdGUoNDVkZWcpO1xufVxuXG4jaGVhZGVyLm5hdi1jb2xsYXBzZSAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRIZXJvIEFyZWFcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVyby1hcmVhIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmctdG9wOiA4MHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuI2hvbWUuaGVyby1hcmVhIHtcblx0aGVpZ2h0OmNhbGMoMTAwdmggLSA4MHB4KTtcblx0cGFkZGluZy10b3A6IDBweDtcblx0cGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmhvbWUtd3JhcHBlciB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6NTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xuXHQgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OjA7XG59XG5cbi8qIC0tIEJyZWFkY3J1bWIgLS0gKi9cbi5oZXJvLWFyZWEtdHJlZSBsaSB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDo2MDA7XG5cdGZvbnQtc2l6ZToxNHB4O1xuXHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5oZXJvLWFyZWEtdHJlZSBsaSA+IGEge1xuXHRjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5oZXJvLWFyZWEtdHJlZSBsaSArIGxpOmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiL1wiO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjogMHB4IDVweDtcblx0Y29sb3I6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4yNSk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdEFib3V0ICYgV2h5IFVzIChGZWF0dXJlKVxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIC0tIEZlYXR1cmUgLS0gKi9cbi5mZWF0dXJlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5mZWF0dXJlICsgLmZlYXR1cmUgIHtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4uZmVhdHVyZSAuZmVhdHVyZS1pY29uIHtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0dG9wOjA7XG5cdHdpZHRoOjgwcHg7XG5cdGhlaWdodDo4MHB4O1xuXHRsaW5lLWhlaWdodDo4MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRmb250LXNpemU6MzBweDtcblx0Ym9yZGVyOjFweCBzb2xpZCAjRUJFQkVCO1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG4uZmVhdHVyZS1jb250ZW50IHtcblx0cGFkZGluZy1sZWZ0OjEwMHB4O1xufVxuXG4vKiAtLSBBYm91dCBJbWcgLS0gKi9cbi5hYm91dC1pbWcge1xuXHRtYXJnaW4tdG9wOjQwcHg7XG59XG5cbi5hYm91dC1pbWcgPiBpbWcge1xuXHR3aWR0aDoxMDAlO1xufVxuXG4vKiAtLSBBYm91dCBWaWRlbyAtLSAqL1xuLmFib3V0LXZpZGVvIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWJvdXQtdmlkZW8gPiBpbWcge1xuXHR3aWR0aDoxMDAlO1xufVxuXG4uYWJvdXQtdmlkZW8gLnBsYXktaWNvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcblx0d2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcblx0bGluZS1oZWlnaHQ6IDgwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRmb250LXNpemU6IDI0LjAyN3B4O1xuXHR6LWluZGV4OjEwO1xuXHQtd2Via2l0LWFuaW1hdGlvbiA6IDJzIHBsYXktYW5pbWF0aW9uIGluZmluaXRlO1xuXHQgICAgICAgIGFuaW1hdGlvbiA6IDJzIHBsYXktYW5pbWF0aW9uIGluZmluaXRlO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBjb2xvcjtcblx0dHJhbnNpdGlvbjowLjJzIGNvbG9yO1xufVxuXG4uYWJvdXQtdmlkZW86aG92ZXIgLnBsYXktaWNvbiB7XG5cdGNvbG9yOiNGRjY3MDA7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwbGF5LWFuaW1hdGlvbiB7XG5cdGZyb20ge1xuXHRcdC13ZWJraXQtYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDBweCAjRkZGO1xuXHRcdCAgICAgICAgYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDBweCAjRkZGO1xuXHR9XG5cdHRvIHtcblx0XHQtd2Via2l0LWJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAxMHB4IHRyYW5zcGFyZW50O1xuXHRcdCAgICAgICAgYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDEwcHggdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBwbGF5LWFuaW1hdGlvbiB7XG5cdGZyb20ge1xuXHRcdC13ZWJraXQtYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDBweCAjRkZGO1xuXHRcdCAgICAgICAgYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDBweCAjRkZGO1xuXHR9XG5cdHRvIHtcblx0XHQtd2Via2l0LWJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAxMHB4IHRyYW5zcGFyZW50O1xuXHRcdCAgICAgICAgYm94LXNoYWRvdyA6IDBweCAwcHggMHB4IDEwcHggdHJhbnNwYXJlbnQ7XG5cdH1cbn1cblxuLmFib3V0LXZpZGVvOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHRyaWdodDowO1xuXHRib3R0b206MDtcblx0dG9wOjA7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGNjcwMDtcblx0b3BhY2l0eTowLjc7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdENvdXJzZXNcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY291cnNlIHtcblx0bWFyZ2luLXRvcDoyMHB4O1xuXHRtYXJnaW4tYm90dG9tOjIwcHg7XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1pbWcge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdG1hcmdpbi1ib3R0b206MjBweDtcblx0Ym9yZGVyLXJhZGl1czo0cHg7XG5cdG92ZXJmbG93OmhpZGRlbjtcbn1cblxuLmNvdXJzZSAuY291cnNlLWltZyA+IGltZyB7XG5cdHdpZHRoOjEwMCU7XG59XG5cbi5jb3Vyc2UtaW1nOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHRyaWdodDowO1xuXHRib3R0b206MDtcblx0dG9wOjA7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGNjcwMDtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcbn1cblxuLmNvdXJzZSAuY291cnNlLWltZzpob3ZlcjphZnRlciB7XG5cdG9wYWNpdHk6MC43O1xufVxuXG4uY291cnNlIC5jb3Vyc2UtaW1nIC5jb3Vyc2UtbGluay1pY29uIHtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6NTAlO1xuXHR0b3A6NTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCBjYWxjKC01MCUgLSAxNXB4KSk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIGNhbGMoLTUwJSAtIDE1cHgpKTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgY2FsYygtNTAlIC0gMTVweCkpO1xuXHR3aWR0aDo0MHB4O1xuXHRoZWlnaHQ6NDBweDtcblx0bGluZS1oZWlnaHQ6NDBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlcjoycHggc29saWQgI2ZmZjtcblx0Y29sb3I6I2ZmZjtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdG9wYWNpdHk6MDtcblx0ei1pbmRleDoxMDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOjAuMnMgYWxsO1xufVxuXG4uY291cnNlIC5jb3Vyc2UtaW1nOmhvdmVyIC5jb3Vyc2UtbGluay1pY29uIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcblx0b3BhY2l0eToxO1xufVxuXG4uY291cnNlIC5jb3Vyc2UtdGl0bGUge1xuXHRkaXNwbGF5OmJsb2NrO1xuXHRoZWlnaHQ6NDJweDtcbn1cblxuLmNvdXJzZSAuY291cnNlLWRldGFpbHMge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1kZXRhaWxzIC5jb3Vyc2UtcHJpY2Uge1xuXHRmbG9hdDogcmlnaHQ7XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1kZXRhaWxzIC5jb3Vyc2UtcHJpY2UuY291cnNlLWZyZWUge1xuXHRjb2xvcjogZ3JlZW47XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1kZXRhaWxzIC5jb3Vyc2UtcHJpY2UuY291cnNlLXByZW1pdW0ge1xuXHRjb2xvcjogI0ZGNjcwMDtcbn1cblxuI2NvdXJzZXMgLmNlbnRlci1idG4ge1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRGb290ZXJcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNib3R0b20tZm9vdGVyIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZy10b3A6IDIwcHg7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuXG4vKiAtLSBGb290ZXIgTG9nbyAtLSAqL1xuLmZvb3Rlci1sb2dvICAubG9nbyB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvb3Rlci1sb2dvICAubG9nbyA+IGltZyB7XG5cdG1heC1oZWlnaHQ6MzBweDtcbn1cblxuLyogLS0gRm9vdGVyIE5hdiAtLSAqL1xuLmZvb3Rlci1uYXYge1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0cGFkZGluZzogMjBweCAwcHg7XG59XG5cbi5mb290ZXItbmF2IGxpIHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OjE1cHhcbn1cblxuLmZvb3Rlci1uYXYgbGkgYSB7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgY29sb3I7XG5cdHRyYW5zaXRpb246MC4ycyBjb2xvcjtcbn1cblxuLmZvb3Rlci1uYXYgbGkgYTpob3ZlciAsIC5mb290ZXItbmF2IGxpIGE6Zm9jdXMge1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG4uZm9vdGVyLW5hdiBsaSBhOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHRoZWlnaHQ6MnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdHdpZHRoOjEwMCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG5cdG9wYWNpdHk6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOjAuMnMgYWxsO1xufVxuXG4uZm9vdGVyLW5hdiBsaSBhOmhvdmVyOmFmdGVyICwgLmZvb3Rlci1uYXYgbGkgYTpmb2N1czphZnRlciB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cdG9wYWNpdHk6MTtcbn1cblxuLyogLS0gRm9vdGVyIGNvcHlyaWdodCAtLSAqL1xuLmZvb3Rlci1jb3B5cmlnaHQge1xuXHRsaW5lLWhlaWdodDo0MHB4O1xufVxuXG4vKiAtLSBGb290ZXIgU29jaWFsIC0tICovXG4uZm9vdGVyLXNvY2lhbCB7XG5cdHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5mb290ZXItc29jaWFsIGxpIHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1sZWZ0OjEwcHg7XG59XG5cbi5mb290ZXItc29jaWFsIGxpIGEge1xuXHRkaXNwbGF5OmJsb2NrO1xuXHR3aWR0aDo0MHB4O1xuXHRoZWlnaHQ6NDBweDtcblx0bGluZS1oZWlnaHQ6NDBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRjb2xvcjojRkZGO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIG9wYWNpdHk7XG5cdHRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLmZhY2Vib29rIHtcblx0YmFja2dyb3VuZC1jb2xvcjojM2I1OTk4O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLnR3aXR0ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1NWFjZWU7XG59XG5cbi5mb290ZXItc29jaWFsIGxpIGEuZ29vZ2xlLXBsdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzk7XG59XG5cbi5mb290ZXItc29jaWFsIGxpIGEuaW5zdGFncmFtIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZTk1OTUwO1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLnlvdXR1YmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZjAwMDA7XG59XG5cbi5mb290ZXItc29jaWFsIGxpIGEubGlua2VkaW4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdENvbnRhY3QgUGFnZVxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIC0tIENvbnRhY3QgRm9ybSAtLSAqL1xuLmNvbnRhY3QtZm9ybTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0ZGlzcGxheTpibG9jaztcblx0Y2xlYXI6Ym90aDtcbn1cblxuLmNvbnRhY3QtZm9ybSAuaW5wdXQge1xuXHRtYXJnaW4tYm90dG9tOjIwcHg7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWEuaW5wdXQge1xuXHRoZWlnaHQ6MjAwcHg7XG59XG5cbi8qIC0tIENvbnRhY3QgSW5mb3JtYXRpb24gLS0gKi9cbi5jb250YWN0LWRldGFpbHMgbGkgIHtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xufVxuXG4uY29udGFjdC1kZXRhaWxzIGxpIGkge1xuXHRjb2xvcjogI0ZGNjcwMDtcblx0bWFyZ2luLXJpZ2h0OiAxNXB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIC0tIENvbnRhY3QgTWFwIC0tICovXG4jY29udGFjdC1tYXAge1xuXHRoZWlnaHQ6MjYwcHg7XG5cdGJvcmRlci1yYWRpdXM6NHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRCbG9nIFBhZ2VcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLSBTaW5nbGUgQmxvZyAtLSAqL1xuLnNpbmdsZS1ibG9nIHtcblx0bWFyZ2luLWJvdHRvbTo0MHB4O1xufVxuXG4uc2luZ2xlLWJsb2cgLmJsb2ctaW1nID4gYSB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHRib3JkZXItcmFkaXVzOjRweDtcblx0b3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4uc2luZ2xlLWJsb2cgLmJsb2ctaW1nIGltZyB7XG5cdHdpZHRoOjEwMCU7XG59XG5cbi5zaW5nbGUtYmxvZyAuYmxvZy1pbWcgPiBhOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHR0b3A6MDtcblx0Ym90dG9tOjA7XG5cdHJpZ2h0OjA7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGNjcwMDtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLWltZyA+IGE6aG92ZXI6YWZ0ZXIge1xuXHRvcGFjaXR5OjAuNztcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLW1ldGEge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5zaW5nbGUtYmxvZyAuYmxvZy1tZXRhIC5ibG9nLW1ldGEtYXV0aG9yID4gYSB7XG5cdGNvbG9yOiAjRkY2NzAwO1xufVxuXG4uc2luZ2xlLWJsb2cgLmJsb2ctbWV0YSAuYmxvZy1tZXRhLWNvbW1lbnRzIHtcblx0bWFyZ2luLWxlZnQ6MTBweDtcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLW1ldGEgLmJsb2ctbWV0YS1jb21tZW50cyA+IGEge1xuXHRjb2xvcjogIzc5ODY5Njtcbn1cblxuLyogLS0gUGFnaW5hdGlvbiAtLSAqL1xuLnBvc3QtcGFnaW5hdGlvbiB7XG5cdG1hcmdpbi10b3A6NDBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpIHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpICsgbGkge1xuXHRtYXJnaW4tbGVmdDoxMHB4O1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaSB7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpIGEge1xuXHRkaXNwbGF5OmJsb2NrO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgY29sb3I7XG5cdHRyYW5zaXRpb246IDAuMnMgY29sb3I7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpOmhvdmVyICAsIC5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpLmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRjY3MDA7XG5cdGNvbG9yOiNGRkY7XG59XG5cbi5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIGxpOmhvdmVyIGEge1xuXHRjb2xvcjojRkZGO1xufSBcblxuLnBhZ2luYXRpb24tYmFjayAsIC5wYWdpbmF0aW9uLW5leHQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0aGVpZ2h0OjQwcHg7XG5cdHBhZGRpbmc6MHB4IDMwcHg7XG5cdGxpbmUtaGVpZ2h0OjQwcHg7XG59XG5cbi5wYWdpbmF0aW9uLW5leHQ6aG92ZXIgICwgLnBhZ2luYXRpb24tYmFjazpob3ZlciAge1xuXHRjb2xvcjojRkZGO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG59XG5cbi5wYWdpbmF0aW9uLW5leHQ6YWZ0ZXIge1xuXHRjb250ZW50OlwiXFxmMTc4XCI7XG5cdGZvbnQtZmFtaWx5OkZvbnRBd2Vzb21lO1xuXHRtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4ucGFnaW5hdGlvbi1iYWNrOmJlZm9yZSB7XG5cdGNvbnRlbnQ6XCJcXGYxNzdcIjtcblx0Zm9udC1mYW1pbHk6Rm9udEF3ZXNvbWU7XG5cdG1hcmdpbi1yaWdodDoxNXB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRCbG9nIFBhZ2UgU2lkZWJhclxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi53aWRnZXQgKyAud2lkZ2V0IHtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4vKi0tIFNlYXJjaCAtLSovXG4ud2lkZ2V0LnNlYXJjaC13aWRnZXQge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZVxufVxuXG4ud2lkZ2V0LnNlYXJjaC13aWRnZXQgLmlucHV0IHtcblx0cGFkZGluZy1yaWdodDo2MHB4O1xufVxuXG4ud2lkZ2V0LnNlYXJjaC13aWRnZXQgYnV0dG9uIHtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHJpZ2h0OjA7XG5cdHRvcDowO1xuXHRoZWlnaHQ6NDBweDtcblx0d2lkdGg6NDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcblx0Ym9yZGVyOm5vbmU7XG59XG5cbi53aWRnZXQuc2VhcmNoLXdpZGdldCAuaW5wdXQ6Zm9jdXMgKyBidXR0b24ge1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG4vKi0tIENhdGVnb3J5IC0tKi9cbi5jYXRlZ29yeS13aWRnZXQgLmNhdGVnb3J5IHtcblx0ZGlzcGxheTpibG9jaztcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5jYXRlZ29yeS13aWRnZXQgLmNhdGVnb3J5ICsgLmNhdGVnb3J5IHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XG59XG5cbi5jYXRlZ29yeS13aWRnZXQgLmNhdGVnb3J5OmJlZm9yZSB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDRweDtcblx0aGVpZ2h0OiA0cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGNjcwMDtcblx0bWFyZ2luLXJpZ2h0OjEwcHg7XG59XG5cbi5jYXRlZ29yeS13aWRnZXQgLmNhdGVnb3J5IHNwYW4ge1xuXHRmb250LXNpemU6MTRweDtcblx0bWFyZ2luLWxlZnQ6MTBweDtcblx0Y29sb3I6Izc5ODY5Njtcbn1cblxuLyotLSBTaWRlYmFyIFBvc3RzIC0tKi9cbi5zaW5nbGUtcG9zdDphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0ZGlzcGxheTpibG9jaztcblx0Y2xlYXI6Ym90aDtcbn1cblxuLnNpbmdsZS1wb3N0ICsgLnNpbmdsZS1wb3N0IHtcblx0bWFyZ2luLXRvcDoyMHB4O1xufVxuXG4uc2luZ2xlLXBvc3QgLnNpbmdsZS1wb3N0LWltZyB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHR3aWR0aDogODBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdG1hcmdpbi10b3A6IDNweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2luZ2xlLXBvc3QgLnNpbmdsZS1wb3N0LWltZyBpbWcge1xuXHR3aWR0aDoxMDAlO1xufVxuXG4uc2luZ2xlLXBvc3QtaW1nOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHR0b3A6MDtcblx0Ym90dG9tOjA7XG5cdHJpZ2h0OjA7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGNjcwMDtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcbn1cblxuLnNpbmdsZS1wb3N0LWltZzpob3ZlcjphZnRlciB7XG5cdG9wYWNpdHk6MC43O1xufVxuXG4vKi0tIFRhZ3MgLS0qL1xuLnRhZ3Mtd2lkZ2V0IC50YWcge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bWFyZ2luLXJpZ2h0OiAwcHg7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0cGFkZGluZzogNXB4IDE1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG5cdGNvbG9yOiAjNzk4Njk2O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnRhZ3Mtd2lkZ2V0IC50YWc6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdGJvcmRlci1jb2xvcjojRkY2NzAwO1xuXHRjb2xvcjojRkZGO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRTaW5nbGUgUG9zdCBQYWdlXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogLS0tIEJsb2cgUG9zdCBNZXRhIC0tLSAqL1xuLmJsb2ctcG9zdC1tZXRhIHtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4uYmxvZy1wb3N0LW1ldGEgbGkge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLmJsb2ctcG9zdC1tZXRhIGxpICsgbGkge1xuXHRtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4uYmxvZy1wb3N0LW1ldGEgbGkgLCAuYmxvZy1wb3N0LW1ldGEgbGkgPiBhIHtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmJsb2ctcG9zdC1tZXRhIC5ibG9nLW1ldGEtYXV0aG9yID4gYSB7XG5cdGNvbG9yOiAjRkY2NzAwO1xufVxuXG4vKiAtLS0gQmxvZyBTaGFyZSAtLS0gKi9cbi5ibG9nLXNoYXJlIHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYmxvZy1zaGFyZSA+IGg0IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowO1xufVxuXG4uYmxvZy1zaGFyZSBhICB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDoxMHB4O1xuXHR3aWR0aDo0MHB4O1xuXHRoZWlnaHQ6NDBweDtcblx0bGluZS1oZWlnaHQ6NDBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGNvbG9yOiNGRkY7XG5cdGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIG9wYWNpdHk7XG5cdHRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xufVxuXG4uYmxvZy1zaGFyZSBhLmZhY2Vib29rIHtcblx0YmFja2dyb3VuZC1jb2xvcjojM2I1OTk4O1xufVxuXG4uYmxvZy1zaGFyZSBhLnR3aXR0ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiM1NWFjZWU7XG59XG5cbi5ibG9nLXNoYXJlIGEuZ29vZ2xlLXBsdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzk7XG59XG5cbi8qIC0tLSBCbG9nIENvbW1lbnRzIC0tLSAqL1xuLmJsb2ctY29tbWVudHMge1xuXHRtYXJnaW4tdG9wOjQwcHg7XG59XG5cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYSB7XG5cdG1hcmdpbi10b3A6MjBweDtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xufVxuXG4uYmxvZy1jb21tZW50cyAubWVkaWEgLm1lZGlhIHtcblx0bWFyZ2luLWxlZnQ6MjBweDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhIC5tZWRpYTpudGgtbGFzdC1jaGlsZCgxKSB7XG5cdG1hcmdpbi1ib3R0b206MHB4O1xufVxuXG4uYmxvZy1jb21tZW50cyAubWVkaWEgLm1lZGlhLWJvZHkge1xuXHRwYWRkaW5nOjIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcblx0Ym9yZGVyLXJhZGl1czowcHggNHB4IDRweDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhIC5tZWRpYS1sZWZ0OmJlZm9yZSB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHJpZ2h0OjA7XG5cdHRvcDowO1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItd2lkdGg6IDBweCAxNXB4IDE1cHg7XG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI0VCRUJFQiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhLWxlZnQge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0cGFkZGluZy1yaWdodDoyMHB4O1xufVxuXG4uYmxvZy1jb21tZW50cyAubWVkaWEtbGVmdCBpbWcge1xuXHR3aWR0aDo4MHB4O1xuXHRoZWlnaHQ6ODBweDtcblx0YmFja2dyb3VuZC1jb2xvcjojRUJFQkVCO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhIC5kYXRlLXJlcGx5IHtcblx0Zm9udC1zaXplOjEycHg7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Y29sb3I6IzM3NDA1MDtcbn1cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYSAuZGF0ZS1yZXBseSAucmVwbHkge1xuXHRtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG4vKiAtLS0gQmxvZyBSZXBseSBGb3JtIC0tLSAqL1xuLmJsb2ctcmVwbHktZm9ybSB7XG5cdG1hcmdpbi10b3A6NDBweDtcbn1cblxuLmJsb2ctcmVwbHktZm9ybSAuaW5wdXQge1xuXHRtYXJnaW4tYm90dG9tOjIwcHg7XG59XG5cbi5ibG9nLXJlcGx5LWZvcm0gLmlucHV0Lm5hbWUtaW5wdXQgLCAuYmxvZy1yZXBseS1mb3JtIC5pbnB1dC5lbWFpbC1pbnB1dCB7XG5cdHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXHRmbG9hdDpsZWZ0O1xufVxuXG4uYmxvZy1yZXBseS1mb3JtIC5pbnB1dC5lbWFpbC1pbnB1dCB7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYmxvZy1yZXBseS1mb3JtIHRleHRhcmVhIHtcblx0aGVpZ2h0OjkwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFJlc3BvbnNpdmVcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cdC5zZWN0aW9uLWhlYWRlciBoMiB7XG5cdFx0Zm9udC1zaXplOjI0cHg7XG5cdH1cblxuXHQvKi0tIFdoeSB1cyAtLSovXG5cdCN3aHktdXMgLmZlYXR1cmUge1xuXHRcdG1hcmdpbi10b3A6NDBweDtcblx0fVxuXHRcblx0LmFib3V0LXZpZGVvIHtcblx0XHRtYXJnaW4tdG9wOjQwcHg7XG5cdH1cblx0XG5cdC8qLS0gQ2FsbCB0byBhY3Rpb24gLS0qL1xuXHQjY3RhIHtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0fVxuXHRcblx0LyotLSBGb290ZXIgLS0qL1xuXHQuZm9vdGVyLWxvZ28ge1xuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHR9XG5cdFxuXHQuZm9vdGVyLW5hdiB7XG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdH1cblx0LmZvb3Rlci1uYXYgbGkge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdH1cblx0XG5cdC5mb290ZXItc29jaWFsIHtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0fVxuXHQuZm9vdGVyLXNvY2lhbCBsaSB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0fVxuXHRcblx0LmZvb3Rlci1jb3B5cmlnaHQge1xuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdGxpbmUtaGVpZ2h0OmluaGVyaXQ7XG5cdFx0bWFyZ2luLXRvcDoyMHB4O1xuXHR9XG5cdFxuXHQvKi0tIENvbnRhY3QgcGFnZSAtLSovXG5cdC5jb250YWN0LWZvcm0gIHtcblx0XHRtYXJnaW4tYm90dG9tOjQwcHg7XG5cdH1cblxuXHQuY29udGFjdC1mb3JtIGJ1dHRvbiB7XG5cdFx0ZmxvYXQ6bm9uZSAhaW1wb3J0YW50O1xuXHR9XG5cdFxuXHQvKi0tIEJsb2cgcGFnZSAtLSovXG5cdCNtYWluIHtcblx0XHRtYXJnaW4tYm90dG9tOjgwcHg7XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuXHQvKi0tIEhlcm8gYXJlYSAtLSovXG5cdC5oZXJvLWFyZWEgaDEge1xuXHRcdGZvbnQtc2l6ZTozMHB4O1xuXHR9XG5cblx0LyogLS0gQnJlYWRjcnVtYiAtLSAqL1xuXHQuaGVyby1hcmVhLXRyZWUgbGkge1xuXHRcdGZvbnQtc2l6ZToxMnB4O1xuXHR9XG5cblx0LyotLSBQYWdpbmF0aW9uIC0tKi9cblx0LnBvc3QtcGFnaW5hdGlvbiAucGFnZXMge1xuXHRcdGRpc3BsYXk6bm9uZTtcblx0fVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdC8qLS0gQ291cnNlcyAtLSovXG5cdCNjb3Vyc2VzLXdyYXBwZXIgW2NsYXNzKj0nY29sLXhzJ10ge1xuXHRcdHdpZHRoOjEwMCU7XG5cdH1cblx0XG5cdC8qLS0gQmxvZyBDb21tZW50cyAtLSovXG5cdC5ibG9nLWNvbW1lbnRzIC5tZWRpYSAubWVkaWEge1xuXHRcdG1hcmdpbi1sZWZ0OjBweDtcblx0fVxuXHRcblx0LyotLSBCbG9nIFJlcGx5IEZvcm0gLS0qL1xuXHQuYmxvZy1yZXBseS1mb3JtIC5pbnB1dC5uYW1lLWlucHV0ICwgLmJsb2ctcmVwbHktZm9ybSAuaW5wdXQuZW1haWwtaW5wdXQge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGZsb2F0Om5vbmU7XG5cdH1cblx0XG5cdC5ibG9nLXJlcGx5LWZvcm0gLmlucHV0LmVtYWlsLWlucHV0IHtcblx0XHRtYXJnaW4tbGVmdDogMHB4O1xuXHR9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFByZWxvYWRlclxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi8gXG4jcHJlbG9hZGVyIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0dG9wOjA7XG5cdGJvdHRvbTowO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XG5cdHotaW5kZXg6OTk5OTtcbn1cblxuI3ByZWxvYWRlciAucHJlbG9hZGVyIHtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6NTAlO1xuXHR0b3A6NTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcblx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xufVxuXG4jcHJlbG9hZGVyIC5wcmVsb2FkZXI6YWZ0ZXIge1xuXHRjb250ZW50OlwiXCI7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHdpZHRoOjQwcHg7XG5cdGhlaWdodDo0MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRkY2NzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblx0LXdlYmtpdC1hbmltYXRpb246IDFzIHByZWxvYWRlciBsaW5lYXIgaW5maW5pdGU7XG5cdCAgICAgICAgYW5pbWF0aW9uOiAxcyBwcmVsb2FkZXIgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZGVyIHtcblx0ZnJvbSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cblx0dG8geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7fVxufVxuXG5Aa2V5ZnJhbWVzIHByZWxvYWRlciB7XG5cdGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn0iXX0= */");

/***/ }),

/***/ "./src/app/landing-module/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/landing-module/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Welcome to QuizO';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/landing-module/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/landing-module/landing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/landing-module/landing.module.ts ***!
  \**************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/landing-module/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/landing-module/app.component.ts");





let LandingModule = class LandingModule {
};
LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], LandingModule);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");



















const MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: true,
    HrURLprefix: 'http://15.206.152.181:8094/hr',
    employeeURLprefix: 'http://15.206.152.181:8093/quiz/test',
    adminURLprefix: 'http://15.206.152.181:8092/admin',
    authURLprefix: 'http://15.206.152.181:8091/auth'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    HrURLprefix: 'http://15.206.152.181:8080/hrService',
    employeeURLprefix: 'http://15.206.152.181:8080/employeeService',
    adminURLprefix: 'http://15.206.152.181:8080/adminService',
    authURLprefix: 'http://15.206.152.181:8081/auth',
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cgi/Documents/Stackroute/adaptive-quiz-engine/aqeFrontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map