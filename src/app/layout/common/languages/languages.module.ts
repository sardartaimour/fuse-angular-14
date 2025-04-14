import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LanguagesComponent } from 'app/layout/common/languages/languages.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
    declarations: [
        LanguagesComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        LanguagesComponent
    ]
})
export class LanguagesModule
{
}
