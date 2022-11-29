type AudioClip = "/audio/windy-mountain.mp3"

export class BackgroundAudio {
  public clip: string
  public context: AudioContext
  public source: AudioBufferSourceNode
  public isPlaying: boolean
  constructor(clip: AudioClip) {
    this.clip = clip
    this.context = new AudioContext()
    this.source = this.context.createBufferSource()
    this.isPlaying = false
  }
  public async loadSource() {
    const response = await fetch(new Request(this.clip))
    if (!response.ok) {
      console.log("Couldn't get the background audio")
      return this
    } else {
      const buffer = await response.arrayBuffer()
      this.source.buffer = await this.context.decodeAudioData(buffer)
      this.source.loop = true
      this.source.connect(this.context.destination)
      return this
    }
  }
  public play() {
    if (this.isPlaying) return this

    this.source.start(0)
    this.isPlaying = true
    return this
  }
  public stop() {
    if (!this.isPlaying) return this
    this.source.stop()
    this.isPlaying = false
    return this
  }
}
