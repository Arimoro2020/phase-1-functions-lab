function distanceFromHqInBlocks(street){
   return  Math.abs((street - 42));
}

function  distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264;
}

function  distanceTravelledInFeet(st1, st2){
    return Math.abs(st1 - st2) * 264;
}

function   calculatesFarePrice(start, destination){
    if ((Math.abs(destination - start) * 264 )<= 400){
        return 0;
    }
    else if ((Math.abs(destination - start) * 264) > 400 && (Math.abs(destination - start) * 264) <=2000){
        return ((Math.abs(destination - start) * 264)- 400 ) * 0.02;
    }
    else if ((Math.abs(destination - start) * 264) > 2000  && (Math.abs(destination - start) * 264) <=2500){
        return 25
    }
    else return 'cannot travel that far';
}