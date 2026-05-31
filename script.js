fetch("data.json")
.then(res => res.json())
.then(data => {

    let html = "";

    data.forEach(item => {

        const ytId = getYoutubeId(item.youtube);

        html += `
        <div class="card">

            <iframe
                class="video"
                src="https://www.youtube.com/embed/${ytId}"
                frameborder="0"
                allowfullscreen>
            </iframe>

            <div class="content">

                <h2>${item.title}</h2>

                <textarea id="${item.id}" readonly>${item.script}</textarea>

                <div class="actions">

                    <button
                        class="btn copy"
                        onclick="copyText('${item.id}')">
                        Copy Script
                    </button>

                    <a
                        class="btn download"
                        href="${item.download}"
                        target="_blank">
                        Download Video
                    </a>

                    <a
                        class="btn whatsapp"
                        href="https://wa.me/?text=${encodeURIComponent(item.script)}"
                        target="_blank">
                        Share WhatsApp
                    </a>

                </div>

            </div>

        </div>
        `;
    });

    document.getElementById("promoContainer").innerHTML = html;

});

function copyText(id){

    let text = document.getElementById(id);

    text.select();
    text.setSelectionRange(0,99999);

    navigator.clipboard.writeText(text.value);

    alert("Script berhasil dicopy!");
}

function getYoutubeId(url){

    const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

    const match = url.match(regExp);

    return (match && match[2].length === 11)
    ? match[2]
    : '';
}
if(item.type === "youtube"){

    media = `
    <iframe
      class="video"
      src="https://www.youtube.com/embed/${ytId}"
      allowfullscreen>
    </iframe>
    `;

}

if(item.type === "image"){

    media = `
    <img
      src="${item.image}"
      class="poster"
      alt="${item.judul}">
    `;

}
