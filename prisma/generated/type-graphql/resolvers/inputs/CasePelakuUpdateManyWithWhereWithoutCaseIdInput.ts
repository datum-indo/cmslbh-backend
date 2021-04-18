import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePelakuScalarWhereInput } from "../inputs/CasePelakuScalarWhereInput";
import { CasePelakuUpdateManyMutationInput } from "../inputs/CasePelakuUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePelakuUpdateManyWithWhereWithoutCaseIdInput {
  @TypeGraphQL.Field(_type => CasePelakuScalarWhereInput, {
    nullable: false
  })
  where!: CasePelakuScalarWhereInput;

  @TypeGraphQL.Field(_type => CasePelakuUpdateManyMutationInput, {
    nullable: false
  })
  data!: CasePelakuUpdateManyMutationInput;
}
