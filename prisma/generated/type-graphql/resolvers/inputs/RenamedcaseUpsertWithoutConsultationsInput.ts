import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateWithoutConsultationsInput } from "../inputs/RenamedcaseCreateWithoutConsultationsInput";
import { RenamedcaseUpdateWithoutConsultationsInput } from "../inputs/RenamedcaseUpdateWithoutConsultationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpsertWithoutConsultationsInput {
  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutConsultationsInput, {
    nullable: false
  })
  update!: RenamedcaseUpdateWithoutConsultationsInput;

  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutConsultationsInput, {
    nullable: false
  })
  create!: RenamedcaseCreateWithoutConsultationsInput;
}
