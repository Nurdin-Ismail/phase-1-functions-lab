// Code your solution in this file!
function distanceFromHqInBlocks(dis){
    if (dis > 42){
       return dis - 42
    } else{
      return  42 - dis
    }

}

function distanceFromHqInFeet(dis){
    return distanceFromHqInBlocks(dis) * 264
}

function distanceTravelledInFeet(num1,num2){
    if(num1 > num2){
        return (num1 - num2) * 264
    } else {
        return (num2 - num1) * 264
    }
}

function calculatesFarePrice(num1,num2){
    let dis = distanceTravelledInFeet(num1,num2) 
    if(dis <= 400){
        return 0
    } else if(dis > 400 && dis < 2000) {
        return (dis - 400) * 0.02
    } else if( dis >2000 && dis < 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}