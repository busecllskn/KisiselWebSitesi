describe("Kişisel Web Sitesi E2E Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  // Tema Değiştirme
  it("Tema değiştirme butonu çalışmalı", () => {
    cy.get("nav button").first().click();
    cy.get("html").should("have.class", "dark");
  });

  // Dil Değiştirme
  it("Dil değiştirildiğinde içerik güncellenmeli", () => {
    cy.contains("button", /Türkçe|TR|EN/i).click();
    cy.get("h1, h2").should("be.visible");
  });

  // Skills ikonları
  it("Skills bölümündeki ikonlar görünür olmalı", () => {
    cy.contains("section", /Skills|Yetenekler/i)
      .find("img")
      .each(($img) => {
        cy.wrap($img)
          .should("be.visible")
          .and(($el) => {
            expect($el[0].naturalWidth).to.be.greaterThan(0);
          });
      });
  });

  // Sosyal medya linkleri
  it("İletişim linkleri doğru olmalı", () => {
    cy.get('a[href*="x.com/Busecllskn"]')
      .should("exist")
      .and("have.attr", "target", "_blank");

    cy.get('a[href*="instagram.com/busecllskn"]')
      .should("exist")
      .and("have.attr", "target", "_blank");

    cy.get('a[href^="mailto:"]')
      .should("exist")
      .and("have.attr", "href")
      .and("include", "mailto:");
  });

  // Linkler ve butonlar aktif olmalı
  it("Sayfadaki butonlar ve linkler aktif olmalı", () => {
    cy.get("button").each(($btn) => {
      cy.wrap($btn).should("be.visible").and("not.be.disabled");
    });

    // Sadece gerçek yönlendirme hedefi olan dış bağlantıları kontrol eder
    cy.get('a[target="_blank"]').each(($link) => {
      cy.wrap($link)
        .should("have.attr", "href")
        .and("not.be.empty");
    });
  });
});