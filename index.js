const elementMain = document.querySelector('#main');
elementMain.remove();

const newHeader = document.createElement('h1')
newHeader.id = 'victory';
newHeader.textContent = 'Lauren is the champion';
document.body.append(newHeader); 