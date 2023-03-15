
/// <reference types= "cypress"/>


 function GoToPage() {
  
  cy.visit("http://opencart.abstracta.us/").as('url')

}

//Suite
describe('Primera suite de pruebas', () => {
  
  //Test 1
  it('primer prueba', () => {
    GoToPage()
    //Seleccionar desktop
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').as('DesktopMenu')
  cy.get('@DesktopMenu').click()
    //Seleccionar todos los elementos de la categoria
    cy.get('.open > .dropdown-menu > .see-all').as('AllElements')
    cy.get('@AllElements').click()

    //Seleccionamos una computadora
    cy.get('#content>div:nth-child(7)>div:nth-child(1)>div>div.image>a>img').as('Computer')
    cy.get('@Computer').click()

    //Se agrega al carrito 
    cy.get('#button-cart').as('BotonCart')
    cy.get('@BotonCart').click()
  })

  it('Segunda prueba contabilizar elementos page principal', ()=>{
GoToPage()
//Obtenemos el elemento ,product-thumb 
cy.get(".product-thumb").as('productosHome')
cy.get("@productosHome").should('have.length', 4);

  })


  it('Enter iphone to shopper cart into dashboard home',()=>{
GoToPage()
cy.get(".product-thumb").as('productosHome')
  })
})