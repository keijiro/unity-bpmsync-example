#pragma strict

var interval : int;
var counter : int;
var state : boolean;

private var param : float;

function OnClick() {
    state = !state;
}

function OnClock(delay : int) {
    if (++counter >= interval) {
        if (state) {
            audio.Play(delay);
            param = 1.0;
        }
        counter = 0;
    }
}

function Update() {
    param *= Mathf.Exp(-5.0 * Time.deltaTime);

    transform.localScale = Vector3.one * (1.0 + param * 0.5);
    renderer.material.color = Color(1.0, 1.0 - param, state ? 0.0 : 1.0);

    if (state) {
        transform.localRotation *=
            Quaternion.AngleAxis(Time.deltaTime * 90.0, Vector3.up) *
            Quaternion.AngleAxis(Time.deltaTime * 10.0, Vector3.right);
    } else {
        transform.localRotation = Quaternion.identity;
    }
}
