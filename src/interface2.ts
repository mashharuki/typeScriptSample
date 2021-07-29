/**
 * TypeScriptを用いたインターフェースのデザインパターンを学ぶためのファイル2
 */

// RequestBuilderクラス
class RequestBuilder {
    // プライベート変数
    protected url: string | null = null;
    protected method: 'get' | 'post' | null = null;
    protected data: object | null = null;

    // methodのsetterメソッド
    setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
        return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
    }

    // dataのsetterメソッド
    setData(data: object): this {
        this.data = data
        return this
    }
}

// RequestBuilderWithMethodクラス
class RequestBuilderWithMethod extends RequestBuilder {
    // methodのsetterメソッド
    setMethod(method: 'get' | 'post' | null): this {
        this.method = method;
        return this
    }

    // URLのsetterメソッド
    setURL(url: string): RequestBuilderWithMethodAndURL {
        return new RequestBuilderWithMethodAndURL().setMethod(this.method).setURL(url).setData(this.data)
    }
}

// RequestBuilderWithMethodAndURLクラス
class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
    // setURL
    setURL(url: string): this {
        this.url = url;
        return this
    }

    // send
    send() {

    }
}

// RequetsBuilderクラスのインスタンスを生成
new RequestBuilder().setMethod('get').setData({}).setURL('foo.com').send();