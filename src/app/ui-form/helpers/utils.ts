import {isObservable} from "rxjs";
import {TemplateRef} from "@angular/core";
import {AbstractControl} from "@angular/forms";

export function isObject(x: any) {
  return x != null && typeof x === 'object';
}

export function isFunction(value: any) {
  return typeof value === 'function';
}


export function clone(value: any): any {
  if (
    isObject(value) ||
    isObservable(value) ||
    value instanceof TemplateRef ||
    /* instanceof SafeHtmlImpl */ value.changingThisBreaksApplicationSecurity ||
    ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1
  ) {
    return value;
  }
  if (value instanceof Set) {
    return new Set(value);
  }

  if (value instanceof Map) {
    return new Map(value);
  }

  // https://github.com/moment/moment/blob/master/moment.js#L252
  if (value._isAMomentObject && isFunction(value.clone)) {
    return value.clone();
  }

  if (value instanceof AbstractControl) {
    return null;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.slice(0).map((v) => this.clone(v));
  }

  const proto = Object.getPrototypeOf(value);
  let c = Object.create(proto);
  c = Object.setPrototypeOf(c, proto);
  // need to make a deep copy so we dont use Object.assign
  // also Object.assign wont copy property descriptor exactly
  return Object.keys(value).reduce((newVal, prop) => {
    const propDesc = Object.getOwnPropertyDescriptor(value, prop);
    if (propDesc.get) {
      Object.defineProperty(newVal, prop, propDesc);
    } else {
      newVal[prop] = clone(value[prop]);
    }

    return newVal;
  }, c);
}

export function toStartCase(value:string):string{
  return value
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => {
      return str.toUpperCase();
    })
}

export function toLowerCase(value:string):string{
  return value
    .replace(/([A-Z])/g, ' $1')
    .toLocaleLowerCase();
}
