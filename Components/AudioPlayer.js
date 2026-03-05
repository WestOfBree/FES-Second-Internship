import "./AudioPlayer.modale.css";

export default function AudioPlayer() {
    return (
        <div className="audio__player">
            <div className="audio__controls">
                <button className="audio__play-btn">Play</button>
                <button className="audio__pause-btn">Pause</button>
            </div>
        </div>
    );
}
