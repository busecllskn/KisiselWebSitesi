describe("Kişisel Web Sitesi E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Ana sayfa ve ana başlık yükleniyor", () => {
    cy.contains("Buse Çalışkan").should("be.visible");
  });

  it("Tema değiştirme butonu çalışmalı", () => {
    cy.get("button").contains(/🌙|☀️|dark|light|tema/i).click();
  });

  it("Dil seçeneği çalışmalı", () => {
    cy.get("button, select").contains(/EN|TR|Dil|Language/i).click();
  });

  it("İletişim formu ve mesaj alanı doldurulabilmeli ve gönderilebilmeli", () => {
    cy.get('input[name="name"]').type("Test Kullanıcı");
    cy.get('input[name="email"]').type("test@test.com");
    cy.get('textarea[name="message"]').type("Bu bir test mesajıdır.");
    cy.get('form').submit();
  });
});