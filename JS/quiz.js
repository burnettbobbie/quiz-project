
//diaplays live clock with date and time//
function DandT(){
    var d = new Date();      //accesses date from inbuilt JavaScript library
    var refresh=10; // Refresh rate in ms
    mytime=setTimeout('DandT()',refresh);
    document.getElementById("clock").innerHTML=d;
    document.getElementById("clock").style.fontSize="small";
        
}

//setting the cookie based on user onput//
function setcookie(){

    var userValue = document.getElementById("email").value;  //user input name is set


    var posOfAt = userValue.indexOf("@");                //finds position of @ in user input

    if (userValue == "" || posOfAt <= 0 )
    
    {
        alert("You must enter a valid email address");
        document.getElementById("email").focus();
    }

    else
    {   
        cname=document.getElementById("username").value;
        document.cookie = "username" + "=" + cname;           //sets cookie value//

        window.location.href="mainmenu.html";                //link to quiz page//
        
    document.getElementById("username").innerHTML = getCookie(cname);  
    }
    
}

//returning the cookie value//
function getCookie(cname){

    var name = cname + "=";

    var decodedCookie = decodeURIComponent(document.cookie); //translates cookie containing special characters//

    var ca = decodedCookie.split(';'); //individual cookie from split string list//

    for(var i=0; i<ca.length; i++){

        var c=ca[i];                    //stores the cookie string in each iteration of loop//

        while (c.charAt(0)==''){ 
            c=c.substring(1);
        }
        if (c.indexOf(name)==0){
            return c.substring(name.length, c.length);
        }
    }

    return "";
}




//takes user back to quiz login page and exits main menu//
function exitQuiz() {

    window.location.href="index.html";                                          
}

//timed alert box//

function timeout(){
setTimeout(function() { alert("HURRY UP!!"); }, 50000);
}

//array for maths questions//
let qMaths=[
    ["1: In how many different ways can the letters B, R, S, D and X be arranged?", "120", "5!", "120, since 5!=5x4x3x2x1"],                         //orders string questions and answers in an array
    ["2: What is the only number that has the same number of letters as its value? ", "Four", "four", "4"],
    ["3: Old Granny McNaught left half her money to her granddaughter and half that amount to her grandson. She left a sixth to her brother, and the remainder, £1,000, to a dogs’ home. How much did she leave altogether? ", "12000", "£12000", "12,000", "£12,000", "£1200. Adding one half, one quarter, and one sixth tells us that the total is a fraction of twelfths (2+4+6=12). If the remainder is £1,000, that must be one-twelfth, so the total is £12,000."],
    ["4: What single digit appears most frequently between and including the numbers 1 and 1,000? ", "1", "one", "One", "1. Every number 1-9 appears exactly the same number of times in every ten numbers. But because the number 1,000 is included, there’s an extra occurrence of the number 1. In total, the number 1 appears 301 times, and every other number appears 300 times"],
    ["5: Which of the following are classified as integers?", "all of them!", ],
]

//function to check maths answers given by user and total score//
function checkM(){      
    
    let total=0

    if(document.getElementById("mAnsq1").value == qMaths [0][1] ||                //sets correct answer from array index
    document.getElementById("mAnsq1").value ==  qMaths[0][2])
    
    {        
        document.getElementById("Mq1result").innerHTML="Correct!";               //Displays message
        document.getElementById("Mq1result").style.color="green";                //styles message green
        total+=1;                                                       
    }

    else 
    {                                                                            //any incorrect answer
        document.getElementById("Mq1result").innerHTML="Incorrect. The correct answer is " + qMaths[0][3]; 
        document.getElementById("Mq1result").style.color="red";                  //styles correction message red
    }



    if(document.getElementById("mAnsq2").value == qMaths [1][1] || 
    document.getElementById("mAnsq2").value == qMaths [1][2] ||
    document.getElementById("mAnsq2").value == qMaths [1][3] )

    {
        document.getElementById("Mq2result").innerHTML="Correct!";
        document.getElementById("Mq2result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("Mq2result").innerHTML="Incorrect. The correct answer is " + qMaths [1][1];
        document.getElementById("Mq2result").style.color="red";
    }


    if(document.getElementById("mAnsq3").value == qMaths[2][1] ||
    document.getElementById("mAnsq3").value == qMaths [2][2] || 
    document.getElementById("mAnsq3").value == qMaths [2][3] || 
    document.getElementById("mAnsq3").value == qMaths [2][4]  )
     {

        document.getElementById("Mq3result").innerHTML="Correct!";
        document.getElementById("Mq3result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("Mq3result").innerHTML="Incorrect. The correct answer is " + qMaths[2][5];
        document.getElementById("Mq3result").style.color="red";
    }

    if(document.getElementById("mAnsq4").value == qMaths[3][1] ||
    document.getElementById("mAnsq4").value == qMaths[3][2] ||
    document.getElementById("mAnsq4").value == qMaths[3][3] )
     {

        document.getElementById("Mq4result").innerHTML="Correct!";
        document.getElementById("Mq4result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("Mq4result").innerHTML="Incorrect. The correct answer is " + qMaths[3][4];
        document.getElementById("Mq4result").style.color="red";
    }


    if(document.getElementById("mAnsq51").checked &&                        //all checkbox conditions have to be true//
    document.getElementById("mAnsq52").checked &&
    document.getElementById("mAnsq53").checked )
     {

        document.getElementById("Mq5result").innerHTML="Correct!";
        document.getElementById("Mq5result").style.color="green";
        total+=1;
    }


    else {
        document.getElementById("Mq5result").innerHTML="Incorrect. The correct answer is " + qMaths[4][1];
        document.getElementById("Mq5result").style.color="red";
    }

             

    if (total<3 )
    {
        document.getElementById("score").innerHTML=("FAIL! Total Score: " + total + " out of 5 "); //if score is less than 3, Fail is displayed along with total score//
    }

    else {
        document.getElementById("score").innerHTML=("PASS! Total Score: " + total + " out of 5 ");//if score is 3 or over, Pass is displayed along with total score//
    }
   

}


//array for geography questions//
let qGeog=[
    ["1: Which country grows by nearly 5cm each year?", "Iceland", "iceland", "Iceland. The country sits atop the North Atlantic Ridge, where new land is constantly being created by magma welling up from the earth's core as the European and North American tectonic plates drift apart. "],                         //orders string questions and answers in an array
    ["2: How many time zones does Russia have? ", "11", "Eleven", "eleven", "11. Officially, Russia joined the international system of time zones only after the Bolshevik Revolution. In 1919, the country was divided into 11 time zones with boundaries that went along railroads and rivers. "],
    ["3: What is the most remote place on Earth called?", "Point Nemo", "point nemo", "Point Nemo. This oceanic pole of inaccessibility is 1,670 miles away from the nearest landmass."],
    ["4: Which country has the most spoken languages?", "Papua New Guinea", "papua new guinea", "Papua New Guinea. There are nearly 850 languages spoken in the country, making it the most linguistically diverse place on earth"],  
    ["5: What is the hottest air temperature (in degrees Celsius) ever to be recorded?", "56.7", "56.7°C", "56.7°", "56.7°C. Recorded in July, 1913 in Furnace Creek, Death Valley, California, Death Valley is recognised as the hottest location on Earth. The specific typography of the area makes for these extreme temperatures; desert air is compressed and dried in the valley which is located at approximately 190ft below sea level. "],
]

//function to check geography answers given by user and total score//
function checkG(){        
    
    let total=0

    if(document.getElementById("gAnsq1").value == qGeog [0][1] ||                //sets correct answer from array index
    document.getElementById("gAnsq1").value ==  qGeog[0][2])
    
    {        
        document.getElementById("gq1result").innerHTML="Correct!";               //Displays message
        document.getElementById("gq1result").style.color="green";                //styles message green
        total+=1;                                                       
    }

    else 
    {                                                                            //any incorrect answer
        document.getElementById("gq1result").innerHTML="Incorrect. The correct answer is " + qGeog[0][3]; 
        document.getElementById("gq1result").style.color="red";                  //styles correction message red
    }



    if(document.getElementById("gAnsq2").value == qGeog [1][1] || 
    document.getElementById("gAnsq2").value == qGeog [1][2] ||
    document.getElementById("gAnsq2").value == qGeog [1][3] )

    {
        document.getElementById("gq2result").innerHTML="Correct!";
        document.getElementById("gq2result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("gq2result").innerHTML="Incorrect. The correct answer is " + qGeog [1][4];
        document.getElementById("gq2result").style.color="red";
    }




    if(document.getElementById("gAnsq3").value == qGeog[2][1] ||
    document.getElementById("gAnsq3").value == qGeog [2][2])
     {

        document.getElementById("gq3result").innerHTML="Correct!";
        document.getElementById("gq3result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("gq3result").innerHTML="Incorrect. The correct answer is " + qGeog[2][3];
        document.getElementById("gq3result").style.color="red";
    }

    if(document.getElementById("gAnsq4").value == qGeog[3][1] ||
    document.getElementById("gAnsq4").value == qGeog[3][2] )
     {

        document.getElementById("gq4result").innerHTML="Correct!";
        document.getElementById("gq4result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("gq4result").innerHTML="Incorrect. The correct answer is " + qGeog[3][3];
        document.getElementById("gq4result").style.color="red";
    }


    if(document.getElementById("gAnsq5").value == qGeog[4][1] ||
    document.getElementById("gAnsq5").value == qGeog[4][2] ||
    document.getElementById("gAnsq5").value == qGeog[4][3]) 
     {

        document.getElementById("gq5result").innerHTML="Correct!";
        document.getElementById("gq5result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("gq5result").innerHTML="Incorrect. The correct answer is " + qGeog[4][4];
        document.getElementById("gq5result").style.color="red";
    }

    //conditions for Pass or Fail//
    if (total<3 )
    {
        document.getElementById("score").innerHTML=("FAIL! Total Score: " + total + " out of 5 ");  //if score is less than 3, Fail is displayed along with total score//
    }

    else {
        document.getElementById("score").innerHTML=("PASS! Total Score: " + total + " out of 5 "); //if score is 3 or more, Pass is displayed with total score//
    }

    

}

//array for history questions//
let qHist=[
    ["1: In what year was the Paris Agreement signed?", "2015", "2015. Today, 192 countries plus the European Union have joined. The Agreement includes commitments from all countries to reduce their emissions and work together to adapt to the impacts of climate change, and calls on countries to strengthen their commitments over time. ",],                        //orders string questions and answers in an array
    ["2: In the 1830s, which popular condiment was sold as a cure for indigestion?", "ketchup", "Ketchup", "tomato ketchup", "Tomato Ketchup" ,"tomato ketchup. The idea was proposed by Dr John Cook Bennett, who in 1834 added tomatoes to ketchup which had previously been a concoction of fish and mushrooms. The addition of tomatoes meant it added a plethora of vitamins and antioxidants to the sauce. He later sold the recipe in form of 'tomato pills'. As numerous people began to sell ketchup as a medicine, the market reportedly collapsed in the 1850s."],
    ["3: What is considered the largest empire in history? ", "Mongol", "mongol", "the mongol empire", "The Mongol Empire", "Mongol Empire", "mongol empire", "The Mongol Empire. The largest contiguous empire in history, it emerged from the unification of Mongol and Turkish tribes under Genghis Khan. It covered 9.15 million square miles of land - more than 16% of the earth's landmass. The empire had 110 million people between 1270 and 1309 — more than 25% of the world's population."],
    ["4: How old was King Tutankhamun when he died? ", "19", "nineteen", "Nineteen", "19 years old. The young leader’s death was due to complications from a broken leg, which were exacerbated by malaria."],  
    ["5: In what year was the first iPhone released?", "2007", "2007, when Apple CEO Steve Jobs unveiled the first iPhone. The device, which started at $499 for a 4GB model and $599 for an 8GB version. Although appraised for its new multi-touch features, critics at the time deemed it too expensive to do well in the market!"],
]

//function to check history answers given by user and total score//
function checkH(){        
    
    let total=0

    if(document.getElementById("hAnsq1").value == qHist [0][1])
    
    {        
        document.getElementById("hq1result").innerHTML="Correct!";               //Displays message
        document.getElementById("hq1result").style.color="green";                //styles message green
        total+=1;                                                       
    }

    else 
    {                                                                            //any incorrect answer
        document.getElementById("hq1result").innerHTML="Incorrect. The correct answer is " + qHist[0][2]; 
        document.getElementById("hq1result").style.color="red";                  //styles correction message red
    }



    if(document.getElementById("hAnsq2").value == qHist [1][1] || 
    document.getElementById("hAnsq2").value == qHist [1][2] ||
    document.getElementById("hAnsq2").value == qHist [1][3]||
    document.getElementById("hAnsq2").value == qHist [1][4])

    {
        document.getElementById("hq2result").innerHTML="Correct!";
        document.getElementById("hq2result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("hq2result").innerHTML="Incorrect. The correct answer is " + qHist [1][5];
        document.getElementById("hq2result").style.color="red";
    }


    if(document.getElementById("hAnsq3").value == qHist[2][1] ||
    document.getElementById("hAnsq3").value == qHist [2][2] ||
    document.getElementById("hAnsq3").value == qHist [2][3] ||
    document.getElementById("hAnsq3").value == qHist [2][4] ||
    document.getElementById("hAnsq3").value == qHist [2][5] ||
    document.getElementById("hAnsq3").value == qHist [2][6] )
     {

        document.getElementById("hq3result").innerHTML="Correct!";
        document.getElementById("hq3result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("hq3result").innerHTML="Incorrect. The correct answer is " + qHist[2][7];
        document.getElementById("hq3result").style.color="red";
    }

    if(document.getElementById("hAnsq4").value == qHist[3][1] ||
    document.getElementById("hAnsq4").value == qHist[3][2] ||
    document.getElementById("hAnsq4").value == qHist[3][3] )
     {

        document.getElementById("hq4result").innerHTML="Correct!";
        document.getElementById("hq4result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("hq4result").innerHTML="Incorrect. The correct answer is " + qHist[3][4];
        document.getElementById("hq4result").style.color="red";
    }


    if(document.getElementById("hAnsq5").value == qHist[4][1])
     {

        document.getElementById("hq5result").innerHTML="Correct!";
        document.getElementById("hq5result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("hq5result").innerHTML="Incorrect. The correct answer is " + qHist[4][2];
        document.getElementById("hq5result").style.color="red";
    }

    

    if (total<3 )
    {
        document.getElementById("score").innerHTML=("FAIL! Total Score: " + total + " out of 5 ");
    }

    else {
        document.getElementById("score").innerHTML=("PASS! Total Score: " + total + " out of 5 ");
    }

}

//array for Physics questions//
let qPhys=[
    ["1: At CERN, how many years would it take the LHC to accelerate 1 gram of hydrogen? ", "1 million", "one million", "One Million", "1 Million", "1000000", "1,000,000", "1 million years. The protons accelerated at CERN are obtained from standard hydrogen. Although proton beams at the LHC are very intense, only 2 nanograms of hydrogen are accelerated each day."],                        //orders string questions and answers in an array
    ["2: Complete the sentence: The four fundamental states of matter in the observable world are solid, liquid, gas and ______.", "plasma", "Plasma",],
    ["3: What type of lens is used to make a magnifying glass: ", "a convex lens"],
    ["4: What object converts sound energy into electrical energy?", "a microphone", "A Microphone", "microphone", "Microphone",],  
    ["5: What material is the wire in a lightbulb usually made from?", "Tungsten, chosen for its extremely high melting point (about 3700 °C)!"],
]

//function to check physics answers given by user and total score//
function checkP(){        
    
    let total=0

    if(document.getElementById("pAnsq1").value == qPhys [0][1]||
    document.getElementById("pAnsq1").value == qPhys [0][2]||
    document.getElementById("pAnsq1").value == qPhys [0][3]||
    document.getElementById("pAnsq1").value == qPhys [0][4]||
    document.getElementById("pAnsq1").value == qPhys [0][5]||
    document.getElementById("pAnsq1").value == qPhys [0][6])
    
    {        
        document.getElementById("pq1result").innerHTML="Correct!";               //Displays message
        document.getElementById("pq1result").style.color="green";                //styles message green
        total+=1;                                                       
    }

    else 
    {                                                                            //any incorrect answer
        document.getElementById("pq1result").innerHTML="Incorrect. The correct answer is " + qPhys[0][7]; 
        document.getElementById("pq1result").style.color="red";                  //styles correction message red
    }



    if(document.getElementById("pAnsq2").value == qPhys [1][1] || 
    document.getElementById("pAnsq2").value == qPhys [1][2] )

    {
        document.getElementById("pq2result").innerHTML="Correct!";
        document.getElementById("pq2result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("pq2result").innerHTML="Incorrect. The correct answer is " + qPhys [1][1];
        document.getElementById("pq2result").style.color="red";
    }


    if(document.getElementById("pAnsq3").checked)                   //correct radio box must be checked//
     {

        document.getElementById("pq3result").innerHTML="Correct!";
        document.getElementById("pq3result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("pq3result").innerHTML="Incorrect. The correct answer is " + qPhys[2][1];
        document.getElementById("pq3result").style.color="red";
    }

    if(document.getElementById("pAnsq4").value == qPhys[3][1] ||
    document.getElementById("pAnsq4").value == qPhys[3][2] ||
    document.getElementById("pAnsq4").value == qPhys[3][3] || 
    document.getElementById("pAnsq4").value == qPhys[3][4] )
     {

        document.getElementById("pq4result").innerHTML="Correct!";
        document.getElementById("pq4result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("pq4result").innerHTML="Incorrect. The correct answer is " + qPhys[3][1];
        document.getElementById("pq4result").style.color="red";
    }


    if(document.getElementById("pAnsq5").checked)               //correct radio box must be checked//
     {

        document.getElementById("pq5result").innerHTML="Correct!";
        document.getElementById("pq5result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("pq5result").innerHTML="Incorrect. The correct answer is " + qPhys[4][1];
        document.getElementById("pq5result").style.color="red";
    }

    //conditions for pass or fail//
    if (total<3 )                                   
    {
        document.getElementById("score").innerHTML=("FAIL! Total Score: " + total + " out of 5 "); //if total is less than 3, Fail is displayed with total score//
    }

    else {
        document.getElementById("score").innerHTML=("PASS! Total Score: " + total + " out of 5 "); //if total is 3 or more then Pass is displayed with score//
    }
}

//array for chemistry questions//
let qChem=[
    
    ["1: An ice cube is placed in a flask half-filled with water. The system is completely closed and in equilibrium. What happens to the ice cube as time passes? ", "The shape changes but the mass remains the same. This is dynamic equilibrium. The reactants and products continue to react, although they completely negate each other. This means that the rate of melting is equal to the rate of freezing of the sugar molecules, so the mass doesn't change. But since melting still continues, the shape of the cube will be worn down."],
    ["2: An unknown, clear liquid is given to you in a beaker. You transfer the liquid from the beaker to a clean, empty test-tube, and begin to heat it. After a while, you see vapours (which on further analysis you discover are vapours of water) rising from the test-tube, and pretty soon, all that's left are a few crystals of salt stuck to the edges! What was that liquid?", "Mixture. The constituents of a mixture can easily be separated by physical processes, which in this case, was the application of heat. The salt had been dissolved in the water to form a true solution of common salt, where the particles of salt were invisible through the naked eye as well as through a microscope, resulting in the solution being absolutely clear."],
    ["3: This acid is the most acidic of all organic acids and has the chemical formula CH2O2. It is present in the stings of stinging nettles, bees and ants. What is it called? ", "formic", "Formic", "formic acid", "Formic Acid", "methanoic acid", "Methanoic Acid", "Formic Acid. The name 'formic acid' comes from the Latin word 'formica' for ants as the venom injected by ants contains it. Since it is acidic in nature, the sting of a bee / nettle can be eased with the application of base, such as soda on the skin, at the spot of the sting. Bases include calcium hydroxide in the form of lime, and an ammonia solution. Formic acid is also called 'methanoic acid'."],
    ["4: A wasp sting is acidic in nature.", "False. Whereas bee venom is acidic in nature (pH 5.0 to 5.5), wasp stings are close to neutral (pH 6.8)."],
    ["5: A low level of this alkaline earth metal can contribute to developing asthma, diabetes or osteoporosis. It might also improve one's memory and alleviate spasms. Name this element. ", "magnesium", "Magnesium","Magnesium, which is relatively light in weight with a silvery appearance. It is an integral part of chlorophyll cells, so is abundant in green leafy vegetables and herbs, but can also be found coffee, tea, cocoa, nuts and cereals--to name a few! As a useful transition metal, magnesium plays an essential biological role in warm-blooded animals."],                         
]

//function to check chemistry answers given by user and total score//
function checkC(){      
    
    let total=0

    if(document.getElementById("cAnsq1").checked)                               //correct answer in checked radio box
    
    {        
        document.getElementById("cq1result").innerHTML="Correct!";               //Displays message
        document.getElementById("cq1result").style.color="green";                //styles message green
        total+=1;                                                       
    }

    else 
    {                                                                            //any incorrect answer
        document.getElementById("cq1result").innerHTML="Incorrect. The correct answer is " + qChem[0][1]; 
        document.getElementById("cq1result").style.color="red";                  //styles correction message red
    }



    if(document.getElementById("cAnsq2").checked)
    {
        document.getElementById("cq2result").innerHTML="Correct!";
        document.getElementById("cq2result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("cq2result").innerHTML="Incorrect. The correct answer is " + qChem [1][1];
        document.getElementById("cq2result").style.color="red";
    }




    if(document.getElementById("cAnsq3").value == qChem[2][1] ||
    document.getElementById("cAnsq3").value == qChem [2][2] || 
    document.getElementById("cAnsq3").value == qChem [2][3] || 
    document.getElementById("cAnsq3").value == qChem [2][4] ||
    document.getElementById("cAnsq3").value == qChem [2][5] ||
    document.getElementById("cAnsq3").value == qChem [2][6] )
     {

        document.getElementById("cq3result").innerHTML="Correct!";
        document.getElementById("cq3result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("cq3result").innerHTML="Incorrect. The correct answer is " + qChem[2][7];
        document.getElementById("cq3result").style.color="red";
    }

    if(document.getElementById("cAnsq4").checked)
     {

        document.getElementById("cq4result").innerHTML="Correct!";
        document.getElementById("cq4result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("cq4result").innerHTML="Incorrect. The correct answer is " + qChem[3][1];
        document.getElementById("cq4result").style.color="red";
    }


    if(document.getElementById("cAnsq5").value == qChem[4][1] ||
    document.getElementById("cAnsq5").value == qChem[4][2] )  
    
    {
        document.getElementById("cq5result").innerHTML="Correct!";
        document.getElementById("cq5result").style.color="green";
        total+=1;
    }

    else {
        document.getElementById("cq5result").innerHTML="Incorrect. The correct answer is " + qChem[4][3];
        document.getElementById("cq5result").style.color="red";
    }

    document.getElementById("score").innerHTML= total;         //total score is displayed in score location

    if (total<3 )
    {
        document.getElementById("score").innerHTML=("FAIL! Total Score: " + total + " out of 5 ");  //if score is under 3 then Fail is displayed
    }

    else {
        document.getElementById("score").innerHTML=("PASS! Total Score: " + total + " out of 5 "); //if score is 3 or above then Pass is displayed
    }


}
