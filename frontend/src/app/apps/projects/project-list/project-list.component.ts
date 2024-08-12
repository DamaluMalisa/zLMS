import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { AppsService } from '../../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SubjectService } from 'src/app/core/services/subject.service';
import { Subject } from 'src/app/core/models/subject.model';
import {AuthService} from '../../../core/services/auth.service';


@Component({
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {

  constructor(private modalService: NzModalService,  public authService: AuthService,
              public service: SubjectService) {}
  // Component properties
  subjectListRaw: Subject[];
  subjectList: any[] = [];
  searchQuery = '';
  isLoading = true;
  showContent = false;
  showContentShorting = false;
  startValue: Date | null = null;
  endValue: Date | null = null;
  selectedSort = 'all';
  filteredSubjects: Subject[];

  // Calendar
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;

  ngOnInit(): void {
    this.filteredSubjects = [...this.subjectList];
    this.filterProjects(); // Filter projects initially

    this.service.getByStudentId(this.authService.getStudentId()).subscribe((data: any[]) => {
      this.subjectListRaw = data;
      this.subjectList = data;

      this.sortProjects(this.selectedSort); // Sort projects based on the selected sort type
    });

    this.service.getByTeacherId(this.authService.getTeacherId()).subscribe((data: any[]) => {
      this.subjectListRaw = data;
      this.subjectList = data;

      this.sortProjects(this.selectedSort); // Sort projects based on the selected sort type
    });

    // Set default selection to "All"
    this.selectedSort = 'all';

    // Simulate loading time
    this.loadData();
  }

    // Simulate loading data
    loadData() {
      // Simulate an asynchronous data loading operation
      setTimeout(() => {
        this.isLoading = false;
        this.showContent = true;
      }, 500);
    }
  // Filter the projects based on the search query
  filterProjects() {
    if (this.searchQuery.trim() === '') {
      this.filteredSubjects = [...this.subjectList];
    } else {
      const query = this.searchQuery.toLowerCase().trim();
      this.filteredSubjects = this.subjectList.filter(item => item.name.toLowerCase().includes(query));
    }
  }


  formatBody = function(body: string) {
    return body.replace(/<(?:.|\n)*?>/gm, ' ');
  };

  // Sort the projects based on the selected sort type
  sortProjects(sortType: string) {
    this.selectedSort = sortType;
    this.isLoading = true; // Enable loading effect
    this.showContentShorting = false;

    if (sortType === 'all') {
      // Show all projects
      this.filteredSubjects = [...this.subjectList];
      this.isLoading = false; // Disable loading effect
      this.showContentShorting = true;
    } else {
      // Filter projects based on sortType
      setTimeout(() => {
        this.filteredSubjects = this.subjectList.filter(item => item.status === sortType);
        this.isLoading = false; // Disable loading effect
        this.showContentShorting = true;
      }, 500); // Simulate a delay for sorting
    }
  }

  // Show modal for creating a new project
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Course',
      nzContent: newProjectContent,
      nzFooter: [
        {
          label: 'Create Course',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({
              nzTitle: 'Are you sure you want to create this course?',
              nzOnOk: () => this.modalService.closeAll()
            })
        }
      ],
      nzWidth: 620
    });
  }

  // Checkbox event handler
  log(value: string[]): void {
  }
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
  }

  handleEndOpenChange(open: boolean): void {
  }

}
