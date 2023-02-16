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

const App = () => (
  <>
    <IranProvince
      onChange={(e) => {console.log(e)}}
    />;
  </>
);

export default App;
```

## Props

Common props you may want to specify include:

- `label` - apply name to the select
- `disabled` - handle if it should be disabled
- `labelClass` - apply a className to the label
- `autoFocus` - focus the control when it mounts
- `selectClass` - apply a className to the select
- `optionClass` - apply a className to the options
- `className` - apply a className to the container
- `language` - you can choose between persian and english
- `onChange` - handle what happens after changing a value
- `form` - defines which form the drop-down list belongs to
- `placeholder` - change the text displayed when no option is selected

### Provinces type

```tsx
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
