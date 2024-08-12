import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DesignItem {
  id: number;
  title: string;
  keyword: string;
  description: string;
}
interface FilterItem {
  label: string;
}

@Component({
  templateUrl: './search-result.component.html',
  styles: [`
    :host ::ng-deep .ant-select:not(.ant-select-customize-input) .ant-select-selector{
      @apply border-normal dark:border-white/10;
    }
  `]
})
export class SearchResultComponent implements OnInit {
  isLoading = true;
  showContent = false;
  itemsPerPage = 10;
  currentPage = 1;
  originalData: DesignItem[] = [];
  filteredItems: DesignItem[] = [];
  totalItems = 0;
  inputValue: string | null = null;
  selectedItemIndex: number = 0;
  searchKeyword: string = '';
  matchedItemsCount = 0;

  filterItemsOptions: FilterItem[] = [
    { label: 'All' },
    { label: 'Web Design' },
    { label: 'UI Design' },
    { label: 'Wireframe' },
    { label: 'Presentation' },
  ];

  constructor(private http: HttpClient) {}

  // Add this method to handle the nz-select event
  selectItem(index: number) {
    if (this.selectedItemIndex === index) {
      this.selectedItemIndex = 0; // Toggle off if the same item is clicked again
    } else {
      this.selectedItemIndex = index;
    }

    this.filterResults(); // Call the filtering method
  }

  filterResults() {
    const selectedFilterItem = this.filterItemsOptions[this.selectedItemIndex];

    if (selectedFilterItem.label === 'All') {
      this.filteredItems = this.originalData; // Display all items if "All" is selected
    } else {
      const selectedKeyword = selectedFilterItem.label.toLowerCase();
      this.filteredItems = this.originalData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(selectedKeyword);
        const descriptionMatch = item.description.toLowerCase().includes(selectedKeyword);
        return titleMatch || descriptionMatch;
      });
    }

    this.matchedItemsCount = this.filteredItems.length; // Update matched items count
    this.updatePagination();
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);

    this.http.get<{ items: DesignItem[] }>('assets/data/pages/search-results.json').subscribe(data => {
      this.originalData = data.items; // Store original data
      this.filteredItems = data.items;
      this.filterItems(); // Filter items based on search keyword
      this.totalItems = this.filteredItems.length;
      this.updatePagination();
    });
  }
  // Add this method to handle the nz-input event
  filterItems() {
    if (this.searchKeyword.trim() !== '') {
      this.filteredItems = this.originalData.filter(item =>
        item.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        (item.keyword && item.keyword.toLowerCase().includes(this.searchKeyword.toLowerCase())) ||
        item.description.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredItems = this.originalData; // Reset to original data when search keyword is empty
    }
  }
  // Add this method to handle the nz-input event
  updatePagination() {
    this.totalItems = this.filteredItems.length;
    this.currentPage = 1;
  }
  // Add this method to handle the nz-pagination event
  paginateItems(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  // Add this method to handle the nz-pagination event
  handlePageIndexChange(newPageIndex: number): void {
    this.paginateItems(newPageIndex);
  }
  // Add this method to handle the nz-pagination event
  clearSearch() {
    this.searchKeyword = '';
    this.filterItems(); // Show all data
  }
  // Add this method to handle the nz-pagination event
  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
