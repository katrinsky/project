const devices = document.querySelectorAll('.device');

devices.forEach(device => {
  const deviceLink = device.querySelector('.device-link');

  // Додаємо обробник подій для показу посилання при наведенні
  device.addEventListener('mouseover', () => {
    device.style.backgroundColor = '#ECECEC';
    deviceLink.style.display = 'block';
  });

  // Додаємо обробник подій для приховування посилання при відведенні
  device.addEventListener('mouseout', () => {
    device.style.backgroundColor = '#F8F9FA';
    deviceLink.style.display = 'none';
  });

  // Перенаправлення користувача при кліку на блок
  device.addEventListener('click', () => {
    const link = deviceLink.getAttribute('href');
    window.open(link, '_blank');
  });
});
