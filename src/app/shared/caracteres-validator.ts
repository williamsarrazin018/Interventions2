import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierCaracteresValidator {
    static sansEspace(): ValidatorFn {
        return (c: AbstractControl): {[key: string]: boolean } | null => {
            if ((c.value || '').trim().length === 0) {
                return {'valide': false};
            } else {
                return {'valide': true};
            }
           
        };
    }
}