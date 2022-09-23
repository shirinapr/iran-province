export interface Props {
  label: string;
}
const provinces = [
  { farsi: "آذربایجان شرقی", english: "Azarbayjan, East" },
  { farsi: "آذربایجان غربی", english: "Azarbayjan, West" },
  { farsi: "اردبیل", english: "Ardabil" },
  { farsi: "اصفهان", english: "Isfahan" },
  { farsi: "البرز", english: "Alborz" },
  { farsi: "ایلام", english: "Ilam" },
  { farsi: "بوشهر", english: "Bushehr" },
  { farsi: "تهران", english: "Tehran" },
  { farsi: "چهارمحال و بختیاری", english: "Chaharmahal and Bakhtiyari" },
  { farsi: "خراسان جنوبی", english: "Khorasan, South" },
  { farsi: "خراسان رضوی", english: "Khorasan, Razavi" },
  { farsi: "خراسان شمالی", english: "Khorasan, North" },
  { farsi: "خوزستان", english: "Khuzestan" },
  { farsi: "زنجان", english: "Zanjan" },
  { farsi: "سمنان", english: "Semnan" },
  { farsi: "سیستان و بلوچستان", english: "Sistan and Baluchestan" },
  { farsi: "فارس", english: "Fars" },
  { farsi: "قزوین", english: "Qazvin" },
  { farsi: "قم", english: "Qom" },
  { farsi: "کردستان", english: "Kordestan" },
  { farsi: "کرمان", english: "Kerman" },
  { farsi: "کرمانشاه", english: "Kermanshah" },
  { farsi: "کهگیلویه و بویراحمد", english: "Kohkilouye and Boyerahmad" },
  { farsi: "گلستان", english: "Golestan" },
  { farsi: "گیلان", english: "Gilan" },
  { farsi: "لرستان", english: "Lorestan" },
  { farsi: "مازندران", english: "Mazandaran" },
  { farsi: "مرکزی", english: "Markazi" },
  { farsi: "هرمزگان", english: "Hormozgan" },
  { farsi: "همدان", english: "Hamedan" },
  { farsi: "یزد", english: "Yazd" },
];

const IranProvinces = ({ label }: Props) => (
  <div>
    {label ? <label className="label">استان ها</label> : ""}
    <select className="select">
      {provinces.map((x) => (
        <option value={x.english}>{x.farsi}</option>
      ))}
    </select>
  </div>
);

export default IranProvinces;
