// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "AM" : "PM";
  console.clear();
  console.log(`${hours} : ${min} : ${sec} ${ampm}`);
}
setInterval(clock, 1000);
