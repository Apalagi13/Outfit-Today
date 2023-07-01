// Data baju
const clothes = [
    { id: 1, name: 'Baju A', color: 'Merah' },
    { id: 2, name: 'Baju B', color: 'Biru' },
    { id: 3, name: 'Baju C', color: 'Hijau' },
    { id: 4, name: 'Baju D', color: 'Merah' },
    { id: 5, name: 'Baju E', color: 'Kuning' },
  ];
  
  // Fungsi untuk melakukan pencarian berdasarkan kata kunci
  function searchClothes(keyword) {
    // Menghapus hasil pencarian sebelumnya
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
  
    // Melakukan pencarian berdasarkan kata kunci
    const filteredClothes = clothes.filter((clothing) => {
      return clothing.name.toLowerCase().includes(keyword.toLowerCase()) || 
             clothing.color.toLowerCase().includes(keyword.toLowerCase());
    });
  
    // Menampilkan hasil pencarian
    if (filteredClothes.length === 0) {
      const noResults = document.createElement('p');
      noResults.textContent = 'Tidak ada hasil ditemukan.';
      searchResults.appendChild(noResults);
    } else {
      filteredClothes.forEach((clothing) => {
        const result = document.createElement('p');
        result.textContent = `${clothing.name} (${clothing.color})`;
        searchResults.appendChild(result);
      });
    }
  }
  
  // Mendapatkan elemen-elemen yang diperlukan
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  
  // Event listener untuk tombol pencarian
  searchButton.addEventListener('click', () => {
    const keyword = searchInput.value;
    searchClothes(keyword);
  });
  