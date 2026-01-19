input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
})
let strip: neopixel.Strip = null
basic.setLedColors(0xffffff, 0xffffff, 0xffffff)
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    if (input.soundLevel() >= 20) {
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
    }
})
