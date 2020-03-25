"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_layout_component_1 = require("./modules/shared/component/layout/admin-layout/admin-layout.component");
var users_layout_component_1 = require("./modules/shared/component/layout/users-layout/users-layout.component");
var blank_layout_component_1 = require("./modules/shared/component/layout/blank-layout/blank-layout.component");
var auth_layout_component_1 = require("./modules/shared/component/layout/auth-layout/auth-layout.component");
var routes = [
    { path: "admin", component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: "posts", loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/view/posts/posts.module'); }).then(function (p) { return p.PostsModule; }); }
            }
        ]
    },
    { path: "users", component: users_layout_component_1.UsersLayoutComponent,
        children: [
            {
                path: "notes", loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/view/notes/notes.module'); }).then(function (m) { return m.NotesModule; }); }
            }
        ]
    },
    { path: "blank", component: blank_layout_component_1.BlankLayoutComponent
    },
    { path: "auth", component: auth_layout_component_1.AuthLayoutComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
