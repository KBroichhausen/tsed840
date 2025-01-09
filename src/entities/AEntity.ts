import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { BEntity } from "./BEntity.js";
import { Property, Required } from "@tsed/schema";

@Entity("aentity")
export class AEntity extends BaseEntity {
    @PrimaryGeneratedColumn() public id: number;

    @OneToOne(() => BEntity) public bEntity: Relation<BEntity>;

    @Required()
    @Property(Number)
    public random: number;
}
