import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CasePkScalarWhereInput } from "../inputs/CasePkScalarWhereInput";
import { CasePkUpdateManyMutationInput } from "../inputs/CasePkUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CasePkUpdateManyWithWhereWithoutPpPendampingInput {
  @TypeGraphQL.Field(_type => CasePkScalarWhereInput, {
    nullable: false
  })
  where!: CasePkScalarWhereInput;

  @TypeGraphQL.Field(_type => CasePkUpdateManyMutationInput, {
    nullable: false
  })
  data!: CasePkUpdateManyMutationInput;
}
