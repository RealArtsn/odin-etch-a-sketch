function init() {
    // disable 'dragging' behavior in sketch box and right-click actions
    blockDefaultMouseActions(document.querySelector('#sketchBox'));

    // create initial sketch box
    generateSketchBox(16);
    // add resize click listener
    document.querySelector('#resize').addEventListener('click', promptAndResizeOrAlert);

    // add 'clear tiles' click listener
    document.querySelector('#clear').addEventListener('click', clearTiles);

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
    // listen for clicking over tile
    tile.addEventListener('mousedown', handleTileClick);

    // listen for mouse hovering while clicking
    tile.addEventListener('mouseenter', handleTileClick);

    return tile;
}

function handleTileClick(e) {
    const tile = this;
    // do nothing if mouse is not clicked
    if (!e.buttons) return;
    // check if left click
    if (!isEven(e.buttons)) {
        // apply tile effect
        tile.classList.add('tileHover');
    } else {
        // remove tile effect
        tile.classList.remove('tileHover');
    }
}

// resize function for button listener
function promptAndResizeOrAlert() {
    // prompt for number, alert if not in correct range
    const MIN = 1;
    const MAX = 150;
    const size = Math.round(+prompt('Enter size for sketch board...'));
    console.log(size);
    if (!size || (size < MIN || size > MAX)) {
        alert(`Enter a size from ${MIN} to ${MAX}`);
        return;
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

// return true if number is even
function isEven(n) {
    return n % 2 === 0;
}

// prevent dragging and righ click menu in node
function blockDefaultMouseActions(node) {
    // prevent default behavior for clicking and dragging
    node.addEventListener('mousedown', function (e) {
        e.preventDefault();
    })
    node.addEventListener('mousemove', function (e) {
        e.preventDefault();
    })
    // block right-click menu
    node.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })
}

// clear drawing from tiles
function clearTiles() {
    const tiles = document.querySelectorAll('.tile');
    console.log(tiles);
    tiles.forEach(tile => {
        tile.classList.remove('tileHover');
    })
}

init();