/**
 * TypeScriptを用いたインターフェースのデザインパターンを学ぶためのファイル
 */

// 型Shoeを定義
type Shoe = {
    purpose: string
}

// 型ShoeCreatorを定義
type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker
}

// 具象クラス
class BalletFlat implements Shoe {
    purpose = 'dancing';
}

// 具象クラス2
class Boot implements Shoe {
    purpose = 'woodcutting';
}

// 具象クラス3
class Sneaker implements Shoe {
    purpose = 'walking';
}

// Shoeのファクトリー
let Shoe : ShoeCreator = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        // typeの値によって変化
        switch (type) {
            case 'balletFlat': 
                return new BalletFlat()
            case 'boot': 
                return new Boot()
            case 'sneaker':
                return new Sneaker()
        }
    }
}

// ファクトリーを使用する
Shoe.create('boot');
Shoe.create('sneaker');
Shoe.create('balletFlat');