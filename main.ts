input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.showString("Thinking...")
    basic.showString("Your day will be great")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.showString("Thinking...")
    basic.showIcon(IconNames.Heart)
    basic.showString("things can get better, keep working hard!")
    basic.showIcon(IconNames.QuarterNote)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.showString("Thinking...")
    basic.showString("was your day bad?")
    basic.showLeds(`
        . # . # .
        # . . # #
        # # . . #
        . # . # .
        . . # . .
        `)
    basic.showString("do not get disappointed, keep moving on! :D")
    basic.showIcon(IconNames.Heart)
    basic.showString("Things will get better!")
})
basic.forever(function () {
    basic.showString("Hello! Please perform an action.")
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.EigthNote)
})
