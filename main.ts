basic.forever(function () {
    if (input.lightLevel() > 100) {
        while (true) {
            basic.showIcon(IconNames.Heart)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.Heart)
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
