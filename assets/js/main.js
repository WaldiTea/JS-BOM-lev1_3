const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log(navigator);
  console.log(window);

  let description = [
  'Browsername: ',
  'Browserversion: ',
  'Betriebssystem-Architektur: ',
  'Innere Breite des Dokuments: ',
  'Innere Höhe des Dokuments: ',
  'Color-Depth: ',
  'Pixel-Depth: '
];

  let innerText = [
    navigator.appName,
    navigator.appVersion.substring(0, 12),
    navigator.platform,
    window.innerWidth,
    window.innerHeight,
    screen.colorDepth,
    screen.pixelDepth
  ];

  for(let i = 0; i < innerText.length; i++) {
    let text = document.createElement('h3');
    text.textContent = `${description[i]} ${innerText[i]}`;
    document.body.appendChild(text);
  }
});