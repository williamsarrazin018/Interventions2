import { VerifierCaracteresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {

    it('chaine vide invalide', () => {
        let control = {value: ""};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['espace']).toBeFalsy;
    })

    it('chaine avec 10 espaces invalide', () => {
        let control = {value: "          "};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result['espace']).toBeFalsy;
    })

    it('Phrase avec des mots valide', () => {
        let control = {value: "Bonjour et bonne journee"};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result).toBeNull;
    })

    it('Phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = {value: "   Bonjour bonne journee   "};
        let validator = VerifierCaracteresValidator.sansEspace();
        let result = validator(control as AbstractControl);
        expect(result).toBeNull;
    })

});

describe('longueurMinimum Validator', () => {

    it('expression avec 1 espace et 2 caracteres invalide', () => {
        let control = {value: " xx"};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMin']).toBe(false);
    })

    it('expression avec 2 espaces et 1 caractere invalide', () => {
        let control = {value: "  x"};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMin']).toBe(false);
    })

    it('expression avec 3 espaces et 3 caracteres valide', () => {
        let control = {value: "   aaa"};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result).toBe(null);
    })

    it('expression avec 5 espaces et 5 caracteres et 5 espaces valide', () => {
        let control = {value: " ab"};
        let validator = VerifierCaracteresValidator.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMin']).toBe(false);
    })

});