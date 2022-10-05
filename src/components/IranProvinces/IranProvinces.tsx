import React from 'react';

export interface Props {
  label?: string;
  value?: string | any;
  className?: string;
  labelClass?: string;
  selectClass?: string;
  optionClass?: string;
  placeholder?: string;
  onChange: () => void;
  language?: 'english' | 'persian';
}
const provinces = [
  { persian: 'آذربایجان شرقی', english: 'Azarbayjan, East' },
  { persian: 'آذربایجان غربی', english: 'Azarbayjan, West' },
  { persian: 'اردبیل', english: 'Ardabil' },
  { persian: 'اصفهان', english: 'Isfahan' },
  { persian: 'البرز', english: 'Alborz' },
  { persian: 'ایلام', english: 'Ilam' },
  { persian: 'بوشهر', english: 'Bushehr' },
  { persian: 'تهران', english: 'Tehran' },
  { persian: 'چهارمحال و بختیاری', english: 'Chaharmahal and Bakhtiyari' },
  { persian: 'خراسان جنوبی', english: 'Khorasan, South' },
  { persian: 'خراسان رضوی', english: 'Khorasan, Razavi' },
  { persian: 'خراسان شمالی', english: 'Khorasan, North' },
  { persian: 'خوزستان', english: 'Khuzestan' },
  { persian: 'زنجان', english: 'Zanjan' },
  { persian: 'سمنان', english: 'Semnan' },
  { persian: 'سیستان و بلوچستان', english: 'Sistan and Baluchestan' },
  { persian: 'فارس', english: 'Fars' },
  { persian: 'قزوین', english: 'Qazvin' },
  { persian: 'قم', english: 'Qom' },
  { persian: 'کردستان', english: 'Kordestan' },
  { persian: 'کرمان', english: 'Kerman' },
  { persian: 'کرمانشاه', english: 'Kermanshah' },
  { persian: 'کهگیلویه و بویراحمد', english: 'Kohkilouye and Boyerahmad' },
  { persian: 'گلستان', english: 'Golestan' },
  { persian: 'گیلان', english: 'Gilan' },
  { persian: 'لرستان', english: 'Lorestan' },
  { persian: 'مازندران', english: 'Mazandaran' },
  { persian: 'مرکزی', english: 'Markazi' },
  { persian: 'هرمزگان', english: 'Hormozgan' },
  { persian: 'همدان', english: 'Hamedan' },
  { persian: 'یزد', english: 'Yazd' },
];

const IranProvinces = ({
  label,
  value,
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
      value={value}
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
