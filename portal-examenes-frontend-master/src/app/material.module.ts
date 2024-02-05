import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule } from '@angular/material/button'
import {MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';





@NgModule({
    imports: [
      MatCardModule,
      MatToolbarModule,
      MatInputModule,

    ],
    exports: [
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule
    ]
})

export class MaterialModule {}