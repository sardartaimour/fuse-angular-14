import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        ShortcutsComponent
    ],
    imports     : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        OverlayModule,
        PortalModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatTooltipModule
    ],
    exports     : [
        ShortcutsComponent
    ]
})
export class ShortcutsModule
{
}
