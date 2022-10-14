import React from 'react';

export interface Props {
  label?: string;
  className?: string;
  labelClass?: string;
  selectClass?: string;
  optionClass?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  language?: 'english' | 'persian';
}

const provinces = [
  {
    id: '1',
    isCapital: false,
    persian: 'آذربایجان شرقی',
    english: 'Azarbayjan, East',
    latitude: 37.9035733,
    longitude: 46.2682109,
  },
  {
    id: '2',
    isCapital: false,
    persian: 'آذربایجان غربی',
    english: 'Azarbayjan, West',
    latitude: 37.4550062,
    longitude: 45.0,
  },
  {
    id: '3',
    isCapital: false,
    persian: 'اردبیل',
    english: 'Ardabil',
    latitude: 38.4853276,
    longitude: 47.8911209,
  },
  {
    id: '4',
    isCapital: false,
    persian: 'اصفهان',
    english: 'Isfahan',
    latitude: 32.6546275,
    longitude: 51.6679826,
  },
  {
    id: '5',
    isCapital: false,
    persian: 'البرز',
    english: 'Alborz',
    latitude: 35.9960467,
    longitude: 50.9289246,
  },
  {
    id: '6',
    isCapital: false,
    persian: 'ایلام',
    english: 'Ilam',
    latitude: 33.2957618,
    longitude: 46.670534,
  },
  {
    id: '7',
    isCapital: false,
    persian: 'بوشهر',
    english: 'Bushehr',
    latitude: 28.9233837,
    longitude: 50.820314,
  },
  {
    id: '8',
    isCapital: true,
    persian: 'تهران',
    english: 'Tehran',
    latitude: 35.696111,
    longitude: 51.423056,
  },
  {
    id: '9',
    isCapital: false,
    persian: 'چهارمحال و بختیاری',
    english: 'Chaharmahal and Bakhtiyari',
    latitude: 31.9614348,
    longitude: 50.8456323,
  },
  {
    id: '10',
    isCapital: false,
    persian: 'خراسان جنوبی',
    english: 'Khorasan, South',
    latitude: 32.5175643,
    longitude: 59.1041758,
  },
  {
    id: '11',
    isCapital: false,
    persian: 'خراسان رضوی',
    english: 'Khorasan, Razavi',
    latitude: 35.1020253,
    longitude: 59.1041758,
  },
  {
    id: '12',
    isCapital: false,
    persian: 'خراسان شمالی',
    english: 'Khorasan, North',
    latitude: 37.4710353,
    longitude: 57.1013188,
  },
  {
    id: '13',
    isCapital: false,
    persian: 'خوزستان',
    english: 'Khuzestan',
    latitude: 31.4360149,
    longitude: 49.041312,
  },
  {
    id: '14',
    isCapital: false,
    persian: 'زنجان',
    english: 'Zanjan',
    latitude: 36.5018185,
    longitude: 48.3988186,
  },
  {
    id: '15',
    isCapital: false,
    persian: 'سمنان',
    english: 'Semnan',
    latitude: 35.2255585,
    longitude: 54.4342138,
  },
  {
    id: '16',
    isCapital: false,
    persian: 'سیستان و بلوچستان',
    english: 'Sistan and Baluchestan',
    latitude: 27.5299906,
    longitude: 60.5820676,
  },
  {
    id: '17',
    isCapital: false,
    persian: 'فارس',
    english: 'Fars',
    latitude: 29.1043813,
    longitude: 53.045893,
  },
  {
    id: '18',
    isCapital: false,
    persian: 'قزوین',
    english: 'Qazvin',
    latitude: 36.0881317,
    longitude: 49.8547266,
  },
  {
    id: '19',
    isCapital: false,
    persian: 'قم',
    english: 'Qom',
    latitude: 34.6399443,
    longitude: 50.8759419,
  },
  {
    id: '20',
    isCapital: false,
    persian: 'کردستان',
    english: 'Kordestan',
    latitude: 35.9553579,
    longitude: 47.1362125,
  },
  {
    id: '21',
    isCapital: false,
    persian: 'کرمان',
    english: 'Kerman',
    latitude: 30.2839379,
    longitude: 57.0833628,
  },
  {
    id: '22',
    isCapital: false,
    persian: 'کرمانشاه',
    english: 'Kermanshah',
    latitude: 34.314167,
    longitude: 47.065,
  },
  {
    id: '23',
    isCapital: false,
    persian: 'کهگیلویه و بویراحمد',
    english: 'Kohkilouye and Boyerahmad',
    latitude: 30.6509479,
    longitude: 51.60525,
  },
  {
    id: '24',
    isCapital: false,
    persian: 'گلستان',
    english: 'Golestan',
    latitude: 37.2898123,
    longitude: 55.1375834,
  },
  {
    id: '25',
    isCapital: false,
    persian: 'گیلان',
    english: 'Gilan',
    latitude: 37.1171617,
    longitude: 49.5279996,
  },
  {
    id: '26',
    isCapital: false,
    persian: 'لرستان',
    english: 'Lorestan',
    latitude: 33.5818394,
    longitude: 48.3988186,
  },
  {
    id: '27',
    isCapital: false,
    persian: 'مازندران',
    english: 'Mazandaran',
    latitude: 36.2262393,
    longitude: 52.5318604,
  },
  {
    id: '28',
    isCapital: false,
    persian: 'مرکزی',
    english: 'Markazi',
    latitude: 33.5093294,
    longitude: 48.8791829,
  },
  {
    id: '29',
    isCapital: false,
    persian: 'هرمزگان',
    english: 'Hormozgan',
    latitude: 27.138723,
    longitude: 55.1375834,
  },
  {
    id: '30',
    isCapital: false,
    persian: 'همدان',
    english: 'Hamedan',
    latitude: 34.7607999,
    longitude: 48.3988186,
  },
  {
    id: '31',
    isCapital: false,
    persian: 'یزد',
    english: 'Yazd',
    latitude: 32.1006387,
    longitude: 54.4342138,
  },
];

const IranProvinces = ({
  label,
  className,
  labelClass,
  language,
  onChange,
  selectClass,
  optionClass,
  placeholder,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange({
      ...e,
      target: {
        ...e.target,
        value: provinces.find((x) => x.english === e.target.value),
      },
    });
  };

  return (
    <div className={className}>
      {label ? <label className={labelClass}>{label}</label> : ''}

      <select
        onChange={handleChange}
        className={selectClass}
        placeholder={placeholder}
      >
        {provinces.map((x) => (
          <option key={x.english} value={x.english} className={optionClass}>
            {language === 'persian' ? x.persian : x.english}
          </option>
        ))}
      </select>
    </div>
  );
};

IranProvinces.defaultProps = {
  label: '',
  className: '',
  labelClass: '',
  selectClass: '',
  optionClass: '',
  placeholder: '',
  language: 'persian',
};

export default IranProvinces;
