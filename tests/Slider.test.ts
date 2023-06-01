
import { expect, jest, test, describe, beforeEach } from '@jest/globals'
import { Slider, IOptions, ISlide } from '../src/Slider'


const mockDocument = {
    createElement: jest.fn(),
    getElementById: jest.fn()
};


(global as any).document = mockDocument

describe('Slider', () => {
    let options: IOptions
    beforeEach(() => {
        mockDocument.createElement.mockClear()
        mockDocument.getElementById.mockClear()

        options = {
            slides: [
                { color: 'red', text: 'Slide 1' },
                { color: 'blue', text: 'Slide 2' },
                { color: 'green', text: 'Slide 3' },
            ],
            delay: 1000,
            root: 'slider',
            width: 800,
            height: 600,
        }
    })


    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('constructor', () => {
        test('throws an error if slides option is empty', () => {
            const options: IOptions = {
                slides: [],
                delay: 2000,
                root: 'slider'
            }

            expect(() => new Slider(options)).toThrow('Required option slides is empty!')
        })

        test('throws an error if root option is empty', () => {
            const options: IOptions = {
                slides: [{ color: 'red', text: 'Slide 1' }],
                delay: 2000,
                root: ''
            }

            expect(() => new Slider(options)).toThrow('Required option root is empty!')
        })

        test('throws an error if delay option is empty', () => {
            const options: IOptions = {
                slides: [{ color: 'red', text: 'Slide 1' }],
                delay: 0,
                root: 'slider'
            }

            expect(() => new Slider(options)).toThrow('Required option delay is not defined!')
        })
    })
})
