import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseModusScalarWhereInput } from "../inputs/CaseModusScalarWhereInput";
import { CaseModusUpdateManyMutationInput } from "../inputs/CaseModusUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseModusUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseModusScalarWhereInput, {
    nullable: false
  })
  where!: CaseModusScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseModusUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseModusUpdateManyMutationInput;
}
