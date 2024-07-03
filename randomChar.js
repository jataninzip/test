charsP = ["Big foot", "Alice", "Little red", "Tesla", "Golden Bat", "Annie Chirstmas", "Timone", "Cinnamon"
]

charsJ = ["Sun wokong", "Wiflaf", "Robinhood", "Sherlock Homes", "Genie", "Dino", "Simba", "Nutmeg"]

function randomChar(){
    const randomIndexP = Math.floor(Math.random() * charsP.length);
    const randomIndexJ = Math.floor(Math.random() * charsJ.length);

    const randomItemP = charsP[randomIndexP];
    const randomItemJ = charsJ[randomIndexJ];

    console.log(randomItemP + "VS " + randomItemJ);
    printedChar = randomItemP + " VS " + randomItemJ
    document.getElementById("showChars").innerHTML= printedChar
}

randomChar();

