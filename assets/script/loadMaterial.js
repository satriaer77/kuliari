const matkul      = paramsUrl.get("mata-kuliah");
const materi      = paramsUrl.get("materi");


const authorName      = document.getElementById("author-name");
const authorPhoto     = document.getElementById("author-photo");
const materialContent = document.getElementById("material-content");
const materialTitle   = document.getElementById("material-title");
const materialSubject = document.getElementById("material-subject");
const materialCover   = document.getElementById("material-cover-image");


const jsonObject     = JSON.parse(dataMateri);
const materialObject = jsonObject["mata-kuliah"];
const authorObject   = jsonObject["profil-penulis"];

console.log(authorObject);

authorName.innerHTML      = authorObject[materialObject[matkul]["materi"][materi]["penulis"]]["nama"];
authorPhoto.src           = "../assets/images/"+authorObject[materialObject[matkul]["materi"][materi]["penulis"]]["foto"];
materialCover.style.background = "url('../assets/images/materi/"+materialObject[matkul]["materi"][materi]["cover"]+"') no-repeat center top";
materialContent.innerHTML = materialObject[matkul]["materi"][materi]["isi-materi"];
materialTitle.innerHTML   = materialObject[matkul]["materi"][materi]["judul"];
materialSubject.innerHTML = materialObject[matkul]["materi"][materi]["judul-mata-kuliah"];
