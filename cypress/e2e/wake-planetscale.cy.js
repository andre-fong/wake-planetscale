describe("Wake Planetscale DB", () => {
  it("Visits UniSpaces and wakes database", () => {
    cy.intercept("/api/sessions").as("session");

    cy.visit("https://uni-spaces.vercel.app/");
    
    cy.get("nav").contains("Sign in").click();
    cy.get("#username").clear().type("test");
    cy.get("#password").clear().type("test123");
    cy.contains("button", "Confirm").click();
    cy.contains("Successfully signed in");

    cy.wait(5000);
    cy.wait("@session");
    cy.wait(3000);

    cy.get(`img[alt="test's profile"]`).click();
    cy.contains("Sign out").click();

    cy.wait(1000);
  });
});
