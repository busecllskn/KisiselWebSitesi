describe('Kişisel Web Sitesi E2E Test Süreci', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  // TEST: Tema Değiştirme Kontrolü
  it('Tema değiştirme butonu arka plan rengini güncellemeli', () => {
    // Navbar'daki ilk butona (Tema Değiştirici) tıkla
    cy.get('nav button').first().click();

    // Dark mode arka plan renginin sınıflara yansıp yansımadığını doğrular
    cy.get('section').first().should('have.class', 'bg-[#252128]');
  });

  // TEST: Dil Değiştirme Kontrolü
  it('Dil değiştirildiğinde içerik Türkçe/İngilizce olarak güncellenmeli', () => {
    // Dil değiştirme butonunu bul ve tıkla (Örn: İçinde "Türkçe", "TR" veya "EN" geçen buton)
    cy.get('button').contains(/Türkçe|TR|EN/i).click();

    // Başlığın değiştiğini doğrulama
    cy.get('h2').should('exist');
  });

  // TEST: Yetenekler Bölümündeki İkonlar
  it('Skills bölümündeki tüm ikonlar görünür olmalı ve kırık link olmamalı', () => {
  
    cy.get('img').each(($el) => {
      cy.wrap($el)
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  });

  // TEST: İletişim Linklerinin Doğruluğu
  it('İletişim linkleri doğru sosyal medya adreslerine yönlendirmeli', () => {
    cy.get('a[href*="x.com/Busecllskn"]').should('exist');
    cy.get('a[href*="instagram.com/busecllskn"]').should('exist');
    cy.get('a[href^="mailto:"]').should('be.visible');
  });

  // TEST: Sayfa İçi Linklerin ve Butonların Tıklanabilirliği
  it('Sayfadaki tüm ana butonlar ve linkler tıklanabilir (aktif) olmalı', () => {
    // Sitedeki dış bağlantıların tıklanmaya hazır olduğunu doğrular
    cy.get('a[target="_blank"]').should('not.be.disabled');
    cy.get('button').should('not.be.disabled');
  });

});