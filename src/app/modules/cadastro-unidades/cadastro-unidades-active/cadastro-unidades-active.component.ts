import { Component, OnInit, Inject } from '@angular/core';
import { Ativar } from 'src/app/core/models/Ativar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from 'src/app/core/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-unidades-active',
  templateUrl: './cadastro-unidades-active.component.html',
  styleUrls: ['./cadastro-unidades-active.component.css']
})
export class CadastroUnidadesActiveComponent implements OnInit {

  title: string;
  listErrors: any = [];
  ativar: Ativar = new Ativar();
  prescricaoForm: FormGroup;
  unidade: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUnidadesService: CadastroUnidadesService,
    public dialogRef: MatDialogRef<CadastroUnidadesActiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.createForm();
    this.ativar.id = this.data.values.id;
    this.unidade = this.data.values.unidade;


    if (this.data.values.ativo == true) {
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
      unidade: ['', [

      ]]
    });
  }

  closeModal() {  
    Swal.fire({
      title: 'Você deseja cancelar?',
      icon: 'warning',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.dialogRef.close({ event: 'Cancel' });
      }        
    })
  }
  

  getLength(){
    if(this.ativar.justificativa){
      return this.ativar.justificativa.length;
    }else{
      return 0;
    }
    
  }

  onSubmit() {
    this.loadingService.show();
    this.listErrors = [];
    if (this.prescricaoForm.valid) {

      this.cadastroUnidadesService.patch(this.ativar).subscribe((data: any) => {
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
