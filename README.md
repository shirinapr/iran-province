# iran-province

A customizable select,
witch has all the provinces in Iran.

## Installation

```
npm i iran-province
```

## Usage

```jsx
import IranProvince from 'iran-province';

<IranProvince
  label={label}
  language="persian"
  className={className}
  labelClass={labelClass}
  selectClass={selectClass}
  optionClass={optionClass}
  placeholder="placeholder"
  onChange={() => {}}
/>;
```

## Props

Common props you may want to specify include:

- `label` - apply name to the select
- `labelClass` - apply a className to the label
- `selectClass` - apply a className to the select
- `optionClass` - apply a className to the options
- `className` - apply a className to the container
- `language` - you can choose between persian and english
- `onChange` - handle what happens after changing a value
- `placeholder` - change the text displayed when no option is selected

### Provinces type

```jsx
interface IProvince {
  id: string;
  isCapital: boolean;
  persian: string;
  english: string;
  latitude: number;
  longitude: number;
}
```
## License

MIT Licensed. Copyright (c) 2023 Shirin apr
