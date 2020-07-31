const meetingTimes = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]

function mergeRanges(meetings) {

  meetings.map(mapMeeting => {
    meetings.forEach(forEachMeeting => {
      if (mapMeeting.startTime >= forEachMeeting.startTime && mapMeeting.startTime <= forEachMeeting.endTime) {
        mapMeeting.endTime = forEachMeeting.endTime;
        meetings.splice(meetings.indexOf(forEachMeeting), 1);
      };
    });
  });

  return meetings;
}

console.log(mergeRanges(meetingTimes))