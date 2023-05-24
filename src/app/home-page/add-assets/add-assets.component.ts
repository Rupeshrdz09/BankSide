import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})
export class AddAssetsComponent {
  selectedassets: any;
  formSubmitted = false;
  assetDetailone: Array<any>;
  assetDetailtwo: Array<any>;
  assetDetailthree: Array<any>;
  assetDetailfour: Array<any>;
  assetDetailfive: Array<any>;
  imageSrcone;
  imageSrctwo;
  imageSrcthree;
  imageSrcfour;
  imageSrcfive;
  imageSrcsix;
  imageSrcseven;
  imageSrceight;

  constructor(public fb: FormBuilder) { }

  addAssets = this.fb.group({
    assetType: ['', Validators.required],
    assetsDetails: this.fb.group({
    assetDetailone: ['', Validators.required],
    assetDetailtwo:['', Validators.required],
    assetDetailthree:['', Validators.required],
    assetDetailfour:['', Validators.required],
    assetDetailfive:['', Validators.required]
    }),
    assetDocuments: this.fb.group({
      documentOne:['', Validators.required],
      documentTwo:['', Validators.required],
      documentThree:['', Validators.required],
      documentFour:['', Validators.required],
    }),
    assetImages:this.fb.group({
      imageOne:['', Validators.required],
      imageTwo:['', Validators.required],
      imageThree:['', Validators.required],
      imageFour:['', Validators.required],
      imageFive:['', Validators.required],
      imageSix:['', Validators.required],
      imageSeven:['', Validators.required],
      imageEight:['', Validators.required],
    }),
    assetDiscrition:this.fb.group({
      description:['', Validators.required],
      loanLended:['', Validators.required,  Validators.pattern("^[0-9]*$")],
      loanRecovered:['', Validators.required, Validators.pattern("^[0-9]*$")],
      finalPrice:['', Validators.required,  Validators.pattern("^[0-9]*$") ]
    })
  });

  onSubmit() {
    this.formSubmitted = true;
    if (this.addAssets.valid){
      console.log(this.addAssets.value);
      return;
    }
    // console.log(this.addAssets.value);
  }


  Assets: Array<any> = [
    'Two Wheeler',
    'Four Whheeler',
    'commercial vechiles',
    'flats',
    'houses',
    'land',
    'sites',
    'industrial land with shed',
    'industrial land without shed',
    'industrial sites with shed',
    'industrial sites without shed',
  ];

  changeAssettype(event: any) {
    const value = event.target.value;
    // console.log(value);
    if (value == this.Assets[0]) {
      this.assetDetailone = ['Two Wheeler','Spain','USA','Mexico','India']
      this.assetDetailtwo = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailthree = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfive = ['Two Wheeler','Spain','USA','Mexico','India']
    }

    if (value == this.Assets[1]) {
      this.assetDetailone = ['Two Wheeler','Spain','USA','Mexico','India']
      this.assetDetailtwo = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailthree = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfive = ['Two Wheeler','Spain','USA','Mexico','India']
    }

    if (value == this.Assets[2]) {
      this.assetDetailone = ['Two Wheeler','Spain','USA','Mexico','India']
      this.assetDetailtwo = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailthree = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfour = ['Two Wheeler','Spain','USA','Mexico','India'],
      this.assetDetailfive = ['Two Wheeler','Spain','USA','Mexico','India']
    }
  }


readURLone(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrcone = reader.result;
        reader.readAsDataURL(file);
    }
}
readURLtwo(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrctwo = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLthree(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcthree = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLfour(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcfour = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLfive(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcfive = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLsix(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcsix = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLseven(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrcseven = reader.result;
      reader.readAsDataURL(file);
  }
}
readURLeight(event): void {
  if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrceight = reader.result;
      reader.readAsDataURL(file);
  }
}
}
