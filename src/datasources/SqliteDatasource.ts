import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";
import * as myEntites from "src/entities/index.js";

export const SqliteDatasource = Symbol.for("SqliteDatasource");
export type SqliteDatasource = DataSource;
export const sqliteDatasource = new DataSource({
  type: "sqlite",
  entities: [...Object.values(myEntites)],
  database: "database.sqlite"
});


registerProvider<DataSource>({
  provide: SqliteDatasource,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await sqliteDatasource.initialize();

    logger.info("Connected with typeorm to database: Sqlite");

    return sqliteDatasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
