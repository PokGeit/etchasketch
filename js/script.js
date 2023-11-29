//Constants
const DEFAULT_TILE_LENGTH = 16;
const WRAPPER_SIZE = 512;
const AUTHORIZED_TILE_LENGTHS = [2, 4, 8, 16, 32, 64, 128];


//Initialize script
//generateTiles(DEFAULT_TILE_LENGTH);
generateTiles(128);
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

    //Place tile rows
    for(x = 0; x < tileLength; x++)
    {
        let newDiv = document.createElement('div');
        newDiv.classList.add('tileRow');
        newDiv.setAttribute('id', x);
        //let div = this.tileWrapper.appendChild(newDiv);

        //Place tiles within the tile rows
        for(tile = 0; tile < tileLength; tile++)
        {
            let newTile = document.createElement('div');
            newTile.classList.add('tile');
            newTile.setAttribute('id', x+"-"+tile);
            newTile.addEventListener('mouseover', onTileClick);
            
            //this.tileWrapper.appendChild(newTile);
            //let targetTileRow = document.querySelector("#"+x.toString());
            newDiv.appendChild(newTile);

            console.log(x+"-"+tile);
        }

        let div = this.tileWrapper.appendChild(newDiv);
    }


    //Old way
    /*for(x = 0; x <totalTiles; x++)
    {
        let newDiv = document.createElement('div');

        //Tile class is defined in style.css
        newDiv.classList.add('tile');
        newDiv.setAttribute('id', x);
        
        //newDiv.style.width = "32px";
        //newDiv.style.height = "32px";

        newDiv.addEventListener('mouseover', onTileClick);
        let div = this.tileWrapper.appendChild(newDiv);

    }*/
}

function onTileClick()
{
    this.setAttribute("style", "background-color: red;")
    return;
}