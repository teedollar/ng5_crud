import {Pipe, PipeTransform} from '@angular/core';


@Pipe(
	{
		name: 'filter'
	}
)
export class FilterPipe implements PipeTransform
{
	transform(items: any[], goalTextSearch: string): any[] 
	{
		
		if (goalTextSearch) {
			goalTextSearch = goalTextSearch.toLowerCase();
			return items.filter(resp => {
			return resp.toLowerCase().includes(goalTextSearch);
		});
		}
		else{
			return items;
		}
		
	}
	
}

/*

@Pipe({name: 'filter'})
export class FilterPipe {
	transform(value, args) {
		//args.toLowerCase();
		//value.toLowerCase();
		if (!args[0]) {
			return value;
		} else if (value) {
			return value.filter(item => {
				for (let key in item) {
					if ((typeof item[key] == 'string' || item[key] instanceof String) && 
						(item[key].indexOf(args[0]) !== -1)) {
						return true
					}
				}
			});
		}
	}
}

*/

