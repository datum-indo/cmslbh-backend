import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateNestedOneWithoutActivitieslitInput } from "../inputs/CaseProgressActivityCreateNestedOneWithoutActivitieslitInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  kodeMt?: string | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateNestedOneWithoutActivitieslitInput, {
    nullable: true
  })
  caseProgressActivityId?: CaseProgressActivityCreateNestedOneWithoutActivitieslitInput | undefined;
}
