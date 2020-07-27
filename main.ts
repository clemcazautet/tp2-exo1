let y2 = 0
let y1 = 0
let x = 2
let y = 2
basic.forever(function () {
    led.plot(x, y)
    while (y > 0) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
    while (y < 4) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
})
basic.forever(function () {
    let x1 = 0
    led.plot(x1, y1)
    while (y1 > 0) {
        led.plot(x1, y1)
        basic.pause(100)
        led.unplot(x1, y1)
        y1 += -1
        led.plot(x1, y1)
    }
    while (y1 < 4) {
        led.plot(x1, y1)
        basic.pause(100)
        led.unplot(x1, y1)
        y1 += 1
        led.plot(x1, y1)
    }
})
basic.forever(function () {
    let x2 = 0
    led.plot(x2, y2)
    while (y2 > 0) {
        led.plot(x2, y2)
        basic.pause(100)
        led.unplot(x2, y2)
        y2 += -1
        led.plot(x2, y2)
    }
    while (y2 < 4) {
        led.plot(x2, y2)
        basic.pause(100)
        led.unplot(x2, y2)
        y2 += 1
        led.plot(x2, y2)
    }
})
