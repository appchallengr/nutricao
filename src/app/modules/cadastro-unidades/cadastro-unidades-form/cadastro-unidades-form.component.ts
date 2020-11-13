import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroUnidades } from 'src/app/core/models/CadastroUnidades';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-unidades-form',
  templateUrl: './cadastro-unidades-form.component.html',
  styleUrls: ['./cadastro-unidades-form.component.css']
})
export class CadastroUnidadesFormComponent implements OnInit {

  form: FormGroup;
  unidades: CadastroUnidades = new CadastroUnidades();
  loading: boolean = false;
  listErrors: any = [];
  idEdit: string;
  acao: string;
  onlyView: boolean;
  title: string;
  num:number = 0;

  errorUnidade:boolean = false;
  errorSigla:boolean = false;
  submited: boolean = false;

  body: any = [];
  searchValue: any = [];
  showActive:boolean;
  showInactive:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroUnidadesService: CadastroUnidadesService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.num = navigation.extras.state ? navigation.extras.state.size : 0;
    this.body = navigation.extras.state ? navigation.extras.state.body : false;
    this.searchValue = navigation.extras.state ? navigation.extras.state.searchValue : false;
    this.showActive = navigation.extras.state ? navigation.extras.state.showActive : true;
    this.showInactive = navigation.extras.state ? navigation.extras.state.showInactive : false;
  }

  ngOnInit() {
    this.createForm();

    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.idEdit = id;
      if(params['acao'] == 'novo'){
        this.acao = "Incluir";
      }else{
        this.acao = params['acao'];
      }
      
      if (this.acao == 'visualizar') {
        this.onlyView = true;
      }

      if (this.acao == 'editar') {
        this.loadingService.show();
        this.onlyView = true;
      }

      this.title = id ? 'Editar' : 'Criar';
      if (!id)
        return;

      this.cadastroUnidadesService.getId(id).subscribe((data: any) => {
        this.loadingService.hide();
        this.unidades = data.data;
        localStorage.setItem('dataBeforeChanges', JSON.stringify(data.data));
      });
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('dataBeforeChanges')
  }

  closeError(e){
    this.listErrors = [];
  }

  createForm() {

    if (this.acao === 'editar') {
      this.unidades = JSON.parse(localStorage.getItem('dataBeforeChanges'));
    } else {
      this.form = this.formBuilder.group({
        unidade: ['', [
          Validators.required,
        ]],
        sigla: ['', [
          Validators.required,
        ]]
      });
    }

  }


  onSubmit() {


    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.unidades.id) {
        this.cadastroUnidadesService.put(this.unidades).subscribe((data: any) => {
          this.router.navigateByUrl('/unidade-medida', { state: { updated: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.cadastroUnidadesService.add(this.unidades).subscribe((data: any) => {
          this.router.navigateByUrl('/unidade-medida', { state: { success: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }

  }

  return() {
    if(!this.unidades.ativo && this.acao != 'novo'){
      this.router.navigateByUrl('/unidade-medida', { state: { inativo: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
    }else{
      this.router.navigateByUrl('/unidade-medida', { state: { body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
    }
  }

  back(){
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
          this.return();
        }        
      })
  }

  checkEqual(){
    if(JSON.stringify(this.unidades) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }

  checkForm(){
    let errors = 0;
    this.submited = true;
    this.errorUnidade = false;
    this.errorSigla = false;

    if(!this.unidades.unidade){
      this.errorUnidade = true;
      errors = 1;
    }

    if(!this.unidades.sigla){
      this.errorSigla = true;
      errors = 1;
    }

    if(errors == 0 && this.form.valid){
      this.onSubmit();
    }

    return false;
  }

}
