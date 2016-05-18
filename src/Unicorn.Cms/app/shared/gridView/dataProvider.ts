﻿import { getMeta, IMetadata } from '../domain';
import * as Rx from 'rxjs';
import * as ng from '@angular/core';

export class DataProvider<T> {
  private _meta: IMetadata[];
  private _keys: string[];
  constructor(public model: Function) { }

  query(): any[] {
    return [
      {
        id: 1,
        name: 'test',
        parentId: 1
      },
      {
        id: 1,
        name: 'test',
        parentId: 1
      },
      {
        id: 1,
        name: 'test',
        parentId: 1
      }
    ];
  }

  get meta(): IMetadata[] {
    if (!this._meta) {
      this._meta = [];
      getMeta(this.model.prototype).forEach((value, key) => this._meta.push(value));
    }

    return this._meta;
  }

  get keys(): string[] {
    if (!this._keys) {
      this._keys = [];
      getMeta(this.model.prototype).forEach((value, key) => this._keys.push(key));
    }

    return this._keys;
  }
}