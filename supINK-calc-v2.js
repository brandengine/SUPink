var productQTY, colorAmount, result, productPRICE, displayResult, totalPRICE, carbonINK, puffINK, metalINK, fLOC, bLOC, sleeveDEC, neckTAG, printLOCs, hpResult, hpDisplayResult, hpQTY, hpSize; 

//input

//radio Decoration
var multipleDECOR = document.getElementById("order-type-Multiple");
var printDECOR = document.getElementById("order-type-Printing");
var emDECOR = document.getElementById("order-type-Embroidery");
var transDECOR = document.getElementById("order-type-Transfers");


//checkboxes SPECIALTY INKS
var carbonINK = document.getElementById("Carbon-Dye-Ink");
var metalINK = document.getElementById("Metallic-Ink");
var puffINK = document.getElementById("Puff-Ink");

//checkboxes LOCATIONS
var frontDEC = document.getElementById("Front-Decoration");
var backDEC = document.getElementById("Back-Decoration");
var sleeveDEC = document.getElementById("Sleeve-Decoration");
var otherDEC = document.getElementById("Other-Location-Decoration");

//tagging OPTIONS
var neckTAG = document.getElementById("Neck-Tag");
var printTAG = document.getElementById("Tag-Print-Removal");
var cutTAG = document.getElementById("Tag-Cut-Removal");

//tagging OPTIONS
var foldOPT = document.getElementById("Folding");
var foldBAG = document.getElementById("Fold-Bag");
var bandTAG = document.getElementById("Roll-Band-Tag");

//sewing OPTIONS
var wLABEL = document.getElementById("Woven-Label");
var hTag = document.getElementById("Hang-Tag");
var sideSEW = document.getElementById("4-sided-sew");
var seamRIP = document.getElementById("Seam-Rip-Restitch");
var seamCAPS = document.getElementById("SEAM-RIP-CAPS");

//sticker OPTIONS
var UPCstick = document.getElementById("UPC-sticker");

//shipping OPTIONS
var RUSHone = document.getElementById("1-2-DAY-TURN");
var RUSHthree = document.getElementById("3-4-DAY-TURN");
var RUSHfive = document.getElementById("5-6-DAY-TURN");
var RUSHseven = document.getElementById("7-9-DAY-TURN");
var RUSHzero = document.getElementById("No-Rush");

//HEAT PRESS START
var hpSMALL = document.getElementById("Small-Print");
var hpLCHEST = document.getElementById("Left-Chest-Print");
var hpMED = document.getElementById("Medium-Print");
var hpLRG = document.getElementById("Large-Print");
var hpXL = document.getElementById("Extra-Large-Print");
//HEAT PRESS shipping
var hpRUSHTHREE = document.getElementById("HP-3-4-DAY-TURN");
var hpRUSHFIVE = document.getElementById("HP-5-6-DAY-TURN");
var hpRUSHSEVEN = document.getElementById("HP-7-9-DAY-TURN");
var hpRUSHZERO = document.getElementById("HP-No-Rush");

//set price WF VAR
var productPRICE = Number(4.95);

// add listener
document.getElementById("product-QTY").addEventListener("change", update);
document.getElementById("color-QTY").addEventListener("change", update);
//checkboxes SPECIALTY INKS
document.getElementById("Carbon-Dye-Ink").addEventListener("change", update);
document.getElementById("Metallic-Ink").addEventListener("change", update);
document.getElementById("Puff-Ink").addEventListener("change", update);
//checkboxes LOCATIONS
document.getElementById("Front-Decoration").addEventListener("change", update);
document.getElementById("Back-Decoration").addEventListener("change", update);
document.getElementById("Sleeve-Decoration").addEventListener("change", update);
document.getElementById("Other-Location-Decoration").addEventListener("change", update);
//tagging OPTIONS
document.getElementById("Neck-Tag").addEventListener("change", update);
document.getElementById("Tag-Print-Removal").addEventListener("change", update);
document.getElementById("Tag-Cut-Removal").addEventListener("change", update);
//folding OPTIONS
document.getElementById("Folding").addEventListener("change", update);
document.getElementById("Fold-Bag").addEventListener("change", update);
document.getElementById("Roll-Band-Tag").addEventListener("change", update);
//sewing OPTIONS
document.getElementById("Woven-Label").addEventListener("change", update);
document.getElementById("Hang-Tag").addEventListener("change", update);
document.getElementById("4-sided-sew").addEventListener("change", update);
document.getElementById("Seam-Rip-Restitch").addEventListener("change", update);
document.getElementById("SEAM-RIP-CAPS").addEventListener("change", update);
//sticker OPTIONS
document.getElementById("UPC-sticker").addEventListener("change", update);
//shipping OPTIONS
document.getElementById("1-2-DAY-TURN").addEventListener("change", update);
document.getElementById("3-4-DAY-TURN").addEventListener("change", update);
document.getElementById("5-6-DAY-TURN").addEventListener("change", update);
document.getElementById("7-9-DAY-TURN").addEventListener("change", update);
document.getElementById("No-Rush").addEventListener("change", update);

//HEAT PRESS OPTIONS
document.getElementById("Transfer-QTY").addEventListener("change", update);
document.getElementById("Small-Print").addEventListener("change", update);
document.getElementById("Left-Chest-Print").addEventListener("change", update);
document.getElementById("Medium-Print").addEventListener("change", update);
document.getElementById("Large-Print").addEventListener("change", update);
document.getElementById("Extra-Large-Print").addEventListener("change", update);
//HEAT PRESS SHIPPING
document.getElementById("HP-3-4-DAY-TURN").addEventListener("change", update);
document.getElementById("HP-5-6-DAY-TURN").addEventListener("change", update);
document.getElementById("HP-7-9-DAY-TURN").addEventListener("change", update);
document.getElementById("HP-No-Rush").addEventListener("change", update);



//set display ID

console.log("has fired");
displayResult = document.getElementById("display-number");
hpDisplayResult = document.getElementById("HP-display-number");

//set defaults
displayResult.textContent = (Number(productPRICE) + Number(5.00)).toFixed(2);
hpDisplayResult.textContent = (Number(productPRICE) + Number(hpSMALL)).toFixed(2);

function update(){

productQTY = document.getElementById("product-QTY").value;
colorAmount = document.getElementById("color-QTY").value;
//checkboxes SPECIALTY INKS
carbonINK = document.getElementById("Carbon-Dye-Ink");
metalINK = document.getElementById("Metallic-Ink");
puffINK = document.getElementById("Puff-Ink");
//checkboxes LOCATIONS
frontDEC = document.getElementById("Front-Decoration");
backDEC = document.getElementById("Back-Decoration");
sleeveDEC = document.getElementById("Sleeve-Decoration");
otherDEC = document.getElementById("Other-Location-Decoration");
//checkboxes LOCATIONS Logic
   if (frontDEC.checked === true) {
         fLOC = Number(1); } else {
            fLOC = Number(0);
         }
   if (backDEC.checked === true) {
         bLOC = Number(1);} else {
            bLOC = Number(0);
         }

   if (sleeveDEC.checked === true) {
         sLOC = Number(1);} else {
            sLOC = Number(0);
         }

   if (otherDEC.checked === true) {
         oLOC = Number(1);} else {
            oLOC = Number(0);
         }

   printLOCs = Number(fLOC) + Number(bLOC) + Number(sLOC) + Number(oLOC);
   if (printLOCs < 2){
      printLOCs= Number(1)
   }

//tagging OPTIONS
neckTAG = document.getElementById("Neck-Tag");
printTAG = document.getElementById("Tag-Print-Removal");
cutTAG = document.getElementById("Tag-Cut-Removal");

//folding OPTIONS
foldOPT = document.getElementById("Folding");
foldBAG = document.getElementById("Fold-Bag");
bandTAG = document.getElementById("Roll-Band-Tag");

//sewing OPTIONS
wLABEL = document.getElementById("Woven-Label");
hTag = document.getElementById("Hang-Tag");
sideSEW = document.getElementById("4-sided-sew");
seamRIP = document.getElementById("Seam-Rip-Restitch");
seamCAPS = document.getElementById("SEAM-RIP-CAPS");

//sticker OPTIONS
UPCstick = document.getElementById("UPC-sticker");

//shipping OPTIONS
RUSHone = document.getElementById("1-2-DAY-TURN");
RUSHthree = document.getElementById("3-4-DAY-TURN");
RUSHfive = document.getElementById("5-6-DAY-TURN");
RUSHseven = document.getElementById("7-9-DAY-TURN");
RUSHzero = document.getElementById("No-Rush");

//HEAT PRESS OPTIONS
hpQTY = document.getElementById("Transfer-QTY").value;
hpSMALL = document.getElementById("Small-Print");
hpLCHEST = document.getElementById("Left-Chest-Print");
hpMED = document.getElementById("Medium-Print");
hpLRG = document.getElementById("Large-Print");
hpXL = document.getElementById("Extra-Large-Print");
hpRUSHTHREE = document.getElementById("HP-3-4-DAY-TURN");
hpRUSHFIVE = document.getElementById("HP-5-6-DAY-TURN");
hpRUSHSEVEN = document.getElementById("HP-7-9-DAY-TURN");
hpRUSHZERO = document.getElementById("HP-No-Rush");

//PRINT CALC     
result = ((Number(colorAmount) * Number(productQTY)) + productPRICE) * printLOCs;

//ink CALC
 if (carbonINK.checked === true) {
    result = Number(result) + (Number(0.25) * Number(printLOCs));
  }
 if (metalINK.checked === true) {
    result = Number(result) + (Number(0.25) * Number(printLOCs));
  }
 if (puffINK.checked === true) {
    result = Number(result) + (Number(0.25) * Number(printLOCs));
  }
//tag CALC
 if (neckTAG.checked === true) {
    result = Number(result) + Number(1.60);
  }
  if (printTAG.checked === true) {
    result = Number(result) + Number(1.80);
  }
  if (cutTAG.checked === true) {
    result = Number(result) + Number(0.30);
  }
//fold CALC
  if (foldOPT.checked === true) {
    result = Number(result) + Number(0.40);
  }
  if (foldBAG.checked === true) {
    result = Number(result) + Number(0.80);
  }
  if (bandTAG.checked === true) {
    result = Number(result) + Number(0.70);
  }
//sewing CALC
  if (wLABEL.checked === true) {
    result = Number(result) + Number(1.00);
  }
  if (hTag.checked === true) {
    result = Number(result) + Number(0.25);
  }
  if (sideSEW.checked === true) {
    result = Number(result) + Number(3.50);
  }
  if (seamRIP.checked === true) {
    result = Number(result) + Number(2);
  }
  if (seamCAPS.checked === true) {
    result = Number(result) + Number(2.50);
  }
  //sticker CALC
  if (UPCstick.checked === true) {
    result = Number(result) + Number(0.15);
  }
  //shipping CALC
  if (RUSHone.checked === true) {
    result = Number(result) * Number(2);
  }
  if (RUSHthree.checked === true) {
    result = Number(result) * Number(1.5);
  }
   if (RUSHfive.checked === true) {
    result = Number(result) * Number(1.3);
  }
   if (RUSHseven.checked === true) {
    result = Number(result) * Number(1.2);
  }
    if (RUSHzero.checked === true) {
    result = Number(result) * Number(1);
  }

  displayResult.textContent = result.toFixed(2);


  //HEAT PRESS CALC
  hpSize = Number(7.65);
  if (hpLCHEST.checked === true) {
    hpSize = Number(8.10);
  }
  if (hpMED.checked === true) {
    hpSize = Number(9.70);
  }
  if (hpLRG.checked === true) {
    hpSize = Number(11.45);
  }
  if (hpXL.checked === true) {
    hpSize = Number(15.10);
  }
  if (hpSMALL.checked === true) {
    hpSize = Number(7.65);
  }

  hpResult = productPRICE + (Number(hpQTY) * Number(hpSize));
   

  hpDisplayResult.textContent = hpResult.toFixed(2);
 
}
