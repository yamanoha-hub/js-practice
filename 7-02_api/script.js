'use strict';

// Geolocation
function success(pos) {
  // 天気予報のリクエストを取得
  ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}
function fail(error) {
  alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

// UTCをミリ秒から秒に変える
function utcToJSTime(utcTime) {
  return utcTime * 1000;
}

// データ取得
function ajaxRequest(lat, long) {
  const url = 'https://api.openweathermap.org/data/2.5/forecast';
  const appId = '61031a7de4345a655d00cf6ab5b7ae91';

  // APIに送信
  $.ajax({
    url: url,
    data: {
      appid: appId,      // API key
      lat: lat,          // 緯度
      lon: long,         // 経度
      units: 'metric',   // データの単位を設定
      lang: 'ja'         // 言語を設定
    }
  })
  // dataを出力
  .done(function(data) {
    console.log(data);

    // 都市名、国名
    // placeのテキストに出力
    $('#place').text(data.city.name + ', ' + data.city.country);

    // console.log('都市名:' + data.city.name);
    // console.log('国名:' + data.city.country);


    // 天気予報データ forecastにlistプロパティの各項目が保存される
    data.list.forEach(function(forecast, index) {
      // 定数datetimeから月、日、時、分を取得し、それぞれ定数に代入
      const dateTime = new Date(utcToJSTime(forecast.dt));
      const month = dateTime.getMonth() + 1;
      const date = dateTime.getDate();
      const hours = dateTime.getHours();
      const min = String(dateTime.getMinutes()).padStart(2, '0');
      // forecastに含まれる、mainプロパティのtempプロパティの値を取得
      const temperature = Math.round(forecast.main.temp);

      const description = forecast.weather[0].description;
      const iconPath = `images/${forecast.weather[0].icon}.svg`;

      // 現在の天気とそれ以外で出力を変える
      if(index === 0) {
        // 現在の天気を表示
        const currentWeather = `
        <div class="icon><img src="${iconPath}"></div>
        <div class="info>
          <p>
            <span class="description>現在の天気:${description}</span>
            <span class="temp">${temperature}</span>℃
          </p>
        </div>`;
        $('#weather').html(currentWeather);
      } else {
        // 予報の天気を表示する
        const tableRow = `
        <tr>
          <td class="info">
            ${month}/${date} ${hours}:${min}
          </td>
          <td class="icon">
            <img src="${iconPath}">
          </td>
          <td>
            <span class="description">${description}</span>
          </td>
          <td>
            <span class="temp">${temperature}℃</span>
          </td>
        </tr>`;
        $('#forecast').append(tableRow);
      }


      // データ取得と整形の定数をコンソールする
      // console.log('日時' + `${month}/${date} ${hours}:${min}`);
      // console.log('気温' + temperature);
      // console.log('天気' + description);
      // console.log('画像パス' + iconPath);
    });
  })
  // データ取得失敗した時の処理
  .fail(function() {
    console.log('$.ajax failed!');
  })
}