// Code your solution in this file!
function distanceFromHqInBlocks (street) {
    return Math.abs(42 - street)
}

function distanceFromHqInFeet (destination) {
    return  distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet (beginning, end) {
    return Math.abs((end - beginning) * 264)
}


function calculatesFarePrice(start, destination) {

    if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if ((distanceTravelledInFeet(start, destination) < 400) || (distanceTravelledInFeet(start, destination) <= 2000)) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else {
        return 25
    }
}