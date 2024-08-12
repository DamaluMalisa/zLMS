import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageModel } from '../models/page-model.model';
import { Assignment } from '../models/assignment.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class BundleNavigationService {
  public materials: (PageModel | Assignment | Quiz)[] = [];
  public currentIndex = -1;

  constructor(private router: Router) {}

  setMaterials(materials: (PageModel | Assignment | Quiz)[]): void {
    this.materials = materials;
  }

  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

  navigateToNext(): void {
    if (this.currentIndex < this.materials.length - 1) {
      console.log(this.currentIndex);
      this.currentIndex++;
      console.log(this.currentIndex);
      const material = this.materials[this.currentIndex];
      console.log(material);
      console.log(this.currentIndex);
      this.navigateToMaterial(material);
    }
  }

  navigateToPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      const material = this.materials[this.currentIndex];
      this.navigateToMaterial(material);
    }
  }

  private navigateToMaterial(material: PageModel | Assignment | Quiz): void {
    let route = '';

    if ('pageContent' in material) {
      route = `/pages/subject/${material.subject.id}/page/${material.id}`;
    } else if ('assignmentContent' in material) {
      route = `/pages/subject/${material.subject.id}/assignment/${material.id}`;
    } else if ('quizContent' in material) {
      route = `/pages/subject/${material.subject.id}/quiz/${material.id}`;
    }

    this.router.navigate([route]).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
