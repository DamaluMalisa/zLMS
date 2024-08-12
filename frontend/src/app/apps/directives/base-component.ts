import { Directive, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Base } from '../../core/models/base.model';
import { Page } from '../../core/models/rpage.model';
import { EntityAttribute } from '../../core/models/entity-attribute.model';
import { RestService } from '../../core/services/rest.service';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { TableComponent } from '../table/table.component';
import { TableData } from '../../core/models/table-data.model';

@Directive()
export abstract class BaseComponent<T extends Base> {
  abstract title: string;
  abstract name: string;
  abstract attributes: EntityAttribute[];

  service: RestService<T>;
  dialog: MatDialog;

  data: Page<T>;
  selected: T;
  tableData: TableData;

  @ViewChild(TableComponent) table: TableComponent<T>;

  findAttribute(key: string): EntityAttribute | undefined {
    console.log('findAttribute called with key:', key);
    return this.attributes.find((attribute) => attribute.key === key);
  }

  getPage(data?: TableData) {
    console.log('getPage called with data:', data);
    data !== undefined ? (this.tableData = data) : (data = this.tableData);

    this.service.getPage(data?.request).subscribe((data) => {
      console.log('getPage response data:', data);
      this.data = data;
    });
  }

  getOptions(attributeKey: string, service: RestService<any>) {
    console.log('getOptions called with attributeKey:', attributeKey);
    const attribute = this.findAttribute(attributeKey);
    if (!attribute) {
      console.log('Attribute not found for key:', attributeKey);
      return;
    }

    service.getAll().subscribe((arr) => {
      console.log('getAll response for attributeKey:', attributeKey, arr);
      const options: any = {};
      arr.forEach((el) => {
        const option: any = {};
        option['data'] = el;
        if (attribute.display) {
          option['display'] = attribute.display(el);
        }
        options[el.id] = option;
      });
      attribute.options = options;
      console.log('Options set for attributeKey:', attributeKey, options);
    });
  }

  create() {
    console.log('create called');
    this.openForm();
  }

  edit(value: T) {
    console.log('edit called with value:', value);
    const newValue = { ...value };
    this.format(newValue);
    this.selected = newValue;
    console.log('Formatted value for editing:', this.selected);
    this.openForm(this.selected);
  }

  format(value: any) {
    console.log('format called with value:', value);
    this.attributes
      .filter((attribute) => attribute.type === 'select')
      .forEach((attribute) => {
        if (!value[attribute.key]) {
          return;
        }

        const formattedValue: any = {};
        formattedValue['data'] = value[attribute.key];
        if (attribute.display) {
          formattedValue['display'] = attribute.display(value[attribute.key]);
        }
        value[attribute.key] = formattedValue;
        console.log('Formatted value for attribute:', attribute.key, formattedValue);
      });
  }

  openForm(value?: T) {
    console.log('openForm called with value:', value);
    const dialogRef = this.dialog.open(DialogFormComponent, {
      data: {
        name: this.name,
        attributes: this.attributes,
        value: value,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) {
        this.process(result);
      }
    });
  }

  process(value: T) {
    console.log('process called with value:', value);
    delete value['ids'];
    value.id
      ? this.service.update(value.id, value).subscribe({
          next: () => {
            console.log('Update successful');
            this.getPage();
          },
          error: (err) => {
            console.error('Update failed:', err);
            window.alert('Something went wrong! Please try again');
          },
        })
      : this.service.create(value).subscribe({
          next: () => {
            console.log('Create successful');
            this.getPage();
          },
          error: (err) => {
            console.error('Create failed:', err);
            window.alert('Something went wrong! Please try again');
          },
        });
  }

  delete(ids: number[]) {
    console.log('delete called with ids:', ids);
    if (!ids.length) {
      window.alert('No rows are selected!');
      return;
    }

    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Delete dialog closed with result:', result);
      if (result) {
        this.service.delete(ids).subscribe(() => {
          console.log('Delete successful');
          this.getPage();
          this.table.clearSelection();
        });
      }
    });
  }
}
