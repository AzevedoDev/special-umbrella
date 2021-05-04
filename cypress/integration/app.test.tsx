/// <reference types="cypress"/>

/* eslint-disable no-undef */
beforeEach(() => {
  cy.viewport(1280, 900)
})
describe('<App/>', () => {
  it('should render mega-sena screen', () => {
    cy.visit('http://localhost:3000')

    cy.get('h1').contains('MEGA-SENA')
  })
  it('should render a quina screen after select quina option', () => {
    cy.visit('http://localhost:3000')

    cy.get('select').last().select('1')

    cy.url().should('include', '/concurso/quina')
  })
  it('should render a lotomania screen after select lotomania option', () => {
    cy.visit('http://localhost:3000')

    cy.get('select').last().select('3')

    cy.url().should('include', '/concurso/lotomania')
  })
  it('should render mega-sena screen in mobile mode', () => {
    cy.visit('http://localhost:3000')

    cy.viewport('iphone-x', 'portrait')

    cy.get('h1').contains('MEGA-SENA')
  })
})

export {}
