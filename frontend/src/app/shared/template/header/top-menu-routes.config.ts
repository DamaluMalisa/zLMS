import {
  SideNavInterface
} from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
  {
    path: '/pages/setting',
    title: 'Account',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'user',
    submenu: [],
    allowedRoles: ['ROLE_TEACHER, ROLE_STUDENT', 'ROLE_ADMIN']
  },
  {
    path: '/apps/projects/project-list',
    title: 'Dashboard',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'dashboard',
    submenu: [],
    allowedRoles: ['ROLE_TEACHER, ROLE_STUDENT']
  },
  {
    path: '/apps/calendar',
    title: 'Calendar',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'calendar',
    submenu: [],
    allowedRoles: ['ROLE_TEACHER, ROLE_STUDENT']
  },
  {
    path: '/apps/email/inbox',
    title: 'Inbox',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'inbox',
    submenu: [],
    allowedRoles: ['ROLE_TEACHER, ROLE_STUDENT']
  },
  {
    path: '/features/data-table',
    title: 'Courses',
    iconType: 'nzIcon',
    iconTheme: 'outline',
    icon: 'read',
    submenu: [],
    allowedRoles: ['ROLE_TEACHER, ROLE_STUDENT']
  },
  {
    path: '/apps/faculties',
    title: 'Faculties',
    iconType: 'nzIcon',
    icon: 'bank',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/study-programs',
    title: 'Study programs',
    iconType: 'nzIcon',
    icon: 'book',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/subjects',
    title: 'Subjects',
    iconType: 'nzIcon',
    icon: 'read',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/students',
    title: 'Students',
    iconType: 'nzIcon',
    icon: 'user',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN', 'ROLE_TEACHER']
  },
  {
    path: '/apps/teachers',
    title: 'Teachers',
    iconType: 'nzIcon',
    icon: 'team',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/administrators',
    title: 'Administrators',
    iconType: 'nzIcon',
    icon: 'solution',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/countries',
    title: 'Countries',
    iconType: 'nzIcon',
    icon: 'global',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/cities',
    title: 'Cities',
    iconType: 'nzIcon',
    icon: 'environment',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  },
  {
    path: '/apps/addresses',
    title: 'Addresses',
    iconType: 'nzIcon',
    icon: 'home',
    iconTheme: 'outline',
    submenu: [],
    allowedRoles: ['ROLE_ADMIN']
  }
  
  // {
  //   path: '/changelog/changelog',
  //   title: 'Change-Log',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'rise',
  //   submenu: []
  // },
  // {
  //   path: '',
  //   title: 'Apps',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'appstore',
  //   submenu: [{
  //       path: '',
  //       title: 'Email',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/apps/email/inbox',
  //           title: 'Inbox',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/email/read-email',
  //           title: 'Read Email',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //       ]
  //     },
  //     {
  //       path: '/apps/chat',
  //       title: 'Chat',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/apps/projects',
  //       title: 'Project',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/apps/projects/project-list',
  //           title: 'Projects',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/projects/project-details',
  //           title: 'Project Details',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '/apps/contacts',
  //       title: 'Contacts',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/apps/contacts/contacts-grid',
  //           title: 'Contacts Grid',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/contacts/contacts-list',
  //           title: 'Contact List',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '/apps/todo',
  //       title: 'Todo',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/apps/calendar',
  //       title: 'Calendar',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/apps/import-export',
  //       title: 'Import & Export',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/apps/import-export/import',
  //           title: 'Import',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/import-export/export',
  //           title: 'Export',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //       ]
  //     },
  //     {
  //       path: '/apps/supports',
  //       title: 'Supports',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/apps/supports/support',
  //           title: 'Support',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/supports/add-support',
  //           title: 'Add Support',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/apps/supports/view-support',
  //           title: 'View Support',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //       ]
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'UI Elements',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'layout',
  //   submenu: [
  //     {
  //       path: '/demo/components/alert/en',
  //       title: 'Alert',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/auto-complete/en/',
  //       title: 'Autocomplete',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/avatar/en',
  //       title: 'Avatar',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/badge/en',
  //       title: 'Badge',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/breadcrumb/en',
  //       title: 'Breadcrumb',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/button/en',
  //       title: 'Button',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/calendar/en',
  //       title: 'Calendar',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/card/en',
  //       title: 'Cards',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/carousel/en',
  //       title: 'Carousel',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/cascader/en/',
  //       title: 'Cascader',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/checkbox/en/',
  //       title: 'Checkbox',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/collapse/en/',
  //       title: 'Collapse',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/comment/en/',
  //       title: 'Comment',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/date-picker/en/',
  //       title: 'DatePiker',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/drawer/en/',
  //       title: 'Drawer',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/dropdown/en/',
  //       title: 'Dropdown',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/empty/en/',
  //       title: 'Empty',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/form/en/',
  //       title: 'Form',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/grid/en/',
  //       title: 'Grid',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/input/en/',
  //       title: 'Input',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/list/en/',
  //       title: 'List',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/menu/en/',
  //       title: 'Menu',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/message/en/',
  //       title: 'Message',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/modal/en/',
  //       title: 'Modal',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/notification/en/',
  //       title: 'Notification',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/rate/en/',
  //       title: 'Rate',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/progress/en',
  //       title: 'Progress',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/radio/en',
  //       title: 'Radio',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/demo/components/skeleton/en',
  //       title: 'Skeleton',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Features',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'appstore',
  //   submenu: [{
  //       path: '',
  //       title: 'Charts',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //         path: 'features/chartjs',
  //         title: 'Chart JS',
  //         iconType: '',
  //         icon: '',
  //         iconTheme: '',
  //         submenu: [],
  //       },
  //       {
  //         path: 'features/apexchart',
  //         title: 'Apex Chart',
  //         iconType: '',
  //         icon: '',
  //         iconTheme: '',
  //         submenu: []
  //       },
  //     ]
  //     },
  //     {
  //       path: '/features/icon',
  //       title: 'Icons',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/ant-icons',
  //           title: 'Ant Design',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/uni-icons',
  //           title: 'Uni Icons',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/feather-icons',
  //           title: 'Feather Icons',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       title: 'Forms',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/layouts',
  //           title: 'Form Layouts',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/elements',
  //           title: 'Form Elements',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/components',
  //           title: 'Form Components',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/validations',
  //           title: 'Form Validations',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       title: 'Tables',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/basic-table',
  //           title: 'Basic Table',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/data-table',
  //           title: 'Data Table',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       title: 'Widgets',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/charts',
  //           title: 'Charts',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/features/cards',
  //           title: 'Cards',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       title: 'Wizards',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/wizard-one',
  //           title: 'Wizard One',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       title: 'Maps',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/features/google-maps',
  //           title: 'Google Maps',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //   ],
  // },
  // {
  //   path: '',
  //   title: 'Pages',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'rise',
  //   submenu: [
  //     {
  //       path: '/pages/setting',
  //       title: 'Setting',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/gallery',
  //       title: 'Gallery',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/pricing',
  //       title: 'Pricing',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/banner',
  //       title: 'Banners',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/subject',
  //       title: 'Faq',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/search-result',
  //       title: 'Search Result',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '',
  //       title: 'knowledgeBase',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [{
  //           path: '/pages/knowledge-base/knowledge',
  //           title: 'Knowledge Base',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/pages/knowledge-base/all-article',
  //           title: 'all article',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/pages/knowledge-base/single-article',
  //           title: 'single article',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '/pages/blank-page',
  //       title: 'Blank Page',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '',
  //       title: 'Blogs',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: [
  //         {
  //           path: '/pages/blog-one',
  //           title: 'Blog One',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/pages/blog-two',
  //           title: 'Blog Two',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/pages/blog-three',
  //           title: 'Blog Three',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //         {
  //           path: '/pages/blog-details',
  //           title: 'Blog Details',
  //           iconType: '',
  //           icon: '',
  //           iconTheme: '',
  //           submenu: []
  //         },
  //       ]
  //     },
  //     {
  //       path: '/pages/coming-soon',
  //       title: 'Coming Soon',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/error-page',
  //       title: '404',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/maintenance',
  //       title: 'Maintenance',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/pages/terms-conditions',
  //       title: 'Terms & condition',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Authentication',
  //   iconType: 'nzIcon',
  //   iconTheme: 'outline',
  //   icon: 'lock',
  //   submenu: [{
  //       path: '/authentication/login-1',
  //       title: 'Log In',
  //       iconType: '',
  //       icon: '',

  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/authentication/sign-up-1',
  //       title: 'Sign Up',
  //       iconType: '',
  //       icon: '',

  //       iconTheme: '',
  //       submenu: []
  //     },
  //     {
  //       path: '/authentication/forget-pass',
  //       title: 'Forget password',
  //       iconType: '',
  //       icon: '',
  //       iconTheme: '',
  //       submenu: []
  //     }
  //   ]
  // }
];
