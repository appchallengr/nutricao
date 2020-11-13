import { Component, OnInit } from '@angular/core';
import { ItemAbreviacao } from 'src/app/core/models/ItemAbreviacao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemAbreviacaoService } from 'src/app/core/services/item-abreviacao-service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-item-abreviacao-form',
  templateUrl: './item-abreviacao-form.component.html',
  styleUrls: ['./item-abreviacao-form.component.css']
})
export class ItemAbreviacaoFormComponent implements OnInit {

  body: Body;
  form: FormGroup;
  item: ItemAbreviacao = new ItemAbreviacao();
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
    private itemAbreviacaoService: ItemAbreviacaoService,
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

      this.itemAbreviacaoService.getId(id).subscribe((data: any) => {
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


    this.listErrors = [];
    this.loadingService.show();
    if (this.form.valid) {
      if (this.item.id) {
        this.itemAbreviacaoService.put(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/item-abreviacao', { state: { updated: true } });
          this.loadingService.hide();
        }, error => {
          this.loadingService.hide();
          this.listErrors.push(error.error.errors);
        });

      } else {
        this.itemAbreviacaoService.add(this.item).subscribe((data: any) => {
          this.router.navigateByUrl('/item-abreviacao', { state: { success: true } });
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
      this.router.navigateByUrl('/item-abreviacao', { state: { inativo: true } });
    }else{
      this.router.navigate(['/item-abreviacao']);
    }
  }

}
