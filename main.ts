let x = 0
let y = 0
let x1 = 1
let y1 = 1
let x2 = 2
let y2 = 2
let x3 = 3
let y3 = 3
let x4 = 4
let y4 = 4
basic.forever(function () {
	
})
basic.forever(function () {
    led.plot(x, y)
    while (y < 4) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
    while (y > 0) {
        led.plot(x, y)
        basic.pause(100)
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
})
basic.forever(function () {
    led.plot(x2, y2)
    while (y2 < 4) {
        led.plot(x2, y2)
        basic.pause(100)
        led.unplot(x2, y2)
        y2 += 1
        led.plot(x2, y2)
    }
    while (y2 > 0) {
        led.plot(x2, y2)
        basic.pause(100)
        led.unplot(x2, y2)
        y2 += -1
        led.plot(x2, y2)
    }
})
basic.forever(function () {
    led.plot(x1, y1)
    while (y1 < 4) {
        led.plot(x1, y1)
        basic.pause(100)
        led.unplot(x1, y1)
        y1 += 1
        led.plot(x1, y1)
    }
    while (y1 > 0) {
        led.plot(x1, y1)
        basic.pause(100)
        led.unplot(x1, y1)
        y1 += -1
        led.plot(x1, y1)
    }
})
basic.forever(function () {
    led.plot(x3, y3)
    while (y3 < 4) {
        led.plot(x3, y3)
        basic.pause(100)
        led.unplot(x3, y3)
        y3 += 1
        led.plot(x3, y3)
    }
    while (y3 > 0) {
        led.plot(x3, y3)
        basic.pause(100)
        led.unplot(x3, y3)
        y3 += -1
        led.plot(x3, y3)
    }
})
basic.forever(function () {
    led.plot(x4, y4)
    while (y4 < 4) {
        led.plot(x4, y4)
        basic.pause(100)
        led.unplot(x4, y4)
        y4 += 1
        led.plot(x4, y4)
    }
    while (y4 > 0) {
        led.plot(x4, y4)
        basic.pause(100)
        led.unplot(x4, y4)
        y4 += -1
        led.plot(x4, y4)
    }
})
