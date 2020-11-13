import { Component, OnInit, Inject } from '@angular/core';
import { Ativar } from 'src/app/core/models/Ativar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalProducaoService } from 'src/app/core/services/local-producao-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-local-producao-active',
  templateUrl: './local-producao-active.component.html',
  styleUrls: ['./local-producao-active.component.css']
})
export class LocalProducaoActiveComponent implements OnInit {

  title: string;
  listErrors: any = [];
  ativar: Ativar = new Ativar();
  prescricaoForm: FormGroup;
  nome: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private localProducaoService: LocalProducaoService,
    public dialogRef: MatDialogRef<LocalProducaoActiveComponent>,
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
      nome: [this.nome, [

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

      this.localProducaoService.patch(this.ativar).subscribe((data: any) => {
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
