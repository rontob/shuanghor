fetch("data.json")
.then(res => res.json())
.then(data => {

let html = "";

data.forEach(item => {

    let media = "";

    if(item.type === "youtube") {

        const ytId = getYoutubeId(item.youtube);

        media = `
        <iframe
            class="video"
            src="https://www.youtube.com/embed/${ytId}"
            frameborder="0"
            allowfullscreen>
        </iframe>
        `;
    }

    if(item.type === "image") {

        media = `
        <a href="${item.image}" target="_blank">
            <img
                src="${item.image}"
                class="poster"
                alt="${item.judul}">
        </a>
        `;
    }

    html += `
    <div class="card">

        ${media}

        <div class="content">

            <h2>${item.judul}</h2>

            <textarea id="script-${item.id}" readonly>${item.script}</textarea>

            <div class="actions">

                <button
                    class="btn copy"
                    onclick="copyText('script-${item.id}')">
                    Copy Script
                </button>

                ${item.download ? `
                <a
                    class="btn download"
                    href="${item.download}"
                    target="_blank">
                    Download
                </a>
                ` : ''}

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

const text = document.getElementById(id);

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
