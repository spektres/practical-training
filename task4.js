function countDrinkingResults(totalShots, claimedDrankShots, brokenShots, spilledShots){
    if (claimedDrankShots + brokenShots + spilledShots > totalShots) {
        console.log("Игорь явно вас обманывает!")
    } else {
        console.log(`Количество разбитых стопок: ${brokenShots}`);
        console.log(`Количество пролитых стопок: ${spilledShots}`);
        console.log(`Количество стопок, которое выпил каждый из друзей: ${claimedDrankShots / 2}`);
    }
}

countDrinkingResults(10, 4, 0, 0);