#pragma strict

private static var kLowestFPS : int = 20;
private static var kBpm : float = 120.0;

private var nextClock : float;

function Update() {
    if (Time.time + 1.0 / kLowestFPS > nextClock) {
        var delay = audio.clip.samples - audio.timeSamples;
        BroadcastMessage("OnClock", delay);
        nextClock += 60.0 / kBpm / 4;
    }
}
