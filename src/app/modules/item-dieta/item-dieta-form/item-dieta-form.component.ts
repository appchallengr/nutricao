import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemDieta } from 'src/app/core/models/ItemDieta';
import { ItemDietaService } from 'src/app/core/services/item-dieta-service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-item-dieta-form',
  templateUrl: './item-dieta-form.component.html',
  styleUrls: ['./item-dieta-form.component.css']
})
export class ItemDietaFormComponent implements OnInit {

  body: Body;
  form: FormGroup;
  item: ItemDieta = new ItemDieta();
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
    private itemDietaService: ItemDietaService,
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

      this.itemDietaService.getId(id).subscribe((data: any) => {
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
      if (this.item.id) {
        this.itemDietaService.put(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/item-dieta', { state: { updated: true } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.itemDietaService.add(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/item-dieta', { state: { success: true } });
          this.loadingService.hide();
        }, error => {
          this.listErrors.push(error.error.errors);
          this.loadingService.hide();
        });
      }
    }

  }

  checkEqual(){
    if(JSON.stringify(this.item) == localStorage.getItem('dataBeforeChanges')){
      return true;
    }else{
      return false;
    }
  }

  back() {
    if(!this.item.ativo && this.acao != 'novo'){
      this.router.navigateByUrl('/item-dieta', { state: { inativo: true } });
    }else{
      this.router.navigate(['/item-dieta']);
    }
  }

}
