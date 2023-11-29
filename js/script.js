//Constants
const DEFAULT_TILE_LENGTH = 16;
const WRAPPER_SIZE = 512;
const AUTHORIZED_TILE_LENGTHS = [2, 4, 8, 16, 32, 64, 128];
const RAINBOW_COLORS = [
"#FF0000",
"#FFA833",
"#33FF39",
"#FC33FF",
"#0E14D1"
];

//Globals
let global_rainbow = false;
let global_tiles = DEFAULT_TILE_LENGTH;

//generateTiles(DEFAULT_TILE_LENGTH);
init();


function init()
{
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', onButtonClick)
    })

    const slider = document.querySelector('.slider');
    slider.addEventListener('input', onSliderChange)

    generateTiles(16);
    console.log("Script init completed.")
    return 1;
}

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
    let colorStr = "";
    if(global_rainbow)
    {
        //Rainbow mode
        let colorRgb = RAINBOW_COLORS[Math.floor(Math.random()*RAINBOW_COLORS.length)];
        colorStr = "background-color: "+colorRgb;
    }

    else
    {
        colorStr = "background-color: black";
    }

    this.setAttribute("style", colorStr);
    return;
}

function onButtonClick()
{
    if(this.id == "erase")
    {
        clearTiles();
    }

    if(this.id == "rainbow")
    {
        if(global_rainbow)
        {
            global_rainbow = false;
        }
        else
        {
            global_rainbow = true;
        }
    }
    return;
}

function clearTiles()
{
    //Deletes the tiles
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach((tile) => {
        tile.remove();
    })

    //Deletes the tile rows
    const tileRows = document.querySelectorAll('.tileRow');
    tileRows.forEach((tileRow) => {
        tileRow.remove();
    })

    //Spawn new tiles
    generateTiles(global_tiles);
    return;
}

function onSliderChange()
{
    if(this.value < 0 || this.value > AUTHORIZED_TILE_LENGTHS.length)
    {
        console.log("Invalid slider value detected");
        return;
    }
    else
    {
        global_tiles = AUTHORIZED_TILE_LENGTHS[parseInt(this.value)];
        clearTiles();
    }
    return;
}