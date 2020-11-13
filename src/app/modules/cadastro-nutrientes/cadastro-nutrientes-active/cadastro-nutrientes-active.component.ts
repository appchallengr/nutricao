import { Component, OnInit, Inject } from '@angular/core';
import { Ativar } from 'src/app/core/models/Ativar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroNutrientesService } from 'src/app/core/services/cadastro-nutrientes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from 'src/app/core/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-nutrientes-active',
  templateUrl: './cadastro-nutrientes-active.component.html',
  styleUrls: ['./cadastro-nutrientes-active.component.css']
})
export class CadastroNutrientesActiveComponent implements OnInit {

  title: string;
  listErrors: any = [];
  ativar: Ativar = new Ativar();
  prescricaoForm: FormGroup;
  nutriente: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private cadastroNutrientesService: CadastroNutrientesService,
    public dialogRef: MatDialogRef<CadastroNutrientesActiveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.createForm();
    this.ativar.id = this.data.values.id;
    this.nutriente = this.data.values.nutriente;


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
      nutriente: ['', [

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

      this.cadastroNutrientesService.patch(this.ativar).subscribe((data: any) => {
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
