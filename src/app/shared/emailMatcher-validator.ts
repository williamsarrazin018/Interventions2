import { AbstractControl, ValidatorFn } from '@angular/forms';
export class emailMatcherValidator {
    static courrielDifferents(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {

            if(c['controls'].courriel.value && c['controls'].courrielConfirmation.value) {
                return c['controls'].courriel.value ===
                c['controls'].courrielConfirmation.value ? null : { 'courrielsInvalides': true };
            }
            
        };
    }

    static courrielFormat(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            
            if ((!/[a-z0-9._%+-]+@[a-z0-9.-]+/.test(c['controls'].courriel.value)) && c['controls'].courriel.value) {
                return {'courrielsInvalides1' : true};
            }


        };
    }

    static courrielConfirmationFormat(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            

            if (!/[a-z0-9._%+-]+@[a-z0-9.-]+/.test(c['controls'].courrielConfirmation.value) && c['controls'].courrielConfirmation.value) {
                return {'courrielsInvalides2' : true};
            }

        };
    }

    static courrielNull(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            

            if (!c['controls'].courriel.value ||
                !c['controls'].courrielConfirmation.value) {
                return null;
            }
           
        };
    }

} 
