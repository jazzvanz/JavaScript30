// Get Our Elements
const videoPlayer = document.querySelector('.player')
const video = videoPlayer.querySelector('.viewer')
const progress = videoPlayer.querySelector('.progress')
const progressBar = videoPlayer.querySelector('.progress__filled')

const playPauseButton = videoPlayer.querySelector('.toggle')
const skipButtons = videoPlayer.querySelectorAll(`[data-skip]`)
const ranges = videoPlayer.querySelectorAll(`.player__slider`)


// Build out our Functions

// Play/Pause Video
function togglePlay() {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// Update Play/Pause button icon
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playPauseButton.textContent = icon
}

//Skip around the video
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle Volume & 
function handleRangeEvent() {
  video[this.name] = this.value
}

//Update progressbar
function handleProgress() {
  const progressPrecent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${progressPrecent}%`
}

//Scrub Bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}
// Hook up the event Listners

// 1. Just the play/Pause Button
playPauseButton.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)

// Update play/pause button to reflect play/pause status
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

// 2. Volume and Range Bars
ranges.forEach(range => range.addEventListener('change', handleRangeEvent))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeEvent))

// 3. Skip back 10 second, skip forward 25 seconds. 
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))

// 4. Update Progress Bar
video.addEventListener('timeupdate', handleProgress)

// 5. Run Scrub on click of Progress Bar
let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
