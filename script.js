fetch("data.json")
.then(res => res.json())
.then(data => {

fetch("data.json")
.then(res => {

    if(!res.ok){
        throw new Error("Gagal memuat data");
    }

    return res.json();
})
    
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

    const userUrl =
        document.getElementById("userUrl")?.value || "";

    let copyContent = text.value;

    if(userUrl.trim() !== ""){
        copyContent += "\n\n━━━━━━━━━━\n";
        copyContent += userUrl;
    }

    navigator.clipboard.writeText(copyContent);

    alert("Script berhasil dicopy!");
}

function shareWhatsapp(id){

    const text = document.getElementById(id);

    const userUrl =
        document.getElementById("userUrl")?.value || "";

    let content = text.value;

    if(userUrl.trim() !== ""){
        content += "\n\n━━━━━━━━━━\n";
        content += userUrl;
    }

    window.open(
        "https://wa.me/?text=" + encodeURIComponent(content),
        "_blank"
    );
}

function getYoutubeId(url){

const regExp =
/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

const match = url.match(regExp);

return (match && match[2].length === 11)
    ? match[2]
    : '';

}


document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("userUrl");

    if(!input) return;

    input.value = localStorage.getItem("promoUrl") || "";

    input.addEventListener("input", () => {
        localStorage.setItem("promoUrl", input.value);
    });

});
