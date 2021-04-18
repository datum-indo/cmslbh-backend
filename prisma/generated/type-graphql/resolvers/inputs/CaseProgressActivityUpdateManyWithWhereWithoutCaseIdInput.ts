import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityScalarWhereInput } from "../inputs/CaseProgressActivityScalarWhereInput";
import { CaseProgressActivityUpdateManyMutationInput } from "../inputs/CaseProgressActivityUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityScalarWhereInput, {
    nullable: false
  })
  where!: CaseProgressActivityScalarWhereInput;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateManyMutationInput, {
    nullable: false
  })
  data!: CaseProgressActivityUpdateManyMutationInput;
}
