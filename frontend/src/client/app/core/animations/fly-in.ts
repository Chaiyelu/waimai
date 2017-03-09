import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

export const flyIn = trigger('flyIn', [
  state('in', style({ transform: 'translateY(0)' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
      style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
      style({ opacity: 0, transform: 'translateY(100%)', offset: 1.0 })
    ]))
  ])
]);

export const flyInRight = trigger('flyInRight', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ transform: 'translateX(100%)', offset: 0 }),
      style({ transform: 'translateX(0)', offset: 1.0 })
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(100%)', offset: 1.0 })
    ]))
  ])
]);

export const moveIn = trigger('moveIn', [
  state('in', style({ transition: 'all 0.4s linear' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ opacity: 0, transform: 'translate3D(24px, 0, 0)', offset: 0 }),
      style({ opacity: 1, transform: 'translate3D(0, 0, 0)', offset: 1.0 })
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ opacity: 1, transform: 'translate3D(0, 0, 0)', offset: 0 }),
      style({ opacity: 0, transform: 'translate3D(24px, 0, 0)', offset: 1.0 })
    ]))
  ])
]);

/*export const roll = trigger('roll', [
  state('in', style({ transition: 'all 0.4s linear' })),
  transition('void => *', [
    animate(400, keyframes([
      style({ transform: 'rotate(180)'}),
      style({ transform: 'rotate(0)'})
    ]))
  ]),
  transition('* => void', [
    animate(400, keyframes([
      style({ transform: 'rotate(0)'}),
      style({ transform: 'rotate(180)'})
    ]))
  ])
]);*/

export const roll = trigger('roll', [
  state('inactive', style({ transition: 'all 0.4s linear' })),
  state('active', style({ transition: 'all 0.4s linear' })),
  transition('active => inactive', [
    animate(400, keyframes([
      style({ transform: 'rotate(180)'}),
      style({ transform: 'rotate(0)'})
    ]))
  ]),
  transition('inactive => active', [
    animate(400, keyframes([
      style({ transform: 'rotate(0)'}),
      style({ transform: 'rotate(180)'})
    ]))
  ])
]);

export const flyShowRight = trigger('flyShowRight', [
  state('on', style({ transform: 'translateX(0)', display: 'block' })),
  state('off', style({ transform: 'translateX(100%)', display: 'none' })),
  transition('off => on', [
    animate(400, keyframes([
      style({ transform: 'translateX(100%)', display: 'none', offset: 0 }),
      style({ transform: 'translateX(0)', display: 'block', offset: 1.0 })
    ]))
  ]),
  transition('on => off', [
    animate(400, keyframes([
      style({ transform: 'translateX(0)', display: 'block', offset: 0 }),
      style({ transform: 'translateX(100%)', display: 'none', offset: 1.0 })
    ]))
  ])
]);
