import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FuseAlertComponent } from '@fuse/components/alert/alert.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [
        FuseAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        FuseAlertComponent
    ]
})
export class FuseAlertModule
{
}
