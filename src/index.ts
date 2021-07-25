/**
 * TypeScript用のインデックスファイル
 */

console.log('Hello TypeScript!');

// 型宣言の出力する。
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple　* 4;
console.log(d);

type Reservation = unknown;

// 関数の実装例
type Reserve = {
    (from: Date, to:Due, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

// Reserveの概要を実装する。
let reserve: Reserve = (fromOrDestination: Date | string, to: toOrDestination Date | string, destination?: string) => {
    // to日が指定されている場合(一日以上かかる場合)
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
        // 宿泊旅行を予約する。
    }else if (toOrDestination instanceof Date && destination !== undefined) {
        // 日帰り旅行を予約する。
    } else if (typeof toOrDestination === 'string') {
        // すぐに出発する旅行を予約する。
    }
}

