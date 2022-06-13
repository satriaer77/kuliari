// =------- Tag for make content -------= //
// <span class='content-sub-heading'></span> ->> Digunakan untuk membuat sub-heading
// <span class='content-code'></span>  ->> Digunakan untuk membuat content yang berisi code
// <div class='content-list-element'>ini adalah daftar list<ul><li></li></ul></div> ->> Digunakan untuk membuat content yang berisi list
// <p class='content-paragraph'></p> ->> Digunakan untuk membuat content yang berisi paragraf
// <img class='content-image' src='../assets/images/materi/nama_file.jpg'> ->> Digunakan untuk membuat content yang berisi image

dataMateri =
{
  "profil-penulis":
  {
    "syayid":
    {
      "nama": "Syayid Al Aziz",
      "foto": "syayid.jpg"
    },
    "raihan":
    {
      "nama": "Raihan Fadillah",
      "foto": "raihan.jpg"
    }
  },

  "mata-kuliah":
  {

    "struktur-data":
    {
      "judul-mata-kuliah": "Struktur Data",

      "jumlah-materi": 2,
      "materi":
      {
        "struktur-data-stack":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Struktur Data Stack",
          "cover": "struktur-data_struktur-data-stack_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>    Algoritma Struktur Data  </span><span class='content-code'>int day = 4;<br>switch (day) {<br>&ensp;case 1:<br>&ensp;&ensp;System.out.println('Monday');<br>&ensp;&ensp;break;<br>&ensp;case 2:<br>&ensp;&ensp;System.out.println('Tuesday');</span> <div class='content-list-element'>ini adalah daftar list<ul><li>abjad</li><li>jeaasd</li><li>asdsadsad</li></ul></div>  <p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFO</p><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-stack_lifo.jpg'>"
        },
        "struktur-data-queue":
        {
          "jumlah-baca": 0,
          "urutan": 3,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Algoritma Bubble Sort",
          "cover": "struktur-data_struktur-data-queue_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>    Algoritma Bubble Sort  </span><p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFOLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum faucibus tincidunt. Curabitur congue turpis sed tristique varius. Suspendisse suscipit at tellus sed venenatis. Ut nulla enim, consectetur vitae libero condimentum, facilisis vestibulum nibh. Proin nec eros non quam aliquam blandit. Fusce placerat ullamcorper erat, id consequat ligula tristique ut. In tincidunt urna quis rhoncus tristique. Cras neque magna, tincidunt id nunc id, pulvinar sodales purus. Fusce id bibendum eros, eget pellentesque dui. Cras mattis quam nisl, quis porttitor magna lobortis vel. Quisque dapibus dolor eget suscipit ornare. Sed nec auctor nunc.</p><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-stack_lifo.jpg'><p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFOLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum faucibus tincidunt. Curabitur congue turpis sed tristique varius. Suspendisse suscipit at tellus sed venenatis. Ut nulla enim, consectetur vitae libero condimentum, facilisis vestibulum nibh. Proin nec eros non quam aliquam blandit. Fusce placerat ullamcorper erat, id consequat ligula tristique ut. In tincidunt urna quis rhoncus tristique. Cras neque magna, tincidunt id nunc id, pulvinar sodales purus. Fusce id bibendum eros, eget pellentesque dui. Cras mattis quam nisl, quis porttitor magna lobortis vel. Quisque dapibus dolor eget suscipit ornare. Sed nec auctor nunc.</p> <span class='content-code'>int day = 4;<br>switch (day) {<br>&ensp;case 1:<br>&ensp;&ensp;System.out.println('Monday');<br>&ensp;&ensp;break;<br>&ensp;case 2:<br>&ensp;&ensp;System.out.println('Tuesday');</span><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-queue_cover.jpg'>"
        }


      }
    },


    "algoritma-dasar":
    {
      "judul-mata-kuliah": "Algoritma Pemrograman Dasar",
      "jumlah-materi": 2,
      "materi":
      {
        "algoritma-dasar-tipedata":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Tipe Data & Variabel",
          "cover": "algoritma-dasar_algoritma-dasar-tipedata_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>Tipe Data</span><p class='content-paragraph'>Pada python terdapat beberapa macam tipe data yang dapat kita gunakan, namun dalam pembahasan kali ini akan menjelaskan tentang tipe data dasar yang terdapat pada python yaitu string, integer, float, , boolean, list, tuple, dan dictionary. Tentunya tipe data ini akan sangat penting dan digunakan pada beberapa kode yang ini kalian buat. </p><p class='content-paragraph'>String : tipe data untuk menyimpan data berupa karakter, kata, atau kalimat. Penulisannya diapit dengan tanda kutip. Contoh : ' ini adalah tipe data string '</p><p class='content-paragraph'>Integer : tipe data untuk menyimpan data berupa bilangan bulat. Penulisannya berupa angka tanpa tanda kutip. Contoh : 100</p><p class='content-paragraph'>Float : tipe data untuk menyimpan data berupa bilangan pecahan desimal. Penulisannya berupa angka tanpa tanda kutip. Contoh : 1.2 atau 4.6</p><p class='content-paragraph'>Boolean : tipe yang menyimpan dua nilai yaitu true dan false. </p><p class='content-paragraph'>List : tipe data untuk menyimpan kumpulan data bahkan dapat menampung berbagai macam tipe data termasuk list itu sendiri. List memiliki index, dapat diubah, ditambah, ataupun dihapus. List membolehkan adanya duplikat data. Penulisannya diapit dengan tanda kurung siku [] dan menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh ['aku', 1, 10.9]</p><p class='content-paragraph'>Tuple : mirip seperti list, namun bersifat immutable (tidak dapat diubah). Tuple membolehkan adanya duplikat data. Tuple ditulis dalam tanda kurung () dan menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh : ('tuple', 5 ,'contoh', 10.5)</p><p class='content-paragraph'>Dictionary : tipe data ini menyimpan kumpulan data yang berpasangan (memiliki kunci dan nilai) namun tidak memiliki index. Dictionary dapat diubah dan terurut. Dictionary tidak membolehkan dua atau lebih data yang memiliki key sama. Jika ada duplikasi seperti demikian yang terbaca adalah nilai terakhir yang diberikan. Penulisan dictionary menggunakan kurung kurawal {}, antara key dan value dipisahkan tanda titik dua, serta menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh: {'judul': 'belajar alpro', 'semangat belajar':200,'progres belajar': 50.3}</p><span class='content-sub-heading'>Variabel</span><p class='content-paragraph'>Variabel adalah lokasi memori yang dicadangkan untuk menyimpan nilai-nilai. Ini berarti bahwa ketika Anda membuat sebuah variabel Anda memesan beberapa ruang di memori. Variabel menyimpan data yang dilakukan selama program dieksekusi, yang nantinya isi dari variabel tersebut dapat diubah oleh operasi - operasi tertentu pada program yang menggunakan variabel</p><p class='content-paragraph'>Variabel dapat menyimpan berbagai macam tipe data. Di dalam pemrograman Python, variabel mempunyai sifat yang dinamis, artinya variabel Python tidak perlu didekralasikan tipe data tertentu dan variabel Python dapat diubah saat program dijalankan. Untuk membuat variabel hanya perlu menulis nama variabel lalu isi dalam variabel tersebut. Contoh a = 5. </p>"
        },

        "algoritma-dasar-operator":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Operator",
          "cover": "algoritma-dasar_algoritma-dasar-operator_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Operator adalah konstruksi yang dapat memanipulasi nilai dari operan, jadi pada materi kali ini akan membahas tentang operator matematika yang akan diimplementasikan atau digunakan dalam bahasa pemograman python.</p><div class='content-list-element'><ol><li>Penjumlahan (+)  Menjumlahkan nilai dari masing-masing operan atau bilangan. Contoh 2+3 = 5.</li><li>Pengurangan (-) Mengurangi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 3-5 = -2.</li><li>Perkalian (*) Mengalikan operan atau bilangan. Contoh 4*10 = 40</li><li>Pembagian (/) Membagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 5/2 = 1,5.</li><li>Sisa bagi (%) Mendapatkan sisa bagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 10%2 = 0.</li><li>Pangkat (**) (%) Memangkatkan sisa bagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 5**2 = 25</li><li>Pembagian Bulat (//) Sama seperti pembagian hanya saja angka dibelakang koma dihilangkan. Contoh 10//3 = 3. </li></ol></div>"
        },
        "algoritma-dasar-sequence":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima Sequence",
          "cover": "algoritma-dasar_algoritma-dasar-sequence_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Algoritma sequence adalah jenis algoritma yang paling sederhana, dimana pada algoritma ini berjalan sesuai dengan urutan yaitu dari awal hingga akhir. Jadi dalam algoritma ini harus ditulis secara  berurutan ketika menerapkannya pada code di bahasa pemograman. Pada bentuk eksekusinya algoritma ini akan menjalankan perintah secara berurutan sesuai dengan intruksi yang dijalankan. Sequence algoritma terdiri dari satu intruksi atau lebih yang berarti bahwa tiap intruksi dikerjakan satu persatu, dalam masing-masing intruksi hanya dikerjakan sekali dan tidak ada perulangan, urutan intruksi dilakukan sama dan sesuai dengan intruksi yang dibuat, Intruksi yang terkahir adalah akhir dari algoritma. Contoh dari algortima sequence yaitu program penghitungan persegi panjang. Algoritmanya seperti berikut: </p><div class='content-list-element'><ol><li>Masukkan panjang</li><li>Masukkan Lebar</li><li>Hitung Luas persegi panjang, dengan panjang x luas</li><li>Cetak luas persegi panjang</li></ol></div>"
        },
        "algoritma-dasar-selection":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima Selection",
          "cover": "algoritma-dasar_algoritma-dasar-selection_cover.jpg",
          "isi-materi": "<p class='content-paragraph'> Algoritma Branches adalah algortima yang berjalan sesuai dengan kondisi atau perintah yang terdapat pada percabangan tersebut. Jadi dalam percabangan ini akan menyeleksi apakah intruksi selanjutnya akan dikerjakan pada kondisi yang pertama atau kondisi yang selanjutnya. Pilihan inilah yang disebut dengan braches atau selection. Pada branch condition ini terdapat kondisi True atau False. Jika memenuhi kondisi True maka syntax pada percabangan True yang akan diekseskusi, begitu juga sebaliknya. Contoh algoritma ini sebagai berikut:</p><div class='content-list-element'><ol><li>Masukkan nilai a dan b</li><li>Jika nilai a lebih besar dari b, maka cetak a</li><li>Jika nilai b lebih besar dari a, maka cetak b</li><li>Tampilkan hasil nilai terbesar</li></ol></div><p class='content-paragraph'>Jadi seperti pada algortima diatas diperlukan sebuah kondisi untuk intruksi tersebut bisa berjalan pada kondisi pertama, lalu jika tidak terpenuhi maka akan dicek hingga kondisi terakhir dari sebuah intruksi. Maka dalam hal ini diperlukan braches atau selection. </p><span class='content-sub-heading'>if</span><p class='content-paragraph'>Digunakan untuk kondisi yang menentukan tindakan apa yang dilakukan ketika program yang berjalan sesuai dengan intruksi tersebut. Untuk memenuhi kondisi tersebut program harus berjalan dengan memiliki nilai benar, dan jika program bernilai salah maka intruksi pada kondisi tersebut tidak akan dieksekusi. </p><span class='content-sub-heading'>if else</span><p class='content-paragraph'>Digunakan utuk seleski ketika dalam nilai if bernilai salah, jadi dalam penggunaanya kita harus mendeklarasi kondisi pada perintah if, lalu jika dalam If tidak terpenuhi maka secara otomatis program akan mengeksekusi perintah yang terdapat pada kondisi else. Dengan catatan else hanya bisa digunakan satu saja pada program kondisi yang dibuat. </p><span class='content-sub-heading'>elif</span><p class='content-paragraph'>Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari kondisi if. Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi else, bedanya kondisi elif bisa banyak dan tidak hanya satu. Contoh code untuk algortima selection. </p><span class='content-code'>warga = 2000 <br>if warga < 2000 : <br>&ensp; print('Penduduk Sep') <br>elif warga >= 2000 : <br>&ensp; print('Penduduk Ramai') <br>else: <br>&ensp; print('Penduduk Sangat Ramai') <br></span><p class='content-paragraph'>Pada program yang tertulis diatas maka akan menghasilkan output Penduduk Ramai karena pada variabel warga berjumlah 2000 maka termasuk ke dalam kondisi ke dua</p>"
        },
        "algoritma-dasar-iteration":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima iteration",
          "cover": "algoritma-dasar_algoritma-dasar-iteration_cover.jpg",
          "isi-materi": `
          <p class='content-paragraph'>Algortima iteration atau perulangan adalah algortima untuk suatu atu proses eksekusi statemen-statemen dalam sebuah program secara terus-menerus sampai terdapat kondisi untuk menghentikannya. Digunakan ketika terdapat  situasi dimana Anda harus menulis banyak kode, dimana kode tersebut sangat banyak. Jika dilakukan secara manual maka Anda hanya akan membuang-buang tenaga dengan menulis beratus-ratus bahkan beribu-ribu kode. Contoh sederhana algortima ini sebagai berikut:</p>
          <div class='content-list-element'>
          <ol><li>Mulai</li><li>Nilai x = 15</li><li>Tampilkan nilai = x</li><li></li>
          </ol></div>`
        }
      }

    }




  }

};