import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let dialogRef: { close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    dialogRef = { close: vi.fn() };
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Excluir evento?',
            message: 'O evento será removido.',
            confirmLabel: 'Excluir evento',
            confirmColor: 'warn',
            icon: 'delete_forever'
          }
        },
        { provide: MatDialogRef, useValue: dialogRef }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    fixture.detectChanges();
  });

  it('should show the confirmation copy and close with the selected action', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    expect(fixture.nativeElement.textContent).toContain('Excluir evento?');
    expect(fixture.nativeElement.textContent).toContain('O evento será removido.');
    buttons[0].click();
    expect(dialogRef.close).toHaveBeenLastCalledWith(false);
    buttons[1].click();
    expect(dialogRef.close).toHaveBeenLastCalledWith(true);
  });
});
