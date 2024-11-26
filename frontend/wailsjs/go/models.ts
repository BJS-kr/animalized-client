export namespace message {
	
	export class Input {
	    user_id?: string;
	    Kind: any;
	
	    static createFrom(source: any = {}) {
	        return new Input(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.user_id = source["user_id"];
	        this.Kind = source["Kind"];
	    }
	}

}

