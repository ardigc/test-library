export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;
    stopRecording(): void;
}
export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) { }

    recordMotion(numberOfSeconds:number =1) {
        Array.from({length:numberOfSeconds}, (_,i)=>i).forEach(()=>{

            try {
                
                this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording()
            } catch (error) {
                this.recorder.stopRecording()
            }
            waitOneSecond()
        })
        }
}
function waitOneSecond() {
    const aSecond = 1000;
    let startTime = new Date().getTime();
    const endTime = startTime + aSecond;
    while (startTime < endTime) {
     startTime = new Date().getTime();
    }
   }