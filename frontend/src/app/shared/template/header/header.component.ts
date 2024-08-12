import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import messages from '../../../../assets/data/global/header/messages.json';
import notification from '../../../../assets/data/global/header/notification.json';
import authorMenu from '../../../../assets/data/global/header/author-menu.json';
import settings from '../../../../assets/data/global/header/settings.json';
import {AuthService} from '../../../core/services/auth.service';
import {StudentService} from '../../../core/services/student.service';
import {Student} from '../../../core/models/student.model';
import {TeacherService} from '../../../core/services/teacher.service';
import {Teacher} from '../../../core/models/teacher.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    searchVisible = false;
    quickViewVisible = false;
    isFolded: boolean;
    isExpand: boolean;
    appMessages = messages.appMessages;
    appNotification = notification.appNotification;
    appAuthorMenu = authorMenu.appAuthorMenu;
    appSettings = settings.appSettings;
    student: Student[];
    teacher: Teacher[];

    constructor( private themeService: ThemeConstantService,
                 public authService: AuthService,
                 private teacherService: TeacherService,
                 private studentService: StudentService, ) {}

    signOut(): void {
      console.log('User signed out!');
    }

    ngOnInit(): void {
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);

        this.studentService.getById([this.authService.getStudentId()]).subscribe((data: any[]) => {
        this.student = data;
      });

        this.teacherService.getById([this.authService.getTeacherId()]).subscribe((data: any[]) => {
        this.teacher = data;
      });
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }

    searchToggle(): void {
        this.searchVisible = !this.searchVisible;
    }

    quickViewToggle(): void {
        this.quickViewVisible = !this.quickViewVisible;
    }
}
