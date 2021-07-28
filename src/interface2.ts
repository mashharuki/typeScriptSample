/**
 * TypeScriptを用いたインターフェースのデザインパターンを学ぶためのファイル2
 */

// RequestBuilderクラス
class RequestBuilder {
    // プライベート変数
    private url: string | null = null;
    private method: 'get' | 'post' | null = null;
    private data: object | null = null;

    // URLのsetterメソッド
    setURL(url: string): this {
        this.url = url
        return this
    }

    // methodのsetterメソッド
    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    // dataのsetterメソッド
    setData(data: object): this {
        this.data = data
        return this
    }
}