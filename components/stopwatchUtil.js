const PadtoTwo = (number) => (number <= 9 ? `0${number}` : number);
export const displayTime = (centiseconds) => {
  let minutes = 0;
  let seconds = 0;
  if (centiseconds < 0) {
    centiseconds = 0;
  }
  if (centiseconds < 100) {
    return `00:00:${PadtoTwo(centiseconds)}`;
  }
  let remainCentiseconds = centiseconds % 100;
  seconds = (centiseconds - remainCentiseconds) / 100;
  if (seconds < 60) {
    return `00:${PadtoTwo(seconds)}:${PadtoTwo(centiseconds)}`;
  }
  let remainSeconds = seconds % 60;
  minutes = (seconds - remainSeconds) / 60;
  return `${PadtoTwo(minutes)}:${PadtoTwo(remainSeconds)}:${PadtoTwo(
    remainCentiseconds
  )}`;
};
