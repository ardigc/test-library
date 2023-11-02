import { MotionSensor, VideoRecorder, SurveillanceController } from "../surveillanceControler";
describe.skip('The suveillance controler', () => {
    let sensor: MotionSensor
    let recorder: VideoRecorder
    let controller: SurveillanceController
    beforeEach(() => {
        sensor = new FakeSensor()
        recorder = new FakeRecorder()
        controller = new SurveillanceController(sensor, recorder)
    })
    it('ask the recorder to stop when sensor detects no motion', () => {
        const spyRecorder = jest.spyOn(recorder, 'stopRecording')
        controller.recordMotion()
        expect(spyRecorder).toHaveBeenCalled()
    })
    it('ask the recorder to start when sensor detects motion', () => {
        const spyRecorder = jest.spyOn(recorder, 'startRecording');
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion')
        stubSensor.mockImplementation(() => true)
        controller.recordMotion();
        
        expect(spyRecorder).toHaveBeenCalled();
    })
    it('check the sensor status one per second', () => {
        const spySensor = jest.spyOn(sensor, 'isDetectingMotion')
        const numberOfSeconds=3
        controller.recordMotion(numberOfSeconds);
        
        expect(spySensor).toHaveBeenCalledTimes(numberOfSeconds);
    })
    it('ask the recorder to stop when sensor throw unespected error', () => {
        const stubSensor = jest.spyOn(sensor, 'isDetectingMotion')
        stubSensor.mockImplementation(()=>{
            throw new Error("Unespected error");   
        })
        const spyRecorder = jest.spyOn(recorder, 'startRecording');
        stubSensor.mockImplementation(() => true)
        controller.recordMotion();
        
        expect(spyRecorder).toHaveBeenCalled();
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