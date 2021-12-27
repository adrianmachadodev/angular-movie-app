import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiereRoutingModule } from './premiere-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PremierePageComponent } from './pages/premiere-page/premiere-page.component';

@NgModule({
  declarations: [PremierePageComponent],
  imports: [CommonModule, PremiereRoutingModule, SharedModule],
})
export class PremiereModule {}
