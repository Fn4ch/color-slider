interface IOptions {
    slides: ISlide[]
    delay: number
    root: string
    width?: number
    height?: number
}

interface ISlide {
    color: string
    text: string
}

export class Slider {
    options: IOptions
    currentSlide: number
    interval: NodeJS.Timeout
    constructor(options: IOptions) {
        if (options.slides.length === 0) {
            throw new Error('Required option slides is empty!')
        }
        if (!options.root) {
            throw new Error('Required option root is empty!')
        }
        if (!options.delay) {
            throw new Error('Required option delay is empty')
        }
        this.options = options
        this.currentSlide = 0
        this.interval = setInterval(() => this.showSlide(), 2000)
    }

    private async showSlide() {
        const slider = document.getElementById(this.options.root)
        const slides = this.options.slides
        if (slider) {
            slider.style.height = `${this.options?.height}px` ?? '400px'
            slider.style.width = `${this.options.width}px` ?? '700px'

            const slide = slides[this.currentSlide]
            const nextSlide = slides[this.currentSlide + 1]

            const currentSlideEl = this.createSlide(slide)
            const nextSlideEl = this.createSlide(nextSlide)

            slider.innerHTML = ''
            slider.appendChild(currentSlideEl)
            slider.appendChild(nextSlideEl)

            currentSlideEl.classList.add('slider-slide-active')
            nextSlideEl.classList.add('slider-slide-hidden')

            setTimeout(() => {
                currentSlideEl.style.opacity = '0';
                nextSlideEl.style.opacity = '1';
                setTimeout(() => {
                    currentSlideEl.remove();
                }, 500);
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

        return slideEl
    }
}
