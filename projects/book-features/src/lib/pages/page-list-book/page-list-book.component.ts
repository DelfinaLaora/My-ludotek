import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from '../../../public-api';

@Component({
  selector: 'dtbc-page-list-book',
  standalone: true,
  imports: [CommonModule, ListBooksComponent],
  templateUrl: './page-list-book.component.html',
  styleUrl: './page-list-book.component.css',
})
export class PageListBookComponent {}
