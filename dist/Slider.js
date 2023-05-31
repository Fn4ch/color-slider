var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Slider {
    constructor(options) {
        if (options.slides.length === 0) {
            throw new Error('Required option slides is empty!');
        }
        if (!options.root) {
            throw new Error('Required option root is empty!');
        }
        if (!options.delay) {
            throw new Error('Required option delay is empty');
        }
        this.options = options;
        this.currentSlide = 0;
        this.interval = setInterval(() => this.showSlide(), 2000);
    }
    showSlide() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const slider = document.getElementById(this.options.root);
            const slides = this.options.slides;
            if (slider) {
                slider.style.height = (_b = `${(_a = this.options) === null || _a === void 0 ? void 0 : _a.height}px`) !== null && _b !== void 0 ? _b : '400px';
                slider.style.width = (_c = `${this.options.width}px`) !== null && _c !== void 0 ? _c : '700px';
                const slide = slides[this.currentSlide];
                const nextSlide = slides[this.currentSlide + 1];
                const currentSlideEl = this.createSlide(slide);
                const nextSlideEl = this.createSlide(nextSlide);
                slider.innerHTML = '';
                slider.appendChild(currentSlideEl);
                slider.appendChild(nextSlideEl);
                currentSlideEl.classList.add('slider-slide-active');
                nextSlideEl.classList.add('slider-slide-hidden');
                setTimeout(() => {
                    currentSlideEl.style.opacity = '0';
                    nextSlideEl.style.opacity = '1';
                    setTimeout(() => {
                        currentSlideEl.remove();
                    }, 500);
                }, 10);
                this.currentSlide = this.currentSlide + 1;
            }
        });
    }
    createSlide(slide) {
        var _a;
        const slideEl = document.createElement('div');
        slideEl.classList.add('slider-slide');
        slideEl.style.background = slide.color;
        slideEl.innerText = slide.text;
        slideEl.style.width = (_a = `${this.options.width}px`) !== null && _a !== void 0 ? _a : '700px';
        return slideEl;
    }
}
