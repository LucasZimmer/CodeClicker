//increments lines
let lines = 0;
let clicks = 0;
let oldClicks = clicks;
let interns = 0;
let programmers = 0;
let hackers = 0;
let oracles = 0;
let robots = 0;
let clones = 0;
let techs = 0;
let iClones = 0;
let pClones = 0;
let hClones = 0;
let oClones = 0;

function linesUp(num) {
    if(num===-1) {
        document.getElementById("linesUp").disabled = true;
        clicks++;
        document.getElementById("lpcLabel").style.setProperty("visibility", "visible");
        document.getElementById("lpc").style.setProperty("visibility", "visible");
        document.getElementById("linesUp").disabled = false;
        setTimeout(() => {
            document.getElementById("lpcLabel").style.setProperty("visibility", "hidden");
            document.getElementById("lpc").style.setProperty("visibility", "hidden");
        }, 150);
        num = 1 * typewriter * keyboard * mechanical * eclipse * jgrasp + clickNum();
    }
    lines += num;
    document.getElementById("lines").innerHTML = displayNumber(Math.floor(lines));
    update();
}

//clicks when spacebar is pressed
let space = false;
document.onkeydown = function(e) {
    event.preventDefault();
    if(e.keyCode == 32 && space == false) {
        space = true;
        linesUp(-1);
        document.getElementById("linesUp").disabled = true;
    }
    //else
    //    linesUp(100000000);
}

function clickNum() {
    if(scratch) {
        return getInc() * .01;
    }
    else {
        return 0;
    }
}

document.onkeyup = function(e) {
    if(e.keyCode == 32) {
        space = false;
    document.getElementById("linesUp").disabled = false;
    } 
}

//disables right click
document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      window.event.returnValue = false;
    });
  }

//modifies numbers
function displayNumber(num) {
    if(num >= 1000000) {
        let i = Math.floor(Math.log10(num));
        i = Math.floor(i/3) * 3;

        let word = "";
        switch(i) {
            case 6: word = "Million"; break;
            case 9: word = "Billion"; break;
            case 12: word = "Trillion"; break;
            case 15: word = "Quadrillion"; break;
            case 18: word = "Quintillion"; break;
            case 21: word = "Sextillion"; break;
            case 24: word = "Septillion"; break;
            case 27: word = "Octillion"; break;
            case 30: word = "Nonillion"; break;
            case 33: word = "Decillion"; break;
            default: return "A lot";
        }
        return (num/(Math.pow(10, i))).toFixed(3) + " " + word;
    }
    return Number(num.toFixed(3));
}

//buys autoclickers

let internCost = 10;
function internsUp() {
    interns++;
    lines -= internCost;
    internCost = Math.round(10 * Math.pow(1.14, interns));
    document.getElementById("interns").innerHTML = displayNumber(interns);
    document.getElementById("internCost").innerHTML = displayNumber(internCost);
    update();
}

let programmerCost = 100;
function programmersUp() {
    programmers++;
    lines -= programmerCost;
    programmerCost = Math.round(100 * Math.pow(1.12, programmers));
    document.getElementById("programmers").innerHTML = displayNumber(programmers);
    document.getElementById("programmerCost").innerHTML = displayNumber(programmerCost);
    update();
}

let hackerCost = 2000;
function hackersUp() {
    hackers++;
    lines -= hackerCost;
    hackerCost = Math.round(2000 * Math.pow(1.1, hackers));
    document.getElementById("hackers").innerHTML = displayNumber(hackers);
    document.getElementById("hackerCost").innerHTML = displayNumber(hackerCost);
    update();
}

let oracleCost = 15000;
function oraclesUp() {
    oracles++;
    lines -= oracleCost;
    oracleCost = Math.round(15000 * Math.pow(1.08, oracles));
    document.getElementById("oracles").innerHTML = displayNumber(oracles);
    document.getElementById("oracleCost").innerHTML = displayNumber(oracleCost);
    update();
}

let robotCost = 100000;
function robotsUp() {
    robots++;
    lines -= robotCost;
    robotCost = Math.round(100000 * Math.pow(1.05, robots));
    document.getElementById("robots").innerHTML = displayNumber(robots);
    document.getElementById("robotCost").innerHTML = displayNumber(robotCost);
    update();
}

let cloneCost = 5000000;
function clonesUp() {
    clones++;
    techs++;
    lines -= cloneCost;
    cloneCost = Math.round(5000000 * Math.pow(1.2, clones));
    document.getElementById("clones").innerHTML = displayNumber(clones);
    document.getElementById("techs").innerHTML = displayNumber(techs);
    document.getElementById("cloneCost").innerHTML = displayNumber(cloneCost);
    update();
}


//buys upgrades

//click upgrades
let typewriter = 1;
function buyTypewriter() {
    typewriter = 2;
    lines -= 100;
    document.getElementById("upgrades").removeChild(document.getElementById("typewriter"));
    update();
}
let keyboard = 1;
function buyKeyboard() {
    keyboard = 2;
    lines -= 600;
    document.getElementById("upgrades").removeChild(document.getElementById("keyboard"));
    update();
}

let mechanical = 1;
function buyMechanical() {
     mechanical = 3;
     lines -= 25000;
     document.getElementById("upgrades").removeChild(document.getElementById("mechanical"));
     update();
}

let eclipse = 1;
function buyEclipse() {
     eclipse = 5;
     lines -= 125000;
     document.getElementById("upgrades").removeChild(document.getElementById("eclipse"));
     update();
}

let jgrasp = 1;
function buyJgrasp() {
     jgrasp = 10;
     lines -= 500000;
     document.getElementById("upgrades").removeChild(document.getElementById("jgrasp"));
     update();
}

let scratch = false;
function buyScratch() {
     scratch = true;
     lines -= 2000000;
     document.getElementById("upgrades").removeChild(document.getElementById("scratch"));
     update();
}
//intern upgrades
let coffee = 1;
function buyCoffee() {
    coffee = 2;
    lines -= 200;
    document.getElementById("upgrades").removeChild(document.getElementById("coffee"));
    internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by " +  Number((0.1 * coffee * college * training * paycheck2).toFixed(1)) + ".";
    update();
}

let college = 1;
function buyCollege() {
    college = 3;
    lines -= 1000;
    document.getElementById("upgrades").removeChild(document.getElementById("college"));
    internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by " +  Number((0.1 * coffee * college * training * paycheck2).toFixed(1)) + ".";
    update();
}

let training = 1;
function buyTraining() {
    training = 5;
    lines -= 50000;
    document.getElementById("upgrades").removeChild(document.getElementById("training"));
    internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by " +  Number((0.1 * coffee * college * training * paycheck2).toFixed(1)) + ".";
    update();
}

let paycheck2 = 1;
function buyPaycheck2() {
    paycheck2 = 10;
    lines -= 10000000;
    document.getElementById("upgrades").removeChild(document.getElementById("paycheck2"));
    internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by " +  Number((0.1 * coffee * college * training * paycheck2).toFixed(1)) + ".";
    update();
}

//programmer upgrades
let paycheck = 1;
function buyPaycheck() {
    paycheck = 2;
    lines -= 1750;
    document.getElementById("upgrades").removeChild(document.getElementById("paycheck"));
    programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by " + 1 * paycheck * office * benefits * quantum + ".";
    update();
}

let office = 1;
function buyOffice() {
    office = 2;
    lines -= 20000;
    document.getElementById("upgrades").removeChild(document.getElementById("office"));
    programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by " + 1 * paycheck * office * benefits * quantum + ".";
    update();
}

let benefits = 1;
function buyBenefits() {
    benefits = 4;
    lines -= 500000;
    document.getElementById("upgrades").removeChild(document.getElementById("benefits"));
    programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by " + 1 * paycheck * office * benefits * quantum + ".";
    update();
}

let quantum = 1;
function buyQuantum() {
    quantum = 10;
    lines -= 500000000;
    document.getElementById("upgrades").removeChild(document.getElementById("quantum"));
    programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by " + 1 * paycheck * office * benefits * quantum + ".";
    update();
}

//hacker upgrades
let goggles = 1;
function buyGoggles() {
    goggles = 2;
    lines -= 25000;
    document.getElementById("upgrades").removeChild(document.getElementById("goggles"));
    hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by " + 5 * goggles * russian * gloves * hackerman + ".";
    update();
}
let russian = 1;
function buyRussian() {
    russian = 2;
    lines -= 130000;
    document.getElementById("upgrades").removeChild(document.getElementById("russian"));
    hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by " + 5 * goggles * russian * gloves * hackerman + ".";
    update();
}
let gloves = 1;
function buyGloves() {
    gloves = 3;
    lines -= 1200000;
    document.getElementById("upgrades").removeChild(document.getElementById("gloves"));
    hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by " + 5 * goggles * russian * gloves * hackerman + ".";
    update();
}
let hackerman = 1;
function buyHackerman() {
    hackerman = 7;
    lines -= 136000000;
    document.getElementById("upgrades").removeChild(document.getElementById("gloves"));
    hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by " + 5 * goggles * russian * gloves * hackerman + ".";
    update();
}

//oracle upgrades
let ball = 1;
function buyBall() {
    ball = 2;
    lines -= 52000;
    document.getElementById("upgrades").removeChild(document.getElementById("ball"));
    oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by " + 35 * ball * tarot * runes * tome + ".";
    update();
}
let tarot = 1;
function buyTarot() {
    tarot = 2;
    lines -= 700000;
    document.getElementById("upgrades").removeChild(document.getElementById("tarot"));
    oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by " + 35 * ball * tarot * runes * tome + ".";
    update();
}
let runes = 1;
function buyRunes() {
    runes = 3;
    lines -= 2900000;
    document.getElementById("upgrades").removeChild(document.getElementById("runes"));
    oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by " + 35 * ball * tarot * runes * tome + ".";
    update();
}
let tome = 1;
function buyTome() {
    tome = 5;
    lines -= 200000000;
    document.getElementById("upgrades").removeChild(document.getElementById("tome"));
    oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by " + 35 * ball * tarot * runes * tome + ".";
    update();
}

//artificial intelligence upgrades
let research = 1;
function buyResearch() {
    research = .8;
    lines -= 400000;
    document.getElementById("upgrades").removeChild(document.getElementById("research"));
    robotDescription = "Artificial Intelligence: A program designed to write programs. Genius. Increases lines per second by " + 400 * research + ".";
    update();
}
let clonetech = false;
function buyClonetech() {
    clonetech = true;
    lines -= 1500000;
    document.getElementById("upgrades").removeChild(document.getElementById("clonetech"));
    document.getElementById("cloneCost").innerHTML = displayNumber(500000);
    update();
}

//clone upgrades
let typeI = false;
function buyTypeI() {
    typeI = true;
    lines -= 500000;
    document.getElementById("upgrades").removeChild(document.getElementById("typeI"));
    document.getElementById("iClone").style.setProperty("visibility", "visible");
    update();
}
let typeP = false;
function buyTypeP() {
    typeP = true;
    lines -= 100000000;
    document.getElementById("upgrades").removeChild(document.getElementById("typeP"));
    document.getElementById("pClone").style.setProperty("visibility", "visible");
    update();
}
let typeH = false;
function buyTypeH() {
    typeH = true;
    lines -= 20000000;
    document.getElementById("upgrades").removeChild(document.getElementById("typeH"));
    document.getElementById("hClone").style.setProperty("visibility", "visible");
    update();
}
let typeO = false;
function buyTypeO() {
    typeO = true;
    lines -= 500000000;
    document.getElementById("upgrades").removeChild(document.getElementById("typeO"));
    document.getElementById("oClone").style.setProperty("visibility", "visible");
    update();
}

//descriptions
let internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by 0.1.";
let programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by 1.";
let hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by 5.";
let oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by 35.";
let robotDescription = "Artificial Intelligence: A program designed to write programs. Genius. Increases lines per second by 400.";
let cloneDescription = "Clones: The AI can clone your workers to make more of them. Developing further clone types will require more clones and more AI.";

let typewriterDescription = "Typewriter: It's a little bit rusty and it's missing the h key, but it still works. Doubles lines per click.";
let keyboardDescription = "Keyboard: A keyboard might be helpful if you want to write code. Doubles lines per click.";
let mechanicalDescription = "Mechanical Keyboard: A better, smoother keyboard. It also has customizable lights. Triples lines per click.";
let eclipseDescription = "No more writing code in notepad. Eclipse can autocomplete your code, making it much easier to write. Multiplies lines per click by 5.";
let jgraspDescription = "jGrasp is the superior IDE. Having Eclipse is like having training wheels. No more training wheels. Use jGrasp. Mulitplies lines per click by 10.";
let scratchDescription = "The ultimate programming language. Adds 1% of your lines per second to your base lines per click";

let coffeeDescription = "Coffee Machine: Having a coffee machine in the office saves the interns a lot of time because it dows most of their job for them. Doubles intern efficiency.";
let collegeDescription = "College Credit: Interns aren't very productive when they're being paid in experience, but giving them college credit for their internship might actually make them work. Triples intern efficiency";
let trainingDescription = "Training: As it turns out, interns can work much better when you teach them what they're supposed to do. Multiplies intern efficiency by 5.";
let paycheck2Description = "Paycheck: Paying the programmers makes sense, but paying the interns? That's crazy. Multiplies programmer efficiency by 10.";

let paycheckDescription  = "Paycheck: Did you really think you could buy programmers with code? You have to pay them. Doubles programmer efficiency.";
let officeDescription = "Office: The programmers will no longer have to work out of your living room. Doubles programmer efficiency.";
let benefitsDescription = "Benefits: Life insurance, vacation days, and retirement bonuses. Maybe now your programmers will actually like their job. Multiplies programmer efficiency by 4.";
let quantumDescription = "Quantum Computers: The fastest computers in existance for the fastest programmers in the office. Multiplies programmer efficiency by 10.";

let gogglesDescription = "Hacker Goggles: The most necessary piece of equipment for any hacker. Doubles hacker efficiency.";
let russianDescription = "Russian Lessons: Working with the hackers would be a lot easier if you could speak their language. Вырасти шикарного картофеля товарищем! Doubles Hacker Efficiency."
let glovesDescription = "Hacker Gloves: Complete the hacker look with some hacker gloves. Triples hacker efficieny.";
let hackermanDescription = "Hackerman: Hackerman is the most legendary hacker. Most thought he was a myth. And now he's here to work on your program. He's so powerful, all of your other hackers become better just by being around him. Multiplies hacker efficiency by 7.";

let ballDescription = "Crystal Ball: A shiny ball that is used to gaze into the future. Doubles oracle efficiency.";
let tarotDescription = "Tarot Cards: These cards aren't for playing with, they can predict someone's future. Doubles oracle efficiency.";
let runesDescription = "Runes: Like the tarot cards, these nordic runes give the user knowledge of their future. Triple oracle efficiency.";
let tomeDescription = "Ancient Tome: This tome, found in the ruins of a lost civilization, has some of the most powerful future-telling magic ever made. Multiplies oracle efficiency by 5.";

let researchDescription = "Research: Use some of your artificial intelligence computers to research potential new options for writing code. Lowers efficiency by 20%, but could lead to some interesting new things.";
let clonetechDescription = "CloneTech: The AI may have discovered a way to clone your workers, allowing you to get more workers very easily, but you will need to invest more code in their research.";

let typeIDescription = "TypeI Clones: Clones of the interns. Cheap and easy to create. Require 1 CloneTech.";
let typePDescription = "TypeI Clones: Clones of the programmers. Require more difficult cloning. Require 2 CloneTech.";
let typeODescription = "TypeI Clones: Clones of the hackers. If you think about it, its almost like hacking them. Require 5 CloneTech.";
let typeHDescription = "TypeI Clones: Clones of the oracles. Cloning their bodies is easy, but cloning their magic is a litlle bit harder. Require 10 CloneTech.";

function showIntern() {
    internDescription = "Interns: Interns need experience so they are willing to write code for you, but they aren't very good at it. Increases lines per second by " +  Number((0.1 * coffee * college * training * paycheck2).toFixed(1)) + ".";
    document.getElementById("description").innerHTML = internDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showProgrammer() {
    programmerDescription = "Programmers: Programmers are reliable workers that can write code for you. Increases lines per second by " + 1 * paycheck * office * benefits * quantum + ".";
    document.getElementById("description").innerHTML = programmerDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showHacker() {
    hackerDescription = "Hackers: Why would you ever write code when you can just steal it from others? Increases lines per seconds by " + 5 * goggles * russian * gloves * hackerman + ".";
    document.getElementById("description").innerHTML = hackerDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showOracle() {
    oracleDescription = "Oracles: The oracles are mysterious people with ancient powers. They can gaze into the future and see code not yet written. Increases lines per second by " + 35 * ball * tarot * runes * tome + ".";
    document.getElementById("description").innerHTML = oracleDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showRobot() {
    robotDescription = "Artificial Intelligence: A program designed to write programs. Genius. Increases lines per second by " + 400 * research + ".";
    document.getElementById("description").innerHTML = robotDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showClone() {
    document.getElementById("description").innerHTML = cloneDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTypewriter() {
    document.getElementById("description").innerHTML = typewriterDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showKeyboard() {
    document.getElementById("description").innerHTML = keyboardDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showMechanical() {
    document.getElementById("description").innerHTML = mechanicalDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showEclipse() {
    document.getElementById("description").innerHTML = eclipseDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showJgrasp() {
    document.getElementById("description").innerHTML = jgraspDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showScratch() {
    document.getElementById("description").innerHTML = scratchDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showCoffee() {
    document.getElementById("description").innerHTML = coffeeDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showCollege() {
    document.getElementById("description").innerHTML = collegeDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTraining() {
    document.getElementById("description").innerHTML = trainingDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showPaycheck2() {
    document.getElementById("description").innerHTML = paycheck2Description;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showPaycheck() {
    document.getElementById("description").innerHTML = paycheckDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showOffice() {
    document.getElementById("description").innerHTML = officeDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showBenefits() {
    document.getElementById("description").innerHTML = benefitsDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showQuantum() {
    document.getElementById("description").innerHTML = quantumDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showGoggles() {
    document.getElementById("description").innerHTML = gogglesDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showRussian() {
    document.getElementById("description").innerHTML = russianDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showGloves() {
    document.getElementById("description").innerHTML = glovesDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showHackerman() {
    document.getElementById("description").innerHTML = hackermanDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showBall() {
    document.getElementById("description").innerHTML = ballDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTarot() {
    document.getElementById("description").innerHTML = tarotDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showRunes() {
    document.getElementById("description").innerHTML = runesDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTome() {
    document.getElementById("description").innerHTML = tomeDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showResearch() {
    document.getElementById("description").innerHTML = researchDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showClonetech() {
    document.getElementById("description").innerHTML = clonetechDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTypeI() {
    document.getElementById("description").innerHTML = typeIDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTypeP() {
    document.getElementById("description").innerHTML = typePDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTypeH() {
    document.getElementById("description").innerHTML = typeHDescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function showTypeO() {
    document.getElementById("description").innerHTML = typeODescription;
    document.getElementById("description").style.setProperty("visibility", "visible");
}
function hideDescription() {
    document.getElementById("description").style.setProperty("visibility", "hidden");
}

//gets lps
function getInc() {
    return interns * .1 * coffee * college * training * paycheck2 +
    programmers * 1 * paycheck * office * benefits * quantum +
    hackers * 5 * goggles * russian * gloves * hackerman +
    oracles * 35 * ball * tarot * runes * tome +
    robots * 400 * research;
}

//increments lines every second

let timer;

let d1;

function update() {
    clearInterval(timer);

    //sets number to increment by
    let inc = getInc();
    
    //enables/disables buttons
    check();

    //sets max for sliders
    setMax();

    if(typeI) {
        iClones = document.getElementById("iClones").value;
        document.getElementById("ic").innerHTML = iClones;
    }
    if(typeP) {
        pClones = document.getElementById("pClones").value;
        document.getElementById("pc").innerHTML = pClones/2;
    }
    if(typeH) {
        hClones = document.getElementById("hClones").value;
        document.getElementById("hc").innerHTML = hClones/5;
    }
    if(typeO) {
        oClones = document.getElementById("oClones").value;
        document.getElementById("oc").innerHTML = oClones/10;
    }
    techs = clones - iClones - pClones - hClones - oClones;
    document.getElementById("techs").innerHTML = displayNumber(techs);

    //sets dark mode
    if(mode==="dark")
        dark();

    //shows lps
    document.getElementById("lps").style.setProperty("visibility", "visible");
    document.getElementById("lps").style.setProperty("margin-left", "20px");
    document.getElementById("lpsLabel").style.setProperty("visibility", "visible");
    document.getElementById("lps").innerHTML = displayNumber(Number(inc.toFixed(5)));

    //shows lpc
    document.getElementById("lpc").innerHTML = displayNumber(1 * typewriter * keyboard * mechanical * eclipse * jgrasp + clickNum());
    //sets recurring action on timer
    d1 = new Date();
    timer = setInterval(yeet, 1);
    setInterval(cheat, 1000);
}

function yeet() {
    let d2 = new Date();
    timePassed = (d2-d1)/1000;
    linesUp(getInc()*timePassed);
    interns += iClones * timePassed;
    programmers += pClones/2 * timePassed;
    hackers += hClones/5 * timePassed;
    oracles += oClones/10 * timePassed;
    document.getElementById("interns").innerHTML = displayNumber(interns);
    internCost = Math.round(10 * Math.pow(1.14, interns));
    document.getElementById("internCost").innerHTML = displayNumber(internCost);
    document.getElementById("programmers").innerHTML = displayNumber(programmers);
    programmerCost = Math.round(100 * Math.pow(1.12, programmers));
    document.getElementById("programmerCost").innerHTML = displayNumber(programmerCost);
    document.getElementById("hackers").innerHTML = displayNumber(hackers);
    hackerCost = Math.round(2000 * Math.pow(1.1, hackers));
    document.getElementById("hackerCost").innerHTML = displayNumber(hackerCost);
    document.getElementById("oracles").innerHTML = displayNumber(oracles);
    oracleCost = Math.round(15000 * Math.pow(1.18, oracles));
    document.getElementById("oracleCost").innerHTML = displayNumber(oracleCost);
    d1 = new Date();
}

function cheat() {
    if(clicks-oldClicks >= 15) {
        alert("No one can click that fast!");
    }
    oldClicks = clicks;
}
//checks values to make changes

function check() {

    //check to disable/enable auto buttons
    if(lines < internCost)
        document.getElementById("internsUp").disabled = true;
    else
        document.getElementById("internsUp").disabled = false;

    if(lines < programmerCost)
        document.getElementById("programmersUp").disabled = true;
    else
        document.getElementById("programmersUp").disabled = false;

    if(lines < hackerCost)
        document.getElementById("hackersUp").disabled = true;
    else
        document.getElementById("hackersUp").disabled = false;

    if(lines < oracleCost)
        document.getElementById("oraclesUp").disabled = true;
    else
        document.getElementById("oraclesUp").disabled = false;

    if(lines < robotCost)
        document.getElementById("robotsUp").disabled = true;
    else
        document.getElementById("robotsUp").disabled = false;

    if(lines < cloneCost)
        document.getElementById("clonesUp").disabled = true;
    else
        document.getElementById("clonesUp").disabled = false;


    //check to disable/enable upgrade buttons
    if(document.getElementById("typewriter")) {
        if(Number(lines) < 100)
            document.getElementById("buyTypewriter").disabled = true;
        else
            document.getElementById("buyTypewriter").disabled = false;
    }
    if(document.getElementById("keyboard")) {
        if(Number(lines) < 600)
            document.getElementById("buyKeyboard").disabled = true;
        else
            document.getElementById("buyKeyboard").disabled = false;
    }
    if(document.getElementById("mechanical")) {
        if(Number(lines) < 25000)
            document.getElementById("buyMechanical").disabled = true;
        else
            document.getElementById("buyMechanical").disabled = false;
    }
    if(document.getElementById("eclipse")) {
        if(Number(lines) < 125000)
            document.getElementById("buyEclipse").disabled = true;
        else
            document.getElementById("buyEclipse").disabled = false;
    }
    if(document.getElementById("jgrasp")) {
        if(Number(lines) < 500000)
            document.getElementById("buyJgrasp").disabled = true;
        else
            document.getElementById("buyJgrasp").disabled = false;
    }
    if(document.getElementById("scratch")) {
        if(Number(lines) < 2000000)
            document.getElementById("buyScratch").disabled = true;
        else
            document.getElementById("buyScratch").disabled = false;
    }
    if(document.getElementById("coffee")) {
        if(Number(lines) < 200)
            document.getElementById("buyCoffee").disabled = true;
        else
            document.getElementById("buyCoffee").disabled = false;
    }
    if(document.getElementById("college")) {
        if(Number(lines) < 1000)
            document.getElementById("buyCollege").disabled = true;
        else
            document.getElementById("buyCollege").disabled = false;
    }
    if(document.getElementById("training")) {
        if(Number(lines) < 50000)
            document.getElementById("buyTraining").disabled = true;
        else
            document.getElementById("buyTraining").disabled = false;
    }
    if(document.getElementById("paycheck2")) {
        if(Number(lines) < 10000000)
            document.getElementById("buyPaycheck2").disabled = true;
        else
            document.getElementById("buyPaycheck2").disabled = false;
    }
    if(document.getElementById("paycheck")) {
        if(Number(lines) < 1750)
            document.getElementById("buyPaycheck").disabled = true;
        else
            document.getElementById("buyPaycheck").disabled = false;
    }
    if(document.getElementById("office")) {
        if(Number(lines) < 20000)
            document.getElementById("buyOffice").disabled = true;
        else
            document.getElementById("buyOffice").disabled = false;
    }
    if(document.getElementById("benefits")) {
        if(Number(lines) < 500000)
            document.getElementById("buyBenefits").disabled = true;
        else
            document.getElementById("buyBenefits").disabled = false;
    }
    if(document.getElementById("quantum")) {
        if(Number(lines) < 500000000)
            document.getElementById("buyQuantum").disabled = true;
        else
            document.getElementById("buyQuantum").disabled = false;
    }
    if(document.getElementById("goggles")) {
        if(Number(lines) < 25000)
            document.getElementById("buyGoggles").disabled = true;
        else
            document.getElementById("buyGoggles").disabled = false;
    }
    if(document.getElementById("russian")) {
        if(Number(lines) < 130000)
            document.getElementById("buyRussian").disabled = true;
        else
            document.getElementById("buyRussian").disabled = false;
    }
    if(document.getElementById("gloves")) {
        if(Number(lines) < 1200000)
            document.getElementById("buyGloves").disabled = true;
        else
            document.getElementById("buyGloves").disabled = false;
    }
    if(document.getElementById("hackerman")) {
        if(Number(lines) < 136000000)
            document.getElementById("buyHackerman").disabled = true;
        else
            document.getElementById("buyHackerman").disabled = false;
    }
    if(document.getElementById("ball")) {
        if(Number(lines) < 52000)
            document.getElementById("buyBall").disabled = true;
        else
            document.getElementById("buyBall").disabled = false;
    }
    if(document.getElementById("tarot")) {
        if(Number(lines) < 700000)
            document.getElementById("buyTarot").disabled = true;
        else
            document.getElementById("buyTarot").disabled = false;
    }
    if(document.getElementById("runes")) {
        if(Number(lines) < 2900000)
            document.getElementById("buyRunes").disabled = true;
        else
            document.getElementById("buyRunes").disabled = false;
    }
    if(document.getElementById("tome")) {
        if(Number(lines) < 200000000)
            document.getElementById("buyTome").disabled = true;
        else
            document.getElementById("buyTome").disabled = false;
    }
    if(document.getElementById("research")) {
        if(Number(lines) < 400000)
            document.getElementById("buyResearch").disabled = true;
        else
            document.getElementById("buyResearch").disabled = false;
    }
    if(document.getElementById("clonetech")) {
        if(Number(lines) < 1500000)
            document.getElementById("buyClonetech").disabled = true;
        else
            document.getElementById("buyClonetech").disabled = false;
    }
    if(document.getElementById("typeI")) {
        if(Number(lines) < 500000)
            document.getElementById("buyTypeI").disabled = true;
        else
            document.getElementById("buyTypeI").disabled = false;
    }
    if(document.getElementById("typeP")) {
        if(Number(lines) < 100000000)
            document.getElementById("buyTypeP").disabled = true;
        else
            document.getElementById("buyTypeP").disabled = false;
    }
    if(document.getElementById("typeH")) {
        if(Number(lines) < 20000000)
            document.getElementById("buyTypeH").disabled = true;
        else
            document.getElementById("buyTypeH").disabled = false;
    }
    if(document.getElementById("typeO")) {
        if(Number(lines) < 500000000)
            document.getElementById("buyTypeO").disabled = true;
        else
            document.getElementById("buyTypeO").disabled = false;
    }

    //checks to make new autos appear
    if(lines >= 10 || interns > 0)
        document.getElementById("intern").style.setProperty("visibility", "visible");
    if(interns >= 5 || programmers > 0)
        document.getElementById("programmer").style.setProperty("visibility", "visible");
    if(programmers >= 5 || hackers > 0)
        document.getElementById("hacker").style.setProperty("visibility", "visible");
    if(hackers >= 5 || oracles > 0)
        document.getElementById("oracle").style.setProperty("visibility", "visible");
    if(oracles >= 5 || robots > 0)
        document.getElementById("robot").style.setProperty("visibility", "visible");
    if(clonetech) {
        document.getElementById("clone").style.setProperty("visibility", "visible");
        document.getElementById("Cloning").style.setProperty("visibility", "visible");
    }
    if(typeI)
        document.getElementById("iClone").style.setProperty("visibility", "visible");
    if(typeP)
        document.getElementById("pClone").style.setProperty("visibility", "visible");
    if(typeH)
        document.getElementById("hClone").style.setProperty("visibility", "visible");
    if(typeO)
        document.getElementById("oClone").style.setProperty("visibility", "visible");
    //checks for upgrades to add and when to make upgrades appear
    addUpgrade();
}



//add upgrades

function addUpgrade() {
    //click upgrades
    if(!document.getElementById("typewriter") && typewriter===1 && clicks >= 50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "typewriter";
        upgrade.onmouseover = showTypewriter;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Typewriter";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTypewriter";
        button.disabled = true;
        button.onclick = buyTypewriter;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "typewriterCost";
        cost.innerHTML = displayNumber(100);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("typewriter").appendChild(label);
        document.getElementById("typewriter").appendChild(line);
        document.getElementById("typewriter").appendChild(button);
        document.getElementById("typewriter").appendChild(costLabel);
        document.getElementById("typewriter").appendChild(cost);
    }
    if(!document.getElementById("keyboard") && keyboard===1 && clicks >= 500) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "keyboard";
        upgrade.onmouseover = showKeyboard;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Keyboard";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyKeyboard";
        button.disabled = true;
        button.onclick = buyKeyboard;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "keyboardCost";
        cost.innerHTML = displayNumber(600);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("keyboard").appendChild(label);
        document.getElementById("keyboard").appendChild(line);
        document.getElementById("keyboard").appendChild(button);
        document.getElementById("keyboard").appendChild(costLabel);
        document.getElementById("keyboard").appendChild(cost);
    }
    if(!document.getElementById("mechanical") && mechanical===1 && clicks >= 2000) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "mechanical";
        upgrade.onmouseover = showMechanical;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Mechanical Keyboard";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyMechanical";
        button.disabled = true;
        button.onclick = buyMechanical;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "mechanicalCost";
        cost.innerHTML = displayNumber(25000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("mechanical").appendChild(label);
        document.getElementById("mechanical").appendChild(line);
        document.getElementById("mechanical").appendChild(button);
        document.getElementById("mechanical").appendChild(costLabel);
        document.getElementById("mechanical").appendChild(cost);
    }
    if(!document.getElementById("eclipse") && eclipse===1 && clicks >= 10000) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "eclipse";
        upgrade.onmouseover = showEclipse;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Eclipse";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyEclipse";
        button.disabled = true;
        button.onclick = buyEclipse;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "eclipseCost";
        cost.innerHTML = displayNumber(125000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("eclipse").appendChild(label);
        document.getElementById("eclipse").appendChild(line);
        document.getElementById("eclipse").appendChild(button);
        document.getElementById("eclipse").appendChild(costLabel);
        document.getElementById("eclipse").appendChild(cost);
    }
    if(!document.getElementById("jgrasp") && jgrasp===1 && clicks >= 25000) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "jgrasp";
        upgrade.onmouseover = showJgrasp;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "JGrasp";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyJgrasp";
        button.disabled = true;
        button.onclick = buyJgrasp;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "jgraspCost";
        cost.innerHTML = displayNumber(500000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("jgrasp").appendChild(label);
        document.getElementById("jgrasp").appendChild(line);
        document.getElementById("jgrasp").appendChild(button);
        document.getElementById("jgrasp").appendChild(costLabel);
        document.getElementById("jgrasp").appendChild(cost);
    }
    if(!document.getElementById("scratch") && scratch===false && clicks >= 50000) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "scratch";
        upgrade.onmouseover = showScratch;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Scratch";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyScratch";
        button.disabled = true;
        button.onclick = buyScratch;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "scratchCost";
        cost.innerHTML = displayNumber(2000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("scratch").appendChild(label);
        document.getElementById("scratch").appendChild(line);
        document.getElementById("scratch").appendChild(button);
        document.getElementById("scratch").appendChild(costLabel);
        document.getElementById("scratch").appendChild(cost);
    }
    //intern upgrades
    if(!document.getElementById("coffee") && coffee===1 && interns >= 10) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "coffee";
        upgrade.onmouseover = showCoffee;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Coffee Machine";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyCoffee";
        button.disabled = true;
        button.onclick = buyCoffee;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "coffeeCost";
        cost.innerHTML = displayNumber(200);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("coffee").appendChild(label);
        document.getElementById("coffee").appendChild(line);
        document.getElementById("coffee").appendChild(button);
        document.getElementById("coffee").appendChild(costLabel);
        document.getElementById("coffee").appendChild(cost);
    }
    if(!document.getElementById("college") && college===1 && interns >= 25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "college";
        upgrade.onmouseover = showCollege;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "College Credit";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyCollege";
        button.disabled = true;
        button.onclick = buyCollege;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "collegeCost";
        cost.innerHTML = displayNumber(1000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("college").appendChild(label);
        document.getElementById("college").appendChild(line);
        document.getElementById("college").appendChild(button);
        document.getElementById("college").appendChild(costLabel);
        document.getElementById("college").appendChild(cost);
    }
    if(!document.getElementById("training") && training===1 && interns >= 50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "training";
        upgrade.onmouseover = showTraining;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Training";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTraining";
        button.disabled = true;
        button.onclick = buyTraining;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "trainingCost";
        cost.innerHTML = displayNumber(50000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("training").appendChild(label);
        document.getElementById("training").appendChild(line);
        document.getElementById("training").appendChild(button);
        document.getElementById("training").appendChild(costLabel);
        document.getElementById("training").appendChild(cost);
    }
    if(!document.getElementById("paycheck2") && paycheck2===1 && interns >= 100) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "paycheck2";
        upgrade.onmouseover = showPaycheck2;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Paycheck";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyPaycheck2";
        button.disabled = true;
        button.onclick = buyPaycheck2;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "paycheck2Cost";
        cost.innerHTML = displayNumber(10000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("paycheck2").appendChild(label);
        document.getElementById("paycheck2").appendChild(line);
        document.getElementById("paycheck2").appendChild(button);
        document.getElementById("paycheck2").appendChild(costLabel);
        document.getElementById("paycheck2").appendChild(cost);
    }
    //programmer upgrades
    if(!document.getElementById("paycheck") && paycheck===1 && programmers >= 10) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "paycheck";
        upgrade.onmouseover = showPaycheck;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Paycheck";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyPaycheck";
        button.disabled = true;
        button.onclick = buyPaycheck;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "paycheckCost";
        cost.innerHTML = displayNumber(1750);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("paycheck").appendChild(label);
        document.getElementById("paycheck").appendChild(line);
        document.getElementById("paycheck").appendChild(button);
        document.getElementById("paycheck").appendChild(costLabel);
        document.getElementById("paycheck").appendChild(cost);
    }
    if(!document.getElementById("office") && office===1 && programmers >= 25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "office";
        upgrade.onmouseover = showOffice;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Office";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyOffice";
        button.disabled = true;
        button.onclick = buyOffice;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "officeCost";
        cost.innerHTML = displayNumber(20000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("office").appendChild(label);
        document.getElementById("office").appendChild(line);
        document.getElementById("office").appendChild(button);
        document.getElementById("office").appendChild(costLabel);
        document.getElementById("office").appendChild(cost);
    }
    if(!document.getElementById("office") && office===1 && programmers >= 25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "office";
        upgrade.onmouseover = showOffice;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Office";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyOffice";
        button.disabled = true;
        button.onclick = buyOffice;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "officeCost";
        cost.innerHTML = displayNumber(20000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("office").appendChild(label);
        document.getElementById("office").appendChild(line);
        document.getElementById("office").appendChild(button);
        document.getElementById("office").appendChild(costLabel);
        document.getElementById("office").appendChild(cost);
    }
    if(!document.getElementById("benefits") && benefits===1 && programmers >= 50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "benefits";
        upgrade.onmouseover = showBenefits;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Benefits";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyBenefits";
        button.disabled = true;
        button.onclick = buyBenefits;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "benefitsCost";
        cost.innerHTML = displayNumber(500000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("benefits").appendChild(label);
        document.getElementById("benefits").appendChild(line);
        document.getElementById("benefits").appendChild(button);
        document.getElementById("benefits").appendChild(costLabel);
        document.getElementById("benefits").appendChild(cost);
    }
    if(!document.getElementById("quantum") && quantum===1 && programmers >= 100) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "quantum";
        upgrade.onmouseover = showQuantum;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Quantum Computers";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyQuantum";
        button.disabled = true;
        button.onclick = buyQuantum;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "quantumCost";
        cost.innerHTML = displayNumber(500000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("quantum").appendChild(label);
        document.getElementById("quantum").appendChild(line);
        document.getElementById("quantum").appendChild(button);
        document.getElementById("quantum").appendChild(costLabel);
        document.getElementById("quantum").appendChild(cost);
    }
    //hacker upgrades
    if(!document.getElementById("goggles") && goggles===1 && hackers >= 10) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "goggles";
        upgrade.onmouseover = showGoggles;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Hacker Goggles";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyGoggles";
        button.disabled = true;
        button.onclick = buyGoggles;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "gogglesCost";
        cost.innerHTML = displayNumber(25000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("goggles").appendChild(label);
        document.getElementById("goggles").appendChild(line);
        document.getElementById("goggles").appendChild(button);
        document.getElementById("goggles").appendChild(costLabel);
        document.getElementById("goggles").appendChild(cost);
    }
    if(!document.getElementById("russian") && russian===1 && hackers >= 25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "russian";
        upgrade.onmouseover = showRussian;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Russian Lessons";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyRussian";
        button.disabled = true;
        button.onclick = buyRussian;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "russianCost";
        cost.innerHTML = displayNumber(130000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("russian").appendChild(label);
        document.getElementById("russian").appendChild(line);
        document.getElementById("russian").appendChild(button);
        document.getElementById("russian").appendChild(costLabel);
        document.getElementById("russian").appendChild(cost);
    }
    if(!document.getElementById("gloves") && gloves===1 && hackers >= 50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "gloves";
        upgrade.onmouseover = showGloves;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Hacker Gloves";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyGloves";
        button.disabled = true;
        button.onclick = buyGloves;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "glovesCost";
        cost.innerHTML = displayNumber(1200000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("gloves").appendChild(label);
        document.getElementById("gloves").appendChild(line);
        document.getElementById("gloves").appendChild(button);
        document.getElementById("gloves").appendChild(costLabel);
        document.getElementById("gloves").appendChild(cost);
    }
    if(!document.getElementById("hackerman") && hackerman===1 && hackers >= 100) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "hackerman";
        upgrade.onmouseover = showHackerman;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Hackerman";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyHackerman";
        button.disabled = true;
        button.onclick = buyHackerman;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "hackermanCost";
        cost.innerHTML = displayNumber(136000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("hackerman").appendChild(label);
        document.getElementById("hackerman").appendChild(line);
        document.getElementById("hackerman").appendChild(button);
        document.getElementById("hackerman").appendChild(costLabel);
        document.getElementById("hackerman").appendChild(cost);
    }

    //oracle upgrades
    if(!document.getElementById("ball") && ball===1 && oracles >= 10) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "ball";
        upgrade.onmouseover = showBall;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Crystal Ball";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyBall";
        button.disabled = true;
        button.onclick = buyBall;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "ballCost";
        cost.innerHTML = displayNumber(52000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("ball").appendChild(label);
        document.getElementById("ball").appendChild(line);
        document.getElementById("ball").appendChild(button);
        document.getElementById("ball").appendChild(costLabel);
        document.getElementById("ball").appendChild(cost);
    }
    if(!document.getElementById("tarot") && tarot===1 && oracles >= 25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "tarot";
        upgrade.onmouseover = showTarot;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Tarot Cards";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTarot";
        button.disabled = true;
        button.onclick = buyTarot;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "tarotCost";
        cost.innerHTML = displayNumber(700000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("tarot").appendChild(label);
        document.getElementById("tarot").appendChild(line);
        document.getElementById("tarot").appendChild(button);
        document.getElementById("tarot").appendChild(costLabel);
        document.getElementById("tarot").appendChild(cost);
    }
    if(!document.getElementById("runes") && runes===1 && oracles >= 50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "runes";
        upgrade.onmouseover = showRunes;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Runes";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyRunes";
        button.disabled = true;
        button.onclick = buyRunes;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "runesCost";
        cost.innerHTML = displayNumber(2900000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("runes").appendChild(label);
        document.getElementById("runes").appendChild(line);
        document.getElementById("runes").appendChild(button);
        document.getElementById("runes").appendChild(costLabel);
        document.getElementById("runes").appendChild(cost);
    }
    if(!document.getElementById("tome") && tome===1 && oracles >= 100) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "tome";
        upgrade.onmouseover = showTome;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Ancient Tome";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTome";
        button.disabled = true;
        button.onclick = buyTome;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "tomeCost";
        cost.innerHTML = displayNumber(200000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("tome").appendChild(label);
        document.getElementById("tome").appendChild(line);
        document.getElementById("tome").appendChild(button);
        document.getElementById("tome").appendChild(costLabel);
        document.getElementById("tome").appendChild(cost);
    }

    //artificial intelligence upgrades
    if(!document.getElementById("research") && research===1 && robots >= 5) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "research";
        upgrade.onmouseover = showResearch;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "Research";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyResearch";
        button.disabled = true;
        button.onclick = buyResearch;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "researchCost";
        cost.innerHTML = displayNumber(500000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("research").appendChild(label);
        document.getElementById("research").appendChild(line);
        document.getElementById("research").appendChild(button);
        document.getElementById("research").appendChild(costLabel);
        document.getElementById("research").appendChild(cost);
    }
    if(!document.getElementById("clonetech") && clonetech===false && research===.8) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "clonetech";
        upgrade.onmouseover = showClonetech;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "CloneTech";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyClonetech";
        button.disabled = true;
        button.onclick = buyClonetech;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "clonetechCost";
        cost.innerHTML = displayNumber(1500000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("clonetech").appendChild(label);
        document.getElementById("clonetech").appendChild(line);
        document.getElementById("clonetech").appendChild(button);
        document.getElementById("clonetech").appendChild(costLabel);
        document.getElementById("clonetech").appendChild(cost);
    }

    //clone upgrades
    if(!document.getElementById("typeI") && typeI===false && clonetech && robots >=10) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "typeI";
        upgrade.onmouseover = showTypeI;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "TypeI Clones";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTypeI";
        button.disabled = true;
        button.onclick = buyTypeI;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "typeICost";
        cost.innerHTML = displayNumber(500000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("typeI").appendChild(label);
        document.getElementById("typeI").appendChild(line);
        document.getElementById("typeI").appendChild(button);
        document.getElementById("typeI").appendChild(costLabel);
        document.getElementById("typeI").appendChild(cost);
    }
    if(!document.getElementById("typeP") && typeP===false && typeI && robots >=25) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "typeP";
        upgrade.onmouseover = showTypeP;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "TypeP Clones";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTypeP";
        button.disabled = true;
        button.onclick = buyTypeP;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "typePCost";
        cost.innerHTML = displayNumber(100000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("typeP").appendChild(label);
        document.getElementById("typeP").appendChild(line);
        document.getElementById("typeP").appendChild(button);
        document.getElementById("typeP").appendChild(costLabel);
        document.getElementById("typeP").appendChild(cost);
    }
    if(!document.getElementById("typeH") && typeH===false && typeP && robots >=50) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "typeH";
        upgrade.onmouseover = showTypeH;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "TypeH Clones";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTypeH";
        button.disabled = true;
        button.onclick = buyTypeH;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "typeHCost";
        cost.innerHTML = displayNumber(20000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("typeH").appendChild(label);
        document.getElementById("typeH").appendChild(line);
        document.getElementById("typeH").appendChild(button);
        document.getElementById("typeH").appendChild(costLabel);
        document.getElementById("typeH").appendChild(cost);
    }
    if(!document.getElementById("typeO") && typeO===false && typeH && robots >=100) {
        document.getElementById("upgrades").style.setProperty("visibility", "visible");
        let upgrade = document.createElement("div");
        upgrade.id = "typeO";
        upgrade.onmouseover = showTypeO;
        upgrade.onmouseout = hideDescription;
        let label = document.createElement("p");
        label.innerHTML = "TypeO Clones";
        label.style.display = "inline";
        let line = document.createElement("br");
        let button = document.createElement("button");
        button.innerHTML = "Buy";
        button.id = "buyTypeO";
        button.disabled = true;
        button.onclick = buyTypeO;
        let costLabel = document.createElement("span");
        costLabel.innerHTML = "Cost:";
        let cost = document.createElement("p");
        cost.id = "typeOCost";
        cost.innerHTML = displayNumber(500000000);
        document.getElementById("upgrades").appendChild(upgrade);
        document.getElementById("typeO").appendChild(label);
        document.getElementById("typeO").appendChild(line);
        document.getElementById("typeO").appendChild(button);
        document.getElementById("typeO").appendChild(costLabel);
        document.getElementById("typeO").appendChild(cost);
    }
}

function setMax() {
    document.getElementById("iClones").max = clones - pClones - hClones - oClones;
    document.getElementById("pClones").max = clones - iClones - hClones - oClones;
    document.getElementById("hClones").max = clones - iClones - pClones - oClones;
    document.getElementById("oClones").max = clones - iClones - pClones - hClones;
}





//cookie stuff
function save(a) {
    let d = new Date;
    d.setTime(d.getTime() + (365*24*60*60*1000));
    document.cookie = "lines=" + lines +"; expires=" + d.toUTCString() +";";
    document.cookie = "interns=" + interns +"; expires=" + d.toUTCString() +";";
    document.cookie = "programmers=" + programmers +"; expires=" + d.toUTCString() +";";
    document.cookie = "hackers=" + hackers +"; expires=" + d.toUTCString() +";";
    document.cookie = "oracles=" + oracles +"; expires=" + d.toUTCString() +";";
    document.cookie = "robots=" + robots +"; expires=" + d.toUTCString() +";";
    document.cookie = "clones=" + clones +"; expires=" + d.toUTCString() +";";
    document.cookie = "clicks=" + clicks +"; expires=" + d.toUTCString() + ";";
    document.cookie = "typewriter=" + typewriter +"; expires=" + d.toUTCString() + ";";
    document.cookie = "keyboard=" + keyboard +"; expires=" + d.toUTCString() + ";";
    document.cookie = "mechanical=" + mechanical +"; expires=" + d.toUTCString() + ";";
    document.cookie = "eclipse=" + eclipse +"; expires=" + d.toUTCString() + ";";
    document.cookie = "jgrasp=" + jgrasp +"; expires=" + d.toUTCString() + ";";
    document.cookie = "scratch=" + scratch +"; expires=" + d.toUTCString() + ";";
    document.cookie = "coffee=" + coffee +"; expires=" + d.toUTCString() + ";";
    document.cookie = "college=" + college +"; expires=" + d.toUTCString() + ";";
    document.cookie = "training=" + training +"; expires=" + d.toUTCString() + ";";
    document.cookie = "paycheck2=" + paycheck2 +"; expires=" + d.toUTCString() + ";";
    document.cookie = "paycheck=" + paycheck +"; expires=" + d.toUTCString() + ";";
    document.cookie = "office=" + office +"; expires=" + d.toUTCString() + ";";
    document.cookie = "benefits=" + benefits +"; expires=" + d.toUTCString() + ";";
    document.cookie = "quantum=" + quantum +"; expires=" + d.toUTCString() + ";";
    document.cookie = "goggles=" + goggles +"; expires=" + d.toUTCString() + ";";
    document.cookie = "russian=" + russian +"; expires=" + d.toUTCString() + ";";
    document.cookie = "gloves=" + gloves +"; expires=" + d.toUTCString() + ";";
    document.cookie = "hackerman=" + hackerman +"; expires=" + d.toUTCString() + ";";
    document.cookie = "ball=" + ball +"; expires=" + d.toUTCString() + ";";
    document.cookie = "tarot=" + tarot +"; expires=" + d.toUTCString() + ";";
    document.cookie = "runes=" + runes +"; expires=" + d.toUTCString() + ";";
    document.cookie = "tome=" + tome +"; expires=" + d.toUTCString() + ";";
    document.cookie = "research=" + research +"; expires=" + d.toUTCString() + ";";
    document.cookie = "clonetech=" + clonetech +"; expires=" + d.toUTCString() + ";";
    document.cookie = "typeI=" + typeI +"; expires=" + d.toUTCString() + ";";
    document.cookie = "typeP=" + typeP +"; expires=" + d.toUTCString() + ";";
    document.cookie = "typeH=" + typeH +"; expires=" + d.toUTCString() + ";";
    document.cookie = "typeO=" + typeO +"; expires=" + d.toUTCString() + ";";
    if(a === 1) {
        document.getElementById("saveText").style.setProperty("visibility", "visible");
        setTimeout(() => {
            document.getElementById("saveText").style.setProperty("visibility", "hidden");
        }, 1500);
    }
}

window.onload = function () {
    if(getCookie("lines") != "") {
        lines = Number(getCookie("lines"));
        document.getElementById("lines").innerHTML = displayNumber(lines);
        interns = Number(getCookie("interns"));
        document.getElementById("interns").innerHTML = displayNumber(interns);
        internCost = Math.round(10 * Math.pow(1.14, interns));
        document.getElementById("internCost").innerHTML = displayNumber(internCost);
        programmers = Number(getCookie("programmers"));
        document.getElementById("programmers").innerHTML = displayNumber(programmers);
        programmerCost = Math.round(100 * Math.pow(1.12, programmers));
        document.getElementById("programmerCost").innerHTML = displayNumber(programmerCost);
        hackers = Number(getCookie("hackers"));
        document.getElementById("hackers").innerHTML = displayNumber(hackers);
        hackerCost = Math.round(2000 * Math.pow(1.1, hackers));
        document.getElementById("hackerCost").innerHTML = displayNumber(hackerCost);
        oracles = Number(getCookie("oracles"));
        document.getElementById("oracles").innerHTML = displayNumber(oracles);
        oracleCost = Math.round(15000 * Math.pow(1.08, oracles));
        document.getElementById("oracleCost").innerHTML = displayNumber(oracleCost);
        robots = Number(getCookie("robots"));
        document.getElementById("robots").innerHTML = displayNumber(robots);
        robotCost = Math.round(100000 * Math.pow(1.05, robots));
        document.getElementById("robotCost").innerHTML = displayNumber(robotCost);
        clones = Number(getCookie("clones"));
        document.getElementById("clones").innerHTML = displayNumber(clones);
        cloneCost = Math.round(2000000 * Math.pow(1.2, clones));
        document.getElementById("cloneCost").innerHTML = displayNumber(cloneCost);
        clicks = Number(getCookie("clicks"));
        oldClicks = clicks;
        typewriter = Number(getCookie("typewriter"));
        keyboard = Number(getCookie("keyboard"));
        mechanical = Number(getCookie("mechanical"));
        eclipse = Number(getCookie("eclipse"));
        jgrasp = Number(getCookie("jgrasp"));
        scratch = getCookie("scratch") === "true";
        coffee = Number(getCookie("coffee"));
        college = Number(getCookie("college"));
        training = Number(getCookie("training"));
        paycheck2 = Number(getCookie("paycheck2"));
        paycheck = Number(getCookie("paycheck"));
        office = Number(getCookie("office"));
        benefits = Number(getCookie("benefits"));
        quantum = Number(getCookie("quantum"));
        goggles = Number(getCookie("goggles"));
        russian = Number(getCookie("russian"));
        gloves = Number(getCookie("gloves"));
        hackerman = Number(getCookie("hackerman"));
        ball = Number(getCookie("ball"));
        tarot = Number(getCookie("tarot"));
        runes = Number(getCookie("runes"));
        tome = Number(getCookie("tome"));
        research = Number(getCookie("research"));
        clonetech = getCookie("clonetech") === "true";
        typeI = getCookie("typeI") === "true";
        typeP = getCookie("typeP") === "true";
        typeH = getCookie("typeH") === "true";
        typeO = getCookie("typeO") === "true";
    }
    update();
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function reset() {
    if(window.confirm("This will completely reset the game. Are you sure you want to continue?"))
        deleteCookies()
}

function deleteCookies() {
    let keyValuePairs = document.cookie.split(/; */);
    for(var i = 0; i < keyValuePairs.length; i++) {
        let name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
    document.location.reload();
}

let mode = "light";
//light/dark mode stuff
function changeMode() {
    if(mode === "light") {
        mode = "dark";
        dark();
        document.getElementById("mode").innerHTML = "Light Mode";
    }
    else {
        light();
        mode = "light"
    }
}

let green = "rgb(48, 232, 64)";
function dark() {
    document.getElementsByTagName("body")[0].style.setProperty("background-image", "linear-gradient(blue, black 30%)");
    let headers = document.getElementsByTagName("h2");
    for(let i =0; i < headers.length; i++)
        headers[i].style.setProperty("color", green);
    document.getElementById("desc").style.setProperty("border", "solid " + green + " 7px");
    let text = document.getElementsByTagName("p");
    for(let i =0; i < text.length; i++)
        text[i].style.setProperty("color", green);
    let updates = document.getElementsByTagName("li");
    for(let i = 0; i < updates.length; i++)
        updates[i].style.setProperty("color",green);
    let costs = document.getElementsByTagName("span");
    for(let i = 0; i < costs.length; i++)
        costs[i].style.setProperty("color",green);
    document.getElementById("mode").style.setProperty("color", green);
}

function light() {
    save(0);
    document.location.reload();
}


//STUFF TO DO
//Add more research
//make ending
