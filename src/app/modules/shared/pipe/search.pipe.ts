import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(value: any, args?: any): any {

        if (!value) return null;
        if (!args) return value;

        args = args.toLowerCase();

        return value.filter(function (item) {
            // if (item.tipoValor) {
            //     return JSON.stringify(item.tipo).toLowerCase().includes(args);
            // } else if (item.tipo) {
            //     return JSON.stringify(item.nome).toLowerCase().includes(args);
            // } else if (item.descricao) {
            //     return JSON.stringify(item.descricao).toLowerCase().includes(args);
            // }
            if (item.tipo) {
                return JSON.stringify(item.nome).toLowerCase().includes(args);
            }


        });
    }
}