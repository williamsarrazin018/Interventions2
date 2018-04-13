import { ValidatorFn } from "@angular/forms/src/directives/validators";

export class VerifierNombresValidator {
    static sansEspace(): ValidatorFn {
        return (): { [key: string]: boolean | null => {
            return {'sansEspace': true};
        };
    }
}