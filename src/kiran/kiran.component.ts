import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-kiran',
  templateUrl: './kiran.component.html',
  styleUrls: ['./kiran.component.css']
})
export class KiranComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      last_name: [''],
      first_name: [''],
      is_student: [false], // Set the initial value of is_student as false (unchecked)
      class: [{ value: '', disabled: true }], // Set class as disabled
    });
  }

  onStduentValueChange(event: any) {
    if (event) {
      this.myForm.get('class')?.enable()
    } else {
      this.myForm.get('class')?.disable()

    }
  }

}