def on_button_pressed_a():
    basic.show_leds("""
        # . # . #
                # . # . #
                # . # . #
                . . . . .
                # . # . #
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_string("Thinking...")
    basic.show_icon(IconNames.HEART)
    basic.show_string("Things will get better.")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    basic.show_string("Hello! Please perform an action.")
    basic.show_icon(IconNames.HAPPY)
    basic.show_icon(IconNames.QUARTER_NOTE)
    basic.show_icon(IconNames.EIGTH_NOTE)
basic.forever(on_forever)
