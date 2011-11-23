#pragma strict

var texture : Texture2D;

private var animate : boolean;
private var param : float;
private var camz : float;

function Start() {
    camz = Camera.main.transform.localPosition.z;
    Camera.main.transform.localPosition.z = 0.0;

    param = 1.0;

    while (!Input.GetButtonDown("Fire1")) yield;

    animate = true;
    yield WaitForSeconds(3.0);

    Destroy(this);
}

function Update() {
    if (animate) {
        Camera.main.transform.localPosition.z = (1.0 - param) * camz;
        param *= Mathf.Exp(-4.0 * Time.deltaTime);
    }
}

function OnGUI() {
    GUI.color = Color(1, 1, 1, param);
    GUI.DrawTexture(Rect((Screen.width - texture.width) / 2, (Screen.height - texture.height) / 2, texture.width, texture.height), texture);
}
