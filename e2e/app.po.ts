import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('stk-root h5')).getText();
  }

  setChampsValidesScenarioNominal() : void {
    element(by.id('prenom')).sendKeys('tonprenom');
    element(by.id('nom')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeID')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('notifierID')).get(0).click();
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 

   setChampsValidesScenarioAlternatifParMessageTexte() : void {
    element(by.id('prenom')).sendKeys('tonprenom');
    element(by.id('nom')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeID')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('notifierID')).get(2).click();
    element(by.id('telephoneId')).sendKeys('5141231234');
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 
   
   setChampsValidesScenarioAlternatifParCourriel() : void {
    element(by.id('prenom')).sendKeys('tonprenom');
    element(by.id('nom')).sendKeys('tonnom');
    // Sélectionner le X élément dans la zone de liste déroulante
    element(by.id('typeProblemeID')).all(by.tagName('option')).get(2).click();
    // Cliquer sur le bouton radio voulu
    element.all(by.id('notifierID')).get(1).click();
    element(by.id('courrielId')).sendKeys('aa@bbb.com');
    element(by.id('courrielConfirmationId')).sendKeys('aa@bbb.com');
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');
   } 
   
   boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  }  

  setZoneDescriptionProblemeCaracteresInsuffisant() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('XXXX');
  }

  setZoneDescriptionProblemeCaracteresSuffisant() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('XXXXXXXXX');
  }

  obtenirClasseDescriptionProbleme()   { 
    return element(by.id('descriptionProblemeId')).getAttribute("class");
  } 

}
