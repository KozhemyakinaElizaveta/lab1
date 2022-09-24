let prev = performance.now();
let times = 0;
requestAnimationFrame(function measure(time) {
    document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
    prev = time;
    if (times++ < 10) requestAnimationFrame(measure);
})