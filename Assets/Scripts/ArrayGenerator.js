#pragma strict

var notePrefab : GameObject;
var clips : AudioClip[];

function Start() {
    for (var row = 0; row < clips.Length; row++) {
        for (var col = 0; col < 16; col++) {
            var position = Vector3(1.5 * col, 2.0 * row, 0);
            var note = Instantiate(notePrefab, position, Quaternion.identity);
            note.transform.parent = transform.parent;

            note.audio.clip = clips[row];
            note.GetComponent.<Note>().counter = 15 - col;
        }
    }
}
