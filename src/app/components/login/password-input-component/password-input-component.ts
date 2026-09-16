import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-component/icon-component';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input-component.html',
  styleUrl: './password-input-component.css',
  standalone: true,
  imports: [CommonModule, IconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() label = 'Senha';
  @Input() inputId = 'senha';

  visible = false;
  value = '';
  disabled = false;

  onChange = (_: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    console.log('Recuperar senha');
  }
}