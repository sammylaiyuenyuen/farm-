input.onButtonPressed(Button.A, function () {
    koi.koi_addtag("cat")
})
input.onButtonPressed(Button.AB, function () {
    koi.koi_cls_save("class.json")
})
input.onButtonPressed(Button.B, function () {
    koi.koi_addtag("dog")
})
basic.pause(1000)
koi.koi_init(SerialPin.P2, SerialPin.P12)
basic.pause(100)
basic.showIcon(IconNames.Yes)
koi.koi_reset_cls()
basic.forever(function () {
	
})
