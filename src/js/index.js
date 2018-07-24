import $ from 'jquery';
import '../css/index.css';

let classIdx = 0;

function drawClass() {
  $('#classes').append(
    '<li>' +
    `<input type="text" id="name-${classIdx}" placeholder="운영체제" />` +
    `<input type="text" id="professor-${classIdx}" placeholder="최광훈" />` +
    `<input type="text" id="location-${classIdx}" placeholder="산422" />` +
    `<input type="text" id="time1-${classIdx}" placeholder="월C" />` +
    `<input type="text" id="time2-${classIdx}" placeholder="수D" />` +
    `<input type="text" id="time3-${classIdx}" placeholder="금C" />` +
    '</li>'
  );

  classIdx += 1;
}

// Refer to @starbead's code (https://github.com/AjouDoiT-WebProj/timetable)
function drawTimetable() {
  const weekdayEng = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const weekdayKor = ['월', '화', '수', '목', '금', '토', '일'];

  for (let i = 0; i < 7; i += 1) {
    $('#week').append(`<th>${weekdayKor[i]}</th>`);
    $('.block').append(`<td class="unit unit-${weekdayEng[i]}"></td>`);
  }
}

function translateWeekday(weekday) {
  if (weekday === '월') { return 'mon'; }
  if (weekday === '화') { return 'tue'; }
  if (weekday === '수') { return 'wed'; }
  if (weekday === '목') { return 'thu'; }
  if (weekday === '금') { return 'fri'; }
  if (weekday === '토') { return 'sat'; }
  if (weekday === '일') { return 'sun'; }
  return null;
}

function applyClassToTimetable() {
  $('#timetable td').css('background-color', 'white');

  for (let i = 0; i < classIdx; i += 1) {
    const courseName = $(`#name-${i}`).val();
    const courseTimes = [$(`#time1-${i}`).val(), $(`#time2-${i}`).val(), $(`#time3-${i}`).val()];

    for (let j = 0; j < courseTimes.length; j += 1) {
      const weekday = translateWeekday(courseTimes[j].split('')[0]);
      const time = courseTimes[j].split('')[1];

      $(`#block-${time} .unit-${weekday}`).css('background-color', 'black');
    }
  }
}

function attachEvent() {
  $('#add-class').on('click', () => {
    drawClass();
  });

  $('#onegai').on('click', () => {
    applyClassToTimetable();
  });
}

$(document).ready(() => {
  for (let i = 0; i < 5; i += 1) {
    drawClass();
  }
  drawTimetable();

  attachEvent();
});
