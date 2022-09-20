basic.forever(function () {
    if (input.temperature() > 30) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
})
