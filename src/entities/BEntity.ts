import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { AEntity } from "./AEntity.js";
import { Property, Required } from "@tsed/schema";

@Entity("bentity")
export class BEntity extends BaseEntity  {
    @PrimaryGeneratedColumn() public id: number;
    
    @Property(() => AEntity) // works but not with @Required() above only with @Required() below
    @Required()
    // @Property(AEntity) doesn't work
    @OneToOne(() => AEntity) @JoinColumn() public aEntity: Relation<AEntity>;
}
