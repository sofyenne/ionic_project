import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all',
    loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all-courses',
    loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
