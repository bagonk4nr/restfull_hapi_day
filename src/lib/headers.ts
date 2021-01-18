class headers {

    protected static headers1: String[]= [];

    static setHeader(header: String[]){
        this.headers1 = header;
    }

    static getHeader(){
        return this.headers1;
    }

}

export default headers;