import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierGroupboxValidator {
    static selectedType(): ValidatorFn {
        return (c: AbstractControl): {[key: string]: boolean } | null => {
            if (c.value.length === 0) {
                return {'selectedType': false};
            } else {
                return null;
            }
           
        };
    }
}