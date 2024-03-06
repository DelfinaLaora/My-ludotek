import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // lazy loading
    path: 'books',
    // on appel la library book-feature de tsconfig.json et j'appel ma route
    loadChildren: () =>
      import('book-features').then((item) => item.booksRoutes),
    // loadComponent: () => import('../')
  },
];
