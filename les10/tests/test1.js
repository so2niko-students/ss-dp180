import { summ } from '../app/functions/summ.js';

function test1(ass) {
    describe('summ: Сложение двух чисел', function () {
        it('1 + 2 (сложение положительных чисел)', function () {
            ass.equal(summ(1, 2), '3');
        });

    });

    describe('Тестирую Чай', function () {
        it('Сравнение массивов [1,2,3] и [1,2,3]', function () {
            ass.deepEqual([1, 2, 3], [1, 2, 3]);

        })
    });
}

export { test1 };