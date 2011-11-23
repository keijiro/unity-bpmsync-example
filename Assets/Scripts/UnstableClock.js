#pragma strict

private static var kBpm : float = 120.0;

private var nextClock : float;

function Update() {
    if (Time.time > nextClock) {
        BroadcastMessage("OnClock", 0.0);
        nextClock += 60.0 / kBpm / 4;
    }
}
