//This was working in fiddle but not sure why not working vscode

async function cityLongLat() {
  fetch("https://geocode.xyz/austin?json=1")
    .then((res) => res.json())
    .then((data) =>
      console.log("latitude " + data.latt + ", \n longitude " + data.longt)
    );
}

cityLongLat();
