if(item.type === "youtube"){

    media = `
    <iframe
        class="video"
        src="https://www.youtube.com/embed/${ytId}"
        frameborder="0"
        allowfullscreen>
    </iframe>
    `;

}

if(item.type === "image"){

    media = `
    <a href="${item.image}" target="_blank">
      <img
        src="${item.image}"
        class="poster"
        alt="${item.judul}">
    </a>
    `;

}
