import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityNonlitScalarWhereInput } from "../inputs/CaseProgressActivityNonlitScalarWhereInput";
import { CaseProgressActivityNonlitUpdateManyMutationInput } from "../inputs/CaseProgressActivityNonlitUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityNonlitUpdateManyWithWhereWithoutCaseProgressActivityIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitScalarWhereInput, {
    nullable: false
  })
  where!: CaseProgressActivityNonlitScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityNonlitUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityNonlitUpdateManyMutationInput;
}
