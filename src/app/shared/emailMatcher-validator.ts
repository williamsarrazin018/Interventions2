import { AbstractControl, ValidatorFn } from '@angular/forms';
export class emailMatcherValidator {
    static courrielDifferents(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            

            if (!c['controls'].courriel.value ||
                !c['controls'].courrielConfirmation.value) {
                return null;
            }
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+/.test(c['controls'].courriel.value)) {
                return {'courrielsInvalides' : true};
            }
            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+/.test(c['controls'].courrielConfirmation.value)) {
                return {'courrielsInvalides' : true};
            }
            return c['controls'].courriel.value ===
                c['controls'].courrielConfirmation.value ? null : { 'courrielsInvalides': true };
        };
    }

} 
