import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitiesnonlitInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: false
  })
  where!: CaseProgressActivityWhereUniqueInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitiesnonlitInput, {
    nullable: false
  })
  create!: CaseProgressActivityCreateWithoutActivitiesnonlitInput;
}
