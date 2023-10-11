const keySounds = {
    a: 'clap',
    s: 'hihat',
    d: 'kick',
    f: 'openhat',
    g: 'boom',
    h: 'ride',
    j: 'tom',
    k: 'tink',
  };
  
document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    const soundId = keySounds[key];
  
    if (soundId) {
      const sound = document.getElementById(soundId);
      if (sound) {
        sound.play();
      }
    }
  });
  