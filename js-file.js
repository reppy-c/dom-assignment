const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const content_p = document.createElement('p');
content_p.style.color = 'red';
content_p.textContent = 'Hey I\'m red!';

container.appendChild(content_p);

const content_h3 = document.createElement('h3');
content_h3.style.color = 'blue';
content_h3.textContent = 'I\'m a blue h3!';

container.appendChild(content_h3);

const content_div = document.createElement('div');
content_div.style.border = '2px solid black';
content_div.style.background = 'pink';

const content_h1 = document.createElement('h1');
content_h1.textContent = 'I\'m in a div';

const content_p2 = document.createElement('h1');
content_p2.textContent = 'ME TOO!';

content_div.appendChild(content_h1);
content_div.appendChild(content_p2);
container.appendChild(content_div);
