import { AppPage } from './app.po';

describe('interventions App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('doit afficher le titre du formulaire Déclarer un problème', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Déclarer un problème');
  });

  it('doit activer le bouton Sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });   

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par courriel', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();                  
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  

  it('zone DESCRIPTION DU PROBLÈME a une bordure verte si nombre de caractères suffisant', () => {
    page.setZoneDescriptionProblemeCaracteresSuffisant();  
    expect(page.obtenirClasseDescriptionProbleme()).toContain('is-valid');
  }); 

  it('zone DESCRIPTION DU PROBLÈME a une bordure rouge si nombre de caractères insuffisant', () => {
    page.setZoneDescriptionProblemeCaracteresInsuffisant();  
    expect(page.obtenirClasseDescriptionProbleme()).toContain('is-invalid');
  }); 


});
