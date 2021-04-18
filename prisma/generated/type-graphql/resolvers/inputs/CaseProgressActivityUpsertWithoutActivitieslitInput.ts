import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitieslitInput";
import { CaseProgressActivityUpdateWithoutActivitieslitInput } from "../inputs/CaseProgressActivityUpdateWithoutActivitieslitInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpsertWithoutActivitieslitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateWithoutActivitieslitInput, {
    nullable: false
  })
  update!: CaseProgressActivityUpdateWithoutActivitieslitInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitieslitInput, {
    nullable: false
  })
  create!: CaseProgressActivityCreateWithoutActivitieslitInput;
}
