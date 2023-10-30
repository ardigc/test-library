import { MotionSensor, VideoRecorder, SurveillanceController } from "../surveillanceControler";
describe('The suveillance controler', () => {
    it('ask the recorder to stop when sensor detects no motion', () => {
        const sensor = new stubSensorDetectingNoMotion()
        const recorder = new spyRecording()
        const controller = new SurveillanceController(sensor, recorder)
        controller.recordMotion()
        expect(recorder.stopCalled).toBeTruthy()
    })
    it('ask the recorder to start when sensor detects motion', () => {
        const sensor = new stubSensorDetectingNoMotion()
   
        const recorder = new spyRecording()
        sensor.isDetectingMotion = () => true
        const controller = new SurveillanceController(sensor, recorder)
        controller.recordMotion()
        expect(recorder.startCalled).toBeTruthy()
    })
})
class stubSensorDetectingNoMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return false
    }
}
class stubSensorDetectingMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return true
    }
}
class spyRecording implements VideoRecorder {
    startCalled = false
    stopCalled = false
    startRecording(): void {
        this.startCalled = true
    }
    stopRecording(): void {
        this.stopCalled = true
    }
}
class FakeRecorder implements VideoRecorder {
    startRecording(): void {
        console.log('Start recording...')
    }
    stopRecording(): void {
        console.log('Stop recording...')
    }
}