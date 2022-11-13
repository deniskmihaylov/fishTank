function aquarium(input) {
    let lenght = Number(input[0]); 
    let width = Number(input[1]); 
    let height = Number(input[2]); 
    let percentFullness = Number(input[3]) / 100; 
    let capacity = (lenght * width * height) / 1000;
    let litresNeeded = capacity * (1 - percentFullness)
    console.log(litresNeeded)
}

aquarium([85, 75, 47, 17])

