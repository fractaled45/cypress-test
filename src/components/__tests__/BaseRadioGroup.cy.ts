import { mount } from 'cypress/vue'
import BaseRadioGroup from '../BaseRadioGroup.vue'

let label = "Banana";
let options = [
  { name: 'Num1', value: 1 },
  { name: 'Num2', value: 2 },
  { name: 'Num3', value: 3 },
];

describe('<BaseRadioGroup>', () => {
  it('renders properly', () => {
    mount(BaseRadioGroup, { props: {
      label, modelValue: 1, options, value: 1,
      name: label, vertical: true
    } });
    
    cy.get('label').should('contain.text', 'Banana');
    cy.get('div:nth-of-type(1) span').should('have.value', 'Num1');
  })
})
