// Get Our Elements
const videoPlayer = document.querySelector('.player')
const video = videoPlayer.querySelector('.viewer')
const progress = videoPlayer.querySelector('.progress')
const progressBar = videoPlayer.querySelector('.progress__filled')

const playPauseButton = videoPlayer.querySelector('.toggle')
const skipButtons = videoPlayer.querySelectorAll(`[data-skip]`)
const ranges = videoPlayer.querySelectorAll(`.player__slider`)


console.log(videoPlayer, video, playPauseButton, ranges, skipButtons, progressBar, progress)

// Build out our Functions


// Hook up the event Listners

// 1. Just the play/Pause Button
playPauseButton.addEventListener('click', (e) => {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

// 2. Volume and Range Bars
ranges.forEach(range => {
  range.addEventListener('change', (e) => {
    const rangeValue = e.target.value
    if(e.target.getAttribute('name') === 'playbackRate') {
      video.playbackRate = rangeValue
    } else if(e.target.getAttribute('name') === 'volume') {
      video.volume = rangeValue
    } else {
      return
    }
  })
})

// 3. Skip back 10 second, skip forward 25 seconds. 
skipButtons.forEach(skipButton => {
  skipButton.addEventListener('click', (e) => {
    const skipAmount = parseInt(e.target.getAttribute('data-skip'))
    const currentVideoTime = video.currentTime

    if(skipAmount) {
      video.currentTime = currentVideoTime + skipAmount
    } else {
      return
    }
  })
})

// 4. Update Progress Bar
// get the total duration of the video. Divide that by 100 then update the bar every second.
// listern for when a video is playing



// 5. When you click screen

// 6. refactor into reuseable functions.

