import { mount } from 'cypress/vue'
import BaseRadio from '../BaseRadio.vue'

let label = "Cucumber";

describe('<BaseRadio>', () => {
  it('renders properly', () => {
    mount(BaseRadio, { props: { label, modelValue: 1, value: 1 } });
    cy.get('span').should('contain.text', 'Cucumber');
  })

  it('renders checked properly', () => {
    mount(BaseRadio, { props: { label, modelValue: 1, value: 1 } });
    cy.get('input').should('be.checked');
  })

  it('renders unchecked properly', () => {
    mount(BaseRadio, { props: { label, modelValue: 1, value: 2 } });
    cy.get('input').should('not.be.checked');
  })

  it('can be checked', () => {
    mount(BaseRadio, { props: { label, modelValue: 1, value: 2 } });
    cy.get('input').click();
    cy.get('input').should('be.checked');
  })
})