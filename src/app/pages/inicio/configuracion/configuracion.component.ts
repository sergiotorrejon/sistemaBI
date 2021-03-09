import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
//export class ConfiguracionComponent implements OnInit{
//  firstFormGroup: FormGroup;
//  secondFormGroup: FormGroup;
//  options: FormGroup;
//  hideRequiredControl = new FormControl(false);
//  floatLabelControl = new FormControl('auto');
//  constructor(fb: FormBuilder, private _formBuilder: FormBuilder){ 
//    this.options = fb.group({
//      hideRequired: this.hideRequiredControl,
//      floatLabel: this.floatLabelControl,
//    });
//  }
//  ngOnInit() {
//    this.firstFormGroup = this._formBuilder.group({
//      firstCtrl: ['', Validators.required]
//    });
//    this.secondFormGroup = this._formBuilder.group({
//      secondCtrl: ['', Validators.required]
//    });
//  }
//}

export class ConfiguracionComponent implements OnInit {
	firstFormGroup: FormGroup=Object.create(null);
	secondFormGroup: FormGroup=Object.create(null);

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}