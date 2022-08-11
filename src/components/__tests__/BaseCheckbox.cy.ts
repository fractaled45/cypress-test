import { mount } from 'cypress/vue'
import BaseCheckbox from '../BaseCheckbox.vue'

let label = "Thwomp";

describe('<BaseCheckbox>', () => {
  it('renders properly', () => {
    mount(BaseCheckbox, { props: { label, modelValue: true } });
    cy.get('label').should('contain.text', 'Thwomp');
    cy.get('input').should('have.attr', 'type', 'checkbox');
  })

  it('doesn\'t display label when label is null', () => {
    mount(BaseCheckbox, { props: { } });
    cy.get('label').should('not.exist');
  })

  it('renders checked', () => {
    mount(BaseCheckbox, { props: { label, modelValue: true } });
    cy.get('input').should('be.checked');
  })

  it('renders unchecked', () => {
    mount(BaseCheckbox, { props: { label, modelValue: false } });
    cy.get('input').should('not.be.checked');
  })

  it('defaults to unchecked when modelValue is null', () => {
    mount(BaseCheckbox, { props: { label } });
    cy.get('input').should('not.be.checked');
  })

  it('renders disabled', () => {
    mount(BaseCheckbox, { props: { label, modelValue: false, disabled: true } });
    cy.get('input').should('be.disabled');
  })

  it('is not disabled by default', () => {
    mount(BaseCheckbox, { props: { label, modelValue: false } });
    cy.get('input').should('not.be.disabled');
  })

  it('can be checked', () => {
    mount(BaseCheckbox, { props: { label, modelValue: false } });
    cy.get('input').click();
    cy.get('input').should('be.checked');
  })
  
  it('can be unchecked', () => {
    mount(BaseCheckbox, { props: { label, modelValue: true } });
    cy.get('input').click();
    cy.get('input').should('not.be.checked');
  })
  
  it('displays error properly', () => {
    mount(BaseCheckbox, { props: { label, modelValue: true, error: "Harry" } });
    cy.get('p').should('contain.text', 'Harry');
  })

  it('doesn\'t display error when error is null', () => {
    mount(BaseCheckbox, { props: { label } });
    cy.get('p').should('not.exist');
  })
  
  it('doesn\'t display error when error is empty', () => {
    mount(BaseCheckbox, { props: { label, error: "" } });
    cy.get('p').should('not.exist');
  })

  it('emits update:modelValue on click with new value', () => {
    const onUpdateSpy = cy.spy().as('onUpdateSpy');
    mount(BaseCheckbox, { props: { label, 'onUpdate:modelValue': onUpdateSpy } });
    cy.get('input').click();
    cy.get('@onUpdateSpy').should('have.been.calledWith', true);
  })
})