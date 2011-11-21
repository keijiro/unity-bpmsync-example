#pragma strict

private static var lowestFPS : int = 20;    // 想定しうる最低の FPS
private static var bpm : float = 120.0;     // BPM （現仕様では変更不可）

private var nextClock : float;              // 次のクロックを打つ時刻

function Update() {
    if (Time.time + 1.0 / lowestFPS > nextClock) {
        var delay = audio.clip.samples - audio.timeSamples;
        BroadcastMessage("OnClock", delay);
        nextClock += 60.0 / bpm / 4;
    }
}
