//set defaults

console.log("has fired");
displayResult = document.getElementById("display-number");
displayResult.textContent = Number(productPRICE) + Number(5.00);

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

//CALC     
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
 
}
