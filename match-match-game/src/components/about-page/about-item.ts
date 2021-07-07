import { BaseComponent } from '../base-components';
import { NumberStep } from './number-step';
import { TextStep } from './text-step';

export class AboutItem extends BaseComponent {
  private readonly numberStep: NumberStep;

  private textStep: TextStep;

  constructor(options:{ image: string, textStepInner: string, numberStepInner: number, style: string[] }) {
    super('div', ['about-point']);

    const instruction = new BaseComponent('div', ['instruction', 'Roboto-14-21'].concat(options.style));
    this.element.appendChild(instruction.element);

    this.numberStep = new NumberStep('');
    instruction.element.appendChild(this.numberStep.element);

    this.textStep = new TextStep('');
    instruction.element.appendChild(this.textStep.element);

    this.textStep.element.innerHTML = options.textStepInner;
    this.numberStep.element.innerHTML = options.numberStepInner.toString();

    const img = new BaseComponent('img', ['image-instruction']);
    img.element.setAttribute('src', options.image);
    this.element.appendChild(img.element);
  }
}
