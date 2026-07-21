describe("Kişisel Web Sitesi Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Ana sayfa ve başlıklar yükleniyor", () => {
    cy.contains("Buse Çalışkan").should("be.visible");
    cy.contains("Frontend").should("be.visible");
  });

  it("Tema değiştirme butonu çalışmalı", () => {
    cy.get('button.rounded-full').first().should('be.visible').click();
  });

  it("Dil değiştirme seçeneği çalışmalı", () => {
    cy.get("button, select, a").contains(/EN|TR|Lang|Language|Türkçe|English|Dil/i).first().click();
  });

  it("İletişim formu ve metin alanı", () => {
    cy.url().should("include", "/home");
    
    cy.scrollTo('bottom');
    cy.contains("Benimle iletişime geçebilirsiniz.").should('be.visible').click();
    cy.get('input[name="name"]', { timeout: 10000 }).should('be.visible').type("Buse");
    cy.get('input[name="email"]').type("buse@example.com");
    cy.get('input[name="password"]').type("Sifrem123*");
    cy.get('form').submit();
  });
});