/**
 * Created by toonew on 2017/5/18.
 */
class Person{

    constructor(name){
        this.name=name;
    }

    set test(name){
        console.log(name);
    }

    get test(){
        
        return this.name;
    }
}








