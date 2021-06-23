var temperature = [
    { district: "tvm", temper: 25 },
    { district: "kollam", temper: 27 },
    { district: "kottayam", temper: 24 },
    { district: "ekm", temper: 27 },
    { district: "tsr", temper: 25 },
    { district: "pkd", temper: 30 },
    { district: "tvm", temper: 27 },
    { district: "kollam", temper: 25 },
    { district: "kottayam", temper: 28 },
    { district: "ekm", temper: 29 },
    { district: "tsr", temper: 32 },
    { district: "pkd", temper: 31 },

]
var wheather = {}


for (let data of temperature) {//district:"tvm",temper:25

    let distric = data["district"];
    let temp = data["temper"];

    if (!(distric in wheather)) {
        wheather[distric] = temp;
    }
    else {
        let old_temp = wheather[distric];
        if (old_temp < temp) {
            wheather[distric] = temp;
        }
        else {
            wheather[distric] = old_temp;
        }
    }


}
console.log(wheather);

function sortByTemp(data){
    
}