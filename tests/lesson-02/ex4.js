// a
const heightCm = 163;
// b
const soLe = heightCm % 100;
console.log(`Chiều cao: ${heightCm}cm (${Math.floor(heightCm/100)}m${soLe}cm)`);
console.log(`Test số lẻ chiều cao: ${soLe}`);

const idealWeight = (soLe * 9) / 10;     
const maxWeight = soLe;                 
const minWeight = (soLe * 8) / 10;      
console.log(`Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);