const phrases = [
    "a Graphic Designer.",
    "a Creative.",
    "an Illustrator.",
    "a Problem Solver.",
    "a Visual Artist."
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedTextElement = document.querySelector('.typed-text');
  const typingSpeed = 100; // Speed of typing in milliseconds
  const deletingSpeed = 50; // Speed of deleting
  const pauseTime = 2000; // Pause before deleting
  
  function type() {
    const currentPhrase = phrases[phraseIndex];
  
    if (isDeleting) {
      // Remove characters
      typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add characters
      typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
  
    // Determine typing speed
    let speed = isDeleting ? deletingSpeed : typingSpeed;
  
    // Check if word is complete
    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of word
      speed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500; // Brief pause before starting next word
    }
  
    setTimeout(type, speed);
  }
  
  // Start the typing effect when page loads
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 1000); // Start after 1 second
  });