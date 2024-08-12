

import { Component, OnInit, Inject   } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'form-editor',
  template:`
    <div *nzIf=""></div>

<div *ngIf="isValid && isDarkMode(); then thenTemplateName else elseTemplateName"></div>

<ng-template #thenTemplateName>
  <editor [init]="{
      plugins: 'lists link image table code help wordcount',
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl',
      skin: 'oxide-dark',
      content_css: 'dark'
    }"></editor>
</ng-template>

<ng-template #elseTemplateName>
  <editor [init]="{
      plugins: 'lists link image table code help wordcount',
      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media template link anchor codesample | ltr rtl'
    }"></editor>
</ng-template>
  `,
})

export class EditorComponent implements OnInit {
  isValid: boolean;

  constructor (@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {

    this.isValid = true;
  }
  isDarkMode(): boolean {
    return this.document.body.classList.contains('dark');
  }
}
