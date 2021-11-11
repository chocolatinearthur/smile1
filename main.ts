input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B C5 D F C E G F ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B F F G E A D G ", 120)
})
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
})
