const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("================================");
console.log("       🎮 TETRIS GAME 🎮");
console.log("================================");
console.log("1. START GAME");
console.log("2. EXIT");

rl.question("Pilih menu (1/2): ", function (pilihan) {
  if (pilihan === "1") {
    startGame();
  } else {
    console.log("Terima kasih sudah bermain!");
    rl.close();
  }
});

function startGame() {
  console.log("\n🚀 GAME DIMULAI!");
  console.log("Susun balok untuk mendapatkan skor.");
  console.log("Ketik L untuk ke kiri.");
  console.log("Ketik R untuk ke kanan.");
  console.log("Ketik D untuk menjatuhkan balok.");
  console.log("Ketik Q untuk keluar.\n");

  let score = 0;
  let posisi = 5;

  function play() {
    rl.question(
      "Balok [■] Posisi: " + posisi +
      " | Skor: " + score + " | Aksi: ",
      function (aksi) {

        aksi = aksi.toUpperCase();

        if (aksi === "L") {
          posisi = Math.max(1, posisi - 1);
          console.log("Balok bergerak ke kiri.");
        } else if (aksi === "R") {
          posisi = Math.min(10, posisi + 1);
          console.log("Balok bergerak ke kanan.");
        } else if (aksi === "D") {
          score += 10;
          console.log("Balok jatuh! +10 poin.");
        } else if (aksi === "Q") {
          console.log("\nGAME OVER!");
          console.log("Skor akhir: " + score);
          rl.close();
          return;
        } else {
          console.log("Perintah tidak dikenal.");
        }

        console.log("|" + " ".repeat(posisi - 1) + "■" +
          " ".repeat(10 - posisi) + "|");
        play();
      }
    );
  }

  play();
}