describe("Ping-test", () => {
  it("Failing test - Use cy.tick to advance in time, making application do a rest call without waiting for timeout to occur", () => {
    cy.intercept("GET", "**/ping").as("pingRoute");
    cy.visit("http://localhost:4200");
    const now = new Date();
    cy.clock(now);
    cy.tick(15000);
    cy.wait("@pingRoute");

    cy.clock().invoke("restore");
  });

  it("Working test - Increased timeout for cy.wait to fail so timeout in application occurs and make GET request", () => {
    cy.intercept("GET", "**/ping").as("pingRoute");
    cy.visit("http://localhost:4200");
    const now = new Date();
    cy.clock(now);
    cy.tick(15000);
    cy.wait("@pingRoute", { requestTimeout: 15000 });

    cy.clock().invoke("restore");
  });
});
