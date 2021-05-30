import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';

const fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 }))
])

const fadeOutAnimation = animation([
    animate(300, style({ opacity: 0 }))
])

export const carouselAnimation = trigger('triggerAnimation', [
    transition('void => *', [ useAnimation(fadeInAnimation) ]),
    transition('* => void', [ useAnimation(fadeOutAnimation) ])
])