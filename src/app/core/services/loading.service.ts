import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoadingComponent } from 'src/app/modules/shared/loading/loading.component';

@Injectable()
export class LoadingService {
  private overlayRef: OverlayRef = null;

  constructor(private overlay: Overlay) {}

  public show() {

    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create();
    }

    const spinnerOverlayPortal = new ComponentPortal(LoadingComponent);
    this.overlayRef.attach(spinnerOverlayPortal);
    
    console.log("loading");
  }

  public hide() {
    if (!!this.overlayRef) {
      this.overlayRef.detach();
    }
  }
}

