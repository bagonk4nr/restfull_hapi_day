class findurl {
    private static urlnya: String;

    static setParamURL(urls: String){
        this.urlnya = urls;
    }

    static getParamURL(){
        return this.urlnya;
    }
}

export default findurl;