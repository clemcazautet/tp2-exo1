let x = 2
let y = 2
let x1 = x + 1
let y1 = x + 1
let x2 = x + 2
let y2 = y + 2
let x3 = x - 1
let y3 = y - 1
let x4 = x - 2
let y4 = y - 2
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
basic.forever(function () {
    led.plot(x3, y3)
    while (y3 > 0) {
        led.plot(x3, y3)
        basic.pause(100)
        led.unplot(x3, y3)
        y3 += -1
        led.plot(x3, y3)
    }
    while (y3 < 4) {
        led.plot(x3, y3)
        basic.pause(100)
        led.unplot(x3, y3)
        y3 += 1
        led.plot(x3, y3)
    }
})
basic.forever(function () {
    led.plot(x4, y4)
    while (y4 > 0) {
        led.plot(x4, y4)
        basic.pause(100)
        led.unplot(x4, y4)
        y4 += -1
        led.plot(x4, y4)
    }
    while (y4 < 4) {
        led.plot(x4, y4)
        basic.pause(100)
        led.unplot(x4, y4)
        y4 += 1
        led.plot(x4, y4)
    }
})
