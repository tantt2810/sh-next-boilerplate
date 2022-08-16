describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("Brings header", () => {
        cy.getBySel("main-heading").should("contain.text", "suitabilityHub");
    });

    it("Should have icons", () => {
        cy.getBySel("icon").should("have.length", 6);
    });
});
