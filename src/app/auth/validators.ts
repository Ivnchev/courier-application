import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) { return null }

    const check = /^[A-Za-z0-9]+@\w+\.\w{2,3}$/g.test(value)

    return check ? null : { emailValidator: true }
}

export function imageValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) { return null }
    const check = /^https?:\/\//g.test(value)

    return check ? null : { imageValidator: true }
}


export function rePassCheckFn(target: AbstractControl): ValidatorFn {
    return function rePassCheck(control: AbstractControl): ValidationErrors | null {
        return target.value === control.value ? null : { rePassCheck: true }
    }
}

export function genderValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string
    if (!value) {
        return null
    }
    const check = (value === 'male') || (value === 'female') ? null : { genderValidator: true }
    return check ? null : { genderValidator: true }
}
