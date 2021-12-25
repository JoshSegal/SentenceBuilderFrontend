import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { WordsService } from './services/words.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import   {MatToolbarModule} from '@angular/material/toolbar';
import   {MatFormFieldModule} from '@angular/material/form-field';
import   {MatOptionModule} from '@angular/material/core';
import   {MatSelectModule} from '@angular/material/select';
 import   {MatIconModule} from '@angular/material/icon';
 import    {MatButtonModule} from '@angular/material/button';
 import    {MatCardModule} from '@angular/material/card';
 import   {MatTableModule} from '@angular/material/table';
 import   {MatDividerModule} from '@angular/material/divider';
 import   {MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
