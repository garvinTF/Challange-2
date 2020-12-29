let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
  ];
  
  let totalHarga = 0;
  
  barang.map((b, i) => {
    totalHarga += b.harga * b.jumlah;
  });
  
  console.log(
    "Rp" +
      totalHarga
        .toString()
        .split("")
        .reverse()
        .join("")
        .match(/.{1,3}/g)
        .map((x) => x.split("").reverse().join(""))
        .reverse()
        .join(".")
  );
  
  //Output "Rp250.000"