import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { SearchComponent } from 'app/layout/common/search/search.component';
import {MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports     : [
        RouterModule.forChild([]),
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        SharedModule
    ],
    exports     : [
        SearchComponent
    ],
    providers   : [
        {
            provide   : MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
            useFactory: (overlay: Overlay) => (): BlockScrollStrategy => overlay.scrollStrategies.block(),
            deps      : [Overlay]
        }
    ]
})
export class SearchModule
{
}
