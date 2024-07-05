charsP = ["Alice",
    "Bigfoot",
    "Bullseye",
    "Daredevil",
    "Dr Sattler",
    "King Arthur",
    "Oda Nobunaga",
    "Raptors",
    "Robert Muldoon",
    "Robin Hood",
    "Sherlock Holmes",
    "Wukong",
    "Tomoe Gozen",
]

charsJ = ["Achilles",
    "Annie Christmas",
    "Beowulf",
    "Bloody Mary",
    "Dracula",
    "Elektra",
    "Golden Bat",
    "Houdini",
    "Invisible Man",
    "Jekyll & Hyde",
    "Jill Trent",
    "Little Red",
    "Medusa",
    "Nikola Tesla",
    "Sinbad",
    "TRex",
    "The Genie",
    "Yennenga"]

    function randomChar() {
        const interval = 100; // Interval in milliseconds (100 ms)
        const duration = 2000; // Duration in milliseconds (2000 ms = 2 seconds)
        let elapsed = 0; // Track elapsed time
        let randomItemP = '';
        let randomItemJ = '';
    
        const intervalId = setInterval(() => {
            const randomIndexP = Math.floor(Math.random() * charsP.length);
            const randomIndexJ = Math.floor(Math.random() * charsJ.length);
    
            randomItemP = charsP[randomIndexP];
            randomItemJ = charsJ[randomIndexJ];
    
            document.getElementById("showChars").innerHTML = randomItemP + " VS " + randomItemJ;
    
            elapsed += interval;
            if (elapsed >= duration) {
                clearInterval(intervalId);
                const printedChar = randomItemP + " VS " + randomItemJ;
                document.getElementById("showChars").innerHTML = printedChar;
            }
        }, interval);
    }
    
