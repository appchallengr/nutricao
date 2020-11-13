import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CategoriaDieta } from 'src/app/core/models/CategoriaDieta';
import { CategoriaDietaService } from 'src/app/core/services/categoria-dieta-service';

@Component({
  selector: 'app-categoria-dieta-form',
  templateUrl: './categoria-dieta-form.component.html',
  styleUrls: ['./categoria-dieta-form.component.css']
})
export class CategoriaDietaFormComponent implements OnInit {

  body: Body;
  form: FormGroup;
  categoria: CategoriaDieta = new CategoriaDieta();
  loading: boolean = false;
  listErrors: any = [];
  idEdit: string;
  acao: string;
  onlyView: boolean;
  title: string;
  type: string = "Estatica";
  num:number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaDietaService: CategoriaDietaService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.num = navigation.extras.state ? navigation.extras.state.size : 0;
  }

  /*
  ngOnInit() {
    this.createForm();
    this.addCheckboxes();
  }*/

  ngOnInit() {
    this.createForm();

    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.idEdit = id;
      this.acao = params['acao'];
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

      this.categoriaDietaService.getId(id).subscribe((data: any) => {
        this.loadingService.hide();
        this.categoria = data.data;
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
      this.categoria = JSON.parse(localStorage.getItem('dataBeforeChanges'));
    } else {
      this.form = this.formBuilder.group({
        descricao: ['', [
          Validators.required,
        ]]
      });
    }

  }


  onSubmit() {


    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.categoria.id) {
        this.categoriaDietaService.put(this.categoria).subscribe((data: any) => {
          this.router.navigateByUrl('/categoria-dieta', { state: { updated: true } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.categoriaDietaService.add(this.categoria).subscribe((data: any) => {
          this.router.navigateByUrl('/categoria-dieta', { state: { success: true } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }

  }

  back() {
    if(!this.categoria.ativo && this.acao != 'novo'){
      this.router.navigateByUrl('/categoria-dieta', { state: { inativo: true } });
    }else{
      this.router.navigate(['/categoria-dieta']);
    }
  }

  checkEqual(){
    if(JSON.stringify(this.categoria) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }

}
