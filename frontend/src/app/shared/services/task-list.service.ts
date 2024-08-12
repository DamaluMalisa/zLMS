// shared/task-list.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  private activeTabSubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
  public activeTab$: Observable<string> = this.activeTabSubject.asObservable();

  setActiveTab(tab: string): void {
    this.activeTabSubject.next(tab);
  }
}
