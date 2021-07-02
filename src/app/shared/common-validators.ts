import { AbstractControl, ValidationErrors } from '@angular/forms';


export function shipmentValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) {
        return null
    }
    const check = (value === 'economy') || (value === 'express') ? null : { shipmentValidator: true }

    return check 
}
