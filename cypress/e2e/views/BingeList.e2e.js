describe('BingeList view', () => {
  it(`shows an error if genre doesn't exist`, () => {
    const genre = 'test';

    cy.server();
    cy.route({
      method: 'GET',
      url: `http://localhost:4000/movies?genre=${genre}&offset=0&limit=0`,
      status: 200,
      response: {
        error: `Genre ${genre[0].toUpperCase()}${genre.slice(1)} is unknown`,
      },
    });

    cy.visit('/')
      .getByTestId('searchbar')
      .type('test')
      .getByText(/search/i)
      .click()
      .getByText(/ *no results for genre */i);
  });

  it('can search in searchbar', () => {
    const genre = 'Action';

    cy.visit('/')
      .getByTestId('searchbar')
      .type(genre)
      .getByText(/search/i)
      .click();
  });

  it('can add favourites', () => {
    cy.getAllByAltText(/add favorite icon/i)
      .first()
      .click();
  });

  it('can remove favourites', () => {
    cy.getAllByAltText(/remove favorite icon/i)
      .first()
      .click();
  });

  it('add second movie to favourites and redirects to favourites', () => {
    cy.getAllByAltText(/add favorite icon/i)
      .eq(1)
      .click()
      .getByAltText(/favorites link page/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/favourites`);
  });
});
