import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentListComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HeaderComponent,
    PostCardComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
