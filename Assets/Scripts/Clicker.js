#pragma strict

function Update() {
    if (Input.GetButtonDown("Fire1")) {
        var screenPoint : Vector3 = Input.mousePosition;
        screenPoint.z = -Camera.main.transform.position.z;
        var point = Camera.main.ScreenToWorldPoint(screenPoint);

        var colliders = Physics.OverlapSphere(point, 0.1);
        if (colliders.Length > 0) colliders[0].gameObject.SendMessage("OnClick");
    }
}
