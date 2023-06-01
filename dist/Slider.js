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
        var _a, _b, _c;
        this.currentSlideEl = document.createElement('div');
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
        this.slider = document.getElementById(this.options.root);
        if (this.slider) {
            this.slider.style.height = (_b = `${(_a = this.options) === null || _a === void 0 ? void 0 : _a.height}px`) !== null && _b !== void 0 ? _b : '400px';
            this.slider.style.width = (_c = `${this.options.width}px`) !== null && _c !== void 0 ? _c : '700px';
            this.slider.innerHTML = '';
            const initSlide = this.createSlide(options.slides[0]);
            this.slider.appendChild(initSlide);
        }
        this.interval = setInterval(() => this.showSlide(), options.delay);
    }
    showSlide() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.options.slides.length - 1 === this.currentSlide) {
                clearTimeout(this.interval);
                return;
            }
            const slider = this.slider;
            if (slider) {
                const nextSlide = this.options.slides[this.currentSlide + 1];
                const nextSlideEl = this.createSlide(nextSlide);
                slider.appendChild(nextSlideEl);
                nextSlideEl.classList.add('slider-slide-in');
                setTimeout(() => {
                    setTimeout(() => {
                        if (slider.childElementCount > 1) {
                            slider.removeChild(slider.firstElementChild);
                        }
                    }, 1000);
                }, 10);
                this.currentSlide = this.currentSlide + 1;
            }
        });
    }
    createSlide(slide) {
        var _a, _b;
        const slideEl = document.createElement('div');
        slideEl.classList.add('slider-slide');
        slideEl.style.background = slide.color;
        slideEl.innerText = slide.text;
        slideEl.style.width = (_a = `${this.options.width}px`) !== null && _a !== void 0 ? _a : '700px';
        slideEl.style.height = (_b = `${this.options.height}px`) !== null && _b !== void 0 ? _b : '400px';
        return slideEl;
    }
}
