import { NgModule } from '@angular/core';

import { NjFamilyCareSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NjFamilyCareSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NjFamilyCareSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NjFamilyCareSharedCommonModule {}
