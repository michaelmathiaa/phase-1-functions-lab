// Code your solution in this file!

function distanceFromHqInBlocks(distanceValue) {
    let distanceInBlocks;
    if (distanceValue > 42) {
        distanceInBlocks = distanceValue - 42;
    } else if (distanceValue < 42) {
        distanceInBlocks = 42 - distanceValue;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(streetNumber) {
    const distanceInFeet = distanceFromHqInBlocks(streetNumber) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        const distanceInF = (destination - start) * 264;
        return distanceInF;
    } else if (destination < start) {
        const distanceInF = (start - destination) * 264;
        return distanceInF;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) < 2000) {
        return 0.02 * 128;
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
    }
}
