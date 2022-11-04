# Модуль 4. Занятие 8. Перебирающие методы массива

## Коллекция объектов для всех примеров с автомобилями

```js
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
```

## Example 1 - Метод map

Пусть функция `getModels` возвращает массив моделей (поле model) всех
автомобилей.

```js
const getModels = cars => {};

console.table(getModels(cars));
```

## Example 2 - Метод map

Пусть функция `makeCarsWithDiscount` возвращает новый массив объектов с изменным
значением свойства `price` в зависимости от переданной скидки.

```js
const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
```

## Example 3 - Метод filter

Пусть функция `filterByPrice` возвращает массив автомобилей цена которых меньше
чем значение параметра `threshold`.

```js
const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
```

## Example 4 - Метод filter

Пусть функция `getCarsWithDiscount` возвращает массив автомобилей свойство
onSale которых true.

```js
const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
```

## Example 5 - Метод filter

Пусть функция `getCarsWithType` возвращает массив автомобилей тип которых
совпадает со значением параметра `type`.

```js
const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
```

## Example 6 - Метод find

```js
const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
```

## Example 7 - Метод sort

Пусть функция `sortByAscendingAmount` возвращает новый массив автомобилей
отсортированный по возврастанию значения свойства `amount`.

```js
const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
```

## Example 8 - Метод sort

Пусть функция `sortByDescendingPrice` возвращает новый массив автомобилей
отсортированный по убыванию значения свойства `price`.

```js
const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
```

## Example 9 - Метод sort

Пусть функция `sortByModel` возвращает новый массив автомобилей отсортированный
по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от
значения параметра `order`.

```js
const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
```

## Example 10 - Метод reduce

Пусть функция `getTotalAmount` возвращает общее количество автомобилей(значение
свойств `amount`).

```js
const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
```

## Example 11 - Цепочки методов

Пусть функция `getAvailableCarNames` возвращает массив моделей автомобилей, но
только тех, которые сейчас на распродаже.

```js
const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));
```

## Example 12 - Цепочки методов

Пусть функция `getSortedCarsOnSale` возвращает массив автомобилей на распродаже
(свойство onSale), отсортированных по возрастанию цены.

```js
const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
```

# Codewars

1. [Kata](https://www.codewars.com/kata/5983cba828b2f1fd55000114)
1. [Kata](https://www.codewars.com/kata/5848565e273af816fb000449)
1. [Kata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)
1. [Kata](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
1. [Kata](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)
1. [Kata](https://www.codewars.com/kata/5783ef69202c0ee4cb000265)
1. [Kata](https://www.codewars.com/kata/60cc93db4ab0ae0026761232)
1. [Kata](https://www.codewars.com/kata/513e08acc600c94f01000001)
1. [Kata](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
1. [Kata](https://www.codewars.com/kata/54b724efac3d5402db00065e)
1. [Kata](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)
1. [Kata](https://www.codewars.com/kata/51e0007c1f9378fa810002a9)
1. [Kata](https://www.codewars.com/kata/556deca17c58da83c00002db)
1. [Kata](https://www.codewars.com/kata/54e6533c92449cc251001667)
1. [Kata](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)
1. [Kata](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)
1. [Kata](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
