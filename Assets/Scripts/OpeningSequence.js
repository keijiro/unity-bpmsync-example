#pragma strict

var style : GUIStyle;

private var cameraMove : boolean;
private var guiAlpha : float;

function Start() {
    Camera.main.transform.localPosition.z = 0;
    guiAlpha = 1.0;
    while (!Input.GetButtonDown("Fire1")) yield;
    cameraMove = true;
    yield WaitForSeconds(3.0);
    Destroy(this);
}

function Update() {
    if (cameraMove) {
        Camera.main.transform.localPosition.z = EaseOut(Camera.main.transform.localPosition.z, -55.0, -4.0);
        guiAlpha = EaseOut(guiAlpha, 0.0, -4.0);
    }
}

function OnGUI() {
    GUI.color = Color(1, 1, 1, guiAlpha);
    GUI.Label(Rect(0, 0, Screen.width, Screen.height), "UNITR-606\n\nCLICK TO START", style);
}

private function EaseOut(current : float, target : float, coeff : float) : float {
    return target - (target - current) * Mathf.Exp(coeff * Time.deltaTime); 
}
