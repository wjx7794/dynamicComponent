// space direction enum
export enum DirectionEnum {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

// option type
export interface IEnum {
  label: number | string;
  value: number | string;
  disabled?: boolean;
}

// props type
export interface IProps {
  value: number | string;
  onChange: (val: number | string) => void;
  enums: IEnum[];
  direction: DirectionEnum;
  disabled: boolean;
}
