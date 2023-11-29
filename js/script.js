//Constants
const DEFAULT_TILE_LENGTH = 16;
const WRAPPER_SIZE = 512;
const AUTHORIZED_TILE_LENGTHS = [2, 4, 8, 16, 32, 64, 128];


//Initialize script
//generateTiles(DEFAULT_TILE_LENGTH);
generateTiles(16);
console.log("Script loaded.");


//============//
function generateTiles(tileLength)
{
    let tileSize;

    //const tileWrapper = document.querySelector('.tileWrapper');

    //Square of tile length is the total amount of tiles to create
    const totalTiles = tileLength * tileLength;

    //Calculate desired size of new tiles
    tileSize = WRAPPER_SIZE / tileLength;

    for(x = 0; x <totalTiles; x++)
    {
        let newDiv = document.createElement('div');

        //Tile class is defined in style.css
        newDiv.classList.add('tile');
        newDiv.setAttribute('id', x);
        
        //newDiv.style.width = "32px";
        //newDiv.style.height = "32px";

        newDiv.addEventListener('mouseover', onTileClick);
        let div = this.tileWrapper.appendChild(newDiv);

    }
}

function onTileClick()
{
    this.setAttribute("style", "background-color: red;")
    return;
}