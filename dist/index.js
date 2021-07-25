"use strict";
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
let d = c.apple * 4;
console.log(d);
// Reserveの概要を実装する。
let reserve = (fromOrDestination, toOrDestination, destination) => {
    // to日が指定されている場合(一日以上かかる場合)
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined) {
        // 宿泊旅行を予約する。
    }
    else if (toOrDestination instanceof Date && destination !== undefined) {
        // 日帰り旅行を予約する。
    }
    else if (typeof toOrDestination === 'string') {
        // すぐに出発する旅行を予約する。
    }
};
// call関数を実装する。
function call(f, ...args) {
    return f(...args);
}
// fill関数
function fill(length, value) {
    return Array.from({ length }, () => value);
}
// call関数を呼び出す。
call(fill, 10, 'a');
// 型安全なアサーション関数is
function is(a, ...b) {
    return b.every(_ => _ === a);
}
// stringとstringを比較します。
is('string', 'otherstring');
// booleanとbooleanを比較します。
is(true, false);
// numberとnumberを比較します。
is(42, 42);
// 異なる型を比較します。（エラー発生する。）
// is(10, 'foo');
// 任意の数の引数を渡せるようにします。
is([1], [1, 2], [1, 2, 3]);
//# sourceMappingURL=index.js.map