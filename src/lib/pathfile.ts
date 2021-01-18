

class pathfile {

    private static paths: any;
    private static paths1: any;
    private static pathsOCR: any;

     static setPathFile(pathnya) {
        this.paths = pathnya;
    }

     static getPathFile() {
        return this.paths;
    }
    
     static setPathFile1(pathnya1) {
        this.paths1 = pathnya1;
    }
    
     static getPathFile1() {
        return this.paths1;
    }
    
     static setPathFileOCR(pathocr) {
        this.pathsOCR = pathocr;
    }
    
     static getPathFileOCR() {
        return this.pathsOCR;
    }

}

export default pathfile;