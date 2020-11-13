import { Component, OnInit } from '@angular/core';
import { Nutrientes } from 'src/app/core/models/Nutrientes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroNutrientesService } from 'src/app/core/services/cadastro-nutrientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import Swal from 'sweetalert2';
import { Body } from 'src/app/core/models/Body';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';
import { Sigla } from 'src/app/core/models/Sigla';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-nutrientes-form',
  templateUrl: './cadastro-nutrientes-form.component.html',
  styleUrls: ['./cadastro-nutrientes-form.component.css']
})
export class CadastroNutrientesFormComponent implements OnInit {

  form: FormGroup;
  nutrientes: Nutrientes = new Nutrientes();
  loading: boolean = false;
  siglas: any;
  listErrors: any = [];
  idEdit: string;
  acao: string;
  onlyView: boolean;
  title: string;
  num:number = 0;

  errorNutriente:boolean = false;
  errorSigla:boolean = false;
  submited: boolean = false;
  bodyMedidas: Body;
  body: any = [];
  searchValue: any = [];
  showActive:boolean;
  showInactive:boolean;
  fontesNutriente: string;
  listFontes:any = [];
  listaGeral:any = [];
  siglasList$: Observable<Sigla[]>;
  selectedSiglaId = '5a15b13c36e7a7f00cf0d7cb';

  

  constructor(
    private formBuilder: FormBuilder,
    private cadastroNutrientesService: CadastroNutrientesService,
    private router: Router,
    private route: ActivatedRoute,
    private cadastroUnidadesService: CadastroUnidadesService,
    private loadingService: LoadingService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.num = navigation.extras.state ? navigation.extras.state.size : 0;
    this.body = navigation.extras.state ? navigation.extras.state.body : false;
    this.searchValue = navigation.extras.state ? navigation.extras.state.searchValue : false;
    this.showActive = navigation.extras.state ? navigation.extras.state.showActive : true;
    this.showInactive = navigation.extras.state ? navigation.extras.state.showInactive : false;
    this.bodyMedidas =  {
      page: 1,
      size: 10,
      ativos: "",
      orderProperty: "Unidade",
      orderCrescent: true,
      filterProperty: "ativo",
      filterValue: true
    };
  }

  ngOnInit() {
    this.createForm();
    this.cadastroUnidadesService.getAtivos().subscribe((data: any) => {
      console.log("data",data);
      let result = data;
      this.siglas = result;
      this.siglasList$ = result;
      console.log("result", result);
    });

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

      this.cadastroNutrientesService.getId(id).subscribe((data: any) => {
        console.log("chamoo",data);
        this.loadingService.hide();
        this.nutrientes = data.data;
        localStorage.setItem('dataBeforeChanges', JSON.stringify(data.data));
        this.cadastroNutrientesService.getFontesNutriente(this.nutrientes.id).subscribe((value: any) => {
          
          console.log("value",value);
          this.listFontes = value.data;
          this.listFontes.map((e)=>{
            this.listaGeral.push(e.nome.toUpperCase()); 
          })
          
          
          this.listFontes.sort(function (a, b) {
            if (a.nome > b.nome) return 1;
            else if (a.nome < b.nome) return -1;
            else return 0;
          });
        });
      });

      
    })
  }

  adicionarFonte(){
    var a = this.listaGeral.indexOf(this.fontesNutriente.toUpperCase());
    if(a < 0 && this.fontesNutriente){
      let value = {"nome": this.fontesNutriente};
      this.listFontes.push(value); 
      this.listaGeral.push(this.fontesNutriente.toUpperCase()); 
    }
    this.fontesNutriente = "";
    
    this.listFontes.sort(function (a, b) {
      if (a.nome > b.nome) return 1;
      else if (a.nome < b.nome) return -1;
      else return 0;
    });
  }

  remover(val){
    this.listFontes = this.listFontes.filter((e)=>{
      return e.nome !== val
    })
    this.listaGeral = this.listaGeral.filter((e)=>{
      return e !== val
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
      this.nutrientes = JSON.parse(localStorage.getItem('dataBeforeChanges'));
    } else {
      this.form = this.formBuilder.group({
        nutriente: ['', [
          Validators.required,
        ]],
        sigla: ['', [
          Validators.required,
        ]],
        fontesNutriente: ''
      });
    }

  }


  onSubmit() {
    this.nutrientes.fontesDoNutriente = this.listFontes;
    console.log("form",this.nutrientes);
    
    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.nutrientes.id) {
        this.cadastroNutrientesService.put(this.nutrientes).subscribe((data: any) => {
          this.router.navigateByUrl('/nutrientes', { state: { updated: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.cadastroNutrientesService.add(this.nutrientes).subscribe((data: any) => {
          this.router.navigateByUrl('/nutrientes', { state: { success: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }
    

  }

  return() {
    if(!this.nutrientes.ativo && this.acao != 'novo'){
      this.router.navigateByUrl('/nutrientes', { state: { inativo: true, body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
    }else{
      this.router.navigateByUrl('/nutrientes', { state: { body: this.body, searchValue: this.searchValue, showActive: this.showActive, showInactive: this.showInactive } });
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
    if(JSON.stringify(this.nutrientes) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }

  checkForm(){
    let errors = 0;
    this.submited = true;
    this.errorSigla = false;
    this.errorNutriente = false;

    if(!this.nutrientes.nutriente){
      this.errorNutriente = true;
      errors = 1;
    }

    if(!this.nutrientes.unidadeId){
      console.log("aqui");
      this.errorSigla = true;
      errors = 1;
    }

    if(errors == 0 && this.form.valid){
      this.onSubmit();
    }

    return false;
  }

}
