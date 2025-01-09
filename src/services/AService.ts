import { Injectable } from "@tsed/di";
import { $log } from "@tsed/logger";

export abstract class IAService {
    public abstract doSomething(): void;
    public abstract returnSomething(): string;

}

export const IAServiceToken: unique symbol = Symbol("IAService");


@Injectable({ provide: IAServiceToken })
export class AService extends IAService {
    private something: string = "Unmodified";

    public $beforeInit(): void {
        $log.debug("$beforeInit Hook: I'm not called anymore :(");
	}

    public $onInit(): void {
        $log.debug("$onInit Hook: I get still called :)");
	}

    public doSomething(): void {
        $log.debug("I'm doing something from AService");
        this.something = "Modified";
    }

    public returnSomething(): string {
        return this.something;
    }

}