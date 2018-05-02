import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierCaracteresValidator {
    static sansEspace(): ValidatorFn {
        return (c: AbstractControl): {[key: string]: boolean } | null => {
            if ((c.value || '').trim().length === 0) {
                return {'espace': false};
            } else {
                return null;
            }
           
        };
    }

    static longueurMinimum(min: number): ValidatorFn {
        return (c: AbstractControl): {[key: string]: boolean } | null => {
           
            let stringPrenom = (c.value || '').trim();
           
            if (stringPrenom.length >= min) {
                return null;
            } else {
                return {'longueurMin': false};
            }
           
        };
    }
}