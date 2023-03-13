function init() {
    // create initial sketch box
    generateSketchBox(16);
    // add resize click listener
    document.querySelector('#resize').addEventListener('click', promptAndResizeOrAlert);
}

function generateSketchBox(length) {
    const sketchBox = document.querySelector('#sketchBox');
    for (let i = 0; i < length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < length; j++) {
            const tile = createTile();
            row.append(tile);
        }
        sketchBox.append(row);
    }
}

function createTile() {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener('mouseenter', function(e) {
        this.classList.add('tileHover');
    });
    return tile;
}

// resize function for button listener
function promptAndResizeOrAlert() {
    const size = +prompt('Enter size for sketch board...');
    if (size < 0 || size > 100) {
        alert('Enter a size from 1 to 100');
    }
    removeAllChildren(document.querySelector('#sketchBox'));
    generateSketchBox(size);
}

function removeAllChildren(node) {
    const children = node.querySelectorAll('*');
    children.forEach(child => {
        child.remove();
    })
}

init();