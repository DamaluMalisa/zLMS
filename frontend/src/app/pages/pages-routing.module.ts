import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  SettingComponent
} from './setting/setting.component';
import {
  GalleryComponent
} from './gallery/gallery.component';
import {
  PricingComponent
} from './pricing/pricing.component';
import {
  BannerComponent
} from './banner/banner.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SubjectComponent } from './subject/subject.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { KnowledgeComponent } from './knowledge-base/knowledge/knowledge.component';
import { AllArticleComponent } from './knowledge-base/all-article/all-article.component';
import { SingleArticleComponent } from './knowledge-base/single-article/single-article.component';
import { BlogOneComponent } from './blog-page/blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-page/blog-two/blog-two.component';
import { BlogThreeComponent } from './blog-page/blog-three/blog-three.component';
import { BlogDetailsComponent } from './blog-page/blog-details/blog-details.component';
import {AssignmentsComponent} from './subject/assignments.component';
import {BundlesComponent} from './subject/bundles.component';
import {Page} from './subject/pages';
import {QuizzesComponent} from './subject/quizzes.component';
import {PeopleGridComponent} from './subject/people-grid.component';
import {AnnouncementsComponent} from './subject/announcements.component';
import {TakeAssignmentComponent} from './subject/take-assignment.component';
import {QuizComponent} from './subject/quiz.component';
import {PageComponent} from './subject/page.component';
import {GradesComponent} from './subject/grades.component';
import {AnnouncementComponent} from './subject/announcement.component';
import {AssignmentComponent} from './subject/assignment.component';
import {FilesComponent} from './subject/files.component';
import { CreateQuizComponent } from './subject/create-quiz.component';
import { ViewQuizComponent } from './subject/view-quiz.component';
import { TakeQuizComponent } from './subject/take-quiz.component';
import { QuizResultComponent } from './subject/quiz-result.component';
import { StudentGradesComponent } from './subject/student-grades.component';


const routes: Routes = [
  {
    path: 'setting',
    component: SettingComponent,
    data: {
      title: 'Setting',
    }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: {
      title: 'Gallery',
    }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: {
      title: 'Pricing',
    }
  },
  {
    path: 'banner',
    component: BannerComponent,
    data: {
      title: 'Banners',
    },
  },
  {
    path: 'banner',
    component: BannerComponent,
    data: {
      title: 'Banners',
    },
  },
  {
    path: 'blank-page',
    component: BlankPageComponent,
    data: {
      title: 'Blank Page',
    },
  },
  {
    path: 'blog-one',
    component: BlogOneComponent,
    data: {
      title: 'Blog One',
    },
  },
  {
    path: 'blog-one',
    component: BlogOneComponent,
    data: {
      title: 'Blog One',
    },
  },
  {
    path: 'blog-two',
    component: BlogTwoComponent,
    data: {
      title: 'Blog Two',
    },
  },
  {
    path: 'blog-three',
    component: BlogThreeComponent,
    data: {
      title: 'Blog Three',
    },
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
    data: {
      title: 'Blog Details',
    },
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent,
    data: {
      title: 'Coming Soon',
    },
  },
  {
    path: 'error-page',
    component: ErrorPageComponent,
    data: {
      title: '404',
    },
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    data: {
      title: 'Maintenance',
    },
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
    data: {
      title: 'Terms & Conditions',
    },
  },
  {
    path: 'subject/:id',
    component: SubjectComponent,
    data: {
      title: 'Subject Heading',
    },
        children: [

          {
            path: 'assignments',
            component: AssignmentsComponent,
            data: {
              title: 'Assignments',
            }
          },
          {
            path: 'grades',
            component: GradesComponent,
            data: {
              title: 'Grades',
            }
          },
          {
            path: 'files',
            component: FilesComponent,
            data: {
              title: 'Files',
            }
          },
          {
            path: 'take-assignment/:id',
            component: TakeAssignmentComponent,
            data: {
              title: 'Assignment',
            }
          },
          {
            path: 'assignment/:id',
            component: AssignmentComponent,
            data: {
              title: 'Assignment',
            }
          },
          {
            path: 'student-grades/:id',
            component: StudentGradesComponent,
            data: {
              title: 'Student Grades',
            }
          },
          {
            path: 'quiz/:id',
            component: QuizComponent,
            data: {
              title: 'Quiz',
            }
          },
          {
            path: 'view-quiz/:id',
            component: ViewQuizComponent,
            data: {
              title: 'Quiz',
            }
          },
          {
            path: 'take-quiz/:id',
            component: TakeQuizComponent,
            data: {
              title: 'Quiz',
            }
          },
          {
            path: 'page/:id',
            component: PageComponent,
            data: {
              title: 'Page',
            }
          },
          {
            path: 'quiz-result/:id',
            component: QuizResultComponent,
            data: {
              title: 'Page',
            }
          },
          {
            path: '',
            redirectTo: 'bundles',
            pathMatch: 'full',
          },
          {
            path: 'bundles',
            component: BundlesComponent,
            data: {
              title: 'Bundles',
            }
          },
          {
            path: 'pages',
            component: Page,
            data: {
              title: 'pages',
            }
          },
          {
            path: 'quizzes',
            component: QuizzesComponent,
            data: {
              title: 'Quizzes',
            }
          },
          {
            path: 'create-quiz',
            component: CreateQuizComponent,
            data: {
              title: 'Create Quiz',
            }
          },
          {
            path: 'edit-quiz/:id',
            component: CreateQuizComponent,
            data: {
              title: 'Edit Quiz',
            }
          },
          {
            path: 'people',
            component: PeopleGridComponent,
            data: {
              title: 'People',
            }
          },
          {
            path: 'announcements',
            component: AnnouncementsComponent,
            data: {
              title: 'Announcements',
            }
          },
          {
            path: 'announcement/:id',
            component: AnnouncementComponent,
            data: {
              title: 'Announcement',
            }
          },
        ]
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
    data: {
      title: 'Search Result',
    },
  },
  {
    path: 'knowledge-base',
    children: [
      {
        path: 'knowledge',
        component: KnowledgeComponent,
        data: {
          title: 'Knowledge Base',
        },
      },
      {
        path: 'all-article',
        component: AllArticleComponent,
        data: {
          title: 'All Article',
        },
      },
      {
        path: 'single-article',
        component: SingleArticleComponent,
        data: {
          title: 'Single Article',
        },
      },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
