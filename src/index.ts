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
    (from: Date, to:Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

// Reserveの概要を実装する。
let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
    // to日が指定されている場合(一日以上かかる場合)
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
        // 宿泊旅行を予約する。
    }else if (toOrDestination instanceof Date && destination !== undefined) {
        // 日帰り旅行を予約する。
    } else if (typeof toOrDestination === 'string') {
        // すぐに出発する旅行を予約する。
    }
}

// call関数を実装する。
function call<T extends [unknown, string, ...unknown[]], R> (
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

// fill関数
function fill (length: number, value: string): string[] {
    return Array.from({length}, () => value);
}

// call関数を呼び出す。
call (fill, 10, 'a');

// 型安全なアサーション関数is
function is<T>(a: T, ...b: [T, ...T[]]): boolean {
    return b.every(_ => _ === a);
}

// stringとstringを比較します。
is('string', 'otherstring');
// booleanとbooleanを比較します。
is(true, false);
// numberとnumberを比較します。
is(42,42);
// 異なる型を比較します。（エラー発生する。）
// is(10, 'foo');
// 任意の数の引数を渡せるようにします。
is([1], [1,2], [1,2,3]);