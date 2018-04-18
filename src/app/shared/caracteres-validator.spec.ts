import { VerifierCaracteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {

    it('chaine vide invalide', () => {
        let control = {value: ""};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['valide']).toBe(false);
    })

    it('chaine avec 10 espaces invalide', () => {
        let control = {value: "          "};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['valide']).toBe(false);
    })

    it('Phrase avec des mots valide', () => {
        let control = {value: "Bonjour et bonne journee"};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['valide']).toBe(true);
    })

    it('Phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = {value: "   Bonjour bonne journee   "};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['valide']).toBe(true);
    })

});