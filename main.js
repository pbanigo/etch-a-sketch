let gridSize = 30;//I'd make this an input or something
const container = document.querySelector('#container');
container.style.display = 'none';
function addDiv(){
	const grid = document.createElement('div');
	grid.classList.add("single");
	grid.addEventListener('mouseenter', function changeColor(){ grid.style.backgroundColor = 'black';})
	//grid.textContent = `grid`;
	container.appendChild(grid);
}
function start(){
	container.style.display = 'grid';
	container.style.gridTemplateColumns = `repeat(${gridSize},${960/gridSize}px)`;
	container.style.gridTemplateRows = `repeat(${gridSize},${960/gridSize}px)`;
	document.getElementById('start').style.display = 'none';
	for (let i = 0; i <gridSize*gridSize; i++) {
	addDiv();
}

}



