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
