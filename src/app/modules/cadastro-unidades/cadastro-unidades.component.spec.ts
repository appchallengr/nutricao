import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnidadesComponent } from './cadastro-unidades.component';
import { SharedModule } from '../shared/shared.module';
import { CadastroUnidadesService } from 'src/app/core/services/cadastro-unidades.service';

describe('CadastroUnidadesComponent', () => {
  let service: CadastroUnidadesService;
  let body = {
    page: 1,
    size: 10,
    ativos: "",
    orderProperty: "Id",
    orderCrescent: true,
    filterProperty: "",
    filterValue: ""
  }
  
  let searchValue = "";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUnidadesComponent ],
      imports: [ SharedModule ],
      providers: [ CadastroUnidadesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(CadastroUnidadesService)
  });

  it('Should retrieve data from the API', () => {
    this.cadastroUnidadesService.getAll(this.body, this.searchValue).subscribe((data: any) => {
      console.log("data",data);
      expect(data.result).toBe(true);
    });
  });
});
