import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput, {
    nullable: true
  })
  caseProgressActivityId?: CaseProgressActivityCreateNestedOneWithoutActivitiesnonlitInput | undefined;
}
