function AudioPronunciation({ audio }) {
  const phoneticSound = new Audio(audio);
  return (
    <button
      disabled={!audio}
      className={audio ? "audio-pronunciation" : "audio-pronunciation disabled"}
      onClick={() => phoneticSound.play()}
    >
      <span
        className={
          audio ? "audio-pronunciation__bg" : "audio-pronunciation__bg greyOut"
        }
      ></span>
      <span
        className={
          audio ? "audio-pronunciation__fg" : "audio-pronunciation__fg greyOut"
        }
      ></span>
    </button>
  );
}

export default AudioPronunciation;
