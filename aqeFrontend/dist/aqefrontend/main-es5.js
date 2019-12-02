(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n    </app-header>\n\n<h3>Want to create Test on new topic?</h3>\n<br>\n<!-- <input #myInput type=\"text\" placeholder=\"enter the topic\">topic\n<br>\n<button type=\"submit\" (click)=\"onClick(myInput.value)\">createTest</button>\n{{responseMessage}} -->\n\n<div class=\"row justify-content-center\">\n    <div class=\"col-12 col-md-10 col-lg-8\">\n        <form class=\"card card-sm\">\n            <div class=\"card-body row no-gutters align-items-center\">\n                <div class=\"col-auto\">\n                    <i class=\"fas fa-search h4 text-body\"></i>\n                </div>\n                <!--end of col-->\n                <div class=\"col\">\n                    <input #myInput class=\"form-control form-control-lg form-control-borderless\" type=\"search\"\n                        placeholder=\"Enter topic\">\n                </div>\n                <!--end of col-->\n                <div class=\"col-auto\">\n                    <button class=\"btn btn-lg btn-success\" type=\"submit\" (click)=\"onClick(myInput.value)\">Create</button>\n                    {{responseMessage}}\n                </div>\n                <!--end of col-->\n            </div>\n        </form>\n    </div>\n    <!--end of col-->\n</div>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/create-modal/create-modal.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/create-modal/create-modal.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>\n\n    User details for login form:</h1>\n<form [formGroup]=\"data.form\">\n    <p>\n        <label>User Name:</label>\n        <input type=\"text\" formControlName=\"username\">\n    </p>\n    <p>\n        <label>Password:</label>\n        <input type=\"text\" formControlName=\"password\">\n    </p>\n    <p>\n        <label>Role:</label>\n        <input type=\"text\" formControlName=\"role\">\n    </p>\n    <p>\n        <label>Email:</label>\n        <input type=\"text\" formControlName=\"email\">\n    </p>\n\n    <li>\n        <button mat-raised-button [mat-dialog-close]=data.form.value [disabled]=\"!data.form.valid\">Submit</button>\n    </li>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Quiz on given topic is generated</p><br><br>\n{{message}}\n<button (click)='onClick()'>homePage</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/createuser/createuser.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/createuser/createuser.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n\n<h3>\n    Enter Employee details\n</h3>\n\n\n<section class=\"sample-app-content\">\n    <h1>User details form:</h1>\n    <form [formGroup]=\"detailsForm\">\n        <p>\n            <label>First Name:</label>\n            <input type=\"text\" formControlName=\"name\">\n        </p>\n        <p>\n            <label>Phone:</label>\n            <input type=\"text\" formControlName=\"phone\">\n        </p>\n        <p>\n            <label>Email:</label>\n            <input type=\"text\" formControlName=\"email\">\n        </p>\n        <p>\n            <label>Role:</label>\n            <input type=\"text\" formControlName=\"role\">\n        </p>\n        <p>\n            <label>Designation:</label>\n            <input type=\"text\" formControlName=\"designation\">\n        </p>\n\n        <li>\n            <button mat-raised-button (click)=\"openDialog(detailsForm.value)\" [disabled]=\"!detailsForm.valid\">Enter login details</button>\n        </li>\n    </form>\n</section>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/dashboard/dashboard.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/dashboard/dashboard.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n    <div class=\"jumbotron mt-5\">\n        <h1 class=\"display-4\">ADMIN DASHBOARD</h1>\n        <p class=\"lead\">This is the main dashboard screen for creating topics, users and resolving requests .</p>\n        <hr class=\"my-4\">\n        <p>below is a overview of all the activities</p>\n        <button mat-raised-button color=\"accent\" routerLink='/admin/createTopic'>Create A Topic</button>\n        <button mat-raised-button color=\"accent\" class=\"ml-5\" routerLink='/admin/createUser'>Create A User</button>\n    </div>\n\n    <div class=text-center>\n        <h3>\n            Created Topics:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"topicDataSource\" style=\"width: 100%;\">\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"createdAt\">\n                        <th mat-header-cell *matHeaderCellDef> Creation Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | slice:0:10}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"link\">\n                        <th mat-header-cell *matHeaderCellDef> Link </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.link}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"keywords\">\n                        <th mat-header-cell *matHeaderCellDef> Keywords </th>\n                        <td mat-cell *matCellDef=\"let element\">{{ element.keywords[0] }} , {{ element.keywords[1] }} ...</td>\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"topicDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: topicDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n    <!-- ------------------- -->\n    <div class=\"mt-5 mb-5\"></div>\n    <div class=\"text-center\">\n        <h3>\n            Available Users:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"employeeDataSource\" style=\"width: 100%;\">\n\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"employeeDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: employeeDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n    <div class=\"mt-5 mb-5\"></div>\n    <div class=\"text-center\">\n        <h3>\n            All Requests:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"requestDataSource\" style=\"width: 100%;\">\n\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef> ID </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.id | slice:20:24}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"message\">\n                        <th mat-header-cell *matHeaderCellDef> Message </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef> Status </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\"> <button mat-button>C</button> </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"requestDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: requestDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n</div>\n<div class=\"m-5\"></div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- -------------------------------------------------------------------------------------------------- -->\n\n<router-outlet></router-outlet>\n\n<!-- -------------------------------------------------------------------------------------------------- -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n    \n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"back \">\n        <mat-card-header>\n            <span class=\"text-center\">\n                    <mat-card-title >Login to Quizo</mat-card-title>\n            </span>\n\n        </mat-card-header>\n        <span></span>\n        <mat-card-content fxLayout=\"column\" style=\"margin-top:2em;\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Username</mat-label>\n                <input matInput placeholder=\"Username\" name=\"username\" [(ngModel)]=\"username\">\n                <!-- <mat-hint>Enter your email from the mail</mat-hint> -->\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input matInput type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n                <!-- <mat-hint>Enter Password</mat-hint> -->\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button mat-raised-button color=\"primary\" (click)=checkLogin()>Login</button>\n                <mat-progress-spinner mode=\"indeterminate\" diameter=20 style=\"display: inline-flex; margin-left: 20px;\" *ngIf=\"isLoading\"></mat-progress-spinner>\n                <button mat-raised-button color=\"primary\" (click)=forgotPassword()>Forgot Password</button>\n            </div>\n\n        </mat-card-actions>\n    </mat-card>\n\n</div>\n<div class=\"text-center m-5\">\n    <p>Not a registered HR for your company? <a href=\"\" routerLink='/auth/register'>register here</a></p>\n</div>\n<!-- <app-footer></app-footer> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>\n  logout works!\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"back\">\n        <mat-card-header>\n\n            <mat-card-title>Register a new HR</mat-card-title>\n        </mat-card-header>\n        <mat-card-content fxLayout=\"column\">\n\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Name\" required [(ngModel)]=\"username\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"email\" matInput placeholder=\"Email\" required [(ngModel)]=\"email\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"password\" matInput placeholder=\"Password\" required [(ngModel)]=password>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Mobile Number\" required [(ngModel)]=\"phone\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input type=\"company\" matInput placeholder=\"Company\" required [(ngModel)]=\"company\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-raised-button color=\"primary\" (click)=register(username,password,email)>Register</button>\n            <mat-progress-spinner mode=\"indeterminate\" diameter=20 style=\"display: inline-flex; margin-left: 20px;\" *ngIf=\"isLoading\"></mat-progress-spinner>\n        </mat-card-actions>\n    </mat-card>\n</div>\n\n<div class=\"text-center m-5\">\n    <p>Already a registered HR for your company? <a href=\"\" routerLink='/auth/login'>login here</a></p>\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/reset/reset.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/reset/reset.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\n    <mat-card class=\"back \">\n        <mat-card-header>\n            <span class=\"text-center\">\n                        <mat-card-title >Reset Password</mat-card-title>\n                </span>\n\n        </mat-card-header>\n        <span></span>\n        <mat-card-content fxLayout=\"column\" style=\"margin-top:2em;\">\n            <mat-form-field appearance=\"outline\">\n                <mat-label>Email</mat-label>\n                <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\">\n            </mat-form-field>\n        </mat-card-content>\n        <mat-card-actions>\n            <div class=\"text-center\">\n                <button mat-raised-button color=\"primary\" (click)=sendMail(email)>Send Mail</button>\n            </div>\n        </mat-card-actions>\n    </mat-card>\n\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/user-details/user-details.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/user-details/user-details.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n<button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n<div class=\"icon-det\">\n    <button mat-icon-button><mat-icon>notifications</mat-icon></button>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n          <mat-icon>more_horiz</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n            <mat-icon>build</mat-icon>\n            <span>Edit Profile</span>\n          </button>\n        <button mat-menu-item>\n            <mat-icon>settings</mat-icon>\n            <span>Logout</span>\n          </button>\n    </mat-menu>\n</div>\n\n<mat-sidenav-container class=\"example-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" opened class=\"example-sidenav\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n        <mat-nav-list>\n            <img src=\"assets/img/imgUser.png\" alt=\"UserImg\">\n            <a mat-list-item routerLink=\".\">Dash Board</a>\n            <a mat-list-item routerLink=\".\">Analytics</a>\n            <a mat-list-item routerLink=\".\">Tests</a>\n            <a mat-list-item routerLink=\".\">Settings</a>\n            <a mat-list-item routerLink=\".\">Help</a>\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <mat-toolbar class=\"title\">User Details:</mat-toolbar>\n        <!-- <div class=\"forms-bhai\">\n        <label>\n         Id:<input type=\"text\" formControl=\"id\">\n        </label>\n\n        <label>\n        Name:<input type=\"text\" formControl=\"name\">\n      </label>\n\n      <label>\n        Role:<input type=\"text\" formControl=\"role\">\n      </label>\n      \n      <label>\n        Contact:<input type=\"text\" formControl=\"phone\">\n      </label>\n      \n      <label>\n        E-mail:<input type=\"text\" formControl=\"email\">\n      </label>\n      \n      <label>\n        Designation:<input type=\"text\" formControl=\"designation\">\n      </label>\n      </div> -->\n\n        <!-- <form *ngIf=\"user | async; else \" [formGroup]=\"userdet\" (ngSubmit)=\"submit()\"> -->\n        <!-- <form [formGroup]=\"userdet\">\n        <label for=\"id\">Id</label>\n        <input id=\"id\" type=\"text\" formControlName=\"id\" />\n         \n        <label for=\"name\">Name</label>\n        <input id=\"name\" type=\"text\" formControlName=\"name\" />\n\n        <label for=\"role\">Role</label>\n        <input id=\"role\" type=\"text\" formControlName=\"role\" />\n\n        <label for=\"phone\">Phone</label>\n        <input id=\"phone\" type=\"number\" formControlName=\"phone\" />\n      \n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"text\" formControlName=\"email\" />\n\n        <label for=\"designation\">Designation</label>\n        <input id=\"designation\" type=\"text\" formControlName=\"designation\" />\n       \n      </form> -->\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"jumbotron mt-5\">\n        <h1 class=\"display-4\">EMPLOYEE DASHBOARD</h1>\n        <p class=\"lead\">This is the main dashboard screen for creating tests, users and requests .</p>\n        <hr class=\"my-4\">\n        <p>below is a overview of all the activities</p>\n    </div>\n    <div class=text-center>\n        <h3>\n            Active Tests:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"activeTestsDataSource\" style=\"width: 100%;\">\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.topicName}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"createdAt\">\n                        <th mat-header-cell *matHeaderCellDef> Creation Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | slice:0:10}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"link\">\n                        <th mat-header-cell *matHeaderCellDef> Link </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.link}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> Actions </th>\n                        <td mat-cell *matCellDef=\"let element\"> <button (click)='giveTest(element)'>Give test</button></td>\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"testsDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: testsDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n    <!-- ------------------- -->\n    <div class=\"mt-5 mb-5\"></div>\n    <div class=\"text-center\">\n        <h3>\n            Completed Tests:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"completedTestsDataSource\" style=\"width: 100%;\">\n\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.topicName}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"createdAt\">\n                        <th mat-header-cell *matHeaderCellDef> Creation Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | slice:0:10}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"link\">\n                        <th mat-header-cell *matHeaderCellDef> Link </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.link}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"actions\">\n                        <th mat-header-cell *matHeaderCellDef> actions </th>\n                        <td mat-cell *matCellDef=\"let element\"> <button routerLink='/hr/create'> See result </button></td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"testsDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: testsDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n</div>\n<div class=\"m-5\"></div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- \n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n            <mat-card class=\"back\">\n            <mat-card-header>\n              <mat-card-title>Emp</mat-card-title>\n            </mat-card-header>\n            <mat-card-content fxLayout=\"column\">\n              <mat-form-field class=\"text\">\n                <input #id type=\"text\"  placeholder=\"EmployeeId\" name=\"id\" [(ngModel)]=\"id\">\n              </mat-form-field>\n              <mat-form-field class=\"text\">\n                <input  #name type=\"text\" matInput placeholder=\"EmployeeName\" name=\"name\" [(ngModel)]=\"name\">\n              </mat-form-field>\n              <mat-form-field class=\"text\">\n                          <input #email  type=\"text\"matInput placeholder=\"Email address\" name=\"email\" [(ngModel)]=\"email\">\n                      </mat-form-field>\n            </mat-card-content>\n            <mat-card-actions align=\"end\">\n              <button mat-raised-button color=\"primary\" (click)=\"saveDetailsAndGoToInstructions(id.Value, name.Value, email.Value)\" id=\"submit\">Submit</button>\n            </mat-card-actions>\n            </mat-card>\n            </div> \n              \n\n -->\n\n\n  <h3>\n      Enter your details\n  </h3>\n\n<form class=\"empDetailsForm\" #employeeDetailsForm=\"ngForm\">\n    <div class=\"form-group form\" >\n    <label  for=\"exampleInputEmail1\"> EmployeeId</label>\n    <input class=\"x\" #id class=\"form-control\" id=\"exampleInputEmail1\" type=\"text\" >\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputEmail2\"> EmployeeName</label>\n        <input class=\"x\"  #name class=\"form-control\" id=\"exampleInputEmail2\" type=\"text\"><br>\n  </div>\n  <div class=\"form-group\">\n      <label  for=\"exampleInputEmail3\"> Email</label>\n      <input #emailid class=\"form-control\" id=\"exampleInputEmail3\" type=\"text\"><br>\n      <button class=\"x\" class=\"btn btn-primary btn-block-sm\"  (click)=\"saveDetailsAndGoToInstructions(id.value, name.value, Emailid.value)\" id=\"submit\">Submit</button>\n  \n    </div>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <h2 style=\"text-align: center\">Welcome to QuizO</h2>\n\n</div>\n<div class=\"hero-image\">\n</div>\n<div class=\"text\">\n    <h2 style=\"color:midnightblue\">Knowledge is power!<br><br> Want to test yours?<br><br> Login and take a quiz with us.\n    </h2>\n</div>\n<div class=\"btn\">\n    <button class=\"login\" (click)=\"ngOnInit()\"><a routerLink=\"/employee/employee-details\" >login</a> > </button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"errorContainer\">\n    <div class=\"errorMessage\" layout-align=\"center center\">\n        <h1>Access Denied for This Page</h1>\n    </div>\n    <button mat-flat-button routerLink=\"/login\" color=\"accent\">Go to Login</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  <mat-card class=\"feedback\" >\n      <mat-card-header class=\"feedHead\" >\n        <mat-card-title>Send us your feedback!</mat-card-title>\n        <mat-card-subtitle>Do you have a suggestion? Let us know in the field below.</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"feedContent\" style=\"padding-left:1rem;\">\n        <div>\n        <p>How was your experience?</p>\n        <mat-radio-group>\n        <mat-radio-button value=\"good\"> Good </mat-radio-button>\n        <p></p>\n        <mat-radio-button value=\"bad\"> Bad </mat-radio-button>\n        </mat-radio-group>\n        </div>\n        <form class=\"feed\">\n            <mat-form-field class=\"feedText\">\n                <textarea matInput placeholder=\"Describe your experience here...\"></textarea>\n              </mat-form-field>\n        </form>\n      </mat-card-content>\n    \n     <mat-card-footer>\n      <div class=\"example-button-row\" style=\"align-self: center;\">\n        <button mat-raised-button color=\"primary\" routerLink='/employee/dash'>Submit</button>\n      </div>\n     </mat-card-footer>\n  </mat-card>\n      ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container navbar2\">\n    <div class=\"row\">\n        <div class=\"col-6  testName\">\n            <h3>MOVIE-TEST</h3>\n        </div>\n        <div class=\"col-6 timerContainer\">\n            <div class=\"timer\">\n                <h3>{{roundedMins}}:{{roundedSecs}}</h3>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<div class=\"card questionContainer\">\n    <div class=\"card-body\">\n        <h4>Q{{count+1}})</h4>\n        <div class=\"question\">\n            <h5 class=\"card-title\">{{question?.question}}</h5>\n            <div class=\"card-text\">\n                <div class=\"custom-control\" (click)=\"saveAnswer(1)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"1\" [(ngModel)]=\"options\">\n                        {{choices[0]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(2)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"2\" [(ngModel)]=\"options\">\n                        {{choices[1]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(3)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"3\" [(ngModel)]=\"options\">\n                        {{choices[2]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(4)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"4\" [(ngModel)]=\"options\">\n                        {{choices[3]}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n\n    <div class=\"row\">\n        <div class=\"col-sm-4 button\">\n            <button class=\"btn btn-primary\" type=\"submit\" (click)=\"prevQuestion()\" *ngIf=\"count!=0\">previous</button>\n        </div>\n        <div class=\"col-sm-4 button\">\n            <button class=\"btn btn-primary\" type=\"submit\" ng-click=\"options=null\" (click)=\"nextQuestion()\" *ngIf=\"count!=questionList.length-1\">next</button>\n        </div>\n        <div class=\"col-sm-4 button\">\n            <button class=\"btn btn-danger\" type=\"submit\" (click)=\"submitTest()\">submit test</button>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n<div class=mi>\n    <div>\n        <h3>HR has set a test for you.</h3>\n\n        <h3>Please take the test (java) before the due date 12/12/2019</h3>\n    </div>\n    <button mat-flat-button routerLink=\"/employee/test-instructions\" color=\"accent\">take-test</button>\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/result-page/result-page.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/result-page/result-page.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card questionContainer\">\n    <div class=\"card-body\">\n        <h4>Q{{count+1}})</h4>\n        <div class=\"question\">\n            <h5 class=\"card-title\">{{question?.question}}</h5>\n            <div class=\"card-text\">\n                <div class=\"custom-control\" (click)=\"saveAnswer(1)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"1\" [(ngModel)]=\"options\">\n                        {{choices[0]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(2)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"2\" [(ngModel)]=\"options\">\n                        {{choices[1]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(3)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"3\" [(ngModel)]=\"options\">\n                        {{choices[2]}}\n                    </label>\n                </div>\n                <div class=\"custom-control\" (click)=\"saveAnswer(4)\">\n                    <label>\n                        <input type=\"radio\" name=\"options\" value=\"4\" [(ngModel)]=\"options\">\n                        {{choices[3]}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spacing-top\">\n    <div class=\"text-center\">\n\n        <h1>Instructions</h1>\n    </div>\n</div>\n\n\n<div class=\"container\">\n    <div>\n\n        <mat-list>\n            <mat-list-item> -This paper consists of Questions related to some programing language or some framework or some library </mat-list-item>\n            <mat-list-item> -The clock will be set by server. The countdown timer in the top of the screen will display the remaining time available for you to complete the question. When the timer reaches zero, the next question will be displayed on the screen. </mat-list-item>\n            <mat-list-item> -You can't go back to a marked question after clicking next.</mat-list-item>\n            <mat-list-item> -Once you skip a question you will not be able to go back to that question.</mat-list-item>\n            <mat-list-item> -Your score will be displayed in the dashboard </mat-list-item>\n            <mat-divider></mat-divider>\n        </mat-list>\n    </div>\n\n    <div class=\"row m-4\">\n        <div class=\"col-md-4\">.</div>\n        <div class=\"col-md-4 m-auto text-center\">\n            <button class=\"btn btn-warning \" (click)='onStartTest()'><h3>Start Test</h3></button>\n        </div>\n        <div class=\"col-md-4\">.\n        </div>\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"my-form\" #userregistrationform=\"ngForm\">\n    <mat-card class=\"example-box\" *ngFor=\"let question of questionList\">\n        <h3>\n            {{ question.question }}\n        </h3>\n        <br/>\n        <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\">\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let choice of question.choices\" [value]=\"choice\" [(ngModel)]=\"question.response\" name=\"response\" ngDefaultControl>\n                {{choice}}\n            </mat-radio-button>\n        </mat-radio-group>\n    </mat-card>\n    <div class=\"container\">\n        <a routerLink='/employee/thankyou'>\n            <button mat-raised-button type=\"submit\" color=\"primary\" (click)=\"saveResponse(questionList)\" >Submit</button></a>\n    </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"thankyouContainer\">\n    <div class=\"errorMessage\" layout-align=\"center center\">\n        <h1>Your Quiz has been completed. Thanks!</h1>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"footer\">\n    <p></p>\n</mat-toolbar>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"cancel()\"> <h4><i class=\"material-icons v-center \">keyboard_backspace</i>\n        <span class=\"spacing-l-20\">QUIZO</span></h4>\n    </button>\n    <span class=\"spacer\"></span>\n    <span class=\"mr-2\">\n        {{loggedInUser}}\n    </span>\n\n\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item *ngIf=\"loggedInUser\" (click)=\"logout()\">\n              <mat-icon>exit_to_app</mat-icon>\n              <span>Logout</span>\n            </button>\n        <button mat-menu-item>\n              <mat-icon>account_circle</mat-icon>\n              <span (click)=\"gotoAccount()\">View Account</span>\n            </button>\n        <button mat-menu-item>\n              <mat-icon>notification_important</mat-icon>\n              <span>Notifications</span>\n            </button>\n    </mat-menu>\n</mat-toolbar>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n    <div class=\"spacing-top\"></div>\n    <div class=\"text-center\">\n        <h1>Confirmation Screen</h1>\n        <mat-progress-spinner class=\"text-center\" mode=\"indeterminate\" *ngIf=\"isLoading\">\n        </mat-progress-spinner>\n    </div>\n    <div class=\"text-center mt-5\">\n        <h3>SELECTED TEST : {{test.name}}</h3>\n    </div>\n    <div class=\"text-center mt-5\">\n        <h3>SELECTED Employees : {{employees.length}}</h3>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"card col-md-3\" *ngFor=\"let employee of employees\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{employee.name}}</h5>\n                <ul>\n                    <li>Email: {{employee.email}}</li>\n                    <li>Phone: {{employee.phone}}</li>\n                </ul>\n                <a href=\"#\" class=\"btn btn-primary\">Unselect</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"spacing-top\"></div>\n    <div class=\"text-center mb-5\">\n        <button mat-raised-button color=\"accent\" (click)=\"confirmMapping()\">CONFIRM!</button>\n        <button mat-raised-button color=\"accent\" (click)=\"restart()\">RESTART!</button>\n    </div>\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/create-modal/create-modal.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/create-modal/create-modal.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>\n\n    User details for login form:</h1>\n<form [formGroup]=\"data.form\">\n    <p>\n        <label>User Name:</label>\n        <input type=\"text\" formControlName=\"username\">\n    </p>\n    <p>\n        <label>Password:</label>\n        <input type=\"text\" formControlName=\"password\">\n    </p>\n    <p>\n        <label>Email:</label>\n        <input type=\"text\" formControlName=\"email\">\n    </p>\n\n    <li>\n        <button mat-raised-button [mat-dialog-close]=data.form.value [disabled]=\"!data.form.valid\">Submit</button>\n    </li>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/createuser/createuser.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/createuser/createuser.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n\n<h3>\n    Enter Employee details\n</h3>\n\n\n<section class=\"sample-app-content\">\n    <h1>User details form:</h1>\n    <form [formGroup]=\"detailsForm\">\n        <p>\n            <label>First Name:</label>\n            <input type=\"text\" formControlName=\"name\">\n        </p>\n        <p>\n            <label>Phone:</label>\n            <input type=\"text\" formControlName=\"phone\">\n        </p>\n        <p>\n            <label>Email:</label>\n            <input type=\"text\" formControlName=\"email\">\n        </p>\n        <p>\n            <label>Designation:</label>\n            <input type=\"text\" formControlName=\"designation\">\n        </p>\n\n        <li>\n            <button mat-raised-button (click)=\"openDialog(detailsForm.value)\" [disabled]=\"!detailsForm.valid\">Enter login details</button>\n        </li>\n    </form>\n</section>\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/dashboard/dashboard.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/dashboard/dashboard.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"container\">\n    <div class=\"jumbotron mt-5\">\n        <h1 class=\"display-4\">HR DASHBOARD</h1>\n        <p class=\"lead\">This is the main dashboard screen for creating tests, users and requests .</p>\n        <hr class=\"my-4\">\n        <p>below is a overview of all the activities</p>\n        <button mat-raised-button color=\"accent\" routerLink='/hr/create'>Create A Test</button>\n        <button mat-raised-button color=\"accent\" class=\"ml-5\" routerLink='/hr/create-user'>Create A User</button>\n        <button mat-raised-button color=\"accent\" class=\"ml-5\" (click)='openDialog()'>Create A Request</button>\n        <button mat-raised-button color=\"accent\" class=\"ml-5\">View ongoing tests</button>\n    </div>\n    <div class=text-center>\n        <h3>\n            Created Topics:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"topicDataSource\" style=\"width: 100%;\">\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"createdAt\">\n                        <th mat-header-cell *matHeaderCellDef> Creation Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | slice:0:10}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"link\">\n                        <th mat-header-cell *matHeaderCellDef> Link </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.link}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"keywords\">\n                        <th mat-header-cell *matHeaderCellDef> Keywords </th>\n                        <td mat-cell *matCellDef=\"let element\">{{ element.keywords[0] }} , {{ element.keywords[1] }} ...</td>\n                    </ng-container>\n\n\n                    <tr mat-header-row *matHeaderRowDef=\"topicDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: topicDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n    <!-- ------------------- -->\n    <div class=\"mt-5 mb-5\"></div>\n    <div class=\"text-center\">\n        <h3>\n            Available Users:\n        </h3>\n    </div>\n    <div class=\"row \">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-10\">\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"employeeDataSource\" style=\"width: 100%;\">\n\n\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef> Phone </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\n                    </ng-container>\n\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"employeeDisplayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: employeeDisplayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons style=\"width: 100%;\"></mat-paginator>\n            </div>\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n</div>\n<div class=\"m-5\"></div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n<div class=\"mat-display-1\">Select Employees\n\n    <mat-progress-spinner class=\"text-center\" mode=\"indeterminate\" *ngIf=\"isLoading\">\n    </mat-progress-spinner>\n</div>\n\n<div class=\"container\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n        <mat-list role='list'>\n            <mat-list-item formArrayName=\"employees\" *ngFor=\"let employee of form.controls.employees.controls; let i = index\" class=\"emp\">\n                <mat-checkbox formControlName=\"{{i}}\">\n\n                        <div class=\"card border-dark\" >\n                                <div class=\"card-body text-dark\">\n                                  <p class=\"card-text\">Name: {{employees[i].name}}, Email:{{employees[i].email}}, Phone: {{employees[i].phone}}, Designation: {{employees[i].designation}}</p>\n                                  \n                                </div>\n                              </div>\n                    <!-- <span> Name: {{employees[i].name}} Email:{{employees[i].email}} Phone: {{employees[i].phone}} Designation: {{employees[i].designation}} </span> -->\n                </mat-checkbox>\n\n            </mat-list-item>\n\n        </mat-list>\n        <button mat-raised-button color=\"primary\">Submit</button>\n    </form>\n\n    <div class=\"spacing-bottom\"></div>\n    <hr>\n\n    <div class=\"spacing-bottom\"></div>\n    <div class=\"spacing-bottom\"></div>\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/request-modal/request-modal.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/request-modal/request-modal.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>\n    Type in the Request you have for the admin\n</h1>\n<form [formGroup]=\"data.requestForm\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput maxlength=\"256\" placeholder=\"Message\" formControlName=\"message\">\n        <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n        <mat-hint align=\"end\">{{data.requestForm.value.message.length}} / 256</mat-hint>\n    </mat-form-field>\n\n    <li>\n        <button mat-raised-button>Submit</button>\n    </li>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/thankyou-hr/thankyou-hr.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/thankyou-hr/thankyou-hr.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hrContainer\">\n    <div class=\"errorMessage\" layout-align=\"center center\">\n        <h1>Thankyou for submitting the selected Test and employee List</h1>\n        <h3>Emails will be sent to the recipients with the auto generated Login details</h3>\n    </div>\n    <button mat-flat-button routerLink=\"/hr\" color=\"accent\">Go to Home</button>\n    <span class=\"m-5\"></span>\n    <button mat-flat-button routerLink=\"/hr/dashboard\" color=\"accent\">Go to Dashboard</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header>\n</app-header>\n<div class=\"spacing-top\">\n    <div class=\"container\">\n        <h1 class=\"text-center\">Please select a test</h1>\n        <div class=\"spacing-top\"></div>\n        <mat-progress-spinner class=\"text-center\" mode=\"indeterminate\" *ngIf=\"isLoading\">\n        </mat-progress-spinner>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-10\">\n                <div class=\"card col-md-3 text-center\" *ngFor=\"let topic of topics\">\n                    <div class=\"card-body\">\n                        <h2 class=\"card-title text-uppercase big-text\">{{topic.name}}</h2>\n                        <h4>\n                            <p class=\"card-text\">\n                                Creation date: <span>{{topic.createdAt | slice:0:10}}</span>\n                            </p>\n                        </h4>\n                        <p class=\"card-text\">Link: <a href=\"{{topic.link}}\">{{topic.link}}</a></p>\n                        <div>\n                            <button mat-raised-button color=\"primary\" class=\"pull-left\" (click)=\"selectedTopic(topic)\">SELECT</button>\n                            <button mat-raised-button color=\"primary\" class=\"pull-right\" class=\"ml-5\" (click)=\" goToEmployeeSelection() \">DETAILS</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n    </div>\n</div>\n\n<div class=\"spacing-top\"></div>\n<hr>\n<div class=\"spacing-bottom\"></div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"font-size: 15px;\">\n    <header id=\"header\" class=\"header\">\n        <div class=\"navback\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <!-- Logo -->\n                    <div class=\"navbar-brand\">\n                        <a class=\"logo\" href=\"#\">\n                            <img src=\"../assets/img/logo-3.png\" alt=\"logo\">\n                        </a>\n                    </div>\n                    <!-- /Logo -->\n                    <!-- Mobile toggle -->\n                    <button class=\"navbar-toggle\">\n                        <span></span>\n                    </button>\n                    <!-- /Mobile toggle -->\n                </div>\n                <!-- Navigation -->\n                <div>\n                    <nav id=\"\" class=\"\">\n                        <ul class=\"main-menu nav  navbar-right\">\n                            <li><a href=\"#home\">Home</a></li>\n                            <li><a href=\"#about\">About</a></li>\n                            <li><a href=\"#contact\">Contact</a></li>\n                            <li><a routerLink=\"/auth/login\">Login</a></li>\n                            <li><a routerLink=\"/auth/register\">Register</a></li>\n                        </ul>\n                    </nav>\n                </div>\n                <!-- /Navigation -->\n            </div>\n        </div>\n    </header>\n    <!-- Home -->\n    <div id=\"home\" class=\"hero-area\">\n\n        <!-- Backgound Image -->\n        <div class=\"bg-image bg-parallax overlay\" style=\"background-image:url(../../assets/img/home-background.jpg)\">\n        </div>\n        <!-- /Backgound Image -->\n\n        <div class=\"home-wrapper\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\" style=\"text-align: center\">\n                        <h3 class=\"white-text\">We provide a platform for online quizes</h3>\n                        <h3 class=\"lead white-text\">Knowledge is power. Want to test yours? Login\n                            and take a quiz with us.</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /Home -->\n    <!-- About -->\n    <div id=\"about\" class=\"section\">\n\n        <!-- container -->\n        <div class=\"container\">\n\n            <!-- row -->\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"section-header\">\n                        <h3>Welcome to Quizo</h3>\n                        <p>Online Quiz Platform.</p>\n                    </div>\n\n                    <!-- feature -->\n                    <div class=\"feature\">\n                        <i class=\"feature-icon fa fa-flask\"></i>\n                        <div class=\"feature-content\">\n                            <h4>Online Quizes </h4>\n                            <p>Create or take online quizes.</p>\n                        </div>\n                    </div>\n                    <!-- /feature -->\n\n                    <!-- feature -->\n                    <div class=\"feature\">\n                        <i class=\"feature-icon fa fa-users\"></i>\n                        <div class=\"feature-content\">\n                            <h4>Autogeneration</h4>\n                            <p>Got no time to set a quiz?\n                                <br>Quizo will do this job for you.<br> All you need to do is feed your quiz topic.\n                            </p>\n                        </div>\n                    </div>\n                    <!-- /feature -->\n\n                    <!-- feature -->\n                    <div class=\"feature\">\n                        <i class=\"feature-icon fa fa-comments\"></i>\n                        <div class=\"feature-content\">\n                            <h4>Community</h4>\n                            <p>Our users are HRs of various companies, who can create quizes,and employees who can take\n                                these quizes. </p>\n                        </div>\n                    </div>\n                    <!-- /feature -->\n\n                </div>\n\n                <div class=\"col-md-6\">\n                    <div class=\"about-img\">\n                        <img src=\"../../assets/img/about.png\" alt=\"\">\n                    </div>\n                </div>\n\n            </div>\n            <!-- row -->\n\n        </div>\n        <div style=\"margin-bottom: -100px\"></div>\n    </div>\n    <!-- /About -->\n    <!-- Why us -->\n\n    <!-- /row -->\n\n    <hr class=\"section-hr\">\n\n    <!-- row -->\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3>Quiz generation made easy by quizo</h3>\n                <p>Don't waste your time thinking what questions to ask in a quiz, and give quizo the\n                    opportunity to serve you. </p>\n                <p>You are just a few steps away from creating your quiz.<br> Register with us as an HR, Type your quiz\n                    topic and we'll create the set of questions for you.<br>Yes, it's that easy here.</p>\n            </div>\n\n            <div class=\"col-md-5 col-md-offset-1\">\n                <a class=\"about-video\" href=\"#\">\n                    <img src=\"../../assets/img/about-video.jpg\" alt=\"\">\n                    <i class=\"play-icon fa fa-play\"></i>\n                </a>\n            </div>\n\n\n            <!-- /row -->\n\n\n            <!-- /Why us -->\n\n            <section class=\"py-5\" id=\"team\">\n                <div class=\"container\">\n                    <div class=\"wow fadeIn\">\n                        <h3 class=\"h1 pt-5 pb-3 text-center\">Our team members</h3>\n                        <p>\n                            The strength of the team is each individual member. The strength of each member is the team.\n                        </p>\n                    </div>\n                    <div class=\"row mb-lg-4 center-on-small-only\">\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-1.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Renu</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Graduated from NITK,Surathkal.\n                                </p><a href=\"https://instagram.com\" target=\"_blank\"><i class=\"fa fa-instagram\"></i><span\n                                        class=\"ml-1\">@choudhary_renee</span></a>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-2.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Shikhar</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@hannahcruz</span></a>\n                            </div>\n                        </div>\n\n                    </div>\n                    <hr>\n                    <div class=\"row center-on-small-only\">\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-3.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Saumen</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@markhall</span></a>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-4.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Pranjal</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@vincentharris</span></a>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"row center-on-small-only\">\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-5.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Pankaj</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@markhall</span></a>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-6.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Aayush</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@vincentharris</span></a>\n                            </div>\n                        </div>\n\n                    </div>\n                    <hr>\n                    <div class=\"row center-on-small-only\">\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInLeft\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-3.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Mark Hall</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@markhall</span></a>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6 col-md-12 mb-r wow fadeInRight\" data-wow-delay=\".3s\">\n                            <div class=\"col-md-6 float-left\"><img class=\"img-fluid rounded z-depth-1 mb-3\"\n                                    src=\"../assets/img/emp-4.jpg\" alt=\"team member\" /></div>\n                            <div class=\"col-md-6 float-right\">\n                                <div class=\"h4\">Vincent Harris</div>\n                                <h6 class=\"font-bold blue-grey-text mb-4\">Software Developer</h6>\n                                <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos\n                                    id officiis hic tenetur.\n                                </p><a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter\"></i><span\n                                        class=\"ml-1\">@vincentharris</span></a>\n                            </div>\n                        </div>\n\n                    </div>\n                    <hr>\n                </div>\n            </section>\n\n\n            <div style=\"margin-bottom: -90px\"></div>\n            <!-- Contact -->\n            <div id=\"contact\" class=\"section\">\n\n                <!-- container -->\n                <div class=\"container\">\n\n                    <!-- row -->\n                    <div class=\"row\">\n\n                        <!-- contact form -->\n                        <div class=\"col-md-6\">\n                            <div class=\"contact-form\">\n                                <h4>Send A Message</h4>\n                                <form>\n                                    <input class=\"input\" type=\"text\" name=\"name\" placeholder=\"Name\" style=\"border: 1px solid #909090\">\n                                    <input class=\"input\" type=\"email\" name=\"email\" placeholder=\"Email\" style=\"border: 1px solid #909090\">\n                                    <input class=\"input\" type=\"text\" name=\"subject\" placeholder=\"Subject\" style=\"border: 1px solid #909090\">\n                                    <textarea class=\"input\" name=\"message\" placeholder=\"Enter your Message\" style=\"border: 1px solid #909090\"></textarea>\n                                    <button class=\"main-button icon-button pull-right\">Send Message</button>\n                                </form>\n                            </div>\n                        </div>\n                        <!-- /contact form -->\n\n                        <!-- contact information -->\n                        <div class=\"col-md-5 col-md-offset-1\">\n                            <h4>Contact Information</h4>\n                            <ul class=\"contact-details\">\n                                <li><i class=\"fa fa-envelope\"></i>contact@quizo.com</li>\n                                <li><i class=\"fa fa-phone\"></i>122-547-223-45</li>\n                                <li><i class=\"fa fa-map-marker\"></i>NIIT Kormangala</li>\n                                <li>\n                                    <div class=\"mapouter\">\n                                        <div class=\"gmap_canvas\"><iframe width=\"250\" height=\"250\" id=\"gmap_canvas\"\n                                                src=\"https://maps.google.com/maps?q=stackroute&t=&z=11&ie=UTF8&iwloc=&output=embed\"\n                                                frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\n                                                marginwidth=\"0\"></iframe><a href=\"https://www.embedgooglemap.org\">google\n                                                map two place embed</a></div>\n                                        <style>\n                                            .mapouter {\n                                                position: relative;\n                                                text-align: right;\n                                                height: 200px;\n                                                width: 200px;\n                                            }\n\n                                            .gmap_canvas {\n                                                overflow: hidden;\n                                                background: none !important;\n                                                height: 200px;\n                                                width: 200px;\n                                            }\n                                        </style>\n                                    </div>\n                                </li>\n                            </ul>\n\n                        </div>\n                        <!-- contact information -->\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div style=\"margin-bottom: -90px\"></div>\n        <footer>\n            <div class=\"container\">\n                <div id=\"bottom-footer\" class=\"row\">\n                    <div class=\"col-md-4 col-md-push-8\">\n                        <ul class=\"footer-social\">\n                            <li><a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                            <li><a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube\"></i></a></li>\n                            <li><a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-8 col-md-pull-4\">\n                        <div class=\"footer-copyright\">\n                            <span>&copy; Copyright 2019. All Rights Reserved.<i class=\"fa fa-heart-o\"\n                                    aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\">Quizo</a></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n\n\t<title>Error 404</title>\n\n\t<!-- Google font -->\n\t<link href=\"https://fonts.googleapis.com/css?family=Montserrat:500\" rel=\"stylesheet\">\n\t<link href=\"https://fonts.googleapis.com/css?family=Titillium+Web:700,900\" rel=\"stylesheet\">\n\n\t<!-- Custom stlylesheet -->\n\t<!-- <link type=\"text/css\" rel=\"stylesheet\" href=\"page-not-found.component.css\" /> -->\n\n\n</head>\n\n<body>\n\n\t<div id=\"notfound\">\n\t\t<div class=\"notfound\">\n\t\t\t<div class=\"notfound-404\">\n\t\t\t\t<h1>404</h1>\n\t\t\t</div>\n\t\t\t<h2>Oops! This Page Could Not Be Found</h2>\n\t\t\t<p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>\n\t\t\t<a href=\"\" routerLink=\"/\">Go To Homepage</a>\n\t\t</div>\n\t</div>\n\n</body>\n\n</html>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin-module/admin.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/admin-module/admin.module.ts ***!
          \**********************************************/
        /*! exports provided: AdminModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function () { return AdminModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/admin-module/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/admin-module/app.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin-module/admin/admin.component.ts");
            /* harmony import */ var _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./created-page/created-page.component */ "./src/app/admin-module/created-page/created-page.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin-module/dashboard/dashboard.component.ts");
            /* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-modal/create-modal.component */ "./src/app/admin-module/create-modal/create-modal.component.ts");
            /* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/admin-module/createuser/createuser.component.ts");
            var AdminModule = /** @class */ (function () {
                function AdminModule() {
                }
                return AdminModule;
            }());
            AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                        _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_6__["CreatedPageComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                        _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_12__["CreateuserComponent"],
                        _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_11__["CreateModalComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                    ],
                    providers: [
                        _service_admin_service_service__WEBPACK_IMPORTED_MODULE_8__["AdminServiceService"]
                    ],
                    entryComponents: [_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_11__["CreateModalComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AdminModule);
            /***/ 
        }),
        /***/ "./src/app/admin-module/admin/admin.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/admin-module/admin/admin.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/admin/admin.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/admin-module/admin/admin.component.ts ***!
          \*******************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(adminService, router) {
                    this.adminService = adminService;
                    this.router = router;
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                AdminComponent.prototype.onClick = function (topic) {
                    var _this = this;
                    this.topic = topic;
                    this.adminService.createTest(this.topic).subscribe(function (data) {
                        _this.responseMessage = data.message;
                        console.log(_this.responseMessage);
                        _this.goToCreatedPage();
                    });
                };
                AdminComponent.prototype.goToCreatedPage = function () {
                    this.router.navigate(['/testCreated', this.responseMessage]);
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin-module/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/app-routing.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/admin-module/app-routing.module.ts ***!
          \****************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin-module/admin/admin.component.ts");
            /* harmony import */ var _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./created-page/created-page.component */ "./src/app/admin-module/created-page/created-page.component.ts");
            /* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin-module/dashboard/dashboard.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/admin-module/createuser/createuser.component.ts");
            var routes = [
                { path: 'admin', children: [
                        { path: 'createTopic', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
                        { path: 'testCreated/:id', component: _created_page_created_page_component__WEBPACK_IMPORTED_MODULE_4__["CreatedPageComponent"] },
                        { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
                        { path: 'createUser', component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_8__["CreateuserComponent"] },
                        { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
                    ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_5__["RoleGuardService"]], data: { role: 'ADM' } }
                //
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/admin-module/app.component.css": 
        /*!************************************************!*\
          !*** ./src/app/admin-module/app.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/app.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/admin-module/app.component.ts ***!
          \***********************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'adminAngular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/admin-module/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/create-modal/create-modal.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/admin-module/create-modal/create-modal.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9jcmVhdGUtbW9kYWwvY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/create-modal/create-modal.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/admin-module/create-modal/create-modal.component.ts ***!
          \*********************************************************************/
        /*! exports provided: CreateModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModalComponent", function () { return CreateModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var CreateModalComponent = /** @class */ (function () {
                function CreateModalComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                CreateModalComponent.prototype.ngOnInit = function () {
                };
                CreateModalComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                CreateModalComponent.prototype.onSubmit = function () {
                    this.dialogRef.close();
                };
                return CreateModalComponent;
            }());
            CreateModalComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            CreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/create-modal/create-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-modal.component.css */ "./src/app/admin-module/create-modal/create-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], CreateModalComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/created-page/created-page.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/admin-module/created-page/created-page.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9jcmVhdGVkLXBhZ2UvY3JlYXRlZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/created-page/created-page.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/admin-module/created-page/created-page.component.ts ***!
          \*********************************************************************/
        /*! exports provided: CreatedPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedPageComponent", function () { return CreatedPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin-service.service */ "./src/app/admin-module/service/admin-service.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CreatedPageComponent = /** @class */ (function () {
                function CreatedPageComponent(adminService, router, route) {
                    var _this = this;
                    this.adminService = adminService;
                    this.router = router;
                    this.route = route;
                    this.route.params.subscribe(function (params) {
                        _this.message = params.responseMessage;
                    });
                }
                CreatedPageComponent.prototype.ngOnInit = function () {
                };
                CreatedPageComponent.prototype.onClick = function () {
                    this.router.navigate([' ']);
                };
                return CreatedPageComponent;
            }());
            CreatedPageComponent.ctorParameters = function () { return [
                { type: _service_admin_service_service__WEBPACK_IMPORTED_MODULE_2__["AdminServiceService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            CreatedPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-created-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./created-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/created-page/created-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./created-page.component.css */ "./src/app/admin-module/created-page/created-page.component.css")).default]
                })
            ], CreatedPageComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/createuser/createuser.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/admin-module/createuser/createuser.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLW1vZHVsZS9jcmVhdGV1c2VyL2NyZWF0ZXVzZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/createuser/createuser.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/admin-module/createuser/createuser.component.ts ***!
          \*****************************************************************/
        /*! exports provided: CreateuserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function () { return CreateuserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_createuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/createuser.service */ "./src/app/admin-module/service/createuser.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-modal/create-modal.component */ "./src/app/admin-module/create-modal/create-modal.component.ts");
            var CreateuserComponent = /** @class */ (function () {
                function CreateuserComponent(router, createUserService, fb, dialog) {
                    this.router = router;
                    this.createUserService = createUserService;
                    this.fb = fb;
                    this.dialog = dialog;
                }
                CreateuserComponent.prototype.ngOnInit = function () {
                    this.generateUserAndPass();
                    this.detailsForm = this.fb.group({
                        "name": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "phone": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "email": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "role": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "designation": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                    });
                };
                CreateuserComponent.prototype.openDialog = function (userDetails) {
                    var _this = this;
                    this.generateUserAndPass();
                    this.loginForm = this.fb.group({
                        "username": this.generatedUsername,
                        "password": this.generatedPassword,
                        "role": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "email": userDetails.email
                    });
                    var dialogRef = this.dialog.open(_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"], {
                        width: '450px',
                        data: { form: this.loginForm },
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result == undefined) {
                            console.log('-------');
                        }
                        _this.createUserService.saveUserInMongo(userDetails).subscribe(function (res) { return console.log(res); });
                        _this.createUserService.saveUserInMysql(result).subscribe(function (res) { return console.log(res); });
                        _this.router.navigate(['/admin']);
                    });
                };
                CreateuserComponent.prototype.generateUserAndPass = function () {
                    var _this = this;
                    this.createUserService.generateRandomUserAndPass().subscribe(function (response) { }, //do nothing
                    //do nothing
                    function (//do nothing
                    error) {
                        _this.generatedUsername = error.error.text.split(',')[0];
                        _this.generatedPassword = error.error.text.split(',')[1];
                    });
                };
                return CreateuserComponent;
            }());
            CreateuserComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_createuser_service__WEBPACK_IMPORTED_MODULE_3__["CreateuserService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            CreateuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-createuser',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/createuser/createuser.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createuser.component.css */ "./src/app/admin-module/createuser/createuser.component.css")).default]
                })
            ], CreateuserComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/dashboard/dashboard.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/admin-module/dashboard/dashboard.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  td, th {\n    width: 25%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbW9kdWxlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGQsIHRoIHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/admin-module/dashboard/dashboard.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/admin-module/dashboard/dashboard.component.ts ***!
          \***************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/admin-module/service/topic.service.ts");
            /* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/employee.service */ "./src/app/admin-module/service/employee.service.ts");
            /* harmony import */ var _service_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/request.service */ "./src/app/admin-module/service/request.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(topicService, employeeService, requestService) {
                    this.topicService = topicService;
                    this.employeeService = employeeService;
                    this.requestService = requestService;
                    this.topicDisplayedColumns = ['name', 'createdAt', 'link', 'keywords'];
                    this.employeeDisplayedColumns = ['name', 'phone', 'email'];
                    this.requestDisplayedColumns = ['id', 'message', 'status', 'actions'];
                    this.paginators = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                };
                DashboardComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.topicService.getAllTopics().subscribe(function (response) {
                        _this.topicDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.topicDataSource.paginator = _this.paginators.toArray()[0];
                    });
                    this.employeeService.getAllEmployees().subscribe(function (response) {
                        _this.employeeDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.employeeDataSource.paginator = _this.paginators.toArray()[1];
                    });
                    this.requestService.getAllRequests().subscribe(function (response) {
                        _this.requestDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.requestDataSource.paginator = _this.paginators.toArray()[2];
                    });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"] },
                { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
                { type: _service_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
            ], DashboardComponent.prototype, "paginators", void 0);
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-module/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin-module/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/admin-module/service/admin-service.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/admin-module/service/admin-service.service.ts ***!
          \***************************************************************/
        /*! exports provided: AdminServiceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServiceService", function () { return AdminServiceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var AdminServiceService = /** @class */ (function () {
                function AdminServiceService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].adminURLprefix;
                }
                AdminServiceService.prototype.createTest = function (topic) {
                    return this.http.post(this.URLprefix + 'createTest', topic);
                };
                return AdminServiceService;
            }());
            AdminServiceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdminServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminServiceService);
            /***/ 
        }),
        /***/ "./src/app/admin-module/service/createuser.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/admin-module/service/createuser.service.ts ***!
          \************************************************************/
        /*! exports provided: CreateuserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserService", function () { return CreateuserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CreateuserService = /** @class */ (function () {
                function CreateuserService(http) {
                    this.http = http;
                    this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                CreateuserService.prototype.postemployeedetails = function (employee) {
                    return this.http.post(this.URLprefix + "/employeedetails", employee);
                };
                CreateuserService.prototype.generateRandomUserAndPass = function () {
                    return this.http.get(this.URLprefix + "/users/generate");
                };
                CreateuserService.prototype.saveUserInMongo = function (employee) {
                    return this.http.post(this.URLprefix + "/users", employee);
                };
                CreateuserService.prototype.saveUserInMysql = function (employee) {
                    return this.http.post(this.URLprefix + "/users/m", employee);
                };
                return CreateuserService;
            }());
            CreateuserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            CreateuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CreateuserService);
            /***/ 
        }),
        /***/ "./src/app/admin-module/service/employee.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/admin-module/service/employee.service.ts ***!
          \**********************************************************/
        /*! exports provided: EmployeeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function () { return EmployeeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var EmployeeService = /** @class */ (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HrURLprefix;
                }
                EmployeeService.prototype.getAllEmployees = function () {
                    return this.http.get(this.URLprefix + "/users");
                };
                return EmployeeService;
            }());
            EmployeeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeeService);
            /***/ 
        }),
        /***/ "./src/app/admin-module/service/request.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/admin-module/service/request.service.ts ***!
          \*********************************************************/
        /*! exports provided: RequestService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function () { return RequestService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var RequestService = /** @class */ (function () {
                function RequestService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                RequestService.prototype.getAllRequests = function () {
                    return this.http.get(this.URLprefix + '/request');
                };
                RequestService.prototype.getRequestById = function (id) {
                    return this.http.get(this.URLprefix + '/request/' + id);
                };
                RequestService.prototype.addRequest = function (request) {
                    return this.http.post(this.URLprefix + '/request', request);
                };
                RequestService.prototype.deleteRequest = function (request) {
                    return this.http.delete(this.URLprefix + '/request', request);
                };
                return RequestService;
            }());
            RequestService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RequestService);
            /***/ 
        }),
        /***/ "./src/app/admin-module/service/topic.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/admin-module/service/topic.service.ts ***!
          \*******************************************************/
        /*! exports provided: TopicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function () { return TopicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TopicService = /** @class */ (function () {
                function TopicService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                TopicService.prototype.getAllTopics = function () {
                    return this.http.get(this.URLprefix + "/topics");
                };
                return TopicService;
            }());
            TopicService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TopicService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: white;\n    color: black;\n    text-align: center;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'QUIZO';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
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
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                            timeOut: 10000,
                            positionClass: 'toast-top-right',
                            preventDuplicates: true,
                        }),
                    ],
                    providers: [_authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_13__["ToasterService"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/app-routing.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/authentication-module/app-routing.module.ts ***!
          \*************************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication-module/login/login.component.ts");
            /* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/authentication-module/logout/logout.component.ts");
            /* harmony import */ var _service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth-gaurd.service */ "./src/app/authentication-module/service/auth-gaurd.service.ts");
            /* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/authentication-module/registration/registration.component.ts");
            /* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/authentication-module/reset/reset.component.ts");
            /* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/authentication-module/user-details/user-details.component.ts");
            var routes = [
                { path: 'auth', children: [
                        { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                        { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"], canActivate: [_service_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_5__["AuthGaurdService"]] },
                        { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
                        { path: 'reset', component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_7__["ResetComponent"] },
                        { path: 'details', component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] }
                    ] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/app.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/authentication-module/app.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spacing-l-20 {\n    margin-left: 20px;\n}\n\n.v-center {\n    vertical-align: baseline;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjaW5nLWwtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udi1jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/app.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/authentication-module/app.component.ts ***!
          \********************************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(loginservice) {
                    this.loginservice = loginservice;
                    this.title = 'employee-management';
                }
                AppComponent.prototype.userIsLogged = function () {
                    var user = sessionStorage.getItem('username');
                    // console.log(!(user === null))
                    return (user === null);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/authentication-module/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/authentication.module.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/authentication-module/authentication.module.ts ***!
          \****************************************************************/
        /*! exports provided: AuthenticationModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () { return AuthenticationModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/authentication-module/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/authentication-module/app.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication-module/login/login.component.ts");
            /* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/authentication-module/logout/logout.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/authentication-module/registration/registration.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/authentication-module/reset/reset.component.ts");
            /* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/authentication-module/user-details/user-details.component.ts");
            var AuthenticationModule = /** @class */ (function () {
                function AuthenticationModule() {
                }
                return AuthenticationModule;
            }());
            AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"],
                        _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                        _reset_reset_component__WEBPACK_IMPORTED_MODULE_14__["ResetComponent"],
                        _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                            timeOut: 10000,
                            positionClass: 'toast-top-right',
                            preventDuplicates: true,
                        }),
                        _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"]
                    ],
                    exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]],
                    providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AuthenticationModule);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/login/login.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/authentication-module/login/login.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-main {\n    padding-top: 10%;\n}\n\nmat-card {\n    min-width: 28%;\n}\n\n.footer {\n    position: fixed;\n    bottom: 0px;\n    height: 40px;\n}\n\n.back {\n    /* background-color: #F5F5F5; */\n    box-shadow: 3px 3px 2px 2px #dadada;\n    /* border: 1px solid rgb(155, 155, 155); */\n    height: 330px;\n    margin-top: -50px;\n}\n\n.text {\n    color: #585858;\n}\n\n.spacing-l-20 {\n    margin-left: 20px;\n}\n\n.v-center {\n    vertical-align: -5px;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\nmat-card-header {\n    display: block;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLW1haW4ge1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI4JTtcbn1cblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7ICovXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMnB4ICNkYWRhZGE7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE1NSwgMTU1LCAxNTUpOyAqL1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cblxuLnNwYWNpbmctbC0yMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi52LWNlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IC01cHg7XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/login/login.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/authentication-module/login/login.component.ts ***!
          \****************************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            /* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/authentication-module/service/registration.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, loginservice, registrationService, toastr, toasterService) {
                    this.router = router;
                    this.loginservice = loginservice;
                    this.registrationService = registrationService;
                    this.toastr = toastr;
                    this.toasterService = toasterService;
                    this.username = '';
                    this.password = '';
                    this.email = '';
                    this.invalidLogin = false;
                    this.isLoading = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.checkLogin = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.loginservice.authenticate(this.username, this.password).subscribe(function (data) {
                        sessionStorage.setItem('username', data.username);
                        sessionStorage.setItem('role', data.role);
                        sessionStorage.setItem('email', data.email);
                        var tokenStr = 'Bearer ' + data.token;
                        sessionStorage.setItem('token', tokenStr);
                        var userRole = data.role;
                        if (userRole == 'ADM') {
                            _this.router.navigate(['/admin']);
                        }
                        if (userRole == 'EMP') {
                            _this.router.navigate(['/employee']);
                        }
                        if (userRole == 'HRM') {
                            _this.router.navigate(['/hr']);
                        }
                        _this.toasterService.success('Login successful');
                        _this.invalidLogin = false;
                    }, function (error) {
                        _this.isLoading = false;
                        _this.toasterService.error('Login failed, login again');
                        _this.invalidLogin = true;
                    });
                };
                LoginComponent.prototype.register = function () {
                    this.registrationService.register(this.username, this.password, this.email).subscribe(function (data) { console.log(data); }, function (err) { console.log(err); });
                };
                LoginComponent.prototype.forgotPassword = function () {
                    this.router.navigate(['/auth/reset']);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
                { type: _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/authentication-module/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/logout/logout.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/authentication-module/logout/logout.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/logout/logout.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/authentication-module/logout/logout.component.ts ***!
          \******************************************************************/
        /*! exports provided: LogoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () { return LogoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LogoutComponent = /** @class */ (function () {
                function LogoutComponent(authentocationService, router) {
                    this.authentocationService = authentocationService;
                    this.router = router;
                }
                LogoutComponent.prototype.ngOnInit = function () {
                    this.authentocationService.logOut();
                    this.router.navigate(['/auth/login']);
                };
                return LogoutComponent;
            }());
            LogoutComponent.ctorParameters = function () { return [
                { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/logout/logout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication-module/logout/logout.component.css")).default]
                })
            ], LogoutComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/registration/registration.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/authentication-module/registration/registration.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-main {\n    padding-top: 3%;\n}\n\n.mat-card {\n    min-width: 40%;\n}\n\n.back {\n    background-color: #F5F5F5;\n}\n\n.spacing-l-20 {\n    margin-left: 20px;\n}\n\n.v-center {\n    vertical-align: baseline;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4ubWF0LWNhcmQge1xuICAgIG1pbi13aWR0aDogNDAlO1xufVxuXG4uYmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLnNwYWNpbmctbC0yMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi52LWNlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/registration/registration.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/authentication-module/registration/registration.component.ts ***!
          \******************************************************************************/
        /*! exports provided: RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/registration.service */ "./src/app/authentication-module/service/registration.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(RegistrationService, router, ts) {
                    this.RegistrationService = RegistrationService;
                    this.router = router;
                    this.ts = ts;
                    this.isLoading = false;
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                };
                //registers only hr 
                RegistrationComponent.prototype.register = function (username, password, email) {
                    var _this = this;
                    this.isLoading = true;
                    this.RegistrationService.registerHr(username, password, email).subscribe(function (response) {
                        //do nothing
                    }, function (error) {
                        if (error.status == 200) {
                            _this.ts.success("Sucessfully Registered", "HR has been registered sucessfully");
                            _this.router.navigate(['/auth/login']);
                        }
                        else {
                            _this.ts.error("Could not Register", "Please contact the office");
                        }
                        _this.isLoading = false;
                    });
                };
                return RegistrationComponent;
            }());
            RegistrationComponent.ctorParameters = function () { return [
                { type: _service_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
            ]; };
            RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/registration/registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/authentication-module/registration/registration.component.css")).default]
                })
            ], RegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/reset/reset.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/authentication-module/reset/reset.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-main {\n    padding-top: 10%;\n}\n\nmat-card {\n    min-width: 28%;\n}\n\n.back {\n    /* background-color: #F5F5F5; */\n    box-shadow: 3px 3px 2px 2px #dadada;\n    /* border: 1px solid rgb(155, 155, 155); */\n    height: 240px;\n}\n\n.text {\n    color: #585858;\n}\n\n.spacing-l-20 {\n    margin-left: 20px;\n}\n\n.v-center {\n    vertical-align: -5px;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\nmat-card-header {\n    display: block;\n    flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQywwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLW1haW4ge1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI4JTtcbn1cblxuLmJhY2sge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7ICovXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggMnB4ICNkYWRhZGE7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE1NSwgMTU1LCAxNTUpOyAqL1xuICAgIGhlaWdodDogMjQwcHg7XG59XG5cbi50ZXh0IHtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cblxuLnNwYWNpbmctbC0yMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi52LWNlbnRlciB7XG4gICAgdmVydGljYWwtYWxpZ246IC01cHg7XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/reset/reset.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/authentication-module/reset/reset.component.ts ***!
          \****************************************************************/
        /*! exports provided: ResetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function () { return ResetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            /* harmony import */ var _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");
            var ResetComponent = /** @class */ (function () {
                function ResetComponent(authService, ts) {
                    this.authService = authService;
                    this.ts = ts;
                    this.isLoading = false;
                }
                ResetComponent.prototype.ngOnInit = function () {
                };
                ResetComponent.prototype.sendMail = function (email) {
                    var _this = this;
                    this.isLoading = true;
                    this.authService.sendMail(email).subscribe(function (response) {
                        // do nothing
                        // 
                    }, function (error) {
                        if (error.status == 200) {
                            _this.ts.success("sucessfully sent mail", "Go back and login with the new password");
                        }
                        else {
                            _this.ts.error("failed to send mail");
                        }
                    }, function () {
                        _this.isLoading = false;
                    });
                };
                return ResetComponent;
            }());
            ResetComponent.ctorParameters = function () { return [
                { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _service_toaster_service_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] }
            ]; };
            ResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-reset',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/reset/reset.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.component.css */ "./src/app/authentication-module/reset/reset.component.css")).default]
                })
            ], ResetComponent);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/auth-gaurd.service.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/authentication-module/service/auth-gaurd.service.ts ***!
          \*********************************************************************/
        /*! exports provided: AuthGaurdService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function () { return AuthGaurdService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            var AuthGaurdService = /** @class */ (function () {
                function AuthGaurdService(router, authService) {
                    this.router = router;
                    this.authService = authService;
                }
                AuthGaurdService.prototype.canActivate = function (route, state) {
                    if (this.authService.isUserLoggedIn())
                        return true;
                    this.router.navigate(['/auth/login']);
                    return false;
                };
                return AuthGaurdService;
            }());
            AuthGaurdService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGaurdService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/authentication.service.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/authentication-module/service/authentication.service.ts ***!
          \*************************************************************************/
        /*! exports provided: User, AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var User = /** @class */ (function () {
                function User(status) {
                    this.status = status;
                }
                return User;
            }());
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(httpClient) {
                    this.httpClient = httpClient;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authURLprefix;
                }
                AuthenticationService.prototype.authenticate = function (username, password) {
                    return this.httpClient.post(this.URLprefix + '/signin', { username: username, password: password });
                };
                AuthenticationService.prototype.sendMail = function (email) {
                    console.log(email);
                    return this.httpClient.post(this.URLprefix + '/reset?email=' + email, {});
                };
                AuthenticationService.prototype.isUserLoggedIn = function () {
                    var user = sessionStorage.getItem('username');
                    // console.log(!(user === null))
                    return !(user === null);
                };
                AuthenticationService.prototype.logOut = function () {
                    sessionStorage.removeItem('username');
                };
                AuthenticationService.prototype.getUserRole = function () {
                    return sessionStorage.getItem('role');
                };
                AuthenticationService.prototype.getUser = function () {
                    return { username: sessionStorage.getItem('username'), role: sessionStorage.getItem('role') };
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/details.service.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/authentication-module/service/details.service.ts ***!
          \******************************************************************/
        /*! exports provided: DetailsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsService", function () { return DetailsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var DetailsService = /** @class */ (function () {
                function DetailsService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authURLprefix;
                }
                DetailsService.prototype.getAllDetails = function (email) {
                    return this.http.get(this.URLprefix + '/details?email=' + email);
                };
                return DetailsService;
            }());
            DetailsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DetailsService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/registration.service.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/authentication-module/service/registration.service.ts ***!
          \***********************************************************************/
        /*! exports provided: RegistrationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function () { return RegistrationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var RegistrationService = /** @class */ (function () {
                function RegistrationService(httpClient) {
                    this.httpClient = httpClient;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authURLprefix;
                }
                RegistrationService.prototype.register = function (username, password, email) {
                    return this.httpClient.post(this.URLprefix + '/register', { username: username, password: password, email: email, "role": "EMP" });
                };
                RegistrationService.prototype.registerHr = function (username, password, email) {
                    return this.httpClient.post(this.URLprefix + '/register', { username: username, password: password, email: email, "role": "HRM" });
                };
                return RegistrationService;
            }());
            RegistrationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RegistrationService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/role-guard.service.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/authentication-module/service/role-guard.service.ts ***!
          \*********************************************************************/
        /*! exports provided: RoleGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuardService", function () { return RoleGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication-module/service/authentication.service.ts");
            var RoleGuardService = /** @class */ (function () {
                function RoleGuardService(router, authService) {
                    this.router = router;
                    this.authService = authService;
                }
                RoleGuardService.prototype.canActivate = function (route, state) {
                    console.log(this.authService.getUser(), this.authService.isUserLoggedIn());
                    var currentUser = this.authService.getUser();
                    var givenRole = route.data.role;
                    console.log(givenRole);
                    if (this.authService.isUserLoggedIn() && this.authService.getUserRole() === givenRole) {
                        return true;
                    }
                    this.router.navigate(['/auth/login']);
                    return false;
                };
                return RoleGuardService;
            }());
            RoleGuardService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            RoleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RoleGuardService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/service/toaster-service.service.ts": 
        /*!**************************************************************************!*\
          !*** ./src/app/authentication-module/service/toaster-service.service.ts ***!
          \**************************************************************************/
        /*! exports provided: ToasterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function () { return ToasterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ToasterService = /** @class */ (function () {
                function ToasterService(toastr) {
                    this.toastr = toastr;
                }
                ToasterService.prototype.success = function (title, message) {
                    this.toastr.success(title, message);
                };
                ToasterService.prototype.error = function (title, message) {
                    this.toastr.error(title, message);
                };
                return ToasterService;
            }());
            ToasterService.ctorParameters = function () { return [
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
            ]; };
            ToasterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ToasterService);
            /***/ 
        }),
        /***/ "./src/app/authentication-module/user-details/user-details.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/authentication-module/user-details/user-details.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-container{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    flex: 1 0 auto;\n}\nmat-sidenav, mat-sidenav-content{\n    padding: 16px;\n}\nmat-sidenav{\n    background-color: rgba(64, 62, 70, 0.7);\n    width: 200px;\n}\nimg{\n    width: 100%;\n    height: 170px;\n}\n.icon-det{\n    float: right;\n}\n.example-fill-remaining-space {\n    flex: 1 0 1 auto;\n  }\n.title{\n      color: rgba(25, 22, 31, 0.7);\n      background: rgba(238, 237, 237, 0.7);\n      margin-top: -15px;\n  }\n.forms {\n    display: flex;\n    flex-direction: column;\n  }\n.forms > * {\n    width: 100%;\n  }\nlabel {\n    display: grid;\n    width: 60%;\n    margin-left: 10px;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24tbW9kdWxlL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBQ0E7TUFDSSw0QkFBNEI7TUFDNUIsb0NBQW9DO01BQ3BDLGlCQUFpQjtFQUNyQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjs7RUFFbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi1tb2R1bGUvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleDogMSAwIGF1dG87XG59XG5tYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xufVxuXG5tYXQtc2lkZW5hdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2MiwgNzAsIDAuNyk7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTcwcHg7XG59XG4uaWNvbi1kZXR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIGZsZXg6IDEgMCAxIGF1dG87XG4gIH1cbiAgLnRpdGxle1xuICAgICAgY29sb3I6IHJnYmEoMjUsIDIyLCAzMSwgMC43KTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzcsIDIzNywgMC43KTtcbiAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICB9XG4gIC5mb3JtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAuZm9ybXMgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIFxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/authentication-module/user-details/user-details.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/authentication-module/user-details/user-details.component.ts ***!
          \******************************************************************************/
        /*! exports provided: UserDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () { return UserDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _service_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/details.service */ "./src/app/authentication-module/service/details.service.ts");
            var UserDetailsComponent = /** @class */ (function () {
                function UserDetailsComponent(changeDetectorRef, media, detService, fb) {
                    this.detService = detService;
                    this.fb = fb;
                    this.mobileQuery = media.matchMedia('(max-width: 600px)');
                    this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
                    this.mobileQuery.addListener(this._mobileQueryListener);
                }
                UserDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.mobileQuery.removeListener(this._mobileQueryListener);
                    console.log("okay");
                    var email = sessionStorage.getItem('email');
                    console.log(email);
                    this.detService.getAllDetails(email).subscribe(function (response) {
                        _this.user = response;
                        console.log(response);
                    });
                    // this.userdet = this.fb.group({
                    //   'id' : this.user.id,
                    //   'name' : this.user.name,
                    //   'role' : this.user.role,
                    //   'phone' : this.user.phone,
                    //   'email' : this.user.email,
                    //   'designation' : this.user.designation
                    // })
                };
                return UserDetailsComponent;
            }());
            UserDetailsComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
                { type: _service_details_service__WEBPACK_IMPORTED_MODULE_4__["DetailsService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication-module/user-details/user-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-details.component.css */ "./src/app/authentication-module/user-details/user-details.component.css")).default]
                })
            ], UserDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var CoreModule = /** @class */ (function () {
                function CoreModule() {
                }
                return CoreModule;
            }());
            CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                    ],
                    exports: [
                        _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                    ],
                })
            ], CoreModule);
            /***/ 
        }),
        /***/ "./src/app/employee-module/app-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/employee-module/app-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: AppRoutingModule, EmployeeRoutingComponents */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingComponents", function () { return EmployeeRoutingComponents; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-ins/test-ins.component */ "./src/app/employee-module/test-ins/test-ins.component.ts");
            /* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/employee-module/test-page/test-page.component.ts");
            /* harmony import */ var _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thankyou/thankyou.component */ "./src/app/employee-module/thankyou/thankyou.component.ts");
            /* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/employee-module/error/error.component.ts");
            /* harmony import */ var _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeedetails/employeedetails.component */ "./src/app/employee-module/employeedetails/employeedetails.component.ts");
            /* harmony import */ var _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emptypage/emptypage.component */ "./src/app/employee-module/emptypage/emptypage.component.ts");
            /* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/employee-module/feedback/feedback.component.ts");
            /* harmony import */ var _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetch-test/fetch-test.component */ "./src/app/employee-module/fetch-test/fetch-test.component.ts");
            /* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/employee-module/dashboard/dashboard.component.ts");
            var routes = [
                { path: 'employee', children: [
                        { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"] },
                        { path: 'employee-details', component: _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_7__["EmployeedetailsComponent"] },
                        { path: 'test-instructions', component: _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_3__["TestInsComponent"] },
                        { path: 'test-page', component: _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_11__["FetchTestComponent"] },
                        { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"] },
                        { path: 'thankyou', component: _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_5__["ThankyouComponent"] },
                        { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"] },
                        { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
                    ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_9__["RoleGuardService"]], data: { role: 'EMP' }
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            var EmployeeRoutingComponents = [
                _emptypage_emptypage_component__WEBPACK_IMPORTED_MODULE_8__["EmptypageComponent"],
                _employeedetails_employeedetails_component__WEBPACK_IMPORTED_MODULE_7__["EmployeedetailsComponent"],
                _test_ins_test_ins_component__WEBPACK_IMPORTED_MODULE_3__["TestInsComponent"],
                _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_4__["TestPageComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
                _thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_5__["ThankyouComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"]
            ];
            /***/ 
        }),
        /***/ "./src/app/employee-module/app.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/employee-module/app.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/app.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/employee-module/app.component.ts ***!
          \**************************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'emp';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/employee-module/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/dashboard/dashboard.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/employee-module/dashboard/dashboard.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/dashboard/dashboard.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/employee-module/dashboard/dashboard.component.ts ***!
          \******************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/dashboard.service */ "./src/app/employee-module/service/dashboard.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "./src/app/employee-module/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(dashboardService, dataService, router) {
                    this.dashboardService = dashboardService;
                    this.dataService = dataService;
                    this.router = router;
                    this.testsDisplayedColumns = ['name', 'createdAt', 'link', 'actions'];
                    this.paginators = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userEmail = sessionStorage.getItem('email');
                    this.dashboardService.getActiveTests(userEmail).subscribe(function (response) {
                        _this.activeTestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.activeTestsDataSource.paginator = _this.paginators.toArray()[0];
                    });
                    this.dashboardService.getCompleteTests(userEmail).subscribe(function (response) {
                        _this.completeTestsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.completeTestsDataSource.paginator = _this.paginators.toArray()[1];
                    });
                };
                DashboardComponent.prototype.giveTest = function (data) {
                    this.dataService.setTestUserDetails(data);
                    this.router.navigate(["/employee/test-instructions"]);
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _service_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
            ], DashboardComponent.prototype, "paginators", void 0);
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/employee-module/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/employee.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/employee-module/employee.module.ts ***!
          \****************************************************/
        /*! exports provided: EmployeeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () { return EmployeeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/employee-module/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/employee-module/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/user.service */ "./src/app/employee-module/service/user.service.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/data.service */ "./src/app/employee-module/service/data.service.ts");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/topic.service */ "./src/app/employee-module/service/topic.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/employee-module/feedback/feedback.component.ts");
            /* harmony import */ var _service_dash_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/dash.service */ "./src/app/employee-module/service/dash.service.ts");
            /* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/employee-module/landing/landing.component.ts");
            /* harmony import */ var _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fetch-test/fetch-test.component */ "./src/app/employee-module/fetch-test/fetch-test.component.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./result-page/result-page.component */ "./src/app/employee-module/result-page/result-page.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/employee-module/dashboard/dashboard.component.ts");
            var EmployeeModule = /** @class */ (function () {
                function EmployeeModule() {
                }
                return EmployeeModule;
            }());
            EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingComponents"],
                        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"],
                        _fetch_test_fetch_test_component__WEBPACK_IMPORTED_MODULE_14__["FetchTestComponent"],
                        _landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                        _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_16__["ResultPageComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                        _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"]
                    ],
                    providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _service_topic_service__WEBPACK_IMPORTED_MODULE_8__["TopicService"], _service_dash_service__WEBPACK_IMPORTED_MODULE_12__["DashService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], EmployeeModule);
            /***/ 
        }),
        /***/ "./src/app/employee-module/employeedetails/employeedetails.component.css": 
        /*!*******************************************************************************!*\
          !*** ./src/app/employee-module/employeedetails/employeedetails.component.css ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".btn{\n  margin-left: 600px;\n}\n\n.x{\nmargin-left: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2VtcGxveWVlZGV0YWlscy9lbXBsb3llZWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9lbXBsb3llZWRldGFpbHMvZW1wbG95ZWVkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICBtYXJnaW4tbGVmdDogNjAwcHg7XG59XG5cbi54e1xubWFyZ2luLWxlZnQ6IDUwMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/employeedetails/employeedetails.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/employee-module/employeedetails/employeedetails.component.ts ***!
          \******************************************************************************/
        /*! exports provided: EmployeedetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeedetailsComponent", function () { return EmployeedetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var EmployeedetailsComponent = /** @class */ (function () {
                function EmployeedetailsComponent(router) {
                    this.router = router;
                    this.employee = {
                        id: 0, name: "", email: ""
                    };
                }
                EmployeedetailsComponent.prototype.ngOnInit = function () {
                };
                EmployeedetailsComponent.prototype.saveDetailsAndGoToInstructions = function (id, name, email) {
                    this.employee.id = id;
                    this.employee.name = name;
                    this.employee.email = email;
                    sessionStorage.setItem(id, JSON.stringify(this.employee));
                    console.log(JSON.parse(sessionStorage.getItem(id)));
                    this.router.navigate(['/test-instructions']);
                };
                return EmployeedetailsComponent;
            }());
            EmployeedetailsComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            EmployeedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employeedetails',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/employeedetails/employeedetails.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeedetails.component.css */ "./src/app/employee-module/employeedetails/employeedetails.component.css")).default]
                })
            ], EmployeedetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/emptypage/emptypage.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/employee-module/emptypage/emptypage.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\nbody {\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.header {\n    height: 60px;\n    background-color: #A3E4D7;\n    padding-top: 2px;\n    opacity: 1;\n}\n\n.btn {\n    height: 60px;\n    background-color: #A3E4D7;\n    opacity: 1;\n    width:1000px;\n}\n\n.login {\n    background-color: blanchedalmond;\n    color: brown;\n    position: relative;\n    font-size: 24px;\n    margin-left:400px;\n    top: 25%;\n    left: 47%;\n}\n\n.hero-image {\n    background-image: url(\"/assets/lib3.jpeg\");\n    opacity: 0.7;\n    background-color: #cccccc;\n    height: 520px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n.text {\n    position: absolute;\n    top: 30%;\n    left: 40%;\n    font-family: cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2VtcHR5cGFnZS9lbXB0eXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvZW1wdHlwYWdlL2VtcHR5cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNFNEQ3O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmJ0biB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBM0U0RDc7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDoxMDAwcHg7XG59XG5cbi5sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgY29sb3I6IGJyb3duO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6NDAwcHg7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogNDclO1xufVxuXG4uaGVyby1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9saWIzLmpwZWdcIik7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/emptypage/emptypage.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/employee-module/emptypage/emptypage.component.ts ***!
          \******************************************************************/
        /*! exports provided: EmptypageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptypageComponent", function () { return EmptypageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EmptypageComponent = /** @class */ (function () {
                function EmptypageComponent() {
                }
                EmptypageComponent.prototype.ngOnInit = function () {
                };
                return EmptypageComponent;
            }());
            EmptypageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-emptypage',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emptypage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/emptypage/emptypage.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emptypage.component.css */ "./src/app/employee-module/emptypage/emptypage.component.css")).default]
                })
            ], EmptypageComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/error/error.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/employee-module/error/error.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".errorContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvckNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/error/error.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/employee-module/error/error.component.ts ***!
          \**********************************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                ErrorComponent.prototype.ngOnInit = function () {
                };
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/employee-module/error/error.component.css")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/feedback/feedback.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/employee-module/feedback/feedback.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("  body{\n    height: 100%;\n  }\n .feedHead{\n   margin-left: 27%;\n   margin-bottom: 2%;\n   color: rgba(2, 4, 15, 0.986);\n   font-family: bold,'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n   font-size: 50%;\n }\n .feedContent{\n    margin-left: 33%;\n    color: black;\n    font: bold;\n  }\n .feedText{\n   width: 50%;\n}\n .feedback{\n\n  width: 50%;\n  margin-left: 25%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  border: 1px solid none;\n  background: #F5F5F5;\n}\n .feed{\n  width: 100%;\n  margin-top: 3%;\n}\n .example-button-row{\n  margin-left: 45%;\n}\n a{\n  color: white;\n  -webkit-text-emphasis: unset;\n          text-emphasis: unset;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxZQUFZO0VBQ2Q7Q0FDRDtHQUNFLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsNEJBQTRCO0dBQzVCLGtGQUFrRjtHQUNsRixjQUFjO0NBQ2hCO0NBQ0M7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7RUFDWjtDQUNGO0dBQ0csVUFBVTtBQUNiO0NBQ0E7O0VBRUUsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7Q0FDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0NBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7Q0FDQTtFQUNFLFlBQVk7RUFDWiw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gLmZlZWRIZWFke1xuICAgbWFyZ2luLWxlZnQ6IDI3JTtcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgY29sb3I6IHJnYmEoMiwgNCwgMTUsIDAuOTg2KTtcbiAgIGZvbnQtZmFtaWx5OiBib2xkLCdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICBmb250LXNpemU6IDUwJTtcbiB9XG4gIC5mZWVkQ29udGVudHtcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250OiBib2xkO1xuICB9XG4uZmVlZFRleHR7XG4gICB3aWR0aDogNTAlO1xufVxuLmZlZWRiYWNre1xuXG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgbm9uZTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cbi5mZWVke1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMyU7XG59XG4uZXhhbXBsZS1idXR0b24tcm93e1xuICBtYXJnaW4tbGVmdDogNDUlO1xufVxuYXtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWVtcGhhc2lzOiB1bnNldDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/feedback/feedback.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/employee-module/feedback/feedback.component.ts ***!
          \****************************************************************/
        /*! exports provided: FeedbackComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () { return FeedbackComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FeedbackComponent = /** @class */ (function () {
                function FeedbackComponent() {
                }
                FeedbackComponent.prototype.ngOnInit = function () {
                };
                return FeedbackComponent;
            }());
            FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feedback',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/feedback/feedback.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/employee-module/feedback/feedback.component.css")).default]
                })
            ], FeedbackComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/fetch-test/fetch-test.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/employee-module/fetch-test/fetch-test.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".timerContainer{\n \n padding-top:33px;\n margin-bottom: 0;\n}\n\n.timer{\n    float:right;\n}\n\n.testName{\n    padding-top:33px;\n}\n\n.actions{\n    float:right;\n}\n\n.navbar2{\n    width:70%;\n    margin-left:15%;\n    height:100px;\n}\n\n.card{\n    background-color:#F5F5F5;\n}\n\n.question{\n    padding-left:10%;\n    padding-top:10px;\n}\n\n.questionContainer{\n    width:70%;\n    padding-left:1%;\n    margin-left:15%;\n}\n\n.button{\n    text-align: center;\n    display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2ZldGNoLXRlc3QvZmV0Y2gtdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9mZXRjaC10ZXN0L2ZldGNoLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lckNvbnRhaW5lcntcbiBcbiBwYWRkaW5nLXRvcDozM3B4O1xuIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50aW1lcntcbiAgICBmbG9hdDpyaWdodDtcbn1cblxuLnRlc3ROYW1le1xuICAgIHBhZGRpbmctdG9wOjMzcHg7XG59XG5cbi5hY3Rpb25ze1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG4ubmF2YmFyMntcbiAgICB3aWR0aDo3MCU7XG4gICAgbWFyZ2luLWxlZnQ6MTUlO1xuICAgIGhlaWdodDoxMDBweDtcbn1cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcbn1cblxuLnF1ZXN0aW9ue1xuICAgIHBhZGRpbmctbGVmdDoxMCU7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbn1cbi5xdWVzdGlvbkNvbnRhaW5lcntcbiAgICB3aWR0aDo3MCU7XG4gICAgcGFkZGluZy1sZWZ0OjElO1xuICAgIG1hcmdpbi1sZWZ0OjE1JTtcbn1cblxuLmJ1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/fetch-test/fetch-test.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/employee-module/fetch-test/fetch-test.component.ts ***!
          \********************************************************************/
        /*! exports provided: FetchTestComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTestComponent", function () { return FetchTestComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_fetch_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/fetch-test.service */ "./src/app/employee-module/service/fetch-test.service.ts");
            /* harmony import */ var _model_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/result */ "./src/app/employee-module/model/result.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/score.service */ "./src/app/employee-module/service/score.service.ts");
            /* harmony import */ var _model_testResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/testResult */ "./src/app/employee-module/model/testResult.ts");
            /* harmony import */ var _model_Attempt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/Attempt */ "./src/app/employee-module/model/Attempt.ts");
            /* harmony import */ var _model_employeeresult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/employeeresult */ "./src/app/employee-module/model/employeeresult.ts");
            // import { testResult } from '../model/testResult';
            var FetchTestComponent = /** @class */ (function () {
                function FetchTestComponent(fetchTestService, scoreService, router) {
                    this.fetchTestService = fetchTestService;
                    this.scoreService = scoreService;
                    this.router = router;
                    this.totalSeconds = 20;
                    this.minutes = Math.floor(this.totalSeconds / 60);
                    this.seconds = this.totalSeconds % 60;
                    this.roundedMins = this.pad(this.minutes);
                    this.roundedSecs = this.pad(this.seconds);
                    this.empId = '878967asdgfg';
                    this.testId = 'u75asd87asd55';
                    this.resultList = [];
                }
                FetchTestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("in ngoninit");
                    this.fetchTestService.getQuestions(this.topic).subscribe(function (data) {
                        console.log(data);
                        _this.questionList = data;
                        _this.question = _this.questionList[0];
                        // console.log(this.question);
                        _this.choices = _this.question['choices'];
                        console.log(_this.options);
                        _this.count = 0;
                        _this.checkTime();
                    });
                };
                FetchTestComponent.prototype.nextQuestion = function () {
                    this.count = this.count + 1;
                    this.question = this.questionList[this.count];
                    this.choices = this.question['choices'];
                    this.resetTime();
                };
                FetchTestComponent.prototype.prevQuestion = function () {
                    this.count = this.count - 1;
                    this.question = this.questionList[this.count];
                    this.options = null;
                };
                FetchTestComponent.prototype.saveAnswer = function (option) {
                    console.log("option data is ", option);
                    if (parseInt(option) - 1 == this.question.choices.indexOf(this.question.answer)) {
                        this.userResponse = true;
                    }
                    else
                        this.userResponse = false;
                    this.Attempt = new _model_Attempt__WEBPACK_IMPORTED_MODULE_7__["Attempt"](this.question.id, this.question, parseInt(option), this.question.choices.indexOf(this.question.answer) + 1, this.choices);
                    this.result = new _model_result__WEBPACK_IMPORTED_MODULE_3__["result"](this.question.id, parseInt(option), this.question.choices.indexOf(this.question.answer) + 1, this.userResponse);
                    console.log("result ", this.result);
                    this.resultList[this.count] = this.result;
                    console.log("the result list is ", this.resultList);
                };
                FetchTestComponent.prototype.submitTest = function () {
                    console.log(this.resultList);
                    console.log(this.questionList.length);
                    this.correct = this.scoreService.calculateCorrectAnswers(this.resultList);
                    this.incorrect = this.questionList.length - this.correct;
                    this.score = this.scoreService.calculateScore(this.resultList, this.questionList);
                    this.percentage = this.scoreService.calculatePercentage(this.score, this.questionList);
                    this.employeeresult = new _model_employeeresult__WEBPACK_IMPORTED_MODULE_8__["EmployeeResult"](this.id, this.empId, this.testId, this.empName, this.topicName, this.score, this.correct, this.incorrect, this.Attempt);
                    //this.testResult={employeeId:this.empId, testId: this.testId, testResponses: this.resultList};
                    this.testResult = new _model_testResult__WEBPACK_IMPORTED_MODULE_6__["testResult"](this.empId, this.testId, this.resultList, this.correct, this.incorrect, this.score, this.percentage);
                    console.log("Test Result is ", this.testResult);
                    this.scoreService.postScore2(this.testResult).subscribe(function (res) {
                        console.log(res);
                    });
                    this.feedbackpage();
                };
                FetchTestComponent.prototype.feedbackpage = function () {
                    this.router.navigate(['/employee/feedback']);
                };
                FetchTestComponent.prototype.resetTime = function () {
                    this.totalSeconds = 20;
                    this.minutes = Math.floor(this.totalSeconds / 60);
                    this.seconds = this.totalSeconds % 60;
                };
                FetchTestComponent.prototype.checkTime = function () {
                    var _this = this;
                    if (this.count != this.questionList.length) {
                        if (this.totalSeconds <= 0) {
                            setTimeout(function () { _this.nextQuestion(); }, 1);
                            setTimeout(function () { _this.checkTime(); }, 1000);
                        }
                        else {
                            this.totalSeconds -= 1;
                            this.minutes = Math.floor(this.totalSeconds / 60);
                            this.seconds = this.totalSeconds % 60;
                            this.roundedMins = this.pad(this.minutes);
                            this.roundedSecs = this.pad(this.seconds);
                            setTimeout(function () { _this.checkTime(); }, 1000);
                        }
                    }
                    else {
                        if (this.totalSeconds <= 0) {
                            setTimeout(function () { _this.submitTest(); }, 1);
                        }
                        else {
                            this.totalSeconds -= 1;
                            this.minutes = Math.floor(this.totalSeconds / 60);
                            this.seconds = this.totalSeconds % 60;
                            this.roundedMins = this.pad(this.minutes);
                            this.roundedSecs = this.pad(this.seconds);
                            setTimeout(function () { _this.checkTime(); }, 1000);
                        }
                    }
                };
                FetchTestComponent.prototype.pad = function (number) {
                    return (number < 10 ? '0' : '') + number;
                };
                return FetchTestComponent;
            }());
            FetchTestComponent.ctorParameters = function () { return [
                { type: _service_fetch_test_service__WEBPACK_IMPORTED_MODULE_2__["FetchTestService"] },
                { type: _service_score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FetchTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-fetch-test',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/fetch-test/fetch-test.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fetch-test.component.css */ "./src/app/employee-module/fetch-test/fetch-test.component.css")).default]
                })
            ], FetchTestComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/landing/landing.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/employee-module/landing/landing.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\nh3 {\n   margin-top:50px;\n   margin-left: 20%;\n}\n\n.mat-flat-button {\n\n    margin-left:600px;\n    margin-top:50px;\n    margin-bottom:100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtHQUNHLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgzIHtcbiAgIG1hcmdpbi10b3A6NTBweDtcbiAgIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5tYXQtZmxhdC1idXR0b24ge1xuXG4gICAgbWFyZ2luLWxlZnQ6NjAwcHg7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/landing/landing.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/employee-module/landing/landing.component.ts ***!
          \**************************************************************/
        /*! exports provided: LandingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function () { return LandingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LandingComponent = /** @class */ (function () {
                function LandingComponent() {
                }
                LandingComponent.prototype.ngOnInit = function () {
                };
                return LandingComponent;
            }());
            LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-landing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/landing/landing.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.css */ "./src/app/employee-module/landing/landing.component.css")).default]
                })
            ], LandingComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/model/Attempt.ts": 
        /*!**************************************************!*\
          !*** ./src/app/employee-module/model/Attempt.ts ***!
          \**************************************************/
        /*! exports provided: Attempt */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attempt", function () { return Attempt; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Attempt = /** @class */ (function () {
                function Attempt(questionID, question, response, answer, choices) {
                    this.questionId = questionID;
                    this.question = question;
                    this.response = response;
                    this.answer = answer;
                    this.choices = choices;
                }
                return Attempt;
            }());
            /***/ 
        }),
        /***/ "./src/app/employee-module/model/employeeresult.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/employee-module/model/employeeresult.ts ***!
          \*********************************************************/
        /*! exports provided: EmployeeResult */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeResult", function () { return EmployeeResult; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EmployeeResult = /** @class */ (function () {
                function EmployeeResult(id, empId, topicId, empName, topicName, score, correct, wrong, attempts) {
                    this.id = id;
                    this.empId = empId;
                    this.topicId = topicId;
                    this.empName = empName;
                    this.topicName = topicName;
                    this.score = score;
                    this.correct = correct;
                    this.wrong = wrong;
                    this.attempts = attempts;
                }
                return EmployeeResult;
            }());
            /***/ 
        }),
        /***/ "./src/app/employee-module/model/result.ts": 
        /*!*************************************************!*\
          !*** ./src/app/employee-module/model/result.ts ***!
          \*************************************************/
        /*! exports provided: result */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function () { return result; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var result = /** @class */ (function () {
                function result(id, option, correctOption, userResponse) {
                    this.id = id;
                    this.option = option;
                    this.correctOption = correctOption;
                    this.userResponse = userResponse;
                }
                return result;
            }());
            /***/ 
        }),
        /***/ "./src/app/employee-module/model/testResult.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/employee-module/model/testResult.ts ***!
          \*****************************************************/
        /*! exports provided: testResult */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testResult", function () { return testResult; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var testResult = /** @class */ (function () {
                function testResult(employeeId, testId, testResponses, correct, incorrect, score, percentage) {
                    this.employeeId = employeeId;
                    this.testId = testId;
                    this.testResponses = testResponses;
                    this.correct = correct;
                    this.incorrect = incorrect;
                    this.score = score;
                    this.percentage = percentage;
                }
                return testResult;
            }());
            /***/ 
        }),
        /***/ "./src/app/employee-module/result-page/result-page.component.css": 
        /*!***********************************************************************!*\
          !*** ./src/app/employee-module/result-page/result-page.component.css ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLW1vZHVsZS9yZXN1bHQtcGFnZS9yZXN1bHQtcGFnZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/result-page/result-page.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/employee-module/result-page/result-page.component.ts ***!
          \**********************************************************************/
        /*! exports provided: ResultPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function () { return ResultPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ResultPageComponent = /** @class */ (function () {
                function ResultPageComponent() {
                }
                ResultPageComponent.prototype.ngOnInit = function () {
                };
                return ResultPageComponent;
            }());
            ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-result-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/result-page/result-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result-page.component.css */ "./src/app/employee-module/result-page/result-page.component.css")).default]
                })
            ], ResultPageComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/dash.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/employee-module/service/dash.service.ts ***!
          \*********************************************************/
        /*! exports provided: DashService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashService", function () { return DashService; });
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
            var DashService = /** @class */ (function () {
                function DashService(httpClient) {
                    this.httpClient = httpClient;
                }
                DashService.prototype.getDetails = function () {
                    console.log("test call");
                    return this.httpClient.get("http://172.23.234.85:8093/employee/dashboard/");
                };
                return DashService;
            }());
            DashService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DashService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/dashboard.service.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/employee-module/service/dashboard.service.ts ***!
          \**************************************************************/
        /*! exports provided: DashboardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function () { return DashboardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var DashboardService = /** @class */ (function () {
                function DashboardService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix + '/dashboard';
                }
                DashboardService.prototype.getEmpDetails = function (email) {
                    return this.http.get(this.URLprefix + '?email=' + email);
                };
                DashboardService.prototype.getActiveTests = function (userId) {
                    return this.http.get(this.URLprefix + '/active/e?email=' + userId);
                };
                DashboardService.prototype.getCompleteTests = function (userId) {
                    return this.http.get(this.URLprefix + '/complete/e?email=' + userId);
                };
                return DashboardService;
            }());
            DashboardService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DashboardService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/data.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/employee-module/service/data.service.ts ***!
          \*********************************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            // import { topic } from '../models/topic';
            // import { score } from '../models/score';
            var DataService = /** @class */ (function () {
                function DataService() {
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
                DataService.prototype.changeUser = function (user) {
                    this.messageSource.next(user);
                };
                DataService.prototype.changeTopic = function (topic) {
                    this.defaultTopic.next(topic);
                };
                DataService.prototype.changeScore = function (newScore) {
                    this.defaultCorrect.next(newScore.correct);
                    this.defaultIncorrect.next(newScore.incorrect);
                };
                DataService.prototype.getTestUserDetails = function () {
                    return this.testUserDetails;
                };
                DataService.prototype.setTestUserDetails = function (ud) {
                    this.testUserDetails = ud;
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/fetch-test.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/employee-module/service/fetch-test.service.ts ***!
          \***************************************************************/
        /*! exports provided: FetchTestService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTestService", function () { return FetchTestService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var FetchTestService = /** @class */ (function () {
                function FetchTestService(http) {
                    this.http = http;
                    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
                    this.topic = "java";
                }
                FetchTestService.prototype.getQuestions = function (topic) {
                    console.log("here");
                    return this.http.get(this.url + '/questions');
                };
                return FetchTestService;
            }());
            FetchTestService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            FetchTestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FetchTestService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/score.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/employee-module/service/score.service.ts ***!
          \**********************************************************/
        /*! exports provided: ScoreService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function () { return ScoreService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var ScoreService = /** @class */ (function () {
                function ScoreService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
                    this.url = 'http://localhost:8083/quiz/test/submit';
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                    this.count = 0;
                }
                ScoreService.prototype.postScore = function (c, i) {
                    var scoreJSON = {
                        correct: c,
                        incorrect: i
                    };
                    return this.http.post(this.URLprefix + '/questions', scoreJSON, this.httpOptions);
                };
                ScoreService.prototype.postScore2 = function (testResult) {
                    return this.http.post(this.url, testResult);
                };
                ScoreService.prototype.calculateCorrectAnswers = function (resultList) {
                    for (var i = 0; i < resultList.length; i++) {
                        if (resultList[i].userResponse) {
                            this.count = this.count + 1;
                        }
                    }
                    return this.count;
                };
                ScoreService.prototype.calculateScore = function (resultList, questionList) {
                    var score = 0;
                    for (var i = 0; i < resultList.length; i++) {
                        if (resultList[i].userResponse) {
                            for (var j = 0; j < questionList.length; j++) {
                                if (questionList[j].id == resultList[i].id) {
                                    score = score + questionList[j].weight;
                                }
                            }
                        }
                    }
                    return score;
                };
                ScoreService.prototype.calculatePercentage = function (score, questionList) {
                    var maxScore = 0;
                    var percentage;
                    for (var i = 0; i < questionList.length; i++) {
                        maxScore = maxScore + questionList[i].weight;
                    }
                    console.log("max score is ", maxScore);
                    percentage = (score / maxScore) * 100;
                    return percentage;
                };
                return ScoreService;
            }());
            ScoreService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ScoreService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/topic.service.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/employee-module/service/topic.service.ts ***!
          \**********************************************************/
        /*! exports provided: TopicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function () { return TopicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var TopicService = /** @class */ (function () {
                function TopicService(http) {
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
                TopicService.prototype.getQuestions = function (topic) {
                    return this.http.get(this.URLprefix + '/questions');
                };
                return TopicService;
            }());
            TopicService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TopicService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/service/user.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/employee-module/service/user.service.ts ***!
          \*********************************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
                }
                UserService.prototype.getusers = function () {
                    return this.http.get(this.URLprefix + '/topics');
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/employee-module/test-ins/test-ins.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/employee-module/test-ins/test-ins.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-display-1 {\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n\n.mat-list {\n    margin-left: 20px;\n}\n\n/* .mat-raised-button {\n    margin-left: 600px;\n    margin-top: 50px;\n} */\n\n.mi {\n    border-style: double;\n    border: block width 10px;\n}\n\n.spacing-top {\n    margin-top: 50px;\n    font-size: 42px;\n}\n\n.spacing-bottom {\n    margin-bottom: 50px;\n}\n\nh1 {\n    font-size: 6.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3Rlc3QtaW5zL3Rlc3QtaW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTs7O0dBR0c7O0FBRUg7SUFDSSxvQkFBb0I7SUFDcEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvdGVzdC1pbnMvdGVzdC1pbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlzcGxheS0xIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNTMwcHg7XG59XG5cbi5tYXQtbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cblxuLyogLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn0gKi9cblxuLm1pIHtcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgICBib3JkZXI6IGJsb2NrIHdpZHRoIDEwcHg7XG59XG5cbi5zcGFjaW5nLXRvcCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IDQycHg7XG59XG5cbi5zcGFjaW5nLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNi41cmVtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/test-ins/test-ins.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/employee-module/test-ins/test-ins.component.ts ***!
          \****************************************************************/
        /*! exports provided: TestInsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestInsComponent", function () { return TestInsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/employee-module/service/data.service.ts");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TestInsComponent = /** @class */ (function () {
                function TestInsComponent(dataService, http) {
                    this.dataService = dataService;
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].employeeURLprefix;
                }
                TestInsComponent.prototype.ngOnInit = function () {
                };
                TestInsComponent.prototype.onStartTest = function () {
                    var userData = this.dataService.getTestUserDetails();
                    console.log(userData);
                    // this.http.post(this.URLprefix+'/instructions',{"collectionName":userData.topicName,"empId":userData.userId,"empName":userData.userName})
                };
                return TestInsComponent;
            }());
            TestInsComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            TestInsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-test-ins',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-ins.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-ins/test-ins.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-ins.component.css */ "./src/app/employee-module/test-ins/test-ins.component.css")).default]
                })
            ], TestInsComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/test-page/test-page.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/employee-module/test-page/test-page.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".questionOptions {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n  }\n  #questionLabel{\n      width: 85%;\n      text-align: left;\n  }\n  .questionBtn {\n    margin: 5px;\n  }\n  .questionField{\n      width: 65%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3Rlc3QtcGFnZS90ZXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUNBO01BQ0ksVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7TUFDSSxVQUFVO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uT3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gICNxdWVzdGlvbkxhYmVse1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnF1ZXN0aW9uQnRuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAucXVlc3Rpb25GaWVsZHtcbiAgICAgIHdpZHRoOiA2NSU7XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/test-page/test-page.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/employee-module/test-page/test-page.component.ts ***!
          \******************************************************************/
        /*! exports provided: TestPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function () { return TestPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/employee-module/service/data.service.ts");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/employee-module/service/topic.service.ts");
            /* harmony import */ var _service_score_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/score.service */ "./src/app/employee-module/service/score.service.ts");
            var TestPageComponent = /** @class */ (function () {
                function TestPageComponent(data, s, r, score) {
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
                TestPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.data.userName.subscribe(function (data) {
                        //if user is not logged on, they cannot access this page
                        if (data === '') {
                            // this.r.navigate(['/error']);
                        }
                    });
                    this.subscription = this.data.topicSelected.subscribe(function (message) {
                        _this.topic = message;
                    });
                    this.s.getQuestions(this.topic).subscribe(function (data) { _this.questionList = data[1].questions; console.log(data[0].questions); });
                    console.log(this.questionList);
                };
                TestPageComponent.prototype.ngOnDestroy = function () {
                    // this.subscription.unsubscribe();
                };
                TestPageComponent.prototype.submitQuiz = function () {
                    //Edge case for submitting the quiz early
                    if (this.answerChoices.length < 5) {
                        for (var i = this.answerChoices.length; i < 5; i++) {
                            this.answerChoices.push(0);
                        }
                    }
                    //Counts the number of correct and incorrect questions
                    for (var i = 0; i < this.questionList.length; i++) {
                        if (this.questionList[i].answer === this.answerChoices[i]) {
                            this.correct += 1;
                        }
                        else {
                            this.incorrect += 1;
                        }
                    }
                    //Posts score json
                    this.score.postScore(this.correct, this.incorrect).subscribe();
                    var scoreObj = {
                        correct: this.correct,
                        incorrect: this.incorrect
                    };
                    this.data.changeScore(scoreObj);
                    this.r.navigate(['/thankyou']);
                };
                return TestPageComponent;
            }());
            TestPageComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_score_service__WEBPACK_IMPORTED_MODULE_5__["ScoreService"] }
            ]; };
            TestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-test-page-component',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/test-page/test-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-page.component.css */ "./src/app/employee-module/test-page/test-page.component.css")).default]
                })
            ], TestPageComponent);
            /***/ 
        }),
        /***/ "./src/app/employee-module/thankyou/thankyou.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/employee-module/thankyou/thankyou.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".thankyouContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbW9kdWxlL3RoYW5reW91L3RoYW5reW91LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1tb2R1bGUvdGhhbmt5b3UvdGhhbmt5b3UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFua3lvdUNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/employee-module/thankyou/thankyou.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/employee-module/thankyou/thankyou.component.ts ***!
          \****************************************************************/
        /*! exports provided: ThankyouComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function () { return ThankyouComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ThankyouComponent = /** @class */ (function () {
                function ThankyouComponent() {
                }
                ThankyouComponent.prototype.ngOnInit = function () {
                };
                return ThankyouComponent;
            }());
            ThankyouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-thankyou',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thankyou.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-module/thankyou/thankyou.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thankyou.component.css */ "./src/app/employee-module/thankyou/thankyou.component.css")).default]
                })
            ], ThankyouComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/footer/footer.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer {\n    position: relative;\n    bottom: -40px;\n    height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spacing-l-20 {\n    margin-left: 20px;\n}\n\n.v-center {\n    vertical-align: -5px;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjaW5nLWwtMjAge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udi1jZW50ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiAtNXB4O1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication-module/service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(location, router, ts) {
                    this.location = location;
                    this.router = router;
                    this.ts = ts;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this.loggedInUser = sessionStorage.getItem('username');
                };
                HeaderComponent.prototype.cancel = function () {
                    this.location.back(); // <-- go back to previous location on cancel
                };
                HeaderComponent.prototype.logout = function () {
                    this.ts.success("Logged out Sucessfully", "Logged Out");
                    this.router.navigate(['/auth/logout']);
                };
                HeaderComponent.prototype.gotoAccount = function () {
                    this.router.navigate(['/auth/details']);
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/app-routing.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/hr-module/app-routing.module.ts ***!
          \*************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/hr-module/employee/employee.component.ts");
            /* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/hr-module/confirm/confirm.component.ts");
            /* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/hr-module/topic/topic.component.ts");
            /* harmony import */ var _authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication-module/service/role-guard.service */ "./src/app/authentication-module/service/role-guard.service.ts");
            /* harmony import */ var _thankyou_hr_thankyou_hr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thankyou-hr/thankyou-hr.component */ "./src/app/hr-module/thankyou-hr/thankyou-hr.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/hr-module/dashboard/dashboard.component.ts");
            /* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/hr-module/createuser/createuser.component.ts");
            var routes = [
                { path: 'hr', children: [
                        { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], pathMatch: 'full' },
                        { path: 'main', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__["TopicComponent"], pathMatch: 'full' },
                        { path: 'create-user', component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_9__["CreateuserComponent"] },
                        { path: 'create', component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_5__["TopicComponent"] },
                        { path: 'employees', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"] },
                        { path: 'confirm', component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"] },
                        { path: 'finished', component: _thankyou_hr_thankyou_hr_component__WEBPACK_IMPORTED_MODULE_7__["ThankyouHrComponent"] }
                    ], canActivate: [_authentication_module_service_role_guard_service__WEBPACK_IMPORTED_MODULE_6__["RoleGuardService"]], data: { role: 'HRM' } },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/hr-module/app.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/hr-module/app.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS9hcHAuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/app.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/hr-module/app.component.ts ***!
          \********************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'hrfrontend';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/hr-module/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/confirm/confirm.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/hr-module/confirm/confirm.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-display-1 {\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n\n.mat-subheader {\n    margin-top: 100px;\n    margin-left: 530px;\n}\n\n#io {\n    margin-top: 20px;\n}\n\n.mat-list {\n    margin-left: 20px;\n}\n\n.mat-raised-button {\n    margin-left: 50px;\n    margin-top: 50px;\n}\n\n.spacing-top {\n    margin-top: 50px\n}\n\n.spacing-bottom {\n    margin-bottom: 500px;\n}\n\n.card {\n    padding: 10px;\n}\n\n.row {\n    padding: 2px\n}\n\nbody {\n    font-size: 2rem;\n}\n\nul {\n    list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9oci1tb2R1bGUvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpc3BsYXktMSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xufVxuXG4ubWF0LXN1YmhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xufVxuXG4jaW8ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNwYWNpbmctdG9wIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4XG59XG5cbi5zcGFjaW5nLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTAwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgICBwYWRkaW5nOiAycHhcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/confirm/confirm.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/hr-module/confirm/confirm.component.ts ***!
          \********************************************************/
        /*! exports provided: ConfirmComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () { return ConfirmComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_confirm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/confirm.service */ "./src/app/hr-module/service/confirm.service.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication-module/service/toaster-service.service */ "./src/app/authentication-module/service/toaster-service.service.ts");
            /* harmony import */ var _model_testUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/testUser */ "./src/app/hr-module/model/testUser.ts");
            var ConfirmComponent = /** @class */ (function () {
                function ConfirmComponent(confirmService, dataService, router, ts) {
                    this.confirmService = confirmService;
                    this.dataService = dataService;
                    this.router = router;
                    this.ts = ts;
                    this.testMapping = {};
                }
                ConfirmComponent.prototype.ngOnInit = function () {
                    this.test = this.dataService.getSelectedTest();
                    this.employees = this.dataService.getSelectedEmployees();
                };
                // confirmMapping(){
                //   this.testMapping.testName = this.test.name;
                //   this.testMapping.createdAt = new Date();
                //   const date7daysfromnow = new Date();
                //   date7daysfromnow.setDate(date7daysfromnow.getDate() + 7);
                //   this.testMapping.expiresAt = date7daysfromnow;
                //   this.testMapping.topicId = this.test.id;
                //   this.testMapping.users = []
                //   this.employees.forEach((v,k)=>this.testMapping.users.push({id:v.id,status:"N"}))
                //   console.log(this.testMapping)
                //   this.confirmService.postTestMapping(this.testMapping).subscribe(
                //     response => {
                //     console.log(response)
                //     this.router.navigate(["/hr/finished"])
                //     this.ts.success("Test Created","The Employees have been sent details about the test")
                //     });
                // }
                ConfirmComponent.prototype.restart = function () {
                    this.dataService.clearSelectedEmployees();
                    this.dataService.clearSelectedTest();
                    this.router.navigate(['/hr']);
                };
                ConfirmComponent.prototype.confirmMapping = function () {
                    var _this = this;
                    this.employees.forEach(function (user) {
                        _this.mappingList.push(new _model_testUser__WEBPACK_IMPORTED_MODULE_6__["TestUser"](user.id, user.name, user.email, _this.test.id, _this.test.name, new Date(), "N"));
                    });
                    console.log(this.mappingList);
                    this.confirmService.postTestMapping(this.mappingList).subscribe(function (response) {
                        console.log(response);
                        _this.router.navigate(["/hr/finished"]);
                        _this.ts.success("Test Created", "The Employees have been sent details about the test");
                    }, function (error) {
                        console.log(error);
                        _this.router.navigate(["/hr/finished"]);
                        _this.ts.success("Test Created", "The Employees have been sent details about the test");
                    });
                };
                return ConfirmComponent;
            }());
            ConfirmComponent.ctorParameters = function () { return [
                { type: _service_confirm_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmService"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_authentication_module_service_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }
            ]; };
            ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-confirm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/confirm/confirm.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.component.css */ "./src/app/hr-module/confirm/confirm.component.css")).default]
                })
            ], ConfirmComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/create-modal/create-modal.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/hr-module/create-modal/create-modal.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS9jcmVhdGUtbW9kYWwvY3JlYXRlLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/create-modal/create-modal.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/hr-module/create-modal/create-modal.component.ts ***!
          \******************************************************************/
        /*! exports provided: CreateModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModalComponent", function () { return CreateModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var CreateModalComponent = /** @class */ (function () {
                function CreateModalComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                CreateModalComponent.prototype.ngOnInit = function () {
                };
                CreateModalComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                CreateModalComponent.prototype.onSubmit = function () {
                    this.dialogRef.close();
                };
                return CreateModalComponent;
            }());
            CreateModalComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            CreateModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-create-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/create-modal/create-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-modal.component.css */ "./src/app/hr-module/create-modal/create-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], CreateModalComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/createuser/createuser.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/hr-module/createuser/createuser.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS9jcmVhdGV1c2VyL2NyZWF0ZXVzZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/createuser/createuser.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/hr-module/createuser/createuser.component.ts ***!
          \**************************************************************/
        /*! exports provided: CreateuserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function () { return CreateuserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_createuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/createuser.service */ "./src/app/hr-module/service/createuser.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-modal/create-modal.component */ "./src/app/hr-module/create-modal/create-modal.component.ts");
            var CreateuserComponent = /** @class */ (function () {
                function CreateuserComponent(router, createUserService, fb, dialog) {
                    this.router = router;
                    this.createUserService = createUserService;
                    this.fb = fb;
                    this.dialog = dialog;
                    this.detailsForm = fb.group({
                        "name": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "phone": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "email": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        "designation": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                    });
                }
                CreateuserComponent.prototype.ngOnInit = function () {
                    this.generateUserAndPass();
                };
                CreateuserComponent.prototype.openDialog = function (userDetails) {
                    var _this = this;
                    this.generateUserAndPass();
                    this.loginForm = this.fb.group({
                        "username": this.generatedUsername,
                        "password": this.generatedPassword,
                        "email": userDetails.email
                    });
                    var dialogRef = this.dialog.open(_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_6__["CreateModalComponent"], {
                        width: '450px',
                        data: { form: this.loginForm },
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result == undefined) {
                            console.log('-------');
                        }
                        userDetails.role = 'EMP';
                        result.role = 'EMP';
                        _this.createUserService.saveUserInMongo(userDetails).subscribe(function (res) { return console.log(res); });
                        _this.createUserService.saveUserInMysql(result).subscribe(function (res) { return console.log(res); });
                    });
                };
                CreateuserComponent.prototype.generateUserAndPass = function () {
                    var _this = this;
                    this.createUserService.generateRandomUserAndPass().subscribe(function (response) { }, //do nothing
                    //do nothing
                    function (//do nothing
                    error) {
                        _this.generatedUsername = error.error.text.split(',')[0];
                        _this.generatedPassword = error.error.text.split(',')[1];
                    });
                };
                return CreateuserComponent;
            }());
            CreateuserComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_createuser_service__WEBPACK_IMPORTED_MODULE_3__["CreateuserService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            CreateuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-createuser',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createuser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/createuser/createuser.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createuser.component.css */ "./src/app/hr-module/createuser/createuser.component.css")).default]
                })
            ], CreateuserComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/dashboard/dashboard.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/hr-module/dashboard/dashboard.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/dashboard/dashboard.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/hr-module/dashboard/dashboard.component.ts ***!
          \************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/hr-module/service/topic.service.ts");
            /* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/employee.service */ "./src/app/hr-module/service/employee.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _request_modal_request_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../request-modal/request-modal.component */ "./src/app/hr-module/request-modal/request-modal.component.ts");
            /* harmony import */ var _service_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/request.service */ "./src/app/hr-module/service/request.service.ts");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(topicService, employeeService, requestService, fb, dialog) {
                    this.topicService = topicService;
                    this.employeeService = employeeService;
                    this.requestService = requestService;
                    this.fb = fb;
                    this.dialog = dialog;
                    this.topicDisplayedColumns = ['name', 'createdAt', 'link', 'keywords'];
                    this.employeeDisplayedColumns = ['name', 'phone', 'email'];
                    this.paginators = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.topicService.getAllTopics().subscribe(function (response) {
                        _this.topicDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.topicDataSource.paginator = _this.paginators.toArray()[0];
                    });
                    this.employeeService.getAllEmployees().subscribe(function (response) {
                        _this.employeeDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
                        _this.employeeDataSource.paginator = _this.paginators.toArray()[1];
                    });
                };
                DashboardComponent.prototype.openDialog = function () {
                    var _this = this;
                    this.requestForm = this.fb.group({
                        'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        'value': 100
                    });
                    var dialogRef = this.dialog.open(_request_modal_request_modal_component__WEBPACK_IMPORTED_MODULE_8__["RequestModalComponent"], {
                        width: '550px',
                        data: { requestForm: this.requestForm },
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result == undefined) {
                            console.log('-------');
                        }
                        result.status = 'N';
                        _this.requestService.addRequest(result.message).subscribe(function (response) { console.log(response); }, function (error) { console.log(error); });
                    });
                };
                DashboardComponent.prototype.ngAfterViewInit = function () {
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"] },
                { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
                { type: _service_request_service__WEBPACK_IMPORTED_MODULE_9__["RequestService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
            ], DashboardComponent.prototype, "paginators", void 0);
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/hr-module/dashboard/dashboard.component.css")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/employee/employee.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/hr-module/employee/employee.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-display-1 {\n    align-self: center;\n    margin-top: 50px;\n    margin-left: 530px;\n}\n\n.emp {\n    margin-top: 10px;\n    margin-left: 10px;\n    /* background: #fbfbfb; */\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.li {\n    margin-left: 10px;\n}\n\n.mat-raised-button {\n    margin-left: 50px;\n    margin-top: 50px;\n}\n\n.spacing-top {\n    margin-top: 50px\n}\n\n.spacing-bottom {\n    margin-bottom: 50px;\n}\n\n.mat-checkbox {\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.grey-color {\n    background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkVBQTZFO0FBQ2pGOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaHItbW9kdWxlL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpc3BsYXktMSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUzMHB4O1xufVxuXG4uZW1wIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8qIGJhY2tncm91bmQ6ICNmYmZiZmI7ICovXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG59XG5cbi5saSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNwYWNpbmctdG9wIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4XG59XG5cbi5zcGFjaW5nLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG59XG5cbi5ncmV5LWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/employee/employee.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/hr-module/employee/employee.component.ts ***!
          \**********************************************************/
        /*! exports provided: EmployeeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () { return EmployeeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/employee.service */ "./src/app/hr-module/service/employee.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");
            var EmployeeComponent = /** @class */ (function () {
                function EmployeeComponent(employeeService, dataService, router, formBuilder) {
                    this.employeeService = employeeService;
                    this.dataService = dataService;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.isLoading = true;
                    this.form = this.formBuilder.group({
                        employees: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
                    });
                }
                EmployeeComponent.prototype.ngOnInit = function () {
                    this.getAllEmployeesList();
                };
                EmployeeComponent.prototype.getAllEmployeesList = function () {
                    var _this = this;
                    this.employeeService.getAllEmployees().subscribe(function (response) {
                        console.log(response);
                        _this.employees = response;
                        _this.isLoading = false;
                        _this.addCheckBoxesToEmp();
                    });
                };
                EmployeeComponent.prototype.addCheckBoxesToEmp = function () {
                    var _this = this;
                    this.employees.forEach(function (o, i) {
                        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
                        _this.form.controls.employees.push(control);
                    });
                };
                EmployeeComponent.prototype.submit = function () {
                    var _this = this;
                    var selectedEmp = this.form.value.employees
                        .map(function (v, i) { return v ? _this.employees[i] : null; })
                        .filter(function (v) { return v !== null; });
                    console.log(selectedEmp);
                    this.dataService.setSelectedEmployees(selectedEmp);
                    this.router.navigate(['/hr/confirm']);
                };
                return EmployeeComponent;
            }());
            EmployeeComponent.ctorParameters = function () { return [
                { type: _service_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
            ]; };
            EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-employee',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/employee/employee.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee.component.css */ "./src/app/hr-module/employee/employee.component.css")).default]
                })
            ], EmployeeComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/hr.module.ts": 
        /*!****************************************!*\
          !*** ./src/app/hr-module/hr.module.ts ***!
          \****************************************/
        /*! exports provided: HrModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function () { return HrModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/hr-module/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/hr-module/app.component.ts");
            /* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/hr-module/employee/employee.component.ts");
            /* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/hr-module/confirm/confirm.component.ts");
            /* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/hr-module/topic/topic.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/topic.service */ "./src/app/hr-module/service/topic.service.ts");
            /* harmony import */ var _service_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/employee.service */ "./src/app/hr-module/service/employee.service.ts");
            /* harmony import */ var _service_confirm_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/confirm.service */ "./src/app/hr-module/service/confirm.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _thankyou_hr_thankyou_hr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./thankyou-hr/thankyou-hr.component */ "./src/app/hr-module/thankyou-hr/thankyou-hr.component.ts");
            /* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/hr-module/dashboard/dashboard.component.ts");
            /* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/hr-module/createuser/createuser.component.ts");
            /* harmony import */ var _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-modal/create-modal.component */ "./src/app/hr-module/create-modal/create-modal.component.ts");
            /* harmony import */ var _request_modal_request_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./request-modal/request-modal.component */ "./src/app/hr-module/request-modal/request-modal.component.ts");
            var HrModule = /** @class */ (function () {
                function HrModule() {
                }
                return HrModule;
            }());
            HrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
                        _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"],
                        _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"],
                        _thankyou_hr_thankyou_hr_component__WEBPACK_IMPORTED_MODULE_14__["ThankyouHrComponent"],
                        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                        _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_16__["CreateuserComponent"],
                        _create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateModalComponent"],
                        _request_modal_request_modal_component__WEBPACK_IMPORTED_MODULE_18__["RequestModalComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                    ],
                    entryComponents: [_create_modal_create_modal_component__WEBPACK_IMPORTED_MODULE_17__["CreateModalComponent"], _request_modal_request_modal_component__WEBPACK_IMPORTED_MODULE_18__["RequestModalComponent"]],
                    providers: [_service_topic_service__WEBPACK_IMPORTED_MODULE_9__["TopicService"], _service_employee_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeService"], _service_confirm_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], HrModule);
            /***/ 
        }),
        /***/ "./src/app/hr-module/model/testUser.ts": 
        /*!*********************************************!*\
          !*** ./src/app/hr-module/model/testUser.ts ***!
          \*********************************************/
        /*! exports provided: TestUser */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestUser", function () { return TestUser; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TestUser = /** @class */ (function () {
                function TestUser(ui, un, ue, ti, tn, ca, s) {
                    this.userId = ui;
                    this.userName = un;
                    this.userEmail = ue;
                    this.topicId = ti;
                    this.topicName = tn;
                    this.createdAt = ca;
                    this.status = s;
                }
                return TestUser;
            }());
            /***/ 
        }),
        /***/ "./src/app/hr-module/request-modal/request-modal.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/hr-module/request-modal/request-modal.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.example-full-width {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL3JlcXVlc3QtbW9kYWwvcmVxdWVzdC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9oci1tb2R1bGUvcmVxdWVzdC1tb2RhbC9yZXF1ZXN0LW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/request-modal/request-modal.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/hr-module/request-modal/request-modal.component.ts ***!
          \********************************************************************/
        /*! exports provided: RequestModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModalComponent", function () { return RequestModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var RequestModalComponent = /** @class */ (function () {
                function RequestModalComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                }
                RequestModalComponent.prototype.ngOnInit = function () {
                    console.log(this.data);
                };
                RequestModalComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                RequestModalComponent.prototype.onSubmit = function () {
                    this.dialogRef.close();
                };
                return RequestModalComponent;
            }());
            RequestModalComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            RequestModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-request-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./request-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/request-modal/request-modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./request-modal.component.css */ "./src/app/hr-module/request-modal/request-modal.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], RequestModalComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/confirm.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/hr-module/service/confirm.service.ts ***!
          \******************************************************/
        /*! exports provided: ConfirmService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmService", function () { return ConfirmService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ConfirmService = /** @class */ (function () {
                function ConfirmService(http) {
                    this.http = http;
                    this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                ConfirmService.prototype.postTestMapping = function (testMapping) {
                    return this.http.post(this.URLprefix + "/assign", testMapping);
                };
                return ConfirmService;
            }());
            ConfirmService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            ConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConfirmService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/createuser.service.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/hr-module/service/createuser.service.ts ***!
          \*********************************************************/
        /*! exports provided: CreateuserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserService", function () { return CreateuserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CreateuserService = /** @class */ (function () {
                function CreateuserService(http) {
                    this.http = http;
                    this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                CreateuserService.prototype.postemployeedetails = function (employee) {
                    return this.http.post(this.URLprefix + "/employeedetails", employee);
                };
                CreateuserService.prototype.generateRandomUserAndPass = function () {
                    return this.http.get(this.URLprefix + "/users/generate");
                };
                CreateuserService.prototype.saveUserInMongo = function (employee) {
                    return this.http.post(this.URLprefix + "/users", employee);
                };
                CreateuserService.prototype.saveUserInMysql = function (employee) {
                    return this.http.post(this.URLprefix + "/users/m", employee);
                };
                return CreateuserService;
            }());
            CreateuserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            CreateuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CreateuserService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/data.service.ts": 
        /*!***************************************************!*\
          !*** ./src/app/hr-module/service/data.service.ts ***!
          \***************************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                }
                DataService.prototype.setSelectedTest = function (test) {
                    this.selectedTest = test;
                };
                DataService.prototype.getSelectedTest = function () {
                    return this.selectedTest;
                };
                DataService.prototype.clearSelectedTest = function () {
                    this.selectedTest = undefined;
                };
                DataService.prototype.setSelectedEmployees = function (employees) {
                    this.selectedEmployees = employees;
                };
                DataService.prototype.getSelectedEmployees = function () {
                    return this.selectedEmployees;
                };
                DataService.prototype.clearSelectedEmployees = function () {
                    this.selectedEmployees = undefined;
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/employee.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/hr-module/service/employee.service.ts ***!
          \*******************************************************/
        /*! exports provided: EmployeeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function () { return EmployeeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var EmployeeService = /** @class */ (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].HrURLprefix;
                }
                EmployeeService.prototype.getAllEmployees = function () {
                    return this.http.get(this.URLprefix + "/users");
                };
                return EmployeeService;
            }());
            EmployeeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], EmployeeService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/request.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/hr-module/service/request.service.ts ***!
          \******************************************************/
        /*! exports provided: RequestService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function () { return RequestService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var RequestService = /** @class */ (function () {
                function RequestService(http) {
                    this.http = http;
                    this.URLprefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HrURLprefix;
                }
                RequestService.prototype.getAllRequests = function () {
                    return this.http.get(this.URLprefix + '/request');
                };
                RequestService.prototype.getRequestById = function (id) {
                    return this.http.get(this.URLprefix + '/request/' + id);
                };
                RequestService.prototype.addRequest = function (request) {
                    return this.http.post(this.URLprefix + '/request', request);
                };
                RequestService.prototype.deleteRequest = function (request) {
                    return this.http.delete(this.URLprefix + '/request', request);
                };
                return RequestService;
            }());
            RequestService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RequestService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/service/topic.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/hr-module/service/topic.service.ts ***!
          \****************************************************/
        /*! exports provided: TopicService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function () { return TopicService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
            var TopicService = /** @class */ (function () {
                function TopicService(http) {
                    this.http = http;
                    this.URLprefix = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].HrURLprefix;
                }
                TopicService.prototype.getAllTopics = function () {
                    return this.http.get(this.URLprefix + "/topics");
                };
                return TopicService;
            }());
            TopicService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TopicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TopicService);
            /***/ 
        }),
        /***/ "./src/app/hr-module/thankyou-hr/thankyou-hr.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/hr-module/thankyou-hr/thankyou-hr.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".hrContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL3RoYW5reW91LWhyL3RoYW5reW91LWhyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9oci1tb2R1bGUvdGhhbmt5b3UtaHIvdGhhbmt5b3UtaHIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ockNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/thankyou-hr/thankyou-hr.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/hr-module/thankyou-hr/thankyou-hr.component.ts ***!
          \****************************************************************/
        /*! exports provided: ThankyouHrComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouHrComponent", function () { return ThankyouHrComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ThankyouHrComponent = /** @class */ (function () {
                function ThankyouHrComponent() {
                }
                ThankyouHrComponent.prototype.ngOnInit = function () {
                };
                return ThankyouHrComponent;
            }());
            ThankyouHrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-thankyou-hr',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thankyou-hr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/thankyou-hr/thankyou-hr.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thankyou-hr.component.css */ "./src/app/hr-module/thankyou-hr/thankyou-hr.component.css")).default]
                })
            ], ThankyouHrComponent);
            /***/ 
        }),
        /***/ "./src/app/hr-module/topic/topic.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/hr-module/topic/topic.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spacing-top {\n    margin-top: 50px\n}\n\n.spacing-bottom {\n    margin-top: 200px\n}\n\n.big-text {\n    font-size: 3rem;\n}\n\n.col-md-3 {\n    padding: 0px;\n    margin: auto;\n}\n\n.card-body {\n    margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHItbW9kdWxlL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hyLW1vZHVsZS90b3BpYy90b3BpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNpbmctdG9wIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4XG59XG5cbi5zcGFjaW5nLWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMjAwcHhcbn1cblxuLmJpZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi5jb2wtbWQtMyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/hr-module/topic/topic.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/hr-module/topic/topic.component.ts ***!
          \****************************************************/
        /*! exports provided: TopicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function () { return TopicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/topic.service */ "./src/app/hr-module/service/topic.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/hr-module/service/data.service.ts");
            var TopicComponent = /** @class */ (function () {
                function TopicComponent(topicService, router, dataService, formBuilder) {
                    this.topicService = topicService;
                    this.router = router;
                    this.dataService = dataService;
                    this.formBuilder = formBuilder;
                    this.isLoading = true;
                    this.form = this.formBuilder.group({
                        topics: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
                    });
                }
                TopicComponent.prototype.ngOnInit = function () {
                    this.getAllTopics();
                };
                TopicComponent.prototype.getAllTopics = function () {
                    var _this = this;
                    this.topicService.getAllTopics().subscribe(function (response) {
                        console.log(response);
                        _this.topics = response;
                        _this.isLoading = false;
                        _this.addCheckBoxesToTopics();
                    });
                };
                TopicComponent.prototype.addCheckBoxesToTopics = function () {
                    var _this = this;
                    this.topics.forEach(function (o, i) {
                        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](i === 0); // if first item set to true, else false
                        _this.form.controls.topics.push(control);
                    });
                };
                TopicComponent.prototype.goToEmployeeSelection = function () {
                    var _this = this;
                    //get the first '[0]'th topic selected
                    var selectedTopic = this.form.value.topics
                        .map(function (v, i) { return v ? _this.topics[i] : null; })
                        .filter(function (v) { return v !== null; })[0];
                    console.log(selectedTopic);
                    this.dataService.setSelectedTest(selectedTopic);
                    this.router.navigate(['/hr/employees']);
                };
                TopicComponent.prototype.selectedTopic = function (selectedTopic) {
                    // console.log(selectedTopic);
                    this.dataService.setSelectedTest(selectedTopic);
                    this.router.navigate(['/hr/employees']);
                };
                return TopicComponent;
            }());
            TopicComponent.ctorParameters = function () { return [
                { type: _service_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
            ]; };
            TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-topic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr-module/topic/topic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic.component.css */ "./src/app/hr-module/topic/topic.component.css")).default]
                })
            ], TopicComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-module/app-routing.module.ts": 
        /*!******************************************************!*\
          !*** ./src/app/landing-module/app-routing.module.ts ***!
          \******************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/landing-module/app.component.ts");
            var routes = [
                { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
                { path: 'landing', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/landing-module/app.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/landing-module/app.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\nTemplate Name: HTML Education Template\nAuthor: yaminncco\n\nColors:\n\tBody \t\t: #798696\n\tHeaders \t: #374050\n\tPrimary \t: #FF6700\n\tGrey \t\t: #EBEBEB\n\nFonts: Lato & Montserrat\n\nTable OF Contents\n------------------------------------\n1 > General\n2 > Logo\n3 > Navigation\n4 > Hero Area\n5 > About & Why Us (Feature)\n6 > Courses\n7 > Footer\n8 > Contact Page\n9 > Blog Page\n10 > Blog Page Sidebar\n11 > Single Post Page\n12 > Responsive\n13 > Preloader\n------------------------------------*/\n\n/*------------------------------------*\\\n\tGeneral\n\\*------------------------------------*/\n\n/* --- typography --- */\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n\tfont-size: 15px;\n    font-weight: 400;\n    color: #798696;\n\toverflow-x:hidden;\n}\n\nh1,h2,h3,h4,h5,h6 {\n\tmargin-top: 12px;\n\tmargin-bottom: 15px;\n\tfont-weight: 600;\n\tcolor: #374050;\n}\n\nh1 {\n\tfont-size:38px;\n}\n\nh2 {\n\tfont-size:30px;\n}\n\nh3 {\n\tfont-size:24px;\n}\n\nh4 {\n\tfont-size:18px;\n}\n\na {\n\tfont-family: 'Lato', sans-serif;\n\tcolor: #374050;\n\tfont-weight: 700;\n}\n\na:hover,\na:focus{\n    text-decoration: none;\n    outline: none;\n\tcolor: #374050;\n\topacity: 0.9;\n}\n\nul,ol{\n    margin: 0;\n    padding: 0;\n    list-style: none\n}\n\n.white-text {\n\tcolor: #FFF;\n}\n\nblockquote {\n\tposition: relative;\n\tmargin: 20px 0px;\n\tpadding: 20px 20px 20px 60px;\n\tborder-left: none;\n\tcolor: #374050;\n}\n\nblockquote:before{\n\tcontent:\"\\f10d\";\n\tfont-family:fontAwesome;\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tcolor: #FF6700;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder-radius:50%;\n\tborder:1px solid #EBEBEB;\n}\n\n/* --- Section --- */\n\n.section {\n\tposition:relative;\n\tpadding-top:80px;\n\tpadding-bottom:80px;\n}\n\n.section-hr {\n\tmargin-top:80px;\n\tmargin-bottom:80px;\n\tborder-color: #EBEBEB;\n}\n\n.section-header {\n\tmargin-bottom:40px;\n}\n\n/* --- Background Image --- */\n\n.bg-image {\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-position:center;\n\tbackground-size:cover;\n}\n\n.bg-image.bg-parallax {\n\tbackground-attachment:fixed;\n}\n\n.bg-image.overlay:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-image: linear-gradient(to bottom, #374050 0%, #798696 100%);\n\topacity: 0.7;\n}\n\n/* --- Buttons --- */\n\n.main-button {\n\tposition:relative;\n\tdisplay:inline-block;\n\tpadding:10px 30px;\n\tbackground-color: #FF6700;\n\tborder: 2px solid transparent;\n\tborder-radius: 40px;\n\tcolor: #FFF;\n\ttransition:0.2s all;\n}\n\n.main-button:hover , .main-button:focus {\n\tbackground-color:#fff;\n\tborder: 2px solid #FF6700;\n\tcolor:#FF6700;\n}\n\n.main-button.icon-button:hover , .main-button.icon-button:focus {\n\tpadding-right: 45px;\n}\n\n.main-button.icon-button:after {\n\tcontent:\"\\f178\";\n\tfont-family:FontAwesome;\n\tposition:absolute;\n\twidth: 30px;\n\tright: 15px;\n\ttext-align:center;\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.main-button.icon-button:hover:after , .main-button.icon-button:focus:after {\n\topacity:1;\n}\n\n/* --  Input  -- */\n\ninput[type=\"text\"], input[type=\"email\"], input[type=\"password\"], input[type=\"number\"], input[type=\"date\"], input[type=\"url\"], input[type=\"tel\"], textarea {\n    height: 40px;\n    width: 100%;\n    border: 1px solid #EBEBEB;\n\tborder-radius:4px;\n\tbackground: transparent;\n    padding-left: 15px;\n\tpadding-right: 15px;\n\ttransition:0.2s border-color;\n}\n\ntextarea {\n    padding: 10px 15px;\n}\n\ninput[type=\"text\"]:focus, input[type=\"email\"]:focus, input[type=\"password\"]:focus, input[type=\"number\"]:focus, input[type=\"date\"]:focus, input[type=\"url\"]:focus, input[type=\"tel\"]:focus, textarea:focus {\n\tborder-color:#FF6700;\n}\n\n/*------------------------------------*\\\n\tLogo\n\\*------------------------------------*/\n\n.navbar-brand {\n    padding: 0;\n}\n\n.navbar-brand .logo {\n\tmargin-top: 10px;\n\tdisplay: inline-block;\n}\n\n.navbar-brand .logo > img {\n\tmax-height:30px;\n}\n\n@media only screen and (max-width: 767px) {\n\t.navbar-brand {\n\t\tmargin-left:15px;\n\t}\n}\n\n/*------------------------------------*\\\n\tNavigation\n\\*------------------------------------*/\n\n#header {\n\tposition:fixed;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tz-index:99;\n\tborder-bottom:1px solid rgba(235, 235, 235, 0.25);\n\tbackground-color:#FFF;\n\ttransition:0.2s all;\n}\n\n#header.transparent-nav {\n\tposition:fixed;\n\tbackground-color: transparent;\n}\n\n#header.transparent-nav .main-menu li a {\n\tcolor:#FFF;\n}\n\n.main-menu li a {\n\ttext-transform:uppercase;\n\ttransition:0.2s all;\n}\n\n.main-menu li a:hover , .main-menu li a:focus {\n\tbackground-color:transparent;\n}\n\n.main-menu li a:after {\n\tcontent:\"\";\n\tdisplay:block;\n\theight:2px;\n\tbackground-color:#FF6700;\n\twidth:100%;\n\ttransform: translateY(5px);\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.main-menu li a:hover:after , .main-menu li a:focus:after {\n\ttransform: translateY(0px);\n\topacity:1;\n}\n\n/* -- Mobile Nav -- */\n\n@media only screen and (max-width: 767px) {\n\t#nav {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\twidth: 0%;\n\t\tmax-width:250px;\n\t\theight: 100vh;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n\t\tpadding-top: 80px;\n\t\tpadding-bottom: 40px;\n\t\ttransform: translateX(100%);\n\t\ttransition: 0.4s all cubic-bezier(.77,0,.18,1);\n\t\tz-index:9;\n\t}\n\n\t#header.nav-collapse #nav{\n\t\twidth:100%;\n\t\ttransform: translateX(0%);\n\t}\n\t\n\t.main-menu {\n\t\tmargin:0;\n\t}\n\t\n\t.main-menu li a {\n\t\tcolor: #374050 !important;\n\t\tdisplay: inline-block;\n\t\tmargin-left: 40px;\n\t}\n}\n\n/* -- Mobile Toggle Btn -- */\n\n.navbar-toggle {\n\tposition:fixed;\n\tright:0;\n\tpadding: 0;\n\theight: 40px;\n\twidth: 40px;\n\tmargin-top: 5px;\n\tz-index:99;\n}\n\n.navbar-toggle > span {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n    transform: translate(-50% , -50%);\n\ttransition: 0.2s background;\n}\n\n.navbar-toggle > span:before, .navbar-toggle > span:after {\n\tcontent: '';\n\tposition:absolute;\n\tleft:0;\n\ttransition: 0.2s transform;\n}\n\n.navbar-toggle > span , .navbar-toggle > span:before , .navbar-toggle > span:after {\n\theight: 2px;\n\twidth: 25px;\n\tbackground-color:#374050;\n}\n\n.navbar-toggle > span:before {\n\ttop: -10px;\n}\n\n.navbar-toggle > span:after {\n\ttop: 10px;\n}\n\n#header.nav-collapse .navbar-toggle > span {\n\tbackground: transparent;\n}\n\n#header.nav-collapse .navbar-toggle > span:before {\n    transform: translateY(10px) rotate(45deg);\n}\n\n#header.nav-collapse .navbar-toggle > span:after {\n    transform: translateY(-10px) rotate(-45deg);\n}\n\n/*------------------------------------*\\\n\tHero Area\n\\*------------------------------------*/\n\n.hero-area {\n\tposition:relative;\n\tpadding-top: 80px;\n\tpadding-bottom: 0px;\n}\n\n#home.hero-area {\n\theight:calc(100vh);\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n\n.home-wrapper {\n\tposition:absolute;\n\ttop:50%;\n\ttransform:translateY(-50%);\n\tleft:0;\n\tright:0;\n}\n\n/* -- Breadcrumb -- */\n\n.hero-area-tree li {\n\tdisplay:inline-block;\n\tfont-family: 'Lato', sans-serif;\n\tfont-weight:600;\n\tfont-size:14px;\n\tcolor:rgba(255, 255, 255, 0.8);\n}\n\n.hero-area-tree li > a {\n\tcolor:rgba(255, 255, 255, 0.8);\n}\n\n.hero-area-tree li + li:before {\n\tcontent: \"/\";\n\tdisplay: inline-block;\n\tmargin: 0px 5px;\n\tcolor: rgba(235, 235, 235, 0.25);\n}\n\n/*------------------------------------*\\\n\tAbout & Why Us (Feature)\n\\*------------------------------------*/\n\n/* -- Feature -- */\n\n.feature {\n\tposition:relative;\n}\n\n.feature + .feature  {\n\tmargin-top:40px;\n}\n\n.feature .feature-icon {\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\twidth:80px;\n\theight:80px;\n\tline-height:80px;\n\ttext-align:center;\n\tborder-radius: 50%;\n\tfont-size:30px;\n\tborder:1px solid #EBEBEB;\n\tcolor:#FF6700;\n}\n\n.feature-content {\n\tpadding-left:100px;\n}\n\n/* -- About Img -- */\n\n.about-img {\n\tmargin-top:40px;\n}\n\n.about-img > img {\n\twidth:100%;\n}\n\n/* -- About Video -- */\n\n.about-video {\n\tposition: relative;\n\tdisplay: block;\n\tborder-radius: 4px;\n\toverflow: hidden;\n}\n\n.about-video > img {\n\twidth:100%;\n}\n\n.about-video .play-icon {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50% , -50%);\n\twidth: 80px;\n\theight: 80px;\n\tline-height: 80px;\n\ttext-align: center;\n\tbackground: #fff;\n\tborder-radius: 50%;\n\tfont-size: 24.027px;\n\tz-index:10;\n\t-webkit-animation : 2s play-animation infinite;\n\t        animation : 2s play-animation infinite;\n\ttransition:0.2s color;\n}\n\n.about-video:hover .play-icon {\n\tcolor:#FF6700;\n}\n\n@-webkit-keyframes play-animation {\n\tfrom {\n\t\tbox-shadow : 0px 0px 0px 0px #FFF;\n\t}\n\tto {\n\t\tbox-shadow : 0px 0px 0px 10px transparent;\n\t}\n}\n\n@keyframes play-animation {\n\tfrom {\n\t\tbox-shadow : 0px 0px 0px 0px #FFF;\n\t}\n\tto {\n\t\tbox-shadow : 0px 0px 0px 10px transparent;\n\t}\n}\n\n.about-video:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\ttop:0;\n\tbackground-color:#FF6700;\n\topacity:0.7;\n}\n\n/*------------------------------------*\\\n\tCourses\n\\*------------------------------------*/\n\n.course {\n\tmargin-top:20px;\n\tmargin-bottom:20px;\n}\n\n.course .course-img {\n\tposition: relative;\n\tdisplay:block;\n\tmargin-bottom:20px;\n\tborder-radius:4px;\n\toverflow:hidden;\n}\n\n.course .course-img > img {\n\twidth:100%;\n}\n\n.course-img:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\tright:0;\n\tbottom:0;\n\ttop:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.course .course-img:hover:after {\n\topacity:0.7;\n}\n\n.course .course-img .course-link-icon {\n\tposition:absolute;\n\tleft:50%;\n\ttop:50%;\n\ttransform: translate(-50% , calc(-50% - 15px));\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder:2px solid #fff;\n\tcolor:#fff;\n\tborder-radius:50%;\n\topacity:0;\n\tz-index:10;\n\ttransition:0.2s all;\n}\n\n.course .course-img:hover .course-link-icon {\n\ttransform: translate(-50% , -50%);\n\topacity:1;\n}\n\n.course .course-title {\n\tdisplay:block;\n\theight:42px;\n}\n\n.course .course-details {\n\tmargin-top: 20px;\n\tpadding-top: 10px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.course .course-details .course-price {\n\tfloat: right;\n}\n\n.course .course-details .course-price.course-free {\n\tcolor: green;\n}\n\n.course .course-details .course-price.course-premium {\n\tcolor: #FF6700;\n}\n\n#courses .center-btn {\n\ttext-align:center;\n\tmargin-top:40px;\n}\n\n/*------------------------------------*\\\n\tFooter\n\\*------------------------------------*/\n\n#bottom-footer {\n\tmargin-top: 20px;\n\tpadding-top: 20px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n/* -- Footer Logo -- */\n\n.footer-logo  .logo {\n\tmargin-top: 20px;\n\tdisplay: inline-block;\n}\n\n.footer-logo  .logo > img {\n\tmax-height:30px;\n}\n\n/* -- Footer Nav -- */\n\n.footer-nav {\n\ttext-align: right;\n\tpadding: 20px 0px;\n}\n\n.footer-nav li {\n\tdisplay:inline-block;\n\tmargin-left:15px\n}\n\n.footer-nav li a {\n\tdisplay:block;\n\ttext-transform:uppercase;\n\ttransition:0.2s color;\n}\n\n.footer-nav li a:hover , .footer-nav li a:focus {\n\tcolor:#FF6700;\n}\n\n.footer-nav li a:after {\n\tcontent:\"\";\n\tdisplay:block;\n\theight:2px;\n\tbackground-color:#FF6700;\n\twidth:100%;\n\ttransform: translateY(5px);\n\topacity:0;\n\ttransition:0.2s all;\n}\n\n.footer-nav li a:hover:after , .footer-nav li a:focus:after {\n\ttransform: translateY(0px);\n\topacity:1;\n}\n\n/* -- Footer copyright -- */\n\n.footer-copyright {\n\tline-height:40px;\n}\n\n/* -- Footer Social -- */\n\n.footer-social {\n\ttext-align:right;\n}\n\n.footer-social li {\n\tdisplay:inline-block;\n\tmargin-left:10px;\n}\n\n.footer-social li a {\n\tdisplay:block;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tborder-radius:50%;\n\tcolor:#FFF;\n\tbackground-color:#EBEBEB;\n\ttransition:0.2s opacity;\n}\n\n.footer-social li a.facebook {\n\tbackground-color:#3b5998;\n}\n\n.footer-social li a.twitter {\n\tbackground-color:#55acee;\n}\n\n.footer-social li a.google-plus {\n\tbackground-color:#dd4b39;\n}\n\n.footer-social li a.instagram {\n\tbackground-color:#e95950;\n}\n\n.footer-social li a.youtube {\n\tbackground-color:#ff0000;\n}\n\n.footer-social li a.linkedin {\n\tbackground-color:#007bb5;\n}\n\n/*------------------------------------*\\\n\tContact Page\n\\*------------------------------------*/\n\n/* -- Contact Form -- */\n\n.contact-form:after {\n\tcontent:\"\";\n\tdisplay:block;\n\tclear:both;\n}\n\n.contact-form .input {\n\tmargin-bottom:20px;\n}\n\n.contact-form textarea.input {\n\theight:200px;\n}\n\n/* -- Contact Information -- */\n\n.contact-details li  {\n\tmargin-bottom:20px;\n}\n\n.contact-details li i {\n\tcolor: #FF6700;\n\tmargin-right: 15px;\n\tborder: 1px solid #EBEBEB;\n\tborder-radius: 50%;\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\ttext-align: center;\n}\n\n/* -- Contact Map -- */\n\n#contact-map {\n\theight:260px;\n\tborder-radius:4px;\n}\n\n/*------------------------------------*\\\n\tBlog Page\n\\*------------------------------------*/\n\n/* -- Single Blog -- */\n\n.single-blog {\n\tmargin-bottom:40px;\n}\n\n.single-blog .blog-img > a {\n\tposition:relative;\n\tdisplay:block;\n\tborder-radius:4px;\n\toverflow:hidden;\n}\n\n.single-blog .blog-img img {\n\twidth:100%;\n}\n\n.single-blog .blog-img > a:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\tright:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.single-blog .blog-img > a:hover:after {\n\topacity:0.7;\n}\n\n.single-blog .blog-meta {\n\tmargin-top: 20px;\n\tpadding-top: 10px;\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.single-blog .blog-meta .blog-meta-author > a {\n\tcolor: #FF6700;\n}\n\n.single-blog .blog-meta .blog-meta-comments {\n\tmargin-left:10px;\n}\n\n.single-blog .blog-meta .blog-meta-comments > a {\n\tcolor: #798696;\n}\n\n/* -- Pagination -- */\n\n.post-pagination {\n\tmargin-top:40px;\n\ttext-align:center;\n}\n\n.post-pagination .pages {\n\tdisplay:inline-block;\n}\n\n.post-pagination .pages li {\n\tdisplay:inline-block;\n}\n\n.post-pagination .pages li + li {\n\tmargin-left:10px;\n}\n\n.post-pagination .pages li {\n\twidth: 40px;\n\theight: 40px;\n\tline-height: 40px;\n\ttext-align: center;\n\tborder-radius: 50%;\n\tbackground-color: #EBEBEB;\n\ttransition: 0.2s all;\n}\n\n.post-pagination .pages li a {\n\tdisplay:block;\n\ttransition: 0.2s color;\n}\n\n.post-pagination .pages li:hover  , .post-pagination .pages li.active {\n\tbackground-color: #FF6700;\n\tcolor:#FFF;\n}\n\n.post-pagination .pages li:hover a {\n\tcolor:#FFF;\n}\n\n.pagination-back , .pagination-next {\n\tdisplay: block;\n\ttext-align: center;\n\tborder-radius: 40px;\n\tbackground-color: #EBEBEB;\n\ttransition: 0.2s all;\n\theight:40px;\n\tpadding:0px 30px;\n\tline-height:40px;\n}\n\n.pagination-next:hover  , .pagination-back:hover  {\n\tcolor:#FFF;\n\tbackground-color:#FF6700;\n}\n\n.pagination-next:after {\n\tcontent:\"\\f178\";\n\tfont-family:FontAwesome;\n\tmargin-left:15px;\n}\n\n.pagination-back:before {\n\tcontent:\"\\f177\";\n\tfont-family:FontAwesome;\n\tmargin-right:15px;\n}\n\n/*------------------------------------*\\\n\tBlog Page Sidebar\n\\*------------------------------------*/\n\n.widget + .widget {\n\tmargin-top:40px;\n}\n\n/*-- Search --*/\n\n.widget.search-widget {\n\tposition:relative\n}\n\n.widget.search-widget .input {\n\tpadding-right:60px;\n}\n\n.widget.search-widget button {\n\tposition:absolute;\n\tright:0;\n\ttop:0;\n\theight:40px;\n\twidth:40px;\n\tbackground-color:transparent;\n\tborder:none;\n}\n\n.widget.search-widget .input:focus + button {\n\tcolor:#FF6700;\n}\n\n/*-- Category --*/\n\n.category-widget .category {\n\tdisplay:block;\n\ttext-transform:uppercase;\n\tpadding-top: 10px;\n\tpadding-bottom: 10px;\n}\n\n.category-widget .category + .category {\n\tborder-top: 1px solid #EBEBEB;\n}\n\n.category-widget .category:before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\twidth: 4px;\n\theight: 4px;\n\tborder-radius: 50%;\n\tbackground-color: #FF6700;\n\tmargin-right:10px;\n}\n\n.category-widget .category span {\n\tfont-size:14px;\n\tmargin-left:10px;\n\tcolor:#798696;\n}\n\n/*-- Sidebar Posts --*/\n\n.single-post:after {\n\tcontent:\"\";\n\tdisplay:block;\n\tclear:both;\n}\n\n.single-post + .single-post {\n\tmargin-top:20px;\n}\n\n.single-post .single-post-img {\n\tposition:relative;\n\twidth: 80px;\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: 10px;\n\tmargin-top: 3px;\n\tborder-radius: 4px;\n\toverflow: hidden;\n}\n\n.single-post .single-post-img img {\n\twidth:100%;\n}\n\n.single-post-img:after {\n\tcontent:\"\";\n\tposition:absolute;\n\tleft:0;\n\ttop:0;\n\tbottom:0;\n\tright:0;\n\tbackground-color:#FF6700;\n\topacity:0;\n\ttransition:0.2s opacity;\n}\n\n.single-post-img:hover:after {\n\topacity:0.7;\n}\n\n/*-- Tags --*/\n\n.tags-widget .tag {\n\tdisplay: inline-block;\n\tfont-size: 14px;\n\ttext-transform: uppercase;\n\tmargin-right: 0px;\n\tmargin-top: 5px;\n\tpadding: 5px 15px;\n\tborder-radius: 40px;\n\tborder: 1px solid #EBEBEB;\n\tcolor: #798696;\n\ttransition: 0.2s all;\n}\n\n.tags-widget .tag:hover {\n\tbackground-color:#FF6700;\n\tborder-color:#FF6700;\n\tcolor:#FFF;\n}\n\n/*------------------------------------*\\\n\tSingle Post Page\n\\*------------------------------------*/\n\n/* --- Blog Post Meta --- */\n\n.blog-post-meta {\n\tmargin-top:40px;\n}\n\n.blog-post-meta li {\n\tdisplay:inline-block;\n}\n\n.blog-post-meta li + li {\n\tmargin-left:15px;\n}\n\n.blog-post-meta li , .blog-post-meta li > a {\n\tcolor: rgba(255, 255, 255, 0.8);\n}\n\n.blog-post-meta .blog-meta-author > a {\n\tcolor: #FF6700;\n}\n\n/* --- Blog Share --- */\n\n.blog-share {\n\tborder-top: 1px solid #EBEBEB;\n\tpadding-top: 10px;\n\tmargin-top: 40px;\n}\n\n.blog-share > h4 {\n\tdisplay:inline-block;\n\tmargin:0;\n}\n\n.blog-share a  {\n\tdisplay:inline-block;\n\tmargin-left:10px;\n\twidth:40px;\n\theight:40px;\n\tline-height:40px;\n\ttext-align:center;\n\tcolor:#FFF;\n\tbackground-color:#EBEBEB;\n\tborder-radius:50%;\n\ttransition:0.2s opacity;\n}\n\n.blog-share a.facebook {\n\tbackground-color:#3b5998;\n}\n\n.blog-share a.twitter {\n\tbackground-color:#55acee;\n}\n\n.blog-share a.google-plus {\n\tbackground-color:#dd4b39;\n}\n\n/* --- Blog Comments --- */\n\n.blog-comments {\n\tmargin-top:40px;\n}\n\n.blog-comments .media {\n\tmargin-top:20px;\n\tmargin-bottom:20px;\n}\n\n.blog-comments .media .media {\n\tmargin-left:20px;\n}\n\n.blog-comments .media .media:nth-last-child(1) {\n\tmargin-bottom:0px;\n}\n\n.blog-comments .media .media-body {\n\tpadding:20px;\n\tbackground-color:#EBEBEB;\n\tborder-radius:0px 4px 4px;\n}\n\n.blog-comments .media .media-left:before {\n\tcontent:\"\";\n\tposition:absolute;\n\tright:0;\n\ttop:0;\n\tborder-style: solid;\n\tborder-width: 0px 15px 15px;\n\tborder-color: transparent #EBEBEB transparent transparent;\n}\n\n.blog-comments .media-left {\n\tposition:relative;\n\tpadding-right:20px;\n}\n\n.blog-comments .media-left img {\n\twidth:80px;\n\theight:80px;\n\tbackground-color:#EBEBEB;\n\tborder-radius:50%;\n}\n\n.blog-comments .media .date-reply {\n\tfont-size:12px;\n\ttext-transform:uppercase;\n\tcolor:#374050;\n}\n\n.blog-comments .media .date-reply .reply {\n\tmargin-left:15px;\n}\n\n/* --- Blog Reply Form --- */\n\n.blog-reply-form {\n\tmargin-top:40px;\n}\n\n.blog-reply-form .input {\n\tmargin-bottom:20px;\n}\n\n.blog-reply-form .input.name-input , .blog-reply-form .input.email-input {\n\twidth: calc(50% - 10px);\n\tfloat:left;\n}\n\n.blog-reply-form .input.email-input {\n\tmargin-left: 20px;\n}\n\n.blog-reply-form textarea {\n\theight:90px;\n}\n\n/*------------------------------------*\\\n\tResponsive\n\\*------------------------------------*/\n\n@media only screen and (max-width: 991px) {\n\t.section-header h2 {\n\t\tfont-size:24px;\n\t}\n\n\t/*-- Why us --*/\n\t#why-us .feature {\n\t\tmargin-top:40px;\n\t}\n\t\n\t.about-video {\n\t\tmargin-top:40px;\n\t}\n\t\n\t/*-- Call to action --*/\n\t#cta {\n\t\ttext-align:center;\n\t}\n\t\n\t/*-- Footer --*/\n\t.footer-logo {\n\t\ttext-align:center;\n\t}\n\t\n\t.footer-nav {\n\t\ttext-align:center;\n\t}\n\t.footer-nav li {\n\t\tmargin-top: 10px;\n\t}\n\t\n\t.footer-social {\n\t\ttext-align:center;\n\t}\n\t.footer-social li {\n\t\tmargin-top: 10px;\n\t}\n\t\n\t.footer-copyright {\n\t\ttext-align:center;\n\t\tline-height:inherit;\n\t\tmargin-top:20px;\n\t}\n\t\n\t/*-- Contact page --*/\n\t.contact-form  {\n\t\tmargin-bottom:40px;\n\t}\n\n\t.contact-form button {\n\t\tfloat:none !important;\n\t}\n\t\n\t/*-- Blog page --*/\n\t#main {\n\t\tmargin-bottom:80px;\n\t}\n}\n\n@media only screen and (max-width: 767px) {\n\t/*-- Hero area --*/\n\t.hero-area h1 {\n\t\tfont-size:30px;\n\t}\n\n\t/* -- Breadcrumb -- */\n\t.hero-area-tree li {\n\t\tfont-size:12px;\n\t}\n\n\t/*-- Pagination --*/\n\t.post-pagination .pages {\n\t\tdisplay:none;\n\t}\n}\n\n@media only screen and (max-width: 480px) {\n\t/*-- Courses --*/\n\t#courses-wrapper [class*='col-xs'] {\n\t\twidth:100%;\n\t}\n\t\n\t/*-- Blog Comments --*/\n\t.blog-comments .media .media {\n\t\tmargin-left:0px;\n\t}\n\t\n\t/*-- Blog Reply Form --*/\n\t.blog-reply-form .input.name-input , .blog-reply-form .input.email-input {\n\t\twidth: 100%;\n\t\tfloat:none;\n\t}\n\t\n\t.blog-reply-form .input.email-input {\n\t\tmargin-left: 0px;\n\t}\n}\n\n/*------------------------------------*\\\n\tPreloader\n\\*------------------------------------*/\n\n#preloader {\n\tposition:fixed;\n\tleft:0;\n\tright:0;\n\ttop:0;\n\tbottom:0;\n\tbackground-color:#FFF;\n\tz-index:9999;\n}\n\n#preloader .preloader {\n\tposition:absolute;\n\tleft:50%;\n\ttop:50%;\n\ttransform: translate(-50% , -50%);\n}\n\n#preloader .preloader:after {\n\tcontent:\"\";\n\tdisplay:block;\n\twidth:40px;\n\theight:40px;\n\tborder: 1px solid #EBEBEB;\n    border-top: 1px solid #FF6700;\n    border-radius: 50%;\n\t-webkit-animation: 1s preloader linear infinite;\n\t        animation: 1s preloader linear infinite;\n}\n\n@-webkit-keyframes preloader {\n\tfrom { transform: rotate(0deg);}\n\tto { transform: rotate(360deg);}\n}\n\n@keyframes preloader {\n\tfrom { transform: rotate(0deg);}\n\tto { transform: rotate(360deg);}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1tb2R1bGUvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0EyQnFDOztBQUVyQzs7dUNBRXVDOztBQUN2Qyx1QkFBdUI7O0FBQ3ZCO0lBQ0kscUNBQXFDO0NBQ3hDLGVBQWU7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtDQUNoQixjQUFjO0NBQ2QsWUFBWTtBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVjtBQUNKOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixLQUFLO0NBQ0wsY0FBYztDQUNkLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsd0JBQXdCO0FBQ3pCOztBQUdBLG9CQUFvQjs7QUFDcEI7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBLDZCQUE2Qjs7QUFDN0I7Q0FDQyxpQkFBaUI7Q0FDakIsTUFBTTtDQUNOLE9BQU87Q0FDUCxLQUFLO0NBQ0wsUUFBUTtDQUNSLDBCQUEwQjtDQUMxQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFFBQVE7Q0FFUixzRUFBc0U7Q0FDdEUsWUFBWTtBQUNiOztBQUVBLG9CQUFvQjs7QUFDcEI7Q0FDQyxpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixXQUFXO0NBRVgsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixTQUFTO0NBRVQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBLGtCQUFrQjs7QUFDbEI7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtDQUM1QixpQkFBaUI7Q0FDakIsdUJBQXVCO0lBQ3BCLGtCQUFrQjtDQUNyQixtQkFBbUI7Q0FFbkIsNEJBQTRCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0Msb0JBQW9CO0FBQ3JCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsY0FBYztDQUNkLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFVBQVU7Q0FDVixpREFBaUQ7Q0FDakQscUJBQXFCO0NBRXJCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FFeEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1Ysd0JBQXdCO0NBQ3hCLFVBQVU7Q0FHRiwwQkFBMEI7Q0FDbEMsU0FBUztDQUVULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUdTLDBCQUEwQjtDQUNsQyxTQUFTO0FBQ1Y7O0FBRUEscUJBQXFCOztBQUNyQjtDQUNDO0VBQ0MsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBRVIsK0NBQStDO0VBQ3ZELGlCQUFpQjtFQUNqQixvQkFBb0I7RUFHWiwyQkFBMkI7RUFFbkMsOENBQThDO0VBQzlDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFVBQVU7RUFHRix5QkFBeUI7Q0FDbEM7O0NBRUE7RUFDQyxRQUFRO0NBQ1Q7O0NBRUE7RUFDQyx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGlCQUFpQjtDQUNsQjtBQUNEOztBQUVBLDRCQUE0Qjs7QUFDNUI7Q0FDQyxjQUFjO0NBQ2QsT0FBTztDQUNQLFVBQVU7Q0FDVixZQUFZO0NBQ1osV0FBVztDQUNYLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7SUFHRSxpQ0FBaUM7Q0FFNUMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixNQUFNO0NBR04sMEJBQTBCO0FBRTNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7SUFHWSx5Q0FBeUM7QUFDckQ7O0FBRUE7SUFHWSwyQ0FBMkM7QUFDdkQ7O0FBRUE7O3VDQUV1Qzs7QUFDdkM7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87Q0FHQywwQkFBMEI7Q0FDbEMsTUFBTTtDQUNOLE9BQU87QUFDUjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0Msb0JBQW9CO0NBQ3BCLCtCQUErQjtDQUMvQixlQUFlO0NBQ2YsY0FBYztDQUNkLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGdDQUFnQztBQUNqQzs7QUFFQTs7dUNBRXVDOztBQUN2QyxrQkFBa0I7O0FBQ2xCO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sS0FBSztDQUNMLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHdCQUF3QjtDQUN4QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUEsb0JBQW9COztBQUNwQjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUEsc0JBQXNCOztBQUN0QjtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUdELGlDQUFpQztDQUN6QyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLDhDQUE4QztTQUN0QyxzQ0FBc0M7Q0FFOUMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFFUyxpQ0FBaUM7Q0FDMUM7Q0FDQTtFQUVTLHlDQUF5QztDQUNsRDtBQUNEOztBQUVBO0NBQ0M7RUFFUyxpQ0FBaUM7Q0FDMUM7Q0FDQTtFQUVTLHlDQUF5QztDQUNsRDtBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixLQUFLO0NBQ0wsd0JBQXdCO0NBQ3hCLFdBQVc7QUFDWjs7QUFFQTs7dUNBRXVDOztBQUN2QztDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsS0FBSztDQUNMLHdCQUF3QjtDQUN4QixTQUFTO0NBRVQsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0NBR0MsOENBQThDO0NBQ3RELFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsVUFBVTtDQUVWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUdTLGlDQUFpQztDQUN6QyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTs7dUNBRXVDOztBQUV2QztDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsNkJBQTZCO0FBQzlCOztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUV4QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsYUFBYTtDQUNiLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsVUFBVTtDQUdGLDBCQUEwQjtDQUNsQyxTQUFTO0NBRVQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBR1MsMEJBQTBCO0NBQ2xDLFNBQVM7QUFDVjs7QUFFQSwyQkFBMkI7O0FBQzNCO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBLHdCQUF3Qjs7QUFDeEI7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLHdCQUF3QjtDQUV4Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7O3VDQUV1Qzs7QUFDdkMsdUJBQXVCOztBQUN2QjtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsVUFBVTtBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBLDhCQUE4Qjs7QUFDOUI7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUVBLHNCQUFzQjs7QUFDdEI7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDLHNCQUFzQjs7QUFDdEI7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixNQUFNO0NBQ04sS0FBSztDQUNMLFFBQVE7Q0FDUixPQUFPO0NBQ1Asd0JBQXdCO0NBQ3hCLFNBQVM7Q0FFVCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBRXpCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGFBQWE7Q0FFYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBRXpCLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQSxlQUFlOztBQUNmO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0NBQ1AsS0FBSztDQUNMLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsNEJBQTRCO0NBQzVCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0NBQ0MsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixpQkFBaUI7Q0FDakIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUEsc0JBQXNCOztBQUN0QjtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLE1BQU07Q0FDTixLQUFLO0NBQ0wsUUFBUTtDQUNSLE9BQU87Q0FDUCx3QkFBd0I7Q0FDeEIsU0FBUztDQUVULHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQSxhQUFhOztBQUNiO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixjQUFjO0NBRWQsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixVQUFVO0FBQ1g7O0FBRUE7O3VDQUV1Qzs7QUFDdkMsMkJBQTJCOztBQUMzQjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEsdUJBQXVCOztBQUN2QjtDQUNDLDZCQUE2QjtDQUM3QixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBRWpCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQSwwQkFBMEI7O0FBQzFCO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osd0JBQXdCO0NBQ3hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsT0FBTztDQUNQLEtBQUs7Q0FDTCxtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHlEQUF5RDtBQUMxRDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLHdCQUF3QjtDQUN4QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsd0JBQXdCO0NBQ3hCLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O3VDQUV1Qzs7QUFDdkM7Q0FDQztFQUNDLGNBQWM7Q0FDZjs7Q0FFQSxlQUFlO0NBQ2Y7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQSx1QkFBdUI7Q0FDdkI7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUEsZUFBZTtDQUNmO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7Q0FFQSxxQkFBcUI7Q0FDckI7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUEsa0JBQWtCO0NBQ2xCO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEI7RUFDQyxjQUFjO0NBQ2Y7O0NBRUEscUJBQXFCO0NBQ3JCO0VBQ0MsY0FBYztDQUNmOztDQUVBLG1CQUFtQjtDQUNuQjtFQUNDLFlBQVk7Q0FDYjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCO0VBQ0MsVUFBVTtDQUNYOztDQUVBLHNCQUFzQjtDQUN0QjtFQUNDLGVBQWU7Q0FDaEI7O0NBRUEsd0JBQXdCO0NBQ3hCO0VBQ0MsV0FBVztFQUNYLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBOzt1Q0FFdUM7O0FBQ3ZDO0NBQ0MsY0FBYztDQUNkLE1BQU07Q0FDTixPQUFPO0NBQ1AsS0FBSztDQUNMLFFBQVE7Q0FDUixxQkFBcUI7Q0FDckIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0NBR0MsaUNBQWlDO0FBQzFDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixVQUFVO0NBQ1YsV0FBVztDQUNYLHlCQUF5QjtJQUN0Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0NBQ3JCLCtDQUErQztTQUN2Qyx1Q0FBdUM7QUFDaEQ7O0FBRUE7Q0FDQyxPQUF3Qyx1QkFBdUIsQ0FBQztDQUNoRSxLQUF3Qyx5QkFBeUIsQ0FBQztBQUNuRTs7QUFFQTtDQUNDLE9BQXdDLHVCQUF1QixDQUFDO0NBQ2hFLEtBQXdDLHlCQUF5QixDQUFDO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1tb2R1bGUvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGVtcGxhdGUgTmFtZTogSFRNTCBFZHVjYXRpb24gVGVtcGxhdGVcbkF1dGhvcjogeWFtaW5uY2NvXG5cbkNvbG9yczpcblx0Qm9keSBcdFx0OiAjNzk4Njk2XG5cdEhlYWRlcnMgXHQ6ICMzNzQwNTBcblx0UHJpbWFyeSBcdDogI0ZGNjcwMFxuXHRHcmV5IFx0XHQ6ICNFQkVCRUJcblxuRm9udHM6IExhdG8gJiBNb250c2VycmF0XG5cblRhYmxlIE9GIENvbnRlbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjEgPiBHZW5lcmFsXG4yID4gTG9nb1xuMyA+IE5hdmlnYXRpb25cbjQgPiBIZXJvIEFyZWFcbjUgPiBBYm91dCAmIFdoeSBVcyAoRmVhdHVyZSlcbjYgPiBDb3Vyc2VzXG43ID4gRm9vdGVyXG44ID4gQ29udGFjdCBQYWdlXG45ID4gQmxvZyBQYWdlXG4xMCA+IEJsb2cgUGFnZSBTaWRlYmFyXG4xMSA+IFNpbmdsZSBQb3N0IFBhZ2VcbjEyID4gUmVzcG9uc2l2ZVxuMTMgPiBQcmVsb2FkZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdEdlbmVyYWxcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLS0gdHlwb2dyYXBoeSAtLS0gKi9cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNzk4Njk2O1xuXHRvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuaDEsaDIsaDMsaDQsaDUsaDYge1xuXHRtYXJnaW4tdG9wOiAxMnB4O1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRjb2xvcjogIzM3NDA1MDtcbn1cblxuaDEge1xuXHRmb250LXNpemU6MzhweDtcbn1cblxuaDIge1xuXHRmb250LXNpemU6MzBweDtcbn1cblxuaDMge1xuXHRmb250LXNpemU6MjRweDtcbn1cblxuaDQge1xuXHRmb250LXNpemU6MThweDtcbn1cblxuYSB7XG5cdGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiAjMzc0MDUwO1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG5hOmhvdmVyLFxuYTpmb2N1c3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcblx0Y29sb3I6ICMzNzQwNTA7XG5cdG9wYWNpdHk6IDAuOTtcbn1cblxudWwsb2x7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZVxufVxuXG4ud2hpdGUtdGV4dCB7XG5cdGNvbG9yOiAjRkZGO1xufVxuXG5ibG9ja3F1b3RlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDIwcHggMHB4O1xuXHRwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA2MHB4O1xuXHRib3JkZXItbGVmdDogbm9uZTtcblx0Y29sb3I6ICMzNzQwNTA7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3Jle1xuXHRjb250ZW50OlwiXFxmMTBkXCI7XG5cdGZvbnQtZmFtaWx5OmZvbnRBd2Vzb21lO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0bGVmdDowO1xuXHR0b3A6MDtcblx0Y29sb3I6ICNGRjY3MDA7XG5cdHdpZHRoOjQwcHg7XG5cdGhlaWdodDo0MHB4O1xuXHRsaW5lLWhlaWdodDo0MHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdGJvcmRlcjoxcHggc29saWQgI0VCRUJFQjtcbn1cblxuXG4vKiAtLS0gU2VjdGlvbiAtLS0gKi9cbi5zZWN0aW9uIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmctdG9wOjgwcHg7XG5cdHBhZGRpbmctYm90dG9tOjgwcHg7XG59XG5cbi5zZWN0aW9uLWhyIHtcblx0bWFyZ2luLXRvcDo4MHB4O1xuXHRtYXJnaW4tYm90dG9tOjgwcHg7XG5cdGJvcmRlci1jb2xvcjogI0VCRUJFQjtcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcblx0bWFyZ2luLWJvdHRvbTo0MHB4O1xufVxuXG4vKiAtLS0gQmFja2dyb3VuZCBJbWFnZSAtLS0gKi9cbi5iZy1pbWFnZSB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OjA7XG5cdHRvcDowO1xuXHRib3R0b206MDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtc2l6ZTpjb3Zlcjtcbn1cblxuLmJnLWltYWdlLmJnLXBhcmFsbGF4IHtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xufVxuXG4uYmctaW1hZ2Uub3ZlcmxheTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0dG9wOjA7XG5cdGJvdHRvbTowO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzNzQwNTApLCB0bygjNzk4Njk2KSk7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzNzQwNTAgMCUsICM3OTg2OTYgMTAwJSk7XG5cdG9wYWNpdHk6IDAuNztcbn1cblxuLyogLS0tIEJ1dHRvbnMgLS0tICovXG4ubWFpbi1idXR0b24ge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6MTBweCAzMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzAwO1xuXHRib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0Y29sb3I6ICNGRkY7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLm1haW4tYnV0dG9uOmhvdmVyICwgLm1haW4tYnV0dG9uOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjRkY2NzAwO1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG4ubWFpbi1idXR0b24uaWNvbi1idXR0b246aG92ZXIgLCAubWFpbi1idXR0b24uaWNvbi1idXR0b246Zm9jdXMge1xuXHRwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufVxuXG4ubWFpbi1idXR0b24uaWNvbi1idXR0b246YWZ0ZXIge1xuXHRjb250ZW50OlwiXFxmMTc4XCI7XG5cdGZvbnQtZmFtaWx5OkZvbnRBd2Vzb21lO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0d2lkdGg6IDMwcHg7XG5cdHJpZ2h0OiAxNXB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0b3BhY2l0eTowO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBhbGw7XG5cdHRyYW5zaXRpb246MC4ycyBhbGw7XG59XG5cbi5tYWluLWJ1dHRvbi5pY29uLWJ1dHRvbjpob3ZlcjphZnRlciAsIC5tYWluLWJ1dHRvbi5pY29uLWJ1dHRvbjpmb2N1czphZnRlciB7XG5cdG9wYWNpdHk6MTtcbn1cblxuLyogLS0gIElucHV0ICAtLSAqL1xuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSwgaW5wdXRbdHlwZT1cInVybFwiXSwgaW5wdXRbdHlwZT1cInRlbFwiXSwgdGV4dGFyZWEge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRib3JkZXItcmFkaXVzOjRweDtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBib3JkZXItY29sb3I7XG5cdHRyYW5zaXRpb246MC4ycyBib3JkZXItY29sb3I7XG59XG5cbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1cywgaW5wdXRbdHlwZT1cIm51bWJlclwiXTpmb2N1cywgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJ1cmxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XCJ0ZWxcIl06Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcblx0Ym9yZGVyLWNvbG9yOiNGRjY3MDA7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdExvZ29cblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubmF2YmFyLWJyYW5kIC5sb2dvIHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2YmFyLWJyYW5kIC5sb2dvID4gaW1nIHtcblx0bWF4LWhlaWdodDozMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdC5uYXZiYXItYnJhbmQge1xuXHRcdG1hcmdpbi1sZWZ0OjE1cHg7XG5cdH1cbn0gXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdE5hdmlnYXRpb25cblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4jaGVhZGVyIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0dG9wOjA7XG5cdHotaW5kZXg6OTk7XG5cdGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjM1LCAyMzUsIDIzNSwgMC4yNSk7XG5cdGJhY2tncm91bmQtY29sb3I6I0ZGRjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgYWxsO1xuXHR0cmFuc2l0aW9uOjAuMnMgYWxsO1xufVxuXG4jaGVhZGVyLnRyYW5zcGFyZW50LW5hdiB7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2hlYWRlci50cmFuc3BhcmVudC1uYXYgLm1haW4tbWVudSBsaSBhIHtcblx0Y29sb3I6I0ZGRjtcbn1cblxuLm1haW4tbWVudSBsaSBhIHtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBhbGw7XG5cdHRyYW5zaXRpb246MC4ycyBhbGw7XG59XG5cbi5tYWluLW1lbnUgbGkgYTpob3ZlciAsIC5tYWluLW1lbnUgbGkgYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG59XG5cbi5tYWluLW1lbnUgbGkgYTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0ZGlzcGxheTpibG9jaztcblx0aGVpZ2h0OjJweDtcblx0YmFja2dyb3VuZC1jb2xvcjojRkY2NzAwO1xuXHR3aWR0aDoxMDAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHRvcGFjaXR5OjA7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyOmFmdGVyICwgLm1haW4tbWVudSBsaSBhOmZvY3VzOmFmdGVyIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcblx0b3BhY2l0eToxO1xufVxuXG4vKiAtLSBNb2JpbGUgTmF2IC0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdCNuYXYge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDAlO1xuXHRcdG1heC13aWR0aDoyNTBweDtcblx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdGJhY2tncm91bmQ6ICNGRkY7XG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0XHQgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcdHBhZGRpbmctdG9wOiA4MHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXHRcdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cyBhbGwgY3ViaWMtYmV6aWVyKC43NywwLC4xOCwxKTtcblx0XHR0cmFuc2l0aW9uOiAwLjRzIGFsbCBjdWJpYy1iZXppZXIoLjc3LDAsLjE4LDEpO1xuXHRcdHotaW5kZXg6OTtcblx0fVxuXG5cdCNoZWFkZXIubmF2LWNvbGxhcHNlICNuYXZ7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG5cdFx0ICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuXHRcdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcblx0fVxuXHRcblx0Lm1haW4tbWVudSB7XG5cdFx0bWFyZ2luOjA7XG5cdH1cblx0XG5cdC5tYWluLW1lbnUgbGkgYSB7XG5cdFx0Y29sb3I6ICMzNzQwNTAgIWltcG9ydGFudDtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0bWFyZ2luLWxlZnQ6IDQwcHg7XG5cdH1cbn1cblxuLyogLS0gTW9iaWxlIFRvZ2dsZSBCdG4gLS0gKi9cbi5uYXZiYXItdG9nZ2xlIHtcblx0cG9zaXRpb246Zml4ZWQ7XG5cdHJpZ2h0OjA7XG5cdHBhZGRpbmc6IDA7XG5cdGhlaWdodDogNDBweDtcblx0d2lkdGg6IDQwcHg7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0ei1pbmRleDo5OTtcbn1cblxuLm5hdmJhci10b2dnbGUgPiBzcGFuIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYmFja2dyb3VuZDtcblx0dHJhbnNpdGlvbjogMC4ycyBiYWNrZ3JvdW5kO1xufVxuXG4ubmF2YmFyLXRvZ2dsZSA+IHNwYW46YmVmb3JlLCAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIC13ZWJraXQtdHJhbnNmb3JtO1xuXHR0cmFuc2l0aW9uOiAwLjJzIC13ZWJraXQtdHJhbnNmb3JtO1xuXHR0cmFuc2l0aW9uOiAwLjJzIHRyYW5zZm9ybTtcblx0dHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm0sIDAuMnMgLXdlYmtpdC10cmFuc2Zvcm07XG59XG5cbi5uYXZiYXItdG9nZ2xlID4gc3BhbiAsIC5uYXZiYXItdG9nZ2xlID4gc3BhbjpiZWZvcmUgLCAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuXHRoZWlnaHQ6IDJweDtcblx0d2lkdGg6IDI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IzM3NDA1MDtcbn1cblxuLm5hdmJhci10b2dnbGUgPiBzcGFuOmJlZm9yZSB7XG5cdHRvcDogLTEwcHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlID4gc3BhbjphZnRlciB7XG5cdHRvcDogMTBweDtcbn1cblxuI2hlYWRlci5uYXYtY29sbGFwc2UgLm5hdmJhci10b2dnbGUgPiBzcGFuIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNoZWFkZXIubmF2LWNvbGxhcHNlIC5uYXZiYXItdG9nZ2xlID4gc3BhbjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSByb3RhdGUoNDVkZWcpO1xufVxuXG4jaGVhZGVyLm5hdi1jb2xsYXBzZSAubmF2YmFyLXRvZ2dsZSA+IHNwYW46YWZ0ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRIZXJvIEFyZWFcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVyby1hcmVhIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmctdG9wOiA4MHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4jaG9tZS5oZXJvLWFyZWEge1xuXHRoZWlnaHQ6Y2FsYygxMDB2aCk7XG5cdHBhZGRpbmctdG9wOiAwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5ob21lLXdyYXBwZXIge1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcblx0ICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcblx0ICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcblx0bGVmdDowO1xuXHRyaWdodDowO1xufVxuXG4vKiAtLSBCcmVhZGNydW1iIC0tICovXG4uaGVyby1hcmVhLXRyZWUgbGkge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Zm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblx0Zm9udC13ZWlnaHQ6NjAwO1xuXHRmb250LXNpemU6MTRweDtcblx0Y29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uaGVyby1hcmVhLXRyZWUgbGkgPiBhIHtcblx0Y29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uaGVyby1hcmVhLXRyZWUgbGkgKyBsaTpiZWZvcmUge1xuXHRjb250ZW50OiBcIi9cIjtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW46IDBweCA1cHg7XG5cdGNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuMjUpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRBYm91dCAmIFdoeSBVcyAoRmVhdHVyZSlcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLSBGZWF0dXJlIC0tICovXG4uZmVhdHVyZSB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uZmVhdHVyZSArIC5mZWF0dXJlICB7XG5cdG1hcmdpbi10b3A6NDBweDtcbn1cblxuLmZlYXR1cmUgLmZlYXR1cmUtaWNvbiB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjA7XG5cdHRvcDowO1xuXHR3aWR0aDo4MHB4O1xuXHRoZWlnaHQ6ODBweDtcblx0bGluZS1oZWlnaHQ6ODBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Zm9udC1zaXplOjMwcHg7XG5cdGJvcmRlcjoxcHggc29saWQgI0VCRUJFQjtcblx0Y29sb3I6I0ZGNjcwMDtcbn1cblxuLmZlYXR1cmUtY29udGVudCB7XG5cdHBhZGRpbmctbGVmdDoxMDBweDtcbn1cblxuLyogLS0gQWJvdXQgSW1nIC0tICovXG4uYWJvdXQtaW1nIHtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4uYWJvdXQtaW1nID4gaW1nIHtcblx0d2lkdGg6MTAwJTtcbn1cblxuLyogLS0gQWJvdXQgVmlkZW8gLS0gKi9cbi5hYm91dC12aWRlbyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFib3V0LXZpZGVvID4gaW1nIHtcblx0d2lkdGg6MTAwJTtcbn1cblxuLmFib3V0LXZpZGVvIC5wbGF5LWljb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGxpbmUtaGVpZ2h0OiA4MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Zm9udC1zaXplOiAyNC4wMjdweDtcblx0ei1pbmRleDoxMDtcblx0LXdlYmtpdC1hbmltYXRpb24gOiAycyBwbGF5LWFuaW1hdGlvbiBpbmZpbml0ZTtcblx0ICAgICAgICBhbmltYXRpb24gOiAycyBwbGF5LWFuaW1hdGlvbiBpbmZpbml0ZTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgY29sb3I7XG5cdHRyYW5zaXRpb246MC4ycyBjb2xvcjtcbn1cblxuLmFib3V0LXZpZGVvOmhvdmVyIC5wbGF5LWljb24ge1xuXHRjb2xvcjojRkY2NzAwO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxheS1hbmltYXRpb24ge1xuXHRmcm9tIHtcblx0XHQtd2Via2l0LWJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAwcHggI0ZGRjtcblx0XHQgICAgICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAwcHggI0ZGRjtcblx0fVxuXHR0byB7XG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93IDogMHB4IDBweCAwcHggMTBweCB0cmFuc3BhcmVudDtcblx0XHQgICAgICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAxMHB4IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgcGxheS1hbmltYXRpb24ge1xuXHRmcm9tIHtcblx0XHQtd2Via2l0LWJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAwcHggI0ZGRjtcblx0XHQgICAgICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAwcHggI0ZGRjtcblx0fVxuXHR0byB7XG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93IDogMHB4IDBweCAwcHggMTBweCB0cmFuc3BhcmVudDtcblx0XHQgICAgICAgIGJveC1zaGFkb3cgOiAwcHggMHB4IDBweCAxMHB4IHRyYW5zcGFyZW50O1xuXHR9XG59XG5cbi5hYm91dC12aWRlbzphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0Ym90dG9tOjA7XG5cdHRvcDowO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdG9wYWNpdHk6MC43O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRDb3Vyc2VzXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmNvdXJzZSB7XG5cdG1hcmdpbi10b3A6MjBweDtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xufVxuXG4uY291cnNlIC5jb3Vyc2UtaW1nIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHRtYXJnaW4tYm90dG9tOjIwcHg7XG5cdGJvcmRlci1yYWRpdXM6NHB4O1xuXHRvdmVyZmxvdzpoaWRkZW47XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1pbWcgPiBpbWcge1xuXHR3aWR0aDoxMDAlO1xufVxuXG4uY291cnNlLWltZzphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0cmlnaHQ6MDtcblx0Ym90dG9tOjA7XG5cdHRvcDowO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdG9wYWNpdHk6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcblx0dHJhbnNpdGlvbjowLjJzIG9wYWNpdHk7XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1pbWc6aG92ZXI6YWZ0ZXIge1xuXHRvcGFjaXR5OjAuNztcbn1cblxuLmNvdXJzZSAuY291cnNlLWltZyAuY291cnNlLWxpbmstaWNvbiB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjUwJTtcblx0dG9wOjUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgY2FsYygtNTAlIC0gMTVweCkpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCBjYWxjKC01MCUgLSAxNXB4KSk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIGNhbGMoLTUwJSAtIDE1cHgpKTtcblx0d2lkdGg6NDBweDtcblx0aGVpZ2h0OjQwcHg7XG5cdGxpbmUtaGVpZ2h0OjQwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRib3JkZXI6MnB4IHNvbGlkICNmZmY7XG5cdGNvbG9yOiNmZmY7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRvcGFjaXR5OjA7XG5cdHotaW5kZXg6MTA7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLmNvdXJzZSAuY291cnNlLWltZzpob3ZlciAuY291cnNlLWxpbmstaWNvbiB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcblx0ICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdG9wYWNpdHk6MTtcbn1cblxuLmNvdXJzZSAuY291cnNlLXRpdGxlIHtcblx0ZGlzcGxheTpibG9jaztcblx0aGVpZ2h0OjQycHg7XG59XG5cbi5jb3Vyc2UgLmNvdXJzZS1kZXRhaWxzIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuXG4uY291cnNlIC5jb3Vyc2UtZGV0YWlscyAuY291cnNlLXByaWNlIHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY291cnNlIC5jb3Vyc2UtZGV0YWlscyAuY291cnNlLXByaWNlLmNvdXJzZS1mcmVlIHtcblx0Y29sb3I6IGdyZWVuO1xufVxuXG4uY291cnNlIC5jb3Vyc2UtZGV0YWlscyAuY291cnNlLXByaWNlLmNvdXJzZS1wcmVtaXVtIHtcblx0Y29sb3I6ICNGRjY3MDA7XG59XG5cbiNjb3Vyc2VzIC5jZW50ZXItYnRuIHtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdG1hcmdpbi10b3A6NDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0Rm9vdGVyXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jYm90dG9tLWZvb3RlciB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUJFQjtcbn1cblxuLyogLS0gRm9vdGVyIExvZ28gLS0gKi9cbi5mb290ZXItbG9nbyAgLmxvZ28ge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXItbG9nbyAgLmxvZ28gPiBpbWcge1xuXHRtYXgtaGVpZ2h0OjMwcHg7XG59XG5cbi8qIC0tIEZvb3RlciBOYXYgLS0gKi9cbi5mb290ZXItbmF2IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uZm9vdGVyLW5hdiBsaSB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDoxNXB4XG59XG5cbi5mb290ZXItbmF2IGxpIGEge1xuXHRkaXNwbGF5OmJsb2NrO1xuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGNvbG9yO1xuXHR0cmFuc2l0aW9uOjAuMnMgY29sb3I7XG59XG5cbi5mb290ZXItbmF2IGxpIGE6aG92ZXIgLCAuZm9vdGVyLW5hdiBsaSBhOmZvY3VzIHtcblx0Y29sb3I6I0ZGNjcwMDtcbn1cblxuLmZvb3Rlci1uYXYgbGkgYTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0ZGlzcGxheTpibG9jaztcblx0aGVpZ2h0OjJweDtcblx0YmFja2dyb3VuZC1jb2xvcjojRkY2NzAwO1xuXHR3aWR0aDoxMDAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHRvcGFjaXR5OjA7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGFsbDtcblx0dHJhbnNpdGlvbjowLjJzIGFsbDtcbn1cblxuLmZvb3Rlci1uYXYgbGkgYTpob3ZlcjphZnRlciAsIC5mb290ZXItbmF2IGxpIGE6Zm9jdXM6YWZ0ZXIge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHQgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuXHRvcGFjaXR5OjE7XG59XG5cbi8qIC0tIEZvb3RlciBjb3B5cmlnaHQgLS0gKi9cbi5mb290ZXItY29weXJpZ2h0IHtcblx0bGluZS1oZWlnaHQ6NDBweDtcbn1cblxuLyogLS0gRm9vdGVyIFNvY2lhbCAtLSAqL1xuLmZvb3Rlci1zb2NpYWwge1xuXHR0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW4tbGVmdDoxMHB4O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhIHtcblx0ZGlzcGxheTpibG9jaztcblx0d2lkdGg6NDBweDtcblx0aGVpZ2h0OjQwcHg7XG5cdGxpbmUtaGVpZ2h0OjQwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0Y29sb3I6I0ZGRjtcblx0YmFja2dyb3VuZC1jb2xvcjojRUJFQkVCO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcbn1cblxuLmZvb3Rlci1zb2NpYWwgbGkgYS5mYWNlYm9vayB7XG5cdGJhY2tncm91bmQtY29sb3I6IzNiNTk5ODtcbn1cblxuLmZvb3Rlci1zb2NpYWwgbGkgYS50d2l0dGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojNTVhY2VlO1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLmdvb2dsZS1wbHVzIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZGQ0YjM5O1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLmluc3RhZ3JhbSB7XG5cdGJhY2tncm91bmQtY29sb3I6I2U5NTk1MDtcbn1cblxuLmZvb3Rlci1zb2NpYWwgbGkgYS55b3V0dWJlIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZmYwMDAwO1xufVxuXG4uZm9vdGVyLXNvY2lhbCBsaSBhLmxpbmtlZGluIHtcblx0YmFja2dyb3VuZC1jb2xvcjojMDA3YmI1O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRDb250YWN0IFBhZ2VcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLSBDb250YWN0IEZvcm0gLS0gKi9cbi5jb250YWN0LWZvcm06YWZ0ZXIge1xuXHRjb250ZW50OlwiXCI7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdGNsZWFyOmJvdGg7XG59XG5cbi5jb250YWN0LWZvcm0gLmlucHV0IHtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIHRleHRhcmVhLmlucHV0IHtcblx0aGVpZ2h0OjIwMHB4O1xufVxuXG4vKiAtLSBDb250YWN0IEluZm9ybWF0aW9uIC0tICovXG4uY29udGFjdC1kZXRhaWxzIGxpICB7XG5cdG1hcmdpbi1ib3R0b206MjBweDtcbn1cblxuLmNvbnRhY3QtZGV0YWlscyBsaSBpIHtcblx0Y29sb3I6ICNGRjY3MDA7XG5cdG1hcmdpbi1yaWdodDogMTVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAtLSBDb250YWN0IE1hcCAtLSAqL1xuI2NvbnRhY3QtbWFwIHtcblx0aGVpZ2h0OjI2MHB4O1xuXHRib3JkZXItcmFkaXVzOjRweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0QmxvZyBQYWdlXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyogLS0gU2luZ2xlIEJsb2cgLS0gKi9cbi5zaW5nbGUtYmxvZyB7XG5cdG1hcmdpbi1ib3R0b206NDBweDtcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLWltZyA+IGEge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0ZGlzcGxheTpibG9jaztcblx0Ym9yZGVyLXJhZGl1czo0cHg7XG5cdG92ZXJmbG93OmhpZGRlbjtcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLWltZyBpbWcge1xuXHR3aWR0aDoxMDAlO1xufVxuXG4uc2luZ2xlLWJsb2cgLmJsb2ctaW1nID4gYTphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0dG9wOjA7XG5cdGJvdHRvbTowO1xuXHRyaWdodDowO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdG9wYWNpdHk6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcblx0dHJhbnNpdGlvbjowLjJzIG9wYWNpdHk7XG59XG5cbi5zaW5nbGUtYmxvZyAuYmxvZy1pbWcgPiBhOmhvdmVyOmFmdGVyIHtcblx0b3BhY2l0eTowLjc7XG59XG5cbi5zaW5nbGUtYmxvZyAuYmxvZy1tZXRhIHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuXG4uc2luZ2xlLWJsb2cgLmJsb2ctbWV0YSAuYmxvZy1tZXRhLWF1dGhvciA+IGEge1xuXHRjb2xvcjogI0ZGNjcwMDtcbn1cblxuLnNpbmdsZS1ibG9nIC5ibG9nLW1ldGEgLmJsb2ctbWV0YS1jb21tZW50cyB7XG5cdG1hcmdpbi1sZWZ0OjEwcHg7XG59XG5cbi5zaW5nbGUtYmxvZyAuYmxvZy1tZXRhIC5ibG9nLW1ldGEtY29tbWVudHMgPiBhIHtcblx0Y29sb3I6ICM3OTg2OTY7XG59XG5cbi8qIC0tIFBhZ2luYXRpb24gLS0gKi9cbi5wb3N0LXBhZ2luYXRpb24ge1xuXHRtYXJnaW4tdG9wOjQwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaSB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaSArIGxpIHtcblx0bWFyZ2luLWxlZnQ6MTBweDtcbn1cblxuLnBvc3QtcGFnaW5hdGlvbiAucGFnZXMgbGkge1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNFQkVCRUI7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaSBhIHtcblx0ZGlzcGxheTpibG9jaztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGNvbG9yO1xuXHR0cmFuc2l0aW9uOiAwLjJzIGNvbG9yO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaTpob3ZlciAgLCAucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaS5hY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2NzAwO1xuXHRjb2xvcjojRkZGO1xufVxuXG4ucG9zdC1wYWdpbmF0aW9uIC5wYWdlcyBsaTpob3ZlciBhIHtcblx0Y29sb3I6I0ZGRjtcbn0gXG5cbi5wYWdpbmF0aW9uLWJhY2sgLCAucGFnaW5hdGlvbi1uZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG5cdGhlaWdodDo0MHB4O1xuXHRwYWRkaW5nOjBweCAzMHB4O1xuXHRsaW5lLWhlaWdodDo0MHB4O1xufVxuXG4ucGFnaW5hdGlvbi1uZXh0OmhvdmVyICAsIC5wYWdpbmF0aW9uLWJhY2s6aG92ZXIgIHtcblx0Y29sb3I6I0ZGRjtcblx0YmFja2dyb3VuZC1jb2xvcjojRkY2NzAwO1xufVxuXG4ucGFnaW5hdGlvbi1uZXh0OmFmdGVyIHtcblx0Y29udGVudDpcIlxcZjE3OFwiO1xuXHRmb250LWZhbWlseTpGb250QXdlc29tZTtcblx0bWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLnBhZ2luYXRpb24tYmFjazpiZWZvcmUge1xuXHRjb250ZW50OlwiXFxmMTc3XCI7XG5cdGZvbnQtZmFtaWx5OkZvbnRBd2Vzb21lO1xuXHRtYXJnaW4tcmlnaHQ6MTVweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0QmxvZyBQYWdlIFNpZGViYXJcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ud2lkZ2V0ICsgLndpZGdldCB7XG5cdG1hcmdpbi10b3A6NDBweDtcbn1cblxuLyotLSBTZWFyY2ggLS0qL1xuLndpZGdldC5zZWFyY2gtd2lkZ2V0IHtcblx0cG9zaXRpb246cmVsYXRpdmVcbn1cblxuLndpZGdldC5zZWFyY2gtd2lkZ2V0IC5pbnB1dCB7XG5cdHBhZGRpbmctcmlnaHQ6NjBweDtcbn1cblxuLndpZGdldC5zZWFyY2gtd2lkZ2V0IGJ1dHRvbiB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRyaWdodDowO1xuXHR0b3A6MDtcblx0aGVpZ2h0OjQwcHg7XG5cdHdpZHRoOjQwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjpub25lO1xufVxuXG4ud2lkZ2V0LnNlYXJjaC13aWRnZXQgLmlucHV0OmZvY3VzICsgYnV0dG9uIHtcblx0Y29sb3I6I0ZGNjcwMDtcbn1cblxuLyotLSBDYXRlZ29yeSAtLSovXG4uY2F0ZWdvcnktd2lkZ2V0IC5jYXRlZ29yeSB7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY2F0ZWdvcnktd2lkZ2V0IC5jYXRlZ29yeSArIC5jYXRlZ29yeSB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xufVxuXG4uY2F0ZWdvcnktd2lkZ2V0IC5jYXRlZ29yeTpiZWZvcmUge1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiA0cHg7XG5cdGhlaWdodDogNHB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRjY3MDA7XG5cdG1hcmdpbi1yaWdodDoxMHB4O1xufVxuXG4uY2F0ZWdvcnktd2lkZ2V0IC5jYXRlZ29yeSBzcGFuIHtcblx0Zm9udC1zaXplOjE0cHg7XG5cdG1hcmdpbi1sZWZ0OjEwcHg7XG5cdGNvbG9yOiM3OTg2OTY7XG59XG5cbi8qLS0gU2lkZWJhciBQb3N0cyAtLSovXG4uc2luZ2xlLXBvc3Q6YWZ0ZXIge1xuXHRjb250ZW50OlwiXCI7XG5cdGRpc3BsYXk6YmxvY2s7XG5cdGNsZWFyOmJvdGg7XG59XG5cbi5zaW5nbGUtcG9zdCArIC5zaW5nbGUtcG9zdCB7XG5cdG1hcmdpbi10b3A6MjBweDtcbn1cblxuLnNpbmdsZS1wb3N0IC5zaW5nbGUtcG9zdC1pbWcge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0d2lkdGg6IDgwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmbG9hdDogbGVmdDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRtYXJnaW4tdG9wOiAzcHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpbmdsZS1wb3N0IC5zaW5nbGUtcG9zdC1pbWcgaW1nIHtcblx0d2lkdGg6MTAwJTtcbn1cblxuLnNpbmdsZS1wb3N0LWltZzphZnRlciB7XG5cdGNvbnRlbnQ6XCJcIjtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdGxlZnQ6MDtcblx0dG9wOjA7XG5cdGJvdHRvbTowO1xuXHRyaWdodDowO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRjY3MDA7XG5cdG9wYWNpdHk6MDtcblx0LXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcblx0dHJhbnNpdGlvbjowLjJzIG9wYWNpdHk7XG59XG5cbi5zaW5nbGUtcG9zdC1pbWc6aG92ZXI6YWZ0ZXIge1xuXHRvcGFjaXR5OjAuNztcbn1cblxuLyotLSBUYWdzIC0tKi9cbi50YWdzLXdpZGdldCAudGFnIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdG1hcmdpbi1yaWdodDogMHB4O1xuXHRtYXJnaW4tdG9wOiA1cHg7XG5cdHBhZGRpbmc6IDVweCAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRjb2xvcjogIzc5ODY5Njtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcblx0dHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi50YWdzLXdpZGdldCAudGFnOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojRkY2NzAwO1xuXHRib3JkZXItY29sb3I6I0ZGNjcwMDtcblx0Y29sb3I6I0ZGRjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0U2luZ2xlIFBvc3QgUGFnZVxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qIC0tLSBCbG9nIFBvc3QgTWV0YSAtLS0gKi9cbi5ibG9nLXBvc3QtbWV0YSB7XG5cdG1hcmdpbi10b3A6NDBweDtcbn1cblxuLmJsb2ctcG9zdC1tZXRhIGxpIHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5ibG9nLXBvc3QtbWV0YSBsaSArIGxpIHtcblx0bWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLmJsb2ctcG9zdC1tZXRhIGxpICwgLmJsb2ctcG9zdC1tZXRhIGxpID4gYSB7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5ibG9nLXBvc3QtbWV0YSAuYmxvZy1tZXRhLWF1dGhvciA+IGEge1xuXHRjb2xvcjogI0ZGNjcwMDtcbn1cblxuLyogLS0tIEJsb2cgU2hhcmUgLS0tICovXG4uYmxvZy1zaGFyZSB7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUJFQkVCO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0bWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJsb2ctc2hhcmUgPiBoNCB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW46MDtcbn1cblxuLmJsb2ctc2hhcmUgYSAge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luLWxlZnQ6MTBweDtcblx0d2lkdGg6NDBweDtcblx0aGVpZ2h0OjQwcHg7XG5cdGxpbmUtaGVpZ2h0OjQwcHg7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRjb2xvcjojRkZGO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHQtd2Via2l0LXRyYW5zaXRpb246MC4ycyBvcGFjaXR5O1xuXHR0cmFuc2l0aW9uOjAuMnMgb3BhY2l0eTtcbn1cblxuLmJsb2ctc2hhcmUgYS5mYWNlYm9vayB7XG5cdGJhY2tncm91bmQtY29sb3I6IzNiNTk5ODtcbn1cblxuLmJsb2ctc2hhcmUgYS50d2l0dGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojNTVhY2VlO1xufVxuXG4uYmxvZy1zaGFyZSBhLmdvb2dsZS1wbHVzIHtcblx0YmFja2dyb3VuZC1jb2xvcjojZGQ0YjM5O1xufVxuXG4vKiAtLS0gQmxvZyBDb21tZW50cyAtLS0gKi9cbi5ibG9nLWNvbW1lbnRzIHtcblx0bWFyZ2luLXRvcDo0MHB4O1xufVxuXG4uYmxvZy1jb21tZW50cyAubWVkaWEge1xuXHRtYXJnaW4tdG9wOjIwcHg7XG5cdG1hcmdpbi1ib3R0b206MjBweDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhIC5tZWRpYSB7XG5cdG1hcmdpbi1sZWZ0OjIwcHg7XG59XG5cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYSAubWVkaWE6bnRoLWxhc3QtY2hpbGQoMSkge1xuXHRtYXJnaW4tYm90dG9tOjBweDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhIC5tZWRpYS1ib2R5IHtcblx0cGFkZGluZzoyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNFQkVCRUI7XG5cdGJvcmRlci1yYWRpdXM6MHB4IDRweCA0cHg7XG59XG5cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYSAubWVkaWEtbGVmdDpiZWZvcmUge1xuXHRjb250ZW50OlwiXCI7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRyaWdodDowO1xuXHR0b3A6MDtcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLXdpZHRoOiAwcHggMTVweCAxNXB4O1xuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNFQkVCRUIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYS1sZWZ0IHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cblxuLmJsb2ctY29tbWVudHMgLm1lZGlhLWxlZnQgaW1nIHtcblx0d2lkdGg6ODBweDtcblx0aGVpZ2h0OjgwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6I0VCRUJFQjtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG59XG5cbi5ibG9nLWNvbW1lbnRzIC5tZWRpYSAuZGF0ZS1yZXBseSB7XG5cdGZvbnQtc2l6ZToxMnB4O1xuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG5cdGNvbG9yOiMzNzQwNTA7XG59XG4uYmxvZy1jb21tZW50cyAubWVkaWEgLmRhdGUtcmVwbHkgLnJlcGx5IHtcblx0bWFyZ2luLWxlZnQ6MTVweDtcbn1cblxuLyogLS0tIEJsb2cgUmVwbHkgRm9ybSAtLS0gKi9cbi5ibG9nLXJlcGx5LWZvcm0ge1xuXHRtYXJnaW4tdG9wOjQwcHg7XG59XG5cbi5ibG9nLXJlcGx5LWZvcm0gLmlucHV0IHtcblx0bWFyZ2luLWJvdHRvbToyMHB4O1xufVxuXG4uYmxvZy1yZXBseS1mb3JtIC5pbnB1dC5uYW1lLWlucHV0ICwgLmJsb2ctcmVwbHktZm9ybSAuaW5wdXQuZW1haWwtaW5wdXQge1xuXHR3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblx0ZmxvYXQ6bGVmdDtcbn1cblxuLmJsb2ctcmVwbHktZm9ybSAuaW5wdXQuZW1haWwtaW5wdXQge1xuXHRtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJsb2ctcmVwbHktZm9ybSB0ZXh0YXJlYSB7XG5cdGhlaWdodDo5MHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRSZXNwb25zaXZlXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuXHQuc2VjdGlvbi1oZWFkZXIgaDIge1xuXHRcdGZvbnQtc2l6ZToyNHB4O1xuXHR9XG5cblx0LyotLSBXaHkgdXMgLS0qL1xuXHQjd2h5LXVzIC5mZWF0dXJlIHtcblx0XHRtYXJnaW4tdG9wOjQwcHg7XG5cdH1cblx0XG5cdC5hYm91dC12aWRlbyB7XG5cdFx0bWFyZ2luLXRvcDo0MHB4O1xuXHR9XG5cdFxuXHQvKi0tIENhbGwgdG8gYWN0aW9uIC0tKi9cblx0I2N0YSB7XG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdH1cblx0XG5cdC8qLS0gRm9vdGVyIC0tKi9cblx0LmZvb3Rlci1sb2dvIHtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0fVxuXHRcblx0LmZvb3Rlci1uYXYge1xuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHR9XG5cdC5mb290ZXItbmF2IGxpIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG5cdFxuXHQuZm9vdGVyLXNvY2lhbCB7XG5cdFx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdH1cblx0LmZvb3Rlci1zb2NpYWwgbGkge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdH1cblx0XG5cdC5mb290ZXItY29weXJpZ2h0IHtcblx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0XHRsaW5lLWhlaWdodDppbmhlcml0O1xuXHRcdG1hcmdpbi10b3A6MjBweDtcblx0fVxuXHRcblx0LyotLSBDb250YWN0IHBhZ2UgLS0qL1xuXHQuY29udGFjdC1mb3JtICB7XG5cdFx0bWFyZ2luLWJvdHRvbTo0MHB4O1xuXHR9XG5cblx0LmNvbnRhY3QtZm9ybSBidXR0b24ge1xuXHRcdGZsb2F0Om5vbmUgIWltcG9ydGFudDtcblx0fVxuXHRcblx0LyotLSBCbG9nIHBhZ2UgLS0qL1xuXHQjbWFpbiB7XG5cdFx0bWFyZ2luLWJvdHRvbTo4MHB4O1xuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0LyotLSBIZXJvIGFyZWEgLS0qL1xuXHQuaGVyby1hcmVhIGgxIHtcblx0XHRmb250LXNpemU6MzBweDtcblx0fVxuXG5cdC8qIC0tIEJyZWFkY3J1bWIgLS0gKi9cblx0Lmhlcm8tYXJlYS10cmVlIGxpIHtcblx0XHRmb250LXNpemU6MTJweDtcblx0fVxuXG5cdC8qLS0gUGFnaW5hdGlvbiAtLSovXG5cdC5wb3N0LXBhZ2luYXRpb24gLnBhZ2VzIHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXHQvKi0tIENvdXJzZXMgLS0qL1xuXHQjY291cnNlcy13cmFwcGVyIFtjbGFzcyo9J2NvbC14cyddIHtcblx0XHR3aWR0aDoxMDAlO1xuXHR9XG5cdFxuXHQvKi0tIEJsb2cgQ29tbWVudHMgLS0qL1xuXHQuYmxvZy1jb21tZW50cyAubWVkaWEgLm1lZGlhIHtcblx0XHRtYXJnaW4tbGVmdDowcHg7XG5cdH1cblx0XG5cdC8qLS0gQmxvZyBSZXBseSBGb3JtIC0tKi9cblx0LmJsb2ctcmVwbHktZm9ybSAuaW5wdXQubmFtZS1pbnB1dCAsIC5ibG9nLXJlcGx5LWZvcm0gLmlucHV0LmVtYWlsLWlucHV0IHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRmbG9hdDpub25lO1xuXHR9XG5cdFxuXHQuYmxvZy1yZXBseS1mb3JtIC5pbnB1dC5lbWFpbC1pbnB1dCB7XG5cdFx0bWFyZ2luLWxlZnQ6IDBweDtcblx0fVxufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRQcmVsb2FkZXJcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxuI3ByZWxvYWRlciB7XG5cdHBvc2l0aW9uOmZpeGVkO1xuXHRsZWZ0OjA7XG5cdHJpZ2h0OjA7XG5cdHRvcDowO1xuXHRib3R0b206MDtcblx0YmFja2dyb3VuZC1jb2xvcjojRkZGO1xuXHR6LWluZGV4Ojk5OTk7XG59XG5cbiNwcmVsb2FkZXIgLnByZWxvYWRlciB7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRsZWZ0OjUwJTtcblx0dG9wOjUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XG5cdCAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSAsIC01MCUpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcbn1cblxuI3ByZWxvYWRlciAucHJlbG9hZGVyOmFmdGVyIHtcblx0Y29udGVudDpcIlwiO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHR3aWR0aDo0MHB4O1xuXHRoZWlnaHQ6NDBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0ZGNjcwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiAxcyBwcmVsb2FkZXIgbGluZWFyIGluZmluaXRlO1xuXHQgICAgICAgIGFuaW1hdGlvbjogMXMgcHJlbG9hZGVyIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHByZWxvYWRlciB7XG5cdGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XG5cdHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuQGtleWZyYW1lcyBwcmVsb2FkZXIge1xuXHRmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fVxuXHR0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/landing-module/app.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/landing-module/app.component.ts ***!
          \*************************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Welcome to QuizO';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-module/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/landing-module/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/landing-module/landing.module.ts": 
        /*!**************************************************!*\
          !*** ./src/app/landing-module/landing.module.ts ***!
          \**************************************************/
        /*! exports provided: LandingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function () { return LandingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/landing-module/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/landing-module/app.component.ts");
            var LandingModule = /** @class */ (function () {
                function LandingModule() {
                }
                return LandingModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/material/material.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/material/material.module.ts ***!
          \*********************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
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
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            var MaterialComponents = [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
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
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"]
            ];
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [MaterialComponents],
                    exports: [MaterialComponents]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 767px;\n    width: 100%;\n    line-height: 1.4;\n    padding: 0px 15px;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 150px;\n    line-height: 150px;\n    margin-bottom: 25px;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 186px;\n    font-weight: 900;\n    margin: 0px;\n    text-transform: uppercase;\n    background: url('text.png');\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  .notfound h2 {\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 26px;\n    font-weight: 700;\n    margin: 0;\n  }\n  \n  .notfound p {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 0px;\n    text-transform: uppercase;\n  }\n  \n  .notfound a {\n    font-family: 'Titillium Web', sans-serif;\n    display: inline-block;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    border: none;\n    background: #5c91fe;\n    padding: 10px 40px;\n    font-size: 14px;\n    font-weight: 700;\n    border-radius: 1px;\n    margin-top: 15px;\n    transition: 0.2s all;\n  }\n  \n  .notfound a:hover {\n    opacity: 0.8;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 {\n      height: 110px;\n      line-height: 110px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 120px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVZLHNCQUFzQjtFQUNoQzs7RUFFQTtJQUNFLFVBQVU7SUFDVixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBR0EsZ0NBQWdDO0VBQzFDOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwyQkFBNEM7SUFDNUMsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztFQUNYOztFQUVBO0lBQ0UscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHdDQUF3QztJQUN4QyxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBRWhCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFO01BQ0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICNub3Rmb3VuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gICNub3Rmb3VuZCAubm90Zm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCB7XG4gICAgbWF4LXdpZHRoOiA3NjdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICB9XG4gIFxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTg2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy90ZXh0LnBuZycpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIGgyIHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIHAge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIC5ub3Rmb3VuZCBhIHtcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzVjOTFmZTtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgfVxuICBcbiAgLm5vdGZvdW5kIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTEwcHg7XG4gICAgfVxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/page-not-found/page-not-found.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/page-not-found/page-not-found.component.ts ***!
          \************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                HrURLprefix: 'http://15.206.152.181:8084/hr',
                employeeURLprefix: 'http://15.206.152.181:8083/employee',
                adminURLprefix: 'http://15.206.152.181:8082/admin',
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/cgi/Documents/Stackroute/adaptive-quiz-engine/aqeFrontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map