import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import {AuthService} from '../../core/services/auth.service';
import {FileService} from '../../core/services/file.service';

@Component({
  selector: 'app-upload',
  template: `
    <nz-upload
      class="upload-list-inline"
      nzListType="picture"
      nzType="drag"
      [nzDisabled]="false"
      [nzMultiple]="false"
      [nzFileList]="fileList"
      [nzData]="{ 'userId': userId }"
      [nzDownload]="handleDownload"
      nzAction="http://localhost:8080/api/subject-service/files/upload"
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
export class FilesComponent implements OnInit {
  fileList: NzUploadFile[] = [];
  userId: number;

  constructor(private msg: NzMessageService,
              private authService: AuthService,
              private fileService: FileService) {
  }

  ngOnInit(): void {
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      console.log(storedFiles);
      this.fileList = JSON.parse(storedFiles);
      console.log(this.fileList);
      this.userId = this.authService.getUserId();
    }
  }

  handleChange({file, fileList}: NzUploadChangeParam): void {
    console.log('handleChange called with file:', file, 'fileList:', fileList);

    const status = file.status;
    console.log('File status:', status);

    if (status !== 'uploading') {
      console.log('File is not uploading:', file, fileList);
    }
    if (status === 'done') {
      console.log('File upload done:', file);
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.error('File upload error:', file);
      this.msg.error(`${file.name} file upload failed.`);
    }

    this.fileList = [...fileList];
    console.log('Updated fileList:', this.fileList);
    this.storeFilesLocally();
  }

  private storeFilesLocally(): void {
    console.log('Storing files locally:', this.fileList);
    localStorage.setItem('uploadedFiles', JSON.stringify(this.fileList));
  }

  handleDownload = (file: NzUploadFile): void => {
    this.fileService.downloadFile(file.response.id).subscribe(blob => { // Assuming the response contains the file ID
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
