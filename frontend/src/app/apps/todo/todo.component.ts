import { Component, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import list from '../../../assets/data/apps/user-list.json';

@Component({
  selector: 'todo-activities',
  templateUrl: './todo.component.html'
})
export class TodoListComponent {
  activeTab: number = 1;
  UserList = list.UserList;
  isVisible = false;
  isLoading = true;
  showContent = false;
  todoForm: FormGroup;
  newTaskDescription: string = ''; // Add this property

  constructor(private modal: NzModalService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.UserList, event.previousIndex, event.currentIndex);
  }

  toggleActive(item: any): void {
    item.star = item.star === 'active' ? 'inactive' : 'active';
  }

  deleteTask(index: number): void {
    this.UserList.splice(index, 1);
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true
    });
  }

  createTask(modalRef: NzModalRef): void {
    if (this.newTaskDescription.trim() !== '') {
      const newTask = {
        id: this.UserList.length + 1,
        sub: this.newTaskDescription,
        duration: '',
        avatar: '',
        star: 'inactive'
      };
      console.log('New task to be added:', newTask);
      this.UserList.push(newTask);
      console.log('Updated UserList:', this.UserList);
      this.newTaskDescription = ''; // Clear the input field
    }

    this.todoForm.reset();
    modalRef.destroy(); // Close the modal
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  destroyTplModal(modalRef: NzModalRef): void {
    modalRef.destroy();
  }
}
