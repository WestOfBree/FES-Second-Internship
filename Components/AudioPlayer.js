import "./AudioPlayer.modale.css";

export default function AudioPlayer() {
    return (
        <>
        {/* inseert audio file on this line */}
        <div className="audio__track--wrapper">
            <figure className="audio__track--image-mask">
                <figure className="audio__track--image-border">
                <img className="audio__track--image" src={"https://www.thebookdesigner.com/wp-content/uploads/2024/05/J.R.R.Tolkien-The-Hobbit.png"} alt="Book Cover" />
                </figure>
            </figure>
            <div className="audio__track--info-wrapper">
                <div className="audio__track--title">The Hobbit</div>
                <div className="audio__track--author">J.R.R. Tolkien</div>
            </div>
        </div>
        <div className="audio__controls--wrapper">
            <div className="audio__controls">
                <button className="audio__control--button">⏮️</button>
                <button className="audio__control--button">⏯️</button>
                <button className="audio__control--button">⏭️</button>
            </div>
        </div>
        <div className="audio__progress--wrapper">
        </div>
        </>
    );
}
