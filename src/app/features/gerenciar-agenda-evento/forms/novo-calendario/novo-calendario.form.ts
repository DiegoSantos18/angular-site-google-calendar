import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CreateCalendar, googleCalendarPalette } from '../../../../core/models/calendar/calendar.model';

@Component({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  selector: 'app-novo-calendario-form',
  styleUrl: './novo-calendario.form.scss',
  templateUrl: './novo-calendario.form.html'
})
export class NovoCalendarioForm {
  private readonly formBuilder = inject(FormBuilder);

  readonly calendarColors = Object.entries(googleCalendarPalette).map(([color, data]) => ({
    color,
    label: data.label
  }));

  @Input() loading = false;
  @Output() submitCalendar = new EventEmitter<CreateCalendar>();
  @Output() cancel = new EventEmitter<void>();

  readonly calendarForm = this.formBuilder.group({
    summary: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', Validators.maxLength(1000)],
    backgroundColor: ['#4986e7', Validators.required]
  });

  submit(): void {
    if (this.calendarForm.invalid || this.loading || this.calendarForm.disabled) {
      this.calendarForm.markAllAsTouched();
      return;
    }

    const { summary, description, backgroundColor } = this.calendarForm.getRawValue();
    const trimmedSummary = summary?.trim() ?? '';
    if (!trimmedSummary) {
      this.calendarForm.controls.summary.setErrors({ required: true });
      return;
    }

    this.calendarForm.disable();

    this.submitCalendar.emit({
      summary: trimmedSummary,
      description: description?.trim() || undefined,
      timeZone: 'America/Sao_Paulo',
      backgroundColor: backgroundColor ?? '#4986e7'
    });
  }
}
