import { AbstractControl, ValidatorFn } from '@angular/forms';
export class telephoneValidator {
    static telephoneValide(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            
            
            if (!c.value) {
                return {'telephoneInvalide' : true};
            }
            if (!/[0-9]+/.test(c.value)) {
                return {'telephoneInvalide' : true};
            }
            return null;
        };
    }

} 
