# Video Setup Guide

This folder is where you'll add your personal introduction video for the portfolio.

## How to Add Your Video:

1. **Record or prepare your video** (30-60 seconds recommended)
   - Introduce yourself
   - Highlight key PPW lessons
   - Explain your career goals

2. **Convert to web-friendly format** (optional but recommended)
   - **MP4 format** (most compatible):
     ```
     introduction.mp4
     ```
   - **WebM format** (optional, for better compression):
     ```
     introduction.webm
     ```

3. **Upload the video file**
   - Place your `introduction.mp4` (or `introduction.webm`) in this folder
   - The video player will automatically detect and play it

## Video Specifications:

- **Duration**: 30-60 seconds optimal
- **Resolution**: 1280x720 (720p) or higher
- **Format**: MP4 or WebM
- **File Size**: Keep under 50MB for fast loading

## Tools to Convert/Edit Videos:

- **Online**: Clipchamp, CloudConvert, Framer
- **Desktop**:
  - ffmpeg (free): `ffmpeg -i input.mov -vcodec libx264 -acodec aac introduction.mp4`
  - HandBrake (free)
  - Adobe Premiere Pro

## Testing:

Once you upload your video:

1. Save the file to this folder as `introduction.mp4`
2. Reload your portfolio page
3. Click the play button in the "Personal Introduction" section
4. Your video should now play!

---

**Need help?** The video player supports:
✅ Play/Pause
✅ Volume control
✅ Fullscreen mode
✅ Progress bar scrubbing
✅ Multiple formats (MP4, WebM)
