document.getElementById('landing-button-div').addEventListener('click', () => {
  document
    .getElementById('section-2')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
});

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?';
const endBaseURL = '&units=imperial&appid=35b0242376c730106a1ead757ba5708a';
const cityArray = [
  'Chicago',
  'Miami',
  'London',
  'New York',
  'Boston',
  'Tokyo',
  'Glen Ellyn',
  'Marco Island'
];

$(function() {
  var $beer, createBubbles, defaults;
  defaults = {
    MAX_BUBBLE_SIZE: 100,
    MAX_BLUR: 10,
    MAX_ANIMATION_DURATION: 8000
  };
  $beer = $('.beer');
  createBubbles = function(bubbleCount) {
    var $bubble,
      bubbleBlur,
      bubbleDelay,
      bubbleOpacity,
      bubbleScale,
      bubbleSize,
      bubbleSpeed,
      i,
      ref,
      results,
      xPos,
      yPos;
    results = [];
    for (
      i = 0, ref = bubbleCount;
      0 <= ref ? i < ref : i > ref;
      0 <= ref ? i++ : i--
    ) {
      xPos = Math.floor(Math.random() * 100 + 1);
      yPos = Math.floor(Math.random() * 25 + 1);
      bubbleSize = Math.floor(Math.random() * defaults.MAX_BUBBLE_SIZE + 1);
      bubbleDelay = Math.floor(Math.random() * 100 * bubbleCount + 1);
      bubbleScale = bubbleSize / defaults.MAX_BUBBLE_SIZE;
      bubbleBlur = bubbleScale * defaults.MAX_BLUR;
      bubbleSpeed =
        (1 - bubbleScale * bubbleScale) * defaults.MAX_ANIMATION_DURATION;
      bubbleOpacity = 0.25 * (1 - bubbleScale);
      $bubble = $('<div>')
        .addClass('bubble')
        .css({
          width: bubbleSize + 'px',
          height: bubbleSize + 'px',
          left: xPos + '%',
          top: yPos + '%',
          '-webkit-animation-delay': bubbleDelay + 'ms',
          '-webkit-animation-duration': bubbleSpeed + 'ms',
          '-webkit-filter': 'blur(' + bubbleBlur + 'px)',
          filter: 'blur(' + bubbleBlur + 'px)',
          opacity: bubbleOpacity
        });
      results.push($beer.append($bubble));
    }
    return results;
  };
  return createBubbles(100);
});

let city = cityArray[Math.floor(Math.random() * cityArray.length)];
searchCity(city);

function searchCity(city) {
  let queryURL = forecastURL + `q=${city}` + endBaseURL;

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    displayCityInfo(response);
  });
}

function displayCityInfo(response) {
  let createDiv = $(
    `<h2>
      ${response.city.name},<span class="small-country"> ${response.city.country}</span>
    </h2>
    <div>
      ${response.list[0].main.temp}°F
    </div>
    <img src="http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png">
    <div>
      Humidity: ${response.list[0].main.humidity}%
    </div>
    <div>
      Wind: ${response.list[0].wind.speed}MPH
    </div>
    <div class="label absolute">Check the weather! </div>

  `
  );
  $('#searched-city-info').html(createDiv);
}
