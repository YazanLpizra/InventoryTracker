import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { Part } from '../parts/part';

@Component({
    selector: 'part-define-form',
    templateUrl: 'app/partDefineForm/part-define-form.component.html'
})
export class PartDefineFormComponent implements OnInit {

    public partDefineForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.partDefineForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            description: [''],
            ids: this._fb.group({
                uniqueId: ['', <any>Validators.required],
                manufacturerId: ['', <any>Validators.required],
                vendorId: ['', <any>Validators.required],
            })
        });
    }

    save(model: Part, isValid: boolean) {
        this.submitted = true;
        //check if model is valid
        //if valid, call api to save part
    }

    addField() {
        // add address to the list
        const control = <FormArray>this.partDefineForm.controls['fields'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        // remove address from the list
        const control = <FormArray>this.partDefineForm.controls['fields'];
        control.removeAt(i);
    }

    initAddress() {
        // initialize our address
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }
}