const matkul = paramsUrl.get("mata-kuliah");
const materi = paramsUrl.get("materi");
// console.log(dataMateri.slice(14230, 14220));
// const jsonObject = JSON.parse(dataMateri);
const materialObject = dataMateri["mata-kuliah"];
const authorObject = dataMateri["profil-penulis"];

if (matkul != null && materi == null) {
    const listMateri = document.getElementById("list-materi");
    const subjectTitle = document.getElementById("subject-title");
    console.log(materialObject);
    subjectTitle.innerHTML = "DAFTAR MATERI " + materialObject[matkul]["judul-mata-kuliah"];
    let getMateri = "";
    // console.log(materialObject[matkul]["materi"]);

    for (matri in materialObject[matkul]["materi"]) {
        console.log(materialObject[matkul]["materi"][matri]);

        getMateri = getMateri + `<div class="card-material">
    <div class="container-card-material">
        <div class="card-material-cover">
            <div class="card-material-image" style="background:url('../assets/images/materi/${materialObject[matkul]["materi"][matri]["cover"]}') no-repeat center;background-size:cover;"></div>
        </div>
        <div class="card-material-info">
            <span class="card-material-subject">${materialObject[matkul]["materi"][matri]["judul-mata-kuliah"]}</span>
            <span class="card-material-title">${materialObject[matkul]["materi"][matri]["judul"]}</span>
            <p class="card-material-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book.
            </p>
            <a href="baca-materi.html?menu=materi&mata-kuliah=${matkul}&materi=${matri}"
                class="card-material-button display-inline-block text-nodecoration">
                <div class="button-primary-bg">Baca Materi</div>
            </a>
        </div>

    </div>
</div>`;

    }
    listMateri.innerHTML = getMateri

}
else if (matkul == null && materi == null) {
    // console.log("asd");
    const listMatkul = document.getElementById("list-matkul");
    let getMatkul = "";
    // console.log(materialObject[matkul]["materi"]);

    for (mtkul in materialObject) {
        getMatkul = getMatkul + `
        <div class="card-horizontal">
                        <div class="card-horizontal-container">

                            <div class="card-horizontal-cover">
                                <div id="card-image" class="card-horizontal-image bg-accent-color"></div>
                            </div>

                            <div class="card-horizontal-info">
                                <span class="card-horizontal-title">
                                    ${materialObject[mtkul]["judul-mata-kuliah"]}
                                </span>
                                <p class="card-horizontal-description opacity70">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <a href="materi.html?menu=materi&mata-kuliah=${mtkul}"
                                    class="text-nodecoration text-bold">
                                    <span class="button-primary-bg display-inline-block">Lihat Materi</span>

                                </a>
                            </div>

                        </div>
                    </div>
        `;
        console.log(mtkul);
    }
    listMatkul.innerHTML = getMatkul;


}
else if (materi != null) {

    const authorName = document.getElementById("author-name");
    const authorPhoto = document.getElementById("author-photo");
    const materialContent = document.getElementById("material-content");
    const materialTitle = document.getElementById("material-title");
    const materialSubject = document.getElementById("material-subject");
    const materialCover = document.getElementById("material-cover-image");


    console.log(authorObject);

    authorName.innerHTML = authorObject[materialObject[matkul]["materi"][materi]["penulis"]]["nama"];
    authorPhoto.src = "../assets/images/" + authorObject[materialObject[matkul]["materi"][materi]["penulis"]]["foto"];
    materialCover.style.background = "url('../assets/images/materi/" + materialObject[matkul]["materi"][materi]["cover"] + "') top center";
    materialCover.style.background.size = "cover";
    materialContent.innerHTML = materialObject[matkul]["materi"][materi]["isi-materi"];
    materialTitle.innerHTML = materialObject[matkul]["materi"][materi]["judul"];
    materialSubject.innerHTML = materialObject[matkul]["materi"][materi]["judul-mata-kuliah"];

}
