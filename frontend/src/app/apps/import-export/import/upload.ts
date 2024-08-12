import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-upload',
  template: `
    <nz-upload
      class="upload-list-inline"
      nzListType="picture"
      nzType="drag"
      [nzMultiple]="true"
      [nzFileList]="fileList"
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      (nzChange)="handleChange($event)"
    >
      <p class="text-center mb-[20px]">
        <svg-icon class="[&>svg]:w-[70px] [&>svg]:h-[70px] text-light-extra dark:text-white/60 inline-block" src="assets/images/svg/unicons-line/upload.svg"></svg-icon>
      </p>
      <p class="text-[20px] font-medium text-dark dark:text-white/[.87]">Drop File or <strong class="text-primary">Browse</strong></p>
    </nz-upload>
  `,
  styles: [
    `
      :host ::ng-deep .ant-upload.ant-upload-drag {
        @apply border-2 border-dashed border-normal dark:border-white/10 rounded-10 h-auto mb-[15px] bg-regularBG dark:bg-white/10;
      }
      :host ::ng-deep .ant-upload.ant-upload-drag .ant-upload-btn {
        @apply min-h-[278px];
      }
      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item-thumbnail{
        @apply flex items-center justify-center;
      }
      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item{
        @apply rounded-6 py-[8px] px-[15px] border-regular dark:border-white/30;
      }
      :host ::ng-deep .upload-list-inline .ant-upload-animate-enter {
        animation-name: uploadAnimateInlineIn;
      }
      :host ::ng-deep .upload-list-inline .ant-upload-animate-leave {
        animation-name: uploadAnimateInlineOut;
      }
      :host ::ng-deep .ant-upload-list-picture .ant-upload-list-item-error{
        @apply border-danger dark:border-danger;
      }
    `,
  ],
})
export class UploadComponent implements OnInit {
  fileList: NzUploadFile[] = [];

  constructor(private msg: NzMessageService) {}

  ngOnInit(): void {
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      this.fileList = JSON.parse(storedFiles);
    }
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
    this.fileList = [...fileList];
    this.storeFilesLocally();
  }

  private storeFilesLocally(): void {
    localStorage.setItem('uploadedFiles', JSON.stringify(this.fileList));
  }
}
