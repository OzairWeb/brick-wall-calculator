function toggleFeet() {
  document.getElementById("feetSection").style.display = "block";
  document.getElementById("metersSection").style.display = "none";
  document.getElementById("brickDimensionFeet").style.display = "block";
  document.getElementById("brickDimensionMeters").style.display = "none";
  document.getElementById("feetBtn").classList.add("active");
  document.getElementById("metersBtn").classList.remove("active");
}
function toggleMeters() {
  document.getElementById("feetSection").style.display = "none";
  document.getElementById("metersSection").style.display = "block";
  document.getElementById("brickDimensionFeet").style.display = "none";
  document.getElementById("brickDimensionMeters").style.display = "block";
  document.getElementById("feetBtn").classList.remove("active");
  document.getElementById("metersBtn").classList.add("active");
}
function calculateBricksQuantity() {
  if (document.getElementById("feetSection").style.display === "block") {
    calculateFeetSection();
  } else {
    calculateMetersSection();
  }
}
function calculateFeetSection() {
  const l = parseFloat(document.getElementById("wallLengthFeet").value);
  const h = parseFloat(document.getElementById("wallHeightFeet").value);
  const t = parseFloat(document.getElementById("wallThicknessFeet").value) / 12;
  const voids = parseFloat(document.getElementById("windowDoorAreaFeet").value);
  const vol = (l * h * t) - (voids * t);
  const bl = parseFloat(document.getElementById("brickLengthFeet").value) / 12;
  const bw = parseFloat(document.getElementById("brickWidthFeet").value) / 12;
  const bt = parseFloat(document.getElementById("brickThicknessFeet").value) / 12;
  const bp = parseFloat(document.getElementById("brickPrice").value);
  const bVol = bl * bw * bt;
  const bricks = Math.ceil(vol / bVol) * 0.94921875;
  const bCost = bricks * bp;
  const cr1 = parseFloat(document.getElementById("cementRatioCement").value);
  const cr2 = parseFloat(document.getElementById("cementRatioSand").value);
  const cw = parseFloat(document.getElementById("cementWeight").value);
  const cp = parseFloat(document.getElementById("cementPrice").value);
  const ratio = cr1 + cr2;
  const cVol = (cr1 / ratio) * (vol * 0.3175);
  const sVol = (cr2 / ratio) * (vol * 0.3175);
  const bags = cVol * 40 / cw;
  const cCost = bags * cp;
  document.getElementById("totalVolume").textContent = vol.toFixed(2) + " CFT";
  document.getElementById("numBricks").textContent = bricks.toFixed(2) + " Bricks";
  document.getElementById("brickCost").textContent = "$" + bCost.toFixed(2);
  document.getElementById("cementBags").textContent = bags.toFixed(2) + " Bags";
  document.getElementById("sand").textContent = sVol.toFixed(2) + " CFT";
  document.getElementById("cementCost").textContent = "$" + cCost.toFixed(2);
}
function calculateMetersSection() {
  const l = parseFloat(document.getElementById("wallLengthMeters").value);
  const h = parseFloat(document.getElementById("wallHeightMeters").value);
  const t = parseFloat(document.getElementById("wallThicknessMeters").value) / 1000;
  const voids = parseFloat(document.getElementById("windowDoorAreaMeters").value);
  const vol = (l * h * t) - (voids * t);
  const bl = parseFloat(document.getElementById("brickLengthMeters").value) / 1000;
  const bw = parseFloat(document.getElementById("brickWidthMeters").value) / 1000;
  const bt = parseFloat(document.getElementById("brickThicknessMeters").value) / 1000;
  const bp = parseFloat(document.getElementById("brickPrice").value);
  const bVol = bl * bw * bt;
  const bricks = Math.ceil(vol / bVol) * 0.94921875;
  const bCost = bricks * bp;
  const cr1 = parseFloat(document.getElementById("cementRatioCement").value);
  const cr2 = parseFloat(document.getElementById("cementRatioSand").value);
  const cw = parseFloat(document.getElementById("cementWeight").value);
  const cp = parseFloat(document.getElementById("cementPrice").value);
  const ratio = cr1 + cr2;
  const cVol = (cr1 / ratio) * (vol * 0.33);
  const sVol = (cr2 / ratio) * (vol * 0.33);
  const bags = cVol * 1440 / cw;
  const cCost = bags * cp;
  document.getElementById("totalVolume").textContent = vol.toFixed(3) + " m³";
  document.getElementById("numBricks").textContent = bricks.toFixed(2) + " Bricks";
  document.getElementById("brickCost").textContent = "$" + bCost.toFixed(3);
  document.getElementById("cementBags").textContent = bags.toFixed(3) + " Bags";
  document.getElementById("sand").textContent = sVol.toFixed(3) + " m³";
  document.getElementById("cementCost").textContent = "$" + cCost.toFixed(3);
}
toggleFeet();
