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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var fileUploadService_1 = require('./fileUploadService');
var HomeComponent = (function () {
    function HomeComponent(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.psdTemplates = new Array();
    }
    HomeComponent.prototype.psdTemplateSelectionHandler = function (fileInput) {
        console.log(fileInput);
        var FileList = fileInput.target.files;
        this.psdTemplates.length = 0;
        for (var i = 0, length_1 = FileList.length; i < length_1; i++) {
            this.psdTemplates.push(FileList.item(i));
        }
        console.log(this.psdTemplates);
        // this.progressBarVisibility = true;
    };
    HomeComponent.prototype.psdTemplateUploadHandler = function () {
        var _this = this;
        var result;
        if (!this.psdTemplates.length) {
            return;
        }
        this.fileUploadService.getObserver()
            .subscribe(function (progress) {
            console.log(progress);
            _this.status = progress;
        });
        try {
            result = this.fileUploadService.upload('/upload', this.psdTemplates).then(function (res) {
                console.log(res);
            }, function (err) { console.log(err); });
        }
        catch (error) {
            document.write(error);
        }
        console.log(result);
        if (!result['images']) {
            return;
        }
        // this.saveUploadedTemplatesData(result['images']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            providers: [fileUploadService_1.FileUploadService],
            templateUrl: "../app/hotel/detailHotel.html"
        }),
        __param(0, core_1.Inject(fileUploadService_1.FileUploadService)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof fileUploadService_1.FileUploadService !== 'undefined' && fileUploadService_1.FileUploadService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map