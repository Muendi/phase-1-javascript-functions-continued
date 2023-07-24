// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();


function wrapAdjective(adjective) {
    const aChar = function (start) {
      return `You are ${adjective}${start}${adjective}!`;
    }
    return aChar;
    
  }
  wrapAdjective("*")