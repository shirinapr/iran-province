# iran-province

A customizable select,
witch has all the cities in Iran.

## Installation

```
npm i iran-province

```

## Usage

```jsx
import { IranProvince } from 'iran-province';

<IranProvince
  label={label}
  language="persian"
  className={className}
  labelClass={labelClass}
  selectClass={selectClass}
  optionClass={optionClass}
  placeholder="placeholder"
  defaultValue={defaultValue}
  onChange={() => {}}
/>;
```

## Props

Common props you may want to specify include:

- `label` - apply name to the select
- `defaultValue` - control the default value
- `className` - apply a className to the container
- `labelClass` - apply a className to the label
- `selectClass` - apply a className to the select
- `optionClass` - apply a className to the options
- `languge` - you can choose between persian and english
- `placeholder` - change the text displayed when no option is selected
- `onChange` - handle what happens after changing a value
