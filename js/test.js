// 年齢・体重・体脂肪率の入力
alert("ようこそ！\nこのプログラムはあなたが100日間\t毎日30分の筋トレを続けた後の体組成を\nまぁまぁ正確に計算します");
var sex = confirm("あなたは男性ですか？");
console.log(sex); //あとで消す
var age = prompt("現在のあなたの年齢を半角数字で入力してください");
var height = prompt("現在のあなたの身長(cm)を半角数字で入力してください");
var weight = prompt("現在のあなたの体重(kg)を半角数字で入力してください");
var fatp = prompt("現在のあなたの体脂肪率(%)を半角数字で入力してください");
var intake = prompt("現在のあなたの１日の摂取カロリー(kcal)を半角数字で入力してください");
var muscleGain = "";
var musleLose = "";
var fatGain = "";
var fatLose = "";
var muscleMass = "";
var fatMass = "";
var train = "";
var cal = "";

// 筋肉量・脂肪量の計算
muscleMass = weight * (1 - fatp / 100) / 2;
fatMass = weight * fatp / 100;

//基礎代謝量の計算
var BME = "";
if (!sex) {
    BME = (0.0481 * pre_weight + 0.0234 * height - 0.0138 * age - 0.9708) * 1000 / 4.186;
} else {
    BME = (0.0481 * pre_weight + 0.0234 * height - 0.0138 * age - 0.4235) * 1000 / 4.186;
}
console.log(BME); // あとで消す


alert('あなたの100日後の体組成は、\n\n体重：' + weight +'kg\n筋肉量:' + muscleMass + '\n体脂肪率：' + fatp + '\nです。')