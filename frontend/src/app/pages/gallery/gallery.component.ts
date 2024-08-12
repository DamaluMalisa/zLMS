import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  isLoading = true;
  showContent = false;
  showContentGallery = false;
  listItemClass: string = 'cursor-pointer relative inline-flex px-3 text-light dark:text-white/60 py-4 [&.active]:text-primary [&.active]:after:absolute [&.active]:ltr:after:left-0 [&.active]:rtl:after:right-0 [&.active]:after:bottom-0 [&.active]:after:w-full [&.active]:after:h-0.5 [&.active]:after:bg-primary [&.active]:after:rounded-10';

  ngOnInit() {
    // Simulate loading time
    this.loadData();
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
      this.showContentGallery = true;
    }, 500);
  }

  // Function to handle tab selection
  gallery = [
    { url: '../../../assets/images/gallery/g1.png', caption: 'presentation web-design', title: 'Presentation Web Design', description: 'A collection of web design images for presentations.' },
    { url: '../../../assets/images/gallery/g2.png', caption: 'web-design', title: 'Web Design', description: 'Various web design examples and inspirations.' },
    { url: '../../../assets/images/gallery/g3.png', caption: 'ui-design web-design', title: 'UI Design Web Design', description: 'Examples of UI design for web applications and websites.' },
    { url: '../../../assets/images/gallery/g4.png', caption: 'wireframe', title: 'Wireframe', description: 'Wireframe designs for planning and prototyping.' },
    { url: '../../../assets/images/gallery/g5.png', caption: 'presentation', title: 'Presentation', description: 'Images and graphics for presentations.' },
    { url: '../../../assets/images/gallery/g6.png', caption: 'web-design wireframe', title: 'Web Design Wireframe', description: 'Combining web design and wireframe concepts.' },
    { url: '../../../assets/images/gallery/g7.png', caption: 'ui-design', title: 'UI Design', description: 'User interface design examples and ideas.' },
    { url: '../../../assets/images/gallery/g8.png', caption: 'wireframe', title: 'Wireframe', description: 'Wireframe designs for planning and prototyping.' },
    { url: '../../../assets/images/gallery/g9.png', caption: 'web-design', title: 'Web Design', description: 'Various web design examples and inspirations.' },
    { url: '../../../assets/images/gallery/g10.png', caption: 'ui-design presentation', title: 'UI Design Presentation', description: 'UI design examples for presentations.' },
    { url: '../../../assets/images/gallery/g11.png', caption: 'web-design', title: 'Web Design', description: 'Various web design examples and inspirations.' },
    { url: '../../../assets/images/gallery/g12.png', caption: 'presentation wireframe', title: 'Presentation Wireframe', description: 'Wireframe designs for presentations.' }
];


  filteredGallery = this.gallery;
  activeFilter = 'all';

  filterGallery(filter: string) {
    if (filter === 'all') {
      this.filteredGallery = this.gallery;
    } else {
      this.filteredGallery = this.gallery.filter(image => image.caption.includes(filter));
    }
    this.activeFilter = filter;
    this.showContentGallery = false; // Hide the content
    setTimeout(() => {
      this.showContentGallery = true;
    }, 300);
  }

}
