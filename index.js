// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
    if (someValue < 42) {
        return (42 - someValue);
    }
    else {
        return (someValue - 42);
    }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet (blockA, blockB) {
    if (blockA > blockB) {
        return (blockA - blockB)*264;
    }
    else 
    if (blockA < blockB) {
        return (blockB - blockA)*264;
    }
}

function calculatesFarePrice (blockA, blockB) {
    const distance = distanceTravelledInFeet(blockA, blockB);
    if (distance <= 400) {
        return 0;
    }
    else 
    if(distance >= 400 && distance <= 2000) {
        return (distance - 400)*0.02;
    }
    else 
    if (distance >= 2000 && distance <= 2500) {
        return 25;
    }
    else
    if (distance > 2500) {
        return 'cannot travel that far'
    }
}
