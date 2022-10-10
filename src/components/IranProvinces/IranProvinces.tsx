import React from 'react';

export interface Props {
  label?: string;
  defaultValue?: string | any;
  className?: string;
  labelClass?: string;
  selectClass?: string;
  optionClass?: string;
  placeholder?: string;
  onChange: () => void;
  language?: 'english' | 'persian';
}
const provinces = [
  { isCapital: false, persian: 'آذربایجان شرقی', english: 'Azarbayjan, East' },
  { isCapital: false, persian: 'آذربایجان غربی', english: 'Azarbayjan, West' },
  { isCapital: false, persian: 'اردبیل', english: 'Ardabil' },
  { isCapital: false, persian: 'اصفهان', english: 'Isfahan' },
  { isCapital: false, persian: 'البرز', english: 'Alborz' },
  { isCapital: false, persian: 'ایلام', english: 'Ilam' },
  { isCapital: false, persian: 'بوشهر', english: 'Bushehr' },
  { isCapital: true, persian: 'تهران', english: 'Tehran' },
  {
    isCapital: false,
    persian: 'چهارمحال و بختیاری',
    english: 'Chaharmahal and Bakhtiyari',
  },
  { isCapital: false, persian: 'خراسان جنوبی', english: 'Khorasan, South' },
  { isCapital: false, persian: 'خراسان رضوی', english: 'Khorasan, Razavi' },
  { isCapital: false, persian: 'خراسان شمالی', english: 'Khorasan, North' },
  { isCapital: false, persian: 'خوزستان', english: 'Khuzestan' },
  { isCapital: false, persian: 'زنجان', english: 'Zanjan' },
  { isCapital: false, persian: 'سمنان', english: 'Semnan' },
  {
    isCapital: false,
    persian: 'سیستان و بلوچستان',
    english: 'Sistan and Baluchestan',
  },
  { isCapital: false, persian: 'فارس', english: 'Fars' },
  { isCapital: false, persian: 'قزوین', english: 'Qazvin' },
  { isCapital: false, persian: 'قم', english: 'Qom' },
  { isCapital: false, persian: 'کردستان', english: 'Kordestan' },
  { isCapital: false, persian: 'کرمان', english: 'Kerman' },
  { isCapital: false, persian: 'کرمانشاه', english: 'Kermanshah' },
  {
    isCapital: false,
    persian: 'کهگیلویه و بویراحمد',
    english: 'Kohkilouye and Boyerahmad',
  },
  { isCapital: false, persian: 'گلستان', english: 'Golestan' },
  { isCapital: false, persian: 'گیلان', english: 'Gilan' },
  { isCapital: false, persian: 'لرستان', english: 'Lorestan' },
  { isCapital: false, persian: 'مازندران', english: 'Mazandaran' },
  { isCapital: false, persian: 'مرکزی', english: 'Markazi' },
  { isCapital: false, persian: 'هرمزگان', english: 'Hormozgan' },
  { isCapital: false, persian: 'همدان', english: 'Hamedan' },
  { isCapital: false, persian: 'یزد', english: 'Yazd' },
];

const IranProvinces = ({
  label,
  defaultValue,
  className,
  labelClass,
  language,
  onChange,
  selectClass,
  optionClass,
  placeholder,
}: Props) => (
  <div className={className}>
    {label ? <label className={labelClass}>{label}</label> : ''}

    <select
      defaultValue={defaultValue}
      onChange={onChange}
      className={selectClass}
      placeholder={placeholder}
    >
      {provinces.map((x) => (
        <option value={x.english} className={optionClass}>
          {language === 'persian' ? x.persian : x.english}
        </option>
      ))}
    </select>
  </div>
);

IranProvinces.defaultProps = {
  label: '',
  value: '',
  className: '',
  labelClass: '',
  selectClass: '',
  optionClass: '',
  placeholder: '',
  language: 'persian',
};

export default IranProvinces;
