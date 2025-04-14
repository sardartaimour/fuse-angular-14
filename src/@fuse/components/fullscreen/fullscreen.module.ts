import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen/fullscreen.component';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        FuseFullscreenComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports     : [
        FuseFullscreenComponent
    ]
})
export class FuseFullscreenModule
{
}
