import { Component, OnInit, Inject } from '@angular/core';
import { Ativar } from 'src/app/core/models/Ativar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoriaDietaService } from 'src/app/core/services/categoria-dieta-service';

@Component({
  selector: 'app-categoria-dieta-active',
  templateUrl: './categoria-dieta-active.component.html',
  styleUrls: ['./categoria-dieta-active.component.css']
})
export class CategoriaDietaActiveComponent implements OnInit {

  title: string;
  listErrors: any = [];
  ativar: Ativar = new Ativar();
  prescricaoForm: FormGroup;
  nome: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private categoriaDietaService: CategoriaDietaService,
    public dialogRef: MatDialogRef<CategoriaDietaActiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.createForm();
    this.ativar.id = this.data.values.id;
    this.nome = this.data.values.descricao;

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
      descricao: ['', [

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

      this.categoriaDietaService.patch(this.ativar).subscribe((data: any) => {
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
