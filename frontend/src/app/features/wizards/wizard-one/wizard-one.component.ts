import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-wizard-one',
  templateUrl: './wizard-one.component.html',
  styleUrls: ['./wizard-one.component.scss'],
})
export class WizardOneComponent {
  isLoading = true;
  showContent = false;

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  //Step
  current = 0;
  showConfirmation = false;
  isReviewOrderFinished = false;

  constructor(private modalService: NzModalService) {}

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  confirm(): void {
    this.modalService.confirm({
      nzTitle: '<span class="text-dark dark:text-white/[.87]">Confirmation</span>',
      nzContent: '<div class="text-light dark:text-white/60 text-[15px]">Are you sure you want to proceed?</div>',
      nzClassName: 'confirm-modal',
      nzOnOk: () => {
        this.isReviewOrderFinished = true;
        this.showConfirmation = true;
      }
    });
  }

  getStatus(stepIndex: number): string {
    if (this.current > stepIndex) {
      return 'finish';
    } else if (this.current === stepIndex) {
      return 'process';
    } else {
      return 'wait';
    }
  }
}
