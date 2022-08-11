import { mount } from 'cypress/vue'
import BaseCheckboxGroup from '../BaseCheckboxGroup.vue'

let label = "Trees";
let options = [
  { name: 'Fir', value: 0 },
  { name: 'Acacia', value: 1 },
  { name: 'Pine', value: 2 },
];

const optionSelector = [
  'div:nth-child(1) > div > div > div',
  'div:nth-child(2) > div > div > div',
  'div:nth-child(3) > div > div > div',
];

describe('<BaseCheckboxGroup>', () => {
  it('renders properly', () => {
    mount(BaseCheckboxGroup, { props: {
      label, modelValue: [], options,
      name: label, vertical: true
    } });
    
    cy.get('label').should('contain.text', 'Trees');
    cy.get(optionSelector[0]).find('label').should('contain.text', 'Fir');
    cy.get(optionSelector[1]).find('label').should('contain.text', 'Acacia');
    cy.get(optionSelector[2]).find('label').should('contain.text', 'Pine');

    cy.get(optionSelector[0]).find('input').should('have.attr', 'type', 'checkbox');
    cy.get(optionSelector[1]).find('input').should('have.attr', 'type', 'checkbox');
    cy.get(optionSelector[2]).find('input').should('have.attr', 'type', 'checkbox');
  })

  it('renders modelValue properly', () => {
    mount(BaseCheckboxGroup, { props: {
      label, modelValue: [0, 2], options,
      name: label, vertical: true
    } });
    
    cy.get(optionSelector[0]).find('input').should('be.checked');
    cy.get(optionSelector[1]).find('input').should('not.be.checked');
    cy.get(optionSelector[2]).find('input').should('be.checked');
  })
})
