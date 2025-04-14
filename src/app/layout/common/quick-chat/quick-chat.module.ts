import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { SharedModule } from 'app/shared/shared.module';
import { QuickChatComponent } from 'app/layout/common/quick-chat/quick-chat.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        QuickChatComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseDrawerModule,
        FuseScrollbarModule,
        SharedModule
    ],
    exports     : [
        QuickChatComponent
    ]
})
export class QuickChatModule
{
}
