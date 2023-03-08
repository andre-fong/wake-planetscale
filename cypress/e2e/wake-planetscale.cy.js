describe("Wake Planetscale DB", () => {
  it("Visits UniSpaces and wakes database", () => {
    cy.visit("https://uni-spaces.vercel.app/");
    cy.get("input").clear().type("scar");
    cy.wait(3000);
    cy.contains("University of Toronto (Scarborough)").should(
      "exist.and.be.visible"
    );
    cy.contains("University of Toronto (St. George)").should("not.exist");
  });
});
