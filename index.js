const a = +prompt('Введіть значення а', 0); // Запрошуєм значення змінної в користувача

const z1 = (Math.sin(4 * a) / (1 + Math.cos(4 * a))) * (Math.cos(2 * a) / (1 + Math.cos(2 * a)));
const z2 = 1 / Math.tan(3 / 2 * Math.PI - a); // Обчислюємо значення виразів

console.log('z1 = ' + z1);
console.log('z2 = ' + z2); // Виводимо значення виразів
