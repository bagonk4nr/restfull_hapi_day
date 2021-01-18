class keys {

    protected static key: any[]= [];

    static setKey(keys: String[]) {
        this.key = keys;
    }

    static getKey() {
        return this.key;
    }

}

export default keys;