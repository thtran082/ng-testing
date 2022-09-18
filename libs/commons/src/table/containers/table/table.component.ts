import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef } from "@angular/core";
import { ITableHeaderColumns } from "../../interfaces";
import { CommonTableBodyDirective, CommonTableHeaderDirective } from "../../directives";

@Component({
  selector: `lib-common-table`,
  exportAs: `libCommonTable`,
  template: `
    <table class="wrapper-common-table">
      <thead class="wrapper-common-table__header">
      <tr>
        <ng-container *ngFor="let column of columns">
          <th class="wrapper-common-table__header__item">
            <ng-container *ngIf="headerTemplate[column.key] as headerTmpl; else defaultHeader">
              <ng-template *ngTemplateOutlet="headerTmpl; context: { column: column }"></ng-template>
            </ng-container>
            <ng-template #defaultHeader>
              <ng-container *ngIf="column.config && column.config.title; else keyHeader">
                {{ column.config.title }}
              </ng-container>
              <ng-template #keyHeader>{{ column.key }}</ng-template>
            </ng-template>
          </th>
        </ng-container>
      </tr>
      </thead>

      <tbody>
        <tr *ngFor="let item of data">
          <td *ngFor="let column of columns">
            <ng-container *ngIf="bodyTemplate[column.key] as bodyTmpl; else defaultBody">
              <ng-template *ngTemplateOutlet="bodyTmpl; context: { $implicit: item }"></ng-template>
            </ng-container>
            <ng-template #defaultBody>
              {{item[column.key]}}
            </ng-template>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: [`./table.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonTableComponent<T extends Record<string, any> = Record<string, any>> {
  @Input() data: T[] = [];
  @Input() columns: ITableHeaderColumns[] = [];

  @ContentChildren(CommonTableHeaderDirective)
  set headers(headers: QueryList<CommonTableHeaderDirective<keyof T>>) {
    headers.forEach(header => {
      this.headerTemplate[header.key as keyof T] = header.template;
    })
  }

  @ContentChildren(CommonTableBodyDirective)
  set body(bodies: QueryList<CommonTableBodyDirective<keyof T>>) {
    Array.isArray([])
    bodies.forEach(body => {
      this.bodyTemplate[body.key as keyof T] = body.template;
    })
  }

  readonly headerTemplate: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>;
  readonly bodyTemplate: Record<keyof T, TemplateRef<any>> = {} as Record<keyof T, TemplateRef<any>>;
}
