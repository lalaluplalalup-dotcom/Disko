input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB_RGB)
strip.show()
if (input.soundLevel() >= 3) {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(2000)
        if (input.buttonIsPressed(Button.B)) {
            basic.pause(2000)
            if (input.buttonIsPressed(Button.AB)) {
                basic.pause(2000)
            }
        }
    }
}
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.showRainbow(1, 5000)
    strip.show()
    strip.show()
    basic.showString("party")
    basic.showIcon(IconNames.Fabulous)
    strip.setBrightness(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(1000)
    if (input.soundLevel() >= 31) {
        strip.showRainbow(1, 50000)
        for (let index = 0; index < 6000; index++) {
            strip.rotate(1)
            strip.show()
            basic.pause(5)
        }
        for (let index = 0; index < 10; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
            strip.show()
            basic.pause(50)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(50)
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            basic.pause(50)
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(50)
            strip.showColor(neopixel.colors(NeoPixelColors.Purple))
            strip.show()
            basic.pause(50)
        }
    }
})
