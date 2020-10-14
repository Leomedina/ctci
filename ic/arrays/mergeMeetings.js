const meetingTimes = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]
/**
 * 
 * COMPLEXITY:
 * Time: O(2n);
 * Space: O(1);
 * 
 */

function mergeMeetings(meetingTimes) {
  meetingTimes.sort((a, b) => a.startTime - b.startTime);//What is the O notation of this??

  for (let i = 0; i < meetingTimes.length; i++) {
    if (i > 0) {
      let meeting1 = meetingTimes[i];
      let meeting2 = meetingTimes[i - 1];

      if (meeting1.startTime >= meeting2.startTime && meeting1.startTime <= meeting2.endTime) {
        if (meeting1.endTime > meeting2.endTime) {
          meeting2.endTime = meeting1.endTime;
        };
      };
      meetingTimes.splice(i, 1);
    };
  };
  if (meetingTimes.length > 1) mergeMeetings(meetingTimes);
  return meetingTimes;
}
console.log(mergeMeetings(meetingTimes));