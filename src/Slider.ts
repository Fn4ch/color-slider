export interface IOptions {
    slides: ISlide[]
    delay: number
    root: string
    width?: number
    height?: number
}

export interface ISlide {
    color: string
    text: string
}

export class Slider {
    options: IOptions
    currentSlide: number
    interval: NodeJS.Timeout
    currentSlideEl: HTMLElement = document.createElement('div')
    slider: HTMLElement | null
    constructor(options: IOptions) {
        if (options.slides.length === 0) {
            throw new Error('Required option slides is empty!')
        }
        if (!options.root) {
            throw new Error('Required option root is empty!')
        }
        if (!options.delay || options.delay < 1) {
            throw new Error('Required option delay is not defined!')
        }
        this.options = options
        this.currentSlide = 0
        this.slider = document.getElementById(this.options.root)
        if (this.slider) {
            this.slider.style.height = `${this.options?.height}px` ?? '400px'
            this.slider.style.width = `${this.options.width}px` ?? '700px'
            this.slider.innerHTML = ''
            const initSlide = this.createSlide(options.slides[0])
            this.slider.appendChild(initSlide)
        }
        this.interval = setInterval(() => this.showSlide(), options.delay)
    }

    private async showSlide() {
        if (this.options.slides.length - 1 === this.currentSlide) {
            clearTimeout(this.interval)
            return
        }
        const slider = this.slider
        if (slider) {
            const nextSlide = this.options.slides[this.currentSlide + 1]

            const nextSlideEl = this.createSlide(nextSlide)

            slider.appendChild(nextSlideEl)

            nextSlideEl.classList.add('slider-slide-in')

            setTimeout(() => {
                setTimeout(() => {
                    if (slider.childElementCount > 1) {
                        slider.removeChild(slider.firstElementChild!)
                    }
                }, 1000);
            }, 10);

            this.currentSlide = this.currentSlide + 1
        }
    }

    private createSlide(slide: ISlide): HTMLElement {
        const slideEl = document.createElement('div')
        slideEl.classList.add('slider-slide')
        slideEl.style.background = slide.color
        slideEl.innerText = slide.text
        slideEl.style.width = `${this.options.width}px` ?? '700px'
        slideEl.style.height = `${this.options.height}px` ?? '400px'

        return slideEl
    }
}
