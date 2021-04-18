import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitiesnonlitInput";
import { CaseProgressActivityUpdateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityUpdateWithoutActivitiesnonlitInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpsertWithoutActivitiesnonlitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateWithoutActivitiesnonlitInput, {
    nullable: false
  })
  update!: CaseProgressActivityUpdateWithoutActivitiesnonlitInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitiesnonlitInput, {
    nullable: false
  })
  create!: CaseProgressActivityCreateWithoutActivitiesnonlitInput;
}
