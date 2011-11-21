#pragma strict

var interval : int;
var counter : int;

private var acc : float;
private var state : boolean;

function OnClick() {
    state = !state;
}

function OnClock(delay : int) {
    if (++counter >= interval) {
        if (state) {
            audio.Play(delay);
            acc = 1.0;
        }
        counter = 0;
    }
}

function Update() {
    acc = EaseOut(acc, 0.0, -10.0);

    transform.localScale = Vector3.one * (1.0 + acc * 0.5);
    renderer.material.color = Color(1.0, 1.0 - acc, state ? 0.0 : 1.0);

    if (state) {
        transform.localRotation *= Quaternion.AngleAxis(Time.deltaTime * 90.0, Vector3.up);
        transform.localRotation *= Quaternion.AngleAxis(Time.deltaTime * 10.0, Vector3.right);
    }
}

private function EaseOut(current : float, target : float, coeff : float) : float {
    return target - (target - current) * Mathf.Exp(coeff * Time.deltaTime); 
}
