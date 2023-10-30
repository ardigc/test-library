import { MotionSensor,VideoRecorder, SurveillanceController} from "../surveillanceControler";
describe('The suveillance controler', () => {
    it('ask the recorder to stop when sensor detects no motion', () => {
        const sensor = new FakeSensor()
        let called = false
        const saveCall = () => {
            called = true
        }
        const recorder = new FakeRecorder()
        recorder.stopRecording = saveCall
        const controller = new SurveillanceController(sensor, recorder)
        controller.recordMotion()
        expect(called).toBeTruthy()
    })
    it('ask the recorder to start when sensor detects motion', () => {
        const sensor = new FakeSensor()
        let called = false
        const saveCall = () => {
            called = true
        }
        const recorder = new FakeRecorder()
        sensor.isDetectingMotion=()=>true
        recorder.startRecording = saveCall
        const controller = new SurveillanceController(sensor, recorder)
        controller.recordMotion()
        expect(called).toBeTruthy()
    })
})
class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean {
        return false
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