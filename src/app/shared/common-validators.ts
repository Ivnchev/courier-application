import { AbstractControl, ValidationErrors } from '@angular/forms';


export function shipmentTypeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) {
        return null
    }
    const check = (value === 'economy') || (value === 'express') ? null : { shipmentValidator: true }

    return check
}


export function shipmentSize(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) {
        return null
    }

    const check = /^\d{2,3}\/\d{2,3}\/\d{2,3}$/.test(value) ? null : { shipmentSize: true }
    return check
}

export function shipmentWeight(control: AbstractControl): ValidationErrors | null {
    const value = control.value
    if (!value) { return null }
    const check = /^[0-9]{1,3}$/.test(value) ? null : { shipmentWeight: true }
    return check
}
