console.log('hello world');

const thisOne = document.getElementById('this_one');


thisOne.addEventListener('dblclick', toggleHighlight);

function toggleHighlight() {
  thisOne.classList.toggle('highlight');
}
