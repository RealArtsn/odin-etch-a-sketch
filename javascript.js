function init() {
    const sketchBox = document.querySelector('#sketchBox');
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 16; j++) {
            const tile = createTile();
            row.append(tile);
        }
        sketchBox.append(row);
    }
    document.querySelector('body').append(sketchBox);
}

function createTile() {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener('mouseenter', function(e) {
        this.classList.add('tileHover');
    });
    // tile.addEventListener('mouseleave', function(e) {
    //     this.classList.remove('tileHover');
    // });
    return tile;
}

init()