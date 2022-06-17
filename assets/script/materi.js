// =------- Tag for make content -------= //
// <span class='content-sub-heading'></span> ->> Digunakan untuk membuat sub-heading   
// <span class='content-code'></span>  ->> Digunakan untuk membuat content yang berisi code &ensp;
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

      "jumlah-materi": 10,
      "judul-mata-kuliah": "Struktur Data",
      "materi":
      {
        "struktur-data-stack":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Stack",
          "deskripsi": "Stacks adalah satu struktur data dimana penambahan dan penghapusan data, hanya dapat dilakukan pada satu ujung yang sama, atau yang biasa dikenal dengan istilah top. Semakin data jauh berada dari posisi top, maka data tersebut diindikasikan berada di stack lebih lama dibandingkan dengan data yang berada dekat pada data di posisi top.",
          "cover": "struktur-data_struktur-data-stack_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>Definisi Stack</span><p class='content-paragraph'>Stacks adalah satu struktur data dimana penambahan dan penghapusan data, hanya dapat dilakukan pada satu ujung yang sama, atau yang biasa dikenal dengan istilah top. Semakin data jauh berada dari posisi top, maka data tersebut diindikasikan berada di stack lebih lama dibandingkan dengan data yang berada dekat pada data di posisi top. Jika terdapat data baru yang ditambahkan di stack, maka data ini pulalah yang akan dihapus ketika terdapat proses penghapusan data. Konsep ini dikenal dengan nama LIFO-Last In First Out. Konsep stack ini dapat ditemui pada permasalahan sehari-hari, misalkan tumpukan buku seperti gambar dibawah ini.<img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-stack_buku.jpg'><p class='content-paragraph'>Jika kita ingin mengambil buku pada tumpukan buku tersebut, maka buku yang dapat kita ambil adalah buku yang berada di posisi teratas. Jika ingin mengambil buku yang berada di posisi paling bawah, maka kita harus mengambil buku-buku yang berada di posisi atasnya terlebih dahulu. Begitu juga ketika terdapat penambahan buku baru, maka buku baru ini akan berada di posisi paling atas.</p></p><span class='content-sub-heading'>Operasi Pada Stack</span><p class='content-paragraph'>Terdapat operasi dasar pada Stacks, - stack (), inisialisasi stack yang kosong - push(data), penambahan data baru pada posisi top dari stack - pop(), penghapusan data yang terdapat di posisi top dari stack. Return value dari fungsi ini adalah data yang dihapus dari stack tersebut - peek(), informasi data yang terletak pada posisi top - isEmpty(), untuk memeriksa apakah stack dalam keadaan kosong - size(), informasi jumlah data yang terdapat pada stack</p><span class='content-sub-heading'>Code</span><p class='content-paragraph'>Berikut adalah fungsi-fungsi yang dibutuhkan untuk mengimplementasikan stacks.</p><span class='content-code'>def stack(): <br>&ensp;s=[] <br>&ens; preturn (s) <br>def push(s,data): <br>&ensp;s.append(data) <br>def pop(s): <br>&ensp;data=s.pop() <br>&ensp;return(data) <br>def peek(s): <br>&ensp;return(s[len(s)-1]) <br>def isEmpty(s): <br>&ensp;return (s==[]) <br>def size(): <br>&ensp;return (len(s)) <br> </span><p class='content-paragraph'>Struktur data direpresentasikan dengan lists. Posisi top dari suatu stacks berada pada posisi terakhir pada list, oleh karena itu, operasi push pada stack, menggunakan method append dari list, sehingga dengan operasi append ini, penambahan data baru terletak pada posisi akhir pada list. . Misalkan terdapat variabel dataStack yang menggunakan stacks berisikan data dataStack=[4,8,1,0], maka posisi top berada pada data 0. Sehingga ketika dilakukan push(dataStack,72), maka dataStack akan berubah menjadi dataStack=[4,8,1,72]. Sedangkan operasi pop pada list, menggunakan method pop dari list, karena method pop ini menghapus data yang terletak pada posisi akhir dari list.Berikut adalah contoh penggunaan fungsi-fungsi stacks yang telah dibuat.</p><span class='content-code'>st=stack() <br>isEmpty(st) <br>push(st,100) <br>push(st,23) <br>push(st,34) <br>pop(st) <br>push(st,56) <br>pop(st) <br>print(st) <br></span>"
        },
        "struktur-data-queue":
        {
          "jumlah-baca": 0,
          "urutan": 2,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Qeues",
          "deskripsi": "Queues atau antrian merupakan struktur data dimana penambahan data baru dan penghapusan data berada di ujung yang berbeda. Hal ini berbeda dengan stacks, dimana penambahan data baru dan penghapusan data, dilakukan pada ujung yang sama. ",
          "cover": "struktur-data_struktur-data-queue_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>Definisi Qeues</span> <p class='content=paragraph'>Queues atau antrian merupakan struktur data dimana penambahan data baru dan penghapusan data berada di ujung yang berbeda. Hal ini berbeda dengan stacks, dimana penambahan data baru dan penghapusan data, dilakukan pada ujung yang sama. Pada Queues, seperti halnya antrian, penambahan data baru dilakukan di suatu ujung atau yang dikenal dengan nama rear, dan penghapusan data dilakukan pada ujung yang dikenal dengan nama front, seperti yang terlihat pada gambar dibawah ini. </p><img class='content-image' src='../assets/images/materi/struktur-data_struktur-data-queue_antri.jpg'><p class='content=paragraph'>Queues atau antrian merupakan struktur data dimana penambahan data baru dan penghapusan data berada di ujung yang berbeda. Hal ini berbeda dengan stacks, dimana penambahan data baru dan penghapusan data, dilakukan pada ujung yang sama. Pada Queues, seperti halnya antrian, penambahan data baru dilakukan di suatu ujung atau yang dikenal dengan nama rear, dan penghapusan data dilakukan pada ujung yang dikenal dengan nama front, seperti yang terlihat</p><span class='content-sub-heading'>Operasi pada Queues</span><p class='content=paragraph'>Terdapat beberapa operasi dasar pada struktur data Que ues ini, antara lain : - queue (), inisialisasi struktur data queue kosong - enqueue (data), penambahan data baru pada queue - dequeue (), penghapusan data - isEmpty(), pengecekan apakah queue dalam keadaan kosong - size (), informasi jumlah data yang terdapat pada queue. </p><p class='content=paragraph'>Implementasi queues dapat dilakukan pada tipe data lists. Data pada indeks terakhir pada list adalah merupakan data yang terletak pada ujung front pada queues. Sehingga proses dequeue dilakukan dengan menggunakan method pop pada list. Sedangkan data pada indeks awal, atau indeks ke-0 dari list, menunjukkan data yang terletak pada posisi rear dari queues. Oleh karena itu proses enqueue dilakukan dengan method insert pada posisi 0 dari list. </p><p class='content=paragraph'>Misalkan terdapat data berbentuk list, sebagai berikut :data=[8, 3, 9, 2] </p><p class='content=paragraph'>Jika dilakukan data.insert(0,74), atau penambahan data pada posisi rear, maka data akan berubah menjadi : data=[74, 8, 3, 9, 2] Jika dilakukan data.pop(), atau penghapusan data pada posisi front, maka data akan berubah menjadi : data=[74, 8, 3, 9] </p><span class='content-sub-heading'>Code</span><span class='content-code'>def createQueue(): <br>&ensp;q=[] <br>&ensp;return (q) <br>def enqueue(q,data): <br>&ensp;q.insert(0,data) <br>&ensp;return(q) <br>def dequeue(q): <br>&ensp;data=q.pop() <br>&ensp;return(data) <br>def isEmpty(q): <br>&ensp;return (q==[]) <br>def size(q): <br>&ensp;return (len(q)) <br><br>q=createQueue() <br>enqueue(q,'matematika') <br>enqueue(q,'struktur data') <br>enqueue(q,'bahasa inggris') <br>enqueue(q,'pemrograman web') <br>print(q) <br><br>q=createQueue() <br>enqueue(q,8) <br>enqueue(q,dequeue(q)) <br>enqueue(q,9) <br>dequeue(q) <br>print(q) <br>temp=dequeue(q) <br>print(q) <br>print(temp) <br>enqueue(q,dequeue(q)) <br>print(q) <br>a=dequeue(q) <br>print(a,q)  <br>enqueue(q,'new') <br>isEmpty(q)  <br>size(q) <br></span>"
        },
        "struktur-data-deques":
        {
          "jumlah-baca": 0,
          "urutan": 3,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Deques",
          "deskripsi": "Struktur data yang ketiga adalah Deques. Jika pada stacks, penambahan data baru dan penghapusan dilakukan pada ujung yang sama, yaitu top, sedangkan pada queues, penambahan data baru dan penghapusan dilakukan pada ujung yang berbeda, yaitu rear(penambahan data) dan front(penghapusan data).",
          "cover": "struktur-data_struktur-data-deques_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>Definisi Deques</span> <p class='content-paragraph'>Struktur data yang ketiga adalah Deques. Jika pada stacks, penambahan data baru dan penghapusan dilakukan pada ujung yang sama, yaitu top, sedangkan pada queues, penambahan data baru dan penghapusan dilakukan pada ujung yang berbeda, yaitu rear(penambahan data) dan front(penghapusan data). Maka struktur data deques dapat dilakukan di kedua ujung, seperti halnya queues, hanya terdapat sedikit perbedaan. penambahan data dapat dilakukan pada kedua ujung, baik front maupun rear. Begitu juga halnya dengan penghapusan data yang dapat dilakukan pada front maupun rear</p><span class='content-sub-heading'>Operasi Deque</span><p class='content-paragraph'>Struktur data Deques ini direpresentasikan dengan List, dimana: - indeks awal list, yaitu indeks ke-0, adalah posisi front pada deques - indeks akhir list, yaitu indeks terakhir, adalah posisi rear pada deques </p><p class='content-paragraph'>Oleh karena itu, penambahan data baru pada posisi front dapat dilakukan dengan method insert() pada posisi ke-0. Sedangkan penambahan data baru pada posisi rear dapat dilakukan dengan method append, yang merupakan penambahan data baru pada list di posisi terakhir. Sedangkan penghapusan data pada posisi front dapat dilakukan dengan method pop() pada posisi ke-0, sedangkan penghapusan data pada posisi rear dilakukan dengan method pop().</p><span class='content-sub-heading'>Code</span><span class='content-code'>def createDeque(): <br>&ensp;d=[]<br>&ensp;return (d)<br>def addFront(d,data):<br>&ensp;d.insert(0,data)<br>&ensp;return(d)<br>def addRear(d,data):<br>&ensp;d.append(data)<br>&ensp;return(d)<br>def removeRear(d):<br>&ensp;data=d.pop()<br>&ensp;return(data)<br>def removeFront(d):<br>&ensp;data=d.pop(0) <br>&ensp;return(data) <br>def isEmpty(d): <br>&ensp;return (d==[]) <br>def size(d): <br>&ensp;return (len(d)) <br><br>deq=createDeque()<br>addFront(deq,'struktur')<br>addFront(deq,'data')<br><br>addRear(deq,'2018')<br>addRear(deq,'2019')<br>addRear(deq,'100')<br><br>data=removeFront(deq)<br>print(data)<br>print(deq)<br><br>data=removeRear(deq)<br>print(data)<br>print(deq)<br>size(deq) <br>isEmpty(deq)<br><br>addRear(deq,removeFront(deq))<br>print(deq)<br></span>"
        },
        "struktur-data-linkedlist":
        {
          "jumlah-baca": 0,
          "urutan": 4,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Linked List",
          "deskripsi": "Linked list merupakan kumpulan dari node-node yang terhubung satu sama lain. Untuk mengakses node-node yang terdapat pada linked list tersebut, haruslah diketahui terlebih dahulu lokasi node pertama dari suatu linked list, sehingga diperlukan pointer tambahan untuk menunjukkan keberadaan node pertama.",
          "cover": "struktur-data_struktur-data-linkedlist_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>List</span><p class='content=paragraph'>Bahasa pemrograman python telah menyediakan type data yang dinamis, yaitu List. Ukuran dari variabel yang bertipe data list dapat diatur sesuai dengan keinginan programmer selama program dijalankan, tidak harus mempunyai ukuran tetap di awal. Tipe data ini juga menyediakan method menambah data pada saat diperlukan, sehingga tipe data ini bersifat dinamis. Akan tetapi tidak semua pemrograman menyediakan type data seperti ini, oleh karena itu terdapat suatu struktur data yang dapat dibuat oleh programmer yang bersifat dinamis, yaitu Linked List</p><span class='content-sub-heading'>Node</span><p class='content-paragraph'>Data di dalam memory berada di alamat yang berbeda-beda, jika dibutuhkan agar datadata tersebut dapat terhubung satu sama lain, maka informasi tambahan yang menunjukkan alamat data berikutnya sangatlah diperlukan Oleh karena itu data berikutnya dapat diketahui dengan cari mengikuti informasi link yang terdapat pada informasi tambahan tersebut. Lokasi data pertama dari linked list haruslah diketahui secara eksplisit, sehingga dari data pertama tersebut, data kedua data ditemukan, data ketiga, dan seterusnya. Informasi yang menunjuk pada lokasi data pertama atau head of the list tersebut disebut dengan external reference. Begitu juga dengan data terakhir, harus ada informasi yang menunjukkan bahwa data tersebut adalah data terakhir di dalam linked list, tidak ada lagi data berikutnya. </p><p class='content-paragraph'>Untuk membuat struktur data linked list, terlebih dahulu dibuat node-node penyusun linked list tersebut. Node ini harus memiliki setidaknya dua informasi, yaitu informasi mengenai data atau nilai, dan informasi mengenai node berikutnya. Oleh karena itu node dibuat menjadi sebuah tipe data baru yang bertipe class, dengan dua informasi yaitu data dan next. </p><p class='content-paragraph'>Terdapat beberapa method penting pada class node ini, antara lain: - constructor, yang akan dijalankan setiap instansiasi class - getData, untuk mengetahui informasi data yang terdapat pada node tersebut - getNext, untuk mengetahui informasi node berikutnya, jika tidak ada node berikutnya maka nilai balik berupa None - setData, untuk merubah informasi data yang terdapat pada node tersebut - setNext, untuk menentukan node berikutnya yang ditunjukan oleh informasi next dari node tersebut</p><span class='content-sub-heading'>Code</span><p class='content-paragraph'>Berikut adalah pembuatan class Node yang merupakan representasi dari sebuah node. Property atau state yang terdapat pada class Node ini : 1. data : berisi nilai dari node 2. next : berisi informasi berikutnya yang ditunjuk oleh node. Proses intansiasi, property next ini diset None yang merupakan representasi Nil atau Ground, berarti tidak ada node yang ditunjuk oleh node ini</p><span class='content-code'>class Node:<br>def __init__(self, init_data): <br>&ensp;self.data = init_data <br>&ensp;self.next = None <br>def getData(self): <br>&ensp;return self.data <br>def getNext(self): <br>&ensp;return self.next <br>def setData(self, newdata): <br>&ensp;self.data = newdata <br>def setNext(self, new_next): <br>&ensp;self.next = new_next <br><br>a=Node(93) <br>b=Node(20) <br>print(a.getNext()) <br>print(b.getNext()) <br>a.setNext(b) <br>print(a.getNext())<br></span><p class='content-paragraph'> Pada code diatas, terdapat obyek a dan obyek b yang memiliki tipe data class Node. Pada saat instansiasi, property data kedua obyek ini bernilai 93 dan 20, serta property next bernilai None. Pada baris kelima, terdapat perintah a.setNext(b), yang berarti property next dari obyek a akan menunjuk ke obyek b. Sehingga ketika dilakukan perintah print(a.getNext()) akan menunjukkan ke suatu class Node.</p><span class='content-sub-heading'>Linked List Class</span><p class='content-paragraph'>Linked list merupakan kumpulan dari node-node yang terhubung satu sama lain. Untuk mengakses node-node yang terdapat pada linked list tersebut, haruslah diketahui terlebih dahulu lokasi node pertama dari suatu linked list, sehingga diperlukan pointer tambahan untuk menunjukkan keberadaan node pertama. Berikut adalah class untuk linked list, dimana pada class tersebut terdapat pointer yang menunjukkan node pertama dari suatu linked list (head). Terdapat dua buah method utama pada class LinkedList ini, antara lain: 1. constructor, __init__, yang merupakan method yang dijalankan pada saat pembuatan obyek. Karena obyek baru pertama kali dibuat, maka linked list masih kosong, sehingga pointer head masih bernilai None. 2. Method isEmpty, untuk pengecekan apakah linked list memiliki node ataukah tidak. Jika pointer head masih menunjuk pada None, maka linked list masih tidak memiliki node, sehingga return value adalah True.</p><span class='content-code'>class LinkedList:<br>&ensp;def __init__(self):<br>&ensp;&ensp;self.head = None<br>&ensp;def isEmpty(self):<br>&ensp;&ensp;return self.head==None <br><br>mylist=LinkedList()<br>print(mylist.head)<br>mylist.isEmpty()<br>print(mylist.head)<br>mylist.isEmpty()<br></span>"
        },
        "struktur-data-bubblesort":
        {
          "jumlah-baca": 0,
          "urutan": 5,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Bubble Sort",
          "deskripsi": "Algoritma pengurutan yang pertama adalah Bubble Sort. Algoritma ini dikenal sebagai algoritma pengurutan yang membutuhkan waktu paling lama, hanya saja algoritma ini adalah algoritma pengurutan yang paling sederhana. Bubble sort mengurutkan data dengan cara data dibaca mulai dari paling kiri atau mulai dari indeks ke 0 (phyton) dari suatu list data.",
          "cover": "struktur-data_struktur-data-bubblesort_cover.jpg",
          "isi-materi": " <span class='content-sub-heading'>Definisi Bubble Sort</span> <p class='content-paragraph'>Data tidak hanya sekedar diinput, tetapi data juga butuh diolah sehingga dapat diambil suatu analisa. Proses pengurutan merupakan salah satu proses yang sangat penting dalam pengolahan data. Misalkan terdapat data mahasiswa, terkadang dibutuhkan data yang urut berdasarkan nilai, penghasilan orang tua, sehingga dari data yang urut tersebut dapat diambil keputusan mengenai mahasiswa yang berhak menerima beasiswa. Secara umum, proses pengurutan data ini dilakukan dengan membandingkan antara data yang satu dengan data yang lain.</p><p class='content-paragraph'>Algoritma pengurutan yang pertama adalah Bubble Sort. Algoritma ini dikenal sebagai algoritma pengurutan yang membutuhkan waktu paling lama, hanya saja algoritma ini adalah algoritma pengurutan yang paling sederhana. </p><p class='content-paragraph'>Bubble sort mengurutkan data dengan cara sebagai berikut : 1. data dibaca mulai dari paling kiri atau mulai dari indeks ke 0 (phyton) dari suatu list data 2. Bandingkan antara dua buah data yang saling berdekatan (antara data ke i dan i+1), tukar posisi jika data ke-i lebih besar dibandingkan data ke-i+1 (pengurutan secara ascending) 3. pindah satu posisi 4. lakukan perbandingan seperti langkah ke-2 dan pindah satu posisi kembali seperti langkah ke-3. Lakukan terus menerus sampai indeks data terakhir. 5. Setelah langkah ke-4 dilakukan, maka data yang berada di posisi paling kanan (indeks ke-N) adalah data terbesar . 6. Ulangi lagi langkah 1-4 dimulai dari indeks data ke 0 sampai dengan indeks ke N-1, N-2, ..., 0 </p><p class='content-paragraph'>Setiap iterasi berakhir, data yang terletak di posisi paling kanan adalah data yang paling besar, oleh karena itu algoritma ini disebut dengan 'bubble' karena data terbesar disetiap iterasi berakhir bergerak keatas seperti halnya gelembung. </p><span class='content-sub-heading'>Code</span><p class='content-paragraph'>Berikut implementasi algoritma bubble sort : </p><span class='content-code'>def bubbleSort(listData): <br>&ensp;print('Data yang akan diurutkan : ', listData) <br>&ensp;count=0 <br>&ensp;for outIter in range(len(listData)-1,-1,-1): <br>&ensp;&ensp;count=count+1 <br>&ensp;&ensp;print ('Iterasi ke-', count,':') <br>&ensp;&ensp;for i in range(outIter): <br>&ensp;&ensp;&ensp;if listData[i]>listData[i+1]: <br>&ensp;&ensp;&ensp;listData[i],listData[i+1]=listData[i+1],listData[i] <br>&ensp;&ensp;&ensp;print(listData) <br>&ensp;&ensp;print('Data urut-',listData) <br><br>a=[12,0,5,1,11,20,4,2]<br>bubbleSort(a)<br><br>b=[12,11,5,1,0]<br>print('--')<br>bubbleSort(b)<br><br>b=[11,12,1,5,0]<br>bubbleSort(b)<br>b=[10,2,5,8,1,20,2,2,4]<br>bubbleSort(b)<br></span>"
        },
        "struktur-data-selectionsort":
        {
          "jumlah-baca": 0,
          "urutan": 6,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Selection Sort",
          "deskripsi": "Algoritma selection sort memiliki waktu komputasi yang lebih cepat dibandingkan dengan algoritma bubble sort. Hal ini dikarenakan terjadi reduksi waktu pada saat proses pertukaran data. Pada algoritma selection sort, akan dicari data yang memenuhi syarat terlebih dahulu, kemudian data yang terpilih ini ini akan diletakkan pada indeks data yang tepat. ",
          "cover": "struktur-data_struktur-data-selectionsort_cover.jpg",
          "isi-materi": " <span class='content-sub-heading'>Definisi Selection Sort</span> <p class='contennt-paragraph'>Algoritma selection sort memiliki waktu komputasi yang lebih cepat dibandingkan dengan algoritma bubble sort. Hal ini dikarenakan terjadi reduksi waktu pada saat proses pertukaran data. Jika algoritma bubble sort, pada setiap iterasi,setiap dua data yang berdekatan akan dibandingkan, dan akan dilakukan pertukaran data jika syarat memenuhi. Maka pada algoritma selection sort tidak akan melakukan dua proses ini (perbandingan dan pertukaran) pada satu waktu, akan tetapi, pada algoritma selection sort, akan dicari data yang memenuhi syarat terlebih dahulu (perbandingan data), kemudian data yang terpilih ini ini akan diletakkan pada indeks data yang tepat. Oleh karena itu algoritma ini dinamakan selection (pemilihan data). </p><p class='contennt-paragraph'>Berikut tahapan algoritma selection sort (ascending order): 1. Algoritma ini dimulai dari indeks awal sampai dengan indeks akhir data 2. Cari data dengan nilai paling minimal (dari indeks awal sampai dengan indeks akhir) melalui proses perbandingan 3. Letakkan data minimal ini di indeks awal 4. Ulangi lagi proses pencarian data paling minimal (dari indeks awal+1 sampai dengan indeks akhir, karena indeks awal sudah terisi data yang tepat). 5. Letakkan data ini pada indeks awal+1 6. Ulangi lagi proses pencarian data paling minimal (dari indeks awal+2 sampai dengan akhir) dan letakkan data ini pada indeks awal+2, dst</p><span class='content-sub-heading'>Code</span><p class='content-paragraph'>Berikut adalah code untuk algoritma selection sort, yang terdiri dari dua buah iterasi. Iterasi pertama digunakan untuk menempatkan data atau menukar data, sehingga data dengan nilai minimal, akan menempati indeks-indeks awal. Sedangkan iterasi kedua (iterasi dalam), digunakan untuk mencari nilai minimal.</p><span class='content-code'># Iterasi pertama digunakan untuk menempatkan data atau menukar data, sehingga data dengan nilai minimal, <br> # akan menempati indeks-indeks awal. Sedangkan iterasi kedua (iterasi dalam), digunakan untuk mencari nilai minimal. <br>def selectionSort(listData): <br>&ensp;print('Algoritma Selection Sort konvensional') <br>&ensp;print('Data Awal=',listData) <br>&ensp;for outIter in range(len(listData)-1): <br>&ensp;&ensp;minIndex=outIter <br>&ensp;&ensp;for i in range(outIter+1,len(listData)): <br>&ensp;&ensp;&ensp;if listData[i]<listData[minIndex]: <br>&ensp;&ensp;&ensp;minIndex=i <br>&ensp;&ensp;temp=listData[outIter]<br>&ensp;&ensp;listData[outIter]=listData[minIndex]<br>&ensp;&ensp;listData[minIndex]=temp<br>&ensp;&ensp;print('Iterasi ke-',outIter+1,':',listData)<br>&ensp;print('Data Urut=',listData)<br><br>a=[10,2,5,8,1,20,7,12,4]<br>selectionSort(a) <br></span>"
        },
        "struktur-data-insertionsort":
        {
          "jumlah-baca": 0,
          "urutan": 7,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Insertion Sort",
          "deskripsi": "Pada algoritma insertion sort, diasumsikan bahwa sebagian data sudah dalam keadaan terurut, sehingga data berikutnya akan dibandingkan dengan data yang sudah dalam keadaan terurut ini, dan disisipkan pada bagian data yang sudah terurut tersebut. Dengan konsep seperti ini, posisi sebelah kiri dari list data, selalu dalam keadaan terurut. ",
          "cover": "struktur-data_struktur-data-insertionsort_cover.jpg",
          "isi-materi": `<span class='content-sub-heading'>Definisi Insertion Sort</span><p class='content-paragraph'>Pada algoritma insertion sort, diasumsikan bahwa sebagian data sudah dalam keadaan terurut (pada posisi sebelah kiri dari data list), sehingga data berikutnya akan dibandingkan dengan data yang sudah dalam keadaan terurut ini, dan disisipkan (insertion) pada bagian data yang sudah terurut tersebut. Dengan konsep seperti ini, posisi sebelah kiri dari list data (sebelum ada data baru yang akan disisipkan), selalu dalam keadaan terurut. </p><p class='content-paragraph'>Berikut algoritma Insertion Sort : 1. Asumsi bahwa data ke-1 sampai dengan (n/2) sudah dalam keadaan terurut 2. Sisipkan data ke (n/2)+1 atau key ke dalam bagian data yang sudah dalam keadaan terurut, dengan cara: - lakukan perbandingan data antara key dengan data pada indeks sebelumnya, jika key bernilai lebih kecil, maka lakukan pergeseran posisi data. - lakukan terus perbandingan data key ini dengan data pada indeks sebelumnya, sampai data key tidak lebih kecil lagi atau atau sampai dengan data pada posisi pertama. </p><span class='content-sub-heading'>Code</span><p class='content-paragraph'>Berikut adalah code untuk algortima insertion sort : </p><span class='content-code'>def insertionSort(listData):&ensp;for outIter in range(1,len(listData)): <br>&ensp;&ensp;print(listData) <br>&ensp;&ensp;key=listData[outIter] <br>&ensp;&ensp;ind=outIter&ensp;&ensp;while (ind>0 and listData[ind-1]>key): <br>&ensp;&ensp;&ensp;listData[ind]=listData[ind-1] <br>&ensp;&ensp;&ensp;ind=ind-1 <br>&ensp;&ensp;print('inner=',listData) <br>&ensp;listData[ind]=key <br>print('sortedData=',listData) <br><br>b=[10,5,8,1,20,4]<br>insertionSort(b) <br><br>b=[10,5,8,1,20,4]<br>for i in range(1,len(b)):<br>&ensp;print(b)<br>&ensp;ked=b[i]<br>&ensp;ind=i<br>&ensp;while ind>0 and b[ind-1]>ked:<br>&ensp;&ensp;b[ind]=b[ind-1]<br>&ensp;&ensp;ind=ind-1<br>&ensp;b[ind]=ked<br>print('ini ',b)<br></span>`
        },
        "struktur-data-rekrusif":
        {
          "jumlah-baca": 0,
          "urutan": 8,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Rekrusif",
          "deskripsi": "Rekursif merupakan suatu teknik pemrograman yang memecah permasalahan menjadi permasalahan dengan ukuran yang lebih kecil dan lebih kecil lagi, sehingga permasalahan dengan ukuran kecil tersebut dapat dengan mudah dipecahkan. Teknik ini dapat dilakukan dengan cara memanggil fungsi itu sendiri. ",
          "cover": "struktur-data_struktur-data-rekrusif_cover.jpg",
          "isi-materi": `<p class='content-paragraph'>Beberapa permasalahan tertentu terkadang membutuhkan penyelesaian dengan cara perulangan, misalkan permasalahan pengurutan, perhitungan deret, dan sebagainya. Terdapat dua metode untuk menyelesaikan permasalahan tersebut, yaitu : </p><div class='content-list-element'><ol><li>Iteratif</li><li>Rekrusif</li><li>Implementasi Rekrusif</li><li>Visualisasi Fraktal</li></ol></div><span class='content-sub-heading'>Iteratif</span><p class='content-paragraph'>Iteratif merupakan penyelesaian permasalahan dengan perulangan, menggunakan syntax for atau while (pada Python). Misalkan permasalahan perhitungan faktorial suatu bilangan, yaitu : 5! = 5 x 4 x 2 x 1, atau n! + n x (n-1)x(n-2)x(n-3)x...x1,maka perhitungan faktorial suatu bilangan dapat dilakukan dengan cara iterasi, yaitu mengmenghitung operasi perkalian mulai dari bilangan tersebut sampai dengan satu.</p><span class='content-code'>def factorialIteratif(bil): <br>&ensp;if bil <= 1: <br>&ensp;&ensp;return 1 <br>&ensp;else: <br>&ensp;&ensp;temp=bil <br>&ensp;&ensp;hasil=1 <br>&ensp;while temp>1: <br>&ensp;&ensp;hasil=hasil*temp <br>&ensp;&ensp;temp=temp-1 <br>&ensp;return hasil <br>print(factorialIteratif(4)) <br></span><p class='content-paragraph'>Suatu permasalahan akan lebih mudah dipecahkan jika permasalahan tersebut berukuran kecil. Misalkan pengurutan data akan lebih mudah dilakukan jika data yang diurutkan hanya terdiri dari dua buah data saja, sehingga pengurutan dapat dilakukan dengan membandingkan dua data tersebut saja. Rekursif merupakan suatu teknik pemrograman yang memecah permasalahan menjadi permasalahan dengan ukuran yang lebih kecil dan lebih kecil lagi, sehingga permasalahan dengan ukuran kecil tersebut dapat dengan mudah dipecahkan. Teknik ini dapat dilakukan dengan cara memanggil fungsi itu sendiri. Jika pada contoh sebelumnya, untuk menghitung suatu bilangan dapat dilakukan dengan menggunakan cara iterasi, maka berikut ini adalah penyelesaian perhitungan faktorial dengan cara rekursif. Berikut adalah code dari permasalahan diatas </p><span class='content-code'>def factorialRekursif(bil): <br>&ensp;if bil<=1: <br>&ensp;&ensp;return 1 <br>&ensp;else: <br>&ensp;&ensp;return(bil*factorialRekursif(bil-1)) <br><br>data=factorialRekursif(4) <br>print(data)</span><p class='content-paragraph'>Dari fungsi tersebut dapat dilihat bahwa teknik pemrograman rekursif ini melibatkan pemanggilan fungsinya itu sendiri dengan argument atau parameter yang berukuran lebih kecil. Berikut beberapa aturan dalam teknik pemrograman rekursif: </p><div class='content-list-element'><ul><li>Fungsi rekursif harus memiliki base case, base case inilah yang berfungsi untuk menghentikan pemanggilan terus menerus </li><li>Fungsi rekursif fungsi rekursif harus memiliki sintaks yang dapat merubah state dari permasalahan, sehingga semakin lama solusi permasalahan menuju base case yang sudah dibuat </li><li>Fungsi rekursif harus memanggil dirinya sendiri</li></ul></div>`
        },
        "struktur-data-searching":
        {
          "jumlah-baca": 0,
          "urutan": 9,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "Searching",
          "deskripsi": "teknik pencarian data dengan cara membandingkan data yang dicari dengan seluruh data yang terdapat pada kumpulan data secara satu persatu, mulai dari data pertama sampai dengan data terakhir",
          "cover": "struktur-data_struktur-data-searching_cover.jpg",
          "isi-materi": `
            <span class='content-sub-heading'>Sequential Search</span>
            <p class='content-paragraph'>Pencarian data terkadang sangat diperlukan pada proses komputasi, sistem informasi, dan lain-lain. Dengan pencarian data ini maka data yang diperlukan dapat diketahui posisinya terhadap kumpulan data yang lain, sehingga data ini dapat digunakan untuk proses berikutnya. Misalkan pada data mahasiswa, diperlukan data lengkap tentang mahasiswa dengan Nomor induk XXXXXX, maka diperlukan proses pencarian data tersebut dengan key berupa nomor induk mahasiswa. Data yang didapat ini dapat digunakan untuk keperluan yang lain, misalkan keperluan administratif. Pada umumnya, proses pencarian data ini menghasilkan posisi data yang dicari terhadap keseluruhan data, akan tetapi untuk pencarian data yang sederhana, nilai True atau False saja yang dihasilkan, nilai ini menandakan apakah data berada di sekumpulan data ataukah tidak. Proses pencarian sederhana ini sudah disediakan oleh python dengan menggunakan syntax in. </p>
            <p class='content-paragraph'>Sequential Search merupakan teknik pencarian data dengan cara membandingkan data yang dicari dengan seluruh data yang terdapat pada kumpulan data secara satu persatu, mulai dari data pertama sampai dengan data terakhir. <br> Pada unordered list proses pencarian data seperti code berikut: </p>
            <span class='content-code'>
            def seqSearch(listData, data): <br>
            &ensp;ind = 0 <br>
            &ensp;found = False <br>
            &ensp;while ind < len(listData) and not found: <br>
            &ensp;&ensp;if listData[ind] == data: <br>
            &ensp;&ensp;found = True <br>
            &ensp;else: <br>
            &ensp;&ensp;ind = ind+1 <br>
            &ensp;return found <br><br>
            a=[12,5,9,8,1,10,26] <br>
            seqSearch(a,1) <br>
            </span>
            <p class='content-paragraph'>Pada ordered list sequential search, data sudah dalam keadaan terurut, hal ini tentunya dapat mengurangi waktu komputasi pencarian. </p>
            <p class='content-paragraph'>Misalkan data yang dicari adalah 10, pada index kedua dari data tersebut adalah 15, oleh karena itu dapat disimpulkan bahwa data 10 tidak terdapat pada list. karena indeks kedua sampai indeks terakhir memiliki nilai lebih besar dari 15. Sehingga data yang sudah dalam keadaan terurut dapat mempercepat waktu komputasi. Berikut implementasi algoritma sequential search pada ordered list</p>
            <span class='content-code'>
            def orderedSeqSearch(listData, data): <br>
            &ensp;ind = 0 <br>
            &ensp;found = False <br>
            &ensp;stop = False <br>
            &ensp;position=[] <br>
            &ensp;while ind < len(listData) and not found and not stop: <br>
            &ensp;&ensp;if listData[ind] == data: <br>
            &ensp;&ensp;&ensp;found = True <br>
            &ensp;&ensp;&ensp;position.append(ind) <br>
            &ensp;&ensp;else: <br>
            &ensp;&ensp;&ensp;if listData[ind] > data: <br>
            &ensp;&ensp;&ensp;&ensp;stop = True <br>
            &ensp;&ensp;&ensp;else: <br>
            &ensp;&ensp;&ensp;&ensp;ind = ind+1 <br>
            &ensp;if found:<br>
            &ensp;&ensp;return ind<br>
            &ensp;else:<br>
            &ensp;&ensp;return ('Data tidak ada')<br><br>
            a=[1,1,5,5,5,8,9,10,12,26] <br>
            ind=orderedSeqSearch(a,5) <br>
            print(ind) <br>
            </span>
            <span class='content-sub-heading'>Binary Search</span>
            <p class='content-paragraph'>Pencarian dengan algoritma sequential search akan menemukan data dengan cepat jika data yang dicari terletak di indeks pertama dari suatu list data. Akan tetapi jika data yang dicari berada di posisi terakhir dari suatu list atau posisi lain, maka algoritma sequential search ini akan membutuhkan waktu yang lebih lama, karena algoritma ini akan mencari satu persatu, dimulai dari indeks pertama sampai dengan indeks terakhir. </p>
            <p class='content-paragraph'>Pada algoritma binary search pencarian tidak dilakukan satu persatu, melainkan memanfaatkan kelebihan pencarian di data yang sudah terurut. Pada binary search, pencarian dilakukan pertama kali di indeks list yang berada ditengah. Jika data yang dicari sama dengan data pada indeks tersebut, maka pencarian berakhir. Akan tetapi jika data yang dicari lebih besar dari data yang berada di indeks tengah tersebuh, maka dilakukan pencarian lagi. Hanya saja pencarian tidak dilakukan pada seluruh data, hanya data yang berada indeks-indeks setelah indeks tengah tadi, karena data sebelum indeks tengah, pasti lebih kecil nilainya, sehingga tidak perlu dilakukan pencarian lagi. Proses ini dilakukan secara terus menerus sampai data ketemu atau tidak ada lagi data yang dapat dicari di dalam list. Oleh karena itu, binary search tidak perlu mencari di semua data pada list, sehingga waktu komputasi yang dibutuhkan lebih cepat dibandingkan dengan pencarian sequential search. Berikut adalah code dari algortima Binary Search : </p>
            <span class='content-code'>
            def binarySearch(listData, data): <br>
            &ensp;first = 0 <br>
            &ensp;last = len(listData) - 1 <br>
            &ensp;found = False <br>
            &ensp;while first <= last and not found: <br>
            &ensp;&ensp;midpoint = (first + last) // 2 <br>
            &ensp;&ensp;if listData[midpoint] == data: <br>
            &ensp;&ensp;&ensp;found = True <br>
            &ensp;&ensp;else: <br>
            &ensp;&ensp;&ensp;if data < listData[midpoint]: <br>
            &ensp;&ensp;&ensp;last = midpoint - 1 <br>
            &ensp;&ensp;else: <br>
            &ensp;&ensp;&ensp;first = midpoint + 1 <br>
            &ensp;&ensp;return found <br><br>
            a=[4,6,10,34,56,78,99] <br>
            print(binarySearch(a,34)) <br>
            </span>
            `
        },
        "struktur-data-hashing":
        {
          "jumlah-baca": 0,
          "urutan": 10,
          "tanggal": "10 Juni 2022",
          "penulis": "raihan",
          "judul-mata-kuliah": "Struktur Data",
          "judul": "hashing",
          "deskripsi": "Hashing adalah Pencarian akan lebih cepat lagi jika semua data pada list terletak tepat berada ditempatnya masing-masing, sehingga pencarian dilakukan hanya dengan satu kali proses perbandingan saja.",
          "cover": "struktur-data_struktur-data-hashing_cover.jpg",
          "isi-materi": `
            <span class='content-sub-heading'>Searching</span>
            <p class='content-paragraph'>Sequential Search mencari data dengan cara membandingkan data yang dicari dengan setiap data yang terdapat pada list satu persatu dari indeks awal sampai dengan indeks terakhir. Sedangkan pada binary search, list data dibagi menjadi dua buah grup, dan pencarian akan dilakukan dengan cara membandingkan data yang dicari dengan data yang terdapat pada indeks tengah, jika data yang dicari lebih besar terhadap data yang terdapat pada indeks tengah, maka pencarian berikutnya hanya dilakukan pada grup terakhir saja. Hal ini dilakukan terus menerus (pembagian list menjadi dua buah grup, pembandingan data yang dicari dengan nilai tengah), sampai data diketemukan, atau data tidak diketemukan. Oleh karena itu waktu komputasi yang dibutuhkan untuk binary search lebih sedikit dibandingkan dengan sequential search, karena pencarian tidak dilakukan pada setiap data, tapi hanya grup yang memenuhi syarat saja.</p>
            <span class='content-sub-heading'>Hashing</span>
            <p class='content-paragraph'>Pencarian akan lebih cepat lagi jika semua data pada list terletak tepat berada ditempatnya masing-masing, sehingga pencarian dilakukan hanya dengan satu kali proses perbandingan saja. Algoritma ini dikenal dengan nama Hashing. Di dalam algoritma hashing ini terdapat beberapa istilah dasar sebagai berikut: - Hash Table, yaitu sebuah tempat penyimpanan data, yang dibuat sedemikian rupa, sehingga dapat memudahkan pencarian. Tipe data list di python dapat digunakan untuk merepresentasikan hash table - slot, yaitu posisi (indeks) yang terdapat pada hash table sebagai tempat penyimpanan setiap data. Karena slot berfungsi seperti halnya indeks, maka nilai slot adalah nilai integer mulai dari nol sampai dengan ukurang dari hash table, misalkan slot 0, slot 1, slot 2, .... , slot n</p>
            <span class='content-sub-heading'>Fungsi Hash</span>
            <p class='content-paragraph'>Hash function ini memegang peranan penting dalam algoritma hashing, dengan hash function ini, data didalam list disusun berdasarkan nilai hash, dan pencarian data dilakukan berdasarkan nilai hash dari hash function ini. Hash function memiliki parameter nilai data (baik data yang akan disusun didalam list ataukah data yang akan dicari), dan mengembalikan nilai integer (nilai hash) yang merupakan representasi dari nomor slot. Contoh hash function yang paling sederhana adalah remainder function. Pada fungsi ini, parameter adalah nilai data, dan nilai balik berupa modulus dari data tersebut dengan sebuah angka (misal ukuran dari tabel). Fungsi ini hanya menghitung modulus dari suatu data, contoh, terdapat data dengan nilai 54, maka nilai hash = 54 % 11, yaitu 4. </p>
            <span class='content-sub-heading'>Code</span>
            <p class='content-paragraph'>Berikut adalah fungsi-fungsi yang diperlukan untuk algoritma hashing ini, antara lain : - hash function (gunakan remainder function, yaitu data dimodulus dengan 11), nilai balik merupakan nilai hash - createHashTable, untuk membuat hash table, dengan inisialisasi semua slot berisi ’none’ - putData, yaitu menyusun data ke dalam hash table, berdasarkan nilai hash yang dihasilkan - searchHash, argumen merupakan data yang dicari, dan nilai balik berupa True or False, yaitu apakah data ditemukan di dalam hash table</p>
            <span class='content-code'>
            def remainderFunction (data,num): <br>
            &ensp;return (data%num) <br>
            def createHashTable(num): <br>
            &ensp;temp=[] <br>
            &ensp;for i in range(num): <br>
            &ensp;&ensp;temp.append('none') <br>
            &ensp;return(temp) <br>
            def putData(data,table): <br>
            &ensp;for i in range(len(data)): <br>
            &ensp;&ensp;ind=remainderFunction(data[i],len(table)) <br>
            &ensp;&ensp;table[ind]=data[i]<br>
            &ensp;return(table)<br>
            def searchHash(data,table):<br>
            &ensp;hashVal=remainderFunction(data,len(table))<br>
            &ensp;if data==table[hashVal]:<br>
            &ensp;&ensp;return True<br>
            &ensp;else:<br>
            &ensp;&enspreturn False<br><br>
            a=[54, 26, 93, 17, 77, 31]
            hashTable=createHashTable(11)
            print(hashTable) <br><br>
            hashTable=putData(a,hashTable)
            print(hashTable) <br>
            searchHash(93,hashTable)
            </span>
            `
        }
      }
    },


    "algoritma-dasar":
    {

      "jumlah-materi": 7,
      "judul-mata-kuliah": "Algoritma Dasar",
      "materi":
      {
        "algoritma-dasar-tipedata":
        {
          "jumlah-baca": 0,
          "urutan": 1,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Tipe Data & Varriabel",
          "deskripsi": "Pada python terdapat beberapa macam tipe data yang dapat kita gunakan, namun dalam pembahasan kali ini akan menjelaskan tentang tipe data dasar",
          "cover": "algoritma-dasar_algoritma-dasar-tipedata_cover.jpg",
          "isi-materi": "<span class='content-sub-heading'>Tipe Data</span><p class='content-paragraph'>Pada python terdapat beberapa macam tipe data yang dapat kita gunakan, namun dalam pembahasan kali ini akan menjelaskan tentang tipe data dasar yang terdapat pada python yaitu string, integer, float, , boolean, list, tuple, dan dictionary. Tentunya tipe data ini akan sangat penting dan digunakan pada beberapa kode yang ini kalian buat. </p><p class='content-paragraph'>String : tipe data untuk menyimpan data berupa karakter, kata, atau kalimat. Penulisannya diapit dengan tanda kutip. Contoh : ' ini adalah tipe data string '</p><p class='content-paragraph'>Integer : tipe data untuk menyimpan data berupa bilangan bulat. Penulisannya berupa angka tanpa tanda kutip. Contoh : 100</p><p class='content-paragraph'>Float : tipe data untuk menyimpan data berupa bilangan pecahan desimal. Penulisannya berupa angka tanpa tanda kutip. Contoh : 1.2 atau 4.6</p><p class='content-paragraph'>Boolean : tipe yang menyimpan dua nilai yaitu true dan false. </p><p class='content-paragraph'>List : tipe data untuk menyimpan kumpulan data bahkan dapat menampung berbagai macam tipe data termasuk list itu sendiri. List memiliki index, dapat diubah, ditambah, ataupun dihapus. List membolehkan adanya duplikat data. Penulisannya diapit dengan tanda kurung siku [] dan menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh ['aku', 1, 10.9]</p><p class='content-paragraph'>Tuple : mirip seperti list, namun bersifat immutable (tidak dapat diubah). Tuple membolehkan adanya duplikat data. Tuple ditulis dalam tanda kurung () dan menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh : ('tuple', 5 ,'contoh', 10.5)</p><p class='content-paragraph'>Dictionary : tipe data ini menyimpan kumpulan data yang berpasangan (memiliki kunci dan nilai) namun tidak memiliki index. Dictionary dapat diubah dan terurut. Dictionary tidak membolehkan dua atau lebih data yang memiliki key sama. Jika ada duplikasi seperti demikian yang terbaca adalah nilai terakhir yang diberikan. Penulisan dictionary menggunakan kurung kurawal {}, antara key dan value dipisahkan tanda titik dua, serta menggunakan koma sebagai pemisah satu data dengan data lainnya. Contoh: {'judul': 'belajar alpro', 'semangat belajar':200,'progres belajar': 50.3}</p><span class='content-sub-heading'>Variabel</span><p class='content-paragraph'>Variabel adalah lokasi memori yang dicadangkan untuk menyimpan nilai-nilai. Ini berarti bahwa ketika Anda membuat sebuah variabel Anda memesan beberapa ruang di memori. Variabel menyimpan data yang dilakukan selama program dieksekusi, yang nantinya isi dari variabel tersebut dapat diubah oleh operasi - operasi tertentu pada program yang menggunakan variabel</p><p class='content-paragraph'>Variabel dapat menyimpan berbagai macam tipe data. Di dalam pemrograman Python, variabel mempunyai sifat yang dinamis, artinya variabel Python tidak perlu didekralasikan tipe data tertentu dan variabel Python dapat diubah saat program dijalankan. Untuk membuat variabel hanya perlu menulis nama variabel lalu isi dalam variabel tersebut. Contoh a = 5. </p>"
        },

        "algoritma-dasar-operator":
        {
          "jumlah-baca": 0,
          "urutan": 2,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Operator",
          "deskripsi": "Operator adalah konstruksi yang dapat memanipulasi nilai dari operan, jadi pada materi kali ini akan membahas tentang operator matematika yang akan diimplementasikan",
          "cover": "algoritma-dasar_algoritma-dasar-operator_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Operator adalah konstruksi yang dapat memanipulasi nilai dari operan, jadi pada materi kali ini akan membahas tentang operator matematika yang akan diimplementasikan atau digunakan dalam bahasa pemograman python.</p><div class='content-list-element'><ol><li>Penjumlahan (+)  Menjumlahkan nilai dari masing-masing operan atau bilangan. Contoh 2+3 = 5.</li><li>Pengurangan (-) Mengurangi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 3-5 = -2.</li><li>Perkalian (*) Mengalikan operan atau bilangan. Contoh 4*10 = 40</li><li>Pembagian (/) Membagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 5/2 = 1,5.</li><li>Sisa bagi (%) Mendapatkan sisa bagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 10%2 = 0.</li><li>Pangkat (**) (%) Memangkatkan sisa bagi nilai operan di sebelah kiri mengunakan operan sebelah kanan. Contoh 5**2 = 25</li><li>Pembagian Bulat (//) Sama seperti pembagian hanya saja angka dibelakang koma dihilangkan. Contoh 10//3 = 3. </li></ol></div>"
        },
        "algoritma-dasar-sequence":
        {
          "jumlah-baca": 0,
          "urutan": 3,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima Sequence",
          "deskripsi": "Algoritma sequence adalah jenis algoritma yang paling sederhana, dimana pada algoritma ini berjalan sesuai dengan urutan yaitu dari awal hingga akhir",
          "cover": "algoritma-dasar_algoritma-dasar-sequence_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Algoritma sequence adalah jenis algoritma yang paling sederhana, dimana pada algoritma ini berjalan sesuai dengan urutan yaitu dari awal hingga akhir. Jadi dalam algoritma ini harus ditulis secara  berurutan ketika menerapkannya pada code di bahasa pemograman. Pada bentuk eksekusinya algoritma ini akan menjalankan perintah secara berurutan sesuai dengan intruksi yang dijalankan. Sequence algoritma terdiri dari satu intruksi atau lebih yang berarti bahwa tiap intruksi dikerjakan satu persatu, dalam masing-masing intruksi hanya dikerjakan sekali dan tidak ada perulangan, urutan intruksi dilakukan sama dan sesuai dengan intruksi yang dibuat, Intruksi yang terkahir adalah akhir dari algoritma. Contoh dari algortima sequence yaitu program penghitungan persegi panjang. Algoritmanya seperti berikut: </p><div class='content-list-element'><ol><li>Masukkan panjang</li><li>Masukkan Lebar</li><li>Hitung Luas persegi panjang, dengan panjang x luas</li><li>Cetak luas persegi panjang</li></ol></div><span class='content-code'>p = float(input('Masukkan panjang : ')) <br>l = float(input('Masukkan lebar   : ')) <br>persegi = p*l <br>print('Luas lingkaran adalah : '+ str(persegi)) <br></span><p class='content-paragraph'>Tentunya pada algortima contoh code pada studi kasus diatas akan menjalankan program dari awal hingga akhir secara terurut, yaitu pada perintah pertama melakukan input data berupa nilai float atau angka desimal begitu juga pada perintah kedua, lalu pada perintah  selanjutnya variabel persegi memerintahkan untuk melakukan perkalian pada variabel p dengan  l dan diperoleh hasil dengan dicetak menggunakan perintah print. </p>"
        },

        "algoritma-dasar-selection":
        {
          "jumlah-baca": 0,
          "urutan": 4,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima Selection",
          "deskripsi": "lgoritma Branches adalah algortima yang berjalan sesuai dengan kondisi atau perintah yang terdapat pada percabangan tersebut.",
          "cover": "algoritma-dasar_algoritma-dasar-selection_cover.jpg",
          "isi-materi": "<p class='content-paragraph'> Algoritma Branches adalah algortima yang berjalan sesuai dengan kondisi atau perintah yang terdapat pada percabangan tersebut. Jadi dalam percabangan ini akan menyeleksi apakah intruksi selanjutnya akan dikerjakan pada kondisi yang pertama atau kondisi yang selanjutnya. Pilihan inilah yang disebut dengan braches atau selection. Pada branch condition ini terdapat kondisi True atau False. Jika memenuhi kondisi True maka syntax pada percabangan True yang akan diekseskusi, begitu juga sebaliknya. Contoh algoritma ini sebagai berikut:</p><div class='content-list-element'><ol><li>Masukkan nilai a dan b</li><li>Jika nilai a lebih besar dari b, maka cetak a</li><li>Jika nilai b lebih besar dari a, maka cetak b</li><li>Tampilkan hasil nilai terbesar</li></ol></div><p class='content-paragraph'>Jadi seperti pada algortima diatas diperlukan sebuah kondisi untuk intruksi tersebut bisa berjalan pada kondisi pertama, lalu jika tidak terpenuhi maka akan dicek hingga kondisi terakhir dari sebuah intruksi. Maka dalam hal ini diperlukan braches atau selection. </p><span class='content-sub-heading'>if</span><p class='content-paragraph'>Digunakan untuk kondisi yang menentukan tindakan apa yang dilakukan ketika program yang berjalan sesuai dengan intruksi tersebut. Untuk memenuhi kondisi tersebut program harus berjalan dengan memiliki nilai benar, dan jika program bernilai salah maka intruksi pada kondisi tersebut tidak akan dieksekusi. </p><span class='content-sub-heading'>if else</span><p class='content-paragraph'>Digunakan utuk seleski ketika dalam nilai if bernilai salah, jadi dalam penggunaanya kita harus mendeklarasi kondisi pada perintah if, lalu jika dalam If tidak terpenuhi maka secara otomatis program akan mengeksekusi perintah yang terdapat pada kondisi else. Dengan catatan else hanya bisa digunakan satu saja pada program kondisi yang dibuat. </p><span class='content-sub-heading'>elif</span><p class='content-paragraph'>Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari kondisi if. Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi else, bedanya kondisi elif bisa banyak dan tidak hanya satu. Contoh code untuk algortima selection. </p><span class='content-code'>warga = 2000 <br>if warga < 2000 : <br>&ensp; print('Penduduk Sep') <br>elif warga >= 2000 : <br>&ensp; print('Penduduk Ramai') <br>else: <br>&ensp; print('Penduduk Sangat Ramai') <br></span><p class='content-paragraph'>Pada program yang tertulis diatas maka akan menghasilkan output Penduduk Ramai karena pada variabel warga berjumlah 2000 maka termasuk ke dalam kondisi ke dua</p>"
        },

        "algoritma-dasar-iteration":
        {
          "jumlah-baca": 0,
          "urutan": 5,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima iteration",
          "deskripsi": "Algortima iteration atau perulangan adalah algortima untuk suatu atu proses eksekusi statemen-statemen dalam sebuah program secara terus-menerus sampai terdapat kondisi untuk menghentikannya.",
          "cover": "algoritma-dasar_algoritma-dasar-iteration_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Algortima iteration atau perulangan adalah algortima untuk suatu atu proses eksekusi statemen-statemen dalam sebuah program secara terus-menerus sampai terdapat kondisi untuk menghentikannya. Digunakan ketika terdapat  situasi dimana Anda harus menulis banyak kode, dimana kode tersebut sangat banyak. Jika dilakukan secara manual maka Anda hanya akan membuang-buang tenaga dengan menulis beratus-ratus bahkan beribu-ribu kode. Contoh sederhana algortima ini sebagai berikut:</p><div class='content-list-element'><ol><li>Mulai</li><li>Nilai x = 15</li><li>Tampilkan nilai = x</li><li>Nilai x = x -1</li><li>Jika nilai x > 10 maka kembali ke langkah 3</li><li>Selesai</li></ol></div><p class='content-paragraph'>Maka output yang akan dihasilkan yakni, nilai = 15, nilai = 14, nilai = 13, nilai = 12, nilai = 11 ketika membuat output seperti contoh diatas bisa dilakukkan dengan cara manual tetapi akan lebih efisien dibuat menggunakan algoritma perulangan. </p><span class='content-sub-heading'>For</span><p class='content-paragraph'>for adalah perulangan yang digunakan untuk melakukan sesuai dengan jumlah perulangan yang diminta. Dalam for terdapat beberapa statetment. for i in range (angka_awal, angka_akhir, interval). Jadi kita bisa menggunakan perulangan dengan menggunakan for sesuai dengan format tersebut. Contoh code untuk syntax for. </p><span class='content-code'>for x in range (1,8,2): <br>&ensp;print(x)<br>Output <br>2 <br>4 <br>6 <br></span><span class='content-sub-heading'>while</span><p class='content-paragraph'>while adalah perulangan yang digunakan untuk menjalankan program ketika perulangan tersebut belum diketahui, ketika intruksi belum bernilai benar atau kondisi belum terpenuhi. Jadi diperlukan stoping condition jika menggunakan perulangan while. </p><span class='content-code'>i = 1 <br>while i <= 5: <br>&ensp;print(i) <br>i += 1 <br>Output : <br>1 <br>2 <br>3 <br>4 <br>5 <br></span>"
        },

        "algoritma-dasar-list":
        {
          "jumlah-baca": 0,
          "urutan": 6,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Algortima list",
          "deskripsi": "Dalam bahasa pemrograman Python, struktur data yang paling dasar adalah urutan atau lists. Setiap elemen-elemen berurutan akan diberi nomor posisi atau indeksnya.",
          "cover": "algoritma-dasar_algoritma-dasar-list_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Dalam bahasa pemrograman Python, struktur data yang paling dasar adalah urutan atau lists. Setiap elemen-elemen berurutan akan diberi nomor posisi atau indeksnya. Indeks pertama dalam list adalah nol, indeks kedua adalah satu dan seterusnya.</p><p class='content-paragraph'>Python memiliki enam jenis urutan built-in, namun yang paling umum adalah list dan tuple. Ada beberapa hal yang dapat Anda lakukan dengan semua jenis list. Operasi ini meliputi pengindeksan, pengiris, penambahan, perbanyak, dan pengecekan keanggotaan. Selain itu, Python memiliki fungsi built-in untuk menemukan panjang list dan untuk menemukan elemen terbesar dan terkecilnya.</p><span class='content-sub-heading'>Membuat List Python</span><p class='content-paragraph'>List adalah tipe data yang paling serbaguna yang tersedia dalam bahasa Python, yang dapat ditulis sebagai daftar nilai yang dipisahkan koma (item) antara tanda kurung siku. Hal penting tentang daftar adalah item dalam list tidak boleh sama jenisnya.</p><p class='content-paragraph'>Membuat list sangat sederhana, tinggal memasukkan berbagai nilai yang dipisahkan koma di antara tanda kurung siku. Dibawah ini adalah contoh sederhana pembuatan list dalam bahasa Python.</p><span class='content-code'>list1 = [1,2,3,4,5] <br>list2= ['anggur','jeruk','nanas'] <br>list3= ['anggur' , 3 ,  jeruk , '5'] <br></span><span class='content-sub-heading'>Akses Nilai Dalam List Python</span><p class='content-paragraph'>Untuk mengakses nilai dalam list python, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut.</p><p class='content-paragraph'>Berikut adalah contoh cara mengakses nilai di dalam list python :</p><span class='content-code'>list1 = [1,2,3,4,5,6] <br>print('anggota list pertama' , list1 [0]) <br>print('anggota list 1-4', list1 [0-5]) <br>Output : <br>anggota list pertama 1 <br>anggota list 1-4 [1,2,4,5] <br></span><span class='content-sub-heading'>Update Nilai Dalam List Python</span><p class='content-paragraph'>Anda dapat memperbarui satu atau beberapa nilai di dalam list dengan memberikan potongan di sisi kiri operator penugasan, dan Anda dapat menambahkan nilai ke dalam list dengan metode append (). Sebagai contoh :</p><span class='content-code'>list1 = [1,2,3,4,5,6] <br>print('anggota list pertama', list1 [0]) <br>list1 [0] = 21 <br>print('anggota baru pada index pertama', list1 [0]) <br>Output : <br>anggota baru pada list pertama 21 <br></span>"
        },

        "algoritma-dasar-tuple":
        {
          "jumlah-baca": 0,
          "urutan": 7,
          "tanggal": "04 Juni 2022",
          "penulis": "syayid",
          "judul-mata-kuliah": "Algoritma Dasar",
          "judul": "Tuple",
          "deskripsi": "Sebuah tuple adalah urutan objek Python yang tidak berubah. Tupel adalah urutan, seperti daftar.",
          "cover": "algoritma-dasar_algoritma-dasar-tuple_cover.jpg",
          "isi-materi": "<p class='content-paragraph'>Sebuah tuple adalah urutan objek Python yang tidak berubah. Tupel adalah urutan, seperti daftar. Perbedaan utama antara tupel dan daftarnya adalah bahwa tupel tidak dapat diubah tidak seperti List Python. Tupel menggunakan tanda kurung, sedangkan List Python menggunakan tanda kurung siku. Membuat tuple semudah memasukkan nilai-nilai yang dipisahkan koma.</p><span class='content-sub-heading'>Membuat Tuple</span><p class='content-paragraph'>Berikut adalah contoh source code ketika kita ingin medefinisikan variabel sebagai tuple dalam python.</p><span class='content-code'>tuple1 = (1,2,3,4,5) <br>tuple2= ('anggur','jeruk','nanas') <br>tuple3= ('anggur' , 3 ,  jeruk , '5') <br></span><span class='content-sub-heading'>Akses Nilai Tuple Python</span><p class='content-paragraph'>Untuk mengakses nilai dalam tuple python, kurang lebih sama seperti list gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut.</p><p class='content-paragraph'>Berikut adalah contoh cara mengakses nilai di dalam list python :</p><span class='content-code'>tuple1 = (1,2,3,4,5,6) <br>print('anggota tuple pertama' , list1 [0]) <br>print('anggota tuple 1-4' , list1 [0-5]) <br>Output : anggota tuple pertama 1 <br>anggota tuple 1-4 (1,2,3,4)</span>"
        }

      }

    }




  }

};

