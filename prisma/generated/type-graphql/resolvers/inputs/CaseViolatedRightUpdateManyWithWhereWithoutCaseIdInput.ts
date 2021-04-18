import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseViolatedRightScalarWhereInput } from "../inputs/CaseViolatedRightScalarWhereInput";
import { CaseViolatedRightUpdateManyMutationInput } from "../inputs/CaseViolatedRightUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseViolatedRightUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseViolatedRightScalarWhereInput, {
    nullable: false
  })
  where!: CaseViolatedRightScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseViolatedRightUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseViolatedRightUpdateManyMutationInput;
}
