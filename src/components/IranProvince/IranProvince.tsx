import React from "react";

interface IProvince {
  id: string;
  persian: string;
  english: string;
  latitude: number;
  longitude: number;
  isCapital?: boolean;
  population: number;
}

interface ISort {
  by: "population" | "longitude" | "latitude" | "english" | "persian";
  order?: -1 | 1;
}

interface Props {
  sort?: ISort;
  form?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
  labelClass?: string;
  selectClass?: string;
  optionClass?: string;
  placeholder?: string;
  onChange: (e: IProvince) => void;
  language?: "english" | "persian";
}

const provinces: IProvince[] = [
  {
    id: "1",
    persian: "آذربایجان شرقی",
    english: "East Azarbayjan",
    latitude: 37.9035733,
    longitude: 46.2682109,
    population: 3909652,
  },
  {
    id: "2",
    persian: "آذربایجان غربی",
    english: "West Azarbayjan",
    latitude: 37.4550062,
    longitude: 45.0,
    population: 3265219,
  },
  {
    id: "3",
    persian: "اردبیل",
    english: "Ardabil",
    latitude: 38.4853276,
    longitude: 47.8911209,
    population: 1270420,
  },
  {
    id: "4",
    persian: "اصفهان",
    english: "Isfahan",
    latitude: 32.6546275,
    longitude: 51.6679826,
    population: 5120850,
  },
  {
    id: "5",
    persian: "البرز",
    english: "Alborz",
    latitude: 35.9960467,
    longitude: 50.9289246,
    population: 2712400,
  },
  {
    id: "6",
    persian: "ایلام",
    english: "Ilam",
    latitude: 33.2957618,
    longitude: 46.670534,
    population: 580158,
  },
  {
    id: "7",
    persian: "بوشهر",
    english: "Bushehr",
    latitude: 28.9233837,
    longitude: 50.820314,
    population: 1163400,
  },
  {
    id: "8",
    isCapital: true,
    persian: "تهران",
    english: "Tehran",
    latitude: 35.696111,
    longitude: 51.423056,
    population: 13267637,
  },
  {
    id: "9",
    persian: "چهارمحال و بختیاری",
    english: "Chaharmahal and Bakhtiyari",
    latitude: 31.9614348,
    longitude: 50.8456323,
    population: 947763,
  },
  {
    id: "10",
    persian: "خراسان جنوبی",
    english: "South Khorasan",
    latitude: 32.5175643,
    longitude: 59.1041758,
    population: 768898,
  },
  {
    id: "11",
    persian: "خراسان رضوی",
    english: "Khorasan Razavi",
    latitude: 35.1020253,
    longitude: 59.1041758,
    population: 6434501,
  },
  {
    id: "12",
    persian: "خراسان شمالی",
    english: "North Khorasan",
    latitude: 37.4710353,
    longitude: 57.1013188,
    population: 863092,
  },
  {
    id: "13",
    persian: "خوزستان",
    english: "Khuzestan",
    latitude: 31.4360149,
    longitude: 49.041312,
    population: 5001349,
  },
  {
    id: "14",
    persian: "زنجان",
    english: "Zanjan",
    latitude: 36.5018185,
    longitude: 48.3988186,
    population: 1057461,
  },
  {
    id: "15",
    persian: "سمنان",
    english: "Semnan",
    latitude: 35.2255585,
    longitude: 54.4342138,
    population: 702360,
  },
  {
    id: "16",
    persian: "سیستان و بلوچستان",
    english: "Sistan and Baluchestan",
    latitude: 27.5299906,
    longitude: 60.5820676,
    population: 2775014,
  },
  {
    id: "17",
    persian: "فارس",
    english: "Fars",
    latitude: 29.1043813,
    longitude: 53.045893,
    population: 4851274,
  },
  {
    id: "18",
    persian: "قزوین",
    english: "Qazvin",
    latitude: 36.0881317,
    longitude: 49.8547266,
    population: 1273761,
  },
  {
    id: "19",
    persian: "قم",
    english: "Qom",
    latitude: 34.6399443,
    longitude: 50.8759419,
    population: 1292283,
  },
  {
    id: "20",
    persian: "کردستان",
    english: "Kordestan",
    latitude: 35.9553579,
    longitude: 47.1362125,
    population: 1603011,
  },
  {
    id: "21",
    persian: "کرمان",
    english: "Kerman",
    latitude: 30.2839379,
    longitude: 57.0833628,
    population: 3164718,
  },
  {
    id: "22",
    persian: "کرمانشاه",
    english: "Kermanshah",
    latitude: 34.314167,
    longitude: 47.065,
    population: 1952434,
  },
  {
    id: "23",
    persian: "کهگیلویه و بویراحمد",
    english: "Kohkilouye and Boyerahmad",
    latitude: 30.6509479,
    longitude: 51.60525,
    population: 713052,
  },
  {
    id: "24",
    persian: "گلستان",
    english: "Golestan",
    latitude: 37.2898123,
    longitude: 55.1375834,
    population: 1868819,
  },
  {
    id: "25",
    persian: "گیلان",
    english: "Gilan",
    latitude: 37.1171617,
    longitude: 49.5279996,
    population: 2530696,
  },
  {
    id: "26",
    persian: "لرستان",
    english: "Lorestan",
    latitude: 33.5818394,
    longitude: 48.3988186,
    population: 1760649,
  },
  {
    id: "27",
    persian: "مازندران",
    english: "Mazandaran",
    latitude: 36.2262393,
    longitude: 52.5318604,
    population: 3283582,
  },
  {
    id: "28",
    persian: "مرکزی",
    english: "Markazi",
    latitude: 33.5093294,
    longitude: 48.8791829,
    population: 1429475,
  },
  {
    id: "29",
    persian: "هرمزگان",
    english: "Hormozgan",
    latitude: 27.138723,
    longitude: 55.1375834,
    population: 1776415,
  },
  {
    id: "30",
    persian: "همدان",
    english: "Hamedan",
    latitude: 34.7607999,
    longitude: 48.3988186,
    population: 1738234,
  },
  {
    id: "31",
    persian: "یزد",
    english: "Yazd",
    latitude: 32.1006387,
    longitude: 54.4342138,
    population: 1138533,
  },
];
const sortableFields: ISort["by"][] = [
  "population",
  "english",
  "persian",
  "latitude",
  "longitude",
];

const compare = <T extends {}>(list: T[], key: keyof T, order: 1 | -1 = -1): T[] => {
  return list.sort((a, b): number => {
    if (a[key] < b[key]) return order * 1;
    if (a[key] > b[key]) return order * -1;
    return 0;
  });
};

const IranProvince = ({
  sort,
  form = "",
  label = "",
  language = "persian",
  disabled = false,
  onChange,
  className = "",
  autoFocus = false,
  labelClass = "",
  selectClass = "",
  optionClass = "",
  placeholder = "",
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const province = provinces.find(({ english }) => english === e.target.value);
    province && onChange(province);
  };
  sort && sortableFields.includes(sort.by) && compare(provinces, sort.by, sort.order);

  return (
    <div className={className}>
      {label ? <label className={labelClass}>{label}</label> : null}
      <select
        form={form}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={handleChange}
        className={selectClass}
        placeholder={placeholder}>
        {provinces.map(({ english, persian }) => (
          <option key={english} value={english} className={optionClass}>
            {language === "persian" ? persian : english}
            {/* province[language] */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IranProvince;
