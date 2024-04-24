const devices = document.querySelectorAll('.device');

devices.forEach(device => {
  const deviceLink = device.querySelector('.device-link');

  device.addEventListener('mouseover', () => {
    device.style.backgroundColor = '#ECECEC';
    deviceLink.style.display = 'block';
  });

  device.addEventListener('mouseout', () => {
    device.style.backgroundColor = '#F8F9FA';
    deviceLink.style.display = 'none';
  });

  device.addEventListener('click', () => {
    const link = deviceLink.getAttribute('href');
    window.open(link, '_blank');
  });
});
