import isPlainObject from 'lodash/isPlainObject';

export default function getOption(option: any): {
  label: string;
  value: any;
  [key: string]: any;
} {
  if (isPlainObject(option)) {
    return option;
  } else if (Array.isArray(option)) {
    return {
      value: option[0],
      label: option[1],
    };
  } else {
    return {
      value: option,
      label: option,
    };
  }
}
