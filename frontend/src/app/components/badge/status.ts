import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-badge-status',
  template: `
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="success"></nz-badge>
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="error"></nz-badge>
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="default"></nz-badge>
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="processing"></nz-badge>
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="warning"></nz-badge>
    <br />
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="success" nzText="Success"></nz-badge>
    <br />
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="error" nzText="Error"></nz-badge>
    <br />
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="default" nzText="Default"></nz-badge>
    <br />
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="processing" nzText="Processing"></nz-badge>
    <br />
    <nz-badge class="dark:text-white/[.87] dark:[&>span]:text-white/[.87]" nzStatus="warning" nzText="Warning"></nz-badge>
    <br />
  `
})
export class NzDemoBadgeStatusComponent {}
