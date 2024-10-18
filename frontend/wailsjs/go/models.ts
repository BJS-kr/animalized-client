export namespace message {
	
	export class Position {
	    x?: number;
	    y?: number;
	
	    static createFrom(source: any = {}) {
	        return new Position(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.x = source["x"];
	        this.y = source["y"];
	    }
	}
	export class UserState {
	    // Go type: Position
	    position?: any;
	    score?: number;
	
	    static createFrom(source: any = {}) {
	        return new UserState(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.position = this.convertValues(source["position"], null);
	        this.score = source["score"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Input {
	    type?: number;
	    user_id?: string;
	    direction?: number;
	    context?: number;
	    prev_context?: number;
	    user_states?: UserState[];
	    hit_range?: number[];
	    hit_user_id?: string;
	
	    static createFrom(source: any = {}) {
	        return new Input(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.type = source["type"];
	        this.user_id = source["user_id"];
	        this.direction = source["direction"];
	        this.context = source["context"];
	        this.prev_context = source["prev_context"];
	        this.user_states = this.convertValues(source["user_states"], UserState);
	        this.hit_range = source["hit_range"];
	        this.hit_user_id = source["hit_user_id"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace net {
	
	export class TCPConn {
	
	
	    static createFrom(source: any = {}) {
	        return new TCPConn(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}

}

