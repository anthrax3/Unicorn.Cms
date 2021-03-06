﻿import * as Rx from 'rxjs';
import * as ng from '@angular/core';
import {IMetadata as Metadata, getMeta } from "../domain/decorators";
import {Category} from "../domain/contracts";

export class DataProvider<T> {
  private _meta: Metadata[];
  private _keys: string[];

  constructor(public model: Function) { }

  get data(): any[] {
    return [Category.random(), Category.random(), Category.random()];
  }

  get meta(): Metadata[] {
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