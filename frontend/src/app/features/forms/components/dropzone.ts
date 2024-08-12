

import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'dropzone',
  template:`
  <nz-upload
    class="block [&>div>div]:min-h-[188px] mb-[30px] dark:[&>div]:bg-white/10 [&>div]:bg-[#fafafa] dark:[&>div]:border-white/10 dark:hover:[&>div]:border-primary"
      nzType="drag"
      [nzMultiple]="true"
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      (nzChange)="handleChange($event)"
    >
      <p class="ant-upload-text">Drop files here to upload</p>
    </nz-upload>
    <nz-upload
    class="block [&>div>div]:min-h-[110px] dark:[&>div]:bg-white/10 [&>div]:bg-[#fafafa] dark:[&>div]:border-white/10 dark:hover:[&>div]:border-primary"
      nzType="drag"
      [nzMultiple]="true"
      nzAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      (nzChange)="handleChange($event)"
    >
      <p class="ant-upload-text">Drop files here to upload</p>
    </nz-upload>
  `,
  styles: [
    `
    :host ::ng-deep .ant-upload.ant-upload-drag p.ant-upload-text{
      @apply text-theme-gray dark:text-white/60;
    }

    `
  ]
})

export class DropzoneComponent{
  //upload
  constructor(private msg: NzMessageService) {}

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
  }
}
