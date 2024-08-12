import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TodoListComponent } from './todo/todo.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ContactListComponent } from './contacts/contacts-list/contact-list.component';
import { ContactGridComponent } from './contacts/contacts-grid/contact-grid.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ReadEmailComponent } from './email/read-email/read-email.component';
import { SupportComponent } from './supports/support/support.component';
import { AddSupportComponent } from './supports/add-support/add-support.component';
import { ViewSupportComponent } from './supports/view-support/view-support.component';
import { ImportComponent } from './import-export/import/import.component';
import { ExportComponent } from './import-export/export/export.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StudentComponent } from './pages/student/student.component';
import { StudyProgramComponent } from './pages/study-program/study-program.component';
import { SubjectsComponent } from './subject/subject.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ThesisComponent } from './pages/thesis/thesis.component';
import { AddressComponent } from './pages/address/address.component';
import { CityComponent } from './pages/city/city.component';
import { CountryComponent } from './pages/country/country.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { AuthGuard } from '../core/guards/auth.guard';
const routes: Routes = [
    {
      path: 'email',
      children: [
          {
              path: 'inbox',
              component: InboxComponent,
              data: {
                  title: 'Inbox',
              }
          },
          {
              path: 'read-email',
              component: ReadEmailComponent,
              data: {
                  title: 'Read Email',
              }
          }
      ]
    },
    {
        path: 'chat',
        component: ChatComponent,
        data: {
            title: 'Chats',
        }
    },
    {
        path: 'projects',
        children: [
            {
                path: 'project-list',
                component: ProjectListComponent,
                data: {
                    title: 'Project List',
                    headerDisplay: "none"
                }
            },
            {
                path: 'project-details',
                component: ProjectDetailsComponent,
                data: {
                    title: 'Project Details',
                    headerDisplay: "none"
                }
            }
        ]
    },
    {
        path: 'study-programs',
        component: StudyProgramComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Study Program',
            headerDisplay: "none",
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
        },
    },
    {
        path: 'students',
        component: StudentComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Students',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'subjects',
        component: SubjectsComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Subject',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'teachers',
        component: TeacherComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Teacher',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'administrators',
        component: AdministratorComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Teacher',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'thesis',
        component: ThesisComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Thesis',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'addresses',
        component: AddressComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Teacher',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "Address"
        }
    },
    {
        path: 'cities',
        component: CityComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'City',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'countries',
        component: CountryComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Country',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
        path: 'faculties',
        component: FacultyComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Faculties',
            allowedRoles: ['ROLE_ADMIN'],
            validationMethod: 'any',
            headerDisplay: "none"
        }
    },
    {
      path: 'contacts',
      children: [
          {
              path: 'contacts-list',
              component: ContactListComponent,
              data: {
                  title: 'contact List',
                  headerDisplay: "none"
              }
          },
          {
              path: 'contacts-grid',
              component: ContactGridComponent,
              data: {
                  title: 'contact grid',
                  headerDisplay: "none"
              }
          }
      ]
    },
    {
        path: 'todo',
        component: TodoListComponent,
        data: {
            title: 'Todo',
        }
    },
    {
      path: 'calendar',
      component: CalendarComponent,
        data: {
            title: 'Calendar',
        }
    },
    {
      path: 'supports',
      children: [
          {
              path: 'support',
              component: SupportComponent,
              data: {
                  title: 'Support ticket',
              }
          },
          {
              path: 'add-support',
              component: AddSupportComponent,
              data: {
                  title: 'Add Support',
              }
          },
          {
            path: 'view-support',
            component: ViewSupportComponent,
            data: {
                title: 'Ticket Details',
            }
          }
      ]
    },
    {
      path: 'import-export',
      children: [
          {
            path: 'import',
            component: ImportComponent,
            data: {
                title: 'Import',
            }
          },
          {
            path: 'export',
            component: ExportComponent,
            data: {
                title: 'Export',
            }
          },
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppsRoutingModule { }
