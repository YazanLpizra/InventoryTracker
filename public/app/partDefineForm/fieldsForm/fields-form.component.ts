import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fields-form',
    templateUrl: 'app/partDefineForm/fieldsForm/fields-form.component.html'
})
export class FieldsFormComponent {
    @Input('group')
    public fieldsForm: FormGroup;
}
