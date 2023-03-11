class SpeedError extends Error{
    constructor(message){
        super(message)
        this.name = "SpeedError"

    }
}

class Vehicle {
    maxspeed 

    maxcount(val) {
        
      
            if (val > this.maxspeed) {
                throw new SpeedError("aravelaguyn aragutyun@=" + this.maxspeed)

            }
            if (val < 0) {
                throw new SpeedError("nvazaguyn aragutyun@=" + 1)


            } 

       
        this.speed = val

    }



}

 class car extends Vehicle {
    maxspeed = 220
    

 }
class truck extends Vehicle {
    maxspeed = 130


}
class sayl extends Vehicle {
    maxspeed = 40


}

let vehicle1 = new car()
try {
    vehicle1.maxcount(777)
} catch (error) {
    console.error(error.stack);
    
}finally{
    console.log(vehicle1);
}
