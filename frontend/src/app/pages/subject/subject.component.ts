import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [`
    :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header{
      @apply text-15 font-medium text-dark dark:text-white/[.87];
    }
    :host ::ng-deep .ant-collapse-borderless > .ant-collapse-item:last-child{
      @apply border-b-1 border-regular dark:border-white/10 border-solid;
    }
    :host ::ng-deep .ant-collapse-content > .ant-collapse-content-box{
      @apply px-6 pt-5 pb-[30px] #{!important};
    }
  `]
})
export class SubjectComponent {



  constructor(private router: Router, private route: ActivatedRoute) {}

  isLoading = true;
  showContent = false;
  listItemClass = 'relative inline-block w-full py-3 ps-[20px] text-body dark:text-white/60 text-[15px] font-medium cursor-pointer relative flex py-1.5 ltr:pl-[22px] rtl:pr-[22px] text-body dark:text-white/60 hover:text-primary text-15 font-normal after:absolute ltr:after:left-0 rtl:after:right-0 after:top-0 after:w-0.5 after:h-full after:z-10 after:bg-transparent [&.active]:after:bg-primary';
  /* --- Show and hide div --- */
  showDiv = false;
  activeTab: string;


  allChecked: boolean = false;
  indeterminate: boolean = false;
  isMailListOpen: boolean = true;
  isNavOpen: boolean = false;
  isCompose: boolean = false;
  selectedMail: string = "";
  filter;
  isValid: boolean;
  isClassA = true;


  ngOnInit() {
    // Simulate loading time
    this.loadData();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Determine the active tab based on the current route
        this.updateActiveTab();
      }
    });

    this.updateActiveTab();

  }

  updateActiveTab(): void {
    // Get the current route
    const currentRoute = this.router.url;
    const routeTabMapping = {
      bundles: 'bundles',
      announcement: 'announcements',
      assignment: 'assignments',
      quiz: 'quizzes',
      page: 'pages',
      people: 'people',
      file: 'files',
      grade: 'grades'
    };
    this.activeTab = Object.keys(routeTabMapping).find(routeKeyword => currentRoute.includes(routeKeyword))
      ? routeTabMapping[Object.keys(routeTabMapping).find(routeKeyword => currentRoute.includes(routeKeyword))]
      : ''; // Default case

  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  penMail(mail: string) {
    this.selectedMail = mail;
    this.isMailListOpen = false;
  }

  closeMail() {
    this.selectedMail = '';
    this.isMailListOpen = true;
    this.isCompose = false;
  }

  openNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  compose() {
    this.selectedMail = '';
    this.isMailListOpen = true;
    this.isCompose = true;
  }


  /* Editor */


  /* --- Cancel Button --- */
  isDropdownOpen = false;

  // Other component code...

  handleDropdownVisibleChange(isOpen: boolean): void {
    this.isDropdownOpen = isOpen;
  }

  cancelLabelCreation(): void {
    this.isDropdownOpen = false;
  }

  /* --- Show and hide div --- */

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  hideDiv() {
    this.showDiv = false;
  }

  /*--------- Full screen Window ----------*/
  toggleClass() {
    this.isClassA = !this.isClassA;
  }
}
