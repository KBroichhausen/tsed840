import {Controller} from "@tsed/di";
import {Get, Returns} from "@tsed/schema";
import { sqliteDatasource } from "src/datasources/SqliteDatasource.js";
import { BEntity } from "src/entities/index.js";
import { EntityTarget } from "typeorm";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }

  @Get("/data")
	@(Returns(200, Array).Of(BEntity))
	public async getAEntities(): Promise<BEntity[]> {
		const aga8dc = await sqliteDatasource.getRepository<BEntity>(BEntity as EntityTarget<BEntity>).find();
		return aga8dc;
	}
}
