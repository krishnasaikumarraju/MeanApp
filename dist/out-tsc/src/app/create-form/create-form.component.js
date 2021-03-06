"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var posts_service_1 = require("../posts.service");
var CreateFormComponent = /** @class */ (function () {
    function CreateFormComponent(_push) {
        this._push = _push;
    }
    CreateFormComponent.prototype.ngOnInit = function () {
    };
    CreateFormComponent.prototype.push = function (x) {
        // console.log("click called");
        this.regForm = x.value;
        this._push.getPush(this.regForm).subscribe(function (res) { return res.json(); });
    };
    CreateFormComponent = __decorate([
        core_1.Component({
            selector: 'app-create-form',
            templateUrl: './create-form.component.html',
            styleUrls: ['./create-form.component.css']
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], CreateFormComponent);
    return CreateFormComponent;
}());
exports.CreateFormComponent = CreateFormComponent;
//# sourceMappingURL=create-form.component.js.map