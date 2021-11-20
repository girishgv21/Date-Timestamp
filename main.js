$(function() {
    console.log('JS Loaded')

    var date = new Date()
    var dateTime = new Date().getTime()
    var nextWeek = new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000)
    var nextTime = new Date(date.getTime() + 5 * 24 * 60 * 60 * 1000).setHours(9, 0, 0, 0)

    $('.current-date .date').text(date);
    $('.current-timestamp .date').text(dateTime);
    $('.next-date .date').text(nextWeek);
    $('.next-timestamp .date').text(nextTime);

}) 