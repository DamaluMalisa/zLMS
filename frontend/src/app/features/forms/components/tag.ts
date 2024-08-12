

import { Component } from '@angular/core';

@Component({
  selector: 'tags',
  template:`
    <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark">Tag 1</nz-tag>
    <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark">
    Tag 2
    </nz-tag>
    <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark dark:[&>span]:text-white/60" nzMode="closeable" (nzOnClose)="onClose()">Tag 2</nz-tag>
    <nz-tag class="inline-flex items-center bg-white dark:bg-white/10 dark:border-white/10 dark:text-white/60 text-dark dark:[&>span]:text-white/60" nzMode="closeable" (nzOnClose)="preventDefault($event)">Prevent Default</nz-tag>
  `,
})

export class TagsComponent{
  //tags
  onClose(): void {
    console.log('tag was closed.');
  }

  preventDefault(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('tag can not be closed.');
  }
}
