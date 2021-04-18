import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityLitScalarWhereInput } from "../inputs/CaseProgressActivityLitScalarWhereInput";
import { CaseProgressActivityLitUpdateManyMutationInput } from "../inputs/CaseProgressActivityLitUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityLitUpdateManyWithWhereWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityLitScalarWhereInput, {
    nullable: false
  })
  where!: CaseProgressActivityLitScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityLitUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityLitUpdateManyMutationInput;
}
