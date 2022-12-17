

$(function() {
    $('.si').slick({
        arrows: false, //скрываем кнопки
        dots: true, // добавляем точки
        infinite: true, // бесконеное пролистывание
      slidesToShow: 1, // показываем или листаем оп одному слайду
      slidesToScroll: 1, // показываем или листаем оп одному слайду
      adaptiveHeight: true,
      autoplay: true,
  autoplaySpeed: 2000,
    });
    
})



var userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
  {device: 'Symbian', platform: /Symbian/},
  {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Tablet OS', platform: /Tablet OS/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
  {device: 'Macintosh', platform: /Macintosh/}
  ];

  var platform = navigator.userAgent;

  function getPlatform(yt) {
    for (var i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
        return userDeviceArray[i].device;
      }
    }
    return 'Неизвестная платформа!' + platform;
  }

  if (getPlatform(yt) == 'iPhone') {
  window.location.href = 'https://itunes.apple.com/app/id1452368807';
  }

  if (getPlatform(yt) == 'Android') {
  window.location.href = 'http://play.google.com/store/apps/details?id=islam.islamapp';
  }