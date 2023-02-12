# iran-provinces

A customizable select,
witch has all the cities in Iran.

## Installation

```
npm i iran-provinces
```

## Usage

```jsx
import { IranProvinces } from 'iran-province';

<IranProvinces
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
- `className` - apply a className to the container
- `labelClass` - apply a className to the label
- `selectClass` - apply a className to the select
- `optionClass` - apply a className to the options
- `language` - you can choose between persian and english
- `placeholder` - change the text displayed when no option is selected
- `onChange` - handle what happens after changing a value
