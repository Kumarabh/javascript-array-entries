import { random } from "./test.js";

let randoms = random();
for( let [index,value] of randoms.entries()) {

    console.log(`index => ${index}` );
    console.log(`value => ${value}` );

}