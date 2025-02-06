import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marvel',
  imports: [CommonModule],
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.scss'
})
export class MarvelComponent {
  @Input() characters: any[] = [];

  pageSize = 5;
  currentPage = 1;
  totalPages = 0;

  get paginatedCharacters() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.characters.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.totalPages = Math.ceil(this.characters.length / this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getImgUrl(charcter: any) {
    return `${charcter.thumbnail.path}.${charcter.thumbnail.extension}`
  }
}
