
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  templateUrl: './elements.component.html',
  styles: [`
  :host ::ng-deep .basic-select .ant-select-selector{
    @apply h-[50px] rounded-4 border-normal px-[20px] flex items-center dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-white/100;
  }
  :host ::ng-deep .basic-select.ant-select-multiple .ant-select-selection-item{
      @apply bg-white dark:bg-white/10 border-normal dark:border-white/10;
    }
    ::ng-deep .ant-upload {
      @apply w-full;
    }
    :host ::ng-deep .basic-select .ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector{
      @apply dark:bg-white/10 dark:border-white/10 dark:text-white/60 dark:hover:text-white/100;
    }
  `]
})

export class ElementsComponent{
  isLoading = true;
  showContent = false;
  demoValue: number = 0;
  selectedColor = '#8e1dce'; // Initialize the selected color
  myGroup: FormGroup;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  radioValue = 'A';
  disabled = true;

  colorChanged() {
    console.log('Selected color:', this.selectedColor);
    // Do something with the selected color
  }

  ngOnInit() {
    // Simulate loading time
    this.loadData();

    // Initialize the form group
    this.myGroup = new FormGroup({
      bc1: new FormControl(),
      bc2: new FormControl(),
      bc3: new FormControl(),
      bc4: new FormControl(),
      bc5: new FormControl(),
      bc6: new FormControl(),
      bc9: new FormControl(),
      datePicker: new FormControl(), // Add this control
      monthPicker: new FormControl(), // Add this control
      timePicker: new FormControl() // Add this control
    });

    // Initialize the list of options
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  // Upload
  constructor(private msg: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  //Checkbox
  log(value: string[]): void {
    console.log(value);
  }
}
