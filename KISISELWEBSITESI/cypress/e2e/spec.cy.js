describe("Kişisel Web Sitesi Testleri", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173");
  });

  it("Ana sayfa ve başlıklar yükleniyor", () => {
    cy.contains("Buse Çalışkan").should("be.visible");
    cy.contains("Frontend").should("be.visible");
  });

  it("Tema değiştirme butonu çalışmalı", () => {
    cy.get("button").contains(/theme|dark|light|tema|🌙|☀️/i).click();
  });

  it("Dil değiştirme seçeneği çalışmalı", () => {
    cy.get("button, select, a").contains(/EN|TR|Lang|Language|Türkçe|English|Dil/i).click();
  });

  it("İletişim formu ve metin alanı", () => {
    cy.get('input[name="name"]').type("Buse");
    cy.get('input[name="email"]').type("buse@example.com");
    cy.get('textarea[name="message"]').type("Merhaba, portfolyonuz harika görünüyor!");
    cy.get('form').submit();
  });
});