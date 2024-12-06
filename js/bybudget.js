// Ambil elemen yang diperlukan
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const searchButton = document.getElementById("searchButton");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

// Fungsi untuk mencari elemen berdasarkan rentang harga
function searchCardsByPrice() {
  const minPrice = parseFloat(minPriceInput.value) || 0; // Harga minimal (default 0 jika kosong)
  const maxPrice = parseFloat(maxPriceInput.value) || Infinity; // Harga maksimal (default Infinity jika kosong)
  let matchFound = false; // Variabel untuk memeriksa apakah ada hasil yang cocok

  // Periksa setiap elemen item
  cards.forEach((card) => {
    const price = parseFloat(card.getAttribute("data-name")); // Ambil harga dari atribut data-price

    // Cek apakah harga berada dalam rentang yang ditentukan
    if (price >= minPrice && price <= maxPrice) {
      card.style.display = "block"; // Tampilkan elemen yang cocok
      matchFound = true;
    } else {
      card.style.display = "none"; // Sembunyikan elemen yang tidak cocok
    }
  });

  // Tampilkan/hilangkan pesan jika tidak ada hasil
  noResults.style.display = matchFound ? "none" : "block";
}

// Tambahkan event listener ke tombol untuk pencarian saat tombol klik
searchButton.addEventListener("click", searchCardsByPrice);
