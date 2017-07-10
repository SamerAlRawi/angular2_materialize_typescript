// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponent } from './home/home.component';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    UsersComponent,
    HomeComponent,
    LoadingAnimationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
