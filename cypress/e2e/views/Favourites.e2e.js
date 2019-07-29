describe('Favourites view', () => {
  it('can be accessed', () => {
    cy.visit('/favourites').getByText(/there's no favourites movies!/i);
  });

  it('redirects to BingeList view', () => {
    cy.getByTestId('backIcon')
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .getByText(/ *enter a genre to find */i);
  });

  it('adding War movies to favourites should be displayed', () => {
    cy.getByTestId('searchbar')
      .type('war')
      .getByText(/search/i)
      .click()
      .getAllByAltText(/add favorite icon/i)
      .click({ multiple: true })
      .findAllByTestId('thumbnail')
      .should($bingeListFavourites => {
        cy.getByAltText(/favorites link page/i)
          .click()
          .findAllByTestId('thumbnail')
          .should($favouritesThumbnail => {
            expect($bingeListFavourites[0].innerHTML).equals(
              $favouritesThumbnail[0].innerHTML
            );
          });
      });
  });

  it('favourites can be removed', () => {
    cy.getAllByAltText(/remove favorite icon/i)
      .click({ multiple: true })
      .getByText(/ *no favourites */i);
  });
});
