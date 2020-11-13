import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Recipiente } from 'src/app/core/models/Recipiente';
import { RecipientesService } from 'src/app/core/services/recipientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-recipientes-form',
  templateUrl: './recipientes-form.component.html',
  styleUrls: ['./recipientes-form.component.css']
})
export class RecipientesFormComponent implements OnInit {

  body: Body;
  form: FormGroup;
  item: Recipiente = new Recipiente();
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
    private recipienteService: RecipientesService,
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

      this.recipienteService.getId(id).subscribe((data: any) => {
        this.loadingService.hide();
        this.item = data.data;
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
      this.item = JSON.parse(localStorage.getItem('dataBeforeChanges'));
    } else {
      this.form = this.formBuilder.group({
        nome: ['', [
          Validators.required,
        ]]
      });
    }

  }

  checkEqual(){
    if(JSON.stringify(this.item) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }

  onSubmit() {

    console.log(this.item);
    console.log(JSON.parse(localStorage.getItem('dataBeforeChanges')));

    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.item.id) {
        this.recipienteService.put(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/recipiente', { state: { updated: true } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.recipienteService.add(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/recipiente', { state: { success: true } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }

  }

  back() {
    if(!this.item.ativo && this.acao != 'novo'){
      console.log("voltar inativo");
      this.router.navigateByUrl('/recipiente', { state: { inativo: true } });
    }else{
      this.router.navigate(['/recipiente']);
    }
  }

}
