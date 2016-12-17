import {Component, Inject} from '@angular/core';
import {FileUploadService} from './fileUploadService';
@Component({
    selector: 'home',
    providers: [FileUploadService],
    templateUrl: "../app/hotel/detailHotel.html"
})

export class HomeComponent {
    psdTemplates: any;
    status: number;
    constructor(@Inject(FileUploadService) private fileUploadService: FileUploadService) {
        this.psdTemplates = new Array<File>();
    }

    public psdTemplateSelectionHandler(fileInput: any) {
        console.log(fileInput);
        let FileList: FileList = fileInput.target.files;
        this.psdTemplates.length = 0;
        for (let i = 0, length = FileList.length; i < length; i++) {
            this.psdTemplates.push(FileList.item(i));
        }
        console.log(this.psdTemplates);
        // this.progressBarVisibility = true;
    }
    public psdTemplateUploadHandler() {
        let result: any;

        if (!this.psdTemplates.length) {
            return;
        }
        this.fileUploadService.getObserver()
            .subscribe(progress => {
                console.log(progress);
                this.status = progress;
            });
        try {
            result = this.fileUploadService.upload('/upload', this.psdTemplates).then((res)=>{
                console.log(res);
            }, (err) =>{ console.log(err); });
        } catch (error) {
            document.write(error)
        }
        console.log(result);
        if (!result['images']) {
            return;
        }

        // this.saveUploadedTemplatesData(result['images']);
    }
}
