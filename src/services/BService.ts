import { Inject, Injectable } from "@tsed/di";
import { $log } from "@tsed/logger";
import { AService, IAService, IAServiceToken } from "./AService.js";

export abstract class IBService {
    public abstract doSomething(): void;

}

export const IBServiceToken: unique symbol = Symbol("IBService");


@Injectable({ provide: IBServiceToken })
export class BService extends IBService {
    // doesn't work anymore
    @Inject(IAServiceToken) private readonly aService: IAService;
    // still works
    // @Inject() private readonly aService: AService;

    public $onInit(): void {
        $log.debug(`aService is: ${this.aService}`);
        if (this.aService) {
            $log.debug(this.aService.returnSomething());
            this.aService.doSomething();
            $log.debug(this.aService.returnSomething());
        } else {
            $log.debug("No service available :(");
        }
	}

    public doSomething(): void {
        $log.info("I'm doing something from BService");
    }
}