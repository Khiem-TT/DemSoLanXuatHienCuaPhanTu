function Count(numbers: number[], value: number): number {
    let count: number = 0;
    numbers.forEach(item => {
        if (value === item) count++;
    })
    return count;
}

let numbers: number[] = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
let value: number = 5;
let count: number = Count(numbers, value);

if (count > 0) {
    console.log(`Phần tử ${value} xuất hiện ${count} lần trong mảng`);
} else console.log(`Phần tử ${value} không xuất hiện trong mảng`);