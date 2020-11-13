import { Component, OnInit } from '@angular/core';
import { LocalProducao } from 'src/app/core/models/LocalProducao';
import { LocalProducaoService } from 'src/app/core/services/local-producao-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-local-producao-form',
  templateUrl: './local-producao-form.component.html',
  styleUrls: ['./local-producao-form.component.css']
})
export class LocalProducaoFormComponent implements OnInit {

  body: Body;
  form: FormGroup;
  localProducao: LocalProducao = new LocalProducao();
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
    private localProducaoService: LocalProducaoService,
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

      this.localProducaoService.getId(id).subscribe((data: any) => {
        console.log("data",data);
        this.loadingService.hide();
        this.localProducao = data.data;
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
      this.localProducao = JSON.parse(localStorage.getItem('dataBeforeChanges'));
    } else {
      this.form = this.formBuilder.group({
        nome: ['', [
          Validators.required,
        ]]
      });
    }

  }


  checkEqual(){
    if(JSON.stringify(this.localProducao) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }


  onSubmit() {


    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.localProducao.id) {
        this.localProducaoService.put(this.localProducao).subscribe((data: any) => {
          this.router.navigateByUrl('/local-producao', { state: { updated: true } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.localProducaoService.add(this.localProducao).subscribe((data: any) => {
          this.router.navigateByUrl('/local-producao', { state: { success: true } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }

  }

  back() {
    if(!this.localProducao.ativo && this.acao != 'novo'){
      this.router.navigateByUrl('/local-producao', { state: { inativo: true } });
    }else{
      this.router.navigate(['/local-producao']);
    }
  }

}
