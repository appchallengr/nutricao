import { Component, OnInit, Inject } from '@angular/core';
import { Ativar } from 'src/app/core/models/Ativar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipientesService } from 'src/app/core/services/recipientes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-recipientes-active',
  templateUrl: './recipientes-active.component.html',
  styleUrls: ['./recipientes-active.component.css']
})
export class RecipientesActiveComponent implements OnInit {

  title: string;
  listErrors: any = [];
  ativar: Ativar = new Ativar();
  prescricaoForm: FormGroup;
  nome: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private recipienteService: RecipientesService,
    public dialogRef: MatDialogRef<RecipientesActiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.createForm();
    this.ativar.id = this.data.values.id;
    this.nome = this.data.values.nome;

    console.log("data",this.data);

    if (this.data.body.filterValue == "true") {
      this.title = "Deseja Inativar?"
      this.ativar.ativo = false;
    } else {
      this.title = "Deseja Ativar?";
      this.ativar.ativo = true;
    }
  }

  createForm() {
    this.prescricaoForm = this.formBuilder.group({
      justificativa: ['', [
        Validators.required
      ]],
      nome: ['', [

      ]]
    });
  }

  closeModal() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    this.loadingService.show();
    this.listErrors = [];
    if (this.prescricaoForm.valid) {

      this.recipienteService.patch(this.ativar).subscribe((data: any) => {
        this.ativar.ativo ?
          this.dialogRef.close({ event: 'ativo' })
          :
          this.dialogRef.close({ event: 'inativo' })
        this.loadingService.hide();
      }, error => {
        this.listErrors.push(error.error.errors);
        this.loadingService.hide();
      });

    }
  }

}
