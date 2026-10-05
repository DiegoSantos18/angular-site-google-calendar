import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CreateCalendar, googleCalendarPalette } from '../../../../core/models/calendar/calendar.model';

const CALENDAR_COLOR_NAMES: Record<string, string> = {
  '#ac725e': 'Castanho',
  '#d06b64': 'Vermelho claro',
  '#f83a22': 'Vermelho escuro',
  '#fa573c': 'Laranja',
  '#ff7537': 'Laranja claro',
  '#ffad46': 'Tangerina',
  '#42d692': 'Turquesa',
  '#16a765': 'Verde',
  '#7bd148': 'Verde-limão',
  '#b3dc6c': 'Verde amarelado',
  '#fbe983': 'Amarelo',
  '#fad165': 'Amarelo claro',
  '#92e1c0': 'Verde-água',
  '#9fe1e7': 'Ciano',
  '#9fc6e7': 'Azul claro',
  '#4986e7': 'Azul',
  '#9a9cff': 'Índigo',
  '#b99aff': 'Violeta',
  '#c2c2c2': 'Cinza',
  '#cabdbf': 'Cinza amarronzado',
  '#cca6ac': 'Rosa acinzentado',
  '#f691b2': 'Rosa',
  '#cd74e6': 'Magenta',
  '#a47ae2': 'Uva'
};

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

  readonly calendarColors = Object.entries(googleCalendarPalette).map(([color]) => ({
    color,
    label: CALENDAR_COLOR_NAMES[color] ?? color
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
    if (this.calendarForm.invalid) {
      this.calendarForm.markAllAsTouched();
      return;
    }

    const { summary, description, backgroundColor } = this.calendarForm.getRawValue();
    const trimmedSummary = summary?.trim() ?? '';
    if (!trimmedSummary) {
      this.calendarForm.controls.summary.setErrors({ required: true });
      return;
    }

    this.submitCalendar.emit({
      summary: trimmedSummary,
      description: description?.trim() || undefined,
      timeZone: 'America/Sao_Paulo',
      backgroundColor: backgroundColor ?? '#4986e7'
    });
  }
}
