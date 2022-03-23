import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="{{to.className}}">
      <div class="card mb-5">
        <div class="card-header">
          <div class="display-flex">
            <div class="flex-1">{{ to.label }}</div>
            <div class=" justify-content-end" *ngIf="extendable">

              <!--        <button class="btn btn-primary" type="button" (click)="onClick()">-->
              <!--          <div [ngClass]="{'glyphicon glyphicon-menu-up':isEditing, 'glyphicon glyphicon-menu-down': !isEditing}"></div>-->
              <!--        </button> -->
              <a style="color: blue" (click)="onClick()">
                <div
                  [ngClass]="isEditing ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-option-horizontal'"></div>
              </a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <ng-container #fieldComponent></ng-container>
        </div>
      </div>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

  isEditing = false
  extendable = true

  onClick() {
    this.isEditing = !this.isEditing
    this.setChildrenAddButtonVisible(this.isEditing)
  }

  private setChildrenAddButtonVisible(show:Boolean){
    this.field.fieldGroup.forEach((f) => {
      if(f.type === 'repeat'){
        f.templateOptions.showAddButton = show
      }
    })
  }
}
