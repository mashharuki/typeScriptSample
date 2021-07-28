"use strict";
/**
 * TypeScriptを用いたインターフェースのデザインパターンを学ぶためのファイル
 */
// 具象クラス
class BalletFlat {
    constructor() {
        this.purpose = 'dancing';
    }
}
// 具象クラス2
class Boot {
    constructor() {
        this.purpose = 'woodcutting';
    }
}
// 具象クラス3
class Sneaker {
    constructor() {
        this.purpose = 'walking';
    }
}
// Shoeのファクトリー
let Shoe = {
    create(type) {
        // typeの値によって変化
        switch (type) {
            case 'balletFlat':
                return new BalletFlat;
            case 'boot':
                return new Boot;
            case 'sneaker':
                return new Sneaker;
        }
    }
};
//# sourceMappingURL=interface.js.map