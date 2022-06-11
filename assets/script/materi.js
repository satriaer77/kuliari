// =------- Tag for make content -------= //
// <span class='content-sub-heading'></span> ->> Digunakan untuk membuat sub-heading
// <span class='content-code'></span>  ->> Digunakan untuk membuat content yang berisi code
// <div class='content-list-element'>ini adalah daftar list<ul><li></li></ul></div> ->> Digunakan untuk membuat content yang berisi list
// <p class='content-paragraph'></p> ->> Digunakan untuk membuat content yang berisi paragraf
// <img class='content-image' src='../assets/images/materi/nama_file.jpg'> ->> Digunakan untuk membuat content yang berisi image

dataMateri = `
{
    "profil-penulis": {
      "syayid": {
        "nama": "Syayid Al Aziz",
        "foto": "syayid.jpg"
      },
      "raihan": {
        "nama": "Raihan Fadillah",
        "foto": "raihan.jpg"
      }
    },
    "mata-kuliah": {
      "struktur-data": {
        "jumlah-materi":2,
        "materi": {
          "struktur-data-stack": {
            "jumlah-baca": 0,
            "urutan":1,
            "tanggal":"04 Juni 2022",
            "penulis": "syayid",
            "judul-mata-kuliah": "Struktur Data",
            "judul": "Struktur Data Stack",
            "cover": "struktur-data_struktur-data-stack_cover.jpg",
            "isi-materi": "<span class='content-sub-heading'>    Algoritma Struktur Data  </span><span class='content-code'>int day = 4;<br>switch (day) {<br>&ensp;case 1:<br>&ensp;&ensp;System.out.println('Monday');<br>&ensp;&ensp;break;<br>&ensp;case 2:<br>&ensp;&ensp;System.out.println('Tuesday');</span> <div class='content-list-element'>ini adalah daftar list<ul><li>abjad</li><li>jeaasd</li><li>asdsadsad</li></ul></div>  <p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFO</p><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-stack_lifo.jpg'>"
          },
          "struktur-data-queue": {
            "jumlah-baca": 0,
            "urutan" : 3,
            "tanggal":"10 Juni 2022",
            "penulis": "raihan",
            "judul-mata-kuliah": "Struktur Data",
            "judul": "Algoritma Bubble Sort",
            "cover": "struktur-data_struktur-data-queue_cover.jpg",
            "isi-materi": "<span class='content-sub-heading'>    Algoritma Bubble Sort  </span><p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFOLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum faucibus tincidunt. Curabitur congue turpis sed tristique varius. Suspendisse suscipit at tellus sed venenatis. Ut nulla enim, consectetur vitae libero condimentum, facilisis vestibulum nibh. Proin nec eros non quam aliquam blandit. Fusce placerat ullamcorper erat, id consequat ligula tristique ut. In tincidunt urna quis rhoncus tristique. Cras neque magna, tincidunt id nunc id, pulvinar sodales purus. Fusce id bibendum eros, eget pellentesque dui. Cras mattis quam nisl, quis porttitor magna lobortis vel. Quisque dapibus dolor eget suscipit ornare. Sed nec auctor nunc.</p><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-stack_lifo.jpg'><p class='content-paragraph'>    Struktur data stack merupakan struktur data yang menggunakan algoritma LIFOLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum faucibus tincidunt. Curabitur congue turpis sed tristique varius. Suspendisse suscipit at tellus sed venenatis. Ut nulla enim, consectetur vitae libero condimentum, facilisis vestibulum nibh. Proin nec eros non quam aliquam blandit. Fusce placerat ullamcorper erat, id consequat ligula tristique ut. In tincidunt urna quis rhoncus tristique. Cras neque magna, tincidunt id nunc id, pulvinar sodales purus. Fusce id bibendum eros, eget pellentesque dui. Cras mattis quam nisl, quis porttitor magna lobortis vel. Quisque dapibus dolor eget suscipit ornare. Sed nec auctor nunc.</p> <span class='content-code'>int day = 4;<br>switch (day) {<br>&ensp;case 1:<br>&ensp;&ensp;System.out.println('Monday');<br>&ensp;&ensp;break;<br>&ensp;case 2:<br>&ensp;&ensp;System.out.println('Tuesday');</span><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-queue_cover.jpg'>"
          }
        }
      }
    }
  }

`;